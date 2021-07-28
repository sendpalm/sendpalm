import EmailValidator from 'sendpalm-verify'

async function demo() {
    const emailValidator = new EmailValidator("your auth token")
    const result = await emailValidator.verify("email address")
    console.log(result)
}
demo()
