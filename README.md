<img src='https://github.com/LeeBingler/ReactShop/assets/98109693/7f507a9b-7356-42f6-a1e2-98f2ae02514c' alt='ReactShop' width='100%' />

![Static Badge](https://img.shields.io/badge/dependencies-NPM-black)
![Static Badge](https://img.shields.io/badge/license-MIT-red)
![GitHub repo size](https://img.shields.io/github/repo-size/LeeBingler/ReactShop)


![ReactShop webApp](/ReactShop.png)
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
