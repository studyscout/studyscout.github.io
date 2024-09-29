import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authen, prov } from "../scripts/firestore";  // Import Firebase config

// Function to handle Google sign-in
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(authen, prov);
    
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;

    // The signed-in user info.
    const user = result.user;

    console.log("User Info:", user);
    console.log("Access Token:", token);
  } catch (error: any) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData?.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.error("Error during sign-in:", errorCode, errorMessage, email, credential);
  }
};
