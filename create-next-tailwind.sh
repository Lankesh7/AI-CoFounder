#!/usr/bin/env bash
set -euo pipefail

# ---- CONFIGURE THESE BEFORE RUNNING ----
PROJECT_NAME="my-next-tailwind-app"   # change as needed
GITHUB_ORG_OR_USER=""                 # e.g. "myusername" or leave blank to create under your account
VISIBILITY="public"                   # public or private
USE_NPM=true                          # true = npm, false = yarn
# ----------------------------------------

echo "Creating project: $PROJECT_NAME"

# Create Next app (non-interactive)
if [ "${USE_NPM}" = true ]; then
  npx create-next-app@latest "$PROJECT_NAME" --eslint --app --src-dir --use-npm --import-alias "@/src/*"
else
  npx create-next-app@latest "$PROJECT_NAME" --eslint --app --src-dir --import-alias "@/src/*"
fi

cd "$PROJECT_NAME"

# Install Tailwind CSS + PostCSS + Autoprefixer
npm install -D tailwindcss postcss autoprefixer || true
npx tailwindcss init -p

# Configure tailwind content paths (append over existing file)
cat > tailwind.config.cjs <<'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
EOF

# Create a basic globals.css (if using app router with src)
mkdir -p src/styles
cat > src/styles/globals.css <<'EOF'
/* Tailwind base imports */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Example custom style */
html, body, #__next {
  height: 100%;
}
body {
  @apply bg-gray-50 text-gray-900;
}
EOF

# Import globals.css in root layout (app router)
LAYOUT_FILE="src/app/layout.tsx"
if [ -f "$LAYOUT_FILE" ]; then
  # ensure import exists at top of layout.tsx
  if ! grep -q "globals.css" $LAYOUT_FILE; then
    sed -i "1s|^|import '../styles/globals.css'\n|" $LAYOUT_FILE
  fi
else
  # fallback for pages directory: create _app.tsx
  mkdir -p src/pages
  cat > src/pages/_app.tsx <<'EOF'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
EOF
fi

# Create .gitignore (basic)
cat > .gitignore <<'EOF'
node_modules
.next
out
.DS_Store
.env.local
.env.*.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
EOF

# Initialize git, make first commit
git init
git add -A
git commit -m "chore: create next.js app + tailwind boilerplate"

# Create GitHub repo via gh if available
if command -v gh >/dev/null 2>&1; then
  if [ -z "$GITHUB_ORG_OR_USER" ]; then
    gh repo create "$PROJECT_NAME" --"$VISIBILITY" --source=. --remote=origin --push
  else
    gh repo create "$GITHUB_ORG_OR_USER/$PROJECT_NAME" --"$VISIBILITY" --source=. --remote=origin --push
  fi
  echo "Repository created and pushed to GitHub."
else
  echo "gh CLI not found. Repository created locally. To publish:
    1) Create a new repository on GitHub (web).
    2) Run:
       git remote add origin git@github.com:YOUR_USER/$PROJECT_NAME.git
       git branch -M main
       git push -u origin main
  "
fi

echo "Done. To run the app:"
echo "  cd $PROJECT_NAME"
echo "  npm run dev"
