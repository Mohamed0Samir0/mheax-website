export type Category = "Paid Ads" | "Landing Pages" | "Creative Strategy" | "Websites";

export interface CaseStudy {
  slug: string;
  brand: string;
  industry: string;
  projectType: string;
  tagline: string;
  description: string;
  categories: Category[];
  accent: string;
  image: string;
  imageAspect: string;
  challenge: string;
  customer: {
    problem: string;
    desire: string;
    objection: string;
    belief: string;
    motivation: string;
  };
  insight: string;
  angle: string;
  bigIdea: string;
  copy: {
    hooks: string[];
    headlines: string[];
    primary: string;
    cta: string[];
  };
  creativeDirection: string;
  execution: string[];
  demonstrates: {
    messaging: string;
    positioning: string;
    creative: string;
    understanding: string;
    structure: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "reebelo",
    brand: "Reebelo",
    industry: "Refurbished Tech",
    projectType: "Paid ads & messaging concept",
    tagline: "Refurbished Tech",
    description:
      "Conversion-focused creative thinking for refurbished technology, centered around clarity, value, and customer hesitation.",
    categories: ["Paid Ads", "Creative Strategy"],
    accent: "#C8983F",
    image: "/images/work/reebelo.jpg",
    imageAspect: "1400/933",
    challenge:
      "Refurbished tech carries a trust gap before it carries a value proposition. The communication problem isn't proving the discount — it's removing the doubt that sits in front of it.",
    customer: {
      problem: "Wants a newer device without paying full price, but isn't sure a refurbished phone will actually hold up.",
      desire: "A device that feels and performs like new, at a price that feels responsible rather than risky.",
      objection: "\"Refurbished\" sounds like a compromise — used, unreliable, or someone else's problem.",
      belief: "New is safe. Used is a gamble.",
      motivation: "Get more phone for less money, without feeling like they settled.",
    },
    insight:
      "People don't hesitate on price — they hesitate on condition. The moment a buyer feels confident about quality, the discount stops being a warning sign and starts being the whole reason to buy.",
    angle:
      "Reframe refurbished from a compromise into an informed decision — the smarter version of buying new.",
    bigIdea:
      "Sell the confidence, not the discount: \"Like new. Priced like you noticed.\"",
    copy: {
      hooks: [
        "Same phone. Same screen. Half the guilt about the price.",
        "The only thing refurbished about this iPhone is the price tag.",
        "Everyone checks the price first. Smart buyers check the grading.",
      ],
      headlines: [
        "A newer phone, without the new-phone price.",
        "Tested. Graded. Guaranteed. Then discounted.",
        "The upgrade you were waiting to justify.",
      ],
      primary:
        "You don't need the newest phone. You need one that works like it, without the price of pretending it's precious. Every device is graded, tested, and backed by a warranty — so the only thing you're giving up is the markup.",
      cta: ["Shop Certified Refurbished", "See the Grading Standard", "Find Your Upgrade"],
    },
    creativeDirection:
      "Visuals built around close, tactile product shots and simple grading marks (A/A+ style badges) instead of lifestyle imagery — letting the product's condition do the reassuring, with clean type carrying the price argument.",
    execution: [
      "Static paid ad set focused on price-vs-condition framing",
      "Grading badge system used as a trust device across creative",
      "Landing page hero concept pairing product close-ups with warranty messaging",
      "Short-form hook variations for testing against a value-only angle",
    ],
    demonstrates: {
      messaging: "This concept explores how removing a single objection (condition, not price) can carry more weight than any discount messaging.",
      positioning: "The strategy focused on repositioning refurbished from a fallback option to a deliberate, informed purchase.",
      creative: "The creative direction was built around proof over persuasion — grading and warranty details doing the selling.",
      understanding: "It demonstrates identifying the real barrier to purchase before writing a single line of ad copy.",
      structure: "It shows how a conversion path can be built around trust-first sequencing rather than discount-first sequencing.",
    },
  },
  {
    slug: "modesens",
    brand: "ModeSens",
    industry: "Luxury E-commerce",
    projectType: "Landing page & creative concept",
    tagline: "Luxury E-commerce",
    description:
      "Creative and messaging exploration for luxury e-commerce, focused on how the product and value are communicated.",
    categories: ["Landing Pages", "Creative Strategy"],
    accent: "#C8983F",
    image: "/images/work/modesens.jpg",
    imageAspect: "1120/1400",
    challenge:
      "Luxury shoppers aren't short on options — they're short on reasons to trust a new platform with an expensive decision. The challenge is communicating authority and authenticity without sounding like every other marketplace.",
    customer: {
      problem: "Wants access to designer pieces and better pricing, but is wary of authenticity and platform credibility.",
      desire: "To shop confidently across brands in one place, without losing the feeling of buying something considered.",
      objection: "\"If it's discounted, is it authentic? If it's aggregated, is it curated?\"",
      belief: "Luxury shopping should feel selective, not like browsing a warehouse.",
      motivation: "Find the right piece faster, with less risk, while still feeling like a considered buyer.",
    },
    insight:
      "Luxury customers aren't looking for more choice — they're looking for edited choice. The value isn't the size of the catalogue, it's the confidence that someone already filtered it for them.",
    angle:
      "Position the platform as a curator with reach, not a marketplace with inventory.",
    bigIdea:
      "\"Every brand you'd trust. Filtered by someone who knows the difference.\"",
    copy: {
      hooks: [
        "Not every marketplace. Just the ones worth shopping.",
        "Designer pieces, without the guesswork.",
        "Curated across brands. Verified across every listing.",
      ],
      headlines: [
        "Luxury, without the noise of everything else.",
        "One place. Every brand that earned it.",
        "Shop like someone already did the editing for you.",
      ],
      primary:
        "Access hundreds of designer brands in one place — each listing verified, each price compared, each piece worth the search. It's not about finding more. It's about not having to look everywhere else first.",
      cta: ["Explore the Edit", "Compare Before You Buy", "Start Browsing"],
    },
    creativeDirection:
      "Editorial-style product presentation with restrained typography and generous negative space, closer to a fashion feature than an e-commerce grid — the layout itself signals curation.",
    execution: [
      "Landing page concept structured around 'the edit' as a recurring idea",
      "Homepage hero direction pairing single-product focus with cross-brand price comparison",
      "Email concept for new arrivals framed as a curated drop, not a catalogue update",
      "Ad concepts contrasting 'everywhere' vs. 'edited' shopping",
    ],
    demonstrates: {
      messaging: "This concept explores how positioning around curation can outperform positioning around selection size.",
      positioning: "The strategy focused on separating the brand from generic marketplace language.",
      creative: "The creative direction was built around editorial restraint as a trust signal for a luxury audience.",
      understanding: "It demonstrates understanding that luxury objections are about confidence, not affordability.",
      structure: "It shows how page structure can reinforce a brand's positioning, not just its product feed.",
    },
  },
  {
    slug: "innroad",
    brand: "innroad",
    industry: "Hospitality",
    projectType: "Website & messaging concept",
    tagline: "Hospitality",
    description:
      "Messaging and creative exploration for hospitality, built around the customer problem of managing operations more effectively.",
    categories: ["Websites", "Landing Pages"],
    accent: "#C8983F",
    image: "/images/work/innroad.jpg",
    imageAspect: "1400/933",
    challenge:
      "Property management software is judged less on features and more on how much friction it removes from an already overloaded operator's day. The challenge is making 'simpler operations' feel specific, not generic.",
    customer: {
      problem: "Running a small or independent property with too many disconnected tools — bookings, front desk, payments, channels.",
      desire: "One system that keeps the property running smoothly without needing a full IT team to manage it.",
      objection: "\"Every platform says it's simple until you're three weeks into onboarding.\"",
      belief: "Property management software is built for big chains, not for someone also fixing the front desk printer.",
      motivation: "Get back time and reduce daily operational stress, not just add another dashboard.",
    },
    insight:
      "Independent operators don't want more software — they want fewer places to check. The real value isn't the feature list, it's the mental load the system removes.",
    angle:
      "Sell the reduction of operational noise, not the addition of a platform.",
    bigIdea:
      "\"Run the property. Not the software.\"",
    copy: {
      hooks: [
        "One login instead of five tabs open at once.",
        "Built for the property you actually run, not a hotel chain's IT department.",
        "Less software to manage. More property to run.",
      ],
      headlines: [
        "Everything your front desk touches, in one place.",
        "The operations software that gets out of the way.",
        "Simpler doesn't mean fewer features. It means less friction.",
      ],
      primary:
        "Bookings, front desk, payments, and channel management — connected instead of scattered. Built for teams who need the day to run smoother, not a system that needs its own training manual.",
      cta: ["See It In Action", "Book a Walkthrough", "Talk to the Team"],
    },
    creativeDirection:
      "Clean interface-forward visuals showing the product removing steps rather than adding screens — before/after workflow framing used instead of abstract software imagery.",
    execution: [
      "Homepage hero concept centered on the 'one login' idea",
      "Website section structure mapped to a front-desk workflow, not a feature list",
      "Landing page concept for independent property owners specifically",
      "Messaging framework separating 'features' from 'friction removed'",
    ],
    demonstrates: {
      messaging: "This concept explores reframing a software product around the operator's day rather than its feature set.",
      positioning: "The strategy focused on distinguishing an independent-operator audience from enterprise hospitality messaging.",
      creative: "The creative direction was built around workflow clarity as the visual language of simplicity.",
      understanding: "It demonstrates identifying operational stress, not missing features, as the real conversion barrier.",
      structure: "It shows how a website's structure can mirror a customer's actual daily workflow.",
    },
  },
  {
    slug: "tracksmith",
    brand: "Tracksmith",
    industry: "Running Apparel",
    projectType: "Advertising concept",
    tagline: "Running Apparel",
    description:
      "Advertising concepts built around the emotional and functional motivations behind premium running apparel.",
    categories: ["Paid Ads", "Creative Strategy"],
    accent: "#C8983F",
    image: "/images/work/tracksmith.jpg",
    imageAspect: "1120/1400",
    challenge:
      "Premium running apparel competes against brands with far larger budgets and broader appeal. The challenge is speaking directly to serious runners without diluting the message to reach everyone.",
    customer: {
      problem: "Committed runners often wear gear that treats running as a general fitness activity, not a discipline.",
      desire: "Apparel that reflects the seriousness of their training, not just their activity level.",
      objection: "\"Premium running gear feels like it's designed for the idea of running, not the practice of it.\"",
      belief: "Performance brands are for everyone; identity brands are for people who take it seriously.",
      motivation: "Look and feel like the runner they already are — disciplined, consistent, unglamorous about it.",
    },
    insight:
      "Serious runners aren't buying performance — most gear already performs. They're buying a signal to themselves and other runners that they take the sport seriously, even on an ordinary Tuesday run.",
    angle:
      "Speak to the discipline of running, not the marketing of fitness.",
    bigIdea:
      "\"Not for people who run. For people who train.\"",
    copy: {
      hooks: [
        "No one's watching this run. Wear it anyway.",
        "Made for the runs that don't make it onto anyone's feed.",
        "Built for the training, not the finish line photo.",
      ],
      headlines: [
        "Apparel for people who run before the excuses wake up.",
        "For the miles nobody's tracking but you.",
        "Not activewear. Training kit.",
      ],
      primary:
        "This isn't gear designed to look athletic. It's gear designed for the runners who'd be out there whether anyone noticed or not — built for the discipline behind the sport, not the aesthetic around it.",
      cta: ["Shop the Collection", "See the Kit", "Gear Up for the Work"],
    },
    creativeDirection:
      "Understated, early-morning and off-season imagery instead of race-day energy — empty roads, quiet training environments, and utilitarian type treatment that mirrors the brand's discipline-first identity.",
    execution: [
      "Print-style ad concepts built around solitary training moments",
      "Headline system contrasting 'activewear' language with 'training' language",
      "Social ad concepts targeting committed runners over general fitness audiences",
      "Campaign line exploration built around consistency over spectacle",
    ],
    demonstrates: {
      messaging: "This concept explores narrowing an audience deliberately to strengthen identity-based messaging.",
      positioning: "The strategy focused on separating a training-first brand from broader activewear positioning.",
      creative: "The creative direction was built around restraint and quiet moments instead of typical sports-brand energy.",
      understanding: "It demonstrates understanding identity motivation as a stronger lever than performance claims.",
      structure: "It shows how a single strategic angle can be carried consistently across hooks, headlines, and visuals.",
    },
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
