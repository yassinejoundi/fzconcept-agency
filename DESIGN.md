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

## Site journey

1. **Attention:** split editorial hero; short Marrakech-specific promise and two clear paths: discuss a project, see work.
2. **Interest:** short studio philosophy plus an exact three-card grid showing apartments, villas, and detail work.
3. **Desire:** image-led method and genuine founder/studio lines from the PDF; show the value of made-to-measure planning and one-to-one follow-through.
4. **Action:** strong closing invitation to request a personalized study, followed by useful contact routes and legal links.

Use the six photographs in `.project/images` as local source material. Publish optimized copies under `public/images`. Treat the brochure's imagery and copy as the authority; avoid unrelated remote stock. Show founder portrait only with an accurate name/caption.

The portfolio uses the labelled project photographs embedded in `.project/FZ flare.pdf`. Keep those captions factual: villa living room and suite, apartment bedroom and dining room, riad guest room, custom TV furniture, welcome area, and materials. Other pages may use the supplied `.project/images` as atmosphere without presenting them as completed client projects.

- **About:** studio point of view, the three brochure commitments (elegance, personalization, function), and its six-stage method.
- **Services:** six brochure services, their practical outputs, and a direct path to discuss a project.
- **Portfolio:** visual work first, exact brochure captions, and a closing project invitation. No made-up client names or metrics.
- **Contact:** concise invitation, verified contact routes, and the existing submission form and privacy agreement. Do not promise hours or reply times absent from the brochure.
- **Links and legal:** calm typography, readable line lengths, and the same navigation and footer. Preserve legal substance while fixing obsolete contact details.

## Interaction and responsive rules

- Desktop navigation is sparse and always has a visible contact action. Mobile navigation opens by button and closes after selecting a destination. Preserve the existing English/French switch.
- Use Font Awesome icons only where they clarify action or contact. Give icon-only controls an accessible name; hide decorative icons from assistive tech.
- Motion adds depth to photography. Use restrained GSAP scroll stacking and image scale/fade on desktop; disable scroll choreography for reduced motion and narrow screens. Content stays readable without JavaScript animation.
- All links and controls have visible keyboard focus. Touch targets are at least 44px. Verify 320px, 375px, tablet, and wide desktop without horizontal overflow.
- Provide meaningful alt text, real destinations, legible contrast, and no fabricated testimonials or metrics.

## Admin workspace

Admin routes use the same palette and type with tighter spacing for daily work. Sign-in can use one atmospheric image; the dashboard gives messages priority over decorative cards or unverified metrics. Use a simple private header, clear account and sign-out controls, and a single readable inbox. Show explicit loading, empty, and error states. Keep reply and call actions close to each enquiry and preserve the existing auth and messages API. Use native controls and Font Awesome icons; avoid shadcn elements.

## Scope

The editorial system covers public routes and the shared navbar and footer. Admin routes use a compact workspace variant with their own header and footer. Reuse existing Next.js routing, locale context, auth, and contact API.
