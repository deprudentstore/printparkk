import mongoose, { Schema } from "mongoose";

const DesignSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  order: { type: Number, default: 0 }
});

export default mongoose.models.Design || mongoose.model("Design", DesignSchema);
