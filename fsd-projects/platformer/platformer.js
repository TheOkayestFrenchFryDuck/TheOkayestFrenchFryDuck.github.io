$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 300, 200, 20,  "pink");
    createPlatform(100, 550, 200, 20,  "yellow");
    createPlatform(350, 450, 450, 20, "green"); 
    createPlatform(100, 350, 200, 20,  "yellow"); 
    createPlatform(1200, 105, 200, 20,  "aqua");
    createPlatform(850, 250, 250, 20,  "purple");
    createPlatform(900, 550, 200, 20,  "tomato");
    createPlatform(1100, 450, 250, 20,  "orange");
    createPlatform(1200, 1000, 300, 20,  "lightpink");
    createPlatform(350, 650, 400, 100,  "lime");
    createPlatform(1500, 225, 400, 100,  "hotpink");
    createPlatform(1000, 150, 150, 20,  "aqua");




    // TODO 3 - Create Collectables
    createCollectable("steve", 1000, 150, 0, 1,); 
    createCollectable("diamond", 1100, 400, 0, 0,); 
    createCollectable("max", 350, 400, 0, 0,); 


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("right", 450, 3000);
    createCannon("left", 150, 2500);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
