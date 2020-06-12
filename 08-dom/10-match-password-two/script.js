/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function() {
        var passone = document.getElementById("pass-one").value;
        var passtwo = document.getElementById("pass-two").value;

        if(passone === passtwo){
            alert("You may enter");
        }

        else {
            // document.getElementById("pass-one").style.borderColor="#FF0000";
            document.getElementById("pass-one").setAttribute("class", "error");
            // document.getElementById("pass-two").style.borderColor="#FF0000";
            document.getElementById("pass-two").setAttribute("class", "error");

        }

    });

})();
