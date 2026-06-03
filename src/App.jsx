import { BrowserRouter } from 'react-router-dom';
import AppProviders from './providers/AppProviders';
import Layout from './components/layout/Layout';
import AppRoutes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <Layout>
          <AppRoutes />
        </Layout>
      </AppProviders>
    </BrowserRouter>
  );
}
