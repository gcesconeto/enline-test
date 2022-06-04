const createDisplaySize = (size) => {
  if (size < 1000) return `${size} bytes`;
  if (size < 1000000) return `${(size / 1000).toFixed(2)} KB`;
  return `${(size / 1000000).toFixed(2)} MB`;
};

const createDate = () => {
  const now = new Date();
  const date = now.toISOString();
  return date.replace('T', '   ').split('.')[0];
};

module.exports = (fileList = []) => {
  const processed = fileList.map((file) => ({ 
    ...file, 
    date: createDate(), 
    displaySize: createDisplaySize(file.size), 
  }));
  return processed;
};