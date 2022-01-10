let groups = [];
let imgs = [];
let category;
let hydrantImgs = [];
let crosswalkImgs = [];
let motorcycleImgs = [];
let busImgs = [];
let trafficImgs = [];
let megafauna = [];
let diabeetusImgs = [];
let glenImgs = [];
let teletubbies = [];
let pic = [];
let x = 0;
let y = 0;
let nbrClicks = 0; //Let's count these fools.

function preload() {
  gameOverImg = loadImage('images/gameOver.svg', 'game over'); //For when the game is over. Why not start at the end?
  theme = loadSound('audio/8-punk-8-bit-music.mp3'); //teh jamz
  gameOverGlen = loadImage('images/glen/glenMusk.png', 'Glen says game over'); //Dumb joke based on a typo I saw on Twitter.
  ele = createVideo(['images/ExplosionVideo.mp4']); //variable for something no one saw coming.
  ele.hide(); //hides the video until I tell it otherwise
  ele.parent('gameContainer');

  //IT'S CORNY TIME ======================================================================================//
  //=====================================================================================================//
  corny = loadImage('images/corny.png'); //A magical being.==============================================//
  //=======Image from: https://www.pngfuel.com/e8bc3d7b-2d24-ba44-812c-16fbbbd3adab. I added the color.==//
  //====================================================================================================//

  bottomLogo = ('images/aRuptchaSmall.png'); //A dumb joke.
  font = loadFont('fonts/modernpics-webfont.ttf'); //This font bomb better work, Nerdlinger.
  // By which I mean it loads the font for the checkmark that comes later. Needed a symbol font for this purpose. GOT IT.

  // This loads all the images into arrays.
  for (var i = 0; i < 9; i++) {
    crosswalkImgs[i] = loadImage('images/crosswalk/crosswalk' + i + '.jpg');
  }
  for (var i = 0; i < 9; i++) {
    hydrantImgs[i] = loadImage('images/hydrant/hydrant' + i + '.jpg');
  }
  for (var i = 0; i < 9; i++) {
    motorcycleImgs[i] = loadImage('images/motorcycle/motorcycle' + i + '.jpg');
  }
  for (var i = 0; i < 9; i++) {
    busImgs[i] = loadImage('images/buses/bus' + i + '.jpg');
  }
  for (var i = 0; i < 9; i++) {
    trafficImgs[i] = loadImage('images/trafficLights/trafficLights' + i + '.jpg');
  }
  for (var i = 0; i < 9; i++) {
    megafauna[i] = loadImage('images/megafauna/megafauna' + i + '.jpg');
  }
  for (var i = 0; i < 9; i++) {
    diabeetusImgs[i] = loadImage('images/diabeetus/diabeetus' + i + '.jpg');
  }
  for (var i = 0; i < 9; i++) {
    glenImgs[i] = loadImage('images/glen/glen' + i + '.jpg');
  }
  for (var i = 0; i < 9; i++) {
    teletubbies[i] = loadImage('images/teletubbies/teletubbies' + i + '.jpg');
  }
} //end of preload

function setup() {
  canvas = createCanvas(600, 600); //Creates the canvas. "Does what it says on the tin."
  canvas.parent("gameContainer"); //Places the canvas in the div that's centered in the middle of the screen.
  canvas.id('theCanvas'); //This is just to theoretically make it easier to remove at the end. This is my own theory and may have no basis in reality.
  // crosswalkCanvas = new testCanvas();
  musicControls(); //puts the music buttons at the bottom
  textFont(font); //loads the font I preloaded earlier. Like 15 lines earlier.
  wantToPlay(); //Get ready for action!
}

function draw() {
  //Nothing to see here. Move along.
}

function mousePressed() { //Puts a checkmark on the images. Words cannot express my gratitude to Delia for her help in getting this to work.

  for (let i = 0; i < pic.length; i++) {
    let d = dist(mouseX, mouseY, pic[i].xpos + pic[i].image.width, pic[i].ypos + pic[i].image.height);

    //!!!!new code to check based on the mouseX and mouseY if we are over the image -
    this.mousePressed = function() {
      for (let i = 0; i < pic.length; i++) { //Calculates what does or does not constitute the image boundaries
        let d = dist(mouseX, mouseY, pic[i].xpos + pic[i].image.width, pic[i].ypos + pic[i].image.height);

        if (pic[i].isUnderMouse(mouseX, mouseY, pic[i])) { //If it's determined that you're over an image and you click on it, check mark time.
          strokeWeight(4);
          stroke(0);
          fill(255);
          textSize(64);
          text('%', pic[i].xpos, pic[i].ypos, pic[i].xpos + pic[i].image.width, pic[i].ypos + pic[i].image.height);
        }
      }
    }
  }
} //end of mousePressed


