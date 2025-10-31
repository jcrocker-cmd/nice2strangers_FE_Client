"use client";
import React from "react";
import { useRouter } from "next/navigation";
interface ProtectedRouteProps {
  children: React.ReactNode;
  role: string;
}

const ClientProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  role,
}) => {
  const router = useRouter();
  const token = localStorage.getItem("token"); // check if JWT exists
  const userRole = localStorage.getItem("role");

  if (!token) {
    // not logged in, redirect to login
    router.replace("/login");
    return;
  }

  if (role && userRole !== role) {
    router.replace("/dashboard");
  }

  // logged in, render the protected component
  return <>{children}</>;
};

export default ClientProtectedRoute;
