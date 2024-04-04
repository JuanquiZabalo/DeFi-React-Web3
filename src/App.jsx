import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { AppLayout } from "./components/ui/layouts";
import configWagmi from "./config/wagmi";
import { Home, UsuariosPrestamistas, UsuariosClientes, OperacionPrestamos, NotFound } from "./pages";
import { Route, Routes } from "react-router-dom";

console.log("Alchemy ID:", import.meta.env.VITE_ALCHEMY_ID);
console.log("Project ID:", import.meta.env.VITE_WALLETCONNECT_PROJECT_ID);
function App() {
  return (
    <>
      <WagmiConfig config={configWagmi}>
        <ConnectKitProvider theme="default" mode="ligth">
          <AppLayout>
            <Routes>
              <Route index element={<Home />} />
              <Route path="usuariosPrestamistas" element={<UsuariosPrestamistas />} />
              <Route path="usuariosClientes" element={<UsuariosClientes />} />
              <Route path="prestamos" element={<OperacionPrestamos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
