import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ShowBooks from "./pages/ShowBooks";
import EditBooks from "./pages/EditBooks";
import DeleteBooks from "./pages/DeleteBooks";
import CreateBooks from "./pages/CreateBooks";



const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books/create" element={<CreateBooks />} />
    <Route path="/books/details/:id" element={<ShowBooks/>} />
    <Route path="/books/edit/:id" element={<EditBooks />} />
    <Route path="/books/delete/:id" element={<DeleteBooks />} />
    {/* Define your routes here */}
  </Routes>
)

export default App;