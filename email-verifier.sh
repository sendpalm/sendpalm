#Change the authorization:6100013956d77b69cf6e9739 to your token
curl -H "Content-Type: application/json" -H 'authorization: 6100013956d77b69cf6e9739'  -d '{"fromEmail":"test@gmail.com","toEmail":"service@sendpalm.com"}' -X POST https://sendpalm.com/api/check_email
