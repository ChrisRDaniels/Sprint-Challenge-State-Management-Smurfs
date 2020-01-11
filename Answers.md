1. What problem does the context API help solve?

Context API is a way to prevent from having to prop drill as your project keeps getting more expansive.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: A plain simple object with a type and value.
Reducers: A pure function that takes the previous state and action and returns it to the new state.
Store:  A store is a plain javascript object that acts like a database and allows components to share state across a project.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the global state of the app, whereas component state is the local state within that component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is middleware that allows you to write action creators that return a function instead of an action. It can be used to delay the dispatch of an action or to make a dispatch conditional. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I would have to say that redux is my favorite state management system that we learned this sprint. I feel like in the long run it will be the most viable solution as projects become more and more layered. I also feel as though it is one of the industry standards that I would like to become very familiar with and intent to do so as we progress at lambda. 
