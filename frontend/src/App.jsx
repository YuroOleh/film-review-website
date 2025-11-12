import { Navigate, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Films from "./pages/Films";
import Profile from "./pages/Profile";
import FilmDetails from "./pages/FilmDetails";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import Reviews from "./pages/Reviews";
import ReviewDetails from "./pages/ReviewDetails";
import Discussions from "./pages/Discussions";
import DiscussionDetails from "./pages/DiscussionDetails";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/shared/ProtectedRoute";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/films" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/films" element={<Films />} />
        <Route path="/films/details/:id" element={<FilmDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/details" element={<NewsDetails />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/details" element={<ReviewDetails />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/discussions/details" element={<DiscussionDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;