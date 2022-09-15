import React from "react";
import Home from "./pages/home/Home";
import Mail from "./pages/mail/Mail";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import '@rainbow-me/rainbowkit/styles.css';
import "./App.css";
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';


const { chains, provider, webSocketProvider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({ apiKey: 'WdciNah4y46jGd1XSvj6RWWS-CS636VV' }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: '3mail',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})


function App() {
  return (
    <div className="App">
      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mail/*" element={<Mail />} exact />
        </Routes>
      </Router>
      </RainbowKitProvider>
    </WagmiConfig>
    </div>
  );
}

export default App;
