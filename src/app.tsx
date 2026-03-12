import { RouterProvider } from "react-router"
import appRouter from "./router/app.router"
import { UserProvider } from "./context/user.context"
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const CanchasApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ToastContainer />
        <RouterProvider router={appRouter} />
      </UserProvider>
    </QueryClientProvider>
  );
};