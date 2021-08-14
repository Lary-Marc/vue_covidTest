import axios from 'axios';
const url = "/api/test";

export default class API {
  //to get all the posts from the server
  static async getAllTest() {
    const res = await axios.get(url);
    return res.data;
  }
  //to get a single post by id
//   static async getPostByID(id) {
//     const res = await axios.get(`${url}/${id}`);
//     return res.data;
//   }
  //to insert post into database
  static async addTest(test) {
    const res = await axios.post(url, test);
    return res.data;
  }

  //to update post into database
//   static async updatePost(id, post) {
//     const res = await axios.patch(`${url}/${id}`, post);
//     return res.data;
//   }
  //to delete a post
//   static async deletePost(id) {
//     const res = await axios.delete(`${url}/${id}`);
//     return res.data;
//   }
}