function wantToPlay() { //Sets up the screen where you agree to play the game
  let headerDiv = createDiv(); //div to hold the header logo - originally had a unicorn in it, hence the name.
  headerDiv.id('splashHeader');
  headerDiv.parent('header'); //put the title div within the header div for layout purposes
  headerDiv.html('CAPTURE THE M A G I C');
  headerDiv.style('height', '150px'); //general title styling and positioning
  headerDiv.style('text-align', 'center');
  headerDiv.style('border-radius', '15px');
  headerDiv.style('border-color', 'black');
  headerDiv.style('border-width', 'thick');
  headerDiv.style('border-style', 'solid');
  headerDiv.style('font-size', '65px');
  headerDiv.style('line-height', '70px');
  headerDiv.style('padding-top', '10px');
  headerDiv.style('font-family', 'Bungee Shade');
  headerDiv.style('color', '#000000');
  headerDiv.style('box-shadow', '5px 10px 10px black');
  headerDiv.style('background-color', '#ffffff');

  let playButtonDiv = createDiv();
  playButtonDiv.id('pressPlay');
  playButtonDiv.parent('gameContainer');
  let playButton = createButton('LET&#39;S PLAY!'); //the creation and styling of the Let's Play button
  playButton.id('playButton');
  playButton.style('background-color', '#FF0000');
  playButton.style('color', '#000000');
  playButton.style('border', 'none');
  playButton.style('padding', '15px');
  playButton.style('margin-top', '20px');
  playButton.style('margin-left', 'auto');
  playButton.style('margin-right', 'auto');
  playButton.style('margin-top', 'auto');
  playButton.style('margin-bottom', 'auto');
  playButton.style('display', 'inline-block');
  playButton.style('font-size', '36px');
  playButton.style('font-family', 'Monoton');
  playButton.style('border-radius', '10px');
  playButton.style('border-width', 'thick');
  playButton.style('border-color', '#000000');
  playButton.style('border-style', 'outset');
  playButton.style('text-shadow', '2px 2px 4px #000000');
  playButton.style('background-image', 'url("images/bg345.gif")');

  //The image of the glitter background came from a dead site, so I had to go Wayback
  //https://web.archive.org/web/20180103175657/http://www.myspacehippo.com/files/glitterbacks/bg345.gif
  //The CSS tips on how to o this came from here: https://stackoverflow.com/questions/33940534/add-glitter-text
  //That's who referred me to the dead site. They'll rue the day. RUE!!!

  playButton.parent('pressPlay'); //Contains the button within the large div that holds the game. (Or will when we get there.)
  playButton.mousePressed(playGame); //Starts the game.

  let footerImageDiv = createDiv(); //Div to hold the footer image
  footerImageDiv.id('cornyFooter');
  footerImageDiv.parent(footer); //Positions the new div within an existing one for layout simplicity/complexity.
  let footerImage = createImg('images/cornyFooterPic.png', 'corny'); //Hey, there's that unicorn!
  footerImage.id('cornyFoot');
  footerImage.parent(cornyFooter);
} //end of playButtonDiv stuff

function playGame() { //Clears a bunch of stuff off the screen to make space for game elements, calls the next screen.
  splashHeader.remove();
  cornyFooter.remove();
  playButton.remove();
  pressPlay.remove();
  releaseTheCaptcha();
} //end of playGame

function releaseTheCaptcha() { //Adds the elements of the next screen.

  let warning = createDiv(); //Another div for inside the existing header div
  warning.id('captchaMessage');
  warning.parent(header);
  warning.style('font-family', 'Roboto'); //Styling
  warning.style('font-size', '36px');
  warning.style('color', '#ffffff');
  warning.style('text-align', 'center');
  warning.style('padding-top', '50px');
  warning.style('margin-left', 'auto');
  warning.style('margin-right', 'auto');
  warning.style('display', 'grid');
  warning.style('background-color', '#4a90e2');
  warning.style('height', '100px');
  warning.html('Please confirm your humanity.'); //Come on, do it!

  let roboticDiv = createDiv(); //I needed to go with a flexbox for this one particular layout, so I made it its own div just for this. What a guy.
  roboticDiv.id('aPlaceForRobots');
  roboticDiv.parent('gameContainer');
  roboticDiv.style('display', 'flex');
  roboticDiv.style('flex-direction', 'column-reverse'); //Yeah, this was totally worth it.

  let checkbox = createDiv(); //I opted to go with a button instead of a checkbox, ultimately. Didn't think the name was a big enough deal to change.
  checkbox.id('notARobot');
  checkbox.parent('aPlaceForRobots');
  checkbox.style('padding', '50px');
  checkbox.html('I&#39;m not a robot'); //If you want apostrophes, you'll want to remember the weird gibberish in this line.
  checkbox.style('font-family', 'Roboto');
  checkbox.style('font-size', '24px');
  checkbox.style('color', '#ffffff');
  checkbox.style('text-align', 'center');
  checkbox.style('background-color', '#4a90e2');
  checkbox.style('margin-top', '20px');
  checkbox.style('margin-bottom', 'auto');
  checkbox.style('margin-left', 'auto');
  checkbox.style('margin-right', 'auto');

  let unusualActivity = createDiv(); //Div for the justification of this screen's appearance.
  unusualActivity.id('unusualActivity');
  unusualActivity.parent('aPlaceForRobots');
  unusualActivity.html('We have detected unusual activity coming from your computer. Weird, robot activity.');

  let robotButtonDiv = createDiv(); //Div within a div to hold the button in the middle.
  robotButtonDiv.id('robotButtonHole');
  robotButtonDiv.parent('notARobot');

  let robotButton = createButton('that&#39;s right'); //The button in question.
  robotButton.parent('robotButtonHole');
  robotButton.style('background-color', '#5FE24B');
  robotButton.style('color', '#000000');
  robotButton.style('padding', '10px');
  robotButton.style('margin-top', '15px');
  robotButton.style('box-shadow', '3px 3px #512A4D');
  robotButton.style('display', 'inline-block');
  robotButton.style('font-size', '14px');
  robotButton.style('border-radius', '10px');
  robotButton.style('border-color', 'black');
  robotButton.style('border-style', 'solid');
  robotButton.style('border-width', 'thin');
  robotButton.mousePressed(actuallyNotARobot); //button function

  let reminderDiv = createDiv(); //Moving the game title/logo to the bottom during this transitional screen. BRANDING!
  reminderDiv.id('captureTheFooter');
  reminderDiv.parent('footer');
  reminderDiv.html('CAPTURE THE MAGIC');
  reminderDiv.style('text-align', 'center');
  reminderDiv.style('border-radius', '10px');
  reminderDiv.style('border-color', 'black');
  reminderDiv.style('border-width', 'thick');
  reminderDiv.style('border-style', 'solid');
  reminderDiv.style('font-family', 'Bungee Shade');
  reminderDiv.style('text-shadow', '2px 2px 4px #ffffff');

} //end of releaseTheCaptcha

