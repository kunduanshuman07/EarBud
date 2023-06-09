import mongoose, { model } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
        type:String,
        required:true
    },
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    location: String,
    description: String,
    userPicturePath: String,
    picturePath:String,
    likes:{
        type:Map,
        of:Boolean,
    },
    comments:{
        type:Array,
        default:[]
    }
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
