import { Button } from "flowbite-react";

import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const GoogleSignUpButton = ({ text, navigate, showToast }) => {
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        if (result.user) {
          showToast("Your are successfully logged in");
          sessionStorage.setItem("email", result.user.email);
          sessionStorage.setItem("mName", result.user.displayName);
          sessionStorage.setItem("auth", true);
          sessionStorage.setItem("uid", result.user.uid);
          navigate("/home");
        }

      });
      // console.log("sign");
      // const result = await signInWithPopup(auth, googleProvider);
      // const { _tokenResponse } = result;
      // const user = result.user;
      // const token = await user.getIdToken(); // Get the user's token

      // const postURL = `${serverURL}/api/google/auth`;

      // const res = await axios.post(postURL, {
      //   token,
      //   name: _tokenResponse.fullName,
      //   email: _tokenResponse.email,
      // });

      // console.log(res);

      // if (res.data.success) {
      //   console.log("5");
      //   showToast(res.data.message);
      //   sessionStorage.setItem("email", res.data.userData.email);
      //   sessionStorage.setItem("mName", res.data.userData.mName);
      //   sessionStorage.setItem("auth", true);
      //   sessionStorage.setItem("uid", res.data.userData.id);
      //   sessionStorage.setItem("type", res.data.userData.type);
      //   navigate("/home");
      // } else {
      //   showToast(res.data.message);
      // }
    } catch (error) {
      showToast("Google sign-in failed");
    }
  };

  return (
    <Button
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center text-center dark:bg-white dark:text-black bg-black text-white font-bold rounded-none w-full enabled:hover:bg-black enabled:focus:bg-black enabled:focus:ring-transparent dark:enabled:hover:bg-white dark:enabled:focus:bg-white dark:enabled:focus:ring-transparent"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWKGr_E3qM7B-B-_xwIZyF12n3sK3eM1q5w&s"
        alt="Google"
        className="w-6 h-6 mr-2 rounded-xl"
      />
      {text}
    </Button>
  );
};

export default GoogleSignUpButton;
