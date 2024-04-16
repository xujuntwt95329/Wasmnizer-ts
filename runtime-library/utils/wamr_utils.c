/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

/* This file provide APIs to access WAMR internal data structures, this should
 * be removed if these APIs are directly implemented in WAMR */

#include "wasm_exec_env.h"
#include "wasm_runtime.h"
#if WASM_ENABLE_AOT != 0
#include "aot_runtime.h"
#endif
#include "wasm_runtime_common.h"

void *
wamr_utils_get_table_element(WASMExecEnv *exec_env, uint32_t index)
{
    WASMModuleInstanceCommon *module_inst =
        wasm_exec_env_get_module_inst(exec_env);

#if WASM_ENABLE_INTERP != 0
    if (module_inst->module_type == Wasm_Module_Bytecode) {
        WASMModuleInstance *wasm_module_inst =
            (WASMModuleInstance *)module_inst;
        WASMTableInstance *table_inst = wasm_module_inst->tables[0];
        return table_inst->elems[index];
    }
#endif
#if WASM_ENABLE_AOT != 0
    if (module_inst->module_type == Wasm_Module_AoT) {
        WASMModuleInstance *aot_module_inst = (WASMModuleInstance *)module_inst;
        AOTModule *module = (AOTModule *)aot_module_inst->module;
        AOTTableInstance *table_inst =
            (AOTTableInstance *)(aot_module_inst->global_data
                                 + module->global_data_size);
        return table_inst->elems[index];
    }
#endif

    return NULL;
}
