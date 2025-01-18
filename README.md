# React Router DOM v6 Unexpected Route Behavior

This repository demonstrates a common issue encountered when using React Router DOM v6: unexpected behavior with nested routes or route parameters.  The issue manifests as incorrect navigation or rendering of components.

The `bug.js` file shows the buggy code, while `bugSolution.js` provides the corrected implementation.  The solution often involves careful examination of route paths, parameter handling, and the use of `useParams` and `useLocation` hooks if needed.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the unexpected navigation behavior or rendering issues.

## Solution

The solution is provided in `bugSolution.js`.  Consult the comments in the code for details on the correction.