import { Route, Routes, } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { TodoRoutes } from "../todo/routes/TodoRoutes";

export const AppRouter = () => {
  return (
  <Routes>
    <Route path="/auth/*" element={<AuthRoutes/>}/>
    <Route path="/*" element={<TodoRoutes/>} />
  </Routes>);
};
