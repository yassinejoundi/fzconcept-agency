# FZ Concept — design direction

## Brand truth

FZ Concept is a Marrakech studio for custom furnishing and interior decoration. The source is `.project/FZ flare.pdf`: concept design, moodboards, made-to-measure furniture, decoration, space optimization, and project follow-through for apartments, villas, and riads. The promise is a home shaped around its owner, with one point of contact from first conversation to installation. Do not invent awards, counts, client quotes, or project names.

## Visual idea

**Quiet drama, lived-in warmth.** Pair architectural restraint with rich, tactile photography. Use the brochure's oxblood, warm ivory, sand, and muted brass. The result should feel like an interior editorial, not a generic luxury template.

| Role | Token | Value |
| --- | --- | --- |
| Ink | `--fz-ink` | `#251716` |
| Oxblood | `--fz-wine` | `#3c1012` |
| Paper | `--fz-paper` | `#f5f0e9` |
| Sand | `--fz-sand` | `#e4cfb4` |
| Brass | `--fz-brass` | `#a6814d` |

Use Fraunces for expressive editorial headlines and Satoshi for navigation, body, and controls. Keep line lengths comfortable and body copy at least 16px. Gold is a small detail, not body text on pale backgrounds. Large imagery, tight typography, precise rules, and generous chapter spacing carry the premium feel. Avoid gradients on type, heavy shadows, pill overload, arbitrary badges, and empty prestige claims.

## Homepage journey

1. **Attention:** split editorial hero; short Marrakech-specific promise and two clear paths: discuss a project, see work.
2. **Interest:** short studio philosophy plus an exact three-card grid showing apartments, villas, and detail work.
3. **Desire:** image-led method and genuine founder/studio lines from the PDF; show the value of made-to-measure planning and one-to-one follow-through.
4. **Action:** strong closing invitation to request a personalized study, followed by useful contact routes and legal links.

Use the six photographs in `.project/images` as local source material. Publish optimized copies under `public/images`. Treat the brochure's imagery and copy as the authority; avoid unrelated remote stock. Show founder portrait only with an accurate name/caption.

## Interaction and responsive rules

- Desktop navigation is sparse and always has a visible contact action. Mobile navigation opens by button and closes after selecting a destination. Preserve the existing English/French switch.
- Use Font Awesome icons only where they clarify action or contact. Give icon-only controls an accessible name; hide decorative icons from assistive tech.
- Motion adds depth to photography. Use restrained GSAP scroll stacking and image scale/fade on desktop; disable scroll choreography for reduced motion and narrow screens. Content stays readable without JavaScript animation.
- All links and controls have visible keyboard focus. Touch targets are at least 44px. Verify 320px, 375px, tablet, and wide desktop without horizontal overflow.
- Provide meaningful alt text, real destinations, legible contrast, and no fabricated testimonials or metrics.

## Scope

The current redesign owns the homepage, shared navbar, and shared footer. Other routes keep working. New homepage elements use semantic HTML and CSS, never shadcn components. Reuse existing Next.js routing and locale context; add dependencies only for required Font Awesome and GSAP behavior.
