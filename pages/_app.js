import '../styles/globals.css';
import '../styles/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Firebaseprovider, { Firebaseauth } from '../context/firebase';


function MyApp({ Component, pageProps }) {
  return (
  <Firebaseprovider>
  <Component {...pageProps} />
  </Firebaseprovider>

  );
}
export default MyApp
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
