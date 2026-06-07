import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db: Database | null = null;
const DB_PATH = process.env.DATABASE_PATH || path.join(__dirname, '../../data/app.db');

export async function initializeDatabase(): Promise<Database> {
  if (db) return db;

  db = await open({
    filename: DB_PATH,
    driver: sqlite3.Database,
  });

  await db.exec('PRAGMA foreign_keys = ON');

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'Viewer',
      status TEXT NOT NULL DEFAULT 'active',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS devices (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      ip_address TEXT UNIQUE NOT NULL,
      mac_address TEXT UNIQUE NOT NULL,
      hostname TEXT,
      manufacturer TEXT,
      os TEXT,
      device_type TEXT,
      status TEXT DEFAULT 'offline',
      cpu_usage REAL DEFAULT 0,
      ram_usage REAL DEFAULT 0,
      storage_usage REAL DEFAULT 0,
      network_usage REAL DEFAULT 0,
      uptime INTEGER DEFAULT 0,
      last_seen DATETIME,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS cameras (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      ip_address TEXT UNIQUE NOT NULL,
      port INTEGER DEFAULT 8080,
      username TEXT,
      password TEXT,
      stream_url TEXT,
      status TEXT DEFAULT 'offline',
      location TEXT,
      recording_status TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log('✓ Database initialized');
  return db;
}

export function getDatabase(): Database {
  if (!db) throw new Error('Database not initialized');
  return db;
}
