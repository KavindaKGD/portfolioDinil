# Dinil Athuraliya Portfolio

Single-page portfolio website for Dinil Athuraliya, built with React, TypeScript, Tailwind CSS, and Vite.

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Vercel Deployment

This project is ready for Vercel deployment.

Vercel settings:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

The included `vercel.json` also defines the same build command and output directory. It includes a rewrite rule so the React/Vite single-page app works correctly on direct page refreshes.

## Push Code to GitHub

Initialize Git if the project is not already a Git repository:

```bash
git init
```

Add and commit the project:

```bash
git add .
git commit -m "Initial portfolio deployment setup"
```

Create a new empty repository on GitHub, then connect this local project to it:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your GitHub details.

## Import the Repo into Vercel

1. Go to https://vercel.com.
2. Sign in with GitHub.
3. Click `Add New` and choose `Project`.
4. Select the GitHub repository for this portfolio.
5. Confirm the Vite settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click `Deploy`.

## Automatic Deployments

After the repository is connected to Vercel:

- Every push to the `main` branch creates a production deployment.
- Every pull request creates a preview deployment.
- Vercel adds the preview URL to the pull request so changes can be reviewed before merging.

No separate GitHub Actions workflow is required for deployment because Vercel handles the CI/CD pipeline automatically.
