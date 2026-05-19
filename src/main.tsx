import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import '@org/ui/styles.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <motion-safe className="min-h-screen p-4">
        <p className="mb-4 text-sm text-muted-foreground">
          Standalone mode — exposed as <code>orders/App</code>
        </p>
        <App />
      </motion-safe>
    </BrowserRouter>
  </StrictMode>,
);
