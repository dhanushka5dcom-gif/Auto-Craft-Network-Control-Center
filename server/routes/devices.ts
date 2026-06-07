import { Router, Request, Response } from 'express';
import { getDatabase } from '../config/database';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const db = getDatabase();
    const devices = await db.all('SELECT * FROM devices');
    res.json(devices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch devices' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const db = getDatabase();
    const device = await db.get('SELECT * FROM devices WHERE id = ?', [req.params.id]);
    res.json(device || { error: 'Device not found' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch device' });
  }
});

router.post('/scan', async (req: Request, res: Response) => {
  res.json({ message: 'Network scan initiated' });
});

router.post('/:id/control', async (req: Request, res: Response) => {
  const { action } = req.body;
  res.json({ message: `Device control action: ${action}` });
});

export default router;
