const prompts = require('prompts');

const questions = [
  {
    type: 'select',
    name: 'genre',
    message: 'Pick a genre',
    choices: [
      { title: 'Fantasy', value: 'https://bookoutlet.ca/Store/Browse?Nc=31&size=24&sort=popularity_0&Ns=600' },
      { title: 'Sci-fi', value: 'https://bookoutlet.ca/Store/Browse?Nc=31&size=24&sort=popularity_0&Ns=1421' },
      { title: 'Horror', value: 'https://bookoutlet.ca/Store/Browse?Nc=31&size=24&sort=popularity_0&Ns=803' },
      { title: 'Mystery', value: 'https://bookoutlet.ca/Store/Browse?Nc=31&Ns=1082'},
      { title: 'General Fiction', value: 'https://bookoutlet.ca/Store/Browse?Nc=31&Ns=683'},
      { title: 'Short Stories', value: 'https://bookoutlet.ca/Store/Browse?Nc=31&Ns=1459'},
      { title: 'Science', value: 'https://bookoutlet.ca/Store/Browse?Nc=72'}
    ],
    initial: 0
  },
  {
    type: 'number',
    name: 'minRating',
    message: 'What is the minimum acceptable rating?',
    float: true,
    min: 0.1,
    max: 5
  },
  {
    type: 'number',
    name: 'discountRate',
    message: 'What is the maximum discount rate you\'d like to apply?',
    min: 1,
    max: 100
  },
  {
    type: 'multiselect',
    name: 'formats',
    message: 'Choose what formats you\'d like to find',
    choices: [
      { title: 'Paperback', value: '(Paperback)' },
      { title: 'Hardcover', value: '(Hardcover)' },
      { title: 'Softcover', value: '(Softcover)' },
      { title: 'Boxed Set', value: '(Boxed Set)' },
      { title: 'Pocket Books', value: '(Pocket Books)' },
    ],
    hint: 'Space to select, return to submit'
  }
];

const LaunchMenu = async () => {
  return new Promise(async (resolve, reject) => {
    const response = await prompts(questions)
    if (response)
      resolve(response)
    else
      reject()
  })
};


exports.LaunchMenu = LaunchMenu