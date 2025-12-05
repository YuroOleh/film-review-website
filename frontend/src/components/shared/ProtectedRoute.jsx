import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth2 } from "../../hooks/useAuth2";
import { useLocation } from "react-router-dom";

function ProtectedRoute({ getCurrentUserProp }) {
  const { getCurrentUser: getCurrentUserFromHook } = useAuth2();
  const getCurrentUser = getCurrentUserProp || getCurrentUserFromHook;

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const location = useLocation();

  useEffect(() => {
    async function check() {
      const me = await getCurrentUser();
      setUser(me);
      setLoading(false);

      if (me) {
        localStorage.setItem("user", JSON.stringify(me));
      }
    }

    check();
  }, [location.pathname, getCurrentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;