# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a React-based decentralized counter application (DApp) that interacts with an Ethereum smart contract on the Anvil local development network.

### Core Architecture

**Frontend Stack:**
- React 19 with Vite for fast development
- Wagmi v2 for Ethereum interactions
- Reown AppKit for wallet connection UI
- Tailwind CSS v4 for styling
- Tanstack React Query for blockchain data caching

**Blockchain Integration:**
- Uses Anvil local testnet (part of Foundry)
- Contract address: `0x5FbDB2315678afecb367f032d93F642f64180aa3`
- Simple counter contract with `inc()`, `dec()`, and `get()` functions

### Key Components

**AppKitProvider** (`src/providers/AppkitProvider.jsx`):
- Wraps app with Web3 functionality
- Configures wallet connections, supported networks, and React Query
- Project ID: `7ca7cf94ee5b1caba51b405ce99386f0`

**CounterDApp** (`src/components/CounterDapp.jsx`):
- Main application component
- Handles wallet connection state
- Manages contract read/write operations
- Displays transaction status and current counter value

**Configuration:**
- `src/utils/constants.js` - Contract address and ABI
- `src/utils/viem.js` - Public client for blockchain reads
- Contract ABI includes three functions: `dec()`, `get()`, `inc()`

### Development Setup

The application expects:
1. Anvil local blockchain running
2. Counter smart contract deployed at the specified address
3. Wallet (e.g., MetaMask) configured for local network

### State Management

- Uses Wagmi hooks (`useReadContract`, `useWriteContract`, `useAccount`)
- Transaction status tracked in local component state
- Real-time counter updates via contract reads