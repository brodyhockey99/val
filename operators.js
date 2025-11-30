const OPERATORS = [
    { name: "Brim", desc: "Speed boost ability." },
    { name: "Jett", desc: "Dash forward ability." },
    { name: "Sova", desc: "Reveal enemies." },
    { name: "Omen", desc: "Shadow teleport 20px." }
];

function openOperatorMenu() {
    mainMenu.style.display = "none";
    operatorMenu.style.display = "flex";

    let div = document.getElementById("operatorList");
    div.innerHTML = "";

    OPERATORS.forEach(op => {
        let b = document.createElement("button");
        b.innerText = op.name + " - " + op.desc;
        b.onclick = () => {
            USER.operator = op.name;
            saveUser();
            alert("Selected: " + op.name);
        };
        div.appendChild(b);
    });
}
