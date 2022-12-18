let episodio = 70;

/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
  episodio++;
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${episodio}`
  );
  const data = await res.json();
  console.log({ data });
  return data;
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "Breakingbad App";
  element.innerHTML = "Loading...";
  const quoteLabel = document.createElement("blockquote");
  const nameLabel = document.createElement("h3");
  const nextQuoteButton = document.createElement("button");
  nextQuoteButton.innerText = "Next Quote";

  nextQuoteButton.addEventListener("click", async () => {
    element.innerHTML = "Loading...";

    const quote = await fetchQuote();
    renderQuote(quote);
  });

  const renderQuote = (data) => {
    quoteLabel.innerHTML = data.id;
    nameLabel.innerHTML = data.name;
    element.replaceChildren(quoteLabel, nameLabel, nextQuoteButton);
  };

  fetchQuote().then(renderQuote);
};
