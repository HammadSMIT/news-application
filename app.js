
let getDiv = document.getElementById("getDiv")
let getSearch = document.getElementById("News")


let getNews =() =>{

    fetch(`https://newsapi.org/v2/everything?q=${getSearch.value}&from=2023-09-19&sortBy=publishedAt&apiKey=3d45d5a5a6574183ab8e6f3ae279ef65`)
    .then(data => data.json())
    .then(data => {
        for(let i = 0 ; i<data.articles.length ; i++){
            getDiv.innerHTML += `<div class="card m-5" style="width: 18rem;">
            <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
    `
}
    
    
    })
    .catch(err => console.log(err))
}




