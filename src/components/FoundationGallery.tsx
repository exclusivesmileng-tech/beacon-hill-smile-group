import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "foundation14.jpeg",
  "foundation1.jpeg",
  "foundation2.jpeg",
  "foundation3.jpeg",
  "foundation4.jpeg",
  "foundation5.jpeg",
  "foundation6.jpeg",
  "foundation7.jpeg",
  "foundation8.png",
  "foundation9.jpg",
  "foundation10.jpg",
  "foundation11.jpg",
  "foundation12.jpg",
  "foundation13.png",
];

const PER_PAGE = 3;

const FoundationGallery = () => {
  const [featured, setFeatured] = useState(images[0]);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(images.length / PER_PAGE);
  const thumbs = images.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div className="flex flex-col gap-3">
      {/* Featured image */}
      <div className="rounded-2xl overflow-hidden shadow-elevated relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={featured}
            src={`/images/foundation/${featured}`}
            alt="Beaconhill Foundation"
            loading="lazy"
            className="w-full object-cover aspect-[4/3]"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
      </div>

      {/* Thumbnails — 3 at once with prev/next */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-2 flex-1">
          <AnimatePresence mode="wait">
            {thumbs.map((file, i) => (
              <motion.button
                key={`${page}-${file}`}
                onClick={() => setFeatured(file)}
                className={`flex-1 rounded-xl overflow-hidden border-2 transition-colors ${
                  featured === file ? "border-accent" : "border-transparent"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.04 }}
              >
                <img
                  src={`/images/foundation/${file}`}
                  alt="Foundation outreach"
                  loading="lazy"
                  className="w-full object-cover aspect-square"
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 disabled:opacity-30 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Page dots */}
      <div className="flex justify-center gap-1.5">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === page ? "w-5 bg-accent" : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FoundationGallery;
