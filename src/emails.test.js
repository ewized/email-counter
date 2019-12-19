import { serialize, countEmails } from './emails.js'

const emails = [
  'test.email@gmail.com',
  'test.email+spam@gmail.com',
  'testemail@gmail.com',
  'test.email@yahoo.com',
  'test.email+spam@yahoo.com',
  'testemail@yahoo.com',
]

describe('test emails', () => {
  test('should serilize', () => {
    let s = serialize('test.email+spam@gmail.com')
    console.log(s)
    if (s !== 'testemail@gmail.com') {
      throw 'not equal'
    }
  })
  test('should work', () => {
    let unique = countEmails(emails)
    console.log(unique)
    if (unique !== 2) {
      throw 'not equal'
    }
  })
})
