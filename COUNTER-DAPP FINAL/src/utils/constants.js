// Smart Contract Constants
// Contains the contract address and ABI for the Counter smart contract

export const constants = {
    // Contract address on Anvil local network
    counterAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    
    // Contract ABI (Application Binary Interface)
    // Defines the available functions: dec(), get(), and inc()
    counterABI: [
        { 
            "type": "function", 
            "name": "dec", 
            "inputs": [], 
            "outputs": [], 
            "stateMutability": "nonpayable" 
        }, 
        { 
            "type": "function", 
            "name": "get", 
            "inputs": [], 
            "outputs": [{ 
                "name": "", 
                "type": "uint256", 
                "internalType": "uint256" 
            }], 
            "stateMutability": "view" 
        }, 
        { 
            "type": "function", 
            "name": "inc", 
            "inputs": [], 
            "outputs": [], 
            "stateMutability": "nonpayable" 
        }
    ]
}