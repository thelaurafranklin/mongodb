import mongoose from 'mongoose';
const { Schema } = mongoose;

const PhraseSchema = new Schema({
  phrase: {
    type: String,
    required: true,
    maxLength: 200,
  },
});

const Phrase = mongoose.model('Phrase', PhraseSchema);

export default Phrase;
