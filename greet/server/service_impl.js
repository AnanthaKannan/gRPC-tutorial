const pb = require('../proto/greet_pb');

exports.greet = (call, callback) => {
  console.log('greet was invoked');
  const firstName = call.request.getFirstName()

  const result = new pb.GreetResponse()
    .setResult(`Hello: ${firstName}`);

  callback(null, result)
}

exports.calculation = (call, callback) => {
  console.log('calculation was invoked');
  const addition = call.request.getFirstNumber() + call.request.getSecondNumber();

  const result = new pb.CalResponse()
    .setResult(addition);

  callback(null, result)
}


exports.greetManyTimes = (call, _) => {
  console.log('greetManyTimes was invoked');
  const firstName = call.request.getFirstName();
  const result = new pb.GreetResponse();
  let index = 0;
  setInterval(() => {
    result.setResult(`Hello: ${firstName} - index: ${index}`);
    call.write(result);
    // stop the streaming
    if(index === 9) call.end(); 
    index++;
  }, 1000);
}