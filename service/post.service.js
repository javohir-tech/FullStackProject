const postModel = require("../models/post.model");
const fileService = require("./file.service");

class PostServer {

    async getAll() {
        const allPosts = await postModel.find()
        return allPosts
    }

    async create(post, picture) {
        const fileName = fileService.save(picture)
        const newpost = await postModel.create({ ...post, picture: fileName })
        return newpost
    }

    async delete(id) {
        const post = await postModel.findByIdAndDelete(id)
        return post
    }

    async edit(post, id,) {
        const editPost = await postModel.findByIdAndUpdate(id, post, {
            new: true
        });
        return editPost
    }

    async getOne(id) {
        const getOnePost = await postModel.findById(id)
        return getOnePost
    }
    
}

module.exports = new PostServer();