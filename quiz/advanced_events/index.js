
module.exports = function Event() {
  var subscribers = [];

  this.subscribe = function () {
    debugger;
    var subscribersArgs = Array.from(arguments);
    subscribersArgs.forEach((subscriber) => {
      debugger;
      if (subscriber instanceof Function) {
        subscribers.push(subscriber)
      }
    });
  }

  this.unsubscribe = function () {
    let unsubscribers = Array.from(arguments);

    unsubscribers.forEach((unsubscriber) => {
      if (unsubscriber instanceof Function) {
        for (let i = subscribers.length - 1; i >= 0; i--) {
          if (subscribers[i] === unsubscriber) {
            subscribers.splice(i, 1);
            break;
          }
        }
      }
    });
  }

  this.emit = function () {
    let tmp = subscribers.slice(0)
    tmp.forEach((subscriber) => {
      subscriber.bind(this)(...arguments)
    });
  }
};