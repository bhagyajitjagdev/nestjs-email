## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## To Test

- Add environment variables (you can use `dotenv` / `@nestjs/config`)
- The code is set of aws ses service, change it in the `email.module.ts` to use any other service
- In the `user.controller.ts` you can find the trigger for the events
- Call the api to trigger the email
