import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { useState } from "react";
import { AppLayout } from "./components/ui/layouts";
import configWagmi from "./config/wagmi";
import { Home } from "./pages";

console.log('Alchemy ID:', import.meta.env.VITE_ALCHEMY_ID)
console.log('Project ID:', import.meta.env.VITE_WALLETCONNECT_PROJECT_ID)
function App() {
  return (
    <>
      <WagmiConfig config={configWagmi}>
        <ConnectKitProvider theme="default" mode="ligth">
          <AppLayout>
            <Home/>
          </AppLayout>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
