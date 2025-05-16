Create our own "create-react-app"

We need bundler to ship a production ready app, so we'll use Varcel today to achive the same.

Why are we using npm in this react app ?
A React app is powered by a lot of packages, which packages are present by using NPM. Like bundle, minify, chunking etc.

Parcel functionalities we saw:
1. HMR: Hot Module replacement
   How it(HMR) works: File watcher algo, written in c++.
2. Minifying - see dist folder
3. Bundling - see dist folder
4. Cleaning our code - removing console.log - see dist folder
5. Building prod and dev build very fast
6. Image optimisation
7. Caching while development
8. Compression - see variable names in js files in dist folder
9. Add polyfills
10. enable HTTPS on local dev builds as well (npx parcel index.html --https)
11. POrt number management
12. Consistent hashing algorithm

Errors & their solutions:
1:
🚨 Build failed.

@parcel/transformer-js: Browser scripts cannot have imports or exports.
solution:
add attribute type="module" to script tag