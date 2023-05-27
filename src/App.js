import { Layout } from "./layout";
import { AppRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </div>
  );
};

export default App;
