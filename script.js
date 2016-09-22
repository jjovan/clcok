

//this starts the timer and the function with the variales h,m,s to get hours/minutes/seconds
$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    changeFontColor(s);

    m = checkTime(m);
    s = checkTime(s);

    $("#clock").html(h + ":" + m + ":" + s);

    setTimeout(startTime, 500);
  }
//this function grabs i and returns it for all values less than 10
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

//this function changes the color with an if statement so if it is odd then it will be red if even then it will be blue
  function changeFontColor(i) {
    if (i % 2 === 1) { // odd
      $("body").css("color", "red");
    } else if (i % 2 === 0) { // even
      $("body").css("color", "blue");
    }
  }


//this function changes the background color through the current color so if it is lavender at the next time change then it will become coral and vice versa
  function changeBackgroundColor() {
    var currentBackgroundColor = $("body").css("backgroundColor");

    if (currentBackgroundColor === "rgb(255, 127, 80)") { // coral
      $("body").css("backgroundColor", "lavender");
    } else {
      $("body").css("backgroundColor", "coral");
    }

    setTimeout(changeBackgroundColor, 5000); // should be 5 minutes, but this is easier to test
  }

  var counter = 0;

//this is a font size function going from 0-3 (40px,14,16,20) 
  function changeFontSize() {
    var fontSizes = ["40px", "14px", "16px", "20px"];

    $("body").css("fontSize", fontSizes[counter]);

    counter = counter + 1;
    if (counter > 3) {
      counter = 0;
    }
    
    setTimeout(changeFontSize, 5000); // should be 1 hour, but this is easier to test
  }

  // function changeFontSizeAlternative() {
  //   var fontSizes = ["40px", "14px", "16px", "20px"];
  //   var randomNumber = Math.floor(Math.random() * 4);

  //   $("body").css("fontSize", fontSizes[randomNumber]);

  //   setTimeout(changeFontSizeAlternative, 5000); // should be 1 hour, but this is easier to test
  // }

  startTime();
  changeBackgroundColor();
  changeFontSize();
  // changeFontSizeAlternative();
});
