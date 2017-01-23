import { assign, isJSON, isObject } from 'k-util'
import kXhr from 'k-xhr'

export default {
  get(url, options) {
    return this.receive(url, 'get', options)
  },

  post(url, data, options) {
    return this.send(url, 'post', data, options)
  },

  put(url, data, options) {
    return this.send(url, 'put', data, options)
  },

  del(url, options) {
    return this.receive(url, 'delete', options)
  },

  receive(url, method, options) {
    return kXhr(assign({ url, method }, options))
      .then(responseText => isJSON(responseText) ? JSON.parse(responseText) : responseText)
      .catch(function(e) {
        if (isJSON(e)) {
          this.error = JSON.parse(e)
        }
      })
  },

  send(url, method, data, options = {}) {
    if (data) {
      options.data = data
      if (isObject(data) && data.constructor === Object) {
        assign(options, {
          contentType: 'application/json',
          data: JSON.stringify(data)
        })
      }
    }
    return this.receive(url, method, options)
  }
}
