import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoU9fvOoMXid0_uN-iFsC2S7vuIFXhDUc",
  authDomain: "newdatabase-for-project.firebaseapp.com",
  projectId: "newdatabase-for-project",
  storageBucket: "newdatabase-for-project.appspot.com",
  messagingSenderId: "244994898830",
  appId: "1:244994898830:web:6fb2d674a1626c144902df",
  measurementId: "G-94CVMFG2G5"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

googleProvider.addScope("profile");
googleProvider.addScope("email");

export { auth, googleProvider, db };
export default app;
