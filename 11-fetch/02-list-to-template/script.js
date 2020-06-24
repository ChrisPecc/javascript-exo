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
        .then(xmen => original5 = Array.from(xmen))
        .then(
            
            function putxmen(){
                var template, item, a;
                template = document.getElementById("tpl-hero");
                item = template.content.querySelector("li");
                for (i=0; i < original5.length; i++) {
                    console.log(original5[i])
                    a = document.importNode(item, true);
                    a.querySelector("strong").textContent += original5[i].name;
                    a.querySelector("em").textContent += original5[i].alterEgo;
                    a.querySelector("p").textContent += original5[i].abilities;

                    document.getElementById("target").appendChild(a);
                }
                
            }
        )
        
        


    });
})();
