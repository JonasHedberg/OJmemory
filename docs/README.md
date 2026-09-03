# OJ Memory – GitHub Pages (`docs`)

Den här mappen är en färdig statisk GitHub Pages-webbplats för OJ Memory. Den har inga externa JavaScript-bibliotek, inga externa typsnitt, ingen egen analytics och inga egna cookies.

## Publicera

1. Lägg hela `docs/` i repositoryts standardbranch.
2. GitHub → **Settings → Pages**.
3. Välj **Deploy from a branch**.
4. Välj aktuell branch och mappen **`/docs`**.
5. Spara och vänta tills GitHub visar den publika Pages-adressen.

Webbplatsen är förberedd för repositories med namnet `OJmemory-Apple`. GitHub Issues-länkarna skapas automatiskt från `<github-användare>.github.io` + repositorynamnet. Om repositoryt byter namn eller om en egen domän används, sätt `repositoryUrl` i `assets/js/site.js`.

## Språkstruktur

Dokumentationen följer exakt språkstödet i Swift/Xcode-projektet: `sv`, `en`, `da`, `nb`, `fi`, `de`, `fr`, `es`, `pt`, `nl`, `it`. Svenska är utvecklingsspråk och rot-URL:en väljer bästa stödda webbspråk från webbläsarens språkpreferenser, med svenska som fallback. Varje språk har sidor för startsida, integritet, integritetsval, support, tillgänglighet och juridik.

Delade resurser ligger i `/assets/`. Bilder behåller proportionerna via explicit `height: auto`, `aspect-ratio` och `object-fit: contain`.

## App Store Connect – URL:er efter publicering

Byt `<PAGES-BASE>` mot den faktiska GitHub Pages-basadressen, exempelvis `https://anvandare.github.io/OJmemory-Apple`.

- **Support URL (obligatorisk):** `<PAGES-BASE>/sv/support/`
- **Privacy Policy URL (obligatorisk för iOS):** `<PAGES-BASE>/sv/privacy/`
- **Marketing URL (valfri):** `<PAGES-BASE>/sv/`
- **User Privacy Choices URL (valfri):** `<PAGES-BASE>/sv/privacy-choices/`
- **Accessibility URL (valfri):** `<PAGES-BASE>/sv/accessibility/`


Se `APP_STORE_CONNECT_CHECKLIST.md` för granskningen av ZIP-filen och kvarstående punkter.
