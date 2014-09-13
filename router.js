function route(pathname) {
  console.log("About to route a request for " + pathname);
}

exports.route = route;
// this is necessary to make the method publicly available (to the other files that refers to server)