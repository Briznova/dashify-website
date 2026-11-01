# DASHIFY website

Responsive, multi-page static HTML/CSS/JavaScript website for the proposed DASHIFY school operations product from BRIZNOVA.

## Visual assets
The `assets/` folder contains original SVG illustrations and the DASHIFY favicon: dashboard, student records, attendance, fee administration, notices, role workflows, implementation, pilot, security, company identity and pricing concepts. They are locally hosted, editable vector artwork—not stock-image dependencies.

## Pages
- Home (`index.html`)
- Product (platform, capabilities and module roadmap) (`platform.html`)
- How it works (school workflows and implementation approach) (`implementation.html`)
- Early school pilot (`pilot.html`)
- Pricing approach (`pricing.html`)
- About (`about.html`)
- Security and data approach (`security.html`)
- FAQs (`faq.html`)
- Contact / enquiry form preview (`contact.html`)
- Privacy notice draft (`privacy.html`)
- Website terms draft (`terms.html`)

## Critical before publishing
1. DASHIFY is a proposed working brand, not legally cleared. Previous preliminary screening found an Australian software business using DASHIFY and Indian third-party DASHIFY applications in other classes. Obtain a written Indian trademark clearance opinion for Classes 9, 42 and 41, similar/phonetic marks and relevant international registrations before launch or substantial brand investment.
2. Product status is stated as **in development**. Module descriptions are proposed/pilot-planning scope, not claims of released features. Verify every capability before changing these labels.
3. BRIZNOVA is described as a parent technology venture. Insert the actual registered legal name and registered office details only after incorporation is complete.
4. The contact form validates fields in the browser only. It does not send, save or transmit submissions. Connect a secure form endpoint (Hostinger or another provider), configure spam protection and test it before enabling the form. Update the privacy notice accordingly.
5. Privacy notice and terms are detailed drafts, not legal advice. Have Indian counsel complete them for the actual legal entity, hosting, form processor, data flows, retention, applicable laws and grievance contact before publication.
6. Replace `YOUR-DASHIFY-DOMAIN.example` in `robots.txt` and `sitemap.xml` after a final product domain is chosen. Domain availability and trademark rights are separate checks.
7. Do not add invented customer logos, testimonials, school counts, certifications, product metrics, uptime claims or integrations.

## Hostinger deployment
1. Extract the ZIP.
2. In Hostinger hPanel, open Websites → Manage → File Manager.
3. Open `public_html` for the product domain/subdomain.
4. Upload the contents of the `dashify-website` folder so `index.html` is directly inside `public_html`.
5. Keep the folder structure, including `assets/`.
6. Enable SSL/HTTPS, then test all links and pages on mobile and desktop.
7. Keep DNS at Hostinger if hosting there. If hosting elsewhere, add only the records instructed by that host; do not remove existing MX/TXT email records.

## Preview locally
Open `index.html`, or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.
