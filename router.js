function route(handle, pathname, response) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    console.log("No request handler function found");
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 NOT FOUND");
    response.end();
  }
}

exports.route = route;
// this is necessary to make the method publicly available (to the other files that refers to server)