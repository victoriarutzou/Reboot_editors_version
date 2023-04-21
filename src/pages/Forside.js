import hero from "../images/heroBackground.svg";
import { useEffect, useState } from "react";
import computer from "../images/computer.svg";
import smiley from "../images/smiley.svg";
import vækst from "../images/vækst.svg";
import ledning from "../images/ledning.svg";
import ledningCirkel from "../images/ledning_cirkel.svg";
import grass from "../images/grass.svg";
import gartnere from "../images/gartnere.svg";
import bigflower from "../images/bigflower.svg";
import middleflower from "../images/middleflower.svg";
import littleflower from "../images/littleflower.svg";
import rødder from "../images/rødder.svg";
import patrick from "../images/patrick.png";
import laura from "../images/laura.png";
import karen from "../images/karen.png";
import grassdark from "../images/grassdark.svg";
import trustpilot from "../images/trustpilot.png";
import Contact from "../components/Contact";
import stjerner from "../images/stjerner.svg";
import { NavLink } from "react-router-dom";



function Forside() {
  useEffect(() => {
    const button = document.querySelector(".startprisberegner");                        /*Henter knappen .startprisberegner og definere den som const button */
    const slideinDiv = document.querySelector(".valgmuligheder_slidein");                 /*Henter Div .valgmuligheder_slidein og definere den som const slideinDiv */
    button.addEventListener("click", () => { /*Lytter efter klik på knappen */
      button.style.display = "none"; /*knap forsvinder */
      slideinDiv.style.display = "block"; /*Div med indold kommer frem */
    });
  }, []);

  const [isHidden, setIsHidden] = useState(false);    /*  Denne del af koden bruger React Hooks-funktionen "useState" til at initialisere en "isHidden"-variabel med en standardværdi på "false".
                                                      Funktionen "useState" giver dig mulighed for at have state i en funktionel React-komponent.
                                                      Variablen "isHidden" bliver brugt til at styre, om noget skal vises eller skjules på din hjemmeside, afhængigt af dens værdi.*/
  
  const handleClick = () => {                         /*Funktionen "handleClick" er en event-handler-funktion, der vil blive udløst, når brugeren klikker på noget på siden. 
                                                      I dette tilfælde sætter funktionen "setIsHidden" værdien af "isHidden" til "true", hvilket vil gøre noget, der var skjult, synligt på siden. */
  setIsHidden(true);
  };



  return (
<main>
    <section className="hero">
      <h2 className="white">Skal din hjemmeside</h2>
      <h1 id="blomstre" className="white">BLOMSTRE?</h1>
      <p className="white hero_p">Vi kan hjælpe dig med at designe en energi-effektiv hjemmeside, der kan skabe værdi og vækst i din virksomhed</p>
</section>

<section className="bæredygtighed mellemsektioner">
  <div id="skånplanet">
    <h2 className="black">Skal dit website skåne vores planet?</h2>
    <h2 className="lighter">Her er hvorfor:</h2>
  </div>

  <div className="bæredygtighed_paragraf mellemparagraffer">
    <img className="bæredygtighed_ikon" src={computer} alt="computer ikon"/>
    <div>
    <p className="bold">Reducerer miljøpåvirkningen</p>
    <p>Bæredygtigt webdesign handler om at skabe websteder, der er energieffektive og har en minimal miljøpåvirkning. Dette betyder, at de bruger mindre energi og producerer færre drivhusgasemissioner end traditionelle websteder. Ved at bruge bæredygtigt webdesign kan du hjælpe med at reducere den negative påvirkning af internettet på miljøet.</p>
    </div>
  </div>
  
  <div className="bæredygtighed_paragraf mellemparagraffer">
    <img className="bæredygtighed_ikon" src={smiley} alt="smiley ikon"/>
    <div>
    <p className="bold">Forbedrer brugeroplevelsen</p>
    <p>Bæredygtigt webdesign kan også forbedre brugeroplevelsen. Ved at skabe hurtigere og mere effektive websteder kan du give dine brugere en bedre oplevelse. Brugere forventer hurtige og lydhøre websteder, og bæredygtigt webdesign kan hjælpe med at opfylde disse forventninger.</p>
    </div>
  </div>
  
  <div className="bæredygtighed_paragraf mellemparagraffer">
    <img className="bæredygtighed_ikon" src={vækst} alt="vækst ikon"/>
    <div>
    <p className="bold">Fremtidssikring</p>
    <p>Bæredygtigt webdesign hjælper dig med at fremtidssikre dit websted. Med stigende energiomkostninger og øget fokus på bæredygtighed vil bæredygtigt webdesign blive mere og mere vigtigt i fremtiden. Ved at bruge bæredygtige designprincipper kan du være sikker på, at dit websted vil være konkurrencedygtigt og bæredygtigt i fremtiden.</p>
    </div>
  </div>
</section>

<section className="statestik mellemsektioner">
  <img className="ledning" src={ledning} alt="ledning"/>
  <h3 className="sektionstekst lighter mellemparagraffer">Med en kompleks infrastruktur og stor mængde ressourcer til at drive det, er det tydeligt, at internettet er et miljømæssigt problem for planeten.</h3>

<div className="ledningcirkler mellemparagraffer">
  <div className="ledningcirkel_statestiktekst">
      <div className="ledningcirkel">
        <img className="ledning_cirkel" src={ledningCirkel} alt="ledning cirkel"/>
        <h2 className="ledninge_tekst">3,7%</h2>
      </div>
      <p className="statestik_tekst mellemparagraffer">Internettet står for 3,7 % af den globale CO2-udledning, der svarer til flyindustrien - og den er eksponentielt stigende med omkring 5% hvert år.</p>
  </div>

  <div className="ledningcirkel_statestiktekst">
      <div className="ledningcirkel">
        <img className="ledning_cirkel" src={ledningCirkel} alt="ledning cirkel"/>
        <h2 className="ledninge_tekst">Nr. 3</h2>
      </div>
      <p className="statestik_tekst mellemparagraffer">Den globale IT sektors elektricitets krav rangerer kun bag 2 andre lande i verden. Kina og USA.</p>
  </div>

  <div className="ledningcirkel_statestiktekst">
      <div className="ledningcirkel">
        <img className="ledning_cirkel" src={ledningCirkel} alt="ledning cirkel"/>
        <h2 className="ledninge_tekst">212x</h2>
      </div>
      <p className="statestik_tekst mellemparagraffer">Billeder (kb) udleder 212 gange så meget CO2 som en tekst på 1000 ord. Dette kan behjælpes ved brug af energieffektive filformater såsom illustrationer. </p>
  </div>
</div>
</section>

<section id="værktøjer" className="værktøjer paddingtop">
  <div className="sidepadding">
    <div className="overskrift_og_knap">
      <h2 className="white">Så hvad er det egentlig, vi kan gøre for dig?</h2>
      <a className="knap knap_brun" href="#prisberegner">Prisberegner</a>
    </div>
    <p className="white værktøjer_underoverskrift">Vi tager din virksomhed i hånden fra start til slut, for at sikre dig en sikker og behagelig konverteringsrejse fra dit nuværende website til en fuld optimeret digital løsning, der er god for både dig, dine brugere og planeten.</p>
    <br></br>
    <p className="white værktøjer_underoverskrift">Ud fra en samtale med dig, kan vi sammen finde frem til, hvad dine behov er og hvordan vi kan opfylde disse. Herunder får du et overblik over hvilke services, vi kan tilbyde dig og din virksomhed.</p>
  </div>


  <div className="værktøjer_columns mellemparagraffer sidepadding">

  <div className="værktøj">
      <p className="white bold">Komprimering af kode</p>
      <p className="white">Din kode består oftest af en masse kode, hvor ikke alt er en nødvendighed og blot ligger og fylder. Færre ressourcer nedsætter brugen af energi, der i sidste ende vil lægge en dæmper på datacentrene, der lagrer al kode. Ved at fjerne det unødvendige, sørger vi desuden for at dine slutbrugere får en hurtigere page load time.</p>
      <br></br>
        <NavLink to="/404"><button className="knap_sort">læs mere</button></NavLink>
    </div>

    <div className="værktøj">
      <p className="white bold">Visuelt design</p>
      <p className="white">Dit brand består af flere forskellige design elementer, såsom farver, fonte, billeder osv. Vi gennemgår i samarbejde med dig, dine designvalg, der både kan forbedre din visuelle identitet og guider dig til at træffe bevidste valg, som er med til at gøre dit website mere energibesparende. Vi fokuserer på at skabe værdi for fremtidsbevidste virksomheder. </p>
      <br></br>
      <NavLink to="/404"><button className="knap_sort">læs mere</button></NavLink>
    </div>

    <div className="værktøj">
      <p className="white bold">Optimering af filer</p>
      <p className="white">Dine billeder og andre medier er ofte gemt ned i en høj opløsning samt et tungt filformat, hvilket gør at de fylder meget og forbruger en større mængde energi. Vi optimerer disse, så de fylder mindst muligt men uden at ødelægge kvaliteten. Dette kan betyde, at billedet stadig ser skarpt og klart ud, men med en mindre filstørrelse.</p>
      <br></br>
      <NavLink to="/404"><button className="knap_sort">læs mere</button></NavLink>
    </div>

    <div className="værktøj">
      <p className="white bold">Forbedring af brugeroplevelsen</p>
      <p className="white">Vi forsimpler indholdet på dit website ved at gøre det så målrettet som muligt, for ikke at miste dine brugere undervejs i rejsen på dit website. Dette gør vi på baggrund af analyser af din målgruppes behov. En forbedret brugervenlighed vil sikre dig en reducering i dine brugeres frustrationer og exits, der vil give dig en bedre ydeevne og højere konverteringsrate.</p>
      <br></br>
      <NavLink to="/404"><button className="knap_sort">læs mere</button></NavLink>
    </div>
</div>
  <img id="gartnere" className="gartnere_illustrationer" src={gartnere} alt="illustrationer af Oliver, Victoria, Tanja og Amalie"/>
</section>

<section className="gartnere sidepadding paddingbottom">
  <div className="gartnere_columns">
    <div className="gartner">
      <p className="white bold">Oliver: Programmør</p>
      <p className="white">Hjælper med at forbedre koden ved at luge ud og skabe plads til sund vækst, så du kan nyde en smuk og velplejet hjemmeside.</p>
    </div>

    <div className="gartner">
      <p className="white bold">Victoria: Visuel Designer</p>
      <p className="white">Skaber et mindeværdigt og individualiseret visuelt design, der kan blomstre på alle digitale platforme.</p>
    </div>

    <div className="gartner">
      <p className="white bold">Tanja: Content Manager</p>
      <p className="white">Sørger for at trimme filerne ned til den rette størrelse, der vil give dig et hurtigere og velorganiseret website.</p>
    </div>

    <div className="gartner">
      <p className="white bold">Amalie: UX - Designer</p>
      <p className="white">Sår de rigtige frø, som spirer sig til brugervenlige løsninger, der kan høste succes for virksomheders digitale brugeroplevelser.</p>
    </div>
  </div>

  <h1 className="white paddingtop">VORES GARTNERE</h1>
  <h3  className="white lighter paddingbottom">Vores “gartnere” har i mange år arbejdet med optimering og opbygning af digitalt design. De er alle uddannede inde for web- og digital udvikling, og er derfor godt udstyret til at hjælpe jeres virksomhed på rette spor. De fjerner alt det dårlige ukrudt på websitet og sørger for at hjemmesiden er rustet til den klimavenlige fremtid.</h3>
</section>

<section className="stor_forskel">
  <div className="stor_forskel_tekst sidepadding">
    <h2>Små rettelser kan gøre en</h2>
    <h1>EN STOR FORSKEL</h1>
    <br></br>
    <a className="knap knap_brun" href="#prisberegner">Prisberegner</a>
  </div>
  
  <img className="grass" src={grass} alt="græs"/>
</section>

<section className="anbefalinger mellemsektioner sidepadding">
<h2 className="white">Bare spørg vores kunder</h2>
<br></br>
<img src={trustpilot} alt="trustpilot 5 stjerner"/>

  <div className="anbefalinger_rødder">
        <img className="rødder" src={rødder} alt="blad og ledninger, der ligner rødder"/>
  </div>

  <div className="anmeldere">
          <div className="anmelder">
            <img className="anmelderikon" src={patrick} alt="patrick"/>
            <p className="white bold">Patrick</p>
            <p className="white">“Vi oplevede med hjælp fra Reboot en stor fremdrift i vores antal af besøg på hjemmesiden. Vi har samtidig fået en hjemmeside, som afspejler vores bæredygtige tiltag.”</p>
            <br></br>
            <img className="stjerner" src={stjerner} alt="5 stjerner"/>
          </div>

          <div className="anmelder">
            <img className="anmelderikon" src={laura} alt="laura"/>
            <p className="white bold">Laura</p>
            <p className="white">"Jeg havde en lille hjemmeside før, som ikke var særlig intuitiv og flot. Dette hjalp Reboot med at lave, og har nu en hjemmeside, jeg er mere end glad for! Varm anbefaling herfra."</p>
            <br></br>
            <img className="stjerner" src={stjerner} alt="5 stjerner"/>
          </div>

          <div className="anmelder">
          <img className="anmelderikon" src={karen} alt="karen"/>
            <p className="white bold">Karen</p>
            <p className="white">"I vores virksomhed går vi meget op i at mindske CO2 aftrykket. Derfor var det perfekt, at vi fandt Reboot, som kunne hjælpe os med bæredygtigheden på de digitale parametre."</p>
            <br></br>
            <img className="stjerner" src={stjerner} alt="5 stjerner"/>
          </div>
  </div>  
</section>

<section id="prisberegner" className="prisberegner mellemsektioner sidepadding">
  <h1 className="white">PRISBEREGNER</h1>
  <p className="white">Få et prisestimat på under 2 minutter ved at vælge den boks, der passer bedst på din virksomhed.</p>
  
  <button onClick={handleClick} className="startprisberegner knap_brun mellemparagraffer">Start prisberegner</button>

  <div className="valgmuligheder_slidein mellemparagraffer">
    <h2 className="white">Hvornår ønsker du dit website færdigt og klar til at blomstre?</h2>
    <p className="white">Hvor mange uger må vi tage om at udvikle dit nye og forbedrede website?</p>

    <div className="valgmuligheder mellemparagraffer">
      <NavLink to="/404">
      <div className="valgmulighed">
       <img className="flower" src={littleflower} alt="lille blomst"/>
        <h2 className="lighter">2 - 4 uger</h2>
      </div>
      </NavLink>

      <NavLink to="/404">
      <div className="valgmulighed">
        <img className="flower" src={middleflower} alt="mellemstørelse blomst"/>
        <h2 className="lighter">4 - 6 uger</h2>
      </div>
      </NavLink>

      <NavLink to="/404">
      <div className="valgmulighed">
        <img className="flower" src={bigflower} alt="stor blomst"/>
        <h2 className="lighter">+ 6 uger</h2>
      </div>
      </NavLink>
    </div>
  </div>

</section>

<section id="kontakt" className="kontakt paddingtop">
  <div className="sidepadding">
    <h1>Kontakt os</h1>
    <h3 className="lighter">Sidder du med et ønske om en videre snak om, hvad vi kan gøre for dig, eller blot et spørgsmål? Så tøv ikke med at sende os en besked. Vi vil vende tilbage hurtigst muligt med mulige tidspunkter for et møde og svar på dine spørgsmål.</h3>
  </div>
  <Contact />
  <img className="grass" src={grassdark} alt="græs"/>
</section>
</main>
  );
}

export default Forside;

