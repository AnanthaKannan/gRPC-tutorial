const grpc = require('@grpc/grpc-js');
const serviceImpl = require('./service_impl');
const { BlogServiceService } = require('../proto/blog_grpc_pb')
const addr = 'localhost:50051';
const mogoUrl = 'mongodb://root:root@localhost:27017/'

function cleanup(server) {
  console.log('cleanup');
  if(server)
    server.forceShutdown();
}

function main() {
  const server = new grpc.Server();
  const cred = grpc.ServerCredentials.createInsecure();

  // this get called while press on ctrl+c
  process.on('SIGINT', () => {
    console.log('Caught interrupt signal');
    cleanup(server);
  })

  server.addService(BlogServiceService, serviceImpl)
  
  server.bindAsync(addr, cred, (err, _) => {
    if (err) {
      return cleanup(server)
    }

    server.start();
  });

  console.log(`Listening on ${addr}`)
}

main();
