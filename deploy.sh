#!/bin/bash

# Casa Benissa Website Deployment Script
# Gebruik: ./deploy.sh

# FTP Configuratie
FTP_HOST="your-ftp-host.com"
FTP_USER="your-username"
FTP_PASS="your-password"
FTP_PATH="/public_html/"

# Kleuren voor output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Casa Benissa Website Deployment${NC}"
echo "=================================="

# Controleer of lftp geïnstalleerd is
if ! command -v lftp &> /dev/null; then
    echo -e "${RED}❌ LFTP is niet geïnstalleerd. Installeer het eerst:${NC}"
    echo "Ubuntu/Debian: sudo apt-get install lftp"
    echo "macOS: brew install lftp"
    echo "Windows: Download van https://lftp.yar.ru/"
    exit 1
fi

# Controleer of configuratie is ingevuld
if [ "$FTP_HOST" = "your-ftp-host.com" ]; then
    echo -e "${RED}❌ FTP configuratie niet ingesteld!${NC}"
    echo "Bewerk het deploy.sh bestand en vul je FTP gegevens in:"
    echo "- FTP_HOST: je FTP server adres"
    echo "- FTP_USER: je gebruikersnaam"
    echo "- FTP_PASS: je wachtwoord"
    echo "- FTP_PATH: je website pad (meestal /public_html/)"
    exit 1
fi

echo -e "${YELLOW}📤 Uploaden naar $FTP_HOST...${NC}"

# Upload bestanden
lftp -c "
    set ssl:verify-certificate no;
    open -u $FTP_USER,$FTP_PASS $FTP_HOST;
    mirror --reverse --delete --verbose ./ $FTP_PATH;
    exit;
"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Website succesvol geüpload!${NC}"
    echo -e "${GREEN}🌐 Je website is nu live op: https://casabenissa.nl${NC}"
else
    echo -e "${RED}❌ Upload mislukt! Controleer je FTP gegevens.${NC}"
    exit 1
fi 