/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/

//KLAR
let blue = false;

function taskOne() {
const box = document.getElementById("answer-one");

if (blue  == true){
  blue = false
  box.style.backgroundColor=" white"

} else {
  blue = true
  box.style.backgroundColor=" blue"
}

console.log(blue)

/*
if (blue == false){
  box.style.backgroundColor=" white"
} else {
  box.style.backgroundColor=" blue"
}

console.log(blue)

/*
Samma lösning utan variabeln "blue" 

if (box.style.backgroundColor === "white") {
  box.style.backgroundColor="blue";
 } else {
  box.style.backgroundColor="white";
 }
 */
}

/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/

//KLAR
const numbers = [234, 986, 784];

function taskTwo() {
  let newNumber = (Math.round(Math.random() * 1000))
  numbers.push(newNumber)
  console.log(numbers + ","+ newNumber + ",")
  document.getElementById("answer-two").innerHTML = numbers ;
}

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/

//KLAR
function taskThree() {

  
  let n = new Date().getDay();
 // let d = d.getDay();     om let n = d är = new Date

    console.log(n)

  if (n == 0 || n == 6 ){
    alert("Woohooo it's weekend")
  } else {
    alert("SO FEW SATURDAYS AND SUNDAYS FML")
  }

  console.log(("Söndag = 0, Måndag = 1 oso vidare. idag har vi siffran: ") + n)

}

/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
*/

//KLAR

function multiplier(valueOne, valueTwo) {

  valueOne = 5 ;
  valueTwo = 4 ; 

  if (typeof valueOne == "number" && typeof valueTwo == "number") {
    x = valueOne * valueTwo
    alert(x)
  } else {
    alert("jag kan inte multiplisera... FML")
  }

// Ville du att jag skulle använda funktioen taskFour till detta? 
}

function taskFour() {
  multiplier();
}

/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/

//KLAR

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

function taskFive() {

for (i = 0; i < fruits.length; i++){
  if (fruits[i] === "apelsin" || fruits[i] === "päron"){
    eatable.push(fruits[i])
  } else {
    trash.push(fruits[i])
  }
}

document.querySelector("#answer-five").innerHTML = "<strong>ätligt: </strong>" + eatable + "<br> <strong>skräp: </strong>" + trash

  //Nedanför har vi min första lösning, bad-practice. 

  // Ser ut som att detta INTE är lösningen som är rätt
  /*Skulle häldre vilja ha en lösning som innebär att allt ska flyttar över
  till eateble OM INTE päron och apelsin finns, då ska päron och apelsin 
  flyttas till trash först, sedan ska rästen skickas över
  */
 /*
  if (fruits.includes("päron" || "apelsin")){
    trash.push("päron", "apelsin")
  }
  if (fruits.includes("banan" || "äpple" || "citron" )){
    eatable.push("banan", "äpple", "citron")
  }

  //Denna delen känns bättre. Känns som att jag hittat en bra lösning,
  //Vet inte om den är bra dock.

  let div = document.getElementById("answer-five")
  let node = document.createElement("p")

  let ätligt = document.createTextNode("Ätligt: " + eatable + "\n")
  node.appendChild(ätligt)
  div.appendChild(node)

  let skräp = document.createTextNode("Skräp: " + trash)
  node.appendChild(skräp)
  div.appendChild(node)
*/
  console.log(trash)
  console.log(eatable)

}


/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,

du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/


//EJ KLAR - Hjälp

const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];

function taskSix() {

  for (i=0; i < persons.length ;i++){

if (persons[i].age >= 30){
    overThirty.push(persons[i].name)
  } else {
    underThirty.push(persons[i].name)
  } 

if (persons[i].married===true){
  married.push(persons[i].name)
} else {
  notMarried.push(persons[i].name)
}
}

//Hjälp
console.log(overThirty.name)

document.querySelector("#answer-six").innerHTML = 
"<strong>Över 30: </strong> " + overThirty + 
"<br><strong>Under 30: </strong>" + underThirty +
"<br><strong>Gift: </strong>" + married +
"<br><strong>Ej Gift: </strong>" + notMarried ;



}
/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

// KLAR

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

  let hereYouGo = ""

function taskSeven() {
  for (let x of addMeSomeLineBreaks){
    if (x === ",") {
      hereYouGo += ", <br>"
    } else {
      hereYouGo += x ; 
    }
  }

document.querySelector("#answer-seven").style.fontSize = ("10px")
document.querySelector("#answer-seven").innerHTML = hereYouGo  
}

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/

// KLAR

const element8 = document.getElementById("card-eight")

function taskEight() {

  element8.style.opacity="0";

if (element8.style.opacity="0") {
  setTimeout(function() {
    element8.style.opacity="1"
  }, 3000);

}
}

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

//KLAR

function taskNine() {


  let today = new Date()
  let time = today.getHours();

  let x, i;

if (time >= 17 ){
  x = document.querySelectorAll(".answer-container")
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor="red";
  }
} else {
  x = document.querySelectorAll(".answer-container")
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor="blue";
  }
}

}

/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/

// KLAR

function calculator(valueOne, valueTwo, operator) {
valueOne = 5
valueTwo = 7
operator = "add"

switch(operator){
  case "add":
    alert(valueOne + valueTwo)
    break;
  case "subtract":
    alert(valueOne - valueTwo)
    break;
    case "devide":
    alert(valueOne / valueTwo)
    break;
    case "multiply":
    alert(valueOne * valueTwo)
    break;
    default:
      alert("Något är fel")
}

}

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  calculator();
}