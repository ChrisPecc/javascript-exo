/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        fetch("http://localhost:3000/heroes")
        .then(response => response.json())
        .then(
            xmen => {
                let name = document.getElementById("hero-name").value;
                let alterego = document.getElementById("hero-alter-ego").value;
                let inputpowers = document.getElementById("hero-powers").value; 
                let powers = inputpowers.split(", ");

                let newxmen = {
                id : xmen.length +1,
                name : name,
                alterEgo : alterego,
                abilities : powers,
                }

                console.log(newxmen)

                xmen.push(newxmen);

                console.table (xmen)


            }
            

        )
        
    });
})();
