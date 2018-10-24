const { inspect } = require('util');
exports.KanjosenClickHandler = async (event, context) => {
  console.log(`event: ${inspect(event)}; context: ${inspect(context)}`);
  const { deviceEvent } = event;
  console.log(`deviceEvent: ${inspect(deviceEvent)}`);
  if ('buttonClicked' in deviceEvent) {
    const { buttonClicked } = deviceEvent;
    if (buttonClicked.clickType === 'DOUBLE') {
      console.log('Feeling: Negative :(');
    } else {
      console.log('Feeling: Positive :)');
    }
  }
  return 'kanjo';
};
