const grpc = require('@grpc/grpc-js');
const { BlogServiceClient } = require('../proto/blog_grpc_pb');
const { BlogRequest } = require('../proto/blog_pb')

function doGreet(client) {
  console.log('doGreet invoked');

  const request = new BlogRequest().setFirstName('sreeKannan');

  client.blog(request, (err, res) => {
    if (err)
      return console.log(err);
    console.log(`Greet: ${res.getResult()}`);
  });
}

function main() {
  const creds = grpc.credentials.createInsecure();
  const client = new BlogServiceClient('localhost:50051', creds);

  doGreet(client);
  client.close();
}

main();