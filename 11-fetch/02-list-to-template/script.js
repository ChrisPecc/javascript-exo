/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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
        .then(xmen => {
                var template, item, a;
                template = document.getElementById("tpl-hero");
                item = template.content.querySelector("li");
                for (i=0; i < xmen.length; i++) {
                    console.log(xmen[i])
                    a = document.importNode(item, true);

                    a.querySelector("strong").textContent += xmen[i].name;
                    a.querySelector("em").textContent += xmen[i].alterEgo;
                    a.querySelector("p").textContent += xmen[i].abilities.join(", ");

                    document.getElementById("target").appendChild(a);
                }
                
            }
        )
        
        


    });
})();
