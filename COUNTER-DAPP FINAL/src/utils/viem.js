// Viem Public Client Configuration
// Creates a public client for reading blockchain data and waiting for transaction receipts
import { createPublicClient, http } from "viem";
import { anvil } from "viem/chains";

// Public client for interacting with the Anvil local blockchain
// Used for reading contract data and monitoring transaction status
export const publicClient = createPublicClient({
    chain: anvil, // Connected to Anvil local development network
    transport: http() // Uses HTTP transport for communication
})