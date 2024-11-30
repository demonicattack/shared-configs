const typeOf = (t: unknown): string =>
    Object.prototype.toString
        .call(t)
        // eslint-disable-next-line prefer-named-capture-group
        .replace(/^\[object (.+)\]$/u, '$1')
        .toLowerCase();

export { typeOf };
