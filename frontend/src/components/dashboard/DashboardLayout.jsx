import { useState } from 'react';

import DashboardSidebar from './DashboardSidebar.jsx';
import DashboardNavbar from './DashboardNavbar.jsx';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 text-white">

      <DashboardSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 lg:ml-64">

        <DashboardNavbar
          setSidebarOpen={setSidebarOpen}
        />

        <main className="p-4 md:p-6 lg:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}
