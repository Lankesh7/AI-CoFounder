param(
  [string]$ProjectName = "my-next-tailwind-app",
  [string]$Visibility = "public"  # or "private"
)

Write-Host "Creating $ProjectName..."
npx create-next-app@latest $ProjectName --eslint --app --src-dir --use-npm --import-alias "@/src/*"
Set-Location $ProjectName

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

@"
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
"@ | Out-File -Encoding utf8 tailwind.config.cjs

New-Item -ItemType Directory -Force -Path src/styles | Out-Null
@"
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #__next { height: 100%; }
body { @apply bg-gray-50 text-gray-900; }
"@ | Out-File -Encoding utf8 src/styles/globals.css

# Try import into layout.tsx or create _app.tsx
$layout = "src/app/layout.tsx"
if (Test-Path $layout) {
  (Get-Content $layout) | Set-Content $layout
  if (-not (Select-String -Path $layout -Pattern "globals.css" -Quiet)) {
    (Get-Content $layout) -replace '^', "import '../styles/globals.css'`n" | Set-Content $layout
  }
} else {
  New-Item -ItemType Directory -Force -Path src/pages | Out-Null
  @"
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
"@ | Out-File -Encoding utf8 src/pages/_app.tsx
}

@"
node_modules
.next
out
.DS_Store
.env.local
.env.*.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
"@ | Out-File -Encoding utf8 .gitignore

git init
git add -A
git commit -m "chore: create next.js app + tailwind boilerplate"

if (Get-Command gh -ErrorAction SilentlyContinue) {
  gh repo create $ProjectName --$Visibility --source=. --remote=origin --push
  Write-Host "Pushed to GitHub."
} else {
  Write-Host "gh not installed. Create a repo on GitHub and push manually."
}

Write-Host "Done. Run 'npm run dev' inside project folder to start."
