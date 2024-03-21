//document.getElementById("people-dropdown");
let adjective1 = document.getElementById("adjective1");
let adjective2 = document.getElementById("adjective2");
let adjective3 = document.getElementById("adjective3");
let season = document.getElementById("season");
let noun1 = document.getElementById("noun1");
let food = document.getElementById("food");
let noun2 = document.getElementById("noun2");
let clothingitem = document.getElementById("clothingitem");
let adjective4 = document.getElementById("adjective4");
let body = document.getElementById("body");
let adjective5 = document.getElementById("adjective5");
let verb1 = document.getElementById("verb1");
let verb2 = document.getElementById("verb2");
let noun3 = document.getElementById("noun3");
let month = document.getElementById("month");
let year = document.getElementById("year");
let madLibTextResult = document.getElementById("madlib-text");
let generateMadLibBtn = document.getElementById("generate-madlib-btn");

let adjective1_value;
let adjective2_value;
let adjective3_value;
let season_value;
let noun1_value;
let food_value;
let noun2_value;
let clothingitem_value;
let adjective4_value;
let body_value;
let adjective5_value;
let verb1_value;
let verb2_value;
let noun3_value;
let month_value;
let year_value;


adjective1.addEventListener("change", (e) => (adjective1 = e.target.value));
adjective2.addEventListener("change", (e) => (adjective2 = e.target.value));
adjective3.addEventListener("change", (e) => (adjective3 = e.target.value));
season.addEventListener("change", (e) => (season = e.target.value));
noun1.addEventListener("change", (e) => (noun1 = e.target.value));
food.addEventListener("change", (e) => (food = e.target.value));
noun2.addEventListener("change", (e) => (noun2 = e.target.value));
clothingitem.addEventListener("change", (e) => (clothingitem = e.target.value));
adjective4.addEventListener("change", (e) => (adjective4 = e.target.value));
body.addEventListener("change", (e) => (body = e.target.value));
adjective5.addEventListener("change", (e) => (adjective5 = e.target.value));
verb1.addEventListener("change", (e) => (verb1 = e.target.value));
verb2.addEventListener("change", (e) => (verb2 = e.target.value));
noun3.addEventListener("change", (e) => (noun3 = e.target.value));
month.addEventListener("change", (e) => (month = e.target.value));
year.addEventListener("change", (e) => (year = e.target.value));

//  const resetValues = () => {
//   adjective1.selectedIndex = 0;
//   adjective2.selectedIndex = 0;
//   adjective3.selectedIndex = 0;
//   season.selectedIndex = 0;
//   noun1.selectedIndex = 0;
//   food.selectedIndex = 0;
//   noun2.selectedIndex = 0;
//   clothingitem.selectedIndex = 0;
//   adjective4.selectedIndex = 0;
//   body.selectedIndex = 0;
//   adjective5.selectedIndex = 0;
//   verb1.selectedIndex = 0;
//   verb2.selectedIndex = 0;
//   noun3.selectedIndex = 0;
//   month.selectedIndex = 0;
//   year.selectedIndex = 0;
//   adjective1  = undefined;
// adjective2  = undefined;
// adjective3  = undefined;
// season  = undefined;
// noun1  = undefined;
// food  = undefined;
// noun2  = undefined;
// clothingitem  = undefined;
// adjective4  = undefined;
// body  = undefined;
// adjective5  = undefined;
// verb1  = undefined;
// verb2  = undefined;
// noun3  = undefined;
// month  = undefined;
// year = undefined;
// };


 generateMadLibBtn.addEventListener("click", () => {
  const madLibsArr = [
    `Hot chocolate is a ${adjective1} and ${adjective2} treat. You could never go
    ${adjective3} with it during the ${season}. Ever since I was ${noun1}, I would buy hot cocoa mix and 
     get myself extra ${food} to add to the delicious drink. Do you ${noun2} hot chocolate? I once spilled hot chocolate down
     my ${clothingitem} because it ${adjective4} my ${body} and I got so ${adjective5} that it spilled. Could you believe how hot it was?
     What about you? Have you had this happen? Anyways, im going to ${verb1} my hot chocolate and go to ${verb2} on my ${noun3}
     until ${month} of ${year}.`,
  ];
const randomIndex = Math.floor(Math.random() * madLibsArr.length);

  if (
   [adjective1, adjective2, adjective3, season, noun1, food, noun2, clothingitem, adjective4, body, adjective5, verb1, verb2, noun3, month, year].some(
       (userSelection) => userSelection === undefined
     )
   ) {
     alert("Please choose a selection from each of the dropdowns");
     return;
   }
    madLibTextResult.innerText = madLibsArr[randomIndex];
   //resetValues();
 });