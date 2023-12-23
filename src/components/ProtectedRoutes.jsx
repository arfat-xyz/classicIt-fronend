import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectUser } from "../redux/user/userSlice";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  const { email } = useSelector(selectUser);
  if (!email) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
