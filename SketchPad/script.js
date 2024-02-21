// Minecraft Canvas
// Variables
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 400;
// Sky
ctx.fillStyle = "dodgerblue";
ctx.fillRect(0, 0, 800, 200);
// Grass
ctx.fillStyle = "olivedrab";
ctx.fillRect(0, 200, 800, 100);

ctx.fillStyle = "saddlebrown";
ctx.fillRect(0, 300, 800, 400);

// Zombie Head
ctx.fillStyle = "green";
ctx.fillRect(550, 30, 60, 60);

// Zombie Shirt
ctx.fillStyle = "darkturquoise";
ctx.fillRect(520, 90, 120, 60);

// Zombie Hands
ctx.fillStyle = "green";
ctx.fillRect(520, 150, 40, 20);
ctx.fillRect(600, 150, 40, 20);

// Zombie Pants
ctx.fillStyle = "blue";
ctx.fillRect(540, 150, 80, 30);
ctx.fillRect(540, 160, 30, 50);
ctx.fillRect(590, 160, 30, 50);

// Zombie Shoes
ctx.fillStyle = "grey";
ctx.fillRect(540, 210, 30, 10);
ctx.fillRect(590, 210, 30, 10);

// Zombie Facial Structure
ctx.fillStyle = "white";
ctx.fillRect(555, 40, 20, 20);
ctx.fillRect(585, 40, 20, 20);
ctx.fillRect(565, 65, 30, 20);

ctx.fillStyle = "red";
ctx.fillRect(555, 45, 10, 10);
ctx.fillRect(585, 45, 10, 10);
ctx.fillRect(570, 75, 20, 10);

// Steve Head
ctx.fillStyle = "bisque";
ctx.fillRect(185, 30, 60, 60);

// Steve Shirt
ctx.fillStyle = "darkturquoise";
ctx.fillRect(145, 90, 120, 60);
ctx.fillRect(260, 90, 70, 20);

// Steve Hands
ctx.fillStyle = "bisque";
ctx.fillRect(145, 150, 20, 20);
ctx.fillRect(330, 90, 20, 20);

// Steve Pants
ctx.fillStyle = "blue";
ctx.fillRect(165, 150, 100, 30);
ctx.fillRect(165, 160, 30, 50);
ctx.fillRect(235, 160, 30, 50);

// Zombie Shoes
ctx.fillStyle = "grey";
ctx.fillRect(165, 210, 30, 10);
ctx.fillRect(235, 210, 30, 10);

// Steve Eyes
ctx.fillStyle = "white";
ctx.fillRect(190, 50, 20, 20);
ctx.fillRect(220, 50, 20, 20);

ctx.fillStyle = "black";
ctx.fillRect(200, 55, 10, 10);
ctx.fillRect(230, 55, 10, 10);

// Steve Hair
ctx.fillStyle = "saddlebrown";
ctx.fillRect(185, 25, 60, 20);

// Steve Sword
ctx.fillStyle = "saddlebrown";
ctx.fillRect = "";
