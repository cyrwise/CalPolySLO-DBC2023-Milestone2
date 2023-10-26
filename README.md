# Milestone 2 2022

Hi and welcome to Milestone 2!

This milestone will focus on applying some of the skills we learned during our TypeScript bootcamp session on TypeScript objects. Hopefully, this will help to practice this skillset for future Milestones!

## Setup

First off, you can fork this repository and then clone it just like you did for milestone 1.

Before working with the code, make sure you have Node and npm installed. Once that's done, run `npm i` at the root of this repo to install all of the neccessary packages (this should create a node_modules folder).

It's also strongly reccomended that you have the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for array functions open, as it has lots of useful functions that you'll encounter frequently in your project codebases.

## The Task

To get started, hop over to [milestone2.ts](./milestone2.ts), which is where you'll be writing all of your code. At the top of the file is an array of volunteer objects that you will be working with throughout this exercise. After that, scroll down to line 79, which is where the questions actually start.

The file is divided into 8 questions, each with an undefined function that you must write in order to complete the question. For question 1, you'll see code like this:

```ts
type GetNumber = (data: Volunteer[]) => number;
let findAverage: GetNumber; // Define lambda function here
```

For each question, we want you to convert the code into something like this:

```ts
type GetNumber = (data: Volunteer[]) => number;
let findAverage: GetNumber = (data) => {
  // Code here
};
```

Each question also has a commented out console.log() that you can use to check your work along the way. Feel free to comment and uncomment those as much as you want while testing your code.

## Evaluating Code

There are two primary ways you can test your code: running the file and running the tests

1. **Running the file** - We will be using ts-node to run our TypeScript file in the console. To use it, simply run `npx ts-node .\milestone2.ts`.

2. **Running the tests** - We have written a suite of unit tests in [tests\milestone2.test.ts](tests\milestone2.test.ts) that evaluate all 8 questions. Once you pass all of the tests, you're done with this milestone! To run a single test run `npm test -- -t="Question <number>"` (e.g. `npm test -- -t="Question 2"`). To run all tests, run `npm test`.

## Submitting your code

To submit your code, it's the exact same as milestone 1. Commit and push all changes to your forked repo, make a pull request, make sure your code passes all of the test cases, and you're good!

As always, feel free to message any of the engineering leads if you have any questions or get stuck. Good Luck!