function actuallyNotARobot() { //Clears the last screen and builds the next.
  console.log("actually not a robot function firing");
  captchaMessage.remove();
  notARobot.remove();
  captureTheFooter.remove();
  unusualActivity.remove();
  aPlaceForRobots.remove();

  let newHeading = createDiv();
  newHeading.id('captchaPrompt');
  newHeading.parent(header);
  newHeading.style('font-family', 'Roboto');
  newHeading.style('font-size', '36px');
  newHeading.style('color', '#ffffff');
  newHeading.style('text-align', 'center');
  newHeading.style('padding-top', '25px');
  newHeading.style('padding-bottom', '15px');
  newHeading.style('margin-left', 'auto');
  newHeading.style('margin-right', 'auto');
  newHeading.style('display', 'grid');
  newHeading.style('background-color', '#4a90e2');
  newHeading.style('height', '100px');
  newHeading.html('Please select all images of'); //Sets up the header for the categories to follow.

  //=========
  //display images
  captchaDisplayCrosswalks(); //This is it. The thing that nearly did me in. We're just calling it here. The details come later.
  //=========
} //end of actuallyNotARobot


//It is probably easier/more sensible to do this section differently, but with a dealine looming, this is how I did it.
//Perhaps my first post-class revision of this will be to make this section more elegant.
//ANYHOO=================================================================================||

function captchaDisplayCrosswalks() { //Here are the details you requested a couple of lines ago.
  //Delia is forever my hero for her assistance with this part in particular.
  let imgs = crosswalkImgs; //Picks the array for the first run-through.
  let imgW = imgs[0].width; //Set the width and height of the images using the first one in the array.
  let imgH = imgs[0].height;

  for (let i = 0; i < imgs.length; i++) {
    pic[i] = new Captcha(x, y, imgs[i]); //Takes the array and adds magic so it knows what images get clicked on.
    x += imgW;

    if (x >= 600) { //Makes a new row if there are three images in the row (each are 200x200px)
      y += imgH;
      x = 0;
    }
  }
  for (let j = 0; j < pic.length; j++) {
    pic[j].display(); //Displays the images with the magic to absorb any clicks you throw at them.
  }
  let crosswalkHeadingDiv = createDiv(); //for the category
  crosswalkHeadingDiv.id('crosswalkHeadingDiv');
  crosswalkHeadingDiv.parent('captchaPrompt');
  crosswalkHeadingDiv.style('font-family', 'Roboto');
  crosswalkHeadingDiv.style('font-weight', '900');
  crosswalkHeadingDiv.style('color', '#ffffff');
  crosswalkHeadingDiv.html('crosswalks');
  //
  let bottomDiv = createDiv(); //div for the stuff that goes in the footer. By putting them in a div, it makes them easier to ditch the whole div when needed.
  bottomDiv.id('bottomDiv');
  bottomDiv.parent(footer);
  let logoBelow = createImg('images/aRuptchaSmall.png', 'logo of a nuisance'); //Parody of the reCAPTCHA logo, perhaps only funny if you grew up in MA, and maybe not even then.
  logoBelow.parent(bottomDiv);

  let verifyButton = createButton('VERIFY');
  verifyButton.style('float', 'right');
  verifyButton.style('margin-top', '30px');
  verifyButton.style('margin-right', '10px');
  verifyButton.style('font-size', '16px');
  verifyButton.style('width', '100px');
  verifyButton.style('height', '40px');
  verifyButton.style('font-family', 'Roboto');
  verifyButton.parent('bottomDiv');
  verifyButton.style('background-color', '#4a90e2');
  verifyButton.style('color', '#ffffff');
  verifyButton.style('border', 'none');
  verifyButton.mousePressed(clearTheCrossWalks);
} //end of crosswalks

