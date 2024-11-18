let url = 'https://api.kanye.rest'


fetch(url)
.then(response => response.json())
.then(json => console.log(json))