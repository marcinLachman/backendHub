import mongoose from "mongoose";

const hubsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  price: Number,
  oldPrice: Number, 
  lang: String,
  bookingHouers: [{
    type: String,
  }],
  bookingAdults: [{
    type: String,
  }],
  bookingChilds: [{
    type: String,
  }],
  quantityHub: Number,
  isActive: {
    type: Boolean,
    default: true
  },
  image:[Object],
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

export default mongoose.model('hubs', hubsSchema);