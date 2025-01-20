import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useUi } from "../UiContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { login } = useUi();

  if (login === true) {
    return <>{children}</>;
  } else if (login === false) {
    return <Navigate to="/" />;
  } else {
    return null; // Use null para representar nenhum conteúdo
  }
};

export default ProtectedRoute;
