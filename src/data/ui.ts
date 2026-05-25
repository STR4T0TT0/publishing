import type { Language } from "../config/i18n";

export const ui: Record<
  Language,
  {
    nav: {
      home: string;
      ai: string;
      cybersecurity: string;
      crypto: string;
      about: string;
    };
    home: {
      eyebrow: string;
      title: string;
      lead: string;
      statusLabel: string;
      statusTitle: string;
      statusText: string;
      domainsTitle: string;
    };
    cta: {
      readMore: string;
      followLinkedIn: string;
      newsletter: string;
    };
    footer: {
      brandLine: string;
      staging: string;
    };
    meta: {
      readingTime: string;
}
  }
> = {
  en: {
    nav: {
      home: "Home",
      ai: "AI",
      cybersecurity: "Cybersec",
      crypto: "Crypto",
      about: "About",
    },
    home: {
      eyebrow: "Strategic intelligence briefing",
      title: "When digital systems become strategic risk",
      lead:
        "Analyzing how artificial intelligence, cybersecurity, and digital assets reshape infrastructure, power, risk, and capital allocation.",      statusLabel: "Migration status",
      statusTitle: "Astro + Cloudflare Pages are operational.",
      statusText:
        "This staging environment is protected by Cloudflare Access and will be used to validate the new design, bilingual routing, content model, and AI-assisted publishing workflow.",
      domainsTitle: "Intelligence domains",
    },
    cta: {
      readMore: "Read more",
      followLinkedIn: "Follow on LinkedIn",
      newsletter: "Subscribe to the newsletter",
    },
    footer: {
      brandLine: "Strategic intelligence briefing",
      staging: "© STR4T0TT0. All rights reserved. Code MIT.",
    },
    meta: {
      readingTime: "min read",
},
  },
  fr: {
    nav: {
      home: "Accueil",
      ai: "IA",
      cybersecurity: "Cybersec",
      crypto: "Crypto",
      about: "À propos",
    },
    home: {
      eyebrow: "Note d’intelligence stratégique",
      title: "Quand les systèmes numériques deviennent un risque stratégique",
      lead:
        "Analyser comment l’intelligence artificielle, la cybersécurité et les actifs numériques redessinent les infrastructures, le pouvoir, le risque et les arbitrages d’investissement.",      statusLabel: "Statut de migration",
      statusTitle: "Astro + Cloudflare Pages sont opérationnels.",
      statusText:
        "Cet environnement de staging est protégé par Cloudflare Access et servira à valider le design, le routage bilingue, le modèle de contenu et le futur workflow éditorial assisté par IA.",
      domainsTitle: "Domaines d’analyse",
    },
    cta: {
      readMore: "Lire la suite",
      followLinkedIn: "Suivre sur LinkedIn",
      newsletter: "S’abonner à la newsletter",
    },
    footer: {
      brandLine: "Strategic intelligence briefing",
      staging: "© STR4T0TT0. Tous droits réservés. Code sous licence MIT.",
    },
    meta: {
      readingTime: "min read",
},
  },
};