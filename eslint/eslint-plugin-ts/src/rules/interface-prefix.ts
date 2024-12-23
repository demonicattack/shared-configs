import type { CamelCase } from 'string-ts';

import { applyDefault, createRule } from '../utils';

const RULE_NAME = 'interface-prefix';
const defaultOptions = ['never'];

const isPrefixedWithI = (name: string): boolean => typeof name === 'string' && /^I[A-Z]/u.test(name);

// eslint-disable-next-line @ts/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @arca/no-default-export
export default createRule<[], CamelCase<typeof RULE_NAME>>({
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require that interface names be prefixed with `I`',
        },
        fixable: 'code',
        messages: {
            interfacePrefix: 'Interface names must be prefixed with `I`',
        },
        schema: [
            {
                type: 'string',
                default: 'always',
                enum: [
                    'always',
                    'never',
                ],
            },
        ],
    },
    name: RULE_NAME,
    create(context: any, options: any) {
        const option = applyDefault(defaultOptions, options)[0];
        const never = option !== 'always';
        return {
            // eslint-disable-next-line @ts/ban-ts-comment
            // @ts-expect-error
            TSInterfaceDeclaration(interfaceNode) {
                if (never) {
                    if (!isPrefixedWithI(interfaceNode.id.name)) {
                        context.report({
                            messageId: 'interfacePrefix',
                            node: interfaceNode.id,
                            // eslint-disable-next-line @ts/ban-ts-comment
                            // @ts-expect-error
                            fix(fixer) {
                                return fixer.replaceText(interfaceNode.id, `I${interfaceNode.id.name}`);
                            },
                        });
                    }
                } else if (isPrefixedWithI(interfaceNode.id.name)) {
                    context.report({
                        messageId: 'interfacePrefix',
                        node: interfaceNode.id,
                    });
                }
            },
        };
    },
    defaultOptions: [],
});

// const rule = createRule<[], CamelCase<typeof RULE_NAME>>({

// });

// export { rule };
