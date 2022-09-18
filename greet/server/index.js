const grpc = require('@grpc/grpc-js');
const fs = require('fs');
const serviceImpl = require('./service_impl');
const { GreetServiceService } = require('../proto/greet_grpc_pb')
const addr = 'localhost:50051';

function cleanup(server) {
  console.log('cleanup');
  if (server)
    server.forceShutdown();
}

function main() {
  const server = new grpc.Server();
  // const cred = grpc.ServerCredentials.createInsecure();

  const tls = false;
  let creds;

  if (tls) {
    const rootCert = fs.readFileSync('./ssl/ca.crt');
    const certChain = fs.readFileSync('./ssl/server.crt');
    const privateKey = fs.readFileSync('./ssl/server.pem');

    creds = grpc.ServerCredentials.createSsl(rootCert, [{
      cert_chain: certChain,
      private_key: privateKey,
    }]);
  } else {
    creds = grpc.ServerCredentials.createInsecure();
  }

  // this get called while press on ctrl+c
  process.on('SIGINT', () => {
    console.log('Caught interrupt signal');
    cleanup(server);
  })

  server.addService(GreetServiceService, serviceImpl)
  server.bindAsync(addr, creds, (err, _) => {
    if (err) {
      return cleanup(server)
    }

    server.start();
  });

  console.log(`Listening on ${addr}`)
}

main();
