import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

/*
! * useParams() ->
* useParams() is a hook provided by react-router-dom that lets your React component access the dynamic segments (parameters) of the URL.

* Think of it as a way to grab the values from URLs like /user/123 or /post/45/comments.

? How it works ->
* 1. In your route, you define a parameter using a colon ::
? <Route path="/user/:id" element={<UserPage />} />

* Here, :id is the route parameter.

* 2. In your component, call useParams(): code //
? import { useParams } from "react-router-dom";

? function UserPage() {
?   const params = useParams(); // returns an object of all params
?   console.log(params); // { id: "123" } if URL is /user/123
? 
?   return <h1>User ID: {params.id}</h1>;
? }

* useParams() returns an object.
* Keys in that object match the names in your route (:id, :postId, etc.).
* Values are always strings, even if the URL looks numeric.
*/

function Book() {
  const { id } = useParams()
  const obj = useOutletContext()
  return (
    <h1>Book { id } { obj.hello } </h1>
  )
}

export default Book