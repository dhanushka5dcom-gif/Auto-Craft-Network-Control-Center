# Auto Craft Network Control Center

**Enterprise Local Network Management System v1.0**

## Overview

Auto Craft Network Control Center is a self-hosted, enterprise-grade local network management application running on a Main Server PC. Monitor, manage, and control all devices connected to your Wi-Fi/LAN network including PCs, iPads, printers, CCTV systems, NVRs, routers, and shared storage devices from a single centralized dashboard.

## Key Features

### 🌐 Network Discovery & Monitoring
- **Automatic Device Discovery**: Real-time detection of all connected devices
- **IP & MAC Tracking**: Monitor device network addresses
- **Hostname & OS Detection**: Identify device types and operating systems
- **Network Topology Map**: Visual representation of network structure
- **Online/Offline Monitoring**: Real-time device status tracking

### 💻 Device Management
- **Supported Devices**: Windows PC, Laptop, iPad, Android, Router, Switch, Printer, NVR, DVR, IP Camera, External HDD, NAS Storage
- **Performance Monitoring**: CPU, RAM, Storage, Network usage tracking
- **Device Grouping**: Organize devices by location or type
- **Remote Control**: Wake-on-LAN, Restart, Shutdown, Remote Messaging

### 📹 CCTV Monitoring
- **NVR/DVR Auto-Detection**: Automatic discovery of recording devices
- **IP Camera Integration**: ONVIF & RTSP protocol support
- **Live View**: Real-time camera feeds
- **Multi-Camera Grid**: View multiple cameras simultaneously
- **Camera Groups**: Organize by location (Workshop, Reception, Office, Paint Booth, Parking, Warehouse)
- **Snapshot Capture**: Save camera snapshots

### 📦 File Server & Storage Management
- **Central Storage**: Unified file management
- **Shared Folders**: Permission-based access control
- **Upload/Download**: Easy file transfer
- **Search Functionality**: Quick file location
- **Storage Monitoring**: Real-time storage usage alerts
- **Backup Management**: Manual and scheduled backups

### 🔐 Security & Access Control
- **User Authentication**: Secure login system
- **Role-Based Permissions**: Administrator, Manager, Viewer roles
- **Audit Logs**: Track all user actions
- **Access Monitoring**: Monitor device access patterns

### 📊 Real-time Dashboard
- **Connected Devices Count**: Live device inventory
- **Network Health**: System performance metrics
- **Storage Usage**: Real-time storage monitoring
- **CCTV Status**: Camera and NVR status overview
- **Alerts & Notifications**: Real-time system alerts
- **Activity Feed**: Historical event tracking

## Technology Stack

### Frontend
- **React 18** with TypeScript
- **TailwindCSS** for styling
- **Vite** for build tooling
- **React Router** for navigation
- **Zustand** for state management
- **Glassmorphism UI** with modern Bento Grid layout

### Backend
- **Node.js** with Express.js
- **WebSocket** for real-time updates
- **SQLite** for data persistence
- **JWT** for authentication
- **CORS** for cross-origin requests

### Network Features
- **ARP Scanning** for device discovery
- **ONVIF** for camera integration
- **RTSP** for video streaming
- **Wake-on-LAN** for remote control

## System Requirements

- **OS**: Windows 10/11
- **Node.js**: v16+
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 1GB minimum for application
- **Network**: Local network connectivity

## Installation

### Prerequisites
1. Install [Node.js](https://nodejs.org/) v16 or higher
2. Clone this repository
3. Ensure Main Server PC is connected to the network

### Setup Steps

```bash
# Clone repository
git clone https://github.com/yourusername/Auto-Craft-Network-Control-Center.git
cd Auto-Craft-Network-Control-Center

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your configuration

# Create data directories
mkdir -p data storage

# Build project
npm run build

# Start application
npm run start
```

### Development Mode

```bash
# Run with hot reload
npm run dev

# Frontend only (Vite)
npm run client:dev

# Backend only (Nodemon)
npm run server:dev
```

## Configuration

### Environment Variables

Edit `.env` file:

```env
PORT=3000
NODE_ENV=production
JWT_SECRET=your-secure-secret-key
DATABASE_PATH=./data/app.db
FILE_STORAGE_PATH=./storage
NETWORK_SCAN_INTERVAL=30000
DEVICE_TIMEOUT=300000
```

## Usage

### Accessing the Dashboard

1. Start the server: `npm run start`
2. Open browser to: `http://localhost:3000`
3. Login with default admin credentials (change after first login)
4. Navigate to Dashboard for system overview

### Main Modules

#### Dashboard
- Real-time system overview
- Connected devices count
- Network health status
- Storage usage visualization
- CCTV camera overview
- System alerts and notifications

#### Devices Page
- Complete device inventory
- Device filtering and search
- Device grouping by location/type
- Remote control options
- Performance monitoring

#### CCTV Center
- Live camera feeds
- Multi-camera grid view
- NVR/DVR status
- Recording status
- Snapshot capture
- Camera organization by location

#### Storage Manager
- Centralized file server
- Shared folder management
- File upload/download
- Permission management
- Backup configuration
- Storage alerts

#### Network Map
- Visual network topology
- Device connection visualization
- Network performance metrics

#### Settings
- User management
- Role configuration
- Backup settings
- Network configuration
- System preferences

## Directory Structure

```
.
├── server/
│   ├── index.ts
│   ├── config/
│   ├── routes/
│   ├── services/
│   ├── models/
│   └── middleware/
├── client/
│   ├── src/
│   │   ├── main.tsx
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── stores/
│   │   └── styles/
│   └── index.html
├── docs/
├── data/
├── storage/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Support

For issues, questions, or feature requests:
- Open an issue on GitHub
- Check existing documentation
- Review troubleshooting guide

## License

MIT License

---

**Built with ❤️ for enterprise network management**
