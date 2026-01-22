"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import HomePage from "./home/page";
import LoadingScreen from "./loading";
import { motion } from "framer-motion";

export default function Page() {
  const [showLoader, setShowLoader] = useState<boolean | null>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loadingPlayed = sessionStorage.getItem("homeLoaderPlayed");

    if (!loadingPlayed) {
      setShowLoader(true);
      sessionStorage.setItem("homeLoaderPlayed", "1");
    } else {
      setShowLoader(false);
      setShowContent(true);
    }
  }, []);

  const handleFinishLoading = () => {
    setShowLoader(false);
    setShowContent(true);
  };

  if (showLoader === null) return null;

  return (
    <>
      {showLoader && <LoadingScreen onFinish={handleFinishLoading} />}

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Navbar />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <HomePage />
          </motion.div>{" "}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Footer />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
