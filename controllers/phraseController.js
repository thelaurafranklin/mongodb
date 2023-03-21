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
