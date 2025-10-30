"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SmileyPreloader from "../components/common/Preloader";

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true); // start loading initially
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const minTime = 1000; // 2 seconds minimum
    const start = Date.now();

    const timeout = setTimeout(() => {
      const elapsed = Date.now() - start;
      if (elapsed < minTime) {
        setTimeout(() => setLoading(false), minTime - elapsed);
      } else {
        setLoading(false);
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <SmileyPreloader />}
      {!loading && children}
    </>
  );
}
