// Main application component
// Wraps the Counter DApp with the AppKit provider for Web3 functionality
import CounterDApp from './components/CounterDapp'
import { AppKitProvider } from './providers/AppkitProvider'

function App() {
  return (
    <AppKitProvider>
      <CounterDApp />
    </AppKitProvider>
  )
}

export default App
