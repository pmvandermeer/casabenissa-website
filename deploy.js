#!/usr/bin/env node

const ftp = require('basic-ftp');
const path = require('path');
const fs = require('fs');

// FTP Configuratie
const config = {
    host: "your-ftp-host.com",
    user: "your-username",
    password: "your-password",
    secure: true
};

const remotePath = "/public_html/";

// Kleuren voor output
const colors = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    reset: '\x1b[0m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    log('🚀 Casa Benissa Website Deployment', 'yellow');
    log('==================================');

    // Controleer configuratie
    if (config.host === "your-ftp-host.com") {
        log('❌ FTP configuratie niet ingesteld!', 'red');
        log('Bewerk het deploy.js bestand en vul je FTP gegevens in:');
        log('- host: je FTP server adres');
        log('- user: je gebruikersnaam');
        log('- password: je wachtwoord');
        log('- remotePath: je website pad (meestal /public_html/)');
        process.exit(1);
    }

    try {
        log('📤 Verbinden met FTP server...', 'yellow');
        await client.access(config);
        
        log('📁 Uploaden van bestanden...', 'yellow');
        await client.uploadFromDir('./', remotePath);
        
        log('✅ Website succesvol geüpload!', 'green');
        log('🌐 Je website is nu live op: https://casabenissa.nl', 'green');
        
    } catch (err) {
        log('❌ Upload mislukt!', 'red');
        log(`Fout: ${err.message}`, 'red');
        process.exit(1);
    }
    
    client.close();
}

// Controleer of basic-ftp geïnstalleerd is
try {
    require('basic-ftp');
} catch (err) {
    log('❌ basic-ftp package niet geïnstalleerd!', 'red');
    log('Installeer het eerst met: npm install basic-ftp', 'yellow');
    process.exit(1);
}

deploy(); 