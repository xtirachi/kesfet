// Activities categorized by section
const activities = {
    "heritage-options": [
        {
            name: "Passport, Bilet və möhürlər (İngiltərə)",
            description: "İngiltərənin məşhur yerlərini səyahət edərək, pasport, bilet və möhürləri öyrənin."
        },
        {
            name: "Passport, Bilet və möhürlər (Yaponiya)",
            description: "Yaponiyanın tarixi yerlərinə səyahət edərək, pasport, bilet və möhürləri öyrənin."
        },
        {
            name: "Passport, Bilet və möhürlər (Misir)",
            description: "Misirin qədim tarixi və mədəniyyəti haqqında məlumatları öyrənin və pasport, bilet və möhürləri istifadə edin."
        },
        {
            name: "Pul vahidi ilə tanışlıq (İngiltərə)",
            description: "İngiltərənin pul vahidini tanıyın və qiymətlər haqqında məlumat əldə edin."
        },
        {
            name: "Pul vahidi ilə tanışlıq (Yaponiya)",
            description: "Yaponiya pul vahidi və iqtisadiyyatı ilə tanış olun."
        },
        {
            name: "Pul vahidi ilə tanışlıq (Misir)",
            description: "Misirin pul vahidi və bazarları ilə tanış olun."
        },
        {
            name: "Dil öyrənmə kartları (İngilis dili)",
            description: "İngilis dili ilə əlaqəli ən əsas sözləri öyrənin."
        },
        {
            name: "Dil öyrənmə kartları (Yapon dili)",
            description: "Yapon dilində gündəlik istifadə olunan sözləri öyrənin."
        },
        {
            name: "Dil öyrənmə kartları (Ərəb dili)",
            description: "Ərəb dilindəki əsas ifadələri öyrənin."
        }
    ],
    "steam-options": [
        {
            name: "Qlobus Konstruktoru",
            description: "Dünyanın xəritəsini yaradaraq qlobal anlayışınızı artırın."
        },
        {
            name: "Körpü Konstruktoru",
            description: "Fərqli materiallardan körpü inşa edərək mühəndislik bacarıqlarınızı inkişaf etdirin."
        },
        {
            name: "Karton VR Eynək Konstruktoru",
            description: "Kartonlardan VR eynəyi düzəldərək texnologiyaya olan marağınızı artırın."
        },
        {
            name: "Günəş Panelli Avtomobil Konstruktoru",
            description: "Günəş enerjisindən istifadə edərək avtomobil qurun."
        },
        {
            name: "Duz Mühərriki Konstruktoru",
            description: "Duzdan enerji əldə edərək mühərrik hazırlayın."
        },
        {
            name: "Hidravlik Ekskavator Konstruktoru",
            description: "Hidravlik sistemdən istifadə edərək ekskavator modeli yaradın."
        },
        {
            name: "Günəş Saatı Konstruktoru",
            description: "Günəş saatı düzəldərək zaman ölçmə üsullarını öyrənin."
        },
        {
            name: "Meyvələrdən Enerji mexanizmi",
            description: "Meyvələrdən enerji əldə edərək enerjinin təbiətini öyrənin."
        }
    ],
    "art-options": [
        {
            name: "3 ölçülü Big Ben modeli",
            description: "İngiltərənin məşhur Big Ben modelini yaradaraq əsərin tarixini öyrənin."
        },
        {
            name: "3 ölçülü London Avtobusu modeli",
            description: "Londonun simvolu olan qırmızı avtobus modelini yaradın."
        },
        {
            name: "3 ölçülü Gözətçi qülləsi modeli",
            description: "İngiltərənin gözətçi qülləsinin modelini düzəldin."
        },
        {
            name: "3 ölçülü Yapon Gəlincik modeli",
            description: "Yapon mədəniyyətinin məşhur gəlincik modelini yaradın."
        },
        {
            name: "3 ölçülü Mumiya Qutusu modeli",
            description: "Misir mədəniyyətinin qədim mumiya qutusu modelini yaradın."
        },
        {
            name: "3 ölçülü Gəmi modeli",
            description: "Dənizdə hərəkət edən gəmi modelini yaradın."
        },
        {
            name: "3 ölçülü Piramida modeli",
            description: "Misir piramidasının modelini yaradaraq qədim mədəniyyəti öyrənin."
        },
        {
            name: "Delfin - Figur boyama",
            description: "Delfin fiqurunu boyayaraq yaradıcı bacarıqlarınızı inkişaf etdirin."
        },
        {
            name: "Sfinks - Figur boyama",
            description: "Sfinks fiqurunu boyayaraq qədim Misir mədəniyyətinə daldırın."
        },
        {
            name: "Delfin - Figur boyama",
            description: "Delfin fiqurunu boyayaraq dəniz həyatı haqqında məlumat əldə edin."
        }
    ],
    "experiment-options": [
        {
            name: "Əkin Fəaliyyəti (dibçək, toxum (gül və tərəvəz), torpaq)",
            description: "Dibçək və toxumlardan istifadə edərək əkin fəaliyyəti ilə təbiətə olan bağlılığınızı artırın."
        },
        {
            name: "Nyutonun Ağ işıq eksperimenti",
            description: "Nyutonun ağ işıqla bağlı etdiyi təcrübəni yenidən həyata keçirin."
        },
        {
            name: "Morze əlifbası ilə krossvord",
            description: "Morze əlifbası ilə krossvord həll edərək kodlaşdırma bacarıqlarınızı inkişaf etdirin."
        },
        {
            name: "Kirigami",
            description: "Kirigami sənətini öyrənərək kağızla incəsənət yaradın."
        },
        {
            name: "Origami Hazırlama Seti",
            description: "Origami sənətini öyrənərək kağızdan fərqli fiqurlar düzəldin."
        },
        {
            name: "Koinobori Hazırlama seti",
            description: "Yaponiyanın məşhur bayrağını hazırlayaraq mədəniyyətlə tanış olun."
        },
        {
            name: "Mumiyalama eksperimenti",
            description: "Mumiyalama təcrübəsi ilə qədim Misir mədəniyyətinə səyahət edin."
        },
        {
            name: "Qədim Misir Papirus Kağızı Hazırlama eksperimenti",
            description: "Misir papirus kağızını hazırlayaraq tarixə dalın."
        }
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

    const whatsappUrl = `https://api.whatsapp.com/send?phone=+994703745340&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
});

// Populate activity options for all sections
Object.keys(activities).forEach(section => {
    populateOptions(section, activities[section]);
});
