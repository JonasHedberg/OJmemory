# OJ Memory – App Store Connect-checklista

Den här webbplatsen är byggd för att täcka de webbadresser och policytexter som normalt behövs för OJ Memory. Kontrollera alltid Apples aktuella formulär när du skickar in en ny version.

## 1. Måste fyllas i före publicering

- Juridiskt/ansvarigt namn är satt till **Jonas Hedberg**.
- Ersätt `{{GITHUB_ISSUES_URL}}` med repositoryts riktiga GitHub Issues-URL.
- Öppna den publicerade `support.html` och kontrollera att knappen **Öppna GitHub Issues** går till rätt repository.
- Använd den publicerade `support.html` som **Support URL** i App Store Connect.

Ingen supportmejl eller fysisk supportadress finns på webbplatsen; support och felrapporter hanteras via GitHub Issues.

## 2. Publicera på GitHub Pages

1. Lägg mappen `docs` i roten av GitHub-repot.
2. GitHub → **Settings** → **Pages**.
3. Under **Build and deployment**, välj **Deploy from a branch**.
4. Välj branch `main` och mappen `/docs`.
5. Spara och vänta tills GitHub visar den publicerade URL:en.

Om repot exempelvis heter `oj-memory` och användarnamnet är `example`, blir basadressen normalt:

`https://example.github.io/oj-memory/`

Alla interna länkar på webbplatsen är relativa och fungerar därför även på project pages.

## 3. Webbadresser i App Store Connect

Byt `<BASE>` mot den publicerade GitHub Pages-adressen.

- **Marketing URL** (valfri): `<BASE>/`
- **Support URL** (obligatorisk per appversion): `<BASE>/support.html`
- **Privacy Policy URL** (obligatorisk): `<BASE>/privacy.html`
- **User Privacy Choices URL** (valfri): `<BASE>/privacy-choices.html`
- **Accessibility URL** (valfri): `<BASE>/accessibility.html`

## 4. App Privacy / Privacy Nutrition Label

Kodgranskningen av det aktuella OJ Memory-projektet visar:

- inga nätverksanrop i spelkoden,
- inga tredjeparts-SDK:er för analys/annonsering,
- ingen App Tracking Transparency/AdSupport,
- lokal topplista via `UserDefaults`.

Apple definierar “collect” som att data skickas från enheten på ett sätt där utvecklaren/tredje part kan komma åt den längre än vad som krävs för en realtidsbegäran. Data som endast behandlas lokalt på enheten räknas inte som insamlad för Privacy Nutrition Label.

**För den granskade versionen bör App Privacy därför vara “Data Not Collected”**, förutsatt att du inte lägger till nätverk, loggning, analys, crash reporting, annonser, serverfunktioner eller tredjeparts-SDK:er innan uppladdning.

## 5. Apple TV / tvOS

App Store Connect kräver privacy policy **text** för tvOS. Kopiera innehållet i:

`apple-tv-privacy.txt`

och klistra in i fältet **Apple TV Privacy Policy**.

## 6. Kids Category

OJ Memory är avsett för 2–5 år. Om du väljer Kids Category ska åldersbandet **5 and under** användas.

För Kids Category gäller bland annat:

- inga externa länkar, köp eller andra vuxenfunktioner direkt tillgängliga för barn utan parental gate,
- ingen tredjepartsannonsering eller tredjepartsanalys i normalfallet,
- ingen överföring av personligt identifierbar information eller enhetsinformation till tredje part.

Apple kräver dessutom att alla appar har integritetspolicyn lätt tillgänglig **inne i appen**. För en Kids Category-app bör länken därför ligga i en vuxendel bakom en parental gate så att kravet på integritetspolicy kan uppfyllas utan att ge barnet en fri extern länk.

## 7. DSA i EU

App Store Connect frågar om Digital Services Act (DSA) trader status för EU-distribution. Om du är trader kan Apple kräva identifierings- och kontaktuppgifter som visas på App Store-produktsidan. Detta är ett konto-/distributionsval och kan inte avgöras av webbplatsmallen.

## 8. Uppdatera policyn om appen ändras

Gör en ny kontroll om du senare lägger till exempelvis:

- Firebase, Crashlytics, Sentry eller annan diagnostik,
- annonser,
- analys,
- nätverksanrop/server,
- inloggning,
- iCloud/CloudKit,
- pushnotiser,
- plats, kamera, mikrofon eller andra behörigheter.

Då kan både integritetspolicyn och App Privacy-svaren behöva ändras.

## Apple-källor

- App Store Connect – Manage app privacy: https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy/
- App Store Connect – Platform version information: https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information/
- App Privacy Details: https://developer.apple.com/app-store/app-privacy-details/
- App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Kids: https://developer.apple.com/kids/
