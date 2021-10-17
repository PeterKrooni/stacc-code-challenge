# stacc-code-challenge
### A web application made in Vue.js that does a PEP check and fetches wikipedia information about a person, or two different people. 

### Oppgavebeskrivelse
For denne oppgaven bestemte jeg meg for å lage en visuelt tilfredsstillende nettside for å vise PEP checks, med en additional twist av å blande inn Wikipedia API for å hente ut litt informasjon fra personen, samt et bilde. Jeg har også laget en comparison tool, der man kan sammenlikned to PEPs og få en indikator på score forskjellen mellom dem.

### Requirements:
- node.js and node package manager (npm)
- Vue.js 3  --> ``npm install -g @vue/cli``

### How to run:
1. Clone repository
2. Run ``npm install`` to install required node modules
3. Run ``npm run serve`` in project root to run development build
4. Open ``https://localhost:8080`` in a browser 

### Kommentarer
Jeg er generelt sett mest komfortabel med backend-relaterte oppgaver, og systemkonstruksjons-relatert programmering, men bestemte meg for å prøve noe litt nytt, og lære mer om frontend på veien. Jeg har litt tidligere erfaring i Vue, så jeg bestemte meg for å lage en liten nettside der jeg kan vise litt informasjon om personen man gjør en PEP check på. 

For å "spice" opp oppgaven litt, så har jeg og integrert litt data fra Wikipedia APIen, som henter ut litt data fra wikipedia artikkelen deres (om de har en), samt henter bildet fra artikkelen. 

Jeg slet i en god stund å få fikset CORS errors ved henting av data fra APIene med Vue, men fikk til slutt løst det etter noen timers arbeid. Jeg bestemte meg for å lage PEP check til et komponent bestående av to separate komponent, en for visning og en for interaksjon med deres (Stacc) API. På den måten, så var det lettere å eventuelt utvide oppgaven med eventuelt flere PEP checks på samme side, eller eventuelt utvide programmet til å vise PEP check til alle personer i et foretak osv. 

Ellers har det vært en gøy oppgave å løse. Noen mulige tanker for utvidelse av funksjonalitet hadde vært å kunne søke etter organisasjoner, eller å hente ut en tilfeldig utvalgt PEP som oppfølger visse kriterer annet enn navn.
