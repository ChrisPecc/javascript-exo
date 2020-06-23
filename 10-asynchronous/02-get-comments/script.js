/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
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
            
            
            array.forEach(element => {
                window.lib.getComments(element.id, (error, commentaires) => {
                    if (error !== null){
                        console.log("it's an error");

                    }

                    else {
                        element.comments = commentaires;
    
                    }
                    

                })


            });

            

            
        }

        console.log(array);


        
    }

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts(handleResponse);  
    });
})();


