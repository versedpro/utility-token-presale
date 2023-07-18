import { w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { configureChains, createConfig } from "wagmi";
import { goerli, mainnet, sepolia } from "wagmi/chains";

export const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLCONNECT_PROJECT_ID || "";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === "development" ? [goerli, sepolia] : [])],
  [w3mProvider({ projectId: walletConnectProjectId })]
);

export const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({
    chains,
    projectId: walletConnectProjectId,
  }),
  publicClient,
  webSocketPublicClient,
});

export { chains };
