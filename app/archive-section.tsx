"use client";

import { useEffect, useRef } from "react";

const archiveEntries = [
  {
    index: "01",
    name: "Jack",
    category: "AI / PERSONA FRAMEWORK",
    description:
      "A personalized conversational assistant built with custom LoRA adapters, local inference, and voice-led dialogue.",
    artwork: "archive-art-hill",
    note: "OLLAMA · GOOGLE COLAB",
  },
  {
    index: "02",
    name: "Agrocare AI",
    category: "COMPUTER VISION / AGRICULTURE",
    description:
      "A crop-health inspection concept that detects plant disease and helps surface possible remedies.",
    artwork: "archive-art-moth",
    note: "PYTHON · MACHINE LEARNING",
  },
  {
    index: "03",
    name: "July Movement 2024",
    category: "AUGMENTED REALITY / IMAGE TRACKING",
    description:
      "An image-tracking AR experience that brings historic moments into view through an interactive scan.",
    artwork: "archive-art-lumen",
    note: "AR · IMAGE TRACKING",
  },
  {
    index: "04",
    name: "Robotic Science Club Portal",
    category: "WEB / COMMUNITY",
    description:
      "A digital membership and activity hub built to support club operations and student-led innovation.",
    artwork: "archive-art-receiver",
    note: "HTML · CSS · JAVASCRIPT",
  },
];

