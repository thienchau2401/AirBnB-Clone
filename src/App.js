import { Route, Routes } from "react-router-dom";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Room from "./pages/Room/Room";
function App() {
  return (
    <>
      <Routes>
        {/* User page */}
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<Home />} />
          <Route path="/room" element={<Room />} />
        </Route>
        {/* Admin page */}

        {/* Sign in */}
        <Route path="/sign-in" element={<SignIn />} />
        {/* Sign up */}
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
