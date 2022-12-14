import React from 'react';
import ReactDOM from 'react-dom/client';
import { TopPage } from './components/pages/TopPage';
import { RecoilRoot } from 'recoil';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <TopPage />
    </RecoilRoot>
  </React.StrictMode>,
);
