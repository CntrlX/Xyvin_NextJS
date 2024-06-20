import UseSticky from "@/hooks/UseSticky";
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const { sticky }: { sticky: boolean } = UseSticky();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const [leftStyle, setLeftStyle] = useState<{ left: string }>({ left: "" });

  useEffect(() => {
    const updateLeftStyle = () => {
      const newLeftStyle = {
        left: window.innerWidth >= 768 ? "92.5%" : "77.5%",
      };
      setLeftStyle(newLeftStyle);
    };

    updateLeftStyle();
    window.addEventListener("resize", updateLeftStyle);
    return () => {
      window.removeEventListener("resize", updateLeftStyle);
    };
  }, []);

  return (
    <>
      <span className={`cs_scrollup ${sticky ? 'cs_scrollup_show' : ''}`} onClick={scrollTop} style={leftStyle}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z" fill="currentColor"></path>
        </svg>
      </span>
    </>
  );
};

export default ScrollToTop;
