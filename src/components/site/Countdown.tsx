import { useEffect, useState } from "react";

function diff(target: string) {
  const ms = new Date(target).getTime() - Date.now();
  const clamped = Math.max(ms, 0);
  return {
    days: Math.floor(clamped / 86400000),
    hours: Math.floor((clamped / 3600000) % 24),
    minutes: Math.floor((clamped / 60000) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export function Countdown({ target }: { target: string }) {
  const [t, setT] = useState(() => diff(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells = [
    { v: t.days, l: "Jours" },
    { v: t.hours, l: "Heures" },
    { v: t.minutes, l: "Min" },
    { v: t.seconds, l: "Sec" },
  ];

  return (
    <div className="flex gap-6 sm:gap-10" aria-live="off">
      {cells.map((c) => (
        <div key={c.l}>
          <div className="display text-4xl sm:text-5xl tabular-nums">
            {mounted ? String(c.v).padStart(2, "0") : "--"}
          </div>
          <div className="label-xs mt-2">{c.l}</div>
        </div>
      ))}
    </div>
  );
}
