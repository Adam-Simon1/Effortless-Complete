import { autoComplete } from "../dist/index.js";
const suggestionContainer = document.getElementById("suggestionContainer");
const inputElement = document.getElementById("inputElement");
const array = ["apple", "orange", "apricot"];
let selectedSuggestions = "";

const config = {
  data: array,
  inputElement: inputElement,
  suggestionContainer: suggestionContainer,
  filtering: "all",
  clickAction: something,
};

autoComplete(config);

function something(suggestion) {
  console.log(suggestion);
}
