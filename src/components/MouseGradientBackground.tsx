"use client";

import { useEffect, useRef } from "react";

export default function MouseGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationId: number;

    const animate = () => {
      timeRef.current += 0.015;

      // Smooth interpolation for delayed trail physics
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.04;

      const { x, y } = mouseRef.current;
      const w = canvas.width;
      const h = canvas.height;
      const t = timeRef.current;

      // Deep Indigo background (#0D0926) matching the ministry branding
      ctx.fillStyle = "#0D0926";
      ctx.fillRect(0, 0, w, h);

      const pulse = 0.95 + Math.sin(t * 1.8) * 0.05;
      const pulse2 = 0.95 + Math.cos(t * 1.2) * 0.05;

      // Gradient 1: Marigold Gold Glow tracking the mouse
      const gradient = ctx.createRadialGradient(x * w, y * h, 0, x * w, y * h, Math.max(w, h) * 0.65);
      gradient.addColorStop(0, `rgba(242, 183, 5, ${0.22 * pulse})`);
      gradient.addColorStop(0.2, `rgba(200, 140, 5, ${0.14 * pulse})`);
      gradient.addColorStop(0.5, `rgba(46, 139, 87, ${0.08 * pulse})`);
      gradient.addColorStop(0.8, `rgba(27, 20, 64, ${0.02 * pulse})`);
      gradient.addColorStop(1, "rgba(13, 9, 38, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // Gradient 2: Leaf Green Glow in counter-balance position
      const gradient2 = ctx.createRadialGradient(
        (1 - x) * w * 0.8 + Math.sin(t) * 40,
        (1 - y) * h * 0.8 + Math.cos(t) * 40,
        0,
        (1 - x) * w * 0.8,
        (1 - y) * h * 0.8,
        Math.max(w, h) * 0.45
      );
      gradient2.addColorStop(0, `rgba(46, 139, 87, ${0.18 * pulse2})`);
      gradient2.addColorStop(0.3, `rgba(30, 110, 65, ${0.1 * pulse2})`);
      gradient2.addColorStop(0.7, `rgba(20, 70, 40, ${0.03 * pulse2})`);
      gradient2.addColorStop(1, "rgba(13, 9, 38, 0)");

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, w, h);

      // Gradient 3: Soft ambient background light pulsating in the center
      const gradient3 = ctx.createRadialGradient(
        w * 0.5 + Math.sin(t * 0.6) * w * 0.25,
        h * 0.5 + Math.cos(t * 0.4) * h * 0.25,
        0,
        w * 0.5,
        h * 0.5,
        Math.max(w, h) * 0.5
      );
      gradient3.addColorStop(0, `rgba(242, 183, 5, ${0.06 * pulse})`);
      gradient3.addColorStop(0.5, `rgba(27, 20, 64, ${0.02 * pulse})`);
      gradient3.addColorStop(1, "rgba(13, 9, 38, 0)");

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, w, h);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Dynamic Mouse Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: "#0D0926" }}
      />

      {/* Grid pattern overlay & floating watermark elements */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden opacity-[0.14]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(242, 183, 5, 0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(242, 183, 5, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Scattered atmospheric watermark typography */}
        <div className="absolute top-[8%] left-[5%] font-mono text-[9px] text-accent-gold/80 rotate-[-3deg] space-y-0.5">
          <div>TLCCRM DELTA HQ :: CHILDREN MINISTRY</div>
          <div>MOTTO: CATCH THEM YOUNG FOR CHRIST</div>
          <div>EST. BIBLE CAMP PORTAL</div>
        </div>

        <div className="absolute top-[14%] right-[6%] font-mono text-[9px] text-accent-green/80 rotate-[2deg] text-right">
          <div>THEME: GODLY CHILDREN IN A DECAYING WORLD</div>
          <div>SCRIPTURE: ROMANS 12:2</div>
        </div>

        <div className="absolute top-[32%] left-[10%] font-mono text-[8px] text-accent-gold/60 rotate-[-1deg] space-y-1">
          <div>VENUE: TLCCRM STATE HQ, WARRI</div>
          <div>DATE: AUGUST 19 - 22, 2026</div>
        </div>

        <div className="absolute top-[28%] right-[16%] font-mono text-[9px] text-accent-gold/70 rotate-[4deg]">
          <div className="border border-accent-gold/40 px-2.5 py-0.5 rounded-full bg-accent-gold/10">
            JESUS IS LORD!!!
          </div>
        </div>

        <div className="absolute top-[50%] left-[4%] font-mono text-[9px] text-accent-green/70 rotate-[5deg] space-y-0.5">
          <div>CATEGORIES: CHILDREN | STUDENTS | OFFICERS</div>
          <div>MINISTERING: PASTOR NNAMDI IKECHUKWU</div>
          <div>G.O.: PASTOR LAZARUS MUOKA</div>
        </div>

        <div className="absolute top-[55%] right-[4%] font-mono text-[9px] text-accent-gold/70 rotate-[-2deg] space-y-0.5 text-right">
          <div>REGISTRATION FEE: N4,000</div>
          <div>FIDELITY BANK: 4150052240</div>
        </div>

        <div className="absolute top-[70%] left-[20%] font-mono text-[8px] text-accent-gold/60 rotate-[3deg] space-y-0.5">
          <div>CHILDREN HOLIDAY BIBLE CAMP</div>
          <div>WARRI, DELTA STATE, NIGERIA</div>
        </div>

        <div className="absolute top-[75%] right-[12%] font-mono text-[10px] text-accent-green/70 rotate-[-4deg] flex items-center gap-1.5">
          <div className="text-[18px] leading-none text-accent-gold">⬡</div>
          <div>HOLY & RIGHTEOUS GENERATION</div>
        </div>

        {/* Circular Verified Badges */}
        <div className="absolute top-[22%] left-[42%] w-20 h-20 border border-accent-gold/30 rounded-full flex items-center justify-center rotate-[-12deg]">
          <div className="text-[7px] text-accent-gold/70 text-center font-mono leading-tight">
            <div>HOLIDAY</div>
            <div>BIBLE CAMP</div>
            <div className="font-bold text-[8px] mt-0.5 text-accent-green">2026</div>
          </div>
        </div>

        <div className="absolute bottom-[24%] left-[38%] w-16 h-16 border border-dashed border-accent-green/40 rounded flex items-center justify-center rotate-[18deg]">
          <div className="text-[6px] text-accent-green/70 font-mono text-center leading-tight">
            <div>TLCCRM</div>
            <div>DELTA HQ</div>
            <div>✓ OFFICIAL</div>
          </div>
        </div>
      </div>

      {/* Noise grain overlay */}
      <div
        className="fixed inset-0 z-[2] pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
    </>
  );
}
