import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  console.log(article);
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.addEventListener('click', evt => {
    console.log(article.headline);
  })
  const header = document.createElement('div');
  header.classList.add('headline');
  header.textContent = article.headline; 
  const auth = document.createElement('div');
  auth.classList.add('author');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const img = document.createElement('img')
  img.src = article.authorPhoto;
  const authSpan = document.createElement('span');
  authSpan.textContent = article.authorName;
  newCard.appendChild(header);
  newCard.appendChild(auth);
  auth.appendChild(imgContainer);
  imgContainer.appendChild(img);
  auth.appendChild(authSpan);
  return newCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5001/api/articles')
    .then( res => {
      console.log(res.data.articles);
      // const newArticles = Card(res.data.articles);
      const appender = document.querySelector(selector);
      // const arrData = Array.from(res.data.articles);
      // for (let i = 0; i < res.data.articles.length; i++) {
      res.data.articles.bootstrap.forEach(obj => {
        let newCards = Card(obj);
        appender.appendChild(newCards);
      })
      res.data.articles.javascript.forEach(obj => {
        let newCards = Card(obj);
        appender.appendChild(newCards);
      })
      res.data.articles.jquery.forEach(obj => {
        let newCards = Card(obj);
        appender.appendChild(newCards);
      })
      res.data.articles.node.forEach(obj => {
        let newCards = Card(obj);
        appender.appendChild(newCards);
      })
      res.data.articles.technology.forEach(obj => {
        let newCards = Card(obj);
        appender.appendChild(newCards);
      })
    }) 
    // .catch(err => {
    //   console.log(err);
    //   debugger;
    // })
}

export { Card, cardAppender }
