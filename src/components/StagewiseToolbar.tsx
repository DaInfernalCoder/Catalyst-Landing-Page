"use client";

import { useEffect } from "react";

const StagewiseToolbar = () => {
  useEffect(() => {
    // Only initialize in development mode
    if (process.env.NODE_ENV === "development") {
      const initToolbar = async () => {
        try {
          // Commented out to prevent build errors - stagewise/toolbar not installed
          // const { initToolbar } = await import("@stagewise/toolbar");

          // const stagewiseConfig = {
          //   plugins: [],
          // };

          // initToolbar(stagewiseConfig);
          console.log("Stagewise toolbar disabled - package not installed");
        } catch (error) {
          console.warn("Failed to initialize stagewise toolbar:", error);
        }
      };

      initToolbar();
    }
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return null;
};

export default StagewiseToolbar;
