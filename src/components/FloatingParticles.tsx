"use client";

/* Global floating particle overlay — renders on every page via layout.tsx */

const PARTICLES = [
  { left: "4%",  delay: "0s",    dur: "8s",   gold: true,  size: 1.5, mobileHide: false },
  { left: "10%", delay: "2.1s",  dur: "10s",  gold: false, size: 1,   mobileHide: true  },
  { left: "17%", delay: "0.7s",  dur: "7s",   gold: true,  size: 2,   mobileHide: false },
  { left: "24%", delay: "3.4s",  dur: "9s",   gold: false, size: 1.5, mobileHide: true  },
  { left: "31%", delay: "1.2s",  dur: "6.5s", gold: true,  size: 2.5, mobileHide: false },
  { left: "38%", delay: "4.8s",  dur: "11s",  gold: false, size: 1,   mobileHide: true  },
  { left: "45%", delay: "0.3s",  dur: "8.5s", gold: true,  size: 2,   mobileHide: false },
  { left: "52%", delay: "2.9s",  dur: "7.5s", gold: false, size: 1.5, mobileHide: true  },
  { left: "59%", delay: "1.6s",  dur: "9.5s", gold: true,  size: 1.5, mobileHide: false },
  { left: "66%", delay: "5.1s",  dur: "6s",   gold: false, size: 2,   mobileHide: true  },
  { left: "73%", delay: "0.9s",  dur: "10.5s",gold: true,  size: 2,   mobileHide: false },
  { left: "80%", delay: "3.7s",  dur: "7s",   gold: false, size: 1,   mobileHide: true  },
  { left: "87%", delay: "1.9s",  dur: "8s",   gold: true,  size: 2.5, mobileHide: false },
  { left: "93%", delay: "4.2s",  dur: "9s",   gold: false, size: 1.5, mobileHide: true  },
  { left: "7%",  delay: "6.0s",  dur: "12s",  gold: true,  size: 1,   mobileHide: false },
  { left: "55%", delay: "7.3s",  dur: "8s",   gold: false, size: 2,   mobileHide: false },
  { left: "22%", delay: "8.5s",  dur: "9.5s", gold: true,  size: 1.5, mobileHide: true  },
  { left: "78%", delay: "2.4s",  dur: "11s",  gold: false, size: 1,   mobileHide: false },
];

export default function FloatingParticles() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-[1]"
    >
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className={`absolute bottom-0 rounded-full${p.mobileHide ? " hidden sm:block" : ""}`}
          style={{
            left: p.left,
            width:  `${p.size * 2}px`,
            height: `${p.size * 2}px`,
            background: p.gold
              ? "rgba(242, 183, 5, 0.65)"
              : "rgba(46, 139, 87, 0.65)",
            boxShadow: p.gold
              ? `0 0 ${p.size * 5}px rgba(242,183,5,0.5)`
              : `0 0 ${p.size * 5}px rgba(46,139,87,0.5)`,
            animation: `floatUp ${p.dur} ${p.delay} ease-in infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
