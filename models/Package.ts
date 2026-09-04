import mongoose, { Schema } from "mongoose";

const PackageSchema = new Schema({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  price: { type: Number, required: true },
  popular: { type: Boolean, default: false },
  features: { type: [String], required: true },
  order: { type: Number, default: 0 }
});

export default mongoose.models.Package || mongoose.model("Package", PackageSchema);
