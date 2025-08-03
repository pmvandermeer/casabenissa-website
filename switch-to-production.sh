#!/bin/bash

# Script om over te schakelen van subdomein naar hoofddomein
# Gebruik: ./switch-to-production.sh

echo "🔄 Overschakelen naar productie domein..."

# Backup maken van huidige bestanden
echo "📦 Backup maken..."
cp sitemap.xml sitemap.xml.backup
cp robots.txt robots.txt.backup
cp .well-known/security.txt .well-known/security.txt.backup

# Vervang alle URLs in sitemap.xml
echo "📝 Sitemap updaten..."
sed -i '' 's/casabenissa\.pmvandermeer\.nl/casabenissa.nl/g' sitemap.xml

# Vervang URL in robots.txt
echo "🤖 Robots.txt updaten..."
sed -i '' 's/casabenissa\.pmvandermeer\.nl/casabenissa.nl/g' robots.txt

# Vervang URL in security.txt
echo "🔒 Security.txt updaten..."
sed -i '' 's/casabenissa\.pmvandermeer\.nl/casabenissa.nl/g' .well-known/security.txt

# Deploy naar productie
echo "🚀 Deployen naar productie..."
./deploy.sh

echo "✅ Succesvol overgeschakeld naar casabenissa.nl!"
echo "🌐 Je website is nu live op: https://casabenissa.nl" 