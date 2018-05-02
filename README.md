# wp-rest-api-call-generator

[WIP] Tool with a long name to generate code for accessing your WP REST API endpoints

I don't have an exact timeline on when this will be complete and working. I just poke at it once in a while. ¯\_(ツ)\_/¯

## Usage

1.  `cp .env.example .env`
2.  `node src/index.js`
3.  Coming soon...

## Development

Pull requests welcome. See the purpose and roadmap below if you're interested in contributing!

## Intended purpose and roadmap:

My plan is to have a tool that can do all the dirty work of generating functions to access your site's API for you.
I want to be able to load the generated code into a project and call:

```
const post = await getPostsById(3);
console.log(post.title);
```

### Initial release goals:

* [x] Fetch and parse WP REST API schema into an object with modified params, args, etc. that we can pipe into a code template
* [x] Snapshot test the parser!
* [x] Support for fetch using apicase
* [x] Easily implement your own adapter <-- Implemented with [apicase](https://kelin2025.gitbooks.io/apicase/content/anatomy/adapters.html)!
* [ ] Verify that the generated code actually works ^^;

### Future goals?

* [ ] Task to transpile TypeScript to JavaScript
* [ ] TypeScript code template with type declarations
* [ ] Remove generation of `PUT`, `PATCH`, `DELETE`, `POST` requests they are fully supported.
* [ ] Find or create a test adapter with mock data so we can automate testing of the generated code.
* [ ] Properly implement non-GET requests
