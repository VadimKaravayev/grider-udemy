class Timer {
  constructor(
    durationInput,
    startButton,
    pauseButton,
    stopButton,
    callbacks = {}
  ) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.stopButton = stopButton;

    this.onStart = callbacks.onStart;
    this.onTick = callbacks.onTick;
    this.onComplete = callbacks.onComplete;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
    this.stopButton.addEventListener("click", this.stop);
  }

  start = () => {
    if (!this.duration) {
      this.duration = this.timeRemaining;
    }
    // this.onStart?.(this.timeRemaining);
    this.onStart?.(this.duration);
    this.tick();
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(this.tick, 50);
  };

  tick = () => {
    this.timeRemaining <= 0
      ? this.stop()
      : (() => {
          this.timeRemaining -= 0.05;
          this.onTick?.(this.timeRemaining);
        })();
  };

  pause = () => {
    clearInterval(this.interval);
  };

  stop = () => {
    this.pause();
    this.durationInput.value = this.duration
      ? this.duration.toFixed(0)
      : this.timeRemaining.toFixed(0);
    this.duration = 0;
    this.onComplete?.();
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
