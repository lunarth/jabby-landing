"use client";

import { useEffect } from "react";

export function RevealRuntime() {
  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);

  return null;
}
