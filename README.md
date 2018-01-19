# Sky Bikes

## Introduction
The city wants to put in place a new bicycle rental program for all citizens; the name of the program is Sky Bikes!
However before going ahead with signing the contract, the mayor has mandated you to provide a visual prototype that
will simulate and explain the program, albeit on a simplified scale, to all stakeholders.

## Requirements
- Node 8.7.0 or above
- NPM 5.4.2 or above

## Structure
```text
skybikes/
├── public/
│── src/
│   ├── components/
│   ├── containers/
│   ├── lib/
│   ├── tests/
```

- `public` contains fake data for bike stations and users
- `components` contains components
- `containers` contains the main views
- `lib` contain functions helpers
- `tests` contains the functional tests (e2e)

## Model
`localstorage` and `sessionstorage` provides a powerful strategy for storage info into the client browser, the API it's incredible easy and allow us to have a quickly prototype with data persistence.

## Install
Via NPM:
```
npm install
```

## Usage
For this prototype, there are 4 basic users, which you can use to log in: 
- **SysAdmin**: sysadmin@sb.co
- **Citizen Worker**: sbworker@sb.co
- **Banned user**: janedoe@citizens.co
- **Regular user**: johndoe@citizens.co

Also, you can create your own users using the Register Form.

## Run
Run the project:
```
npm start
```

Run the unit tests:
```
npm test
```

Run the functiontal test:

```
npm run test-e2e
```