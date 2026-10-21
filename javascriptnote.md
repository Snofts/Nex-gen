# JavaScript Asynchronous Programming
## Promises, Async/Await and Try...Catch

---

# LESSON OBJECTIVES

By the end of this lesson, students should be able to:

- Explain what asynchronous programming means.
- Explain what a Promise is.
- Identify the three states of a Promise.
- Use `.then()` and `.catch()`.
- Understand that `fetch()` automatically returns a Promise.
- Use `async` and `await`.
- Handle errors using `try...catch`.
- Fetch data from an API and display the results.

---

# PART 1: SYNCHRONOUS VS ASYNCHRONOUS JAVASCRIPT

Before learning Promises, we need to understand how JavaScript executes code.

## Synchronous Code

JavaScript normally executes code line by line.

Example:

```js
console.log("Step 1");

console.log("Step 2");

console.log("Step 3");
```

Output:

```js
Step 1
Step 2
Step 3
```

JavaScript waits for Step 1 to finish before moving to Step 2.

This is called **Synchronous Programming**.

---

## The Problem

What happens if JavaScript needs to fetch data from the internet?

Example:

```js
console.log("Loading Users...");

fetch("https://jsonplaceholder.typicode.com/users");

console.log("Users Loaded");
```

Fetching data takes time.

If JavaScript waited for every internet request to finish before moving on, websites would become very slow.

Instead, JavaScript continues executing other code while waiting.

This is called **Asynchronous Programming**.

---

# REAL LIFE EXAMPLE

Imagine you enter a restaurant.

### Synchronous Approach

1. Order food.
2. Stand beside the chef.
3. Watch the chef cook.
4. Collect food.

Nothing else happens until the food is ready.

---

### Asynchronous Approach

1. Order food.
2. Sit down.
3. Chat with friends.
4. Wait for notification.
5. Food arrives.

This is how JavaScript works.

JavaScript continues doing other tasks while waiting for a response.

---

# PART 2: WHAT IS A PROMISE?

A Promise is an object that represents a value that will arrive in the future.

Think of it as:

> "I don't have the result now, but I promise to give it to you later."

Examples:

- API Requests
- Database Requests
- File Uploads
- Authentication
- Payment Processing

---

# PROMISE STATES

A Promise can only be in one of three states.

---

## 1. Pending

The operation is still running.

```js
Promise { <pending> }
```

Example:

You ordered food.

The chef is still cooking.

---

## 2. Fulfilled (Resolved)

The operation completed successfully.

```js
Promise { <fulfilled> }
```

Example:

Food is ready.

---

## 3. Rejected

The operation failed.

```js
Promise { <rejected> }
```

Example:

Restaurant has no ingredients.

---

# CREATING A PROMISE

Syntax:

```js
const myPromise = new Promise((resolve, reject) => {

});
```

The Promise constructor provides two functions:

```js
resolve()
reject()
```

---

# RESOLVE EXAMPLE

```js
const myPromise = new Promise((resolve, reject) => {

    resolve("Data Loaded Successfully");

});

console.log(myPromise);
```

Output:

```js
Promise { 'Data Loaded Successfully' }
```

---

# REJECT EXAMPLE

```js
const myPromise = new Promise((resolve, reject) => {

    reject("Failed To Load Data");

});
```

---

# PART 3: CONSUMING A PROMISE

Once a Promise returns a result, we need a way to use it.

We use:

```js
.then()
.catch()
```

---

# .then()

`.then()` executes when a Promise succeeds.

Example:

```js
const studentPromise = new Promise((resolve) => {

    resolve("John");

});

studentPromise.then((student) => {

    console.log(student);

});
```

Output:

```js
John
```

Think of `.then()` as:

> "If successful, THEN do this."

---

# .catch()

`.catch()` executes when a Promise fails.

Example:

```js
const studentPromise = new Promise((resolve, reject) => {

    reject("Network Error");

});

studentPromise.catch((error) => {

    console.log(error);

});
```

Output:

```js
Network Error
```

Think of `.catch()` as:

> "If anything goes wrong, catch the error."

---

# PART 4: FETCH API

IMPORTANT:

Students often ask:

### "Do I need to create a Promise when using fetch()?"

Answer:

NO.

Because fetch already returns a Promise.

---

Example:

```js
const users = fetch(
    "https://jsonplaceholder.typicode.com/users"
);

console.log(users);
```

Output:

```js
Promise { <pending> }
```

Notice:

We don't receive users immediately.

We receive a Promise.

---

# USING FETCH WITH .then()

```js
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {

        return response.json();

    })
    .then((users) => {

        console.log(users);

    })
    .catch((error) => {

        console.log(error);

    });
```

---

# WHAT IS HAPPENING?

Step 1:

```js
fetch(...)
```

Returns a Promise.

---

Step 2:

```js
response.json()
```

Converts JSON into JavaScript objects.

IMPORTANT:

`.json()` ALSO RETURNS A PROMISE.

Many beginners don't know this.

---

Step 3:

```js
.then((users) => {})
```

Receives actual data.

---

Step 4:

```js
.catch()
```

Handles errors.

---

# COMMON BEGINNER MISTAKE

