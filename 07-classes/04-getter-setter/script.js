/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    class people {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get fullname() {
            return `${this.firstname} ${this.lastname}`;
        }

        set fullname(value) {
            [this.firstname, this.lastname] = value.split(" ");
        }

    }


    document.getElementById("run").addEventListener("click", function() {

        var person1 = new people("Bob", "Dylan");

        console.log(person1.fullname);

        person1.fullname = "Jimmy Page";

        console.log(person1);
    });
})();
