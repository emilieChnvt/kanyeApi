
const containerBtn = document.querySelector('.containerBtn');
const btnQuote = document.querySelector('.quote');



btnQuote.addEventListener('click', recupereQuote);






function recupereQuote(){
    let url = 'https://api.kanye.rest'
    let quote = fetch(url)
        .then(response => response.json())
        .then(json => console.log(json));
    containerBtn.innerHTML = quote;
}





