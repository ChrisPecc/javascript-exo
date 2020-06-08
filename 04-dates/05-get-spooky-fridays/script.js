/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function() {
        var selectedyear = document.getElementById("year").value;
        
        for (month=0; month<=11; month++) {
            var date = new Date(selectedyear, month, 13);
            if(date.getDay()==5){
                alert(date.toLocaleString('en-us', {  month: 'long' }));
            }
        }
    });
})();
