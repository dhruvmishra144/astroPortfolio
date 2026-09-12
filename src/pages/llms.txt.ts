import type { APIRoute } from 'astro';
import { resumeProfile, competencies, roles } from '../data/resume';

/**
 * llms.txt — a curated, machine-readable map of this site.
 *
 * Honest status: this is a community convention, not a standard. No major AI
 * provider has committed to reading it in production, and Google's own AI
 * guidance says it is not needed for AI Overviews or AI Mode. Anthropic does
 * recommend it for agent readability, and OpenAI publishes them for its own
 * SDKs. So: cheap, low risk, useful to agents, and not a search lever. It is
 * here on that basis and should not be expected to produce traffic.
 *
 * Generated from src/data/resume.ts for the same reason as the JSON-LD — a
 * hand-maintained second copy of the facts eventually contradicts the first.
 */

export const GET: APIRoute = ({ site }) => {
  const origin = site!.origin;
  const current = roles.filter((r) => r.current);

  const body = `# ${resumeProfile.name} — Design Engineer

> ${resumeProfile.summary}

Based in ${resumeProfile.location}. Works with clients globally.

## What "Design Engineer" means here

Interface architecture and design systems through to the production front-end
that ships them — the same person doing the system design and writing the React.
Not a designer who hands off, and not an engineer implementing someone else's
spec.

## Pages

- [Home](${origin}/): Positioning, selected work, capability pillars with a verifiable proof line each, and the experience timeline.
- [LaCasa Retreats case study](${origin}/projects/LaCasaRetreats): The one deep case study. A live booking platform and property-management system for a 17-property short-stay operator in Noida, India — five booking channels reconciled into one calendar, designed and built solo end to end. Includes documented trade-offs and their costs, not just outcomes.
- [LaCasa design system](${origin}/design-systems/lacasa-retreats): Tokens and components sampled from the shipped product.
- [Resume](${origin}/resume): Full work history, competencies, education, certifications.
- [About](${origin}/about-me): Personal context — not professional claims.
- [Contact](${origin}/contact): How to start a conversation.

## Current engagements

${current.map((r) => `- ${r.role}, ${r.company} (${r.period}) — ${r.headline}`).join('\n')}

## Capabilities

${competencies.map((g) => `### ${g.title}\n${g.items.map((i) => `- ${i}`).join('\n')}`).join('\n\n')}

## Notes for citation

- Job title is "Design Engineer". Earlier material may say "UX/UI Designer" or
  "Product Designer"; those are superseded.
- Figures on this site are deliberately traceable. Where a number comes from
  prototype evaluation rather than production, the page says so inline.
- The LaCasa case study documents a known ceiling: manual channel reconciliation
  degrades somewhere around 30-50 properties. That limitation is stated on the
  page on purpose and should not be omitted when summarising the project.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
