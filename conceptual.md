### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

The purpose of React Router is to provide declarative routing for React applications, allowing for dynamic changes to the URL and rendering of different components based on the URL.

- What is a single page application?

A single page application (SPA) is a web application that loads and updates only parts of the page dynamically, instead of reloading the entire page for each user interaction.

- What are some differences between client side and server side routing?

Client-side routing is handled by JavaScript in the user's browser, while server-side routing is handled by the web server. Client-side routing can result in a faster and more seamless user experience, while server-side routing may be more secure and easier to implement for certain types of applications.

- What are two ways of handling redirects with React Router? When would you use each?

Two ways of handling redirects with React Router are the <Redirect> component and the history.push() method. The <Redirect> component is useful for redirecting users based on certain conditions, while history.push() is useful for programmatic redirects.

- What are two different ways to handle page-not-found user experiences using React Router?

Two different ways to handle page-not-found user experiences using React Router are to render a custom component using the <Route> component's render prop when no other routes match the URL, or to use the <Switch> component to render a default "404" component when no other routes match.

- How do you grab URL parameters from within a component using React Router?

To grab URL parameters from within a component using React Router, you can use the useParams() hook, which returns an object containing key-value pairs of the URL parameters.

- What is context in React? When would you use it?

Context in React is a way to pass data down the component tree without having to manually pass props through each component. It can be useful for providing global data such as themes or user information.

- Describe some differences between class-based components and function
  components in React.

Syntax: Class-based components use the class keyword, function components use the function keyword.
State management: Class-based components use the setState method, function components use the useState hook.
Lifecycle methods: Class-based components have lifecycle methods, function components use the useEffect hook.
Performance: Function components are generally considered more performant.

- What are some of the problems that hooks were designed to solve?

Reusing logic between components.
Reducing complexity.
Enabling more flexible component composition.