function captchaDisplayHydrants() { //step 2
  let imgs = hydrantImgs; //This is the same code as above (and below), but you have to set the new array.
  let imgW = imgs[0].width;
  let imgH = imgs[0].height;
  for (let i = 0; i < imgs.length; i++) {
    pic[i] = new Captcha(x, y, imgs[i]);
    x += imgW;

    if (x >= 600) {
      y += imgH;
      x = 0;
    }
  }
  //}
  // }
  for (let j = 0; j < pic.length; j++) {
    pic[j].display();
  }
  let hydrantHeadingDiv = createDiv(); //for the category
  hydrantHeadingDiv.id('hydrantHeadingDiv');
  hydrantHeadingDiv.parent('captchaPrompt');
  hydrantHeadingDiv.style('font-family', 'Roboto');
  hydrantHeadingDiv.style('font-weight', '900');
  hydrantHeadingDiv.style('color', '#ffffff');
  hydrantHeadingDiv.html('fire hydrants');

  let bottomDiv = createDiv(); //div for the stuff that goes in the footer. By putting them in a div, it makes them easier to ditch the whole div when needed.
  bottomDiv.id('bottomDiv');
  bottomDiv.parent(footer);
  let logoBelow = createImg('images/aRuptchaSmall.png', 'logo of a nuisance'); //Parody of the reCAPTCHA logo, perhaps only funny if you grew up in MA, and maybe not even then.
  logoBelow.parent(bottomDiv);
  logoBelow.style('float', 'left');

  let verifyButton = createButton('VERIFY');
  verifyButton.style('float', 'right');
  verifyButton.style('margin-top', '30px');
  verifyButton.style('margin-right', '10px');
  verifyButton.style('font-size', '16px');
  verifyButton.style('width', '100px');
  verifyButton.style('height', '40px');
  verifyButton.style('font-family', 'Roboto');
  verifyButton.parent('bottomDiv');
  verifyButton.style('background-color', '#4a90e2');
  verifyButton.style('color', '#ffffff');
  verifyButton.style('border', 'none');
  verifyButton.mousePressed(clearTheHydrants);
} //end of captchaDisplayHydrants

function captchaDisplayMotorcycles() {
  let imgs = motorcycleImgs; //Now we do motorcycles.
  let imgW = imgs[0].width;
  let imgH = imgs[0].height;

  for (let i = 0; i < imgs.length; i++) {
    pic[i] = new Captcha(x, y, imgs[i]);
    x += imgW;

    if (x >= 600) {
      y += imgH;
      x = 0;
    }
  }
  for (let j = 0; j < pic.length; j++) {
    pic[j].display();
  }

  let motorHeadingDiv = createDiv();
  motorHeadingDiv.id('motorcycleHeadingDiv');
  motorHeadingDiv.parent('captchaPrompt');
  motorHeadingDiv.style('font-family', 'Roboto');
  motorHeadingDiv.style('font-weight', '900');
  motorHeadingDiv.style('color', '#ffffff');
  motorHeadingDiv.html('motorcycles'); //This part is different!
  //
  let bottomDiv = createDiv();
  bottomDiv.id('bottomDiv');
  bottomDiv.parent(footer);
  let logoBelow = createImg('images/aRuptchaSmall.png', 'logo of a nuisance');
  logoBelow.parent(bottomDiv);

  let verifyButton = createButton('VERIFY');
  verifyButton.style('float', 'right');
  verifyButton.style('margin-top', '30px');
  verifyButton.style('margin-right', '10px');
  verifyButton.style('font-size', '16px');
  verifyButton.style('width', '100px');
  verifyButton.style('height', '40px');
  verifyButton.style('font-family', 'Roboto');
  verifyButton.parent('bottomDiv');
  verifyButton.style('background-color', '#4a90e2');
  verifyButton.style('color', '#ffffff');
  verifyButton.style('border', 'none');
  verifyButton.mousePressed(clearTheMotorcycles);
} //end of motorcycles

function captchaDisplayBuses() {
  let imgs = busImgs; //Now we do the bus.
  let imgW = imgs[0].width;
  let imgH = imgs[0].height;

  for (let i = 0; i < imgs.length; i++) {
    pic[i] = new Captcha(x, y, imgs[i]);
    x += imgW;

    if (x >= 600) {
      y += imgH;
      x = 0;
    }
  }
  for (let j = 0; j < pic.length; j++) {
    pic[j].display();
  }
  let busHeadingDiv = createDiv();
  busHeadingDiv.id('busHeadingDiv');
  busHeadingDiv.parent('captchaPrompt');
  busHeadingDiv.style('font-family', 'Roboto');
  busHeadingDiv.style('font-weight', '900');
  busHeadingDiv.style('color', '#ffffff');
  busHeadingDiv.html('buses'); //This part is different!
  //
  let bottomDiv = createDiv();
  bottomDiv.id('bottomDiv');
  bottomDiv.parent(footer);
  let logoBelow = createImg('images/aRuptchaSmall.png', 'logo of a nuisance');
  logoBelow.parent(bottomDiv);

  let verifyButton = createButton('VERIFY');
  verifyButton.style('float', 'right');
  verifyButton.style('margin-top', '30px');
  verifyButton.style('margin-right', '10px');
  verifyButton.style('font-size', '16px');
  verifyButton.style('width', '100px');
  verifyButton.style('height', '40px');
  verifyButton.style('font-family', 'Roboto');
  verifyButton.parent('bottomDiv');
  verifyButton.style('background-color', '#4a90e2');
  verifyButton.style('color', '#ffffff');
  verifyButton.style('border', 'none');
  verifyButton.mousePressed(clearTheBuses);
} //end of buses

