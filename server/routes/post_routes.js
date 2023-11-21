const router = require("express").Router();
const { post_controller } = require('../controllers/post_controller.js')
const { isAuthenticated } = require("../controllers/helpers");

//POST(/): Make a new post
router.post('/', isAuthenticated, post_controller.newPost)

//POST(/:post_id): Directly reply to a post
//GET(/:post_id): Get post by id
//PUT(/:post_id): Edit a post (authenticate user before doing so)
//DELETE(/:post_id): Delete a post and all of its replies (authenticate user)
router.route('/:post_id')
    .post(isAuthenticated, post_controller.newPost)
    .get(post_controller.getPostById)
    .put(isAuthenticated, post_controller.updatePostById)
    .delete(post_controller.deletePostById)

router.get('/user/:user_id', post_controller.getPostsByUser)

module.exports = router