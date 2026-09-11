"use client";

import React, { useEffect, useState } from "react";

interface HydrationGuardProps {
  children: React.ReactNode;
}

export default function HydrationGuard({ children }: HydrationGuardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <>{mounted ? children : <div className="opacity-0">{children}</div>}</>;
}
