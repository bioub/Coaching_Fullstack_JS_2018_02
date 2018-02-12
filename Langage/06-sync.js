// Exemple : loguer 5 lignes dans un fichier

const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(logPath, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFileSync(logPath, line);
}

// Callback Hell / Pyramid of Doom

function logs() {
  try {
    try {
      const stats = fs.statSync(logDir);
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        fs.mkdirSync(logDir);
      }
      throw err;
    }
  
    log(logFile, 'Ligne 1');
    log(logFile, 'Ligne 2');
    log(logFile, 'Ligne 3');
    log(logFile, 'Ligne 4');
    log(logFile, 'Ligne 5');
    console.log('Logs done');
  }
  catch (err) {
    console.log(err.message);
  }
}

logs();
