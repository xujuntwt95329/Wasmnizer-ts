## Wasmnizer-ts benchmarks

These benchmarks are based on some open source efforts to measure performance of the `ts2wasm compiler`, please refer to below table for license information of every benchmark.

|  benchmark  |  source link  |   license   |
|  :-----:  |  :-----:  | :-----:  |
| binarytrees | [Programming-Language-Benchmarks](https://github.com/hanabi1224/Programming-Language-Benchmarks/blob/main/bench/algorithm/binarytrees/1.ts) | [MIT License](./MIT_LICENSE.txt) |
| mandelbrot | [wasm-mandelbrot](https://github.com/ColinEberhardt/wasm-mandelbrot/blob/master/assemblyscript/mandelbrot.ts) | |
| merkletrees | [Programming-Language-Benchmarks](https://github.com/hanabi1224/Programming-Language-Benchmarks/blob/main/bench/algorithm/merkletrees/1.ts) | [MIT License](./MIT_LICENSE.txt) |
| nbody | [Programming-Language-Benchmarks](https://github.com/hanabi1224/Programming-Language-Benchmarks/blob/main/bench/algorithm/nbody/6.ts) | [MIT License](./MIT_LICENSE.txt) |
| spectral_norm | [The Benchmarks Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/program/spectralnorm-typescript-1.html) | [3-Clause BSD License](./BSD_LICENSE.txt) |

## Run

1. Prepare runtime environment

- WAMR

    ``` bash
    cd runtime-library
    ./build.sh
    ```

- quickjs

    ``` bash
    cd runtime-library/deps/quickjs
    make
    export PATH=$(pwd):$PATH
    ```

2. execute `run_benchmark.js` script

    ``` bash
    cd tests/benchmarks
    node run_benchmark.js
    # run multiple times to get average result
    node run_benchmark.js --times 3
    # run specific benchmark
    node run_benchmark.js --benchmark binarytrees
    # run specific runtime mode
    node run_benchmark.js --runtimes wamr-aot # (wamr-aot | wamr-interp | qjs | node)
    # get result after multiple times warm up
    node run_benchmark.js --warmup 3
    ```

## Validate benchmark result

When writing benchmarks, it is recommended to add verification of the benchmark execution results. One approach is to print `Validate result error when executing [benchmark name]` if the execution result is incorrect. For example, to validate the result of `quicksort`:

```typescript
if (arr[0] !== minimum || arr[size - 1] !== maxinum) {
    console.log('Validate result error when executing quicksort');
}
```

> Note: Currently Wasmnizer-ts is under functionality development, the performance optimization is not on high priority.
