// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var greet_pb = require('./greet_pb.js');

function serialize_greet_CalRequest(arg) {
  if (!(arg instanceof greet_pb.CalRequest)) {
    throw new Error('Expected argument of type greet.CalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_CalRequest(buffer_arg) {
  return greet_pb.CalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_CalResponse(arg) {
  if (!(arg instanceof greet_pb.CalResponse)) {
    throw new Error('Expected argument of type greet.CalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_CalResponse(buffer_arg) {
  return greet_pb.CalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GreetRequest(arg) {
  if (!(arg instanceof greet_pb.GreetRequest)) {
    throw new Error('Expected argument of type greet.GreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetRequest(buffer_arg) {
  return greet_pb.GreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GreetResponse(arg) {
  if (!(arg instanceof greet_pb.GreetResponse)) {
    throw new Error('Expected argument of type greet.GreetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetResponse(buffer_arg) {
  return greet_pb.GreetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreetServiceService = exports.GreetServiceService = {
  greet: {
    path: '/greet.GreetService/Greet',
    requestStream: false,
    responseStream: false,
    requestType: greet_pb.GreetRequest,
    responseType: greet_pb.GreetResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetResponse,
    responseDeserialize: deserialize_greet_GreetResponse,
  },
  // server streaming
greetManyTimes: {
    path: '/greet.GreetService/GreetManyTimes',
    requestStream: false,
    responseStream: true,
    requestType: greet_pb.GreetRequest,
    responseType: greet_pb.GreetResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetResponse,
    responseDeserialize: deserialize_greet_GreetResponse,
  },
  calculation: {
    path: '/greet.GreetService/Calculation',
    requestStream: false,
    responseStream: false,
    requestType: greet_pb.CalRequest,
    responseType: greet_pb.CalResponse,
    requestSerialize: serialize_greet_CalRequest,
    requestDeserialize: deserialize_greet_CalRequest,
    responseSerialize: serialize_greet_CalResponse,
    responseDeserialize: deserialize_greet_CalResponse,
  },
};

exports.GreetServiceClient = grpc.makeGenericClientConstructor(GreetServiceService);
