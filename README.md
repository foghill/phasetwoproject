# Rick and Morty Wikipedia

## Packages used are:

[Bootstrap](https://getbootstrap.com/)

[Sass](https://www.npmjs.com/package/sass)

Sass helps create custom stylesheets for components, here is how to [add sass to react](https://medium.com/nerd-for-tech/add-sass-to-your-react-app-in-2021-here-is-how-c7260c323a5a)

[React-Router-DOM](https://www.npmjs.com/package/react-router-dom)

[React Paginate](https://www.npmjs.com/package/react-paginate)

Paginate is an awesome package which helps create a page navigation bar

## Using the [Rick and Morty API](https://rickandmortyapi.com/)

This project was built using this awesome comprehensive API.

It is split up into a few different components including:

### Homepage

The Homepage is the entry point for the app, and acts as a Character page. A Filter component is displayed along the left column which allows a search functionality to isolate across [Status,Species,Gender]

A Navbar displays the other components: Episode and Location.

### Characters Cards

Clicking on a character will bring up another component: their specific character attributes

This includes a dynamic button which renders green if the character is currently alive in the series, or red if the character is dead. The other attributes pulled from the API are Gender, Origin, Location and Species.

### Episode

On this component, an accordion on the left hand side allows one to choose any episode across all 51. Depending on the episode chosen, the characters that appear in that particular episode will populate the page. Character cards can also be accessed through this interface.

### Location

Similarly to the episode page, an accordion on the left hand page appears, this time allowing the user to select among all 126 known locations in the series. Once a location is chosen, all the characters currently residing in this particular location will populate, and can also be accessed directly through their Character Card.
