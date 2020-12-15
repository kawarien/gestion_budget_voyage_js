export function func_travelers(main, travelersList) {

    const ul = document.createElement("ul");



    const elInput = document.querySelector('.phrase');
    const elSubmit = document.querySelector('.submitPhrase');
    const message = document.querySelector('.message');
    const numberWord = document.querySelector('.numberWord');
    const result = document.querySelector('.result');
    
  
    for (const travelers of travelersList) {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.type = "text";
      const label = document.createElement("label");
      label.innerHTML = "Add spent : ";
      const total = document.createElement('label');
      total.innerHTML = " Total : ";
      const br = document.createElement("br");
      const addSpent = document.createElement("button");
      const buttonText = document.createTextNode("Add");
      addSpent.appendChild(buttonText);
      const content = document.createTextNode(travelers);
      li.appendChild(content);
      ul.appendChild(li);
      ul.appendChild(label);
      ul.appendChild(input);
      ul.appendChild(total);
      ul.appendChild(br);
      ul.appendChild(addSpent);

      const state = {
        value: ''
    };
    
    input.addEventListener('input', (e) => {
    
        const { value } = e.target;
        state.value = value;

        const nunChar = value
            .split(' ')
            .filter( w => w !== '')
            .map(w => w.length)
            .join(' ');

            total.innerHTML = `${nunChar}`;
            total.innerHTML = '';
            total.innerHTML = '';
    });


          // Nombre de mot(s)
    addSpent.addEventListener('click', () => {


        if (state.value.trim() === '') {
            total.innerHTML = '<span class="warning">champ est vide ou c pas un nombre</span>';

            return;
        }

        const nbWord = state
            .value
            .split(' ')
            .map(w => w.trim())
            .join(' ')
            .split(' ')
            .length;

        total.innerHTML =  `Total : ${nbWord}`;
    });
      
    }

    main.appendChild(ul);

   
  }