function captchaDisplayTrafficLights() {
  let imgs = trafficImgs; //Now we do traffic lights.
  let imgW = imgs[0].width;
  let imgH = imgs[0].height;

  for (let i = 0; i < imgs.length; i++) {
    pic[i] = new Captcha(x, y, imgs[i]);
    x += imgW;

    if (x >= 600) {
      y += imgH;
      x = 0;
    }
  }
  for (let j = 0; j < pic.length; j++) {
    pic[j].display();
  }
  let trafficHeadingDiv = createDiv();
  trafficHeadingDiv.id('trafficHeadingDiv');
  trafficHeadingDiv.parent('captchaPrompt');
  trafficHeadingDiv.style('font-family', 'Roboto');
  trafficHeadingDiv.style('font-weight', '900');
  trafficHeadingDiv.style('color', '#ffffff');
  trafficHeadingDiv.html('traffic lights'); //This part is different!

  let bottomDiv = createDiv();
  bottomDiv.id('bottomDiv');
  bottomDiv.parent(footer);
  let logoBelow = createImg('images/aRuptchaSmall.png', 'logo of a nuisance');
  logoBelow.parent(bottomDiv);

  let verifyButton = createButton('VERIFY');
  verifyButton.style('float', 'right');
  verifyButton.style('margin-top', '30px');
  verifyButton.style('margin-right', '10px');
  verifyButton.style('font-size', '16px');
  verifyButton.style('width', '100px');
  verifyButton.style('height', '40px');
  verifyButton.style('font-family', 'Roboto');
  verifyButton.parent('bottomDiv');
  verifyButton.style('background-color', '#4a90e2');
  verifyButton.style('color', '#ffffff');
  verifyButton.style('border', 'none');
  verifyButton.mousePressed(clearTheTrafficLights);
} //end of trafficLights

function captchaDisplayMegafauna() {
  let imgs = megafauna; //Now we do charismatic megafauna. So charismatic I changed the naming convention just for them.
  let imgW = imgs[0].width;
  let imgH = imgs[0].height;

  for (let i = 0; i < imgs.length; i++) {
    pic[i] = new Captcha(x, y, imgs[i]);
    x += imgW;

    if (x >= 600) {
      y += imgH;
      x = 0;
    }
  }
  for (let j = 0; j < pic.length; j++) {
    pic[j].display();
  }
  let megafaunaHeadingDiv = createDiv();
  megafaunaHeadingDiv.id('megafaunaHeadingDiv');
  megafaunaHeadingDiv.parent('captchaPrompt');
  megafaunaHeadingDiv.style('font-family', 'Roboto');
  megafaunaHeadingDiv.style('font-weight', '900');
  megafaunaHeadingDiv.style('color', '#ffffff');
  megafaunaHeadingDiv.html('charismatic megafauna'); //This part is different!
  //
  let bottomDiv = createDiv();
  bottomDiv.id('bottomDiv');
  bottomDiv.parent(footer);
  let logoBelow = createImg('images/aRuptchaSmall.png', 'logo of a nuisance');
  logoBelow.parent(bottomDiv);

  let verifyButton = createButton('VERIFY');
  verifyButton.style('float', 'right');
  verifyButton.style('margin-top', '30px');
  verifyButton.style('margin-right', '10px');
  verifyButton.style('font-size', '16px');
  verifyButton.style('width', '100px');
  verifyButton.style('height', '40px');
  verifyButton.style('font-family', 'Roboto');
  verifyButton.parent('bottomDiv');
  verifyButton.style('background-color', '#4a90e2');
  verifyButton.style('color', '#ffffff');
  verifyButton.style('border', 'none');
  verifyButton.mousePressed(clearTheMegafauna);
} //end of megafauna

