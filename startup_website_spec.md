# 📋 Cahier des charges - Site web startup développement mobile & web

## 🎯 **Vue d'ensemble du projet**

Création d'un site web vitrine pour une startup spécialisée dans le développement d'applications mobiles et de sites web, inspiré du design et de la structure du site de Chandraprakash Darji.

---

## 🎨 **1. DESIGN SYSTEM & PALETTE DE COULEURS**

### **🎨 Couleurs principales (Palette harmonieuse)**

```css
:root {
  /* Couleur primaire - Cerulean (Bleu professionnel) */
  --primary: 203 39% 44%;                  /* #457B9D */
  --primary-foreground: 105 55% 96%;       /* #F1FAEE */
  
  /* Fond et base - Thème sombre avec Berkeley Blue */
  --background: 215 50% 23%;               /* #1D3557 */
  --foreground: 105 55% 96%;               /* #F1FAEE */
  
  /* Cartes et surfaces - Berkeley Blue plus clair */
  --card: 215 45% 28%;                     /* #243A5E */
  --card-foreground: 105 55% 96%;          /* #F1FAEE */
  
  /* Éléments secondaires - Non Photo Blue */
  --secondary: 182 43% 76%;                /* #A8DADC */
  --secondary-foreground: 215 50% 23%;     /* #1D3557 */
  
  /* Texte muté - Variation de Non Photo Blue */
  --muted: 182 30% 65%;                    /* #9BC5C7 */
  --muted-foreground: 182 43% 55%;         /* #7BC5C9 */
  
  /* Accents et bordures */
  --accent: 203 35% 38%;                   /* #3D6B87 */
  --border: 203 30% 35%;                   /* #426B82 */
  --input: 215 45% 20%;                    /* #1A2F4A */
  
  /* États et actions - Red Pantone pour les CTA */
  --destructive: 355 78% 56%;              /* #E63946 */
  --cta: 355 78% 56%;                      /* #E63946 */
  --cta-foreground: 105 55% 96%;           /* #F1FAEE */
  --ring: 203 39% 44%;                     /* #457B9D */
  
  /* Honeydew pour les zones de mise en valeur */
  --highlight: 105 55% 96%;                /* #F1FAEE */
  --highlight-foreground: 215 50% 23%;     /* #1D3557 */
  
  /* Rayon des bordures */
  --radius: 0.5rem;
}
```

### **🎨 Utilisation intelligente des couleurs pour la lisibilité**

```css
/* Hiérarchie de contraste pour une lisibilité optimale */
.text-primary-contrast { color: hsl(var(--foreground)); }      /* Blanc sur fond sombre */
.text-secondary-contrast { color: hsl(var(--muted-foreground)); } /* Gris clair pour texte secondaire */
.text-accent { color: hsl(var(--primary)); }                   /* Bleu Cerulean pour les accents */
.text-cta { color: hsl(var(--cta)); }                         /* Rouge Pantone pour les CTA */

/* Fonds avec bon contraste */
.bg-card { background-color: hsl(var(--card)); }              /* Cartes sur fond Berkeley Blue */
.bg-highlight { background-color: hsl(var(--highlight)); }    /* Honeydew pour mise en valeur */
.bg-secondary { background-color: hsl(var(--secondary)); }    /* Non Photo Blue pour sections */
```

### **📝 Typographie**

```css
/* Police principale */
--font-primary: "DM Sans", ui-sans-serif, system-ui, sans-serif;

/* Hiérarchie typographique responsive */
.h0 { 
  font-size: clamp(2rem, 5vw, 3.5rem); 
  font-weight: 700; 
  line-height: 1.1; 
  color: hsl(var(--foreground));
}

.h1 { 
  font-size: clamp(1.75rem, 4vw, 2.5rem); 
  font-weight: 700; 
  line-height: 1.2; 
  color: hsl(var(--foreground));
}

.h2 { 
  font-size: clamp(1.5rem, 3vw, 2rem); 
  font-weight: 600; 
  line-height: 1.3; 
  color: hsl(var(--primary));
}

.h3 { 
  font-size: clamp(1.25rem, 2.5vw, 1.5rem); 
  font-weight: 600; 
  line-height: 1.4; 
  color: hsl(var(--foreground));
}

.body { 
  font-size: clamp(0.875rem, 1.5vw, 1rem); 
  line-height: 1.6; 
  color: hsl(var(--muted-foreground));
}

.small { 
  font-size: clamp(0.75rem, 1.2vw, 0.875rem); 
  line-height: 1.4; 
  color: hsl(var(--muted-foreground));
}
```

