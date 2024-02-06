# MERN TodoList Application

This project is a full-stack TodoList application built using the MERN (MongoDB, Express.js, React, Node.js) stack with Nx monorepo. The monorepo structure allows for better organization and scalability of the codebase.

## Table of Contents

- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Running Tests](#running-tests)
  - [Linting and Code Formatting](#linting-and-code-formatting)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project follows an Nx monorepo structure, organized into the following packages:

- `mern-todolist-api`: Backend API built with Express.js and Node.js.
- `mern-todolist`: Frontend React application.
- `mern-todolist-api-e2e`: End-to-End (E2E) tests for the entire application.

## Dependencies

The project uses various dependencies and devDependencies. Notable ones include:

- [axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js.
- [express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [mongoose](https://mongoosejs.com/): Elegant MongoDB object modeling for Node.js.
- [react](https://reactjs.org/): A JavaScript library for building user interfaces.
- [jest](https://jestjs.io/): JavaScript Testing Framework.
- [eslint](https://eslint.org/): Pluggable JavaScript linter.
- [prettier](https://prettier.io/): Opinionated code formatter.

For a complete list of dependencies, refer to the `package.json` files in each package.

## Development

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn
- MongoDB Atlas account (for the database)

### Installation

Clone the repository:

```bash
git clone https://github.com/laitoussyassine/mern-todolist.git
```

### Install dependencies:

```
  npm install
```

### Running Tests:

```
  npm test
```

### Environment Variables

Create a `.env` file in the root of the project with the following variables:

```
  MONGO_URI=your-mongodb-uri
  PORT=your-mongodb-port
  DB_NAME=your-database-name
```

## Contributors

<table width="100%"><tr align="left">

  <td align="center"><a href="https://github.com/laitoussyassine"><img src="https://avatars.githubusercontent.com/laitoussyassine" width="120px;"alt="yassine laitouss
"/><br/><sub><b>yassine laitouss
 </b></sub></a></td>
  <td align="center"><a href="https://github.com/houssain-ijioui"><img src="https://avatars.githubusercontent.com/u/70816115?v=4" width="120px;"alt="houssain-ijioui
"/><br/><sub><b>houssain ijioui
 </b></sub></a></td>

</tr></table>

## License

This project is licensed under the MIT `License` - see the LICENSE file for details.

`Feel free to adapt this template based on your specific project details.`
