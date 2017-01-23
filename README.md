# k-http
Easy http based on k-xhr

## Installation
#### Node
```
npm install k-http
```
#### Browser
```
<script src="node_modules/k-http/dist/k-http.min.js"></script>
```

## QuickStart
```javascript
import kHttp from 'k-http'

kHttp
    .get('/example.json')
    .then(o => console.log(Object.keys(o))) // o will be the parsed object
    .catch(e => console.error(e)) // e will be the responseText or status code
    .finally(() => console.log('http request finished'))
```

## Methods
- ```get(url: String, [options: Object])```

- ```post(url: String, [data: Any], [options: Object])```

- ```put(url: String, [data: Any], [options: Object])```

- ```del(url: String, [options: Object])```

- ```then(h: Function)```

- ```catch(h: Function)```

- ```finally(h: Function)```

```options``` are the same as ```k-xhr```
