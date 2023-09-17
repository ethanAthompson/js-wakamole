// Declared Variables (let)
let mole_speed,
  full_sec,
  half_sec,
  speed,
  image0,
  image1,
  hits,
  miss,
  game_timer,
  moleId,
  doc_secId,
  doc_btnId,
  doc_hitsId,
  doc_missId;

// Image Variables

// img/0.jpg is a relative path
// /img/0.jpg is a absolute path
image0 = "img/0.jpg";
image1 = "img/1.jpg";

// Game Variables
hits = 0;
miss = 0;
moleId = Math.floor(Math.random() * 8);

// Timer Variables
half_sec = 500;
one_sec = 1000;

// ID Shorteners Variables
function not_global() {
  // define the variables here, to be used in other functions

  /*
    solves the problem where the variables are null
    because the function with ids doesn't get executed until they are called
  */

  // id for seconds
  doc_secId = document.getElementById("seconds");

  // id for modes
  doc_btnId = document.getElementById("btn");
  doc_hardbtn = document.getElementById("hardbtn");
  doc_insanebtn = document.getElementById("insanebtn");

  // id for hits and miss
  doc_hitsId = document.getElementById("hits");
  doc_missId = document.getElementById("miss");
}

// the count down timer for the page
function game_timer_count_down() {
  // puts ids in start of function
  not_global();

  // formats game timer
  doc_secId.innerHTML = `TIME 0:${game_timer}`;

  // if no seconds are left then stop the timer
  if (game_timer == 0) {
    // formats Game over next to game_timer, game_timer avoids displaying counting in the negative
    doc_secId.innerHTML = `TIME 0:0 GAME OVER`;

    // change game timer format using .style.color to change color to black
    doc_secId.style.color = `black`;

    // the game mode id buttons becomes undisabled
    doc_btnId.disabled = false;
    doc_hardbtn.disabled = false;
    doc_insanebtn.disabled = false;
  }

  // keep decrementing the counter if the game_timer is not 0
  else {
    // decrements every second until timer is 0

    // decrement the timer until timer is 0
    game_timer--;

    // shows mole until timer is 0
    mole_timer();

    // allows hits when counter decrements until timer is 0
    detect_mole();

    setTimeout(game_timer_count_down, one_sec); //GAME TIMER

    // disables all the game mode buttons
    doc_btnId.disabled = true;
    doc_hardbtn.disabled = true;
    doc_insanebtn.disabled = true;
  }

  // if 20 seconds are left
  if (game_timer == 20) {
    // change timer format  using the .style.color to change color to orange
    doc_secId.style.color = "orange";

    // format the timer to say warning next to the timer
    doc_secId.innerHTML = `TIME 0:${game_timer} WARNING!`;
  }

  // if 10 seconds are left
  if (game_timer == 10) {
    // change the game_timer format using .style.color to change color to red
    doc_secId.style.color = "red";

    // formats timer to say ALMOST UP next to the timer
    doc_secId.innerHTML = `TIME 0:${game_timer} ALMOST UP!`;
  }
}

// finds mole by matching images
function detect_mole(id) {
  try {
    //executes code inside

    //if the img tag has an id and similar to image 1 then return true
    recognizer_on = document.getElementById(id);

    //if the img tag has an id and similar to image 0 then return true
    recognizer_off = document.getElementById(id);

    //if image1 is clicked
    if (recognizer_on.src.match(image1)) {
      //only compares the image and not the full path of image
      //increments the hits counter
      hits++;

      //formats the hits that are incremented
      doc_hitsId.innerHTML = ` Hits: ${hits}`;
    }
  } catch (err) {
    //catch error given
  }
  try {
    //executes code inside

    //if image0 is clicked
    if (recognizer_off.src.match(image0)) {
      //increments the miss counter
      miss++;

      //formats the miss that are incremented
      doc_missId.innerHTML = `  Miss: ${miss}`;
    }
  } catch (err) {
    //catch error given
  }
}

// shows mole and hides mole
function mole_timer() {
  // regenerates a random number
  let moleId = Math.floor(Math.random() * 8);

  // hides the mole by assigning the id to image0
  function hide_game_timer() {
    // hides the mole by setting its src to "img/0.jpg"
    document.getElementById(moleId).src = image0;
  }
  // set src to the mole image ("img/1.jpg")
  document.getElementById(moleId).src = image1;

  // activate the hide_game_timer function and change image1 to image0 every second
  setTimeout(hide_game_timer, mole_speed); // MOLE TIMER
}

/* Game modes Starts Here (only the speed is changed*/

// easy mode
function main() {
  // just changes the speed of timer to 1000

  // for resuse of ids
  not_global();

  // when the button is clicked, initialize the variables,
  mole_speed = one_sec;
  hits = 0;
  miss = 0;

  // set the game timer to 30 seconds
  game_timer = 30;

  // set hit and miss formats to an empty string
  doc_hitsId.innerHTML = ``;
  doc_missId.innerHTML = ``;

  // log the mode and speed
  console.log(`EASY MODE:Speed ${mole_speed}`);

  // activate the timer once button is clicked
  game_timer_count_down();
}

// hard mode
function hard_mode() {
  // just changes speed of timer 500

  // gives ids here
  not_global();

  // set mole speed to 250
  mole_speed = one_sec / 2;

  // set hits and miss to 0
  hits = 0;
  miss = 0;

  // set the game timer to 20 seconds
  game_timer = 20;

  // sets hit and miss id to an empty string
  doc_hitsId.innerHTML = ``;
  doc_missId.innerHTML = ``;

  // contains the timers, other features
  game_timer_count_down();

  // logs mode and speed of mole
  console.log(`HARD MODE:Speed ${mole_speed}`);
}

// insane mode
function insane_mode() {
  // just changes speed of timer 250
  not_global();

  // sets mole speed to half of a half second
  mole_speed = half_sec / 2;

  // sets hits and miss to 0
  hits = 0;
  miss = 0;

  // sets game timer to 10 seconds
  game_timer = 10;

  // sets the id of hit and miss to an empty string
  doc_hitsId.innerHTML = ``;
  doc_missId.innerHTML = ``;

  // contains the timers, other functions
  game_timer_count_down();

  // logs the mode and the speed of mole
  console.log(`INSANE MODE:Speed ${mole_speed}`);
}
