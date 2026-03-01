"use client";

import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ImageZoomLensProps {
  src: string;
  alt: string;
  lensSize?: number;
  zoomLevel?: number;
  children: React.ReactNode;
  className?: string;
}

export function ImageZoomLens({
  src,
  alt,
  lensSize = 150,
  zoomLevel = 6,
  children,
  className,
}: ImageZoomLensProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [bgPos, setBgPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Position lens centered on cursor
      setLensPos({
        x: x - lensSize / 2,
        y: y - lensSize / 2,
      });

      // Calculate background position for zoomed image
      const bgX = (x / rect.width) * 100;
      const bgY = (y / rect.height) * 100;
      setBgPos({ x: bgX, y: bgY });
    },
    [lensSize]
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {children}

      {/* Zoom lens */}
      {isHovering && (
        <div
          className="pointer-events-none absolute z-30 rounded-full border border-gold/60 shadow-lg"
          style={{
            width: lensSize,
            height: lensSize,
            left: lensPos.x,
            top: lensPos.y,
            backgroundImage: `url(${src})`,
            backgroundSize: `${zoomLevel * 100}% ${zoomLevel * 100}%`,
            backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
            backgroundRepeat: "no-repeat",
            opacity: isHovering ? 1 : 0,
            transform: isHovering ? "scale(1)" : "scale(0.8)",
            transition: "opacity 200ms ease, transform 200ms cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: "0 0 0 1px rgba(201, 185, 154, 0.3), 0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
