/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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
                console.table(xmen);
                let template, item, a;
                template = document.getElementById("tpl-hero");
                item = template.content.querySelector("li");
                
                let idinput = document.getElementById("hero-id").value;
                

                let research = xmen.find(element => element.id == idinput);
                let i = xmen.indexOf(research);
                
                
                a = document.importNode(item, true);

                if (i >= xmen.length){
                    a.querySelector("strong").textContent += "not that many X-men in the list";
                    a.querySelector("em").textContent += "undefined"
                    a.querySelector("p").textContent += "undefined"

                    document.getElementById("target").appendChild(a);
                }

                else {
                    console.log(xmen[i])
                    
                    a.querySelector("strong").textContent += xmen[i].name;
                    a.querySelector("em").textContent += xmen[i].alterEgo;
                    a.querySelector("p").textContent += xmen[i].abilities.join(", ");

                    document.getElementById("target").appendChild(a);
                }
                
                
            }
        )
        
        


    });
})();
