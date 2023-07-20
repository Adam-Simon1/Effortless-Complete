declare module "effortless-complete" {
  export interface autoCompleteOptions {
    suggestionContainer: HTMLElement | null;
    data: string[];
    inputElement: HTMLElement | null;
    clickAction?: (selectedSuggestion: string) => void;
    filtering: string;
  }

  export function autoComplete(options: autoCompleteOptions): HTMLElement;

  export interface links {
    item: string;
    link: string;
  }

  export interface autoCompleteHrefOptions {
    data: links[];
    inputElement: HTMLElement | null;
    clickAction?: (selectedSuggestion: string) => void;
    filtering: string;
    suggestionContainer: HTMLElement | null;
  }

  export function autoCompleteHref(
    options: autoCompleteHrefOptions
  ): HTMLElement;
}

export {};
