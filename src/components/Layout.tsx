import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import MobileNav from "./MobileNav";

const ease = [0.22, 1, 0.36, 1] as const;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease }}
        className={`flex-1 pb-mobile-nav lg:pb-0 ${isHome ? "" : "pt-16 md:pt-20"}`}
      >
        {children}
      </motion.main>
      <Footer />
      <FloatingActions />
      <MobileNav />
    </div>
  );
};

export default Layout;
