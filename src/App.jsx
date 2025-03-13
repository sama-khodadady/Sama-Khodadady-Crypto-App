import Router from "router/Router";
import Layout from "components/layout/Layout";
import CoinsProvider from "src/context/CoinsContext";

function App() {
  return (
    <CoinsProvider>
      <Layout>
        <Router />
      </Layout>
    </CoinsProvider>
  );
}

export default App;
