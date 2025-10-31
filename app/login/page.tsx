import Login from "../../components/auth/Login";
import PublicRoute from "@/middleware/publicroute";
const Login_Page = () => {
  return (
    <>
      <PublicRoute>
        <Login />
      </PublicRoute>
    </>
  );
};

export default Login_Page;
