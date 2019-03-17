const formatData = document => {
  Object.keys(document).forEach(key => {
    if (typeof document[key] === 'string') {
      document[key] = document[key].toLowerCase();
    }
  });
  if (document.phone_num) {
    const regx = /\D+/g;
    const formatted = document.phone_num.replace(regx, '');
    document.phone_num =
      formatted.charAt(0) === '1' ? formatted.slice(1) : formatted;
  }
  return document;
};

module.exports = {
  formatData
}