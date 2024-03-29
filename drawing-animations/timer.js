class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
    // method 2
    // this.startButton.addEventListener('click', this.start.bind(this));
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.interval = setInterval(this.tick, 10);
  }

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause()
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      // const timeRemaining = this.timeRemaining; // getter
      // this.timeRemaining = timeRemaining - 1; // setter
      this.timeRemaining = this.timeRemaining - .01;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  }

  pause = () => {
    clearInterval(this.interval);
  }

  // getter
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  // setter
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }

  // method 2
  // start() {
  //   this.importantMethodToCall()
  // }
  // importantMethodToCall() {
  //   console.log('hi there')
  // }
}
