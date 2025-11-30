const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 550, y: 600, speed: 3, kills: 0 };
let bots = [];
let enemyBots = [];

function startGame() {
    mainMenu.style.display = "none";
    canvas.style.display = "block";

    bots = [];
    enemyBots = [];

    for (let i = 0; i < 5; i++) {
        bots.push({ x: 200 + i*30, y: 100, team: 1, hp: 100 });
        enemyBots.push({ x: 700 + i*30, y: 100, team: 2, hp: 100 });
    }

    requestAnimationFrame(loop);
}

function updateBots(arr, targetX, targetY) {
    arr.forEach(b => {
        let dx = targetX - b.x;
        let dy = targetY - b.y;
        let d = Math.hypot(dx, dy);

        b.x += (dx/d)*1;
        b.y += (dy/d)*1;
    });
}

function loop() {
    ctx.clearRect(0,0,1100,650);

    ctx.fillStyle="cyan";
    ctx.fillRect(player.x-10, player.y-10, 20,20);

    bots.forEach(b => {
        ctx.fillStyle="lime";
        ctx.fillRect(b.x-10,b.y-10,20,20);
    });

    enemyBots.forEach(b => {
        ctx.fillStyle="red";
        ctx.fillRect(b.x-10,b.y-10,20,20);
    });

    updateBots(enemyBots, player.x, player.y);

    requestAnimationFrame(loop);
}
