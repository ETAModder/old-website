module.exports = {
    randomDelay: function (context, events, done) {
      const minDelay = 5000;  // Minimum delay in milliseconds (e.g., 5 seconds)
      const maxDelay = 30000; // Maximum delay in milliseconds (e.g., 30 seconds)
      const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
  
      setTimeout(done, delay);
    }
  };
  