"use client";

import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-black text-white text-center text-sm py-2.5 px-12 relative">
      <p>
        The Founder Coach is now <em>Scale Yourself</em> - coaching and content
        that helps founders grow as quickly as their startups
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-lg"
        aria-label="Dismiss"
      >
        &times;
      </button>
    </div>
  );
}