---

## 🏗️ **2. STRUCTURE & SECTIONS DU SITE**

### **🗂️ Architecture générale (8 sections)**

```
1. 📱 Header/Navigation
2. 🚀 Hero Section  
3. 📄 Bannière défilante d'actualité
4. 🎯 Section "Projets Récents" (3 sites web + 1 app mobile)
5. ⚡ Section "Notre processus" (4 étapes)
6. 💰 Section "Nos tarifs" (6 packages au total)
7. ❓ Section FAQ
8. 📞 Section Contact/CTA
9. 🦶 Footer
```

---

## 📱 **3. SECTIONS DÉTAILLÉES**

### **🚀 Section 1 - Hero Section**

**Contenu :**
```
Titre principal (H0) : "Nous créons des apps mobiles & sites web qui boostent votre business"
Sous-titre : "Transformez votre idée en application mobile performante ou site web professionnel avec une UX fluide, une architecture scalable et un design axé conversion."

4 badges de valeur :
- "MVP en 10 jours"  
- "Équipe senior"
- "Suivi quotidien"
- "Solutions sur mesure"
```

**Layout Responsive :**
```css
/* Mobile First */
.hero-container {
  padding: 2rem 1rem;
  text-align: center;
}

/* Tablet */
@media (min-width: 768px) {
  .hero-container {
    padding: 4rem 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero-container {
    padding: 6rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Badges responsive */
.badges-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .badges-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}
```

### **📄 Section 2 - Bannière défilante**

**Contenu :**
```
"✦ Places limitées pour Mars 2025 ✦ Nouveau : Apps React Native ✦ -20% sur les sites e-commerce ✦"
```

**Spécifications techniques responsive :**
```css
.scrolling-banner {
  height: 50px;
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

@media (min-width: 768px) {
  .scrolling-banner {
    height: 60px;
    font-size: 1.1rem;
  }
}

/* Animation fluide */
.scrolling-text {
  animation: scroll-left 30s linear infinite;
  font-weight: 500;
}
```

### **🎯 Section 3 - Projets Récents (4 projets)**

**Titre section :** "Nos Réalisations Récentes"
**Sous-titre :** "Découvrez quelques-uns de nos projets qui ont transformé des idées en succès digitaux"

#### **Projet 1 - Site E-commerce "BoutikPlus"**
```
Type: Site Web E-commerce
Description: "Plateforme e-commerce moderne avec gestion des stocks, paiements sécurisés et tableau de bord marchand. Interface intuitive qui a augmenté les conversions de 150%."
Technologies: Next.js, Stripe, PostgreSQL
Résultats: +150% conversions, 2000+ produits gérés
```

#### **Projet 2 - Site Corporate "TechConsult Pro"**
```
Type: Site Web Corporate  
Description: "Site vitrine professionnel pour cabinet de conseil avec système de prise de rendez-vous, blog intégré et optimisation SEO complète."
Technologies: React, Tailwind CSS, Cal.com
Résultats: +200% trafic organique, 50+ leads/mois
```

#### **Projet 3 - Plateforme SaaS "DataFlow Hub"**
```
Type: Application Web
Description: "Dashboard analytics en temps réel pour PME avec visualisations interactives, rapports automatisés et API pour intégrations tierces."
Technologies: Vue.js, D3.js, Node.js, MongoDB
Résultats: 500+ utilisateurs actifs, 99.9% uptime
```

#### **Projet 4 - App Mobile "FitTracker Pro"**
```
Type: Application Mobile
Description: "App de fitness cross-platform avec suivi d'activités, programmes personnalisés, notifications push et synchronisation cloud."
Technologies: React Native, Firebase, Redux
Résultats: 10k+ téléchargements, 4.8/5 étoiles
```

**Layout Responsive :**
```css
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem 1rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    padding: 3rem 2rem;
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }
}

.project-card {
  background: hsl(var(--card));
  border-radius: var(--radius);
  padding: 1.5rem;
  border: 1px solid hsl(var(--border));
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
```

