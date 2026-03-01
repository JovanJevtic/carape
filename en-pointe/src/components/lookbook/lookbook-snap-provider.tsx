"use client";

import { useEffect } from "react";

export function LookbookSnapProvider() {
  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollSnapType = "y proximity";

    return () => {
      html.style.scrollSnapType = "";
    };
  }, []);

  return null;
}
