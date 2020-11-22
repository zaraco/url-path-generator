# Path Generator (JavaScript)
This library generates string url path by getting entities and ids.

## How to use
```
npm install url-path-generator
```

```javascript
const path = new Path('http://zara-co.com/')
    .addToPath('users', "550e8400-e29b-41d4-a716-446655440000")
    .addToPath('messages', "550e8400-e29b-41d4-a716-446655440000")
    .addToPath('attachments')
    .build();
console.log(path);
// it logs http://zara-co.com/users/550e8400-e29b-41d4-a716-446655440000/messages/550e8400-e29b-41d4-a716-446655440000/attachments
```
