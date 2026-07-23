# discount-app
Discount app and website (telon.one-like) scaffolded by Copilot CLI

This repository contains a minimal Next.js (TypeScript) discount app with a simple admin UI and an API backed by PostgreSQL.

Features
- List discounts on the homepage
- Create discounts in /admin
- API endpoints in /api/discounts (uses DATABASE_URL)
- CI workflow that builds and triggers a Render deploy and updates versions.xlsx with deployment metadata

Deployment notes
- Create a Render Web Service and set it to deploy from this GitHub repository (preferred), or provide RENDER_SERVICE_ID and RENDER_API_KEY as repository secrets so the workflow can trigger deploys.
- Add a managed PostgreSQL on Render and set the DATABASE_URL in Render's environment variables.

GitHub secrets required for automatic deploy trigger (optional but recommended):
- RENDER_SERVICE_ID
- RENDER_API_KEY

The workflow will create or update versions.xlsx on each successful push to main.
