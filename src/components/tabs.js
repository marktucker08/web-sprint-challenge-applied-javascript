import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const newTopics = document.createElement('div');
  newTopics.classList.add('topics');
  // console.log(topics);
  // for (let i = 0; i < topics.length; i++) {
  //   const newTopic = document.createElement('div');
  //   newTopic.classList.add('tab');
  //   newTopic.textContent = topics[i];
  //   console.log(newTopic);
  //   newTopics.appendChild(newTopic);
  // }
  topics.forEach((topic) => {
    let newTopic = document.createElement('div');
    newTopic.classList.add('tab');
    newTopic.textContent = topic;
    newTopics.appendChild(newTopic);
  })
  return newTopics;
}

// const arr = ["java", "coffee", "web", "html", "css"]
// console.log(Tabs(arr));
const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5001/api/topics')
    .then( res => {
      // console.log(res);
      // const newTabs = Tabs(res.data);
      const appender = document.querySelector(selector);
      appender.appendChild(Tabs(res.data.topics));
      // console.log(appender);
    })
    .catch(err => {
      console.log(err);
    })
}

export { Tabs, tabsAppender }
