import React from "react";
import Layout from "./components/Layout/Layout";
import AuthProvider from "./contexts/use-Auth";
import CartProvider from "./contexts/use-Cart";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Layout />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;

