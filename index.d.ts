declare module "effortless-complete" {
  export interface autoCompleteOptions {
    suggestionContainer: HTMLDivElement;
    data: string[];
    inputElement: HTMLInputElement;
    clickAction?: () => void;
    filtering: string;
    selectedSuggestionsVar: string;
  }

  export function autoComplete(options: autoCompleteOptions): HTMLElement;

  export interface links {
    item: string;
    link: string;
  }

  export interface autoCompleteHrefOptions {
    data: links[];
    inputElement: HTMLInputElement;
    clickAction?: () => void;
    filtering: string;
    suggestionContainer: HTMLDivElement;
    selectedSuggestionsVar: string;
  }

  export function autoCompleteHref(
    options: autoCompleteHrefOptions
  ): HTMLElement;
}

export {};
