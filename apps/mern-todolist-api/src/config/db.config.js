import mongoose from "mongoose";

class Database{
  constructor(url) {
    this.url = url
  }

  async connectionDb() {
    try {
      await mongoose.connect(this.url);
      console.log("connected to db");
    } catch (error) {
      console.log(error);
    }
  }
}

export default Database;
