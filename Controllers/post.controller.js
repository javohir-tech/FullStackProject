//postServer
const postServer = require("../Servers/post.server");


class PostController {
    async getAll(req, res) {
        try {
            const allPosts = await postServer.getAll()
            res.status(200).json(allPosts)
        } catch (error) {
            res.status(500).json(`getAll error : ${error} `)
        }
    }

    async create(req, res) {
        try {
            const post = await postServer.create(req.body, req.files.picture)
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(`create Error : ${error}`)
        }
    }

    async delete(req, res) {
        try {
            const deletePost = await postServer.delete(req.params.id)
            if (!deletePost) {
                return res.status(404).json({ message: "Post not found" })
            }
            res.status(200).json({ message: "post deleted successfully", deletePost })
        } catch (error) {
            res.status(500).json(`Error deleteing post :${error}`)
        }
    }

    async edit(req, res) {
        try {
            const editPost = await postServer.edit(req.body, req.params.id)
            if (!editPost) {
                return res.status(404).json({ message: "Post not found" })
            }
            res.status(200).json({ message: "Post edit successfuly", editPost })
        } catch (error) {
            res.status(500).json(`Error editing post: ${error}`)
        }
    }

    async getOne(req, res) {
        try {
            const  getOnePost = await postServer.getOne(req.params.id)
            if(!getOnePost){
                return res.status(404).json({message:"Post not found "})
            }
            res.status(200).json({message:"get one post successfully", getOnePost})
        } catch (error) {
            res.status(500).json(`get one Error ${error} `)
        }
    }
}

module.exports = new PostController()