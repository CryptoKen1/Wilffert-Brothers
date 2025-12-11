export type CategoryKey = 'finance' | 'tech' | 'health' | 'clothes'

export const categories: Record<
  CategoryKey,
  {
    label: string
    description: string
    items: { title: string; summary: string; highlights: string[] }[]
  }
> = {
  finance: {
    label: 'Finance',
    description:
      'Money moves that actually work: high-yield picks, smart credit, and tools that keep cash flowing.',
    items: [
      {
        title: 'Starter Investment Stack',
        summary:
          'Index fund basics plus a simple rebalancing cadence you can keep up for years.',
        highlights: ['Automated contributions', 'Low-fee funds', 'Quarterly check-ins'],
      },
      {
        title: 'Cashflow Playbook',
        summary: 'A 50/30/20-inspired budget tuned for side hustles and variable income.',
        highlights: ['Weekly reviews', 'Buffer-first savings', 'Debt snowball option'],
      },
      {
        title: 'Credit Score Sprint',
        summary: 'Steps to lift your score in 90 days without gimmicks or hacks.',
        highlights: ['Reporting schedule', 'Utilization caps', 'Dispute template'],
      },
    ],
  },
  tech: {
    label: 'Tech',
    description:
      'Gear and workflows that keep you sharp: from focused setups to automation that saves hours.',
    items: [
      {
        title: 'Minimal Workstation',
        summary: 'Hardware picks for a distraction-light, performance-heavy desk.',
        highlights: ['Ergo-first layout', 'Single-cable docking', 'Neutral lighting'],
      },
      {
        title: 'Automation Kit',
        summary: 'Shortcuts, snippets, and micro-automations that shave minutes daily.',
        highlights: ['Text expander set', 'Focus timer presets', 'Weekly cleanup cron'],
      },
      {
        title: 'Security Basics',
        summary: 'Practical security moves that protect without slowing you down.',
        highlights: ['Passkey ready', '2FA defaults', 'Backups that auto-verify'],
      },
    ],
  },
  health: {
    label: 'Health',
    description:
      'Training and recovery built for momentum: simple, repeatable, and hard to skip.',
    items: [
      {
        title: '3x Week Strength',
        summary: 'Push, pull, legs rotation with progressive overload you can track.',
        highlights: ['Warmup flows', 'RPE guidance', '30–45 minute sessions'],
      },
      {
        title: 'Sleep Protocol',
        summary: 'A nighttime routine that stacks small wins into deep sleep.',
        highlights: ['Wind-down checklist', 'Caffeine cutoff', 'Weekend resets'],
      },
      {
        title: 'Recovery Staples',
        summary: 'Nutrition and mobility habits that keep you training consistently.',
        highlights: ['Protein targets', 'Hydration plan', '10-minute mobility'],
      },
    ],
  },
  clothes: {
    label: 'Clothes',
    description: 'Everyday pieces that survive travel, workouts, and nights out without fuss.',
    items: [
      {
        title: 'Core Capsule',
        summary: '8–10 pieces that mix cleanly across work and weekend.',
        highlights: ['Neutral palette', 'Tailored fit', 'Wrinkle resistant'],
      },
      {
        title: 'Travel Pack',
        summary: 'Carry-on ready kit that covers gym, meetings, and dinner.',
        highlights: ['Quick-dry layers', 'Packable outerwear', 'Versatile footwear'],
      },
      {
        title: 'Care Routine',
        summary: 'Keep fabrics fresh longer with minimal effort.',
        highlights: ['Wash schedule', 'De-pill basics', 'Proper storage'],
      },
    ],
  },
}

