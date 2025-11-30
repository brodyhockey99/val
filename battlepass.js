const BP_TIERS = [
    { tier: 1, reward: "100 XP" },
    { tier: 2, reward: "Skin: BlueGun" },
    { tier: 3, reward: "150 XP" },
    { tier: 4, reward: "Skin: LavaGun" },
];

function openBattlePass() {
    if (!USER) return alert("Login first.");

    mainMenu.style.display = "none";
    battlepassMenu.style.display = "flex";

    let box = battlepassTiers;
    box.innerHTML = "";

    BP_TIERS.forEach(t => {
        let unlocked = USER.level >= t.tier;

        let d = document.createElement("div");
        d.innerHTML = `
            <h3>Tier ${t.tier}</h3>
            <p>Reward: ${t.reward}</p>
            <p>Status: ${unlocked ? "Unlocked" : "Locked"}</p>
        `;
        box.appendChild(d);
    });
}
