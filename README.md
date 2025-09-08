Keitumetse Cezil Setati — Portfolio

A modern, animated portfolio for Keitumetse Cezil Setati showcasing projects, skills, education, and contact details. Built with HTML, Bootstrap 5, and vanilla JavaScript, featuring SVG letter-drawing, dark/light mode, and smooth scroll/entrance animations.

✨ Features

Animated name: SVG stroke-draw then fill (responsive, no overlaps on small screens).

Branding: “KC” accent + animated “K” glyph in the navbar.

Dark/Light mode: theme toggle with blue-tinted dark mode and accessible text colors.

AOS animations: fade/slide in on scroll.

Projects grid: square cards with hover effects, filters, and a details modal.

Skills: brand blocks using Devicon and Bootstrap Icons.

CV download: button + optional header to force download on Vercel.

Contact: mailto form, social links, and back-to-top button.

Responsive: mobile-first, looks great across screen sizes.

🧱 Tech Stack

HTML5, CSS3 (custom + Bootstrap 5)

JavaScript (vanilla)

AOS (Animate On Scroll)

Bootstrap Icons, Devicon

Optional: Vercel for hosting

📁 Project Structure
.
├── index.html
├── style.css
├── script.js
├── portrait.jpg                 # your profile image
├── KEITHMETSE_SETATI_CV.pdf     # your CV (name/path can be changed)
└── vercel.json                  # optional: force-download header (see below)


If you prefer keeping assets in a folder, use:

/assets/index.html   /assets/style.css   /assets/script.js
/assets/portrait.jpg /assets/KEITHMETSE_SETATI_CV.pdf


Then set the Root Directory to assets when deploying to Vercel.

🚀 Getting Started (Local)
Option 1 — VS Code Live Server (easy)

Install the Live Server extension.

Right-click index.html → Open with Live Server.

Option 2 — Simple local server
# Python 3
python -m http.server 5500

# or Node (if you have serve installed)
npx serve .


Open http://localhost:5500 (or the URL printed by your server).

🌐 Deploy to Vercel
A) Via GitHub (auto-deploys on every push)

Push your repo to GitHub.

On vercel.com → New Project → Import Git Repository.

Framework Preset: Other / Static HTML.

Build Command: (leave empty)
Output Directory:

. if index.html is in the repo root, or

assets if your site files are inside /assets.

Deploy → get your *.vercel.app URL.

B) Via Vercel CLI
npm i -g vercel
vercel          # answer prompts (Output Directory: . or assets)
vercel --prod   # deploy to production

Optional: Force CV to download

Create vercel.json at the project root:

{
  "headers": [
    {
      "source": "/KEITHMETSE_SETATI_CV.pdf",
      "headers": [
        { "key": "Content-Disposition", "value": "attachment; filename=Keitumetse_Cezil_Setati_CV.pdf" }
      ]
    }
  ]
}


If your deployed root is /assets, keep the same "source" path (the file sits at the site root once deployed to that folder).

🛠️ Customization

Personal details: edit the PROFILE object in script.js (name, email, phone, LinkedIn, GitHub, skills, projects, education).

Images: update portrait.jpg and project images (you can use remote image URLs).

CV filename: place your PDF next to index.html and update the href in CV buttons.

Colors: tweak CSS custom properties at the top of style.css (e.g., --accent, --text, --bg).

Animations: AOS options live in script.js (AOS.init({ ... })).

🔒 Contact Form Notes

The form uses mailto: for simplicity:

<form action="mailto:you@example.com" method="post" enctype="text/plain">


This opens the user’s email client. For a backend-free form, consider a service like Formspree or Netlify Forms (requires minor changes).

♿ Accessibility Tips

All images include alt text (e.g., the portrait and project images).

High-contrast text in both themes. The theme toggle also flips text colors for readability.

Focus outlines preserved for inputs and buttons.

⚡ Performance Tips

Compress portrait.jpg (≈200–400 KB target).

Prefer optimized remote images (e.g., Unsplash with ?auto=format&fit=crop&w=1200&q=60).

Use rel="noopener" on external links (already included).

🧪 Troubleshooting

404 on images/CV: confirm file paths relative to the deployed root (repo root vs /assets).

PDF won’t download: add the vercel.json header above; also ensure the download attribute has a filename or is present.

Letters overlapping in the big name: the SVG is responsive and calculated at runtime; ensure script.js is loaded and there are no console errors.

🗺️ Roadmap (nice-to-haves)

Project detail pages per card.

Real contact form with serverless function or third-party form service.

Add unit tests for rendering logic (where meaningful).

Add a CI job for HTML/CSS/JS linting and link checks.

👤 Author

Keitumetse Cezil Setati

📍 Johannesburg, South Africa

✉️ keitumetsecezil16@gmail.com

🔗 LinkedIn: https://linkedin.com/in/keitumetse-setati-116252214

💻 GitHub: https://github.com/KeitumetseSetati

📄 License

Choose a license for your repo (e.g., MIT). Example:

MIT License © 2025 Keitumetse Cezil Setati
