# Cheetah Scrollytelling Landing Page — Developer Prompt

---

## Role

Act as a World-Class Creative Developer & UI/UX Designer specializing in Awwwards-winning scrollytelling experiences.

## Objective

Build a premium, high-performance **Cheetah-themed landing page** featuring an immersive "Cheetah Run" scrollytelling intro. The design must be editorial, aggressive, and pixel-perfect on mobile, using a dual-canvas rendering technique to ensure zero-seam immersion.

---

## Tech Stack

- Vite.js (React + Vite)
- Tailwind CSS (Utility-first styling)
- TypeScript (ES6+)
- Libraries: GSAP (ScrollTrigger), Lenis (Smooth Scroll)

---

## 1. Core Visual Architecture (The "Tiger Engine")

Implement a full-screen sticky section (`height: 800vh`) that controls a frame-by-frame animation of a running cheetah.

**Asset Logic:** Preload 242 frames (`ezgif-frame-001.jpg` to `242`).

### Dual-Canvas System (CRITICAL)

**Foreground Canvas (`#tiger-canvas`):** Renders the sharp, high-res frames.

- Fit Mode: `object-fit: contain` (Must preserve 100% of the centered branding text).
- Masking: Apply a `CSS mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)`. This creates an 8% feathered fade at the top and bottom edges.

**Ambient Background Canvas (`#ambient-canvas`):** Renders a zoomed, blurred version of the same current frame behind the foreground.

- Fit Mode: `object-fit: cover` (Fills the entire screen).
- Scale: `width: 110%, height: 110%` (Prevents vignette edges).
- Effects: `filter: blur(40px) saturate(1.2)`. This creates a vibrant, seamless atmospheric fill that matches the video's colors in real-time, eliminating black bars on mobile.

**Scroll Interaction:** Use GSAP ScrollTrigger to scrub through the frames. Sync with Lenis for buttery smooth inertia.

---

## 2. Design System & Typography

Replicate the signature bold condensed editorial aesthetic using free alternatives:

**Headings:** Font family `'Antonio'`, `font-weight: 700`

- Style: Uppercase, `tracking-tighter`, `leading-none`
- Scaling: Use Tailwind's `text-[clamp(3rem,10vw,5.5rem)]` for responsive impact

**Body Copy:** Font family `'Archivo Narrow'`, `font-weight: 500`

**Restriction:** NO em-dashes (—) anywhere. Use clean, direct language.

### Colors

| Element     | Value                                                            |
| ----------- | ---------------------------------------------------------------- |
| Backgrounds | Pure White `bg-white` for all post-hero sections. NO light greys |
| Text        | Deep Black `text-[#111]` or Carbon `text-[#0b0b0b]`              |
| Accents     | Pure White `text-white` for buttons/overlay text                 |

---

## 3. Post-Hero Landing Experience

Build the following sections below the fold, ensuring a smooth transition from the dark hero to the white content.

### P1: Product Intro ("First Look")

- **Eyebrow:** "First Look" (Small, bold)
- **Title:** "FASTER THAN FEAR" (Huge, condensed, tight spacing)
- **Description:** Centered, max-width 600px, 1.2rem size
- **Buttons:** Rounded pill shape (`rounded-full`), black background, white text

### P2: "Built for Speed" Carousel

- Horizontal scroll slider with snap points
- Cards: White background, featured image, bold title, tagline, and category (e.g., "Speed", "Agility", "Power")
- Navigation: Round arrow buttons for left/right scroll

### P3: Featured Banner (Cinematic)

- **Image:** A high-res "Cheetah Savanna" photo
- **Dimensions:** Height must be `h-[85vh]` (cinematic portrait feel)
- **Typography:** "OWN THE WILD" (Large condensed headline overlay or centered below)
- **Container:** Pure white background

### P4: The Essentials

- **3-Column Grid:** Speed, Strength, Instinct
- **Images:** Lifestyle shots with a "poster" aspect ratio
- **Buttons:** White "pill" buttons positioned over the bottom-left of each image

### Footer

Simple 4-column layout (Icons, Features, Support, Company) with small, accessible text.

---

## 4. Technical Constraints & Polish

- **Mobile First:** Ensure the "FASTER THAN FEAR" text in the hero is NEVER cropped on vertical screens (handled by the Dual-Canvas system).
- **Performance:** Use `requestAnimationFrame` for the canvas loop. Debounce resize events.
- **Clean Code:** Modular React components (dedicated `CheetahExperience` component using `useEffect` and `useRef` hooks for canvas and GSAP logic).
