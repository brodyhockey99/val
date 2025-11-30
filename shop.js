const SHOP_ITEMS = [
    { id: "bluegun", name: "Blue Rifle Skin", cost: 300 },
    { id: "lava", name: "Lava Rifle Skin", cost: 500 }
];

function openShop() {
    if (!USER) return alert("Login first.");

    mainMenu.style.display = "none";
    shopMenu.style.display = "flex";

    shopItems.innerHTML = "";

    SHOP_ITEMS.forEach(it => {
        let owned = USER.skinsOwned.includes(it.id);
        let div = document.createElement("div");

        div.innerHTML = `
            <h3>${it.name}</h3>
            <p>${it.cost} XP</p>
            <button ${owned ? "disabled" : ""} onclick="buyItem('${it.id}', ${it.cost})">
                ${owned ? "Owned" : "Buy"}
            </button>
        `;
        shopItems.appendChild(div);
    });
}

function buyItem(id, cost) {
    if (USER.xp < cost) return alert("Not enough XP!");

    USER.xp -= cost;
    USER.skinsOwned.push(id);
    saveUser();
    openShop();
}
