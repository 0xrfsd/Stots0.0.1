import React from "react";

import AuthContext from "../context/auth";

import AuthRoutes from "./auth.routes";
import CorretorRoutes from "./corretor.routes";
import UsuarioRoutes from "./usuario.routes";

const Routes = () => {
  const { user } = React.useContext(AuthContext);

  return user ? (
    user.tipo === "Corretor" ? (
      <CorretorRoutes />
    ) : user.tipo === "Usuario" ? (
      <UsuarioRoutes />
    ) : null
  ) : (
    <AuthRoutes />
  );
};

export default Routes;
