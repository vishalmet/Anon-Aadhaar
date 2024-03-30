import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [polygonMumbai],
  ssr: true,
});
import {
  AnonAadhaarProvider,
  useAnonAadhaar,
  LogInWithAnonAadhaar,
  AnonAadhaarProof,
} from "@anon-aadhaar/react";

import { useEffect } from "react";

const queryClient = new QueryClient();

function Navbar() {
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <AnonAadhaarProvider>
            <div>
              <ConnectButton />
              <LogInWithAnonAadhaar />
              <p>{anonAadhaar?.status}</p>
              <div>
                {anonAadhaar?.status === "logged-in" && (
                  <>
                    <p>✅ Proof is valid</p>
                    <AnonAadhaarProof
                      code={JSON.stringify(
                        anonAadhaar.anonAadhaarProofs,
                        null,
                        2
                      )}
                    />
                  </>
                )}
              </div>
            </div>
          </AnonAadhaarProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default Navbar;