function captchaDisplayDaBeetus() {
  let imgs = diabeetusImgs; //Now we do the beetus.
  let imgW = imgs[0].width;
  let imgH = imgs[0].height;

  for (let i = 0; i < imgs.length; i++) {
    pic[i] = new Captcha(x, y, imgs[i]);
    x += imgW;

    if (x >= 600) {
      y += imgH;
      x = 0;
    }
  }
  for (let j = 0; j < pic.length; j++) {
    pic[j].display();
  }
  let diabeetusHeadingDiv = createDiv();
  diabeetusHeadingDiv.id('diabeetusHeadingDiv');
  diabeetusHeadingDiv.parent('captchaPrompt');
  diabeetusHeadingDiv.style('font-family', 'Roboto');
  diabeetusHeadingDiv.style('font-weight', '900');
  diabeetusHeadingDiv.style('color', '#ffffff');
  diabeetusHeadingDiv.html('people who say diabeetus'); //This part is different!
  //
  let bottomDiv = createDiv();
  bottomDiv.id('bottomDiv');
  bottomDiv.parent(footer);
  let logoBelow = createImg('images/aRuptchaSmall.png', 'logo of a nuisance');
  logoBelow.parent(bottomDiv);

  let verifyButton = createButton('VERIFY');
  verifyButton.style('float', 'right');
  verifyButton.style('margin-top', '30px');
  verifyButton.style('margin-right', '10px');
  verifyButton.style('font-size', '16px');
  verifyButton.style('width', '100px');
  verifyButton.style('height', '40px');
  verifyButton.style('font-family', 'Roboto');
  verifyButton.parent('bottomDiv');
  verifyButton.style('background-color', '#4a90e2');
  verifyButton.style('color', '#ffffff');
  verifyButton.style('border', 'none');
  verifyButton.mousePressed(clearTheBeetus);
} //end of the beetus

function captchaDisplayTheTubbies() {
  let imgs = teletubbies; //TIME FOR TELETUBBIES! TIME FOR TELETUBBIES!
  let imgW = imgs[0].width;
  let imgH = imgs[0].height;

  for (let i = 0; i < imgs.length; i++) {
    pic[i] = new Captcha(x, y, imgs[i]);
    x += imgW;

    if (x >= 600) {
      y += imgH;
      x = 0;
    }
  }
  for (let j = 0; j < pic.length; j++) {
    pic[j].display();
  }
  let teletubbiesHeadingDiv = createDiv();
  teletubbiesHeadingDiv.id('teletubbiesHeadingDiv');
  teletubbiesHeadingDiv.parent('captchaPrompt');
  teletubbiesHeadingDiv.style('font-family', 'Roboto');
  teletubbiesHeadingDiv.style('font-weight', '900');
  teletubbiesHeadingDiv.style('color', '#ffffff');
  teletubbiesHeadingDiv.html('teletubbies'); //This part is different!
  //
  let bottomDiv = createDiv();
  bottomDiv.id('bottomDiv');
  bottomDiv.parent(footer);
  let logoBelow = createImg('images/aRuptchaSmall.png', 'logo of a nuisance');
  logoBelow.parent(bottomDiv);

  let verifyButton = createButton('VERIFY');
  verifyButton.style('float', 'right');
  verifyButton.style('margin-top', '30px');
  verifyButton.style('margin-right', '10px');
  verifyButton.style('font-size', '16px');
  verifyButton.style('width', '100px');
  verifyButton.style('height', '40px');
  verifyButton.style('font-family', 'Roboto');
  verifyButton.parent('bottomDiv');
  verifyButton.style('background-color', '#4a90e2');
  verifyButton.style('color', '#ffffff');
  verifyButton.style('border', 'none');
  verifyButton.mousePressed(clearTheTubbies);
} //end of teletubbies

function captchaDisplayGlen() {
  let imgs = glenImgs; //Now we do Glen.
  let imgW = imgs[0].width;
  let imgH = imgs[0].height;

  for (let i = 0; i < imgs.length; i++) {
    pic[i] = new Captcha(x, y, imgs[i]);
    x += imgW;

    if (x >= 600) {
      y += imgH;
      x = 0;
    }
  }
  for (let j = 0; j < pic.length; j++) {
    pic[j].display();
  }
  let glenHeadingGlenDiv = createDiv();
  glenHeadingGlenDiv.id('glenHeadingGlenDiv');
  glenHeadingGlenDiv.parent('captchaPrompt');
  glenHeadingGlenDiv.style('font-family', 'Roboto');
  glenHeadingGlenDiv.style('font-weight', '900');
  glenHeadingGlenDiv.style('color', '#ffffff');
  glenHeadingGlenDiv.html('Glen'); //This part is different!
  //
  let bottomDiv = createDiv();
  bottomDiv.id('bottomDiv');
  bottomDiv.parent(footer);
  let logoBelow = createImg('images/aRuptchaSmall.png', 'logo of a nuisance');
  logoBelow.parent(bottomDiv);

  let verifyButton = createButton('VERIFY');
  verifyButton.style('float', 'right');
  verifyButton.style('margin-top', '30px');
  verifyButton.style('margin-right', '10px');
  verifyButton.style('font-size', '16px');
  verifyButton.style('width', '100px');
  verifyButton.style('height', '40px');
  verifyButton.style('font-family', 'Roboto');
  verifyButton.parent('bottomDiv');
  verifyButton.style('background-color', '#4a90e2');
  verifyButton.style('color', '#ffffff');
  verifyButton.style('border', 'none');
  verifyButton.mousePressed(clearTheGlens);
} //end of the glens as we know it

