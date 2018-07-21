(function optionsCase() {
  var kHttp = window.kHttp;

  if (typeof kHttp != "object") {
    return new TypeError("kHttp is not executable");
  }

  return kHttp
    .get("http://httpbin.org/get")
    .then(res => {
      if (typeof res != "object") {
        return new Error("GET: res is not a object");
      }
      return kHttp.post("http://httpbin.org/post", {
        test: true,
        method: "post"
      });
    })
    .then(res => {
      if (typeof res != "object") {
        return new Error("POST: res is not a object");
      }
      return kHttp.put("http://httpbin.org/put", {
        test: true,
        method: "put"
      });
    })
    .then(res => {
      if (typeof res != "object") {
        return new Error("PUT: res is not a object");
      }
      return kHttp.del("http://httpbin.org/delete");
    })
    .then(res => {
      if (typeof res != "object") {
        return new Error("PUT: res is not a object");
      }
      return 0;
    });
})();
