/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var table = document.createElement("table");
    var target = document.getElementById("target");
    target.appendChild(table);

    for(i=1; i<11; i++){
        var row = table.insertRow();
        for(j=1; j<11; j++){
            var cell = row.insertCell();
            cell.innerHTML = i * j;
        }
        
    }


})();
