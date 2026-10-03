"use client";

import { useEffect, useRef } from "react";

const notes = [
  {
    className: "story-note story-note-title",
    start: "0.12",
    x: "-54",
    y: "-36",
    rotation: "-8",
    children: (
      <>
        Ideas
        <br />
        into reality
      </>
    ),
  },
  {
    className: "story-note story-note-orbit",
    start: "0.19",
    x: "60",
    y: "-46",
    rotation: "12",
    children: "SYSTEMS NOTE · 001",
  },
  {
    className: "story-note story-note-copy",
    start: "0.24",
    x: "-62",
    y: "45",
    rotation: "-5",
    children: "Local intelligence, built for the world beyond the screen.",
  },
  {
    className: "story-note story-note-mark",
    start: "0.29",
    x: "44",
    y: "56",
    rotation: "18",
    children: "CODE / CIRCUIT",
  },
  {
    className: "story-note story-note-coordinate",
    start: "0.34",
    x: "-56",
    y: "-42",
    rotation: "7",
    children: "From custom models to embedded machines",
  },
  {
    className: "story-note story-note-caption",
    start: "0.39",
    x: "52",
    y: "40",
    rotation: "-10",
    children: "AI MEETS THE PHYSICAL WORLD",
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const easeOut = (value: number) => 1 - (1 - value) ** 3;

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const artworkRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const artwork = artworkRef.current;
    if (!section || !stage || !artwork) return;

    const noteElements = Array.from(
      section.querySelectorAll<HTMLElement>("[data-story-note]"),
    );

    const render = () => {
      animationFrameRef.current = null;
      const scrollDistance = section.offsetHeight - window.innerHeight;
      const progress = clamp(
        -section.getBoundingClientRect().top / Math.max(1, scrollDistance),
        0,
        1,
      );
      const expansion = easeOut(clamp(progress / 0.76, 0, 1));
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const startWidth = clamp(viewportWidth * 0.18, 160, 248);
      const startHeight = startWidth * (16 / 9);
      const width = startWidth + (viewportWidth - startWidth) * expansion;
      const height = startHeight + (viewportHeight - startHeight) * expansion;

      artwork.style.width = `${width}px`;
      artwork.style.height = `${height}px`;
      artwork.style.borderRadius = `${18 * (1 - expansion)}px`;
      artwork.style.setProperty("--art-parallax", `${-12 * expansion}px`);
      stage.style.setProperty("--story-progress", `${progress}`);

      for (const note of noteElements) {
        const start = Number(note.dataset.exitStart);
        const exit = easeOut(clamp((progress - start) / 0.22, 0, 1));
        const x = Number(note.dataset.exitX) * exit;
        const y = Number(note.dataset.exitY) * exit;
        const rotation = Number(note.dataset.exitRotation) * exit;
        const scale = 1 - exit * 0.24;

        note.style.opacity = `${1 - exit}`;
        note.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg) scale(${scale})`;
      }
    };

    const scheduleRender = () => {
      if (animationFrameRef.current === null) {
        animationFrameRef.current = requestAnimationFrame(render);
      }
    };

    render();
    scheduleRender();
    window.addEventListener("scroll", scheduleRender, { passive: true });
    window.addEventListener("resize", scheduleRender);

    return () => {
      window.removeEventListener("scroll", scheduleRender);
      window.removeEventListener("resize", scheduleRender);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      className="story-section"
      ref={sectionRef}
      id="about"
      aria-label="About MB Mahodi"
    >
      <div className="story-stage" ref={stageRef}>
        <p
          className="story-kicker"
          data-story-note
          data-exit-start="0.08"
          data-exit-x="-30"
          data-exit-y="-20"
          data-exit-rotation="-8"
        >
          MB MAHODI / FIELD NOTES
        </p>
        <div
          className="story-artwork"
          ref={artworkRef}
          role="img"
          aria-label="A surreal landscape representing ideas becoming reality"
        >
          <div className="story-artwork-image" />
        </div>
        {notes.map((note) => (
          <p
            className={note.className}
            key={note.className}
            data-story-note
            data-exit-start={note.start}
            data-exit-x={note.x}
            data-exit-y={note.y}
            data-exit-rotation={note.rotation}
          >
            {note.children}
          </p>
        ))}
        <span
          className="story-index"
          aria-hidden="true"
          data-story-note
          data-exit-start="0.15"
          data-exit-x="26"
          data-exit-y="20"
          data-exit-rotation="12"
        >
          AI — HARDWARE — ART
        </span>
      </div>
    </section>
  );
}
