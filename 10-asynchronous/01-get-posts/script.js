/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    function handleResponse(error, array){
        if(error !== null){
            console.log("There is an error");
        }
        else {
            console.table(array);
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts(handleResponse);     
    });
})();
