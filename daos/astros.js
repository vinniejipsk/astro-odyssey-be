const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const astroSchema = new Schema(
    {
        country: {
            type: String,
        },
        eventType: {
            type: String,
        },
        timeDate: {
            type: String,
        },
        eventDes: {
            type: String,
        },
        visibility: {
            type: String,
        },
        magnitude: {
            type: String,
        },
    }
);

module.exports = mongoose.model("Astros", astroSchema);