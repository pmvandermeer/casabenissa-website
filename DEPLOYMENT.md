# Casa Benissa Website Deployment

Dit document beschrijft hoe je de Casa Benissa website automatisch kunt deployen.

## 🚀 Snelle Start

### Optie 1: GitHub Actions (Aanbevolen)

1. **Push naar GitHub**:
   ```bash
   git add .
   git commit -m "Update website met lightbox functionaliteit"
   git push origin main
   ```

2. **Stel GitHub Secrets in**:
   - Ga naar je GitHub repository
   - Settings → Secrets and variables → Actions
   - Voeg deze secrets toe:
     - `FTP_HOST`: je FTP server adres
     - `FTP_USER`: je gebruikersnaam
     - `FTP_PASS`: je wachtwoord
     - `FTP_PATH`: je website pad (meestal `/public_html/`)

3. **Automatische deployment**: Elke push naar `main` branch deployt automatisch!

### Optie 2: Handmatige Deployment (macOS/Linux)

1. **Installeer LFTP**:
   ```bash
   # macOS
   brew install lftp
   
   # Ubuntu/Debian
   sudo apt-get install lftp
   ```

2. **Configureer FTP gegevens**:
   Bewerk `deploy.sh` en vul je FTP gegevens in:
   ```bash
   FTP_HOST="your-ftp-host.com"
   FTP_USER="your-username"
   FTP_PASS="your-password"
   FTP_PATH="/public_html/"
   ```

3. **Deploy**:
   ```bash
   ./deploy.sh
   ```

### Optie 3: Node.js Deployment (Windows/macOS/Linux)

1. **Installeer dependencies**:
   ```bash
   npm install
   ```

2. **Configureer FTP gegevens**:
   Bewerk `deploy.js` en vul je FTP gegevens in:
   ```javascript
   const config = {
       host: "your-ftp-host.com",
       user: "your-username",
       password: "your-password",
       secure: true
   };
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 📁 Bestanden die worden geüpload

- `index.html` - Hoofdpagina met lightbox
- `styles.css` - Alle styling inclusief lightbox CSS
- `script.js` - JavaScript functionaliteit
- `images/` - Alle afbeeldingen
- Alle andere HTML pagina's

## 🔧 Configuratie

### FTP Instellingen

| Instelling | Beschrijving | Voorbeeld |
|------------|--------------|-----------|
| `FTP_HOST` | Je FTP server adres | `ftp.casabenissa.nl` |
| `FTP_USER` | Je gebruikersnaam | `casabenissa` |
| `FTP_PASS` | Je wachtwoord | `********` |
| `FTP_PATH` | Website directory | `/public_html/` |

### Veiligheid

- **GitHub Secrets**: Wachtwoorden worden veilig opgeslagen in GitHub
- **SSL**: Alle verbindingen gebruiken SSL/TLS
- **Exclude bestanden**: `.git/`, `.DS_Store` en andere systeem bestanden worden niet geüpload

## 🐛 Troubleshooting

### Veelvoorkomende problemen:

1. **"LFTP is niet geïnstalleerd"**
   - Installeer LFTP: `brew install lftp` (macOS) of `sudo apt-get install lftp` (Linux)

2. **"FTP configuratie niet ingesteld"**
   - Bewerk het deploy script en vul je FTP gegevens in

3. **"Upload mislukt"**
   - Controleer je FTP gegevens
   - Controleer of je FTP server bereikbaar is
   - Controleer of je voldoende rechten hebt

4. **"basic-ftp package niet geïnstalleerd"**
   - Run: `npm install`

## 📞 Support

Voor vragen over deployment, neem contact op via:
- 📧 info@casabenissa.nl
- �� www.casabenissa.nl 