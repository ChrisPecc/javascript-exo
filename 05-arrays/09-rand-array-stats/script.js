/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function() {

        var randoms = Array(10);
        for (i=0; i<randoms.length; i++){
            randoms[i]=Math.round(Math.random()*100);
            document.getElementById(`n-${i + 1}`).innerHTML=randoms[i];
        }


        var mini = Math.min(...randoms);
        document.getElementById("min").innerHTML=mini;
        
        var maxi = Math.max(...randoms);
        document.getElementById("max").innerHTML=maxi;

        var sum = 0;
        for(i=0; i<randoms.length;i++){
            sum= sum+randoms[i]; 
        }
        document.getElementById("sum").innerHTML=sum;

        var average = sum/randoms.length;
        document.getElementById("average").innerHTML=average;

    });

})();
