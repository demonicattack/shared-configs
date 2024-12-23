import { name, version } from '../package.json';

// eslint-disable-next-line @comments/disable-enable-pair
/* eslint-disable @import/no-named-as-default */
// eslint-disable-next-line @comments/disable-enable-pair
/* eslint-disable @import/no-named-as-default-member */
import interfacePrefix from './rules/interface-prefix';

export default {
    meta: {
        name,
        version,
    },
    rules: {
        'interface-prefix': interfacePrefix,
    },
};
