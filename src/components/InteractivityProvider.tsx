"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import MouseGradientBackground from "./MouseGradientBackground";

export default function InteractivityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 2. Custom Cursor initialization for desktop
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (mediaQuery.matches) {
      setIsVisible(true);
    }

    let mouseX = 0;
    let mouseY = 0;
    let ballX = 0;
    let ballY = 0;
    const speed = 0.15; // lerp speed

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const updatePosition = () => {
      ballX += (mouseX - ballX) * speed;
      ballY += (mouseY - ballY) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${ballX}px`;
        cursorRef.current.style.top = `${ballY}px`;
      }
      requestAnimationFrame(updatePosition);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive-hover")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    let animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Sleek Canvas & Grid Ambient Background */}
      <MouseGradientBackground />

      <div className="relative z-10">{children}</div>

      {isVisible && (
        <>
          <div
            ref={cursorRef}
            className={`custom-cursor ${
              isHovered
                ? "scale-150 bg-accent-gold/25 border-accent-gold shadow-[0_0_25px_rgba(242,183,5,0.6)]"
                : ""
            }`}
          />
          <div ref={dotRef} className="custom-cursor-dot" />
        </>
      )}
    </>
  );
}
