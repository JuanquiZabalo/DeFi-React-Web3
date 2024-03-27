import { createConfig } from "wagmi";
import { getDefaultConfig } from "connectkit";
import { sepolia } from "wagmi/chains";

const configWagmi = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: import.meta.env.VITE_ALCHEMY_ID, // or infuraId
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "Prestamos DeFi",
    // Redes blockchain con las que se trabajara
    chains: [sepolia]
  }),
);

export default configWagmi