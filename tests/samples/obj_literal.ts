/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

export function simpleObject() {
    const obj1 = {
        a: 1,
        b: true,
        c: 'hi',
    };
    return obj1.a;
}
// 1

export function nestedObject() {
    const obj1 = {
        a: 1,
        b: true,
        c: {
            d: 4,
        },
    };
    return obj1.c.d;
}
// 4

export function moreNestedObject() {
    const obj1 = {
        a: 1,
        b: true,
        c: {
            d: 4,
            e: {
                f: false,
            },
        },
    };
    return obj1.c.e.f;
}

export function assignObjectLiteralToField() {
    const obj1 = {
        a: 1,
        b: true,
        c: {
            d: 4,
        },
    };
    obj1.c = {
        d: 6,
    };
    return obj1.c.d;
}
// 6

export function withMethodField() {
    const i = (m: number) => {
        return m * m;
    };
    const obj = {
        y: 11,
        x: i,
        z: {
            k: false,
            j: (x: number, y: number) => {
                return x + y;
            },
        },
    };
    return obj.z.j(8, 9) + obj.x(10);
}
// 117

class A {
    x = 'xxx';
}

class B extends A {
    y = 1;
}

export function structWithSameLayout() {
    const val = new A();

    const res = {
        xx: val.x,
        y: 1,
    };
    return res.y;
}

interface IA {
    name: string;
    say(n: number): number;
    say2(): void;
}

export function useThisInLiteralObj() {
    const a: IA = {
        name: "A",
        say(n: number) {
            console.log(this.name);
            return n;
        },
        say2() {
            console.log(this.name);
        }

    }
    console.log(a.say(1));
    a.say2();

    const b = {
        name: "B",
        say(n: number) {
            console.log(this.name);
            return n;
        },
        say2() {
            console.log(this.name);
        }
    }
    console.log(b.say(1));
    b.say2();

    const a2 = {
        name: "a2",
        say(n: number) {
            console.log(this.name);
            return n;
        },
        say2: function() {
            console.log(this.name);
        }
    }
    console.log(a2.say(1));
    a2.say2();
}

interface Node {
    x?: number;
    y?: string;
    z?: boolean;
}

export function infcInitWithLiteralObj_completion() {
    const literal1 = {x: 10};
    const node1: Node = {x: 10};
    console.log(node1.x);
    console.log(node1.y);
    console.log(node1.z);

    const literal2 = {z: false};
    const node2: Node = {z: false};
    console.log(node2.x);
    console.log(node2.y);
    console.log(node2.z);
}

export function infcInitWithLiteralObj_reorder() {
    const literal = {z: false, x: 10, y: 'hello'};
    const node: Node = {z: false, x: 10, y: 'hello'};
    console.log(node.x);
    console.log(node.y);
    console.log(node.z);
}

interface I {
    x?: string
    y: any
    z: string[]
}

class Bar {
    i: I;
    constructor() {
        this.i = { x: undefined, y: undefined, z: [] }
    }
}

export function assignClassFieldWithObjectLiteral() {
    const bar = new Bar();
    bar.i.z = ['hello'];
    console.log(bar.i.z[0]);
}

export function assignInfcFieldWithObjectLiteral() {
    const i: I =  { y: undefined, z: [] };
    i.z = ['world'];
    console.log(i.z[0]);
}

