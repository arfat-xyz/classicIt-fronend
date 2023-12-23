import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./config/firebase";
import { useDispatch } from "react-redux";
import { login } from "./redux/user/userSlice";

export default function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        })
      );
    } else {
      // User is signed out.
      console.log("User is signed out");
    }
  });
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer autoClose={5000} pauseOnHover draggable theme="dark" />
    </>
  );
}
