/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        var input = Number(document.getElementById("number").value);
        var fact = 1;

        if(input>0){
            for(i=1; i<=input; i++){
                fact = fact*i;
            }
            alert(fact);
        }
        
        if(input==0){
            alert("1")
        }
        
        if(input<1){
            alert("Error. You can't factorialise negative numbers")
        }

    });

})();
