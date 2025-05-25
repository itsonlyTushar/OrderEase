import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import {
  loginStart,
  loginFailure,
  loginSuccess,
} from "../store/slices/authSlice";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());

    if (!email || !password) {
      dispatch(loginFailure("Email and password are required"));
      return { success: false, error: "Email and password are required" };
    }

    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (userDoc.exists()) {
      const userData = userDoc.data();

      if (userData.role === "admin" || userData.role === "superadmin") {
        dispatch(
          loginSuccess({
            user: {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || "",
            },
            role: userData.role,
          })
        );
        return { success: true, role: userData.role };
      } else {
        dispatch(loginFailure("Unauthorized: Not an admin"));
        return { success: false, error: "Unauthorized: Not an admin" };
      }
    } else {
      dispatch(loginFailure("User data not found"));
      return { success: false, error: "User data not found" };
    }
  } catch (err) {
    console.error("Login Error:", err.message);
    dispatch(loginFailure(err.message));
    return { success: false, error: err.message };
  }
};