### **⚡ Section 4 - Notre processus (4 étapes)**

**Layout Responsive :**
```css
.process-container {
  padding: 3rem 1rem;
}

.process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .process-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
}

.process-step {
  text-align: center;
  padding: 2rem 1rem;
  background: hsl(var(--card));
  border-radius: var(--radius);
  position: relative;
}
```

### **💰 Section 5 - Nos tarifs (6 packages)**

**Layout Responsive :**
```css
.pricing-container {
  padding: 3rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

.pricing-category {
  margin-bottom: 4rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

.pricing-card {
  background: hsl(var(--card));
  border: 2px solid hsl(var(--border));
  border-radius: var(--radius);
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card.featured {
  border-color: hsl(var(--primary));
  background: linear-gradient(135deg, hsl(var(--card)), hsl(var(--accent)));
}

.pricing-card:hover {
  transform: scale(1.02);
  border-color: hsl(var(--primary));
}
```

### **❓ Section 6 - FAQ**

**Layout Responsive :**
```css
.faq-container {
  padding: 3rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.faq-accordion {
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  margin-bottom: 1rem;
  overflow: hidden;
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background: hsl(var(--accent));
}

@media (min-width: 768px) {
  .faq-question {
    padding: 2rem;
  }
}
```

### **📞 Section 7 - Contact/CTA**

**Layout Responsive :**
```css
.contact-section {
  padding: 4rem 1rem;
  background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)));
  text-align: center;
}

.contact-container {
  max-width: 600px;
  margin: 0 auto;
}

.cta-button {
  background: hsl(var(--cta));
  color: hsl(var(--cta-foreground));
  padding: 1rem 2rem;
  border-radius: var(--radius);
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 2rem;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(230, 57, 70, 0.3);
}

@media (min-width: 768px) {
  .cta-button {
    padding: 1.2rem 3rem;
    font-size: 1.1rem;
  }
}
```

---

## 📱 **4. SPÉCIFICATIONS RESPONSIVE**

### **📐 Breakpoints et approche Mobile-First**

```css
/* Stratégie Mobile First */
:root {
  /* Spacings responsive */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
}

/* Small devices (phones) */
@media (max-width: 639px) {
  .container {
    padding: 0 var(--space-sm);
  }
  
  .section {
    padding: var(--space-xl) 0;
  }
}

/* Medium devices (tablets) */
@media (min-width: 640px) and (max-width: 1023px) {
  .container {
    max-width: 768px;
    margin: 0 auto;
    padding: 0 var(--space-md);
  }
  
  .section {
    padding: calc(var(--space-xl) * 1.5) 0;
  }
}

/* Large devices (desktops) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-lg);
  }
  
  .section {
    padding: calc(var(--space-xl) * 2) 0;
  }
}

/* Extra large devices */
@media (min-width: 1280px) {
  .container {
    max-width: 1400px;
    padding: 0 var(--space-xl);
  }
}
```

### **🎭 Animations et interactions responsives**

```css
/* Animations adaptées selon la taille d'écran */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (max-width: 768px) {
  .hover-effect {
    /* Désactiver les hover effects sur mobile */
    transform: none !important;
  }
}

@media (min-width: 769px) {
  .hover-effect:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
}
```

---

## 🛠️ **5. SPÉCIFICATIONS TECHNIQUES**

### **⚙️ Stack technologique recommandée**

