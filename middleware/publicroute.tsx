"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface PublicRouteProps {
  children: React.ReactNode;
  redirectTo?: string; // default redirect if logged in
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
  redirectTo = "/dashboard",
}) => {
  const router = useRouter();
  const token = localStorage.getItem("token"); // check if JWT exists

  if (token) {
    router.replace(redirectTo);
    return;
  }

  // not logged in, render the public page
  return <>{children}</>;
};

export default PublicRoute;
