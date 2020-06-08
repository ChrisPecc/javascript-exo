/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function() {
        var datecheck = new Date();
        var tdyear = datecheck.getFullYear();
        var tdmonth = datecheck.getMonth();
        var tdday = datecheck.getDate();

        var dobyear = Number(document.getElementById("dob-year").value);
        var dobmonth = Number(document.getElementById("dob-month").value);
        var dobday = Number(document.getElementById("dob-day").value);

        if (dobmonth - tdmonth -1 < 0 || (dobmonth - tdmonth -1 === 0 && tdday - dobday >= 0)) {
            var age = tdyear - dobyear;

            alert("You are " + age +" year old !");
        }

        else {
            var age = tdyear - dobyear -1;

            alert("You are " + age +" year old !");
        }
        
        
    });

})();
