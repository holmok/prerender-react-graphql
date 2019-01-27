# prerender-react-graphql

__NOTE: This is not an optimal solution, and a work in progress.  Watch the commits not the versions.__

This example is just me playing around with the idea of prerendering a React app backed by GraphQL.  Why not determine the routes based off GraphQL quires?  This is far from a perfected solution and has some misses, but I will (and hopefully get some helpful pull requests) work on improving it. Check out the [CHANGELOG](./CHANGELOG.md) to watch the progress.

There are two parts of this project, a client ([React](https://reactjs.org) app using [Prerender SPA Plugin](https://github.com/chrisvfritz/prerender-spa-plugin#readme) to prerender) and a server ([Koa](https://koajs.com) app using [Apollo-Server v2](https://www.apollographql.com)).

The server has a short (2) list of books that drives a list and details page in the React app.  The prerender calls the GraphQL server to figure out the routes it needs render.

That's about it.

## Using it in Dev Mode
1) Clone the repo.
2) Next cd into the root of the project and run npm install: 
```bash
  $ cd client
  $ npm i
  $ cd ../server
  $ npm i
```
3) now that you in the `server` dir, just run it with:
```bash
$ npm start
```
 > This will start the GraphQL server with `--inspect`  and `nodemon` so you can debug  and it will restart on changes.
5) Now in another terminal, go to the `client` directory and run 
```bash
$ npm start
```
> This will start the dev server for the bootstrapped create-react app

## Using the Static Built Site
1) Make sure the GraphQL server is running (see steps 1-3 above).
2) Make sure you are in the `client` dir, and build the content:
```bash
$ npm run build
```
> This will prerender all the pages based of the routes that come from a GraphQL query, and put them in the `client/build` dir.
3) Now you can serve those built pages by running
```bash
$ npm run http
```
> This uses a node http-server to server up the pages.