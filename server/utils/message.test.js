const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
   it('should generate correct message object', () => {
       const from = 'Abdan';
       const text = 'Testing message';
       const message = generateMessage(from, text);

       expect(message.from).toBe(from);
       expect(message.text).toBe(text);
       expect(message).toInclude({from, text});
       expect(message.createdAt).toBeA('number');
   });
});