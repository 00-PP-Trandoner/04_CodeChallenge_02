/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const firstName = prompt("bitte Namen eingeben: ");
const age = parseInt(prompt("Bitte alter eingeben: "));

let drink;

if (!isNaN(age) && age >= 0) {
    if (age <= 5) {
        drink = "Milch"
;
    } else if (age <= 12) {
        drink = "Saft";
    } else if (age <= 17) {
        drink = "Cola";
    } else {
        drink = "Wein";
    }
    console.log(`${firstName} trinkt ${drink}`);
}   else {
    console.log ("Tee");
}