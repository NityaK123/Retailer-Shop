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
      // Optionally write to file (for Node.js server)
      this.writeToFile("INFO", message);
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
      this.writeToFile("WARN", message);
    }
  }

  // Log an error message
  error(message) {
    console.error(`ERROR: ${message}`);
    this.writeToFile("ERROR", message);
  }

  // Log a debug message
  debug(message) {
    if (this.level === "debug") {
      console.debug(`DEBUG: ${message}`);
      this.writeToFile("DEBUG", message);
    }
  }

  // This method can be used to write logs to a file (if in Node.js)
  writeToFile(level, message) {
    // For client-side, you'd typically send this data to your server to save in a log file.
    if (typeof window !== "undefined") {
      // This logic can be adjusted if using server-side Node.js or other environments
      const logData = {
        level,
        message,
        timestamp: new Date().toISOString(),
      };
      // Here we can call an API or send logs to the server
      console.log("Log data sent to server:", logData);
    }
  }
}

const logger = new Logger();
export default logger;
