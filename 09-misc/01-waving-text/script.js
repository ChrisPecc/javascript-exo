/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var text= document.getElementById("target").innerHTML;
    var result ="";

    for (i=0; i < text.length; i++) {
        var letter = text.charAt(i);
        
        if(i%8==0){
            var newletter = letter.fontsize(3);
            result= result + newletter;   
        }

        if(i%8==7 || i%8==1){
            var newletter = letter.fontsize(4);
            result= result + newletter;
        }

        if(i%8==2 || i%8==6){
            var newletter = letter.fontsize(5);
            result= result + newletter;
        }

        if(i%8==3 || i%8==5){
            var newletter = letter.fontsize(6);
            result= result + newletter;
        }
        
        if(i%8==4){
            var newletter = letter.fontsize(7);
            result= result + newletter;
        }
        
    }
    document.getElementById("target").innerHTML = result;

})();
