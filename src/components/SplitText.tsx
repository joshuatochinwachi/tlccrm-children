"use client";

import React from "react";

export default function SplitText({
  text,
  type = "words",
  className = "",
  wordClassName = "",
  charClassName = "",
}: {
  text: string;
  type?: "words" | "chars";
  className?: string;
  wordClassName?: string;
  charClassName?: string;
}) {
  if (type === "words") {
    return (
      <span className={className}>
        {text.split(" ").map((word, i) => (
          <span
            key={i}
            className={`inline-block mr-[0.25em] ${wordClassName}`}
          >
            {word}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className={`inline-block mr-[0.25em] whitespace-nowrap ${wordClassName}`}
        >
          {word.split("").map((char, j) => (
            <span
              key={j}
              className={`inline-block ${charClassName}`}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
