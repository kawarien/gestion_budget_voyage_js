export function func_travelers(main, travelersList) {

    const ul = document.createElement("ul");
  
    for (const travelers of travelersList) {
      const li = document.createElement("li");
      const content = document.createTextNode(travelers);
      li.appendChild(content);
      ul.appendChild(li);
    }

    main.appendChild(ul);
  }