import DashboardContent from '../components/DashboardContent';

const Dashboard = () => {
  return (
        <div className="flex-1 overflow-y-auto p-4">
          {/* Puedes usar rutas para mostrar diferentes contenidos */}
          <DashboardContent />
          <div>
          </div>
        </div>
  );
};

export default Dashboard;
