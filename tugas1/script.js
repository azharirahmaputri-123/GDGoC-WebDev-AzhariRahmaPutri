const participants = [];

const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const levelSelect = document.getElementById("level");
const waCheckbox = document.getElementById("join-wa");
const participantsList = document.getElementById("participants-list");
const errorEL = document.getElementById("error-message");
const successEL = document.getElementById("succes-message");

function renderParticipants() {
    participantsList.innerHTML = "";

    for (const p of participants) {
        const li = document.createElement("li");
        li.textContent = `${p.name} - ${p.level} ${p.joinWa ? "(Join WA group)" : ""}`;
        participantsList.appendChild(li);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const level = levelSelect.value;
    const joinWA = waCheckbox.checked;

    if(!name || !email) {
        errorEL.textContent = "Name and email are required.";
        errorEL.style.display = "block";
        return;
    }

    errorEL.style.display = "none";

    participants.push({name, email, level, joinWA});
    renderParticipants();
    form.reset();

    successEL.textContent = "Registration Seuccessful";
    successEL.style.display = "block";

    setTimeout(() => {
        successEL.style.display = "none";
    }, 3000);
});