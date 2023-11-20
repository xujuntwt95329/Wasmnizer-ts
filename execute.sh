#!/bin/bash

echo "building ts source code to wasm ..."
node build/cli/ts2wasm.js --opt=3 test.ts -o test.wasm

echo "building wasm to aot ..."
./runtime-library/deps/wamr-gc/wamr-compiler/build/wamrc --enable-gc -o test.aot test.wasm

echo "executing aot file ..."
gdb -ex "set pagination off" \
	-ex "b dyntype_new_number_wrapper" \
	-ex "r" -ex "b aot_runtime.c:4058" \
	-ex "c" \
	-ex "echo frame_ref[17] should be 1 here, but actual value is:\n"	\
	-ex "p frame_ref[17]"  \
	--args  ./runtime-library/build/iwasm_gc -f infc_obj_get_method test.aot
