function madlibsMaker(words) {
    let readline =require("readline-sync");

    function getUserInput(input) {
        return readline.question(input)
    }

    while(true) {
        console.clear();

        let welcome = `Welcome to Madlibs where we have fun everyday in everyway!!`;

        function displayMessage(message) {
            console.log(message);
        }

        displayMessage(welcome);

        let one = getUserInput(`Please enter a word to describe your favorite stuffed animal.\n`);
        let two = getUserInput(`Please enter a word to describe your favorite food.\n`);
        let three = getUserInput(`Please enter a word for something large.\n`);
        let four = getUserInput(`Please enter a word that means good.\n`);
        let five = getUserInput(`What is something that you want to learn how to do?\n`);
        let six = getUserInput(`What is an item that can break?\n`);
        let seven = getUserInput(`What is something you do when you are bored?\n`);
        let eight = getUserInput(`What is a word to describe your favorite superhero?\n`);
        let nine = getUserInput(`Who is your favorite cartoon character?\n`);
        let ten = getUserInput(`What is one word to describe how you felt on the last day of school?\n`);
        let eleven = getUserInput(`Where is your favorite place?\n`);
        let twelve = getUserInput(`What is something that you can't live without?\n`);
        let thirteen = getUserInput(`Give a word for a personality trait.\n`);
        let fourteen = getUserInput(`What is your name or nickname?\n`);

        console.clear();

        function displayFunMessage() {
            console.log(
                `I want to tell  you how ${one} and ${two} my dad is.\n He is so strong I bet he could lift ${ifStartsWithAVowel(three)} ${three}.\n He is really ${four} at ${five}.\n I'm sure he could fix anything...even ${ifStartsWithAVowel(six)} ${six}.\n He loves to spend his time ${seven}. \n He is so ${eight} just like ${nine}. \n I feel so ${ten} to have him as my dad. He is the best dad in the whole wide ${eleven}. I love him more than ${twelve}. \n Happy Fathers day to the ${thirteen}est dad.\n By: ${fourteen}`

            )
        }

        function ifStartsWithAVowel(word) {
            let regex = /\b[aeiou]\w*/i;
            if(word === regex) {
                return "an";
            } else {
                return "a"
            }
        }

        displayFunMessage();
        quitOrReplay();

        function quitOrReplay() {
            let userChoice = getUserInput(`Would you like to do it again?`)

            if(userChoice.toLowerCase().charAt(0)  === "y") {
                displayMessage(welcome)
            } else {
                return false;
            }
        }
}
}

madlibsMaker();
