import HeroFrame from "./hero-frame";
import StorySection from "./story-section";
import ArchiveSection from "./archive-section";

const destinations = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <>
      <main className="page-shell" id="world">
        <HeroFrame>
          <header className="site-header">
            <a className="wordmark" href="#world" aria-label="MB Mahodi home">
              MB<span className="wordmark-period">.</span>
            </a>

            <nav className="primary-nav" aria-label="Main navigation">
              {destinations.map((destination) => (
                <a key={destination.label} href={destination.href}>
                  {destination.label}
                </a>
              ))}
            </nav>

            <a
              className="menu-link"
              href="#contact"
              aria-label="Go to contact"
            >
              <span />
              <span />
            </a>
          </header>

          <section className="hero" aria-labelledby="hero-title">
            <p className="eyebrow">AI · EMBEDDED SYSTEMS · ROBOTICS · ART</p>
            <h1 id="hero-title">MB MAHODI</h1>
          </section>

          <section
            className="bottom-area"
            id="intro"
            aria-label="About MB Mahodi"
          >
            <div className="intro-copy" id="stories">
              <p className="supporting-text">
                I turn intelligent ideas into things you can use and touch.
              </p>
              <p className="description">
                I&apos;m Muntasim Billa Mahodi Talukdar — an AI expert,
                embedded systems and robotics specialist, frontend engineer,
                and artist based in Netrokona, Bangladesh.
              </p>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects <span aria-hidden="true">→</span>
              </a>
              <a className="button button-secondary" href="mailto:mahodibilla106@gmail.com">
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>
        </HeroFrame>
      </main>
      <StorySection />
      <ArchiveSection />
    </>
  );
}
