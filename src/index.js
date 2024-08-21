import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BackDrop from './components/Backdrop'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<BackDrop />}>
    <App />
    </React.Suspense>
  </React.StrictMode>
);
 