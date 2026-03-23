import { Routes, Route, Link, useRoutes, NavLink } from "react-router-dom";
import Home from './pages/Home';
import BookList from './pages/BookList';
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import BookLayout from "./pages/BookLayout";
import NotFound from "./pages/NotFound";
import BookRoutes from "./BookRoutes";
import About from "./pages/About";

/*
! * Routes -> 
* Routes is a component in the react-router-dom which enables us to define all the route mapping in the react app.
* only one matching route is rendered at a time by default.

! * Route -> 
* route is the building block of navigation. It tells react what component to show for a specific URL path.
* We provide the following properties of the Route component
? 1. path -> 
* URL segment to match
? 2. element ->
* react component to render when the path matches
? 3. index (optional) ->
* special prop to default nested route

! * Link ->
* It is a component which is used to navigate between pages without reloading the browser.
* we specific following property of the Link component
? 1. to ->
* the URL path to navigate to
*/

function App() {

  /*
  ! * useRoutes Hook ->
  * This is a hook for declaring your routes as JavaScript objects instead of JSX <Route>
  * components. It’s especially useful for nested routes and dynamic route configurations.
   
  ? useRoutes takes an array of route objects.
  ?  Each object can have:
    1. path → the URL path.
    2. element → the React component to render.
    3. children → nested routes.
  ?  The useRoutes hook returns React elements, which you render directly. 
  */
  let element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: <NotFound />,
    }
  ])

  return (
    <>
      {/* 
      Location is used to hard code the a location (url),
      now it doesn't matter which url i go to it will show everywhere.
      */}
      <Routes location="/books">
        <Route path="/books" element={<h1>Extra Content</h1>}/>
      </Routes>

      <nav>
        <ul>
          {/* 
            Replace is used replace the previous link, instead of going back to the 
            previous page it will go back 2 pages, because the page will not be in the history. 
          */}
          {/* 
            reloadDocument will reload the entire page, instead of changing the content
            inside the route.
          */}
          <li><Link to="/" replace>Home</Link></li>
          <li>

            {/*  
              In react-router-dom, a  NavLink is a special type of navigation component used to
              create links between different routes in a React application—but with extra awareness of the current route.

              Core Idea

              A NavLink works like a regular link (similar to <a> or Link), but it can detect whether
              it matches the current URL. When it does, it automatically applies specific styling or classes.
              
            */}

            <NavLink style={({ isActive }) => {
              return isActive ? { color : "red" } : {}
            }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </nav>

      { element } 

      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/books" element={<BookLayout />}> */}

          {/* 
          ->  Index parameter is used to tell the route component that the route for the
              particular route component matches the parent route component. 
          ->  Used to render the parent route component inside a nested routes.
          */}

          {/* 
          * ! for nesting different routes together we use the url with /* 
          * ! so that it matches any routes that come afterward
          */}
          <Route path="/books/*" element={<BookRoutes />} />

          {/* <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} /> */}

        {/* <Route path="/books" element={<BookList />} />

        {/* Dynamic Routes 
        <Route path="/books/:id" element={<Book />} />

        <Route path="/books/:new" element={<NewBook />}></Route> 
        */}

        {/* 404 Route */}
        <Route path="*" element={<NotFound />}/>

      </Routes>
    </>
  )
}

/*
! * Dynamic Route ->
* dynamic routes let you create URLs that contain variable segments, so your app can handle 
* pages like user profiles, blog posts, or products without defining every single URL manually.

* Dynamic routes use parameters in the path, written with a colon (:).
* Example: /users/:id

? Here, :id is a placeholder for any user ID.
? 1. /users/1 → id = 1
? 2. /users/42 → id = 42
*/

export default App