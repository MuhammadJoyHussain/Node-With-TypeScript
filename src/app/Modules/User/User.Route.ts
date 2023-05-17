import express from 'express';
import { createUser, getAdminUsers, getUser, getUsers } from './User.Controller';
const router = express.Router();

router.route('/').get(getUsers);
router.route('/create').post(createUser);
router.route('/admin').get(getAdminUsers);

router.route('/:id').get(getUser)

export default router;