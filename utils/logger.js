const appRoot = require('app-root-path');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;

//define the custom settings for each transport (file, console)
const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/utils/poc.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
  },
};

//instantiate a new winston logger with file and console transports using the properties defined in the options variable.
const logger = createLogger({
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
      new transports.File(options.file),
      new transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
  });

//stream function that will output the logs into the log file
  logger.stream = {
    write: function(message, encoding) {
      logger.info(message);
    },
  };

  module.exports = logger;