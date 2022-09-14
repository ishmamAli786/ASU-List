import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  Home,
  Product,
  ProductAllimage,
  Signin,
  ForgetPassword,
  Signup,
} from "./module";
import { PrivateRoute, AccessDenied,Navbar } from "./component/Common";
import SignupSecondStep from "./module/SignupSecondStep/SignupSecondStep";

const Routess = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Signin />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product/images" element={<ProductAllimage />} />
        <Route path="/signupStep" element={<SignupSecondStep />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
        </Route>
        <Route
          path="/not-found"
          element={<h1 className="text-white">Not found</h1>}
        />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Router>
  );
};

export default Routess;
