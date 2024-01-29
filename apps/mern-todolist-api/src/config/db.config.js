import mongoose from "mongoose";

class dataBase  {
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

export default dataBase;
