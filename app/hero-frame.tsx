"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type HeroFrameProps = {
  children: ReactNode;
};

export default function HeroFrame({ children }: HeroFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const hasPositionRef = useRef(false);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const frame = frameRef.current;
    const reveal = revealRef.current;
    if (!frame || !reveal) return;

    const bounds = frame.getBoundingClientRect();
    targetRef.current = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };

    if (!hasPositionRef.current) {
      positionRef.current = { ...targetRef.current };
      hasPositionRef.current = true;
    }

    reveal.style.visibility = "visible";
    reveal.style.setProperty("--reveal-x", `${positionRef.current.x}px`);
    reveal.style.setProperty("--reveal-y", `${positionRef.current.y}px`);

    if (animationFrameRef.current !== null) return;

    const animate = () => {
      const layer = revealRef.current;
      if (!layer) {
        animationFrameRef.current = null;
        return;
      }

      const current = positionRef.current;
      const target = targetRef.current;
      current.x += (target.x - current.x) * 0.16;
      current.y += (target.y - current.y) * 0.16;
      layer.style.setProperty("--reveal-x", `${current.x}px`);
      layer.style.setProperty("--reveal-y", `${current.y}px`);

      if (Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > 0.1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        current.x = target.x;
        current.y = target.y;
        layer.style.setProperty("--reveal-x", `${target.x}px`);
        layer.style.setProperty("--reveal-y", `${target.y}px`);
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }

  function handlePointerLeave() {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (revealRef.current) revealRef.current.style.visibility = "hidden";
    hasPositionRef.current = false;
  }

  return (
    <div
      className="hero-frame"
      ref={frameRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="character-reveal" ref={revealRef} aria-hidden="true" />
      {children}
    </div>
  );
}
