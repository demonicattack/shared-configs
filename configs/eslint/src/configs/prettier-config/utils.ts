const reformattedRules = (rules: Record<string, any>) => {
    const accumulator: Record<string, any> = {};

    for (const rule in rules) {
        if (
            rule.startsWith('babel/') ||
            rule.startsWith('@babel/') ||
            rule.startsWith('vue/') ||
            rule.startsWith('standard/') ||
            rule.startsWith('flowtype/')
        )
            continue;

        const newKey = rule.startsWith('@typescript-eslint/') ? rule.replace('@typescript-eslint/', 'ts/') : rule;
        accumulator[newKey] = rules[rule];
    }

    return accumulator;
};

export { reformattedRules };
