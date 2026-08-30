# OJ Memory – App Store Connect / App Review checklista

Verifierad mot källkoden i ZIP-paketet och Apples publika dokumentation den **30 augusti 2026**.

## 1. Webbplatser och publika URL:er

### Krävs

- [x] **Privacy Policy URL** – `.../sv/privacy/`
- [x] **Support URL** – `.../sv/support/`

### Valfritt men förberett

- [x] Marketing URL – `.../sv/`
- [x] User Privacy Choices URL – `.../sv/privacy-choices/`
- [x] Accessibility URL – `.../sv/accessibility/`

## 2. App Privacy – svar som matchar den granskade koden

Den granskade appen gör inga nätverksanrop och har inga externa SDK-beroenden. `ScoreStore` lagrar endast lokala spelresultat via `UserDefaults`.

Rekommenderat App Privacy-svar för nuvarande kod:

- **Data Collection:** Data Not Collected / inga data samlas in
- **Tracking:** Nej
- **Third-party advertising:** Nej
- **Third-party analytics:** Nej
- **Accounts:** Inga

Lokalt behandlade spelresultat (antal kort, gissningar, tid, poäng, datum) behöver inte deklareras som "collected" i App Store privacy label så länge de inte skickas från enheten.

## 3. KRITISKT: Privacy Manifest finns men verkar inte bundlas

Filen `OJMemoryMachines/PrivacyInfo.xcprivacy` finns och innehåller:

- `NSPrivacyAccessedAPICategoryUserDefaults`
- reason `CA92.1`
- inga insamlade datatyper
- tracking = false

Detta matchar appens användning av `UserDefaults`. Men filen förekommer **inte** i `OJMemory.xcodeproj/project.pbxproj` som file reference eller resource för iOS-targeten. Med projektets vanliga `PBXGroup`-struktur innebär det att manifestet sannolikt inte följer med app-bundlen.

### Åtgärd i Xcode före upload

1. Lägg `PrivacyInfo.xcprivacy` i projektet om den inte syns i Project Navigator.
2. Markera filen och slå på **Target Membership** för `OJMemory`.
3. Kontrollera Build Phases / Copy Bundle Resources eller den resulterande archive-bundlen så att `PrivacyInfo.xcprivacy` finns med.
4. Skapa ett nytt Archive och kontrollera Privacy Report / upload-validering.

## 4. Kids Category

Appens kod och metadata anger uttryckligen målgruppen **barn 2–5 år**. Om beskrivningen ska behållas bör appen positioneras för **Kids Category, 5 and under**.

För Kids Category gäller bland annat:

- externa länkar, köp eller liknande distraktioner i appen måste ligga bakom parental gate;
- appen bör inte använda tredjepartsanalys eller tredjepartsannonsering;
- personlig information/enhetsinformation får inte skickas till tredje part på otillåtet sätt.

Den granskade appen har inga externa URL-länkar i release-koden. Integritetspolicyn öppnas som en intern SwiftUI-vy, vilket undviker en extern link-out. Om supportwebbplatsen senare länkas direkt från appen ska den länken placeras bakom parental gate om appen ligger i Kids Category.

## 5. Support via GitHub Issues

Den publika supportwebbplatsen använder GitHub Issues som enda användarkontakt enligt önskemålet. Sidan varnar tydligt för att Issues är offentliga och att personuppgifter inte ska publiceras.

**Viktigt:** Apples App Store Connect-dokumentation säger att Support URL ska leda till faktisk kontaktinformation, inklusive sådan adress/e-post/telefon som kan krävas enligt lokal lag. GitHub Issues kan fungera som supportflöde, men en Issues-only-lösning kan inte garanteras uppfylla varje lokal rättslig kontaktregel.

Dessutom går följande Apple-krav inte att ersätta med GitHub Issues:

- **App Review Information** kräver privat kontaktperson med namn, e-post och telefonnummer i App Store Connect.
- **EU Digital Services Act:** om utvecklaren är "trader" kräver Apple verifierad adress, telefonnummer och e-post och visar dessa på App Store-produkt­sidan. Om utvecklaren inte är trader ska status ändå deklareras.

## 6. Deployment target – dokumentationsavvikelse

`README.md` och `VALIDATION.md` säger iOS 17.0+, men app-targetens aktuella build settings i `project.pbxproj` anger **iOS 26.0** (testtargeten/Swift Package anger fortfarande 17.0).

Det är inte i sig ett App Review-fel, men det påverkar vilka enheter som kan installera appen och bör vara ett medvetet val. Synkronisera dokumentationen eller deployment target innan release.

## 7. Appens inbyggda integritetspolicy

Källkoden har en lättåtkomlig Inställningar → Integritetspolicy-vy. Texten beskriver:

- lokal topplista,
- inga personuppgifter,
- barns integritet,
- lagring/radering,
- ingen analys/reklam/spårning,
- tredje parter,
- ändringar och kontakt.

Det ligger väl i linje med Apples krav på att policyn ska beskriva insamling/användning, tredjepartsdelning samt retention/radering. Håll webbpolicyn och den inbyggda texten materiellt synkroniserade vid framtida uppdateringar.

## 8. App Review Information – rekommenderad Notes-text

> OJ Memory is an offline memory matching game designed for children ages 2–5. The app has no account system, no advertising, no in-app purchases, no third-party analytics, and no tracking. Game results (card count, guesses, duration, score, date) are stored only on-device for local high-score lists. No login is required. The privacy policy is available from Settings inside the app.

App Review contact name, email and phone number måste fyllas i separat i App Store Connect.

## 9. Officiella Apple-källor

- App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Manage App Privacy: https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy
- App Privacy reference: https://developer.apple.com/help/app-store-connect/reference/app-information/app-privacy
- Platform version information / Support URL: https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information
- App Privacy Details: https://developer.apple.com/app-store/app-privacy-details/
- Required reason APIs: https://developer.apple.com/documentation/bundleresources/describing-use-of-required-reason-api
- UserDefaults reason `CA92.1`: https://developer.apple.com/documentation/bundleresources/app-privacy-configuration/nsprivacyaccessedapitypes/nsprivacyaccessedapitypereasons
- Kids: https://developer.apple.com/kids/
- DSA trader requirements: https://developer.apple.com/help/app-store-connect/manage-compliance-information/manage-european-union-digital-services-act-trader-requirements/
- Accessibility Nutrition Labels: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels
