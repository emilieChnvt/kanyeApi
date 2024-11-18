
const containerBtn = document.querySelector('.containerBtn');
const btnQuote = document.querySelector('.quote');



btnQuote.addEventListener('click', recupereQuote);

function recupereQuote(){
    let url = 'https://api.kanye.rest'
   fetch(url)
        .then(response => response.json())
        .then(json => containerBtn.innerHTML += json.quote)
}





