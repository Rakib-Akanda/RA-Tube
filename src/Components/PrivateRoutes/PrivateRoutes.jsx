import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (!loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  else if (user) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>
};
PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoutes;
