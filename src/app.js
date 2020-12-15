import { func_travelers } from "./core/utils"; 

import * as Traveler from "./core/travelers"; 

const main = document.getElementById("main");

document.addEventListener("DOMContentLoaded", (event) => {
  let {
    travelers,
  } = Traveler;

  const travelersList = travelers;



  func_travelers(main, travelersList);


});