//------------------//
//Musical Interlude//
//----------------//
function musicControls() {
  //These are the two buttons at the bottom for controlling the music.
  //First, I make a div to hold them underneath everything else.
  let audioDiv = createDiv(); //This is because Chrome won't let you autoplay music. Vote Firefox.
  audioDiv.id = ('hereBeYeButtons');
  audioDiv.style('padding-top', '20px');
  audioDiv.style('display', 'grid');
  audioDiv.style('align-content', 'center');
  audioDiv.parent('buttonControls'); //puts the buttons under the main content

  //Then I make the buttons.
  //Play.
  let musicButton = createButton('Click to pump up the jamz!');
  musicButton.mousePressed(playTheme);
  //Shout-out to Wahiba for showing me how to style buttons with her third assignment.
  //Default HTML buttons are totally nowhere.
  musicButton.style('background-color', '#00FF00');
  musicButton.style('color', '#000000');
  musicButton.style('border', 'none');
  musicButton.style('padding', '15px');
  musicButton.style('margin-left', '10px');
  musicButton.style('margin-right', '10px');
  musicButton.style('text-decoration', 'none');
  musicButton.style('display', 'inline-block');
  musicButton.style('font-size', '16px');
  musicButton.style('border-radius', '10px');
  musicButton.parent('buttonControls');
  musicButton.id('themeSong');

  //Pause.
  //By which I mean pause the music, but you should also remember to take breaks.
  let pauseButton = createButton('Click to pump down the jamz.');
  pauseButton.id('pauseButton');
  pauseButton.style('background-color', '#FF0000');
  pauseButton.style('color', '#ffffff');
  pauseButton.style('border', 'none');
  pauseButton.style('padding', '15px');
  pauseButton.style('margin-left', '10px');
  pauseButton.style('margin-right', '10px');
  pauseButton.style('text-decoration', 'none');
  pauseButton.style('display', 'inline-block');
  pauseButton.style('font-size', '16px');
  pauseButton.style('border-radius', '10px');
  pauseButton.mousePressed(pauseTheme);
  pauseButton.parent('buttonControls');

  // Start the audio context on a click/touch event
  userStartAudio().then(function() {
    audioDiv.remove(); //This still doesn't remove the div. What gives? I shouldn't complain, because I want it there.
  });
} //End of musicControls

//+++++++++++++++++++/
//DANCE TO THE MUSIC
//++++++++++++++++++/

function playTheme() { //I got this from a royalty-free music site, but my wife informs me this is just the 8-bit version of a Vampire Weekend song.
  userStartAudio(); //How does she know Vampire Weekend songs? She won't tell me.
  //These lines grant permission from the Google gods to allow the jam to be pumped up. Mischief managed.
  if (theme.isPlaying()) {
    theme.stop();
  } else {
    theme.play(); //I credited how I learned about this in the last assignment, I made a note to mark it again here.
    //This may or may not actually happen.
  }
}

function pauseTheme() { //Does what it says on the tin.
  theme.pause();
}

//+++++++++++++++++++++++++++//
//TIME TO CLEAN UP THIS TOWN//
//++++++++++++++++++++++++++//

//Functions to clear the present array and call the next one.
function clearTheCrossWalks() {
  crosswalkHeadingDiv.remove();
  bottomDiv.remove();

  //reset x/y - courtesy of Alex, slayer of bugs.
  x = 0; //I don't know how he figured out this was causing the next array to not load.
  y = 0; //But he did, and he rules.

  captchaDisplayHydrants();

}

function clearTheHydrants() { //Out, ye hydrants.
  hydrantHeadingDiv.remove();
  bottomDiv.remove();
  //reset x/y
  x = 0;
  y = 0;

  captchaDisplayMotorcycles();

}

function clearTheMotorcycles() { //That's about enough of this.
  motorcycleHeadingDiv.remove();
  bottomDiv.remove();
  //reset x/y
  x = 0;
  y = 0;

  captchaDisplayBuses();

}

function clearTheBuses() { //That's about enough of this.
  busHeadingDiv.remove();
  bottomDiv.remove();
  //reset x/y
  x = 0;
  y = 0;

  captchaDisplayTrafficLights();

}

function clearTheTrafficLights() { //No one stops, anyway.
  trafficHeadingDiv.remove();
  bottomDiv.remove();
  //reset x/y
  x = 0;
  y = 0;

  captchaDisplayMegafauna();

}

function clearTheMegafauna() { //Stupid trophy hunters.
  megafaunaHeadingDiv.remove();
  bottomDiv.remove();
  //reset x/y
  x = 0;
  y = 0;

  captchaDisplayDaBeetus();

}

function clearTheBeetus() { //Diabetes is no joke. Just make sure you pronounce it right.
  diabeetusHeadingDiv.remove();
  bottomDiv.remove();
  //reset x/y
  x = 0;
  y = 0;

  captchaDisplayTheTubbies();

}

function clearTheTubbies() { //THE TIME FOR TELETUBBIES HAS RUN OUT.
  teletubbiesHeadingDiv.remove();
  bottomDiv.remove();
  //reset x/y
  x = 0;
  y = 0;

  captchaDisplayGlen();

}

