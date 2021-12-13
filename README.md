# SendPalm Email Api

## Install

> npm install sendpalm

## Usage

1. Register an account at https://sendpalm.com/, and then get your auth token on the https://sendpalm.com/api page

2. Use in file:

   ```javascript
   //ES6
   import Email from 'sendpalm'
   //CommonJS
   //const Email = require('sendpalm')

   const email = new Email("your token")
   
   // Email Verify
   async function verify() {
     const result = await email.verify("email address")
     console.log(result)
   }
   
   // Send transactional emails
   async function send() {
     const result = await email.send(fromEmail, toEmail, subject, content, templateParams)
     console.log(result)
   }
   // Campaign sending
   async function sendCampaign() {
       const result = await email.sendCampaign(fromEmail, toEmail, subject, campaignId, templateParams)
       console.log(result)
   }
   ```

## Verification Response

For example, the verification email is service@sendpalm.com:

```json
[
  {
    "input": "service@sendpalm.com",
    "is_reachable": "safe",
    "misc": {
      "is_disposable": false,
      "is_role_account": true
    },
    "mx": {
      "accepts_mail": true,
      "records": [
        "m1.feishu.cn."
      ]
    },
    "smtp": {
      "can_connect_smtp": true,
      "has_full_inbox": false,
      "is_catch_all": false,
      "is_deliverable": true,
      "is_disabled": false
    },
    "syntax": {
      "address": "service@sendpalm.com",
      "domain": "sendpalm.com",
      "is_valid_syntax": true,
      "username": "service"
    }
  }
]
```

### `is_reachable field` = Email deliverability

For each email, SendPalm gives a confidence score in terms of deliverability in the is_reachable field. This field can take 4 values:

- `safe`: We guarantee a hard bounce rate lower than 2%. Bounce rates may still happen, because we connect to the email's SMTP server from a different IP address than you, and yours might be blacklisted.
- `invalid`: We guarantee with a confidence of 99% that this email is not deliverable.
- `risky`: The email address appears to exist, but has quality issues that may result in low engagement or a bounce. We don't recommend sending to these emails, and don't commit on an accuracy rate.
- `unknown`: It might happen on rare occasions that the email provider doesn't allow real-time verification of emails. In this case, there's unfortunately nothing Reacher can do. Please let us know if this happens, we're working on finding ways to solve these issues, which in most occasions are solved on a case-by-case basis.

### Detailed deliverability in other fields

If the 4 variants of the is_reachable field is not enough for your use case, then you can look into the other fields, which provide more details about the email address.

When you input an email address, Reacher starts analyzing the email in 4 areas.

1. ✏️ **Syntax Checks**: Syntax checks ensure that the email meets certain basic criteria such as whether it contains the "@" symbol within the email address.
2. 🌐 **Domain Name Checks**: Domain checking ensures that the email address contains a valid internet domain name, and validates if the featured domain is configured to accept mail.
3. ⚙️ **SMTP Checks**: This function checks that the address segment before the ‘@’ sign is a valid mailbox. This is the clever part, and what sets our service apart from many others.
4. 💡 **Misc Checks**: This function checks some miscelleanous information about the email address. As of today, it only checks if the email address is disposable, but we're looking to add checks around whether the email provider is free or not, if it's an role-based email address, or if it has been compromised in data breaches.
