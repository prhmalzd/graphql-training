import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import HomePage from "./pages/HomePage";
import AuthorProfile from "./pages/AuthorProfile";
import BookProfile from "./pages/BookProfile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="authors/:id" element={<AuthorProfile />} />
      <Route path="books/:id" element={<BookProfile />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  );
};
export default App;
