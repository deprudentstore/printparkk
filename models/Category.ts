import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  order: { type: Number, default: 0 }
});

export default mongoose.models.Category || mongoose.model("Category", CategorySchema);
