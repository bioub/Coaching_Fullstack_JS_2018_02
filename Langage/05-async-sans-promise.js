// Exemple : loguer 5 lignes dans un fichier

const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(logPath, msg, cb) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFile(logPath, line, cb);
}

// Callback Hell / Pyramid of Doom
fs.stat(logDir, (err, stats) => {
  if (err) {
    if (err.code === 'ENOENT') {
      return fs.mkdir(logDir, (err) => {
        if (err) {
          return console.log(err);
        }
        next();
      });
    }
    else {
      return console.log(err);
    }
  }
  next();
});

function next() {
  log(logFile, 'Ligne 1', (err) => {
    if (err) {
      return console.log(err);
    }
    log(logFile, 'Ligne 2', (err) => {
      if (err) {
        return console.log(err);
      }
      log(logFile, 'Ligne 3', (err) => {
        if (err) {
          return console.log(err);
        }
        log(logFile, 'Ligne 4', (err) => {
          if (err) {
            return console.log(err);
          }
          log(logFile, 'Ligne 5', (err) => {
            if (err) {
              return console.log(err);
            }
            console.log('Logs done');
          });
        });
      });
    });
  });
}
