# Contributing or submitting a wallpaper? Look here first

## Submitting a wallpaper

Simple. Create an issue and follow what the template says.

*What if I know my way around GitHub?*
You could make life easier for us by making a PR with the image stored in the `wallpapers` folder. The template will have all the info required.

## For contributing

Written with Expo and React Native, this project is. Ejected from [CRNA](https://github.com/react-community/create-react-native-app) so you don't get all the comfort you got from react-native-scripts anymore :sunglasses:

How does it work?
[Basically, like an Expo project.](https://docs.expo.io/)

### Getting started

Install Expo XDE by downloading them from [Expo](https://expo.io) or install `exp` if you prefer the command line from `npm/yarn` via:

```zsh
yarn global add exp
npm i -g exp
```

### Running the application

Open Expo XDE in the project folder or if you are using `exp`, then run `exp start` in the project directory. Then download the Expo client for Android and connect to your application via the QR code Expo XDE provides or the link provided by both the command line and `exp`.

P.S. For hot reloading/HMR, shake your phone, disable Live Reload if it's enabled, and enable Hot Reloading if it isn't enabled already. For this to work, make sure Expo XDE is in development mode by clicking the gear next to the Expo access link.

#### For emulators

Use the Device button in Expo XDE for this.

### Running tests (there aren't any (yet))

`yarn test` or `npm run test`

### Creating an apk

Start Expo XDE or run `exp start`.
Then, in another terminal, go to the project directory  and run `exp build:android`

### Writing code

We're a bit lax here. Write code in the standard code style. Use ESLint and Flow. Write tests with Jest and Enzyme/react-test-renderer whenever possible (we don't have any yet, but we're encouraging them). Avoid touching the dependencies. We ignore npm5 lockfiles (sorry, but we find them buggy).

We use ESNext because we're that sort of people.