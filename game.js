
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var images = ["./images/Crystal-Blue.png", "./images/Crystal-Purple.png", "./images/Crystal-Red.png", "./images/Crystal-Yellow.png"];


var resetAndStart = function () { 

    $(".crystals").empty(); //empty a crystal

    random_result = Math.floor(Math.random() * 69) + 30; // generating new result thing

    $("#result").html('Random result: ' + random_result); //adding to the dom

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1; // creating random number in crystal
       
        var crystal = $("<div>"); //creating 4 crystals
            crystal.attr("class", 'crystal');
            crystal.attr("data-random", random);
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            })
        $(".crystals").append(crystal);
    }
    $("#previous").html("Your Score is :" + previous);
}

resetAndStart(); //run function
 

// event delegation, without it click function won't listen to new clicks

$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));

previous += num;

    $("#previous").html("Your Score is :" + previous);

console.log(previous);

if(previous > random_result) {
    lost++;

    $("#lost").html("You Lost :" + lost);

    previous = 0;



    resetAndStart();
}
else if (previous === random_result) {
   win++;
    
   $("#win").html("You Win :" + win);

    previous = 0;

    

   resetAndStart();
}


  
});
// a game with 4 crystals and random result
// every crystal needs to have a random number between 1-12
// a new random number should be generate every single time we win or lost
// to those 4 crystals
// when clicking any crystal it should be adding with the previous result
//until it equals the total score
// if it is not equal that we start over 
// if it is equal, then we increment a win counter
