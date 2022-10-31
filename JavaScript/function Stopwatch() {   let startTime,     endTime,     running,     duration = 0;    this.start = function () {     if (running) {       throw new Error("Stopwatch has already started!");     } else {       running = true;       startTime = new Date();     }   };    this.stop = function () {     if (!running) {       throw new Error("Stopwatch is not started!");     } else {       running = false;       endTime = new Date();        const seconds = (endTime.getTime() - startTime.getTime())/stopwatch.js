function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      throw new Error("Stopwatch has already started!");
    } else {
      running = true;
      startTime = new Date();
    }
  };

  this.stop = function () {
    if (!running) {
      throw new Error("Stopwatch is not started!");
    } else {
      running = false;
      endTime = new Date();

      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
      console.log("duration: " + duration);
    }
  };
  
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();
console.log(sw);
