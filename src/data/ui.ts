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
      cybersecurity: "Cybersecurity",
      crypto: "Crypto",
      about: "About",
    },
    home: {
      eyebrow: "Editorial publishing platform",
      title: "Strategic intelligence for digital systems.",
      lead: "STR4T0TT0 analyzes AI, cybersecurity, and crypto as infrastructures of power, risk, capital allocation, and decision-making.",
      statusLabel: "Migration status",
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
      staging: "Staging environment. Authorized access only.",
    },
    meta: {
  readingTime: "min read",
},
  },
  fr: {
    nav: {
      home: "Accueil",
      ai: "IA",
      cybersecurity: "Cybersécurité",
      crypto: "Crypto",
      about: "À propos",
    },
    home: {
      eyebrow: "Plateforme éditoriale",
      title: "Intelligence stratégique pour systèmes numériques.",
      lead: "STR4T0TT0 analyse l’IA, la cybersécurité et les crypto-actifs comme des infrastructures de pouvoir, de risque, d’allocation du capital et de décision.",
      statusLabel: "Statut de migration",
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
      staging: "Environnement de staging. Accès autorisé uniquement.",
    },
    meta: {
  readingTime: "min read",
},
  },
};