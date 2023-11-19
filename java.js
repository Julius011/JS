let weapon = [];
let helm = [];
let chest = [];
let gauntlet = [];
let leg = [];
let classes = [];

/* weapon RH and LH*/
fetch("http://localhost:3000/weapon")
.then( (response ) => response.json() )
.then( (response) => {
    weapon = response;
    updateWepSelector();
})

function updateWepSelector() {
    let wepRHSelector = document.querySelector("#weaponRH-select");
    wepRHSelector.addEventListener("change", updateRHWepStats);

    weapon.forEach((weapon) => {
        let newOption = document.createElement("option");
        newOption.value = weapon.name;
        newOption.innerHTML = weapon.name;
        wepRHSelector.append(newOption);
    });

    let wepLHSelector = document.querySelector("#weaponLH-select");
    wepLHSelector.addEventListener("change", updateLHWepStats);

    weapon.forEach((weapon) => {
        let newOption = document.createElement("option");
        newOption.value = weapon.name;
        newOption.innerHTML = weapon.name;
        wepLHSelector.append(newOption);
    });
}

function updateRHWepStats() {
    let selectedRHWep = document.querySelector("#weaponRH-select").value;
    let selectedRHWepData = weapon.find((h) => h.name === selectedRHWep);

    if (selectedRHWepData) {
        document.getElementById("RWep").value = selectedRHWepData.atk.physical;
        document.getElementById("PDef").value = selectedRHWepData.def.physical;
        document.getElementById("MDef").value = selectedRHWepData.def.magic;
        document.getElementById("FDEF").value = selectedRHWepData.def.flame;
        document.getElementById("LDef").value = selectedRHWepData.def.lightning;
    }
}

function updateLHWepStats() {
    let selectedLHWep = document.querySelector("#weaponLH-select").value;
    let selectedLHWepData = weapon.find((h) => h.name === selectedLHWep);

    if (selectedLHWepData) {
        document.getElementById("RWep").value = selectedLHWepData.atk.physical;
        document.getElementById("PDef").value = selectedLHWepData.def.physical;
        document.getElementById("MDef").value = selectedLHWepData.def.magic;
        document.getElementById("FDEF").value = selectedLHWepData.def.flame;
        document.getElementById("LDef").value = selectedLHWepData.def.lightning;
    }
}

/* helm */
fetch("http://localhost:3000/helm")
.then( (response ) => response.json() )
.then( (response) => {
    helm = response;
    updateHelmSelector();
})

function updateHelmSelector() {
    let helmSelector = document.querySelector("#helm-select");
    helmSelector.addEventListener("change", updateHelmStats);

    helm.forEach((helm) => {
        let newOption = document.createElement("option");
        newOption.value = helm.name;
        newOption.innerHTML = helm.name;
        helmSelector.append(newOption);
    });
}

function updateHelmStats() {
    let selectedHelm = document.querySelector("#helm-select").value;
    let selectedHelmData = helm.find((h) => h.name === selectedHelm);

    if (selectedHelmData) {
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

/* chest */
fetch("http://localhost:3000/chest")
.then( (response ) => response.json() )
.then( (response) => {
    chest = response;
    updateChestSelector();
})

function updateChestSelector() {
    let chestSelector = document.querySelector("#chest-select");
    chestSelector.addEventListener("change", updateChestStats);

    chest.forEach((chest) => {
        let newOption = document.createElement("option");
        newOption.value = chest.name;
        newOption.innerHTML = chest.name;
        chestSelector.append(newOption);
    });
}

function updateChestStats() {
    let selectedChest = document.querySelector("#chest-select").value;
    let selectedChestData = chest.find((h) => h.name === selectedChest);

    if (selectedChestData) {
        document.getElementById("PDef").value = selectedChestData.def.physical;
        document.getElementById("strike").value = selectedChestData.def.strike;
        document.getElementById("slash").value = selectedChestData.def.slash;
        document.getElementById("thrust").value = selectedChestData.def.thrust;
        document.getElementById("MDef").value = selectedChestData.def.magic;
        document.getElementById("FDEF").value = selectedChestData.def.fire;
        document.getElementById("LDef").value = selectedChestData.def.lightning;
        document.getElementById("poise").value = selectedChestData.resist.poise;
        document.getElementById("BRes").value = selectedChestData.resist.bleed;
        document.getElementById("PRes").value = selectedChestData.resist.poison;
        document.getElementById("CRes").value = selectedChestData.resist.curse;
    }
}

/* gauntlet */
fetch("http://localhost:3000/gauntlet")
.then( (response ) => response.json() )
.then( (response) => {
    gauntlet = response;
    updateGauntletSelector();
})

function updateGauntletSelector() {
    let gauntletSelector = document.querySelector("#gauntlet-select");
    gauntletSelector.addEventListener("change", updateGauntletStats);

    gauntlet.forEach((gauntlet) => {
        let newOption = document.createElement("option");
        newOption.value = gauntlet.name;
        newOption.innerHTML = gauntlet.name;
        gauntletSelector.append(newOption);
    });
}

function updateGauntletStats() {
    let selectedGauntlet = document.querySelector("#gauntlet-select").value;
    let selectedGauntletData = gauntlet.find((h) => h.name === selectedGauntlet);

    if (selectedGauntletData) {
        document.getElementById("PDef").value = selectedGauntletData.def.physical;
        document.getElementById("strike").value = selectedGauntletData.def.strike;
        document.getElementById("slash").value = selectedGauntletData.def.slash;
        document.getElementById("thrust").value = selectedGauntletData.def.thrust;
        document.getElementById("MDef").value = selectedGauntletData.def.magic;
        document.getElementById("FDEF").value = selectedGauntletData.def.fire;
        document.getElementById("LDef").value = selectedGauntletData.def.lightning;
        document.getElementById("poise").value = selectedGauntletData.resist.poise;
        document.getElementById("BRes").value = selectedGauntletData.resist.bleed;
        document.getElementById("PRes").value = selectedGauntletData.resist.poison;
        document.getElementById("CRes").value = selectedGauntletData.resist.curse;
    }
}

/* leg */
fetch("http://localhost:3000/leg")
.then( (response ) => response.json() )
.then( (response) => {
    leg = response;
    updateLegSelector();
})

function updateLegSelector() {
    let legSelector = document.querySelector("#leg-select");
    legSelector.addEventListener("change", updateLegStats);

    leg.forEach((leg) => {
        let newOption = document.createElement("option");
        newOption.value = leg.name;
        newOption.innerHTML = leg.name;
        legSelector.append(newOption);
    });
}

function updateLegStats() {
    let selectedLeg = document.querySelector("#leg-select").value;
    let selectedLegData = leg.find((h) => h.name === selectedLeg);

    if (selectedLegData) {
        // Update the displayed stats based on the selected helmet
        document.getElementById("PDef").value = selectedLegData.def.physical;
        document.getElementById("strike").value = selectedLegData.def.strike;
        document.getElementById("slash").value = selectedLegData.def.slash;
        document.getElementById("thrust").value = selectedLegData.def.thrust;
        document.getElementById("MDef").value = selectedLegData.def.magic;
        document.getElementById("FDEF").value = selectedLegData.def.fire;
        document.getElementById("LDef").value = selectedLegData.def.lightning;
        document.getElementById("poise").value = selectedLegData.resist.poise;
        document.getElementById("BRes").value = selectedLegData.resist.bleed;
        document.getElementById("PRes").value = selectedLegData.resist.poison;
        document.getElementById("CRes").value = selectedLegData.resist.curse;
    }
}

/* class */
