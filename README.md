# Getting started

![Build and test](https://github.com/second-state/ssvm-nodejs-starter/workflows/Build%20and%20test/badge.svg)

[Fork this project](https://github.com/second-state/ssvm-nodejs-starter/fork) to create your own Rust functions in Node.js. [Learn more](https://www.secondstate.io/articles/getting-started-rust-nodejs-vscode/)

* The Rust functions are in the `src` directory. You can put high performance workload into Rust functions.
* The JavaScript functions are in the `node` directory and they can access the Rust functions.
* Use the `node node/app.js` command to run the application in Node.js.

**Alternatively**, you can just upload your compiled Rust functions to a [Function-as-a-Service (FaaS)](https://www.secondstate.io/faas/) and make it available as a web service. [Check out this guide!](https://www.secondstate.io/articles/getting-started-with-function-as-a-service-in-rust/)

## Use Docker to build and run

```
$ docker pull secondstate/ssvm-nodejs-starter:v2
$ docker run -p 3000:3000 --rm -it -v $(pwd):/app secondstate/ssvm-nodejs-starter:v2
(docker) # cd /app
(docker) # ssvmup build
(docker) # node node/app.js
```

From a second terminal window, you can test the local server.

```
$ curl http://localhost:3000/?name=SSVM
hello SSVM
```

## Use Github Codespace

1 Click on the Code -> Open with Codespaces menu, and wait for the VSCode screen to build and come up.

2 Open the `src/lib.rs`, `node/app.js` and `Cargo.toml` files and see how the Node.js express app calls the Rust function to say hello.

![Code in Codespace](docs/img/vscode_code.png)

3 Click on the Run button on the left panel, and then the Launch Program at the top to build and run the application.

![Build and run](docs/img/vscode_run.png)

The Terminal window at the bottom shows the build progress. It builds the Rust program, and then launches the Node.js app.

![Build](docs/img/vscode_build.png)

The Debug window shows the Node.js server running and waiting for web requests.

![Debug](docs/img/vscode_debug.png)

4 Now, you have two choices. You could use the proxy link for `127.0.0.1:3000` to access the running server in a browser.

![Browser link](docs/img/vscode_port.png)

Or, you could open another terminal window in the IDE via the `Terminal -> New Terminal` menu.

![Open Terminal](docs/img/vscode_terminal.png)

From the terminal window, you can test the local server.

```
$ curl http://127.0.0.1:3000/?name=SSVM
hello SSVM
```

### More exercises

Now, you can copy and paste code from [this project](https://github.com/second-state/wasm-learning/tree/master/nodejs/functions).

* `src/lib.rs` --> Replace with [code here](https://github.com/second-state/wasm-learning/blob/master/nodejs/functions/src/lib.rs)
* `Cargo.toml` --> Replace with [code here](https://github.com/second-state/wasm-learning/blob/master/nodejs/functions/Cargo.toml)
* `node/app.js` --> Replace with [code here](https://github.com/second-state/wasm-learning/blob/master/nodejs/functions/node/app.js)

Click on Run to see the build output in Terminal window, and application console output in Debug window.

Try to log into GitHub from the IDE, and use the IDE's GitHub integration features to commit the changes, push the changes back into your forked repository, and perhaps even send us a Pull Request from the IDE!

## Read more:

* [The Case for WebAssembly on the Server-side](https://www.secondstate.io/articles/why-webassembly-server/)
* [Getting started on Rust and WebAssembly for server-side apps](https://www.secondstate.io/articles/getting-started-with-rust-function/)
* [Passing function arguments in JSON](https://www.secondstate.io/articles/rust-functions-in-nodejs/)
* [Access operating system resources from WebAssembly (WASI)](https://www.secondstate.io/articles/wasi-access-system-resources/)
* [Use Tensorflow and AI models from WebAssembly](https://www.secondstate.io/articles/face-detection-ai-as-a-service/)

## Resources

* [The Second State VM (SSVM)](https://github.com/second-state/ssvm) is a high performance [WebAssembly virtual machine](https://www.secondstate.io/ssvm/) designed for server-side applications.
* [The SSVM NPM addon](https://github.com/second-state/ssvm-napi) provides access to the SSVM, and programs in it, through a Node.js host application.
* [The SSVM ready tool, ssvmup](https://github.com/second-state/ssvmup) is a [toolchain](https://www.secondstate.io/articles/ssvmup/) for compiling Rust programs into WebAssembly, and then make them accessible from JavaScripts via the SSVM.

Brought to you by the Open source dev team at [Second State](https://www.secondstate.io/). Follow us on [Twitter](https://twitter.com/secondstateinc), [Facebook](https://www.facebook.com/SecondState.io/), [LinkedIn](https://www.linkedin.com/company/second-state/), [YouTube](https://www.youtube.com/channel/UCePMT5duHcIbJlwJRSOPDMQ), or [Medium](https://medium.com/wasm)

