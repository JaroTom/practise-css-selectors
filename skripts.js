console.log('Je to všechno v pohodě')

let barvičky = ['modrá', 'žlutá', 'fialová', 'tyrkysová']

console.log(barvičky)

let příspěvek = {
  titulek: "Tohle je bombová zpráva.",
  početLajků: 634361,
  komentáře: ['Ty vole, tak to čumim',
  'To si snad děláte prdel',
  'Prosím komentující',
  'aby se zde nevyjadřovali vulgárně',
  'Četli jste vůbec ten článek?!']
}

console.log(příspěvek)

let věk = 55;
if (věk > 21) {
console.log('Už můžete pít alkohol')}

let a = 30;
if (a <= 30) {
    console.log('Ještě seš mlaedej kluk')
} else {
    console.log('Už ti táhne na čtyřicet')
}

for (let i = 0; i < 10; i++)
    {console.log(i)};

let Barvastuhy = barvičky => {
    console.log('Tvoje barva stuhy bude ' + barvičky);
     if (barvičky === 'tyrkysová') {
        console.log('takže pěkně hnusná');
    }
}
Barvastuhy('modrá');
Barvastuhy('žlutá');
Barvastuhy('fialová');
Barvastuhy('tyrkysová');

// Use your previous for loops and create a function which print the first N numbers.

// printNumbersTill(20); // should print 1, 1, 2, ...., 20
for (let b = 1; b <= 20; b++)
{console.log(b)}

// printNumbersTill(15); // should print 1, 1, 2, ...., 15
for (let b = 1; b <= 15; b++)
{console.log(b)}

// Create a function which gets a name as parameter and then returns a greeting to the specified person.
let jméno = 'Peter'
let přání = jméno => {console.log('Veselé velikonoce '+jméno)}
přání('Peter')

// Create a function which gets an array as parameter and prints each value from it.
let hodnoty = [84, 53, 94, 21, 67]
for (let i = 0; i < hodnoty.length; i++)
{console.log(hodnoty[i])}

// Change your previous printValues function to use forEach loop.
hodnoty.forEach((hodnoty) => {console.log(hodnoty)})



