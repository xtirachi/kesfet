// Activities categorized by section
const activities = {
    "heritage-options": [
        "Passport, Bilet və möhürlər (İngiltərə)",
        "Passport, Bilet və möhürlər (Yaponiya)",
        "Passport, Bilet və möhürlər (Misir)",
        "Pul vahidi ilə tanışlıq (İngiltərə)",
        "Pul vahidi ilə tanışlıq (Yaponiya)",
        "Pul vahidi ilə tanışlıq (Misir)",
        "Dil öyrənmə kartları (İngilis dili)",
        "Dil öyrənmə kartları (Yapon dili)",
        "Dil öyrənmə kartları (Ərəb dili)"
    ],
    "steam-options": [
        "Qlobus Konstruktoru",
        "Körpü Konstruktoru",
        "Karton VR Eynək Konstruktoru",
        "Günəş Panelli Avtomobil Konstruktoru",
        "Duz Mühərriki Konstruktoru",
        "Hidravlik Ekskavator Konstruktoru",
        "Günəş Saatı Konstruktoru",
        "Meyvələrdən Enerji mexanizmi"
    ],
    "art-options": [
        "3 ölçülü Big Ben modeli",
        "3 ölçülü London Avtobusu modeli",
        "3 ölçülü Gözətçi qülləsi modeli",
        "3 ölçülü Yapon Gəlincik modeli",
        "3 ölçülü Mumiya Qutusu modeli",
        "3 ölçülü Gəmi modeli",
        "3 ölçülü Piramida modeli",
        "Delfin - Figur boyama",
        "Sfinks - Figur boyama",
        "Delfin - Figur boyama"
    ],
    "experiment-options": [
        "Əkin Fəaliyyəti (dibçək, toxum (gül və tərəvəz), torpaq)",
        "Nyutonun Ağ işıq eksperimenti",
        "Morze əlifbası ilə krossvord",
        "Kirigami",
        "Origami Hazırlama Seti",
        "Koinobori Hazırlama seti",
        "Mumiyalama eksperimenti",
        "Qədim Misir Papirus Kağızı Hazırlama eksperimenti"
    ]
};



// Object to store selected activities
const selectedOptions = {
    heritage: null,
    steam: null,
    art: null,
    experiment: null
};

// Function to populate activity buttons
function populateOptions(sectionId, optionsArray) {
    const container = document.getElementById(sectionId);
    optionsArray.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option");

        btn.addEventListener("click", function () {
            selectOption(sectionId, btn, option);
        });

        container.appendChild(btn);
    });
}

// Function to handle selection
function selectOption(sectionId, button, option) {
    const category = sectionId.split("-")[0]; // Extract category from sectionId

    // Remove previous selection
    document.querySelectorAll(`#${sectionId} .option`).forEach(btn => btn.classList.remove("selected"));

    // Add new selection
    button.classList.add("selected");
    selectedOptions[category] = option;

    // Update summary
    updateSummary();
}

// Function to update summary text
function updateSummary() {
    document.getElementById("summary-text").innerHTML = `
        <strong>Mədəni İrs:</strong> ${selectedOptions.heritage || "Seçilməyib"}<br>
        <strong>STEAM:</strong> ${selectedOptions.steam || "Seçilməyib"}<br>
        <strong>İncəsənət:</strong> ${selectedOptions.art || "Seçilməyib"}<br>
        <strong>Eksperiment:</strong> ${selectedOptions.experiment || "Seçilməyib"}
    `;
}

// Function to submit selection via WhatsApp
document.getElementById("submitBtn").addEventListener("click", () => {
    if (!selectedOptions.heritage || !selectedOptions.steam || !selectedOptions.art || !selectedOptions.experiment) {
        alert("Zəhmət olmasa, hər bölmədən bir seçim edin.");
        return;
    }

    const message = `📦 Kəşf et Qutusu Sifarişi:\n
- Mədəni İrs: ${selectedOptions.heritage}
- STEAM: ${selectedOptions.steam}
- İncəsənət: ${selectedOptions.art}
- Eksperiment: ${selectedOptions.experiment}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=+994702342342&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
});

// Populate activity options for all sections
Object.keys(activities).forEach(section => {
    populateOptions(section, activities[section]);
});
