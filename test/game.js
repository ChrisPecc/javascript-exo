


(function() {
    player1JSON = localStorage.getItem('joueur1');
    player1 = player1JSON && JSON.parse(player1JSON);

    player2JSON = localStorage.getItem('joueur2');
    player2 = player2JSON && JSON.parse(player2JSON);

    console.log(player1, player2);

})();