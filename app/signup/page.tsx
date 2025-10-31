import Signup from "../../components/auth/Signup";
import PublicRoute from "@/middleware/publicroute";
const Signup_Page = () => {
  return (
    <>
      <PublicRoute>
        <Signup />
      </PublicRoute>
    </>
  );
};

export default Signup_Page;
