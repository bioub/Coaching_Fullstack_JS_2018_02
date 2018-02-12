// Exemple : loguer 5 lignes dans un fichier

const fs = require('fs-extra');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(logPath, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.appendFile(logPath, line);
}

fs.stat(logDir)
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.mkdir(logDir);
    }
    throw err;
  })
  .then(() => log(logFile, 'Ligne 1'))
  .then(() => log(logFile, 'Ligne 2'))
  .then(() => log(logFile, 'Ligne 3'))
  .then(() => log(logFile, 'Ligne 4'))
  .then(() => log(logFile, 'Ligne 5'))
  .then(() => console.log('Logs Done'))
  .catch((err) => {
    console.log(err.message);
  });