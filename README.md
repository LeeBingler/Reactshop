# ReactShop
A React Js e-commerce website.

## Tech Stack
1. HTML
2. CSS
3. JavaScript

## Frameworks and Libraries
1. React
2. Tailwind

## API's
[Fake Store API](https://fakestoreapi.com/)

### Get all products
```javascript
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
```

### Get a single product
```javascript
fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
```

## Build/Run

#### Requirements

- Node.js
- NPM

```javascript

/* First, Install the needed packages */
npm install

/* Then start the React app */
npm start

/* To run the tests */
npm run test

```

### Copyright and license

The MIT License (MIT). Please see License File for more information.
