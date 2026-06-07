import { create } from 'zustand';

interface Device {
  id: string;
  name: string;
  ip_address: string;
  mac_address: string;
  status: string;
  cpu_usage: number;
  ram_usage: number;
  storage_usage: number;
}

interface DeviceStore {
  devices: Device[];
  loading: boolean;
  setDevices: (devices: Device[]) => void;
  setLoading: (loading: boolean) => void;
  updateDevice: (id: string, device: Partial<Device>) => void;
}

export const useDeviceStore = create<DeviceStore>((set) => ({
  devices: [],
  loading: false,
  setDevices: (devices: Device[]) => set({ devices }),
  setLoading: (loading: boolean) => set({ loading }),
  updateDevice: (id: string, device: Partial<Device>) =>
    set((state) => ({
      devices: state.devices.map((d) => (d.id === id ? { ...d, ...device } : d)),
    })),
}));
