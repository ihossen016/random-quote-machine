function fetchQuote() {
  let num = Math.round(Math.random() * 100);
  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
      document.querySelector("#text-quote").innerText = data[num].text;
      document.querySelector("#author").innerText = data[num].author;
    });
}
