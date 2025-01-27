
document.getElementById("pc-vragenlijst").addEventListener("submit", function (event) {
    event.preventDefault(); // Voorkom standaard formulierverzending

    // Ophalen van geselecteerde gebruikstype en resolutie
    const gebruikstype = document.querySelector('input[name="gebruikstype"]:checked')?.value;
    const resolutie = document.querySelector('input[name="resolutie"]:checked')?.value;

    // Controleer of alles is geselecteerd
    if (!gebruikstype || !resolutie) {
        alert("Vul alle vragen in om een aanbeveling te krijgen.");
        return;
    }

    // Aanbeveling logica
    let aanbeveling = "";

    if (gebruikstype === "casual" && resolutie === "hd") {
        aanbeveling = "Super-Budget (€900-€1000) - Ideaal voor casual gamen op FHD!";
    } else if (gebruikstype === "casual" && resolutie === "qhd") {
        aanbeveling = "Budget (€1000-€1200) - Voor casual gamen op QHD!";
    } else if (gebruikstype === "casual" && resolutie === "4k") {
        aanbeveling = "Mid-Range (€1200-€1500) - Casual gamen in 4K met goede prestaties!";
    } else if (gebruikstype === "hardcore" && resolutie === "hd") {
        aanbeveling = "Budget (€1000-€1200) - Hardcore gamen met hoge framerates in FHD!";
    } else if (gebruikstype === "hardcore" && resolutie === "qhd") {
        aanbeveling = "Mid-Range (€1200-€1500) - Perfect voor hardcore gamen op QHD!";
    } else if (gebruikstype === "hardcore" && resolutie === "4k") {
        aanbeveling = "High-End (€1500+) - Voor de ultieme hardcore game-ervaring in 4K!";
    } else if (gebruikstype === "content" && resolutie === "hd") {
        aanbeveling = "Budget (€1000-€1200) - Content creatie op FHD met goede prestaties!";
    } else if (gebruikstype === "content" && resolutie === "qhd") {
        aanbeveling = "Mid-Range (€1200-€1500) - Voor content creatie op QHD!";
    } else if (gebruikstype === "content" && resolutie === "4k") {
        aanbeveling = "High-End (€1500+) - Ideaal voor content creatie in 4K!";
    } else if (gebruikstype === "beide" && resolutie === "hd") {
        aanbeveling = "Budget (€1000-€1200) - Voor gamen en content creatie in FHD!";
    } else if (gebruikstype === "beide" && resolutie === "qhd") {
        aanbeveling = "Mid-Range (€1200-€1500) - Voor gamen en content creatie in QHD!";
    } else if (gebruikstype === "beide" && resolutie === "4k") {
        aanbeveling = "High-End (€1500+) - Voor gamen en content creatie in 4K!";
    } else {
        aanbeveling = "Geen specifieke aanbeveling beschikbaar op basis van je selectie.";
    }

    // Aanbeveling in modal zetten
    document.getElementById("aanbevelingText").textContent = aanbeveling;

    // Modal tonen
    const modal = new bootstrap.Modal(document.getElementById("aanbevelingModal"));
    modal.show();
});