function clearTheGlens() { //au revoir, sweet Glen.
  glenHeadingGlenDiv.remove();
  bottomDiv.remove();
  captchaPrompt.remove();
  pic.length = 0;
  //reset x/y
  x = 0;
  y = 0;

  gameOver();
}

function gameOver() {
  theCanvas.remove();
  buttonControls.remove();

  //Now for the last thing they ever see . . . in the game.
  let gameOverHeaderDiv = createDiv(); //Back where we started, sort of.
  gameOverHeaderDiv.id('gameOverHeader');
  gameOverHeaderDiv.parent('header');
  gameOverHeaderDiv.html('CAPTURE THE M A G I C');
  gameOverHeaderDiv.style('height', '150px');
  gameOverHeaderDiv.style('text-align', 'center');
  gameOverHeaderDiv.style('border-radius', '15px');
  gameOverHeaderDiv.style('border-color', 'black');
  gameOverHeaderDiv.style('border-width', 'thick');
  gameOverHeaderDiv.style('border-style', 'solid');
  gameOverHeaderDiv.style('font-size', '65px');
  gameOverHeaderDiv.style('line-height', '70px');
  gameOverHeaderDiv.style('padding-top', '10px');
  gameOverHeaderDiv.style('font-family', 'Bungee Shade');
  gameOverHeaderDiv.style('color', '#000000');
  gameOverHeaderDiv.style('box-shadow', '5px 10px 10px black');
  gameOverHeaderDiv.style('background-color', '#ffffff');


  let gameOverDiv = createDiv();
  gameOverDiv.id('gameOver');
  gameOverDiv.parent('gameContainer');
  gameOverDiv.html('GAME OVER');
  gameOverDiv.style('text-align', 'center');

  let gameOverGlenImg = createImg('images/glen/glenMusk.png', 'glen musk says game over');
  gameOverGlenImg.id('goodbyeFromGlen');
  gameOverGlenImg.parent('gameOver');

  let playAgainButton = createButton('WANT TO TRY AGAIN?');
  playAgainButton.mousePressed(adios);
  playAgainButton.style('background-color', '#A21A2D');
  playAgainButton.style('color', '#FFFFFF');
  playAgainButton.style('padding', '15px');
  playAgainButton.style('margin-top', '25px');
  playAgainButton.style('margin-left', 'auto');
  playAgainButton.style('margin-right', 'auto');
  playAgainButton.style('text-decoration', 'none');
  playAgainButton.style('display', 'grid');
  playAgainButton.style('font-size', '16px');
  playAgainButton.style('border-radius', '10px');
  playAgainButton.style('border-width', 'medium');
  playAgainButton.style('border-color', '#ffffff');
  playAgainButton.parent('footer');
  playAgainButton.id('playAgain');
}

function adios() { //Come on, it's my last hurrah!
  playAgain.remove();
  goodbyeFromGlen.remove();
  gameOverHeader.remove();

  let thatIsItDiv = createDiv(); //Back where we started, sort of.
  thatIsItDiv.id('thatIsIt');
  thatIsItDiv.parent('header');
  thatIsItDiv.html('BEGONE, ROBOT!');
  thatIsItDiv.style('height', '150px');
  thatIsItDiv.style('text-align', 'center');
  thatIsItDiv.style('border-radius', '15px');
  thatIsItDiv.style('border-color', 'black');
  thatIsItDiv.style('border-width', 'thick');
  thatIsItDiv.style('border-style', 'solid');
  thatIsItDiv.style('font-size', '65px');
  thatIsItDiv.style('line-height', '70px');
  thatIsItDiv.style('padding-top', '10px');
  thatIsItDiv.style('font-family', 'Bungee Shade');
  thatIsItDiv.style('color', '#000000');
  thatIsItDiv.style('box-shadow', '5px 10px 10px black');
  thatIsItDiv.style('background-color', '#ffffff');


  ele.parent('gameContainer'); //Trying to hold everything together. Just like in real life.
  ele.show(); //Reveals the video. It's showtime!
  ele.size(500, 300); //Scales video so it's not enormous. Sensible bites.
  // ele.style('margin-top','100px');//Adds some room at the top. "
  ele.style('border-style', 'dotted');
  ele.style('border-radius', '20px');
  ele.style('border-color', 'white');
  ele.style('border-width', 'thick');
  ele.style('background-color', '#000000');
  ele.style('margin-left', 'auto');
  ele.style('margin-right', 'auto');
  ele.play(); //plays the video, obvs.
  
  let noWayDiv = createDiv(); //Moving the game title/logo to the bottom during this transitional screen. BRANDING!
  noWayDiv.id('noWay');
  noWayDiv.parent('footer');
  noWayDiv.html('NOT A CHANCE');
  noWayDiv.style('text-align', 'center');
  noWayDiv.style('border-radius', '10px');
  noWayDiv.style('border-color', 'black');
  noWayDiv.style('border-width', 'thick');
  noWayDiv.style('border-style', 'solid');
  noWayDiv.style('font-family', 'Bungee Shade');
  noWayDiv.style('text-shadow', '2px 2px 4px #ffffff');
}
