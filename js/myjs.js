var quotes = [
  {
    content: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    content: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    content: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    content: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    content:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  }
];

var content = "";
var lastqoute = null;
function addQoutes() {
  let nowqoute;
  var content = "";
  do {
    nowqoute = Math.floor(Math.random() * quotes.length);
  } while (nowqoute === lastqoute);

  lastqoute = nowqoute;

  console.log(
    `Now Quote:  by ${quotes[nowqoute].author}`
  );
  content += `  <p>"${quotes[nowqoute].content}"</p>
<p>--${quotes[nowqoute].author}</p>`;
  document.getElementById("content").innerHTML = content;
}
