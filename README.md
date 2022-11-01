# React Performance

## Summary

- Reduce bundle size
  - [eager loading](https://github.com/chesterheng/react-performance/blob/main/src/components/CodeSplit.js#L3)
  - [lazy and Suspend](https://github.com/chesterheng/react-performance/blob/main/src/components/CodeSplit.js#L34)
  - [webpack magic comments](https://github.com/chesterheng/react-performance/blob/main/src/components/CodeSplit.js#L6)
  - network coverage tool
- Reduce render time
  - execution time < 16ms (1000ms / 60fps)
  - [useMemo](https://github.com/chesterheng/react-performance/blob/main/src/components/ExpensiveFunction.js#L11)
  - [web worker](https://github.com/chesterheng/react-performance/blob/main/src/utils/workerizedFilterCities.js#L1)
  - [console.time](https://github.com/chesterheng/react-performance/blob/main/src/utils/filterCities.js#L21) or performance tool 
- Avoid re-render
  - [useCallback](https://github.com/chesterheng/react-performance/blob/main/src/components/UseCallbackDemo.js#L11), useMemo
  - [memo](https://github.com/chesterheng/react-performance/blob/main/src/components/ListItem.js#L52)
  - [primitive props](https://github.com/chesterheng/react-performance/blob/main/src/components/ListItem.js#L9)
  - [separate contexts](https://github.com/chesterheng/react-performance/blob/main/src/components/OptimizeContextValue.js)
  - [colocation](https://github.com/chesterheng/react-performance/blob/main/src/components/DogNameInput.js#L7)
  - react profiler tool
- [Questions](https://www.notion.so/chesterheng/React-Performance-3a65b8935e2b4b1db0598da6129b2cc2) 
