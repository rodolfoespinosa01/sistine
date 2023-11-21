const { Post } = require('../models')

const post_controller = {
    async newPost(req, res) {
        try {
            const postData = req.body;
            const newPost = await Post.create({
                ...postData,
                author: req.user._id
            });
            
            req.user.posts.push(newPost._id);
            req.user.save();

            if (req.params.post_id) {
                const originPost = await Post.findOne({where: { _id: req.params.post_id}});
                newPost.origin = newPost._id;
                originPost.replies.push(newPost._id);
                originPost.save();
            } else {
                newPost.origin = newPost._id
            }
            
            newPost.save();

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message })
        }
    },
    
    async getPostById(req, res) {
        const post = await Post.findOne({where: { _id: req.params.post_id}})
            .populate('author')
            .populate('origin')
            .populate('replies')
        
        res.json(post)
    },

    async updatePostById(req, res) {
        try {
            const post = await Post.findOneAndUpdate({where: { _id: req.params.post_id}})
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: err.message })
        }
    },

    async deletePostById(req, res) {
        try {
            const post = await Post.findOneAndDelete({where: {_id: req.params.post_id}})
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: err.message })
        }
    }
};

module.exports = {post_controller}