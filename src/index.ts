// Need: let selectedSuggestions: string;

interface Options1 {
  suggestionContainer: HTMLDivElement;
  data: string[];
  inputElement: HTMLInputElement;
  clickAction?: () => void;
  filtering: string;
  selectedSuggestionsVar: string;
}

export function autoComplete(options: Options1): HTMLElement {
  const array = options.data;
  const inputElement = options.inputElement;
  const clickAction = options.clickAction;
  const filtering = options.filtering;
  const suggestionContainer = options.suggestionContainer;

  inputElement.addEventListener("input", () => {
    suggestionContainer.innerHTML = "";
    const inputText = inputElement.value;
    let filteredSuggestion: string[];
    if (filtering == "starts") {
      filteredSuggestion = array.filter((item) =>
        item.toLowerCase().startsWith(inputText)
      );
    } else if (filtering == "all") {
      filteredSuggestion = array.filter((item) =>
        item.toLowerCase().includes(inputText)
      );
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

// Auto Complete with links
interface links {
  item: string;
  link: string;
}

interface Options2 {
  data: links[];
  inputElement: HTMLInputElement;
  clickAction?: () => void;
  filtering: string;
  suggestionContainer: HTMLDivElement;
  selectedSuggestionsVar: string;
}

export function autoCompleteHref(options: Options2): HTMLElement {
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
    let filteredSuggestion: string[];
    if (filtering == "starts") {
      filteredSuggestion = items.filter((item) =>
        item.toLowerCase().startsWith(inputText)
      );
    } else if (filtering == "all") {
      filteredSuggestion = items.filter((item) =>
        item.toLowerCase().includes(inputText)
      );
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
