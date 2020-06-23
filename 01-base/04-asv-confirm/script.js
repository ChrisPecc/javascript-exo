/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    do {
        var age = prompt("How old are you?")
        var gender = prompt("Are you male or female?")
        var town = prompt ("In which town do you live?")
        var correct = prompt("Your age is "+ age +".\nYou are a " + gender +".\nYou live in " + town +". \nIs that correct? (answer by yes or no)")
    }
    while (correct !== "yes")
    


})();
