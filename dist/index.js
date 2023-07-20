// Need: let selectedSuggestions: string;
function autoComplete(options) {
    const array = options.data;
    const inputElement = options.inputElement;
    const clickAction = options.clickAction;
    const filtering = options.filtering;
    const suggestionContainer = options.suggestionContainer;
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
                options.selectedSuggestionsVar = suggestion;
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
function autoCompleteHref(options) {
    const data = options.data;
    const inputElement = options.inputElement;
    const clickAction = options.clickAction;
    const filtering = options.filtering;
    const suggestionContainer = options.suggestionContainer;
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
                options.selectedSuggestionsVar = suggestion;
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
module.exports = {
    autoComplete,
    autoCompleteHref,
};
export {};
//# sourceMappingURL=index.js.map