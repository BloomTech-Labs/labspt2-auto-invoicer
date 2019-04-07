const formatData = document => {
  Object.keys(document).forEach(key => {
    if (typeof document[key] === 'string') {
      document[key] = document[key].toLowerCase();
    }
  });
  if (document.phone_num) {
    const regx = /\D+/g;
    document.phone_num = document.phone_num.replace(regx, '');
  }
  return document;
};

module.exports = {
  formatData
};
