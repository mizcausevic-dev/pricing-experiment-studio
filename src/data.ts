export const heroMetrics = [
  {
    label: 'Live pricing surface',
    value: '$6.4M ARR',
    detail: 'Commercial exposure across checkout, packaging, and trial gate experiments',
  },
  {
    label: 'Qualified conversion delta',
    value: '+4.8%',
    detail: 'Weighted lift across active tests after confidence adjustment',
  },
  {
    label: 'Elasticity confidence',
    value: '81%',
    detail: 'Signal quality after controlling for segment mix and deal-size skew',
  },
  {
    label: 'Rollback watch',
    value: '2 tests',
    detail: 'Guardrail pressure concentrated in trial compression and annual discounting',
  },
]

export const packageLadders = [
  {
    tier: 'Starter',
    price: '$59',
    audience: 'Self-serve teams',
    highlight: 'Fast onboarding and simpler activation path',
    bullets: ['1 workspace', 'Core reporting', 'Email support', 'Guided onboarding'],
  },
  {
    tier: 'Growth',
    price: '$179',
    audience: 'Operator-led expansion',
    highlight: 'Current experiment target with stronger value framing',
    bullets: ['5 workspaces', 'Forecasting suite', 'Workflow automations', 'Advanced attribution'],
  },
  {
    tier: 'Scale',
    price: '$399',
    audience: 'Mid-market teams',
    highlight: 'Packaging test for usage-based add-ons and admin controls',
    bullets: ['Unlimited teams', 'Approval routing', 'Identity controls', 'Priority support'],
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    audience: 'Sales-assisted motion',
    highlight: 'Commercial trust and procurement readiness matter more than list price',
    bullets: ['Security review pack', 'Custom SLAs', 'Dedicated success', 'Procurement workflows'],
  },
]

export const experimentCards = [
  {
    name: 'Checkout anchoring refresh',
    state: 'Promote',
    lift: '+9.1% ARPA',
    confidence: '88%',
    risk: 'Healthy',
    summary: 'Enterprise-friendly framing is improving deal quality without damaging self-serve completion.',
  },
  {
    name: 'Growth ladder simplification',
    state: 'Hold',
    lift: '+5.2% plan selection',
    confidence: '76%',
    risk: 'Watch',
    summary: 'Prospects understand the offer faster, but assisted pipeline is pausing at procurement handoff.',
  },
  {
    name: 'Seven-day trial compression',
    state: 'Rollback watch',
    lift: '+3.4% first-payment rate',
    confidence: '64%',
    risk: 'Critical',
    summary: 'Short-term cash improves, but activation and adoption quality fall off in larger accounts.',
  },
]

export const elasticityRows = [
  {
    cohort: 'SMB self-serve',
    conversion: '6.8%',
    arpa: '$734',
    tolerance: 'High',
    narrative: 'Responds best to clean annual framing and a lower-friction entry package.',
  },
  {
    cohort: 'Mid-market inbound',
    conversion: '4.4%',
    arpa: '$2,260',
    tolerance: 'Moderate',
    narrative: 'Packaging clarity helps, but budget-owner confidence drops when tiers feel too compressed.',
  },
  {
    cohort: 'Partner-led pipeline',
    conversion: '5.1%',
    arpa: '$3,180',
    tolerance: 'Moderate',
    narrative: 'Conversion improves when pricing guidance is paired with implementation narrative.',
  },
  {
    cohort: 'Enterprise direct',
    conversion: '2.7%',
    arpa: '$9,200',
    tolerance: 'Low',
    narrative: 'Commercial trust matters more than price shape; procurement friction dominates elasticity response.',
  },
]

export const scenarioCards = [
  {
    title: 'Annual-first self-serve',
    outcome: 'Best for cash efficiency',
    impact: '+11% bookings pace',
    detail: 'Works if onboarding friction stays contained and discounting is tightly bounded.',
  },
  {
    title: 'Usage-based Growth package',
    outcome: 'Best for expansion signaling',
    impact: '+8% multi-seat upgrades',
    detail: 'Needs cleaner product education and a stronger in-app packaging story.',
  },
  {
    title: 'Sales-assisted premium gate',
    outcome: 'Best for enterprise trust',
    impact: '+14% late-stage win rate',
    detail: 'Supports larger ACV but slows first-touch velocity without partner enablement.',
  },
]

export const guardrails = [
  {
    label: 'Activation',
    status: 'At risk',
    measure: '-3.1 pts',
    note: 'Seven-day trial compression is degrading first-value completion in larger accounts.',
  },
  {
    label: 'Lead quality',
    status: 'Stable',
    measure: '+1.4 pts',
    note: 'Higher-value framing is attracting more serious demo requests instead of low-intent trials.',
  },
  {
    label: 'Support load',
    status: 'Watch',
    measure: '+9%',
    note: 'Packaging complexity is increasing pre-sales clarification requests in assisted flows.',
  },
]

export const actionQueue = [
  {
    priority: 'P1',
    title: 'Freeze trial-compression rollout before activation declines compound',
    owner: 'Growth PM',
    due: 'Today',
  },
  {
    priority: 'P1',
    title: 'Promote checkout anchoring into full self-serve audience with procurement-safe copy',
    owner: 'Pricing Ops',
    due: 'This sprint',
  },
  {
    priority: 'P2',
    title: 'Reframe Growth-to-Scale ladder with clearer admin-control narrative',
    owner: 'Product Marketing',
    due: '48 hours',
  },
  {
    priority: 'P3',
    title: 'Publish executive memo on elasticity by channel and segment',
    owner: 'Strategy',
    due: 'Friday',
  },
]
