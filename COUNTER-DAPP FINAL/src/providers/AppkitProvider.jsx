// AppKit Provider Component
// Sets up Web3 wallet connection infrastructure using Reown AppKit
import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import { anvil, arbitrum, mainnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// Setup React Query client for caching blockchain data
const queryClient = new QueryClient()

// Project ID from Reown Cloud (https://cloud.reown.com)
const projectId = '7ca7cf94ee5b1caba51b405ce99386f0'

// Metadata for the wallet connection modal
const metadata = {
    name: 'Counter DApp',
    description: 'A simple decentralized counter application',
    url: 'https://example.com', // Should match your domain in production
    icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Configure supported networks (using Anvil for local development)
const networks = [anvil]

// Create Wagmi adapter with network configuration
const wagmiAdapter = new WagmiAdapter({
    networks,
    projectId,
    ssr: true // Enable server-side rendering support
})

// Initialize AppKit modal with configuration
createAppKit({
    adapters: [wagmiAdapter],
    networks,
    projectId,
    metadata,
    features: {
        analytics: true // Enable usage analytics
    }
})

// Provider component that wraps the app with Web3 functionality
// Provides wallet connection, blockchain queries, and state management
export function AppKitProvider({ children }) {
    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}