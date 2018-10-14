# broadcast-chatfuel
Simple package to post broadcast chatfuel

*How to install?*

```bash
npm install broadcast-chatfuel
```
*How to use?*

```javascript
var broadcast = require('../index')({ botID: '<YOUR-BOT-ID>' , token:'<YOUR-TOKEN>'})

broadcast(options).then(...)


```
__Argument__

 *`options`: is an `object` or `array` of `object`.  
 
 *`object`:
     
 *`userID`: userID.
       
 *`blockName`: name of block chatfuel.
       
 *`attributes`: an `object` of many.

*Example:*
```javascript
const broadcast = require('../index')({ botID: '<YOUR-BOT-ID>' , token:'<YOUR-TOKEN>'})


broadcast({
    userID: '<UID>',
    blockName: 'test_broadcast',
    attributes:{
        key1: 'Hello it\'s test message number 0'
    }
}).then(console.log)
```
