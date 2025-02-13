import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, maxLength: 90 },
  description: { type: String, required: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now() },
  hastags: [{ type: String }],
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
});

videoSchema.static("formatHastags", function (hastags) {
  return hastags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const movieModel = mongoose.model("video", videoSchema);
export default movieModel;
