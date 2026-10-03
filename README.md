# MB Mahodi — Portfolio

> A prompt-engineered, immersive portfolio exploring the intersection of AI, embedded systems, robotics, frontend engineering, and visual art.

**Live site:** [3d-websites-with-ai-gpt6-v1.vercel.app](https://3d-websites-with-ai-gpt6-v1.vercel.app/)

**Repository:** [github.com/Mahodi17/3d-websites-with-ai-gpt6-v1](https://github.com/Mahodi17/3d-websites-with-ai-gpt6-v1)

This project is the portfolio of **Muntasim Billa Mahodi Talukdar (MB Mahodi)**, a frontend engineer, artist, and hands-on technology enthusiast based in Netrokona, Bangladesh. It presents selected projects, technical interests, leadership experience, and the prompt-engineering process used to shape the experience.

## Experience preview

The portfolio moves from a full-screen introduction into an immersive, scroll-driven landscape. The landscape image below is one of the supplied visual assets used in the experience.

![The portfolio's immersive field-notes landscape](./public/floria-story.png)

## Highlights

- **Full-screen portfolio hero** with responsive navigation, concise introduction, and direct project/contact calls to action.
- **Cursor-following image reveal** in the hero, using a soft circular CSS mask, eased pointer tracking, and a non-interactive overlay beneath the interface.
- **Cinematic Field Notes section** where a centered 9:16 image expands to fill the viewport as the visitor scrolls.
- **Interactive skill objects** revealed only after the landscape reaches its full-screen state. Six CSS-crafted 3D-style objects represent AI/LLMs, embedded engineering, robotics/electronics, software/frontend, prototyping, and visual art. Hover, keyboard focus, and touch interactions reveal each skill's name and category; no proficiency scores are invented.
- **Project archive** with selected work, an expertise overview, leadership notes, and contact links.
- **Prompt Engineering / Process Archive** documenting the project direction as it evolved through briefs, feedback, and refinements.
- **Responsive layouts** and reduced-motion accommodations for a range of screen sizes and motion preferences.

> The skill illustrations are made with CSS 3D transforms and layered gradients. The project does not use a WebGL engine or imported 3D model files.

## Selected work

The project archive features:

| Project | Area | Overview |
| --- | --- | --- |
| **Jack** | AI / persona framework | A personalized conversational assistant exploring local inference, LoRA adapters, and voice-led dialogue. |
| **Agrocare AI** | Computer vision / agriculture | A crop-health concept for detecting plant disease and surfacing possible remedies. |
| **July Movement 2024** | Augmented reality / image tracking | An image-tracking experience connecting scans with historical moments. |
| **Robotic Science Club Portal** | Web / community | A digital hub supporting club activities and student-led innovation. |

## Built with

- [Next.js](https://nextjs.org/) App Router
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- Custom CSS, with Tailwind CSS 4 available in the project setup
- CSS transforms, gradients, masks, and browser animation APIs for interactions
- [Vercel](https://vercel.com/) for deployment

No external runtime service or environment variable is required for the current portfolio.

## Run locally

### Requirements

- Node.js compatible with the installed Next.js version
- npm
- Git

### Setup

```bash
git clone https://github.com/Mahodi17/3d-websites-with-ai-gpt6-v1.git
cd 3d-websites-with-ai-gpt6-v1
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run ESLint. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build locally. |

## How the project was made

The project was developed through an iterative, prompt-engineering workflow: define the visual constraints, make one focused change at a time, inspect the result, then correct placement, timing, and responsive behavior based on feedback.

The entries below are **reconstructed summaries of the conversation**, not a word-for-word prompt transcript.

1. **Define the visual foundation.** Use the supplied image as an exact layout reference; preserve its composition, spacing, proportions, typography hierarchy, navigation, lower text area, and CTA placement. Adapt the hero to FLORIA, remove artwork, and use a pure-black background without redesigning the layout.
2. **Add a constrained cursor reveal.** Keep the existing hero and background unchanged. Reveal the supplied character image only inside a soft, 260px cursor-centered spotlight, use a CSS radial mask and eased movement, keep the layer below the interface, and hide it when the pointer leaves.
3. **Create scroll-driven storytelling.** Place the supplied image in a centered 9:16 portrait frame, then expand it to full screen on scroll. Surround it with asymmetrical editorial notes that animate away, while preserving the image composition and supporting responsive layouts.
4. **Complete the experience.** Extend the visual language into a project archive and closing footer, with project presentations, motion, and a clear contact invitation.
5. **Personalize the portfolio.** Replace fictional FLORIA-specific portfolio copy with MB Mahodi's identity, skills, projects, leadership, and contact information.
6. **Represent skills as objects.** Address the empty hero by introducing interactive 3D-style skill objects. Show skill names and categories on interaction, support touch, and avoid invented proficiency ratings.
7. **Correct the scene placement.** Move the skill objects out of the hero and into the **MB MAHODI / FIELD NOTES** landscape section.
8. **Sequence the reveal.** Keep the objects hidden and inactive while the image is growing; reveal them only after the image fills the viewport.
9. **Refine the composition.** Arrange the objects at varied positions across the landscape instead of in a single row, and add subtle highlights that invite exploration.

### Prompt-engineering principles used

- State the goal and the parts of the design that must remain unchanged.
- Specify assets, dimensions, layering, interaction, and responsive behavior explicitly.
- Make focused iterations rather than asking for unrelated redesigns at once.
- Give corrective feedback when an element appears in the wrong place or at the wrong time.
- Describe the desired experience while avoiding claims or ratings that are not supported by the project.

## Project structure

```text
app/
  archive-section.tsx  Project archive, prompt log, expertise, leadership, and footer
  globals.css          Global styles, responsive layouts, and CSS interactions
  hero-frame.tsx       Hero composition and cursor-following reveal
  layout.tsx           Root layout, fonts, and page metadata
  page.tsx             Page composition and primary navigation
  story-section.tsx    Scroll-driven landscape and interactive skill objects
public/
  floria-base.png      Supplied hero/base visual
  floria-reveal.png    Supplied cursor-reveal visual
  floria-story.png     Supplied Field Notes landscape visual
```

## Deployment

The project is deployed on Vercel and connected to the GitHub repository. When automatic deployments are enabled, pushing a commit to the production branch triggers a new deployment.

To deploy your own copy, import the repository into [Vercel](https://vercel.com/new), keep the detected Next.js settings, and deploy. No environment variables are needed for the current implementation.

## Author

**MB Mahodi — Muntasim Billa Mahodi Talukdar**

Frontend engineering · AI and LLM systems · Embedded systems · Robotics · Visual art

Netrokona, Bangladesh

- [GitHub](https://github.com/Mahodi17)
- [LinkedIn](https://linkedin.com/in/mb-mahodi)
- [Email](mailto:mahodibilla106@gmail.com)
