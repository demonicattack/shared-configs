const reformattedRules = (rules: Record<string, any>): Record<string, any> => {
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

        const newKeys = rule
            .replace('@typescript-eslint/', '@ts/')
            .replace('react/', '@react/')
            .replace('unicorn/', '@unicorn/');

        accumulator[newKeys] = rules[rule];
    }

    return accumulator;
};

export { reformattedRules };
