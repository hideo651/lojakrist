import { Navigate } from "react-router-dom";
import { useUi } from "../UiContext";

const ProtectedRoute = ({ children }: any) => {
  const { login } = useUi();

  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/" />;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
