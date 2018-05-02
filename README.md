# wp-rest-api-call-generator

[WIP] Tool with a long name to generate code for accessing your WP REST API endpoints

I don't have an exact timeline on when this will be complete and working. I just poke at it once in a while. ¯\_(ツ)\_/¯

## Development

Pull requests welcome. See the purpose and roadmap below if you're interested in contributing!

## Getting Started

This project is under initial development and is not intended for use in
production yet! Consider contributing to finish things up :)

1.  `cp .env.example .env`
2.  Update the values to reflect your own site and intended use
3.  `node src/index.js`
4.  Copy `wordpress-service.js` from the `output` directory into your project.

## Example code

```
import * as wpApi from './wordpress-service';
const post = wpApi.getPostsById(5).then(({ result: { body } }) => {
  console.log('response', body);
});
```

## Intended purpose and roadmap:

My plan is to have a tool that can do all the dirty work of generating functions to access your site's API for you.

### Initial release goals:

* [x] Fetch and parse WP REST API schema into an object with modified params, args, etc. that we can pipe into a code template
* [x] Snapshot test the parser!
* [x] Support for fetch using apicase
* [x] Easily implement your own adapter <-- Implemented with [apicase](https://kelin2025.gitbooks.io/apicase/content/anatomy/adapters.html)!
* [x] Verify that the generated code actually works ^^;
* [ ] Remove generation of `PUT`, `PATCH`, `DELETE`, `POST` requests they are fully supported.

### Future goals?

* [ ] Task to transpile TypeScript to JavaScript
* [ ] TypeScript code template with type declarations
* [ ] Find or create a test adapter with mock data so we can automate testing of the generated code.
* [ ] Properly implement non-GET requests
