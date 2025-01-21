// src/logger.js
class Logger {
  constructor() {
    this.level = "info"; // Default log level
  }

  // Set the log level (e.g., info, debug, warn, error)
  setLevel(level) {
    this.level = level;
  }

  // Log an info message
  info(message) {
    if (this.level === "info" || this.level === "debug") {
      console.log(`INFO: ${message}`);
    }
  }

  // Log a warning message
  warn(message) {
    if (
      this.level === "warn" ||
      this.level === "info" ||
      this.level === "debug"
    ) {
      console.warn(`WARN: ${message}`);
    }
  }

  // Log an error message
  error(message) {
    console.error(`ERROR: ${message}`);
  }

  // Log a debug message
  debug(message) {
    if (this.level === "debug") {
      console.debug(`DEBUG: ${message}`);
    }
  }
}

const logger = new Logger();
export default logger;
