import React from 'react';

export function Logo({
  className = "w-12 h-12",
  darkColor = "#1e3a8a", // navy 900
  lightColor = "#9ca3af", // gray 400
  accentColor = "#3b82f6", // blue 500
}: {
  className?: string;
  darkColor?: string;
  lightColor?: string;
  accentColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mainSwoosh" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={darkColor} />
          <stop offset="100%" stopColor={accentColor} />
        </linearGradient>
        <linearGradient id="silverSwoosh" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={lightColor} />
          <stop offset="100%" stopColor="#e5e7eb" />
        </linearGradient>
        <linearGradient id="innerSwoosh" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor={darkColor} />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Modern Redesigned Logo - Dynamic Orbiting 'C' */}
      
      {/* Background Silver Orbit */}
      <path
        d="M 68 15 C 80 20, 95 35, 90 55 C 85 75, 65 90, 45 92 C 55 85, 75 75, 75 50 C 75 35, 65 25, 55 20 Z"
        fill="url(#silverSwoosh)"
        filter="url(#shadow)"
      />

      {/* Main Navy 'C' Sweep */}
      <path
        d="M 75 25C 60 5, 25 5, 10 35C -5 65, 20 95, 55 95C 75 95, 88 85, 95 72C 85 82, 65 85, 45 80C 25 75, 10 50, 20 30C 30 15, 60 10, 75 25Z"
        fill="url(#mainSwoosh)"
        filter="url(#shadow)"
      />

      {/* Inner Depth Sweep */}
      <path
        d="M 55 95C 35 95, 15 80, 10 55C 20 75, 40 85, 60 82C 70 80, 80 75, 85 65C 80 80, 65 95, 55 95Z"
        fill="url(#innerSwoosh)"
      />
      
      {/* Top Accent Cut */}
      <path
        d="M 20 30C 30 15, 60 10, 75 25C 65 15, 45 15, 30 25C 25 28, 22 35, 20 40C 18 35, 18 32, 20 30Z"
        fill="url(#silverSwoosh)"
        opacity="0.8"
      />
    </svg>
  );
}
