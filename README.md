# Project Overview

API service architecture using **Axios** and **React Router**.

Key features include:

- A reusable, typed `BaseApi` class that supports injecting global query parameters into every HTTP request.
- Organized service classes (e.g., `UsersService`) that encapsulate domain-specific API calls.
- Integration with React Router loaders for efficient and declarative data fetching.
- Focus on clean separation of concerns, strong type safety, and maintainability.

This setup provides a solid foundation for building robust, scalable React applications with clear API handling patterns.


## Configuration

Configure the base URL in the config file, for example:

```js
const config = {
  apiBaseUrl: "https://api.example.com",
};


