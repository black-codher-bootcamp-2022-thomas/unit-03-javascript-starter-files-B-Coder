// I'm an object
const birmingham = {
  name: "Birmingham",
  population: "1+ million",
};

export default function displayPopulation() {
  // Make a new <p></p> for population. This is not attached to the DOM yet.
  const paragraph = document.createElement("p");

  // Make some text content to put into your <p></p>
  const content = document.createTextNode(
    "Population: " + birmingham.population
  );

  // Put the text content into the <p></p>.
  paragraph.appendChild(content);

  // Finally the population can be appended to the body, and will become visible in the browser.
  document.body.appendChild(paragraph);
}
