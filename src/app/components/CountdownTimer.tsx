"use client";

import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-06-20T00:00:00+05:30");

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const boxes = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
      {boxes.map((box) => (
        <div key={box.label} className="countdown-box">
          <div className="text-2xl sm:text-3xl font-bold text-gold tabular-nums">
            {mounted ? String(box.value).padStart(2, "0") : "--"}
          </div>
          <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 mt-1">
            {box.label}
          </div>
        </div>
      ))}
    </div>
  );
}
