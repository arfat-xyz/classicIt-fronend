import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../config/firebase";
import { useDispatch } from "react-redux";
import { login } from "../redux/user/userSlice";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signinOut = async () => {
    await signOut(auth);
    dispatch(
      login({
        email: null,
        uid: null,
        displayName: null,
        photoUrl: null,
      })
    );
    navigate("/signin");
  };
  signinOut();
  return <>Redirecting...</>;
};

export default Logout;
