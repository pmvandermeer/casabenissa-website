# Casa Benissa Website

Een moderne, responsive website voor Casa Benissa met professionele styling en interactieve functionaliteiten.

## 🚀 Functies

- **Responsive Design**: Volledig geoptimaliseerd voor desktop, tablet en mobiel
- **Moderne UI/UX**: Gebruik van moderne CSS-technieken en animaties
- **Smooth Scrolling**: Vloeiende navigatie tussen secties
- **Contact Form**: Functioneel contactformulier met validatie
- **Animaties**: Scroll-gebaseerde animaties en hover effecten
- **Mobiele Navigatie**: Hamburger menu voor mobiele apparaten
- **Performance**: Geoptimaliseerd voor snelle laadtijden

## 📁 Project Structuur

```
CasaBenissa/
├── index.html          # Hoofdpagina
├── styles.css          # CSS styling
├── script.js           # JavaScript functionaliteit
├── README.md           # Project documentatie
└── .gitignore          # Git ignore bestanden
```

## 🛠️ Technologieën

- **HTML5**: Semantische markup
- **CSS3**: Moderne styling met Flexbox en Grid
- **JavaScript (ES6+)**: Interactieve functionaliteiten
- **Google Fonts**: Inter font family
- **Git**: Versiebeheer

## 🚀 Installatie en Gebruik

### Lokale Ontwikkeling

1. **Clone het project** (als je Git gebruikt):
   ```bash
   git clone [repository-url]
   cd CasaBenissa
   ```

2. **Open de website**:
   - Dubbelklik op `index.html` om de website te openen in je browser
   - Of gebruik een lokale server:
     ```bash
     # Met Python 3
     python -m http.server 8000
     
     # Met Node.js (als je live-server hebt geïnstalleerd)
     npx live-server
     ```

3. **Bekijk de website**:
   - Open `http://localhost:8000` in je browser

### Aanpassingen Maken

- **Content wijzigen**: Bewerk `index.html` voor tekst en structuur
- **Styling aanpassen**: Bewerk `styles.css` voor kleuren, fonts en layout
- **Functionaliteit toevoegen**: Bewerk `script.js` voor interactieve features

## 📱 Responsive Breakpoints

- **Desktop**: 1200px en breder
- **Tablet**: 768px - 1199px
- **Mobiel**: 767px en smaller

## 🎨 Design Systeem

### Kleuren
- **Primair**: #2563eb (Blauw)
- **Secundair**: #1f2937 (Donkergrijs)
- **Achtergrond**: #f8fafc (Lichtgrijs)
- **Tekst**: #333 (Donkergrijs)

### Typografie
- **Font Family**: Inter (Google Fonts)
- **Gewichten**: 300, 400, 500, 600, 700

### Spacing
- **Container**: max-width 1200px
- **Sectie padding**: 5rem (desktop), 3rem (mobiel)
- **Grid gaps**: 2rem - 4rem

## 🔧 Aanpassingen

### Content Wijzigen

1. **Titel en beschrijving**:
   ```html
   <title>Casa Benissa - Welkom</title>
   <h1 class="hero-title">Welkom bij Casa Benissa</h1>
   ```

2. **Contact informatie**:
   ```html
   <p>📧 info@casabenissa.nl</p>
   <p>📞 +31 6 12345678</p>
   <p>📍 Benissa, Spanje</p>
   ```

3. **Diensten**:
   ```html
   <div class="service-card">
       <div class="service-icon">🏠</div>
       <h3>Jouw Dienst</h3>
       <p>Beschrijving van je dienst</p>
   </div>
   ```

### Styling Aanpassen

1. **Kleuren wijzigen**:
   ```css
   :root {
       --primary-color: #2563eb;
       --secondary-color: #1f2937;
   }
   ```

2. **Fonts aanpassen**:
   ```css
   body {
       font-family: 'Jouw Font', sans-serif;
   }
   ```

## 📝 Versiebeheer

### Git Workflow

1. **Eerste commit**:
   ```bash
   git add .
   git commit -m "Initial commit: Casa Benissa website"
   ```

2. **Wijzigingen committen**:
   ```bash
   git add .
   git commit -m "Beschrijving van wijzigingen"
   ```

3. **Branches gebruiken**:
   ```bash
   git checkout -b feature/nieuwe-functie
   # Maak wijzigingen
   git add .
   git commit -m "Nieuwe functie toegevoegd"
   git checkout main
   git merge feature/nieuwe-functie
   ```

## 🌐 Deployment

### GitHub Pages
1. Push je code naar GitHub
2. Ga naar Settings > Pages
3. Selecteer je main branch
4. Je website is beschikbaar op `https://username.github.io/repository-name`

### Andere Hosting
- **Netlify**: Sleep je project naar Netlify
- **Vercel**: Verbind je GitHub repository
- **Traditionele hosting**: Upload bestanden via FTP

## 🐛 Troubleshooting

### Veelvoorkomende Problemen

1. **Fonts laden niet**:
   - Controleer internetverbinding
   - Voeg fallback fonts toe

2. **Animaties werken niet**:
   - Controleer of JavaScript is ingeschakeld
   - Bekijk browser console voor errors

3. **Responsive design werkt niet**:
   - Controleer viewport meta tag
   - Test op verschillende apparaten

## 📞 Support

Voor vragen of problemen:
- Controleer eerst de browser console voor errors
- Test op verschillende browsers en apparaten
- Raadpleeg de CSS en JavaScript documentatie

## 📄 Licentie

Dit project is open source en beschikbaar onder de MIT licentie.

---

**Gemaakt met ❤️ voor Casa Benissa** 