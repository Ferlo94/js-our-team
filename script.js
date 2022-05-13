// Ciao ragazzi,
// esercizio di oggi: Our Team
// nome repo: js-our-team
// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
// Buon lavoro!

const staff = [
    {
        staffPic: "img/wayne-barnett-founder-ceo.jpg",
        staffName: "Wayne Barnett",
        job: "Founder & CEO",
    },

    {
        staffPic: "img/angela-caroll-chief-editor.jpg",
        staffName: "Angela Caroll",
        job: "Chief Editor",
    },

    {
        staffPic: "img/walter-gordon-office-manager.jpg",
        staffName: "Walter Gordon",
        job: "Office Manager",
    },

    {
        staffPic: "img/angela-lopez-social-media-manager.jpg",
        staffName: "Angela Lopez",
        job: "Social Media Manager",
    },

    {
        staffPic: "img/scott-estrada-developer.jpg",
        staffName: "Scott Estrada",
        job: "Developer",
    },

    {
        staffPic: "img/barbara-ramos-graphic-designer.jpg",
        staffName: "Barbara Ramos",
        job: "Graphic Designer",
    },
       
];

const containerStaff = document.querySelector(".team-container");

for (let i = 0; i < staff.length; i++) {
    console.log(staff[i]);

    const team = `

    <div class="team-card">
        <div class="card-image">
            <img
            src="${staff[i].staffPic}"
            alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${staff[i].staffName}</h3>
            <p>${staff[i].job}</p>
        </div>
    </div> 
`;
containerStaff.innerHTML += team;
}