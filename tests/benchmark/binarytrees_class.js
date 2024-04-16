"use strict";
/* This file is modified base on:
 *  https://github.com/hanabi1224/Programming-Language-Benchmarks/blob/main/bench/algorithm/binarytrees/1.ts
 */

var Tree = /** @class */ (function () {
    function Tree(left, right) {
        this.left = null;
        this.right = null;
        this.left = left;
        this.right = right;
    }
    return Tree;
}());
function main() {
    var maxDepth = Math.max(10, 0);
    var stretchDepth = maxDepth + 1;
    var stretchTree = createTree(stretchDepth);
    //console.log(`stretch tree of depth ${stretchDepth} check: ${checksum(stretchTree)}`)
    var longLivedTree = createTree(maxDepth);
    for (var depth = 4; depth <= maxDepth; depth += 2) {
        var iterations = Math.pow(2, maxDepth) - depth + 4;
        var sum = 0;
        for (var i = 0; i < iterations; i++) {
            var tree = createTree(depth);
            sum += checksum(tree);
        }
        // console.log(`${iterations} trees of depth ${depth} check: ${sum}`)
    }
}

function checksum(node) {
    if (!node) {
        return 1;
    }
    if (!node.left) {
        return 1;
    }
    return 1 + checksum(node.left) + checksum(node.right);
}
function createTree(depth) {
    if (depth > 0) {
        depth--;
        return new Tree(createTree(depth), createTree(depth));
    }
    else {
        return new Tree(null, null);
    }
}

main()
