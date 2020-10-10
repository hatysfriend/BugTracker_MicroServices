const express = require('express');
const bugController = require('../controllers/bugController');
const testController = require('../controllers/testBugController');
const commentController = require('../controllers/commentController');
const authenticator = require('../authentication/authenticator');

const router = express.Router();

router.get('/getAll', authenticator.authenticateToken, bugController.get_all_bugs);
router.get('/getById/:id', authenticator.authenticateToken, bugController.get_bug_by_id);
router.post('/add', authenticator.authenticateToken, bugController.create_bug_post);
router.patch('/update/:id', authenticator.authenticateToken, bugController.update_bug);

// Testing Only
router.get('/save', testController.create_bug);
router.get('/seed', testController.seed_data);

// Comments
router.post('/:bugId/comments/add', authenticator.authenticateToken, commentController.insert_comment);
router.get('/:bugId/comments/getall', authenticator.authenticateToken, commentController.get_comments);
// router.get('/:bugId/comments/getbyid/:commentId');
router.patch('/:bugId/comments/update/:commentId', authenticator.authenticateToken, commentController.update_comment);
router.delete('/:bugId/comments/delete/:commentId', authenticator.authenticateToken, commentController.delete_comment);

module.exports = router;
