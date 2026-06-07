import { useEffect, useState } from 'react';
import { deviceService, cctvService, storageService } from '../services/api';

export default function Dashboard() {
  const [stats, setStats] = useState({
    devices: 0,
    cameras: 0,
    storage: { total: 0, used: 0, free: 0 },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [devicesRes, camerasRes, storageRes] = await Promise.all([
          deviceService.getDevices(),
          cctvService.getCameras(),
          storageService.getUsage(),
        ]);

        setStats({
          devices: devicesRes.data.length,
          cameras: camerasRes.data.length,
          storage: storageRes.data,
        });
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold">Dashboard</h1>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Connected Devices */}
          <div className="glass p-6 rounded-xl">
            <div className="text-5xl font-bold text-primary mb-2">
              {stats.devices}
            </div>
            <p className="text-gray-400">Connected Devices</p>
          </div>

          {/* Cameras */}
          <div className="glass p-6 rounded-xl">
            <div className="text-5xl font-bold text-secondary mb-2">
              {stats.cameras}
            </div>
            <p className="text-gray-400">CCTV Cameras</p>
          </div>

          {/* Storage */}
          <div className="glass p-6 rounded-xl">
            <div className="text-5xl font-bold text-warning mb-2">
              {Math.round((stats.storage.used / stats.storage.total) * 100)}%
            </div>
            <p className="text-gray-400">Storage Used</p>
            <p className="text-sm text-gray-500 mt-2">
              {stats.storage.used} / {stats.storage.total} GB
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
