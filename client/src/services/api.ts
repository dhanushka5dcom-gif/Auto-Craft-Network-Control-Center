import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: (username: string, password: string) =>
    api.post('/auth/login', { username, password }),
  register: (username: string, email: string, password: string) =>
    api.post('/auth/register', { username, email, password }),
  logout: () => api.post('/auth/logout'),
};

export const deviceService = {
  getDevices: () => api.get('/devices'),
  getDevice: (id: string) => api.get(`/devices/${id}`),
  scanNetwork: () => api.post('/devices/scan'),
  controlDevice: (id: string, action: string) =>
    api.post(`/devices/${id}/control`, { action }),
};

export const cctvService = {
  getCameras: () => api.get('/cctv/cameras'),
  getCamera: (id: string) => api.get(`/cctv/cameras/${id}`),
  captureSnapshot: (id: string) => api.post(`/cctv/cameras/${id}/snapshot`),
};

export const storageService = {
  getUsage: () => api.get('/storage/usage'),
  getFiles: () => api.get('/storage/files'),
  uploadFile: (formData: FormData) =>
    api.post('/storage/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

export default api;
