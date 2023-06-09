import { AuthProvider } from "./context/AuthProvider";
import { Layout } from "./layout";
import { AppRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
