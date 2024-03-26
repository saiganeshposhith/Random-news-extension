const apiKey = "1b3e311c99e24e7aa88eba3d1cfeaea4";
const container = document.querySelector(".card-container");
let response, articles;
function displayArticle(element) {
    container.innerHTML=""
    let div = document.createElement("div");
    div.classList.add("card");
    let imgdiv = document.createElement("div");
    imgdiv.classList.add("img");
    let img = document.createElement("img");
    img.src = element.urlToImage;
    img.alt= element.title
    imgdiv.append(img);
    let tit = document.createElement("h2");
    tit.classList.add("title");
    tit.innerText = element.title;
    let p = document.createElement("p");
    p.classList.add("desc");
    p.innerText = element.description;
    div.appendChild(imgdiv);
    div.appendChild(tit);
    div.appendChild(p);
      container.append(div);
      div.addEventListener('click',() => {
          open(element.url,'_blank')
      })

    
}
document.getElementById("news").addEventListener("click", async () => {
  try {
    response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
    );
    articles = await response.json();
    displayArticle(articles.articles[Math.ceil(Math.random() * 20)]);
  } catch (err) {
    console.log(err);
  }
});

