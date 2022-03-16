# Hacker News Search

![Y Combinator logo](./public/logo192.png)

## My process

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

In this project, I worked with the Hacker News Search API provided by Algolia to create a HN search app.

To make this app work, I used useContext hook to create common data that can be accessed in multiple components. I also used useReducer to manage multiple states to keep track of data coming from the API. I also used a custom hook called `useGlobalContext` for sending prop data from useContext.

The API takes `'https://hn.algolia.com/api/v1/search?'` as endpoint, and on top of that, I used two parameters `query` & `page` to fetch relevant posts & to get the page number of the feed respectively.

By default, I have set it to fetch Hacker News posts related to `JavaScript` keyword.

When the input field is empty, we pulled data from `https://hn.algolia.com/?q=""` and it displays the most popular Hacker News posts of all time.

### Demo

[Demo](https://webster-hn-search.netlify.app/)

### Screenshot:

![Screenshot](./screenshot.png)

---

#### Hacker News API

[Hacker News Search API Docs](https://hn.algolia.com/api)
