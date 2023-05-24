import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const Layout = ({children}) => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <Header />
        <div id="content">{children}</div>

        <Footer />
      </div>
    </div>
  );
};
