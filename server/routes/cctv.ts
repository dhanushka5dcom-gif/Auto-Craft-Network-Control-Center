import { Router, Request, Response } from 'express';
import { getDatabase } from '../config/database';

const router = Router();

router.get('/cameras', async (req: Request, res: Response) => {
  try {
    const db = getDatabase();
    const cameras = await db.all('SELECT * FROM cameras');
    res.json(cameras);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cameras' });
  }
});

router.get('/cameras/:id', async (req: Request, res: Response) => {
  try {
    const db = getDatabase();
    const camera = await db.get('SELECT * FROM cameras WHERE id = ?', [req.params.id]);
    res.json(camera || { error: 'Camera not found' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch camera' });
  }
});

router.post('/cameras/:id/snapshot', async (req: Request, res: Response) => {
  res.json({ message: 'Snapshot captured' });
});

export default router;
