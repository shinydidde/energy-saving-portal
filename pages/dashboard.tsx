import Dashboard from '../components/Dashboard';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Dashboard />
      </div>
    </Layout>
  );
}
