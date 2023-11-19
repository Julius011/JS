function updateHelmSelector() {
    let helmSelector = document.querySelector("#helm-select");
    helmSelector.addEventListener("change", updateStats);

    helm.forEach((helm) => {
        let newOption = document.createElement("option");
        newOption.value = helm.name;
        newOption.innerHTML = helm.name;
        helmSelector.append(newOption);
    });
}

function updateStats() {
    let selectedHelm = document.querySelector("#helm-select").value;
    let selectedHelmData = helm.find((h) => h.name === selectedHelm);

    if (selectedHelmData) {
        // Update the displayed stats based on the selected helmet
        document.getElementById("PDef").value = selectedHelmData.def.physical;
        document.getElementById("strike").value = selectedHelmData.def.strike;
        document.getElementById("slash").value = selectedHelmData.def.slash;
        document.getElementById("thrust").value = selectedHelmData.def.thrust;
        document.getElementById("MDef").value = selectedHelmData.def.magic;
        document.getElementById("FDEF").value = selectedHelmData.def.fire;
        document.getElementById("LDef").value = selectedHelmData.def.lightning;
        document.getElementById("poise").value = selectedHelmData.resist.poise;
        document.getElementById("BRes").value = selectedHelmData.resist.bleed;
        document.getElementById("PRes").value = selectedHelmData.resist.poison;
        document.getElementById("CRes").value = selectedHelmData.resist.curse;
    }
}
