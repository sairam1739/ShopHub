import express from 'express'
import { requireSignIn } from './../middlewares/authMiddleware.js';
import { isAdmin } from './../controllers/authController.js';
import { createCategoryController } from '../controllers/categoryController.js';

const router = express.Router()


//routes

router.post('/create-category',requireSignIn,isAdmin,createCategoryController)

export default router