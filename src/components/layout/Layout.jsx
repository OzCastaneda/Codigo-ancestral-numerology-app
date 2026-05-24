import Header from './Header';
import AppFooter from './AppFooter';
import Toast from './Toast';

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />
      <Header />
      <main className="glass-container">{children}</main>
      <AppFooter />
      <Toast />
    </div>
  );
}
