# Getting started

![Build and test](https://github.com/second-state/ssvm-nodejs-starter/workflows/Build%20and%20test/badge.svg)

Fork this project to create your own JavaScript + Rust hybrid application in Node.js.

* The Rust functions are in the `src` directory. You can put high performance workload into Rust functions.
* The JavaScript functions are in the `node` directory and they can access the Rust functions.
* Use the `node node/test.js` command to run the test cases.
* Use the `node node/app.js` command to run the application in Node.js.

Read more:

* [The Case for WebAssembly on the Server-side](https://docs.secondstate.io/serverless-cloud/the-case-for-webassembly-on-the-server-side)
* [Guide on how to Rust and WebAssembly for server-side apps](https://docs.secondstate.io/beginners-guide-to-webassembly/webassembly-on-the-server-side)

Resources

* [The Second State VM (SSVM)](https://github.com/second-state/ssvm) is a high performance WebAssembly virtual machine designed for server-side applications.
* [The SSVM NPM addon](https://github.com/second-state/ssvm-napi) provides access to the SSVM, and programs in it, through a Node.js host application.
* [The SSVM ready tool, ssvmup](https://github.com/second-state/ssvmup) is a toolchain for compiling Rust programs into WebAssembly, and then make them accessible from JavaScripts via the SSVM.

Brought to you by the Open source dev team at [Second State](https://www.secondstate.io/). Follow us on [Twitter](https://twitter.com/secondstateinc), [Facebook](https://www.facebook.com/SecondState.io/), [LinkedIn](https://www.linkedin.com/company/second-state/), [YouTube](https://www.youtube.com/channel/UCePMT5duHcIbJlwJRSOPDMQ), or [Medium](https://medium.com/wasm)

