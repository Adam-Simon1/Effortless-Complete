const inputElement = document.getElementById("inputElement");
const suggestionContainer = document.getElementById("suggestionContainer");
const array = [
    "apple",
    "banana",
    "cherry",
    "grape",
    "kiwi",
    "orange",
    "peach",
    "pear",
    "pineapple",
    "strawberry",
];
// Auto Complete default
let selectedSuggestion;
function doSomething() {
    console.log(selectedSuggestion);
}
const myOptions1 = {
    data: array,
    inputElement: inputElement,
    clickAction: doSomething,
    filtering: "all",
};
//autoComplete(myOptions1);
function autoComplete(options) {
    const array = options.data;
    const inputElement = options.inputElement;
    const clickAction = options.clickAction;
    const filtering = options.filtering;
    inputElement.addEventListener("input", () => {
        suggestionContainer.innerHTML = "";
        const inputText = inputElement.value;
        let filteredSuggestion;
        if (filtering == "starts") {
            filteredSuggestion = array.filter((item) => item.toLowerCase().startsWith(inputText));
        }
        else if (filtering == "all") {
            filteredSuggestion = array.filter((item) => item.toLowerCase().includes(inputText));
        }
        filteredSuggestion.forEach((suggestion) => {
            const suggestionDiv = document.createElement("div");
            suggestionDiv.classList.add("suggestionElement");
            suggestionDiv.textContent = suggestion;
            suggestionDiv.addEventListener("click", () => {
                selectedSuggestion = suggestion;
                if (options.clickAction) {
                    clickAction();
                }
            });
            suggestionContainer.appendChild(suggestionDiv);
        });
    });
    document.addEventListener("click", (event) => {
        suggestionContainer.innerHTML = "";
    });
    return suggestionContainer;
}
const links = [
    {
        item: "apple",
        link: "https://www.example.com/apple",
    },
    {
        item: "kiwi",
        link: "https://www.example.com/kiwi",
    },
    {
        item: "orange",
        link: "https://www.example.com/orange",
    },
];
const myOptions2 = {
    data: links,
    inputElement: inputElement,
    filtering: "all",
};
autoCompleteHref(myOptions2);
function autoCompleteHref(options) {
    const data = options.data;
    const inputElement = options.inputElement;
    const clickAction = options.clickAction;
    const filtering = options.filtering;
    const items = data.map((link) => link.item);
    const urls = data.map((link) => link.link);
    inputElement.addEventListener("input", () => {
        suggestionContainer.innerHTML = "";
        const inputText = inputElement.value;
        let filteredSuggestion;
        if (filtering == "starts") {
            filteredSuggestion = items.filter((item) => item.toLowerCase().startsWith(inputText));
        }
        else if (filtering == "all") {
            filteredSuggestion = items.filter((item) => item.toLowerCase().includes(inputText));
        }
        let count = 0;
        filteredSuggestion.forEach((suggestion) => {
            const suggestionDiv = document.createElement("div");
            suggestionDiv.classList.add("suggestionElement");
            const suggestionA = document.createElement("a");
            suggestionA.textContent = suggestion;
            suggestionA.href = urls[count];
            count++;
            suggestionDiv.addEventListener("click", () => {
                selectedSuggestion = suggestion;
                if (options.clickAction) {
                    clickAction();
                }
            });
            suggestionContainer.appendChild(suggestionDiv);
            suggestionDiv.appendChild(suggestionA);
        });
    });
    document.addEventListener("click", (event) => {
        suggestionContainer.innerHTML = "";
    });
    return suggestionContainer;
}
export {};
//# sourceMappingURL=index.js.map