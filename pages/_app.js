import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PostProvider } from "@/context/PostContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Topbar />
      <PostProvider>
        <Component {...pageProps} />
      </PostProvider>
      <Footer />
    </>
  );
}
