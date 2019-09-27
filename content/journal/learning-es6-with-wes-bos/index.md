---
path: "/learning-es6-with-wes-box"
date: "2018-10-16"
title: "Learning ES6 With Wes Bos"
tags: ["programming", "Javascript"]
---

# Variables: var - let - const

Variables defined using the `var` keyword can be updated or re-assigned. This also means that you can unintentionally re-use the same variable name in different scopes or context, which will lead to unintended consequences. For example:

```
var width = 100
// returns 100
...
var width = 200
// returns 200
```

Variables defined with the `var` keyword are scoped to the function in which they're defined. If they're defined outside of a function then they're globally scoped. Variables defined using `var` within an function block, like an IF statement, block will leak into the global scope. For example:

```
var age = 100;

if (age > 12 ) {
  var dogYears = age * 7;
  console.log(`you are ${dogYears} old!`)
}

dogyears
// returns 700
```

If you want to avoid this, you can use `let` or `const` as both are block scoped. `let` variables can be updated, but you can't re-declare it twice in the same scope—like you can with `var`. `const` variables, short for constant, can NOT be updated. However, they're not immutable, as the properties of a `const` object can be updated. If you want something to be immutable, you can use `Object.freeze(person)` and pass it an object.

Using block scoped variables like `let` and `const` eliminate the need to use immediately invoked function expressions (IIFE's). Another real world benefit of using `let` is when you're using for loops.

In summary, use `const` by default, only us `let` if rebinding or updating is necessary, and avoid using `var` unless you __absolutely__ want something available in the global scope.

# Arrow Functions

Some benefits
 - more concise
 - implicit returns (delete the curly brackets)
 - doesn't rebind the value of `this` when you use an arrow function inside another function—which is helpful for when you're doing click handling.
 - arrow functions are always annonymous—store them in a variable if they need to be named.

 When NOT to use an arrow function:
 - when you really need to use `this`—like when your adding click events to dom elements.
 - when you need a method to bind to an object
 - when you need to add a prototype method
 - when you need to access an objects arguments

# Template Strings
- useful for times when you want to put a variable inside of string (e.g. interpolation)
- another good use case for template literals is for creating HTML fragments. Using template literals to create HTML fragments is very similar to using JSX in react.

```
const name = "Dan"
const jobTitle = "product manager."
const bio = `${name} is a ${jobTitle} with a passion for design and code.`
// Dan is a product manager with a passion for design and code.
```

# New String Methods
- help us write more readable code and reduce our dependence on regex.
- Examples
  - `.startsWith()`
  - `.endsWith()`
  - `.includes()`
  - `.repeat()`

# Destructuring
- a JS expression that allows us to extract data from arrays, objects, maps, and sets—into their own variables.

```
const person = {
  first: 'Dan'
  last: 'Lavin'
  city: 'Chicago'
  twitter: '@danlavin'
}

const { first, last } = person
```

- Worth noting, you can rename and set defaults or fallbacks when destructuring variables. For example:

```
const { w: width = 400, h: height = 500 } = { w: 800 }

// width returns 800
// height returns 500
```

- when destructuring an array (or set) you use brackets and when destructuring an object (or map) you use curly brackets.
- you can also use destructuring to swap the order or position of a set of variables. For example:

```
let batting = 'Kris Bryant'
let onDeck = 'Anthony Rizzo'

[batting, onDeck] = [onDeck, batting]
```

# Iterables and Looping

- traditional `for` loop

```
const players = ['dan', 'hank', 'william']
for (let i = 0; i < players.length; i++) {
  console.log(players[i])
}
```

- `forEach()` reads nicely but you cannot abort or skip over the loop while iterating over it.

```
const players = ['dan', 'hank', 'william']
players.forEach(player) => {
  console.log(player);
}
```

- For In loops don't just interate over the items in a collection, it iterates over everything that gets added to the array.

```
const players = ['dan', 'hank', 'william']
for (const index in players) {
  console.log(players[index])
}
```

- the `forOf()` loop is used to iterate over more than just arrays, such as: maps, objects, etc.

```
const players = ['dan', 'hank', 'william']

for (const player of players) {
  console.log(player)
}
```

# Spread and Rest

- the spread operater takes every single item from an iterable and applies it into a new array
- the rest param takes multiple things and packs it into a single array

# Object Literal Improvements

- when the key and value of an object are the same, you only need to define it one time

```
const first: 'dan'
const last: 'lavin'
const age: 33

// old way
const familyMember = {
  first: first,
  last: last,
  age: age,
  create: function(){},
}

// new way
const familyMember = {
  first,
  last,
  age,
  create(){},
}
```

# Sets and WeakSets

- A set is like a unique array, where you can only add the same item once. It's different from a regular old array in that you can't access the items individuall and it's not indexed based.

- A weak set can only contain an object (no strings, arrays, or numbers, etc.) and you can't loop over a weak set. There's no iterator function.

- One of the benefits of a weak set is that they clean themselves up, which is useful for garbage collection and memory leaks.