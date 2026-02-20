import { RouterProvider } from "react-router"
import appRouter from "./router/app.router"
import { UserProvider } from "./context/user.context"
import { ToastContainer } from "react-toastify";

export const CanchasApp = () => {
  return (
    <UserProvider>
      <ToastContainer/>
      <RouterProvider router={appRouter} />
    </UserProvider>
  );
};