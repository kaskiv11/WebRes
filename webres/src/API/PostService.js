import axios from "axios";

export default class PostService {
    static async getAll(limit = 16, page = 1) {
        const response = await axios.get('https://localhost:8050/users/all-posts')
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}
