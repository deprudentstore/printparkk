import mongoose, { Schema } from "mongoose";

const TestimonialSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  quote: { type: String, required: true },
  avatar: { type: String, required: true },
  rating: { type: Number, default: 5 }
});

export default mongoose.models.Testimonial || mongoose.model("Testimonial", TestimonialSchema);
