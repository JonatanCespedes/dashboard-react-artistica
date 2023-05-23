import { Layout } from "./layout";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <div className="App">
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
}

export default App;
