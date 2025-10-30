// import React from "react";
// import { Navigate } from "react-router-dom";

// interface ProtectedRouteProps {
//   children: React.ReactNode;
//   role: string;
// }

// const AdminProtectedRoute: React.FC<ProtectedRouteProps> = ({
//   children,
//   role,
// }) => {
//   const token = localStorage.getItem("token");
//   const userRole = localStorage.getItem("role");

//   if (!token) {
//     // not logged in, redirect to login
//     return <Navigate to="/adminlogin" replace />;
//   }

//   if (role && userRole !== role) {
//     return <Navigate to="/client-dashboard" replace />;
//   }

//   // logged in, render the protected component
//   return <>{children}</>;
// };

// export default AdminProtectedRoute;
