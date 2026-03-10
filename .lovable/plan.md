

## Voice Assistant Widget Redesign — Glassmorphism + Enhanced UX

Here are my recommendations, building on your glass-screen idea:

### Design Concepts

**1. Glassmorphism Full-Screen Overlay (recommended)**
When activated, the widget expands into a full-screen or large centered overlay with a frosted glass effect (`backdrop-blur`) that lets the website content show through. A large animated audio waveform or pulsing orb sits in the center instead of a plain mic icon. The transcript floats subtly below/around it.

**2. Audio-Reactive Orb**
Replace the static mic icon with an animated glowing orb that reacts to voice volume — expanding and rippling when the user speaks, pulsing gently when the agent speaks. Think Siri/Alexa style but with the sky-blue gradient.

**3. Frosted Glass Panel (lighter touch)**
Keep the bottom-right panel but restyle it with `backdrop-blur-xl` and semi-transparent backgrounds so the site bleeds through. More premium, less opaque.

### Proposed Implementation

I'd recommend combining concepts 1 + 2: a **full-screen glassmorphic overlay with an audio-reactive orb**.

**What changes:**

- **Trigger button** stays the same (floating bottom-right mic)
- **On open**: instead of a small card, a full-screen overlay appears with `backdrop-blur-2xl` and `bg-background/30` — the website shows through as a frosted blur
- **Center stage**: a large animated orb (concentric rings with `framer-motion`) that pulses idle, expands when user speaks, and ripples when agent speaks
- **Transcript**: displayed as minimal floating text below the orb, fading in/out per message — not a traditional chat bubble layout
- **Controls**: a single large mic button at bottom center + a small X to close in the corner
- **Status text**: "Listening...", "SkyAssist is responding..." shown subtly near the orb
- **Header**: "SkyAssist" branding floats at the top with the plane icon

**Files to modify:**
- `src/components/VoiceAssistant.tsx` — full rewrite of the UI layout and animations

**No new dependencies needed** — `framer-motion` handles all animations.

