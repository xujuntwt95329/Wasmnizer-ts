# Getting Started

## Build the compiler
1. clone the repo
    ``` bash
    git clone https://github.com/intel/Wasmnizer-ts.git
    ```

2. install the dependencies
    ``` bash
    cd Wasmnizer-ts
    npm install
    ```

3. build

    ``` bash
    npm run build
    ```

## Build ts source code

``` bash
cd build
node cli/ts2wasm.js --opt=3 <source> -o out.wasm
```

## Build wasm module to AoT module

``` bash
# Build WAMR AoT compiler
cd runtime-library/deps/wamr-gc/wamr-compiler
## Follow the instructions in the README.md to build wamrc (please add -DWAMR_BUILD_GC_BINARYEN=1 during cmake configuration)
# Generate AoT module
/path/to/wamrc --enable-gc -o out.aot out.wasm
```

Please refer to [developer guide](./developer-guide/index.md) for feature description.

## Execute the generated module

- Execute on WAMR

    Refer to [iwasm_gc](../runtime-library/README.md)

## Source debugging (browser only)

To debug the generated wasm module, use `--debug --sourceMap` command line options to generate wasm module containing source map.

```bash
node cli/ts2wasm.js <source> -o out.wasm --debug --sourceMap
```
