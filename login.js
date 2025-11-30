let USER = null;

function loadUser(username) {
    let data = localStorage.getItem("FPS_USER_" + username);

    if (!data) {
        return {
            username,
            xp: 0,
            level: 1,
            operator: "Brim",
            skinsOwned: [],
            battlepassTier: 0
        };
    }
    return JSON.parse(data);
}

function saveUser() {
    if (!USER) return;
    localStorage.setItem("FPS_USER_" + USER.username, JSON.stringify(USER));
}

function login() {
    const name = usernameInput.value.trim();
    if (name.length < 3) return alert("Too short.");

    USER = loadUser(name);
    saveUser();

    loginMenu.style.display = "none";
    mainMenu.style.display = "flex";
}

window.onload = () => loginMenu.style.display = "flex";
