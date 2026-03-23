import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function BookLayout() {
  return (
    <>
        <h1>BookList</h1>
        <Link to="/books/1">Book 1</Link>
        <br />
        <Link to="/books/2">Book 2</Link>
        <br />
        <Link to="books/new">New Book</Link>
        <Outlet />
    </>
  )
}

/*
! * Outlet ->
* <Outlet> is a placeholder for nested routes. It allows you to render child routes inside a parent route.

* Think of it like this:

* Parent route = layout (header, sidebar, footer)
* <Outlet> = where the child route content will appear

? Without <Outlet>, child routes won’t render.
*/

export default BookLayout