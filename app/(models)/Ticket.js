import mongoose, { Schema } from "mongoose"

mongoose.connect(process.env.MONGODB_CONNECTION)

mongoose.promise = global.Promise;

const ticketSchema = new Schema({
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: String
}, {
    timestamps: true,
})

const Ticket =
    mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

export default Ticket;