"use client";

import { useEffect } from "react";

export function LookbookSnapProvider() {
  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollSnapType = "y proximity";
    html.style.scrollBehavior = "smooth";

    return () => {
      html.style.scrollSnapType = "";
      html.style.scrollBehavior = "";
    };
  }, []);

  return null;
}
