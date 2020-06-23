/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        async function asyncfunc() {
            let array = await window.lib.getPosts();
            
            async function asyncfunc2(){
                await array.forEach(element => {
                    let commentaires = window.lib.getComments(element.id);
                    element.comments = commentaires;
                })
                

                console.log(array);
            }

            asyncfunc2();
        }
        
        asyncfunc();

    });
})();
