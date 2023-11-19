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
    weapon.forEach((weapon) => {
        let newOption = document.createElement("option");
        newOption.value = weapon.name;
        newOption.innerHTML = weapon.name;
        wepRHSelector.append(newOption);
    });

    let wepLHSelector = document.querySelector("#weaponLH-select");
    weapon.forEach((weapon) => {
        let newOption = document.createElement("option");
        newOption.value = weapon.name;
        newOption.innerHTML = weapon.name;
        wepLHSelector.append(newOption);
    });
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
    helm.forEach((helm) => {
        let newOption = document.createElement("option");
        newOption.value = helm.name;
        newOption.innerHTML = helm.name;
        helmSelector.append(newOption);
    });
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
    chest.forEach((chest) => {
        let newOption = document.createElement("option");
        newOption.value = chest.name;
        newOption.innerHTML = chest.name;
        chestSelector.append(newOption);
    });
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
    gauntlet.forEach((gauntlet) => {
        let newOption = document.createElement("option");
        newOption.value = gauntlet.name;
        newOption.innerHTML = gauntlet.name;
        gauntletSelector.append(newOption);
    });
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
    leg.forEach((leg) => {
        let newOption = document.createElement("option");
        newOption.value = leg.name;
        newOption.innerHTML = leg.name;
        legSelector.append(newOption);
    });
}

/* class */