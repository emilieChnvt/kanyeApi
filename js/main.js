
const containerBtn = document.querySelector('.containerBtn');
const btnQuote = document.querySelector('.quote');
const quoteContainer = document.querySelector('.quoteContainer');



btnQuote.addEventListener('click', recupereQuote);

function recupereQuote(){
    const url = 'https://api.kanye.rest';
   fetch(url)
        .then(response => response.json())
        .then(json => {
            quoteContainer.innerHTML = ''; // clear last quote

            let newDiv = document.createElement('div');
            newDiv.innerHTML = json.quote;
            quoteContainer.appendChild(newDiv);
            }
        )
}





