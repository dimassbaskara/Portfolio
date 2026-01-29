# Deployment Guide

## GitHub Pages Setup

This portfolio is automatically deployed to GitHub Pages using GitHub Actions.

### Prerequisites

1. **GitHub Repository Settings**:
   - Go to your repository settings → Pages
   - Set **Source** to "GitHub Actions"
   - If using a custom domain, add `dimasbaskara.id` in the **Custom domain** field

2. **DNS Configuration** (for custom domain):
   - Add an `A` record pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add a `CNAME` record pointing to `dimassbaskara.github.io`

### Deployment Process

The deployment is fully automated via GitHub Actions:

1. **Push to main**: Any push to the `main` branch triggers the workflow
2. **Build**: The workflow runs `npm ci` and `npm run build`
3. **Deploy**: The `dist` folder is deployed to GitHub Pages
4. **Live**: Your site is available at `https://dimasbaskara.id`

### Manual Deployment

You can also trigger deployment manually:
1. Go to **Actions** tab in your GitHub repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

### Local Testing

Test the production build locally before deploying:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## Troubleshooting

### MIME Type Errors
- ✅ **Fixed**: The `base: '/'` configuration in `vite.config.js` ensures correct asset paths
- The GitHub Actions workflow builds the project properly

### Blank Page Issues
- Verify GitHub Pages is set to deploy from "GitHub Actions" (not a branch)
- Check the Actions tab to ensure the workflow completed successfully
- Clear your browser cache and hard refresh (Ctrl+Shift+R)

### Custom Domain Not Working
- Verify DNS records are properly configured
- GitHub Pages may take up to 24 hours to propagate DNS changes
- Check that HTTPS is enforced in repository settings

### Build Failures
- Check the Actions tab for error logs
- Ensure all dependencies are listed in `package.json`
- Test the build locally with `npm run build`

## File Structure

```
portfolio-website/
├── .github/
│   └── workflows/
│       └── deploy.yml    # Deployment automation
├── dist/                 # Build output (generated)
├── public/              # Static assets
├── src/                 # Source code
└── vite.config.js       # Vite configuration with base path
```
