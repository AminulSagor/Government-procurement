"use client";

import { useEffect, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
};

const clamp = (n: number) => (n < 0 ? 0 : n);

export default function useCountdown(targetMs: number): Countdown {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const diff = targetMs - now;
  const isExpired = diff <= 0;

  const totalSeconds = clamp(Math.floor(diff / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isExpired };
}
