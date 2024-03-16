"use client";
import { useLogs } from "@/store/logsStore";
import React, { useRef, useEffect } from "react";

const Log = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { logs } = useLogs();

  useEffect(() => {
    if (containerRef.current) {
      // Ensure the scrollbar is always at the bottom
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div
      ref={containerRef}
      className="w-xl h-[500px] border border-white p-3 overflow-auto rounded-md ">
      <ul>
        {logs.map((log, index) => (
          <li key={index} className="mb-2 sm:mb-0">
            <p>{log}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Log;
