# stacc-code-challenge
### A web application made in Vue.js that does a PEP check and fetches wikipedia information about a person, or two different people. 

### Oppgavebeskrivelse
For denne oppgaven bestemte jeg meg for å lage en visuelt tilfredsstillende nettside for å vise PEP checks, med en additional twist av å blande inn Wikipedia APIen for å hente ut litt informasjon fra personen, samt et bilde. Jeg har også laget en comparison tool, der man kan sammenlikned to PEPs og få en indikator på score-forskjellen mellom dem.

### Requirements:
- node.js and node package manager (npm)
- Vue.js 3  --> ``npm install -g @vue/cli``

### How to run:
1. Clone repository
2. Run ``npm install`` in project root to install required node modules
3. Run ``npm run serve`` in project root to run development build
4. Open ``https://localhost:8080`` in a browser 

### Kommentarer
Jeg er generelt sett mest komfortabel med systemkonstruksjon og backend-relatert programmering, men bestemte meg i denne oppgaven for å prøve noe nytt, og lære litt mer om frontend på veien. Jeg har vært litt innom Vue.js tidligere, så jeg bestemte meg for å lage en liten webapp der det vises diverse informasjon om personen man gjør en PEP check på. 

For å "spice" opp oppgaven litt, så har jeg også integrert data fra Wikipedia APIen, som henter ut ulik data fra wikipedia artikkelen deres (om de har en), samt henter bildet fra artikkelen. Jeg har begresnet erfaring innenfor design og til dels frontend, så noen av CSS animasjonene/elementene er hentet fra forskjellige CSS artikler jeg fant (f.eks. spinneren når man laster inn søket, og til dels search baren). 

Jeg bestemte meg for å lage PEP checken i Vue til et komponent bestående av to separate komponent: en for visning, og en for interaksjon med deres API. På den måten, så var det lettere å utvide appen med flere PEP checks på samme side, eller å eventuelt utvide programmet til å vise PEP checks til alle personer i et foretak osv. 

Ellers har det vært en gøy oppgave å løse. Noen mulige tanker for utvidelse av funksjonalitet hadde vært å kunne søke etter organisasjoner, eller å hente ut en tilfeldig utvalgt PEP som oppfølger visse kriterer annet enn navn.
