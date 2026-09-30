# aura-store

Boutique en ligne statique **AURA**, marque de matériel audio.
Traduit du design pen.dev [`ecommerce-aura`](https://github.com/codeside-dev/maquettes-pen-dev/tree/main/ecommerce-aura).

## Stack

- [Astro](https://astro.build) 5, en sortie statique
- [Tailwind CSS](https://tailwindcss.com) v4, via `@tailwindcss/vite`
- `astro:assets` pour l'optimisation des images

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Accueil : heros, à la une, arguments |
| `/boutique/` | Liste des produits, filtrable par catégorie |
| `/produit/<slug>/` | Fiche produit — six articles |

Les filtres de catégorie fonctionnent côté client, et les liens du menu
(`/boutique?categorie=casques`) présélectionnent le filtre à l'arrivée. L'état
actif est porté par `aria-pressed`.

## Commandes

```bash
pnpm install
pnpm dev       # developpement
pnpm build     # build statique dans dist/
pnpm preview   # previsualisation du build
```

## Déploiement

Le build produit un ensemble de fichiers dans `dist/` : n'importe quel hébergeur
statique convient. Le site est déployé sur Vercel, projet `codeside/aura-store`.

## Étendue de la traduction

Le design contient trois pages : accueil, liste produit et fiche produit. La
fiche du design porte sur **AURA One**. Les cinq autres fiches sont conçues dans
le même langage graphique — descriptions et caractéristiques ne viennent pas du
design et sont à valider.

## Photos

Les sept photographies de `src/assets/` proviennent d'Openverse et de Wikimedia
Commons. Elles **ne sont pas couvertes par la licence MIT** de ce dépôt et
restent soumises à leurs licences respectives — CC0, CC BY ou CC BY-SA. L'auteur
et la licence de chacune sont dans [`src/assets/CREDITS.json`](src/assets/CREDITS.json).

## Licence

MIT — voir [`LICENSE`](LICENSE). Elle couvre le code, les composants, les styles
et le texte de ce dépôt, à l'exclusion des photographies.
