import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import BookList from './pages/BookList';
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import BookLayout from "./pages/BookLayout";
import NotFound from "./pages/NotFound";

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books" element={<BookLayout />}>

          {/* 
          ->  Index parameter is used to tell the route component that the route for the
              particular route component matches the parent route component. 
          ->  Used to render the parent route component inside a nested routes.
          */}

          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>

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