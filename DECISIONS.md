# PulseDesk — Design Decisions

## 1. Priya vs. Omar: where I picked a side

I designed the product around **Priya's team-level visibility as the primary job**, while keeping the interaction model simple enough for Omar.

The clearest conflict is the main queue. Priya needs to know, at a glance, **what is waiting, what is unassigned, who owns each ticket, and what is urgent**. Omar does not want to feel like he is operating a call center.

I chose a compact queue/dashboard rather than a highly configurable workspace with many panels, filters, automations, and analytics. That gives Priya the information she needs without making Omar learn a large system.

The screenshots show this choice: the queue uses a small set of useful signals — status, priority, assignee, customer, and time — instead of exposing every possible helpdesk control.

A second choice is the use of **plain-language ticket subjects and lightweight status/priority badges**. They help Priya scan quickly, but they avoid the dense, enterprise-style UI that would make Omar feel that the product is not for him.

## 2. My least confident assumption

My least confident assumption is the **pricing model**.

I used a simple tiered SaaS model rather than pricing every feature separately or building a complicated per-seat matrix. My reasoning is that PulseDesk is positioned as a lighter, cheaper alternative for 3–15 person teams, so pricing should be understandable before a buyer starts a trial.

I would validate this with real prospects by testing:
- whether a small team expects per-seat pricing,
- what price makes PulseDesk feel meaningfully cheaper than its alternatives,
- and whether Omar would prefer a genuinely useful solo plan or simply use the lowest team tier.

I would not treat the numbers as final without customer interviews and competitor research.

## 3. What I used AI for — and where I overrode it

I used AI for **early layout exploration, copy variations, UI structure, realistic ticket content, and frontend scaffolding**.

The most useful part was speed: AI helped turn a thin product brief into concrete options quickly.

The part I did not want to accept blindly was the generic “modern SaaS/helpdesk” pattern. AI naturally tends to produce:
- too many feature sections,
- overly generic claims,
- dashboard screens with too much information,
- and copy that sounds like a marketing template.

I overrode that by keeping the product proposition narrow: **a calm helpdesk for small support teams that makes today's queue obvious**.

I also chose not to make the app screens look like an enterprise call-center product. The queue and ticket view deliberately stay lightweight, with only the information needed to make the next support action clear.

In the coded landing page, I also kept the implementation focused on the assignment rather than adding unnecessary libraries or interactions.

## 4. The app screen I would build next

I would build the **main queue/dashboard** next.

The hardest frontend problem would not be drawing the table. It would be getting the interaction between **filters, assignment, status changes, responsive layout, and real-time-looking counts** right without making the interface feel heavy.

For example, if a user changes “Assignee” to Maya Chen, the visible queue, counts, empty state, and URL/shareable filter state should all stay consistent. On smaller screens, the table also cannot simply overflow horizontally forever; the most important fields need to remain visible.

I would build this from reusable pieces:
- `QueueHeader`
- `QueueStats`
- `TicketRow`
- `StatusBadge`
- `PriorityBadge`
- `FilterBar`
- `EmptyState`

The data should be separate from presentation so the same components can support loading, empty, filtered, and populated states.

## 5. What I deliberately did not design

I did not fully design:
- onboarding,
- a complete loading system,
- every possible error state,
- and a full settings/admin area.

I would normally consider these important, but the assignment is testing the core product experience first. I prioritized the landing page, main queue, ticket/conversation view, and one additional product surface.

I would still show or document the most important non-happy-path state in a production iteration: **an empty filtered queue**. It answers a real user question (“did my filter work?”) and prevents the interface from feeling broken when no tickets match.

---

## Implementation notes from the submitted code

The coded landing page is a React + Vite implementation.

The existing code already has a sensible minimal stack:
- React
- TypeScript
- Vite
- CSS/Tailwind setup

One implementation weakness I would address before production is that much of the landing page styling is written as large inline-style objects inside `LandingPage.tsx`. It works, but reusable sections and responsive behavior would be easier to maintain with semantic class names and component-level styles.

Another important prototype limitation is that the CTA handler is currently a no-op:

`onEnterApp={() => {}}`

That is acceptable for a visual take-home prototype, but in a real product the primary CTA should navigate to signup/trial or open the actual onboarding flow.

The navigation items also currently use placeholder `href="#"` links. I would replace those with real section anchors or routes before shipping.

These are intentional prototype-level limitations, not hidden product decisions.
