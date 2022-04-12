# react-media-viewer

![dawn-search](https://user-images.githubusercontent.com/103219497/162853381-ff816a2a-2aa6-42e6-a14f-2531e95d48c7.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can find usage of the `fetch` api in `src/App.tsx`. The `proxy` setting in `package.json` is used to ensure the requests go to `http://localhost:4041`.

The application contains a searchbar whose purpose is to communicate with a [media api](https://github.com/justin-p-trainor/go-digital-media-server) on port 4041. It uses typescript and Storybook and does not have other testing or animations.

In a production environment, the next steps I would likely take are:
* Adding animations
* As the app grew, I'd want to move the search logic from `App.tsx`
* Consider client-side optimizations depending on assumptions we can make about the server. For example, without fuzzy searching logic and without a dynamically updating database, the client doesn't really need to make requests to the server for each keystroke. After typing 'a', for instance, you already have all the results containing the letter 'a' and can use further keystrokes to just filter out results rather than requesting new results. A `trie` data structure might be appropriate in that case for quickly assembling all the relevant names.
* Consider alternative UIs - for example, maybe a nicely styled table-based UI would be more useful (that could integrate nicely with additional sorting / filtering capabilities)

To build and run for development, from the root folder:
```
npm install
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run storybook`

Runs storybook in development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.
