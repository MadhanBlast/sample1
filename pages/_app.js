// /pages/_app.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { ErrorProvider } from "@/contexts/ErrorContext"; // Import the ErrorProvider
import NetworkError from "@/components/NetworkError"; // Import the NetworkError component

export default function App({ Component, pageProps }) {
  return (
    <ErrorProvider>
      <NetworkError /> {/* Show the error message globally */}
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ErrorProvider>
  );
}
