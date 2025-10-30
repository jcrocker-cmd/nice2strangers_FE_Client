// import React from "react";
// import { Navigate } from "react-router-dom";

// interface ProtectedRouteProps {
//   children: React.ReactNode;
//   role: string;
// }

// const ClientProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
//   const token = localStorage.getItem("token"); // check if JWT exists
//   const userRole = localStorage.getItem("role");

//   if (!token) {
//     // not logged in, redirect to login
//     return <Navigate to="/login" replace />;
//   }

//     if (role && userRole !== role) {
//     return <Navigate to="/dashboard" replace />;
//   }

//   // logged in, render the protected component
//   return <>{children}</>;
// };

// export default ClientProtectedRoute;
