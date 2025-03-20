// Activity Options for Each Section
const activities = {
    heritage: ["Tarixi Şəhər Maketi", "Mədəni İrs Tapmacaları", "Dünya Xəritəsi Oyunu"],
    steam: ["LEGO Mühəndislik Layihəsi", "Kodlaşdırma Tapşırıqları", "Robot Dizaynı"],
    art: ["Akvarel Rəsm", "Kolaj Yaradıcılığı", "Heykəltəraşlıq"],
    experiment: ["Kimya Təcrübələri", "Fizika Qanunları Testi", "Biologiya Araşdırması"]
};

// Function to Populate Activity Options
function populateOptions(sectionId, optionsArray) {
    const container = document.getElementById(sectionId);
    optionsArray.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option");
        btn.onclick = () => selectOption(sectionId, btn, option);
        container.appendChild(btn);
    });
}

// Function to Select an Option
const selectedOptions = {
    heritage: "",
    steam: "",
    art: "",
    experiment: ""
};

function selectOption(sectionId, button, option) {
    // Remove previous selection
    document.querySelectorAll(`#${sectionId} .option`).forEach(btn => btn.classList.remove("selected"));

    // Add new selection
    button.classList.add("selected");
    selectedOptions[sectionId.split("-")[0]] = option;

    updateSummary();
}

// Function to Update Summary
function updateSummary() {
    const summaryText = `
        Mədəni İrs: ${selectedOptions.heritage || "Seçilməyib"},
        STEAM: ${selectedOptions.steam || "Seçilməyib"},
        İncəsənət: ${selectedOptions.art || "Seçilməyib"},
        Eksperiment: ${selectedOptions.experiment || "Seçilməyib"}
    `;
    document.getElementById("summary-text").textContent = summaryText;
}

// Function to Submit Selections via WhatsApp
document.getElementById("submitBtn").addEventListener("click", () => {
    if (!selectedOptions.heritage || !selectedOptions.steam || !selectedOptions.art || !selectedOptions.experiment) {
        alert("Zəhmət olmasa, hər bölmədən bir seçim edin.");
        return;
    }

    const message = `📦 Kəşf et Qutusu Sifarişi:
- Mədəni İrs: ${selectedOptions.heritage}
- STEAM: ${selectedOptions.steam}
- İncəsənət: ${selectedOptions.art}
- Eksperiment: ${selectedOptions.experiment}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=+994703745340&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
});

// Populate All Sections
populateOptions("heritage-options", activities.heritage);
populateOptions("steam-options", activities.steam);
populateOptions("art-options", activities.art);
populateOptions("experiment-options", activities.experiment);
