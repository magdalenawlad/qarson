## To run application locally:
npm install
npm start

#Hello!

## Introduction

We ask you to create a JS application. UI elements should be styled with css or sass/scss.

We would like to receive the solution within **5 days**.

### Application description

We need an application that will present data about cars (based on file **_data.json_**) as tiles on the page.

A tile consists of:

- image
- make
- model
- engine type
- model name (pattern: make model engine type)
- **available** (two possible values: yes/no)

If a car is not available, its tile should show this information.

We would like to have a button changing availability, such as `add to cart` on each tile.
Clicking on that button should change the **availability** state of that car.

Also, each tile should have a **delete** button to remove a car from the list.

The application should be adjusted to desktop browsers and mobile devices.

The application should be covered with **tests**.

The preferred stack is ReactJS with Typescript. Optionally, if you don't know react you can use Typescript or vanilla JS. 
We prefer Jest and React Testing Library in tests.

### View

An example of tile design is shown in **_sample_tiles.png_** file, but we leave it up to you to decide on the final look.
A tile should contain:

- image - if it's available,
- make,
- model,
- engine type,
- delete button,
- button to change availability.

A view of an unavailable car should stand out from the rest, e.g. red outline.

### Resources

You can find two files in the repository:
- _data.json_ is the source of the data
- _sample_tiles.png_ is the view sample

### Evaluation criteria

We will evaluate your code on:

- knowledge of the: JS, TypeScript and ReactJS
- structure and organization of your code in files
- taking care about code readability - code should be written according to https://standardjs.com/
- quality of written tests
- compliance of the solution with the task content

### Tips

- if you use a css preprocessor like sass you can use webpack to build them. However,
  if you use something else to build the css files, you should add a description of how to build them in the README
- you need asynchronous JavaScript to retrieve data from file (you can use the native approach or a third party library)
- css code style - we prefer two spaces as indentation
- js code style- try to follow the standardJS ``https://standardjs.com/``
- if the description of the task is not clear to you, please contact us via e-mail ``developers.php@edpauto.com``

### How to work with the repository

We ask you to create a copy (NOT FORK) of the current repository on bitbucket / github / gitlab and send the repository address to: developers.php@edpauto.com.

You should create a branch derived from the main branch. The team will perform code review of your application.

Good luck