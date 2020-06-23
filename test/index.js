(function() {


    // création de persos temporaires comme un barbare pour test

    var player1 = {
        name : "Arthur",
        race : "elf",
        item : "sword",
        currenthealth : 100,
        maxHealth : 100,
        min : 3,
        maxDamage : 20,
        maxHeling : 30,
        damagemodif : 1,
        vampiremod : 0,

    }

    var player2 = {
        name : "Jimmy",
        race : "elf",
        item : "staff",
        currenthealth : 100,
        maxHealth : 100,
        min : 3,
        maxDamage : 20,
        maxHeling : 30,
        damagemodif : 0.8,
        vampiremod : 0,
    }


    localStorage.setItem('joueur1', JSON.stringify(player1));
    localStorage.setItem('joueur2', JSON.stringify(player2));
})();