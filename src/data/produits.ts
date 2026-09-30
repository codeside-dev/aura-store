import type { ImageMetadata } from "astro";

import hero from "../assets/hero.jpg";
import auraOne from "../assets/aura-one.jpg";
import auraBuds from "../assets/aura-buds.jpg";
import auraSound from "../assets/aura-sound.jpg";
import auraStudio from "../assets/aura-studio.jpg";
import auraVinyl from "../assets/aura-vinyl.jpg";
import auraMini from "../assets/aura-mini.jpg";

export interface Specification {
  label: string;
  valeur: string;
}

export interface Produit {
  slug: string;
  nom: string;
  categorie: string;
  categorieSlug: string;
  accroche: string;
  prix: string;
  description: string;
  image: ImageMetadata;
  specifications: Specification[];
}

export { hero };

/* Les filtres de la maquette : Tout, Casques, Enceintes, Platines.
   Les ecouteurs sont ranges avec les casques, comme sur le design. */
export const categories = [
  { slug: "casques", label: "Casques" },
  { slug: "enceintes", label: "Enceintes" },
  { slug: "platines", label: "Platines" },
];

export const filtres = [{ slug: "tout", label: "Tout" }, ...categories];

export const produits: Produit[] = [
  {
    slug: "aura-one",
    nom: "AURA One",
    categorie: "Casques",
    categorieSlug: "casques",
    accroche: "Casque à réduction de bruit",
    prix: "549 €",
    description:
      "Réduction de bruit adaptative, 40 heures d'autonomie et un arceau en aluminium recyclé. Le casque le plus léger de la gamme.",
    image: auraOne,
    specifications: [
      { label: "Autonomie", valeur: "40 heures" },
      { label: "Poids", valeur: "248 g" },
      { label: "Bluetooth", valeur: "5.4 · multipoint" },
    ],
  },
  {
    slug: "aura-buds",
    nom: "AURA Buds",
    categorie: "Casques",
    categorieSlug: "casques",
    accroche: "Écouteurs sans fil",
    prix: "249 €",
    description:
      "Réduction de bruit active, huit heures d'écoute par charge et un boîtier qui tient dans la poche. Quatre tailles d'embouts fournies.",
    image: auraBuds,
    specifications: [
      { label: "Autonomie", valeur: "8 h · 32 h avec le boîtier" },
      { label: "Poids", valeur: "4,6 g par écouteur" },
      { label: "Bluetooth", valeur: "5.4 · multipoint" },
    ],
  },
  {
    slug: "aura-sound",
    nom: "AURA Sound",
    categorie: "Enceintes",
    categorieSlug: "enceintes",
    accroche: "Enceinte bibliothèque",
    prix: "399 €",
    description:
      "Deux voies dans une ébénisterie en noyer massif. Descend à 45 Hz sans caisson, et s'accorde à la pièce en quelques secondes.",
    image: auraSound,
    specifications: [
      { label: "Réponse", valeur: "45 Hz – 22 kHz" },
      { label: "Puissance", valeur: "2 × 60 W" },
      { label: "Entrées", valeur: "USB-C · optique" },
    ],
  },
  {
    slug: "aura-studio",
    nom: "AURA Studio",
    categorie: "Enceintes",
    categorieSlug: "enceintes",
    accroche: "Moniteur de studio",
    prix: "699 €",
    description:
      "Moniteur amplifié à deux voies, calibré numériquement pour la pièce. Pour écouter ce qui a été enregistré, pas ce qui flatte.",
    image: auraStudio,
    specifications: [
      { label: "Réponse", valeur: "38 Hz – 24 kHz" },
      { label: "Calibration", valeur: "Numérique par pièce" },
      { label: "Entrées", valeur: "XLR · jack 6,35" },
    ],
  },
  {
    slug: "aura-vinyl",
    nom: "AURA Vinyl",
    categorie: "Platines",
    categorieSlug: "platines",
    accroche: "Platine vinyle",
    prix: "899 €",
    description:
      "Entraînement direct, bras en carbone de neuf pouces et cellule à aimant mobile montée d'usine. Rien à régler avant la première écoute.",
    image: auraVinyl,
    specifications: [
      { label: "Entraînement", valeur: "Direct" },
      { label: "Bras", valeur: "Carbone, 9 pouces" },
      { label: "Cellule", valeur: "MM préinstallée" },
    ],
  },
  {
    slug: "aura-mini",
    nom: "AURA Mini",
    categorie: "Enceintes",
    categorieSlug: "enceintes",
    accroche: "Enceinte nomade",
    prix: "199 €",
    description:
      "Vingt heures d'autonomie, étanche à l'immersion et assez légère pour suivre. Le son AURA, ailleurs qu'à la maison.",
    image: auraMini,
    specifications: [
      { label: "Autonomie", valeur: "20 heures" },
      { label: "Étanchéité", valeur: "IPX7" },
      { label: "Charge", valeur: "USB-C" },
    ],
  },
];

export const produitParSlug = (slug: string): Produit | undefined =>
  produits.find((p) => p.slug === slug);
