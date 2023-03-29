// Variabili
const btnStart  = document.querySelector('.btn-start');
const container = document.querySelector('.container');


// Richiamo bottone
btnStart.addEventListener('click', function(){

    // metto la classe hide al bottone per nasconderlo
    btnStart.classList.add('hide');

    // tolgo la classe hide al container per visualizzarlo
    container.classList.remove('hide');

    for (let i = 1; i <= 100; i++) {

        // creo i div con classe square per aggiungere i quadrati al container
        const square = document.createElement('div');
        generaBox(square);
        

        // richiamo i quadrati dicendo che al click dell'utente aggiungeranno o toglieranno la classe clicked
        square.addEventListener('click', function(){
            this.classList.toggle('clicked');
            square.squareId = i;
            console.log(square);
        })
    }

})

// *************** FUNZIONI ********************

function generaBox(newBox){
    newBox.classList.add('square');
    container.appendChild(newBox);
}