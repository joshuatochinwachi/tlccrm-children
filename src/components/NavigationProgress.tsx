"use client";

import { useEffect, useState, useTransition, createContext, useContext } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type NavigationContextType = {
  startLoading: () => void;
  stopLoading: () => void;
  isLoading: boolean;
};

const NavigationContext = createContext<NavigationContextType>({
  startLoading: () => {},
  stopLoading: () => {},
  isLoading: false,
});

export const useNavigationProgress = () => useContext(NavigationContext);

export default function NavigationProgress({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [, startTransition] = useTransition();

  const startLoading = () => {
    setIsLoading(true);
    setProgress(25);
  };

  const stopLoading = () => {
    setProgress(100);
    setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 250);
  };

  // Reset/stop loading whenever route changes finish
  useEffect(() => {
    stopLoading();
  }, [pathname, searchParams]);

  // Animate progress incrementally while loading
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading && progress < 90) {
      timer = setTimeout(() => {
        setProgress((prev) => {
          if (prev < 40) return prev + 15;
          if (prev < 70) return prev + 8;
          if (prev < 88) return prev + 3;
          return prev;
        });
      }, 150);
    }
    return () => clearTimeout(timer);
  }, [isLoading, progress]);

  // Global click listener to catch internal link clicks instantly at 0ms
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const targetAttr = anchor.getAttribute("target");

      // Check if it's a valid internal navigation link
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("//") &&
        targetAttr !== "_blank" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        // If navigating to a different pathname
        const currentPath = window.location.pathname;
        const targetPath = href.split("?")[0].split("#")[0];

        if (targetPath !== currentPath) {
          startLoading();
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, []);

  return (
    <NavigationContext.Provider value={{ startLoading, stopLoading, isLoading }}>
      {/* Top glowing progress bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-[9999] pointer-events-none transition-opacity duration-300 ${
          isLoading || progress > 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-1 bg-gradient-to-r from-accent-gold via-amber-300 to-accent-gold shadow-[0_0_12px_#F2B705] transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
        {/* Subtle glowing pulse header badge */}
        {isLoading && (
          <div className="absolute top-2 right-4 flex items-center gap-2 bg-neutral-dark/90 border border-accent-gold/40 px-3 py-1 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(242,183,5,0.3)] animate-pulse">
            <div className="h-2 w-2 rounded-full bg-accent-gold animate-ping" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-gold">
              Loading...
            </span>
          </div>
        )}
      </div>

      {children}
    </NavigationContext.Provider>
  );
}
