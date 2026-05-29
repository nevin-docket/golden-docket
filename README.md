# Golden Docket

A six-page demo site hosting the Golden Docket agent widgets — one page per Docket use case, with the live agent widget embedded on each page.

## Project structure

```
golden-docket/
├── index.html       Hub page with all 6 agent cards
├── apollo.html      Use case 01 — Website Engagement
├── theo.html        Use case 02 — ABM Personalization
├── iris.html        Use case 03 — Inbound Automation (Post-Form-Fill)
├── athena.html      Use case 04 — Technical Documentation / Product Expert
├── atlas.html       Use case 05 — Paid Ads Acceleration
├── hera.html        Use case 06 — PLG / Free-to-Paid Conversion
├── styles.css       Shared styles for all pages
├── vercel.json      Vercel config (clean URLs)
├── .nojekyll        GitHub Pages config (skip Jekyll processing)
└── README.md        This file
```

Each subpage embeds the corresponding Docket agent widget via the AISeller loader script. Agent IDs are hardcoded per page.

## Agent IDs

| Page | Agent | Use case | Agent ID |
|---|---|---|---|
| apollo.html | Apollo | Website Engagement | `a6682d3c-6067-4b7d-97cd-d266b9d97265` |
| theo.html | Theo | ABM Personalization | `5e7f7eaf-25a3-440b-ab58-aa4759bd1a3e` |
| iris.html | Iris | Post-Form-Fill | `ca3aa814-c903-48d3-8417-c0fdd3481f2a` |
| athena.html | Athena | Tech Docs | `0efb5b14-d5b6-4535-8454-a14e9e7b1914` |
| atlas.html | Atlas | Paid Ads | `fc39108f-e43a-41bc-9faa-649c9dc56888` |
| hera.html | Hera | PLG | `3eba6b84-605f-43d4-a96d-1f56a56f73a7` |

## Deploy to Vercel

The fastest path is to drag-drop the folder into Vercel:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drop the `golden-docket` folder onto the upload area, or click "Import Project"
3. Vercel auto-detects the static site — no framework, no build step
4. Click "Deploy"

Your site goes live at `https://<project-name>.vercel.app` in about 20 seconds.

With `vercel.json` configured, clean URLs work automatically:
- `/apollo` → `apollo.html`
- `/theo` → `theo.html`
- etc.

### Alternative — Vercel CLI

If you prefer the CLI:

```bash
npm install -g vercel
cd golden-docket
vercel
```

Follow the prompts. Re-run `vercel --prod` to push to production.

### Alternative — Connect a GitHub repo

1. Push this folder to a GitHub repo (see GitHub Pages section below for git steps)
2. Go to [vercel.com/new](https://vercel.com/new) and select "Import Git Repository"
3. Pick the repo and click Deploy

## Deploy to GitHub Pages

GitHub Pages serves the site directly from a branch. Steps:

1. Create a new public GitHub repo (e.g., `golden-docket`)
2. From inside the `golden-docket` folder:

```bash
git init
git add .
git commit -m "Initial Golden Docket demo site"
git branch -M main
git remote add origin https://github.com/<your-username>/golden-docket.git
git push -u origin main
```

3. In the repo on GitHub, go to **Settings → Pages**
4. Under "Build and deployment", set:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click Save

Your site goes live at `https://<your-username>.github.io/golden-docket/` in about a minute.

GitHub Pages uses `.html` extensions in the URL by default (so `/apollo.html` instead of `/apollo`). The `.nojekyll` file ensures Jekyll doesn't process the site.

## Customizing

- **Change agent IDs:** Edit the `agent_id` value in the `<script>` block at the bottom of each subpage.
- **Update copy:** Edit the headings, descriptions, and discovery questions in each `.html` file.
- **Adjust styling:** All styling lives in `styles.css`. Per-agent accent colors are defined as CSS variables (`--apollo`, `--theo`, etc.) at the top of the file.
- **Add a new agent page:** Copy any of the existing subpages, change the agent ID, name, use case copy, and `data-agent="..."` attribute on `<body>`.

## Notes

- No build step. Pure static HTML/CSS. Works on any static host (Vercel, GitHub Pages, Netlify, Cloudflare Pages, S3, etc.).
- The widget loader is the official AISeller script from `d33t2173eag6fx.cloudfront.net`. No changes needed to that URL.
- All six widget scripts are independent — opening one subpage loads only that agent's widget.
