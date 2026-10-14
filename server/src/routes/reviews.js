import { Router } from 'express';
import {
  getAllReviews,
  getReview,
  createReview,
  getReviewSummary,
  getTopMeals
} from '../controllers/reviewController.js';

const router = Router();

router.get('/top', getTopMeals);  
router.post('/', createReview);
router.get('/', getAllReviews);
router.get('/:id', getReview);

export default router;