Wrong:

```js
const users = fetch(
    "https://jsonplaceholder.typicode.com/users"
);

users.forEach(user => {

    console.log(user);

});
```

Error:

```js
users.forEach is not a function
```

Why?

Because:

```js
users
```

is a Promise.

Not an array.

---

Correct:

```js
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {

        users.forEach((user) => {

            console.log(user.name);

        });

    });
```

Now:

```js
users
```

is actually an array.

---

# PART 5: WHY ASYNC/AWAIT EXISTS

Imagine:

```js
fetch(url)
    .then(...)
    .then(...)
    .then(...)
    .then(...)
    .then(...)
```

This becomes difficult to read.

JavaScript introduced:

```js
async
await
```

to make asynchronous code look more like normal code.

---

# WHAT IS async?

The `async` keyword makes a function return a Promise.

Example:

```js
async function greet() {

    return "Hello Students";

}
```

---

Let's see the result.

```js
console.log(greet());
```

Output:

```js
Promise { 'Hello Students' }
```

Even though we returned a string, JavaScript automatically wrapped it inside a Promise.

---

# WHAT IS await?

The `await` keyword pauses execution until a Promise finishes.

Example:

```js
const promise = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Data Loaded");

    }, 3000);

});
```

---

Using await:

```js
async function loadData() {

    const result = await promise;

    console.log(result);

}

loadData();
```

Output after 3 seconds:

```js
Data Loaded
```

---

# RULE

`await` can only be used inside an async function.

Wrong:

```js
const result = await promise;
```

Correct:

```js
async function test() {

    const result = await promise;

}
```

---

# FETCH USING ASYNC/AWAIT

Instead of:

```js
fetch(url)
    .then(...)
    .then(...)
```

We can write:

```js
async function getUsers() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    console.log(users);

}

getUsers();
```

This looks much cleaner.

---

# BREAKDOWN

Step 1

```js
const response = await fetch(url);
```

Wait for API response.

---

Step 2

```js
const users = await response.json();
```

Wait for JSON conversion.

---

Step 3

```js
console.log(users);
```

Use the data.

---

# PART 6: TRY...CATCH

What happens if something goes wrong?

Examples:

- Internet failure
- Wrong URL
- Server error
- Invalid data

Without error handling, the application may crash.

---

# BASIC TRY...CATCH

Syntax:

```js
try {

} catch(error) {

}
```

Think:

> TRY this code.
>
> If anything breaks,
>
> CATCH the error.

---

Example:

```js
try {

    console.log(name);

} catch(error) {

    console.log("Something Went Wrong");

}
```

Output:

```js
Something Went Wrong
```

---

# VIEWING THE ACTUAL ERROR

```js
try {

    console.log(name);

} catch(error) {

    console.log(error);

}
```

Output:

```js
ReferenceError:
name is not defined
```

---

# TRY...CATCH WITH FETCH

```js
async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        console.log(users);

    } catch(error) {

        console.log(
            "Failed To Load Users"
        );

    }

}

getUsers();
```

---

# REAL WORLD EXAMPLE

Imagine you're building a course platform.

User clicks:

```text
Load Courses
```

---

Code:

```js
async function getCourses() {

    try {

        const response = await fetch(
            "https://api.example.com/courses"
        );

        const courses = await response.json();

        console.log(courses);

    } catch(error) {

        console.log(
            "Could Not Load Courses"
        );

    }

}
```

If the internet fails:

```js
Could Not Load Courses
```

Instead of crashing.

---

# COMPLETE EXAMPLE

```js
async function getUsers() {

    try {

        console.log(
            "Loading Users..."
        );

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        users.forEach((user, index) => {

            console.log(
                `${index + 1}. ${user.name}`
            );

        });

    } catch(error) {

        console.log(
            "Could Not Fetch Users"
        );

    }

}

getUsers();
```

---

# PROMISE VS ASYNC/AWAIT

Promise Style:

```js
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
```

---

Async/Await Style:

```js
async function getData() {

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

    } catch(error) {

        console.log(error);

    }

}
```

Modern React, Next.js, Vue and Angular projects commonly use Async/Await because it is easier to read and maintain.

---

# IMPORTANT THINGS TO REMEMBER

1. JavaScript can run code asynchronously.

2. A Promise represents a future value.

3. Promise States:

```js
Pending
Fulfilled
Rejected
```

4. Promise Methods:

```js
.then()
.catch()
```

5. fetch() automatically returns a Promise.

6. response.json() also returns a Promise.

7. async makes a function return a Promise.

8. await waits for a Promise to finish.

9. await can only be used inside an async function.

10. try...catch is used for error handling.

---

# INTERVIEW QUESTIONS

Q: What is a Promise?

Answer:

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

---

Q: What are the three states of a Promise?

Answer:

```js
Pending
Fulfilled
Rejected
```

---

Q: Does fetch() return a Promise?

Answer:

Yes.

---

Q: What does async do?

Answer:

It makes a function return a Promise.

---

Q: What does await do?

Answer:

It pauses execution until a Promise resolves or rejects.

---

Q: Why use try...catch?

Answer:

To handle errors gracefully and prevent application crashes.