export default function ArchiveSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRequestRef = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>(".archive-card"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    section.classList.add("is-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    cards.forEach((card) => observer.observe(card));

    const updateParallax = () => {
      frameRequestRef.current = null;
      const viewportCenter = window.innerHeight / 2;

      cards.forEach((card, index) => {
        const bounds = card.getBoundingClientRect();
        const distance = (bounds.top + bounds.height / 2 - viewportCenter) /
          window.innerHeight;
        const offset = Math.max(-1, Math.min(1, distance)) * (index % 2 ? 9 : -9);
        card.style.setProperty("--archive-shift", `${offset}px`);
      });
    };

    const handleScroll = () => {
      if (frameRequestRef.current === null) {
        frameRequestRef.current = requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameRequestRef.current !== null) {
        cancelAnimationFrame(frameRequestRef.current);
      }
    };
  }, []);

  return (
    <>
      <section
        className="archive-section"
        id="projects"
        ref={sectionRef}
        aria-labelledby="archive-title"
      >
        <div className="archive-inner">
          <div className="archive-heading">
            <p className="archive-overline">
              MB MAHODI <span>— SELECTED PROJECTS</span>
            </p>
            <div className="archive-heading-row">
              <h2 id="archive-title">
                BUILD
                <br />
                <span>WHAT&apos;S NEXT</span>
              </h2>
              <p className="archive-intro">
                I work across custom AI, machine learning, embedded systems,
                robotics, and creative technology — turning experiments into
                practical experiences.
              </p>
            </div>
          </div>

          <div className="archive-float archive-float-one" aria-hidden="true">
            HUMAN / MACHINE
          </div>
          <div className="archive-float archive-float-two" aria-hidden="true">
            IDEAS MADE TANGIBLE
          </div>

          <div className="archive-grid">
            {archiveEntries.map((entry) => (
              <article
                className={`archive-card ${entry.artwork}`}
                key={entry.index}
              >
                <div className="archive-art">
                  <span className="archive-art-index">{entry.index}</span>
                  <span className="archive-art-note">{entry.note}</span>
                  <span
                    className="archive-art-orbit"
                    aria-hidden="true"
                  />
                </div>
                <div className="archive-card-caption">
                  <div className="archive-card-title">
                    <span className="archive-card-category">
                      {entry.category}
                    </span>
                    <span className="archive-card-number">{entry.index}</span>
                  </div>
                  <h3>{entry.name}</h3>
                  <p>{entry.description}</p>
                </div>
              </article>
            ))}
          </div>

          <section
            className="archive-expertise"
            id="expertise"
            aria-labelledby="expertise-title"
          >
            <div className="archive-subheading">
              <p>TOOLS OF CURIOSITY</p>
              <h3 id="expertise-title">A practice across disciplines.</h3>
            </div>
            <div className="expertise-columns">
              <article>
                <span>01 / INTELLIGENCE</span>
                <h4>AI &amp; LLM systems</h4>
                <p>
                  Local LLMs with Ollama, prompt architecture, custom AI
                  assistants and personas, LoRA fine-tuning, dataset
                  preparation, and Google Colab training.
                </p>
                <p className="expertise-tools">
                  Google AI Studio · Open WebUI · AnythingLLM · OpenCV ·
                  MediaPipe
                </p>
              </article>
              <article>
                <span>02 / EMBEDDED</span>
                <h4>Robotics &amp; hardware</h4>
                <p>
                  Arduino, ESP32 and ESP8266 programming, circuit design,
                  sensors, custom lithium-ion packs, MOSFET driver circuits,
                  and DC power systems.
                </p>
                <p className="expertise-tools">
                  Prototyping · Microcontrollers · Hardware / software
                  integration
                </p>
              </article>
              <article>
                <span>03 / CREATIVE TECHNOLOGY</span>
                <h4>Code, form &amp; image</h4>
                <p>
                  Python, C++, HTML, CSS, XML, frontend engineering, 3D
                  modeling, and physical prototyping.
                </p>
                <p className="expertise-tools">
                  Photoshop · Charcoal · Pen &amp; ink · VS Code · Arduino IDE
                  · Omarchy / Linux Mint · GitHub
                </p>
              </article>
            </div>
          </section>

          <section className="leadership-notes" aria-labelledby="leadership-title">
            <div className="archive-subheading">
              <p>LEADERSHIP / FIELD NOTES</p>
              <h3 id="leadership-title">Building things together.</h3>
            </div>
            <div className="leadership-entry">
              <p>FOUNDER &amp; PRESIDENT <span>01</span></p>
              <div>
                <h4>Robotic Science Club</h4>
                <p>
                  Founded and lead a student community for robotics and AI
                  education. I mentor teams, guide innovation projects, and
                  have helped secure district and national science fair titles
                  while developing the club&apos;s digital portal.
                </p>
              </div>
            </div>
            <div className="leadership-entry">
              <p>OVERALL TEAM LEADER <span>02</span></p>
              <div>
                <h4>Abu Abbas College Scouting Contingent</h4>
                <p>
                  Led scouting contingents and coordinated teams at regional
                  and national events.
                </p>
              </div>
            </div>
          </section>

          <div className="archive-cta">
            <p>HAVE AN IDEA, A PROBLEM, OR A PROJECT IN MIND?</p>
            <a href="mailto:mahodibilla106@gmail.com">
              LET&apos;S BUILD SOMETHING <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="artbook-footer" id="colophon">
        <div className="footer-topline">
          <p>AI · EMBEDDED SYSTEMS · ROBOTICS · ART</p>
          <a href="#world">BACK TO TOP ↑</a>
        </div>
        <p className="footer-statement">
          Curious by nature,
          <br />
          <em>built to experiment.</em>
        </p>
        <a className="footer-wordmark" href="#world" aria-label="MB Mahodi home">
          MB MAHODI
        </a>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 MUNTASIM BILLA MAHODI TALUKDAR · NETROKONA, BANGLADESH
          </p>
          <nav className="footer-nav" aria-label="Portfolio navigation">
            <a href="#about">ABOUT</a>
            <a href="#expertise">EXPERTISE</a>
            <a href="#projects">PROJECTS</a>
          </nav>
          <nav className="footer-socials" id="contact" aria-label="Contact links">
            <a href="mailto:mahodibilla106@gmail.com">EMAIL ↗</a>
            <a href="https://github.com/Mahodi17" target="_blank" rel="noreferrer">
              GITHUB ↗
            </a>
            <a href="https://linkedin.com/in/mb-mahodi" target="_blank" rel="noreferrer">
              LINKEDIN ↗
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
