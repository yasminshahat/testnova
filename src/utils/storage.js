const fs = require('fs').promises;
const path = require('path');

const DATA_FILE = path.join(__dirname, '../../data/users.json');

// Ensure data directory exists
const ensureDataFile = async () => {
  try {
    await fs.mkdir(path.join(__dirname, '../../data'), { recursive: true });
    try {
      await fs.access(DATA_FILE);
    } catch {
      await fs.writeFile(DATA_FILE, JSON.stringify([]));
    }
  } catch (error) {
    console.error('Error initializing data file:', error);
    throw error;
  }
};

const readData = async () => {
  await ensureDataFile();
  const data = await fs.readFile(DATA_FILE, 'utf8');
  return JSON.parse(data);
};

const writeData = async (data) => {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };
