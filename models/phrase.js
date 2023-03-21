const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhraseSchema = new Schema({
  phrase: {
    type: String,
    required: true,
    maxLength: 200,
  },
});

module.exports = mongoose.model('Phrase', PhraseSchema);
