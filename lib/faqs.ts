export type Faq = {
  question: string;
  answer: string;
  category: "Modèle" | "Opérations" | "Conformité & données" | "Démarrage";
};

export const faqs: Faq[] = [
  {
    category: "Modèle",
    question: "Que fait jabby, concrètement ?",
    answer:
      "jabby opère votre recouvrement amiable de bout en bout : relances multicanales, négociation des promesses, liens de paiement, encaissement et réconciliation. Vous déposez vos créances, nous faisons le reste, et vous suivez tout en temps réel."
  },
  {
    category: "Modèle",
    question: "Combien ça coûte ?",
    answer:
      "Vous ne payez qu'au résultat : une commission sur les montants effectivement recouvrés, définie au cadrage selon l'ancienneté, le montant et le volume de vos créances. Pas de frais d'installation, pas d'abonnement."
  },
  {
    category: "Modèle",
    question: "Et si vous ne récupérez rien ?",
    answer:
      "Vous ne payez rien. Le risque de performance est le nôtre : c'est ce qui aligne nos intérêts avec les vôtres, dossier par dossier."
  },
  {
    category: "Modèle",
    question: "En quoi est-ce différent d'un prestataire de recouvrement classique ?",
    answer:
      "Trois différences structurelles : chaque relance part au nom de votre entreprise, jamais d'un tiers ; chaque action est journalisée, horodatée et exportable ; et rien n'est improvisé, nous n'exécutons que des stratégies que vous avez validées."
  },
  {
    category: "Opérations",
    question: "Qui parle à mes clients ?",
    answer:
      "Les relances suivent des scripts et des modèles que vous validez, envoyés au nom de votre entreprise. Notre plateforme orchestre les séquences ; nos équipes supervisent et prennent la main sur les cas sensibles : litiges, situations de fragilité, dossiers à fort enjeu."
  },
  {
    category: "Opérations",
    question: "Quels canaux utilisez-vous ?",
    answer:
      "L'appel téléphonique d'abord, puis WhatsApp, SMS et email en rattrapage, avec un lien de paiement sécurisé dans chaque relance. Les canaux et les plages horaires sont activés selon vos règles."
  },
  {
    category: "Opérations",
    question: "Utilisez-vous de l'intelligence artificielle ?",
    answer:
      "Oui, comme moyen, pas comme argument : l'IA aide à prioriser les dossiers, adapter les séquences et préparer les échanges. Elle opère dans un cadre déterministe, sous des règles validées par vous, avec une supervision humaine systématique sur les cas sensibles."
  },
  {
    category: "Opérations",
    question: "Comment protégez-vous ma relation client et mon image ?",
    answer:
      "Par trois garde-fous : l'identité first-party (le débiteur reste dans votre relation, face à votre marque), des règles strictes de fréquence et d'horaires, et un principe non négociable de respect du débiteur. Un débiteur traité correctement reste un client."
  },
  {
    category: "Opérations",
    question: "Que se passe-t-il si un dossier est contesté ou litigieux ?",
    answer:
      "La séquence s'arrête immédiatement et le dossier passe en revue humaine. Selon votre choix, il vous est retourné avec l'historique complet des actions, utilisable pour la suite, y compris judiciaire si vous en décidez ainsi. jabby n'intervient que sur le terrain amiable."
  },
  {
    category: "Conformité & données",
    question: "Comment les données sont-elles protégées ?",
    answer:
      "Chiffrement en transit et au repos, contrôle d'accès par rôle, journalisation complète et politiques de conservation définies avec vous. Le traitement est aligné sur la loi 09-08 et les exigences de la CNDP."
  },
  {
    category: "Conformité & données",
    question: "Quel est le cadre contractuel ?",
    answer:
      "Un mandat de recouvrement amiable et un accord de traitement des données : jabby agit comme sous-traitant pour votre compte, avec des obligations explicites de sécurité, de confidentialité et de réversibilité."
  },
  {
    category: "Conformité & données",
    question: "Puis-je récupérer mes données si je pars ?",
    answer:
      "Oui, à tout moment, dans des formats ouverts : créances, historique des actions, journal d'audit. La réversibilité fait partie du contrat, pas de la négociation."
  },
  {
    category: "Démarrage",
    question: "Combien de temps pour démarrer ?",
    answer:
      "Un cadrage de votre portefeuille, la validation des stratégies, puis un premier lot de dossiers : les premières relances partent en général quelques semaines après la signature, avec une montée en charge progressive."
  },
  {
    category: "Démarrage",
    question: "Y a-t-il un volume minimum de créances ?",
    answer:
      "Le service est conçu pour des portefeuilles récurrents, quelle qu'en soit la taille. Le cadrage initial permet de confirmer que le modèle au succès a du sens sur votre segment, avant tout engagement."
  },
  {
    category: "Démarrage",
    question: "Comment demander une démonstration ?",
    answer:
      "Via le formulaire de contact ou par email à contact@jabby.io. Nous organisons un échange de 30 minutes centré sur vos volumes, vos segments et vos contraintes, avec une réponse sous 24 heures ouvrées."
  }
];

export const homeFaqs = [
  faqs[0],
  faqs[1],
  faqs[2],
  faqs[4],
  faqs[9],
  faqs[3]
];
