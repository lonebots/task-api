import express from 'express';
import { loginAdminHandler } from '../controller/auth.controller.js';

const router = express.Router();


// login
router.route('/login').get( loginAdminHandler)


// logout
router.route('/logout', (req, res) => { res.send('admin logout') })


export default router;