```javascript
// Next.js 14+ Configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Configuration responsive images
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

### **🎨 Tailwind Config avec notre palette**

```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(203, 39%, 44%)",       // Cerulean
          foreground: "hsl(105, 55%, 96%)",    // Honeydew
        },
        background: "hsl(215, 50%, 23%)",      // Berkeley Blue
        foreground: "hsl(105, 55%, 96%)",      // Honeydew
        card: {
          DEFAULT: "hsl(215, 45%, 28%)",
          foreground: "hsl(105, 55%, 96%)",
        },
        secondary: {
          DEFAULT: "hsl(182, 43%, 76%)",       // Non Photo Blue
          foreground: "hsl(215, 50%, 23%)",
        },
        accent: "hsl(203, 35%, 38%)",
        cta: {
          DEFAULT: "hsl(355, 78%, 56%)",       // Red Pantone
          foreground: "hsl(105, 55%, 96%)",
        },
        border: "hsl(203, 30%, 35%)",
        muted: {
          DEFAULT: "hsl(182, 30%, 65%)",
          foreground: "hsl(182, 43%, 55%)",
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      }
    },
  },
  plugins: [],
}
```

---

## 📋 **6. CHECKLIST DÉVELOPPEMENT**

### **Phase 1 - Setup & Design System Responsive**
- [ ] Configuration Next.js + Tailwind avec breakpoints personnalisés
- [ ] Implémentation des variables CSS couleurs (nouvelle palette)
- [ ] Configuration typographie responsive (DM Sans + clamp())
- [ ] Setup des composants UI de base responsives
- [ ] Tests sur devices réels (iPhone, Android, tablet, desktop)

### **Phase 2 - Sections principales responsives**
- [ ] Header avec navigation mobile (hamburger menu)
- [ ] Hero section avec layout adaptatif
- [ ] Bannière défilante responsive
- [ ] Section projets récents (4 projets) - grid responsive
- [ ] Section processus 4 étapes - layout adaptatif
- [ ] Footer responsive avec liens sociaux

### **Phase 3 - Fonctionnalités avancées**
- [ ] Section pricing (6 packages) - grilles responsives
- [ ] Section FAQ avec accordéons tactiles
- [ ] Section contact + intégration Cal.com responsive
- [ ] Optimisations images (Next.js Image)
- [ ] Performance mobile (Lighthouse > 90)

### **Phase 4 - Tests & finitions**
- [ ] Tests cross-browser et cross-device
- [ ] Validation accessibilité (WCAG 2.1)
- [ ] Tests de performance responsive
- [ ] Optimisation SEO mobile-first
- [ ] Tests tactiles et interactions

---

## 🎯 **7. CRITÈRES DE QUALITÉ RESPONSIVE**

### **📊 Performance attendue**
```
Mobile (Lighthouse) :
- Performance: > 90
- Accessibilité: > 95
- Best Practices: > 90
- SEO: > 95

Desktop (Lighthouse) :
- Performance: > 95
- Accessibilité: > 95
- Best Practices: > 90
- SEO: > 95
```

### **🎨 Contrôle qualité design**
- [ ] Lisibilité parfaite sur tous les écrans (contraste > 4.5:1)
- [ ] Navigation tactile intuitive (zones de touch > 44px)
- [ ] Chargement images optimisé (WebP/AVIF)
- [ ] Animations fluides sur mobile (60fps)
- [ ] Interface utilisable sans zoom sur mobile

---

## ⏰ **8. PLANNING ESTIMÉ**

```
Semaine 1-2 : Setup responsive, design system, composants de base
Semaine 3 : Hero, bannière, projets récents (4 projets)
Semaine 4 : Processus, FAQ, contact - versions mobile/desktop
Semaine 5 : Pricing (6 packages) - layouts adaptatifs
Semaine 6 : Optimisations responsive, tests cross-device
Semaine 7 : Déploiement, documentation, formation
```

**Durée totale :** 6-7 semaines

---

## 💡 **9. CONSEILS D'IMPLÉMENTATION RESPONSIVE**

### **🔧 Points critiques :**
- **Mobile-First obligatoire** : Développer d'abord mobile, puis enrichir
- **Palette couleurs respectée** : Utiliser intelligemment Cerulean comme primary
- **Lisibilité optimale** : Contraste testé sur tous les backgrounds
- **Performance mobile** : Optimisation images et animations
- **Navigation tactile** : Zones de touch adéquates
- **Typographie fluide** : clamp() pour les tailles adaptatives

### **🎨 Détails design responsive :**
- Espacement proportionnel (rem/em plutôt que px)
- Grilles CSS Grid et Flexbox combinées
- Images responsives avec Next.js Image
- États focus/hover adaptés mobile/desktop
- Micro-animations performance-optimisées

---

**📧 Questions ou clarifications :** À discuter avant le début du développement

**🚀 Objectif :** Site professionnel, moderne et parfaitement responsive qui reflète l'expertise de votre startup dans le développement mobile et web, avec une palette de couleurs harmonieuse et une lisibilité optimale sur tous les appareils.