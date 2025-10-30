export const getUser = () => {
  return {
    email: localStorage.getItem("email"),
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    role: localStorage.getItem("role"),
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("userId"),
  };
};

export const setUser = (user: {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  token: string;
  userId: string;
}) => {
  localStorage.setItem("email", user.email);
  localStorage.setItem("firstName", user.firstName);
  localStorage.setItem("lastName", user.lastName);
  localStorage.setItem("role", user.role);
  localStorage.setItem("token", user.token);
  localStorage.setItem("userId", user.userId);
};
