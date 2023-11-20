#!/bin/bash

echo "building Wasmnizer-ts compiler ..."
npm install
npm run build

echo "downloading dependencies ..."
cd runtime-library/deps
./download.sh
cd -

echo "building iwasm_gc ..."
mkdir -p runtime-library/build && cd runtime-library/build
cmake .. -DCMAKE_BUILD_TYPE=Debug -DWAMR_GC_IN_EVERY_ALLOCATION=1 -DUSE_SANITIZER=1 -DWAMR_BUILD_AOT=1 -DWAMR_BUILD_SIMD=1 && make -j$(nproc)
cd -

echo ""
echo "please build wamrc under runtime-library/deps/wamr-gc/wamr-compiler/build with -DWAMR_BUILD_GC_BINARYEN=1"
echo "And run execute.sh after finished"

