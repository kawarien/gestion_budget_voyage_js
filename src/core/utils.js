
export function func_travelers(main, travelersList) {
    
    const ul = document.createElement("ul");
    const resLabel = document.createElement("label");
    resLabel.innerHTML = "";
    
    // j'ai creer un boutton pour utiliser dans deux endroit (calculer et le boutton Add)
    const createButtonCalc = (label) => {
        const button = document.createElement("button");
        const buttonText = document.createTextNode(label);
        button.appendChild(buttonText);
        button.setAttribute("style", "background-color:#4CAF50; color: white; font-size:16px; border-radius:5px");
      
        return button;
      }
       
      
    
    
    for (const travelers of travelersList) {
      var totalDefault = 0;
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.type = "text";
      input.className = "input-class";
      const label = document.createElement("label");
      label.innerHTML = "Add spent : ";
      const total = document.createElement('label');
      total.innerHTML = " Total : " + totalDefault;
      const br = document.createElement("br");
      const btnAdd = createButtonCalc('Add');
      const content = document.createTextNode(travelers);
      li.appendChild(content);
      ul.appendChild(li);
      ul.appendChild(label);
      ul.appendChild(input);
      ul.appendChild(total);
      ul.appendChild(br);
      ul.appendChild(br);
      ul.appendChild(br);
      ul.appendChild(btnAdd);

      const state = {
        value: ''
    };
    
    input.addEventListener('input', (e) => {
        const { value } = e.target;
        state.value = value;
    });

    let toggle = false;
    var inputNumber = 0;
    btnAdd.addEventListener('click', () => {
        // j'ai verifi si c'est un nombre qui a été saisi  
        if (isNaN(state.value) || state.value.trim() === '') {
            total.innerHTML = '<span class="warning"> Champ vide ou verifiez si c\'est un nombre</span>';
            return;
        }
        
        inputNumber = parseInt(state.value);
        console.log('input number', inputNumber);
        total.innerHTML =  `Total : ${inputNumber}`;
         
         if(toggle === true) {
            inputNumber = inputNumber + inputNumber;
            total.innerHTML =  `Total : ${inputNumber}`;
            console.log('input number 2', inputNumber);
             
         }
        
        toggle = !toggle;

        // function myFunc(total, num) {
        //     return total + num;
        //   }

    });

    
    
    }
    const btn = createButtonCalc('Calculer');
      btn.addEventListener("click", (e) => {

        let text = '';
        for (let i = 0; i < 4; i++ ) {
        text += travelersList[i] + '<br>total : ' + inputNumber +'<br>'+'crédit : '+ inputNumber +'<br><br>' ;
        i == i+1;
        }
        resLabel.innerHTML = ('Montant total du voyage : ' + inputNumber + ' euros coût est de '+ inputNumber/4 + ' euros par participant <br><br>' + text)
        main.appendChild(resLabel);
        
      });
      main.appendChild(btn);
    main.appendChild(ul);
  }