// ============================================================================
//  SITE CONFIG — edit this file to change site-wide info. No code knowledge
//  required: just update the text between the quotes.
// ============================================================================

export const site = {
  name: "Ice Baseball",
  tagline: "Building dynamic competitors on and off the field.",
  description:
    "Ice Baseball is a youth travel baseball organization in East Tennessee developing skilled, well-rounded athletes through superior coaching in a Christ-centered environment.",
  region: "Knoxville & Chattanooga, TN",

  // ==========================================================================
  //  ⚠️  DUMMY DATA — DEVELOPMENT MODE
  //  All real contact info below has been replaced with fictional placeholders
  //  (example.com / 555-01xx) so nothing can accidentally reach a real inbox,
  //  phone, or store while we build. RESTORE the real values before launch:
  //
  //    email:        icebaseballtn@gmail.com
  //    phone:        (865) 279-6401   /   tel:+18652796401
  //    teamShop:     https://team.shop   (invite code 3NQQ867R)
  //    tryoutForm:   (the real Google Form URL)
  //    social:       the real Facebook / Instagram / X / TikTok profile URLs
  // ==========================================================================

  // --- Direct contact (DUMMY) -----------------------------------------------
  email: "dev-placeholder@example.com",
  phone: "(555) 555-0123",
  phoneHref: "tel:+15555550123", // used by the click-to-call link

  // --- External tools we link out to (DUMMY) --------------------------------
  links: {
    // The "Sign Up Now" button on the Tryouts page points here.
    tryoutForm: "https://example.com/tryout-form-placeholder",

    // The Team Shop page sends people to your external store.
    teamShop: "https://example.com/shop-placeholder",
    teamShopCode: "DEMO-0000",
  },

  // --- Social media (DUMMY) -------------------------------------------------
  social: {
    facebook: "https://example.com/facebook-placeholder",
    instagram: "https://example.com/instagram-placeholder",
    twitter: "https://example.com/x-placeholder",
    tiktok: "https://example.com/tiktok-placeholder",
  },

  // --- Contact form delivery ------------------------------------------------
  // The contact form submits to Formspree (free). Create a form at
  // https://formspree.io (point it at the real inbox), then paste the form ID
  // below — it's the bit after "/f/" in your endpoint URL.
  // While this is the placeholder, the form falls back to the visitor's email
  // client addressed to the (currently dummy) `email` above — so no real
  // messages can be sent during development.
  formspreeId: "your-formspree-id",

  // --- Navigation order (matches the old site) ------------------------------
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/tryouts", label: "Tryouts" },
    { href: "/coaches", label: "Coaches" },
    { href: "/team-shop", label: "Team Shop" },
    { href: "/uniforms", label: "Uniforms" },
    { href: "/terms", label: "Terms" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
