#!/bin/bash

# Script om afbeeldingen problemen op te lossen
# Gebruik: ./fix-images.sh

echo "🔧 Afbeeldingen problemen oplossen..."

# Controleer of alle afbeeldingen aanwezig zijn
echo "📁 Controleren van afbeeldingen..."
lftp -c "set ssl:verify-certificate no; set ftp:ssl-allow yes; set ftp:ssl-force yes; set ftp:ssl-protect-data yes; open -u casabenissa,Wat1feest! casabenissa.pmvandermeer.nl; ls -la images/; exit;"

# Test afbeeldingen
echo "🧪 Testen van afbeeldingen..."
curl -I https://casabenissa.pmvandermeer.nl/images/Casa-benissa-logo.png
curl -I https://casabenissa.pmvandermeer.nl/images/Trainingslocatie-Spanje.jpg

echo "✅ Afbeeldingen controle voltooid!"
echo "💡 Als afbeeldingen nog steeds niet laden in de browser:"
echo "   - Hard refresh: Cmd+Shift+R (Mac) of Ctrl+Shift+R (Windows)"
echo "   - Leeg browser cache"
echo "   - Test in incognito/private modus" 