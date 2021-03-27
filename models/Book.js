const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  
  name: {
    type: String,
  },
  symbol: {
    type: String,
  },
  mCap: {
    type: String
  },
  cVal: {
    type: String
  }
});

module.exports = Book = mongoose.model('book', BookSchema); 