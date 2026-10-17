# Final Exercise - Programming Logic

A JavaScript project that calculates the number of ratings and the average score for each movie, then classifies it as recommended, fair, or poor.
This repository contains the solution to the final exercise of a Programming Logic course, developed with JavaScript and Node.js.

## Requirements

- Node.js 18 or higher

## Running the tests

From the project root directory—the folder containing `package.json`—run:

```bash
npm test
```

The tests use Node.js's built-in `node:test` test runner.

## Usage

The `classificarFilme` function takes a list of movies. Each movie must have a `nome` (name) and an `avaliacoes` (ratings) array of numbers.

```js
const { classificarFilme } = require(
  './Final-Exercise-in-Programming-Logic-main/source/classificarFilme'
);

const filmes = [
  { nome: 'Minha mãe é uma peça', avaliacoes: [5, 4, 4, 4, 5] },
  { nome: 'Saneamento Básico', avaliacoes: [3, 4, 2, 3, 4] },
  { nome: 'Se eu fosse você', avaliacoes: [1, 2, 3] }
];

console.log(classificarFilme(filmes));
```

Each returned item contains:

- `nome`: movie name;
- `totalAvaliacoes`: number of ratings;
- `media`: arithmetic mean of the ratings;
- `avaliacao`: movie classification.

## Classification criteria

- Average greater than or equal to 4: **Recommended movie**
- Average greater than or equal to 3 and less than 4: **Fair movie**
- Average less than 3: **Poor movie**
- Movie with no ratings: average `0` and classification **Poor movie**

## Project structure

```text
.
├── package.json
├── README.md
└── Final-Exercise-in-Programming-Logic-main/
    ├── source/
    │   └── classificarFilme.js
    └── test/
        └── classificarFilme.test.js
```
