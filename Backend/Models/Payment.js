import mongoose from "mongoose";
const Schema = mongoose.Schema;


const PaymentSchema = new Schema({
    paymentId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,  
    },
    dueDate: {
        type: Date,
        required: true,  
    },
    lastDate: {
        type: Date,
        required: true,  
    },
    amount: {
        type: String,
        required: true,
    },
   

}, { timestamps: true })

export default mongoose.model("Payment", PaymentSchema)