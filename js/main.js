
const btnQuote = document.querySelector('.quote');

btnQuote.addEventListener('click', showQuote);

function showQuote(){
    let url = 'https://api.kanye.rest'


    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))


}



