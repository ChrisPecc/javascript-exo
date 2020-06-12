/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("keyup", function() {
        
        var chara = document.getElementById("pass-one").value;
        var password =/^(?=(.*[0-9]){2,})/

        if(chara.length >=8 && chara.match(password)){
            document.getElementById("validity").innerHTML = "ok"
        }

        else{
            document.getElementById("validity").innerHTML = "Not ok"
        }
        
    

    });

})();
