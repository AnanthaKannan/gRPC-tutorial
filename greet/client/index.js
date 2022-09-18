const grpc = require('@grpc/grpc-js');
const { GreetServiceClient } = require('../proto/greet_grpc_pb');
const { GreetRequest, CalRequest } = require('../proto/greet_pb')

function doGreet(client) {
  console.log('doGreet invoked');

  const request = new GreetRequest().setFirstName('sreeKannan');

  client.greet(request, (err, res) => {
    if (err)
      return console.log(err);
    console.log(`Greet: ${res.getResult()}`);
  });
}

function doGreetManyTimes(client) {
  console.log('doGreetManyTimes invoked');
  const request = new GreetRequest().setFirstName('Anantha');
  const call = client.greetManyTimes(request);

  call.on('data', (res) => {
    console.log(`greetManyTimes: ${res.getResult()}`)
  })
}

function doCalculation(client) {
  console.log('doCalculation invoked');

  const request = new CalRequest().setFirstNumber(332).setSecondNumber(11);

  client.calculation(request, (err, res) => {
    if (err)
      return console.log(err);
    console.log(`Calculation: ${res.getResult()}`);
  });
}

function main() {
  const creds = grpc.credentials.createInsecure();
  const client = new GreetServiceClient('localhost:50051', creds);

  doGreet(client);
  doCalculation(client);
  doGreetManyTimes(client);
  client.close();
}

main();