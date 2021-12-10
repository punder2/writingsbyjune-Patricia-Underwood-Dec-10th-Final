function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background(72, 50, 72);

  // let s = 'I allowed you to spread through me as if you were fire and I was your forest And as expected you left dead flowers in your wake And painted me in shades of red and orange Inside and out I was left sparse';

  var sparkle = {
    locationX: random(width),
    locationY: random(height),
    size: random(1, 6),
  };
  

  
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, sparkle.size, sparkle.size);
  ellipse(sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);

  textAlign(LEFT);
  textSize(20);
  textStyle(BOLD);
  textFont("Times New Roman");
  fill(255, 255, 255, 50);

  text("writingsbyjune", 300, 500, 200);

  // poem 1
  // textAlign(LEFT);
  // textSize(18)
  // textStyle(BOLD);
  ////  textFont("Times New Roman");
  //fill(255);
  //text('I allowed you to spread through me as if you were fire and I was your forest And as expected you left dead flowers in your wake And painted me in shades of red and orange Inside and out I was left sparse',160,200,250);

  if (mouseIsPressed) {
    textAlign(LEFT);
    textSize(23);
    textLeading(19);
    textStyle(BOLD);
    textFont("Times New Roman");
    fill(48, 25, 52);
    text(
      "I want these wounds to no longer bleed, For I am tired of watching as the blood fills the cracks and then be damaged by my own hands again.",
      160,
      230,
      270
    );
  } else {
    //  poem 1
    textAlign(LEFT);
    textLeading(19);
    textSize(23);
    textStyle(BOLD);
    textFont("Times New Roman");
    fill(48, 25, 52);
    text(
      "I allowed you to spread through me as if you were fire and I was your forest, And as expected you left dead flowers in your wake, And painted me in shades of red and orange, Inside and out I was left sparse.",
      160,
      200,
      250
    );
  }
  if (mouseIsPressed) {
    textAlign(LEFT);
    textLeading(50);
    //textSize(20);
    textSize(10 + (mouseX / width)*50);
    textStyle(BOLD);
    textFont("Times New Roman");
    fill(255, 191, 0);
    text("I AM NOT THE OCEAN YOU CAN SWIM IN.", 50, 425, 500);

    translate(475, 100);
    noStroke();
    fill(255);
    for (let i = 0; i < 10; i++) {
      ellipse(0, 20, 10, 30);
      rotate(PI / 5);
    }
  } else {
    strokeWeight(1);
    stroke(255, 255, 255);
    fill(255);
    noFill();
    circle(525, 100, 30);
    circle(525, 135, 30);
    circle(525, 65, 30);
  }

  
}


