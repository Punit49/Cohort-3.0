reconciliation 
Render and commit phase 
Diffing Algorithm
Fiber - React's Internal Reconciliation Engine

Reconciliation in React
Reconciliation is the algorithm React uses to compare the previous virtual DOM tree with the new one and determine the minimal set of changes needed to update the real DOM.

for reconciliation, Till 2015 react was following stack engine which works as synchronus, but from 2026, fibre is used, it is a new engine, 

Simple way to think about it
When state or props change, React doesn't update the real DOM directly. Instead it:

1. Builds a new virtual DOM tree
2. Compares it with the previous virtual DOM tree
3. Finds the differences
4. Updates only those parts in the real DOM

This comparison process is called Reconciliation.

<!-- Phase - 1 of reconciliation -->
Render Phase - In 

