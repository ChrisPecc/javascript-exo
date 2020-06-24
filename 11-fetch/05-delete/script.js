/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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
                
                let idinput = document.getElementById("hero-id").value;
                console.log(idinput)

                let i = idinput-1;

                if (i >= xmen.length){
                    console.log("Not that much X-Men in the list")
                }

                else {
                    xmen.splice(i,1);
                    for (j=i; j< xmen.length; j++){
                        if (xmen[j].id - j !==1){
                            xmen[j].id -= 1;
                        }
                    }
                    console.table (xmen);

                }    

            }
            
        )
        
    });
})();
