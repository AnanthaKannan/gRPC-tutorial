# GRPC

## Reference repository
https://github.com/Clement-Jean/grpc-node-js-course

## To generate a code
./node_modules/.bin/grpc_tools_node_protoc --js_out=. --grpc_out=. dummy.proto

chmod +x grpcurl

./grpcurl -plaintext -d '{"first_name": "Value"}' 127.0.0.1:50051 GreetService/Greet

./grpcurl 127.0.0.1:50051 describe
