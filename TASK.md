# Pure Health Pharmacy Website

## Overview
Build a B2B pharmaceutical website for "Pure Health Pharmacy" — a peptide/compounding pharmacy selling exclusively to doctors. Clone the structure and messaging style from BoomRx.com.

## Tech Stack
- Next.js 14+ (App Router)
- Tailwind CSS
- TypeScript
- Deploy-ready for Vercel

## Brand
- **Name:** Pure Health Pharmacy
- **Target:** Doctors, medical clinics, med spas, telehealth providers
- **Vibe:** Clean, professional, medical/clinical aesthetic. Trust-building.

## Pages/Sections

### 1. Landing Page (/)
Hero section with:
- Headline: "Streamline Prescription Fulfillment for Your Patients" (adapt for Pure Health)
- Key value props (badges/pills):
  - 50 state shipping
  - Streamlined technology
  - Best industry pricing
  - Fast turnaround

"No More" pain points section:
- Searching multiple pharmacies
- Paying multiple shipping fees
- Multiple pharmacy invoices
- Extended delivery times

Features grid:
- Single shipping rate - $30 flat fee cold chain
- Competitive pricing guaranteed
- Designed for busy practices

### 2. Products/Services Section
Categories (icons + descriptions):
- Injectable, topical, and oral HRT/TRT solutions
- Male/female ED and sexual wellness formulations
- GLP-1 and peptide-based weight loss protocols
- Peptides for health recovery, performance, aging
- Hair loss and skin health treatments
- Overall health and wellness treatments

### 3. Why Pure Health Section
Bullet points:
- Expansive formulary that grows with your practice
- Live time data reporting
- Scalable integrations with EMRs and APIs
- Best industry pricing — 20% less cost on average
- 503A access from a single dashboard
- Reliable source for injectable sterile medications with 90-, 180- and 365-day BUDs

### 4. Doctor Portal (Gated)
- Login page at /portal or /login
- For now, just a login form UI (email + password)
- "Request Access" link for new doctors
- No backend needed yet — just the UI

### 5. Contact/CTA Section
- "Get Started" form (name, email, clinic name, phone, message)
- Tagline: "Reduce Inefficiencies. Simplify Your Workflow. Grow Your Practice."
- Note: "We have a customer care agent assigned to every clinical account"

### 6. Footer
- Company info
- Quick links
- Contact info placeholder

## Design Notes
- Clean, modern medical aesthetic
- Color palette: Professional blues/teals, white backgrounds, subtle gradients
- Typography: Clean sans-serif (Inter or similar)
- Plenty of whitespace
- Mobile responsive

## NOT Needed Yet
- Actual authentication backend
- E-commerce/ordering functionality
- CMS integration
- Blog/resources section

## Deliverable
A deployable Next.js site that looks professional and mirrors BoomRx's structure with Pure Health Pharmacy branding. Focus on the marketing site — doctor portal is just UI for now.

---

When completely finished, run this command to notify:
```
openclaw system event --text "Done: Pure Health Pharmacy site rough draft complete" --mode now
```
