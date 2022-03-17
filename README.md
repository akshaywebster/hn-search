<h1 align="center">
  Hacker News Search 🔎 🚀
  <br>
  <img src="https://raw.githubusercontent.com/akshaywebster/hn-search/main/public/logo192.png?token=GHSAT0AAAAAABRAY2M2CWZZNO35F32P3C6UYRTAJ3A" alt="Y Combinator logo" title="y combinator logo" width="300">
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">A Hacker News Search app with server-side pagination, using the HN Search API by Algolia, built in React. ⚛️</p>

## My process

### Table of Contents

- [Built With](#built-with)
- [What I learned](#what-i-learned)
- [Live Site](#live-site)
- [Screenshot](#screenshot)
- [Hacker News API](#hacker-news-api)
- [Disclaimer](#disclaimer)

### Built with

<p align="left">
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" width="36" height="36" alt="HTML5" /><a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" width="36" height="36" alt="CSS3" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="36" height="36" alt="Javascript" /></a></a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="36" height="36" alt="React" /></a></p>

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid & Flexbox
- JavaScript
- React.js ⚛️
- HN Search API by Algolia

### What I learned

🔹 In this project, I worked with the Hacker News Search API provided by Algolia to create a HN search app.

🔹 To make this app work, I used useContext hook to create common data that can be accessed in multiple components. I also used useReducer to manage multiple states to keep track of data coming from the API. I also used a custom hook called `useGlobalContext` for sending prop data from useContext.

🔹 The API takes `'https://hn.algolia.com/api/v1/search?'` as endpoint, and on top of that, I used two parameters `query` & `page` to fetch relevant posts & to get the page number of the feed respectively.

🔹 By default, I have set it to fetch Hacker News posts related to `JavaScript` keyword.

🔹 When the input field is empty, we pulled data from `https://hn.algolia.com/?q=""` and it displays the most popular Hacker News posts of all time.

### Live Site

[Demo](https://webster-hn-search.netlify.app/)

### Screenshot:

![Screenshot](./screenshot.png)

---

### Hacker News API

[Hacker News Search API Docs](https://hn.algolia.com/api)

### Disclaimer

Hacker News, The Y Combinator name and logos are trademarks of Y Combinator (collectively the “Y Combinator Trademarks”). I do not claim the rights to the intellectual property of Y Combinator.
