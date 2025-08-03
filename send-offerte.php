<?php
// Offerte formulier verwerking
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Email ontvanger
    $to = "info@casabenissa.nl";
    $subject = "Nieuwe Offerte Aanvraag - Casa Benissa";
    
    // Formuliergegevens verzamelen
    $voornaam = $_POST['voornaam'] ?? '';
    $achternaam = $_POST['achternaam'] ?? '';
    $bedrijfsnaam = $_POST['bedrijfsnaam'] ?? '';
    $evenement_type = $_POST['evenement_type'] ?? '';
    $email = $_POST['email'] ?? '';
    $telefoon = $_POST['telefoon'] ?? '';
    $evenement_soort = $_POST['evenement_soort'] ?? '';
    $extra_info = $_POST['extra_info'] ?? '';
    $datum = $_POST['datum'] ?? '';
    $deelnemers = $_POST['deelnemers'] ?? '';
    $dagen = $_POST['dagen'] ?? '';
    $verwachting = $_POST['verwachting'] ?? '';
    $facetime = $_POST['facetime'] ?? '';
    $faciliteiten = $_POST['faciliteiten'] ?? [];
    $offerte_inclusief = $_POST['offerte_inclusief'] ?? [];
    $vragen = $_POST['vragen'] ?? '';
    
    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Email body samenstellen
    $message = "
    <html>
    <head>
        <title>Nieuwe Offerte Aanvraag</title>
    </head>
    <body>
        <h2>Nieuwe Offerte Aanvraag - Casa Benissa</h2>
        
        <h3>Persoonlijke Gegevens</h3>
        <p><strong>Naam:</strong> $voornaam $achternaam</p>
        <p><strong>Bedrijfsnaam:</strong> $bedrijfsnaam</p>
        <p><strong>Evenement type:</strong> $evenement_type</p>
        <p><strong>E-mail:</strong> $email</p>
        <p><strong>Telefoon:</strong> $telefoon</p>
        
        <h3>Evenement Details</h3>
        <p><strong>Type evenement:</strong> $evenement_soort</p>
        <p><strong>Extra informatie:</strong> $extra_info</p>
        <p><strong>Gewenste datum:</strong> $datum</p>
        <p><strong>Aantal deelnemers:</strong> $deelnemers</p>
        <p><strong>Duur evenement:</strong> $dagen</p>
        <p><strong>Verwacht pakket:</strong> $verwachting</p>
        
        <h3>FaceTime Afspraak</h3>
        <p><strong>FaceTime gewenst:</strong> $facetime</p>
        
        <h3>Benodigde Faciliteiten</h3>
        <ul>";
    
    if (!empty($faciliteiten)) {
        foreach ($faciliteiten as $faciliteit) {
            $message .= "<li>$faciliteit</li>";
        }
    } else {
        $message .= "<li>Geen specifieke faciliteiten aangevraagd</li>";
    }
    
    $message .= "</ul>
        
        <h3>Offerte Inclusief</h3>
        <ul>";
    
    if (!empty($offerte_inclusief)) {
        foreach ($offerte_inclusief as $item) {
            $message .= "<li>$item</li>";
        }
    } else {
        $message .= "<li>Geen extra services aangevraagd</li>";
    }
    
    $message .= "</ul>
        
        <h3>Vragen en Opmerkingen</h3>
        <p>$vragen</p>
        
        <hr>
        <p><em>Deze offerte aanvraag is verzonden via het contactformulier op casabenissa.nl</em></p>
    </body>
    </html>
    ";
    
    // Email versturen
    if (mail($to, $subject, $message, $headers)) {
        // Succes - redirect naar bedankpagina
        header("Location: offerte-bedankt.html");
        exit();
    } else {
        // Fout - toon foutmelding
        $error = "Er is een fout opgetreden bij het versturen van je offerte aanvraag. Probeer het later opnieuw of neem direct contact op via info@casabenissa.nl";
    }
}
?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fout - Offerte Aanvraag</title>
    <link rel="stylesheet" href="styles.css?v=1">
</head>
<body>
    <div style="text-align: center; padding: 4rem 2rem;">
        <h1>Fout bij Versturen</h1>
        <p><?php echo $error ?? 'Er is een onbekende fout opgetreden.'; ?></p>
        <a href="offerte.html" style="color: #669897; text-decoration: none; font-weight: 600;">← Terug naar het formulier</a>
    </div>
</body>
</html> 