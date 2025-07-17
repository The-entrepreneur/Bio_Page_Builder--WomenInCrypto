"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CanonicalHead() {
  const pathname = usePathname();
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  // Fallback to main site if origin is not available
  const canonicalUrl = `${origin || "https://wic-community.vercel.app/"}${pathname}`;

  return <link rel="canonical" href={canonicalUrl} />;
} 