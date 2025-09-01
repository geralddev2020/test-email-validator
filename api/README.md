# Email Validation API

This NestJS API provides email validation and domain information.

## Tech Stack

- [NestJS](https://react.dev/) –  Node.js framework for scalable server-side applications
- [UserCheck](https://www.usercheck.com/) – Identifies and checks fake email addresses.

## Getting Started

1. Install dependencies:
   `npm install`

2. Configure environment variables in `.env` for email validation provider.

   ```bash
   # .env
   EMAIL_VALIDATOR=`https://api.usercheck.com/email/`
   EMAIL_VALIDATOR_TOKEN=`your_token`
   ```

3. Start the API server:
   `npm start`

### Endpoints

`POST /email-validator`: Validates an email address and returns domain details.

```json
// JSON format
{
  "email": "hello@temp.com"
}
```

### Running the test

```shell
# Jest
# still @todo
# need to add more tests
npm run test

# E2E
# still @todo
# need to add more tests
npm run test:e2e
```
