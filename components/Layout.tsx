// components/Layout.tsx
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  hideNavbar?: boolean; // Flag to hide navbar if necessary
}

export default function Layout({ children, hideNavbar = false }: LayoutProps) {
  return (
    <>
      {!hideNavbar && <Navbar />} {/* Only render the Navbar if `hideNavbar` is false */}
      <main>{children}</main>
    </>
  );
}
