import Router from "router/Router";
import Layout from "components/layout/Layout";
import CoinsProvider from "src/context/CoinsContext";

function App() {
  return (
    <Layout>
      <CoinsProvider>
        <Router />
      </CoinsProvider>
    </Layout>
  );
}

export default App;
