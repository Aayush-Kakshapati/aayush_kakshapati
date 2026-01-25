"use client";

import { useEffect, useRef } from "react";

const GridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const activeLines = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const dpr = window.devicePixelRatio || 1;
    const gridSize = 28;

    const maxDistance = 4; // max 4 boxes from center
    const decay = 0.92; // glow decay per frame

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      const boxX = Math.floor(e.clientX / gridSize);
      const boxY = Math.floor(e.clientY / gridSize);

      // stamp all boxes within maxDistance
      for (let dx = -maxDistance; dx <= maxDistance; dx++) {
        for (let dy = -maxDistance; dy <= maxDistance; dy++) {
          const dist = Math.abs(dx) + Math.abs(dy);
          if (dist > maxDistance) continue;

          const strength = 1 - dist / (maxDistance + 1); // closer = stronger
          const key = `${boxX + dx}-${boxY + dy}`;
          activeLines.current.set(key, strength);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    const getTheme = () => {
      const root = getComputedStyle(document.documentElement);
      return {
        background: root.getPropertyValue("--background").trim(),
        grid: root.getPropertyValue("--border").trim(),
        glow: root.getPropertyValue("--ring").trim(),
      };
    };

    const draw = () => {
      const { background, grid, glow } = getTheme();

      // Fill background
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      // Draw base grid
      ctx.strokeStyle = `${grid}55`;
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw glowing box edges
      ctx.lineWidth = 1.5;
      for (const [key, strength] of activeLines.current) {
        if (strength < 0.01) {
          activeLines.current.delete(key);
          continue;
        }

        const [bx, by] = key.split("-").map(Number);
        const x = bx * gridSize;
        const y = by * gridSize;

        const alpha = Math.floor(strength * 120)
          .toString(16)
          .padStart(2, "0");
        ctx.strokeStyle = `${glow}${alpha}`;

        // Draw box edges
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + gridSize, y); // top
        ctx.lineTo(x + gridSize, y + gridSize); // right
        ctx.lineTo(x, y + gridSize); // bottom
        ctx.lineTo(x, y); // left
        ctx.stroke();

        activeLines.current.set(key, strength * decay);
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
};

export default GridBackground;
