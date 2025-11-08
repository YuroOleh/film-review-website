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
      <Route path="/films" element={<ProtectedRoute><Films /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/> 
      <Route path="/films/details" element={<ProtectedRoute><FilmDetails /></ProtectedRoute>} />
      <Route path="/news" element={<ProtectedRoute><News /></ProtectedRoute>} />
      <Route path="/news/details" element={<ProtectedRoute><NewsDetails /></ProtectedRoute>} />
      <Route path="/reviews" element={<ProtectedRoute><Reviews /></ProtectedRoute>} />
      <Route path="/reviews/details" element={<ProtectedRoute><ReviewDetails /></ProtectedRoute>} />
      <Route path="/discussions" element={<ProtectedRoute><Discussions /></ProtectedRoute>} />
      <Route path="/discussions/details" element={<ProtectedRoute><DiscussionDetails /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;