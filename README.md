# Level 2 capstone project

This online store is a demonstration of all that I have learned about frontend development with React so far.

---

## State management

I've utilised global state management through redux, and manipulation of localStorage through Redux-persist.
Doing so allows the user to interact with the page in a fluid, intuitive way, while storing all their information - login state, cart state - so that it persists
between page refresh

## Form validation

The user can register, and log in to my online store all while the inputs are cleanly and efficiently validated through the use of Formik and Yup.
These libraries allow me to create custom validation logic, like for the registration form where I've made sure a user cannot register with an existing email,
while giving me easy access to simple validation schema with custom error messages.

## Additional functionality

On top of what was required of me, I elected to add a theme toggle switch - allowing the user to customize the page to their preffered theme, and a search bar, so that the user can browse products directly.
(NOTE: I decided against making individual product pages for this app, simply because there wasn't much product information to display and I think it behaves nicer without them.)
