// Need: let selectedSuggestions: string;
export function autoComplete(options) {
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
            filteredSuggestion = array.filter((item) => item
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .startsWith(inputText));
        }
        else if (filtering == "all") {
            filteredSuggestion = array.filter((item) => item
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(inputText));
        }
        filteredSuggestion.forEach((suggestion) => {
            const suggestionDiv = document.createElement("div");
            suggestionDiv.classList.add("suggestionElement");
            suggestionDiv.textContent = suggestion;
            suggestionDiv.addEventListener("click", () => {
                inputElement.value = "";
                if (options.clickAction) {
                    clickAction(suggestion);
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
export function autoCompleteHref(options) {
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
            filteredSuggestion = items.filter((item) => item
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .startsWith(inputText));
        }
        else if (filtering == "all") {
            filteredSuggestion = items.filter((item) => item
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(inputText));
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
                inputElement.value = "";
                if (options.clickAction) {
                    clickAction(suggestion);
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
//# sourceMappingURL=index.js.map