# Path Generator (JavaScript)
This library generates string url path by getting entities and ids.

## How to use
```
npm install url-path-generator
```
To generate url:
```javascript
import urlPathGenerator from 'url-path-generator';
const example = urlPathGenerator.init('http://zara-co.com/')
    .addToPath('users', "550e8400-e29b-41d4-a716-446655440000")
    .addToPath('messages', "550e8400-e29b-41d4-a716-446655440000")
    .addToPath('attachments')
    .build();
console.log(example);
// it logs http://zara-co.com/users/550e8400-e29b-41d4-a716-446655440000/messages/550e8400-e29b-41d4-a716-446655440000/attachments
```
To get entity id:
```javascript
import urlPathGenerator from 'url-path-generator';
const example = urlPathGenerator.urlToPath('http://zara-co.com/users/550e8400-e29b-41d4-a716-446655440000/messages/550e8400-e29b-41d4-a716-446655440000/attachments')
    .getEntityId('users');
console.log(example);
// it logs 550e8400-e29b-41d4-a716-446655440000
```
