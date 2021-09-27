function lifetime(age) {
    var rem = 90 - age;
    var days = rem * 365;
    var weeks = rem * 52;
    var months = rem * 12;
    console.log("You have " + days + " days, " + weeks + " weeks, " + months + " months remaining in your life");

}
lifetime(21);

function bmi(w, h) {
    var bmi = w / (h * h);
    return bmi

}

console.log("Your bmi is " + Math.round(bmi(70, 1.67)) + " kg/sqmtr");

function dice() {
    var n = Math.random();
    var k = Math.floor(n * 6) + 1;
    return k;
}
dice();

function lovescore() {
    yourName = prompt("Enter your Name");
    partnerName = prompt("Enter your Partner name");
    var n = Math.random();
    var k = Math.floor(n * 100) + 1;
    if (k < 40) {
        console.log("Your love score is " + k + ". Don't worry love is uncondtional.");
    } else if (k < 60) {
        console.log("Your love score is " + k + ". You both make a lovely pair.");
    } else if (k < 70) {
        console.log("Your love score is " + k + ". You both make a compassionate pair.");
    } else if (k < 80) {
        console.log("Your love score is " + k + ". You both make a romantic pair.");
    } else {
        console.log("Your love score is " + k + ". You both make a great pair.");
    }
}


function leapyear(n) {
    if (n % 4 === 0) {
        if (n % 100 === 0) {
            if (n % 400 === 0) {
                console.log(n + " is a leap year");
            } else {
                console.log(n + " is not a leap year");
            }

        } else {
            console.log(n + " is a leap year");
        }
    } else {
        console.log(n + " is not a leap year");
    }
}
leapyear(2000);

function party() {
    var guest = ["akash", "ram", "ntr", "rajamouli", "kirs", "alia bhatt", "olivia morris", "M.M Keeravani"];
    var guestName = prompt("Enter Your name").toLowerCase();
    if (guest.includes(guestName)) {
        return "You're welcome";
    } else {
        return "Sorry, You're not on the list. May be next time";
    }

}



output = [];
count = 1;

function fizzbuzz() {




    if ((count % 3 === 0) && (count % 5 === 0)) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");

    } else if (count % 5 === 0) {
        output.push("Buzz");

    } else {
        output.push(count);
    }


    count++;
    console.log(output);


}
fizzbuzz();

function whoPays() {
    var guest = ["akash", "ram", "ntr", "rajamouli", "kirs", "alia bhatt", "olivia morris", "M.M Keeravani"];
    var len = guest.length;
    console.log(len);
    var n = Math.random();
    var limit = Math.floor(len * n);
    console.log(limit);
    return "The lucky one who has to pay the bill is " + guest[limit].toUpperCase() + " " + limit + " !!!."

}
whoPays();

