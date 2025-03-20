// Activity Options for Each Section
const activities = {
    "heritage-options": ["Tarixi Şəhər Maketi", "Mədəni İrs Tapmacaları", "Dünya Xəritəsi Oyunu"],
    "steam-options": ["LEGO Mühəndislik Layihəsi", "Kodlaşdırma Tapşırıqları", "Robot Dizaynı"],
    "art-options": ["Akvarel Rəsm", "Kolaj Yaradıcılığı", "Heykəltəraşlıq"],
    "experiment-options": ["Kimya Təcrübələri", "Fizika Qanunları Testi", "Biologiya Araşdırması"]
};

// Object to store selected choices
const selectedOptions = {
    heritage: "",
    steam: "",
    art: "",
    experiment: ""
};

// Function to Populate Activity Options
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

// Function to Select an Option
function selectOption(sectionId, button, option) {
    // Extract category name from sectionId
    const category = sectionId.replace("-options", "");

    // Remove previous selection
    document.querySelectorAll(`#${sectionId} .option`).forEach(btn => btn.classList.remove("selected"));

    // Add new selection
    button.classList.add("selected");
    selectedOptions[category] = option;

    // Update summary text
    updateSummary();
}

// Function to Update Summary
function updateSummary() {
    document.getElementById("summary-text").innerHTML = `
        <strong>Mədəni İrs:</strong> ${selectedOptions.heritage || "Seçilməyib"}<br>
        <strong>STEAM:</strong> ${selectedOptions.steam || "Seçilməyib"}<br>
        <strong>İncəsənət:</strong> ${selectedOptions.art || "Seçilməyib"}<br>
        <strong>Eksperiment:</strong> ${selectedOptions.experiment || "Seçilməyib"}
    `;
}

// Function to Submit Selections via WhatsApp
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

    const whatsappUrl = `https://api.whatsapp.com/send?phone=+994703745340&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
});

// Populate All Sections
Object.keys(activities).forEach(section => {
    populateOptions(section, activities[section]);
});
