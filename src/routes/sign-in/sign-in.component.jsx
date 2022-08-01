import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  useEffect(() => {
    getRedirectResult(auth).then((response) => {
      if (response) {
        createUserDocumentFromAuth(response.user);
      }
    });
  }, []);

  //app unmounts when signInWithGoogleRedirect is called

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default Signin;
