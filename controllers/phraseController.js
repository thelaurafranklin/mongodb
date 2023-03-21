const Phrase = require('../models/phrase');

exports.index = async (req, res) => {
  try {
    const count = await Phrase.countDocuments();
    res.render('index', {
      title: 'MongoDB Test App',
      data: count,
    });
  } catch (err) {
    res.render('index', {
      title: 'MongoDB Test App',
      error: err,
    });
    console.error(err);
  }
};

exports.phrase_list = async (req, res) => {
  try {
    const phraseList = await Phrase.find().exec();
    res.render('phrase_list', {
      title: 'Phrase List',
      phrase_list: phraseList,
    });
  } catch (err) {
    res.render('phrase_list', {
      title: 'Phrase List',
      error: err,
    });
  }
};
