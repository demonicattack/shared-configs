const typeOf = (t: unknown) =>
    Object.prototype.toString
        .call(t)
        .replace(/^\[object (.+)\]$/u, '$1')
        .toLowerCase();

export { typeOf };
