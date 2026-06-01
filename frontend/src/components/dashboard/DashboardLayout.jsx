import DashboardSidebar from './DashboardSidebar.jsx';
import DashboardNavbar from './DashboardNavbar.jsx';

export default function DashboardLayout({ children }) {
   return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="flex">
        <DashboardSidebar />

        <div className="flex-1 ml-64">
          <DashboardNavbar />

          <main className="p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
