const mongoose = require("mongoose");
require("dotenv").config();
const PAS = process.env.PAS;
mongoose.connect(`mongodb+srv://BankApi:${PAS}@cluster0.pbqim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
