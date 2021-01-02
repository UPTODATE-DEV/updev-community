import express from 'express';
import signup from '../controllers/userController.js';

// create the router
const router = express.Router();

// add routes
router.post('/create', signup);

// export router
export default router;
