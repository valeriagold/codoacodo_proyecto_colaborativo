
// api

let request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json");
request.send();
request.onload = () => {
    let arrayResponse = JSON.parse(request.response);
	//console.log(arrayResponse);
    
    for (let index = 0; index < arrayResponse.length; index++) {
        const element = arrayResponse[index];
        if(index !== 2 &&  index !== 7){
        document.getElementsByClassName("recetas-container")[0].innerHTML+=
        `<div class="receta-card">
        <a href="${element.originalURL}" target="_blank">
            <img class="img-recetas-section"
                src="${element.imageURL}"
                alt="${element.name}" />
            <p>${element.name}</p>
            </a>
        </div>`
        ;
    }
    }
} 