# 2.10 Publishing to NPM

# @nooks/use-title

## React Hook to update your document's title

1. `npm init`

```
package name: (usetitle) @nooks/use-title
version: (1.0.0)
description: React Hook to update your document's title
entry point: (index.js)
test command:
git repository: https://github.com/Song-d-s/lecture-note/tree/main/react.js/hooks/2.10%20Publishing%20to%20NPM/useTitle
keywords: react, hooks, title
author: s2770853
license: (ISC) MIT
```

2. `npm i react react-dom --save`

- edit `package.json`
  - remove `scripts` part
  - change `dependencies` into `peerDependencies` like below
    ```json
      "peerDependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
      }
    ```

3. log-in and make a new organization at [npm](https://npmjs.com/org/create)

4. `npm login`
5. `npm publish --access public`
