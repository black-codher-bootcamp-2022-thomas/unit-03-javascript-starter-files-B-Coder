// This function should be used to create a list of fruit
export default function createListOfFruits(fruits) {
  // get the element we want to add our list to
  const listContainer = document.querySelector("#list-container");

  // Creating our new elements
  const title = document.createElement("h2");
  const titleText = document.createTextNode("List of fruit");
  const list = document.createElement("ul");

  // Looping through the array of Fruits to create a li for each fruit in the array
  // By looping through an array of Fruits we can add as much or as little to our list

  fruits.map((fruit) => {
    const listItem = document.createElement("li");
    listItem.textContent = fruit;
    list.appendChild(listItem);
  });

  title.appendChild(titleText);
  // Now the title and list will be displayed since we have appended it to an element in the DOM.
  listContainer.appendChild(title);
  listContainer.appendChild(list);
}
