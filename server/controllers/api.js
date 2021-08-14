const Test = require("../models/tests");
// const fs = require("fs");


module.exports = class API {
  //fetch all posts
  static async fetchAllTest(req, res) {
    try {
      const tests = await Test.find();
      res.status(200).json(tests);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // fetch post by ID
  static async fetchTestByID(req, res) {
    const id = req.params.id;
    try {
      const test = await Test.findById(id);
      res.status(200).json(test);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  //create a post
  static async createTest(req, res) {
    const test = req.body;
    console.log(test)
    try {
      await Test.create(test);
      res.status(201).json({ message: "Registered successfully!" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // //update post
  // static async updateTest(req, res) {
  //   const id = req.params.id;
   
  //   const newTest = req.body;
    
  //   try {
  //     await Test.findByIdAndUpdate(id, newTest);
  //     res.status(200).json({ message: "Test updated successfully!" });
  //   } catch(err) {
  //     res.status(404).json({ message: err.message });
  //   }
  // }
  // // //delete a post
  // static async deleteTest(req, res) {
  //   const id = req.params.id;
  //   try {   
  //     const result = await Test.findByIdAndDelete(id);
  //     if (result.image != "") {
  //       try {
  //         fs.unlinkSync(result.image);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //     res.status(200).json({ message: "Test deleted successfully!" });
  //   } catch(err) {
  //     res.status(404).json({ message: err.message });
  //   }
  // }
};


