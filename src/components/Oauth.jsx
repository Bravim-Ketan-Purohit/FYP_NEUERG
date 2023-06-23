import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider , getAuth, signInWithPopup} from "firebase/auth";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";

const Oauth = () => {
  const navigate = useNavigate();
  async function onGoogleClock() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //check if user already in database
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("could not Authenticate, Try Again!");
      console.log(error);
    }
  }
  return (
    <button type="button" onClick={onGoogleClock} className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-size-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-outrounded">
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Gogle
    </button>
  );
};

export default Oauth;
