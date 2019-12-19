// serialze the email remove . and anything after + but before @
export const serialize = value => {
  if (value) {
    let [ name, email ] = value.split('@')
    return `${name.replace(/(\.|\+(.)+)/g, '')}@${email}`
  }
  return ''
}

// Count the unique emails
export const countEmails = emails => {
  if (!emails) {
    return 0
  }
  return new Set(emails.map(email => serialize(email))).size
}
