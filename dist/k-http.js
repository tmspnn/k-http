"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var k_xhr_1 = __importDefault(require("k-xhr"));
exports.default = {
    get: function (url, options) {
        var xhrOptions = Object.assign({ url: url }, options);
        return k_xhr_1.default(xhrOptions).then(function (res) { return (jsonLike(res) ? JSON.parse(res) : res); });
    },
    post: function (url, data, options) {
        return send(url, "post", data, options);
    },
    put: function (url, data, options) {
        return send(url, "put", data, options);
    },
    del: function (url, options) {
        return k_xhr_1.default(Object.assign({ url: url, method: "delete" }, options)).then(function (res) { return (jsonLike(res) ? JSON.parse(res) : res); });
    }
};
function jsonLike(s) {
    var char0 = s.charAt(0);
    return char0 == "{" || char0 == "[";
}
function send(url, method, data, options) {
    var xhrOptions = Object.assign({ url: url, method: method, data: data }, options);
    if (data instanceof Object && data.constructor == Object) {
        Object.assign(xhrOptions, {
            contentType: "application/json",
            data: JSON.stringify(data)
        });
    }
    var xhr = k_xhr_1.default(xhrOptions);
    return xhr
        .then(function (res) { return (jsonLike(res) ? JSON.parse(res) : res); })
        .catch(function (e) {
        if (typeof e == "string" && jsonLike(e)) {
            xhr.error = JSON.parse(e);
        }
    });
}
//# sourceMappingURL=k-http.js.map