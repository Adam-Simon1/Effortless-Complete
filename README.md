# Effortless-Complete

Node JS library for simplifying user input **autocompletion**. Simple, fast and allows for custom styling.

## Installation

### NPM:

```
$ npm install effortless-complete
```

or

### CDN:

```
<script src="https://cdn.jsdelivr.net/npm/effortless-complete@1.0.7/dist/index.js"></script>
```

## Features

- Custom styling
- Simple
- Implement autocompletion in a few lines
- Typescript declarations included

## Links

- [NPM](https://www.npmjs.com/package/effortless-complete)
- [Github](https://github.com/Adam-Simon1/Effortless-Complete.git)

## Usage

### Functions

Import the library:

```
import {autoComplete, autoCompleteHref} from "effortless-complete"
```

`autoComplete()` function, takes a config object and is used to do basic autocompletion:

```
const config = {
  suggestionContainer: // Takes a div element in which the autocomplete suggestions are going to be displayed. You have to create this one yourself
  data: // Takes an array of strings, that will serve as reference.
  inputElement: // Takes an input element
  clickAction: // Is an optional property. It takes a function that contains an argument, which will be ran after you click on a certain suggestion.
  filtering: // Takes a string: 'all' or 'starts'. This property defines, which suggestions are going to be shown. More on this lower.
};
autoComplete(config);
```

`'all'` parameter: filters the suggestions that includes the user input.

`'starts'` parameter: filters the suggestions that starts with the user input.

`clickAction` Takes a function that has one argument.

```
function doSomething(suggestion) {
  console.log(suggestion);
};
```

The textContent of the clicked suggestion will be assigned to it.

`autoCompleteHref()` function takes config too, but it's used to assign a url to a suggestion:

```
const config = {
 suggestionContainer: // Takes a div element in which the autocomplete suggestions are going to be displayed.
 data: // Takes an array of objects, that contain url and an item. More on this lower.
 inputElement: // Takes an input element
 clickAction: // Works the same as in autoComplete() function shown previously
 filtering: // Takes a string: 'all' or 'starts'. This property defines, which suggestions are going to be shown. More on this lower.
};
autoCompleteHref(config);
```

The array that serves as a reference should look like this:

```
const data = [
 {
   item: "groceries"
   link: "https://www.example.com/groceries"
 },
 {
   item: "electronics"
   link: "https://www.example.com/electronics"
 }
];
```

You can define it as long as you want, but keep this format.

Now if you click on a suggestion it will redirect you to the url that you specified.

### Styling

You can style it as you want. The class name for the suggestions inside the your div is "suggestionElement".

### Example

```
let  inputElement = document.getElementById('inputElement');
const  suggestionContainer = document.getElementById('suggestionsContainer');
let  selectedSuggestion: string;

const  config = {
  suggestionContainer:  suggestionContainer,
  data:  kaufland,
  inputElement:  inputElement,
  filtering:  'all',
  selectedSuggestionsVar:  selectedSuggestion
};

autoComplete(config);
```

https://github.com/Adam-Simon1/Effortless-Complete/assets/134161057/98bcfe44-2b53-4cae-8ecd-ede2651da06d

This is an example i made. It uses a long array i extracted from my database. It's for a project i am working on.

## Typescript declarations

The npm module already includes a declarations file.
