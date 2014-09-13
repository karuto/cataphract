function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] == 'function') {
    handle[pathname]();
  } else {
    console.log("No request handler function found");
  }
}

exports.route = route;
// this is necessary to make the method publicly available (to the other files that refers to server)