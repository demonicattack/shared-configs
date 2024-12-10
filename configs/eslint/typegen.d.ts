/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface RuleOptions {
  /**
   * disallow using shorthand boolean attributes
   * @see https://eslint-react.xyz/docs/rules/avoid-shorthand-boolean
   */
  '@eslint-react/avoid-shorthand-boolean'?: Linter.RuleEntry<[]>
  /**
   * disallow using shorthand fragment syntax
   * @see https://eslint-react.xyz/docs/rules/avoid-shorthand-fragment
   */
  '@eslint-react/avoid-shorthand-fragment'?: Linter.RuleEntry<[]>
  /**
   * report all class components, including anonymous ones
   * @see https://eslint-react.xyz/docs/rules/debug-class-component
   */
  '@eslint-react/debug/class-component'?: Linter.RuleEntry<[]>
  /**
   * report all function components, including anonymous ones
   * @see https://eslint-react.xyz/docs/rules/debug-function-component
   */
  '@eslint-react/debug/function-component'?: Linter.RuleEntry<[]>
  /**
   * report all React Hooks
   * @see https://eslint-react.xyz/docs/rules/debug-hook
   */
  '@eslint-react/debug/hook'?: Linter.RuleEntry<[]>
  /**
   * report all identifiers that are initialized from React.
   * @see https://eslint-react.xyz/docs/rules/debug-is-from-react
   */
  '@eslint-react/debug/is-from-react'?: Linter.RuleEntry<[]>
  /**
   * report all React Hooks
   * @see https://eslint-react.xyz/docs/rules/debug-hook
   */
  '@eslint-react/debug/react-hooks'?: Linter.RuleEntry<[]>
  /**
   * disallow passing 'children' to void DOM elements
   * @see https://eslint-react.xyz/docs/rules/dom-no-children-in-void-dom-elements
   */
  '@eslint-react/dom/no-children-in-void-dom-elements'?: Linter.RuleEntry<[]>
  /**
   * disallow when a DOM component is using 'dangerouslySetInnerHTML'
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
   */
  '@eslint-react/dom/no-dangerously-set-innerhtml'?: Linter.RuleEntry<[]>
  /**
   * disallow when a DOM component is using both 'children' and 'dangerouslySetInnerHTML'
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
   */
  '@eslint-react/dom/no-dangerously-set-innerhtml-with-children'?: Linter.RuleEntry<[]>
  /**
   * disallow 'findDOMNode'
   * @see https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
   */
  '@eslint-react/dom/no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * enforce that button component have an explicit 'type' attribute
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
   */
  '@eslint-react/dom/no-missing-button-type'?: Linter.RuleEntry<[]>
  /**
   * enforce that 'iframe' component have an explicit 'sandbox' attribute
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
   */
  '@eslint-react/dom/no-missing-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * enforce that namespaces are not used in React elements
   * @see https://eslint-react.xyz/docs/rules/dom-no-namespace
   */
  '@eslint-react/dom/no-namespace'?: Linter.RuleEntry<[]>
  /**
   * disallow usage of the return value of 'ReactDOM.render'
   * @see https://eslint-react.xyz/docs/rules/dom-no-render-return-value
   */
  '@eslint-react/dom/no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * disallow 'javascript:' URLs as JSX event handler prop's value
   * @see https://eslint-react.xyz/docs/rules/dom-no-script-url
   */
  '@eslint-react/dom/no-script-url'?: Linter.RuleEntry<[]>
  /**
   * disallow usage of unknown DOM property
   * @see https://eslint-react.xyz/docs/rules/dom-no-unknown-property
   */
  '@eslint-react/dom/no-unknown-property'?: Linter.RuleEntry<EslintReactDomNoUnknownProperty>
  /**
   * disallow unsafe iframe 'sandbox' attribute combinations
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
   */
  '@eslint-react/dom/no-unsafe-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * disallow 'target="_blank"' on an external link without 'rel="noreferrer noopener"'
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
   */
  '@eslint-react/dom/no-unsafe-target-blank'?: Linter.RuleEntry<[]>
  /**
   * require a 'ref' parameter to be set when using 'forwardRef'
   * @see https://eslint-react.xyz/docs/rules/ensure-forward-ref-using-ref
   */
  '@eslint-react/ensure-forward-ref-using-ref'?: Linter.RuleEntry<[]>
  /**
   * enforce custom hooks to use at least one other hook inside
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-redundant-custom-hook
   */
  '@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary usage of 'useMemo'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo
   */
  '@eslint-react/hooks-extra/ensure-use-memo-has-non-empty-deps'?: Linter.RuleEntry<[]>
  /**
   * disallow direct calls to the 'set' function of 'useState' in 'useEffect'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-effect
   */
  '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect'?: Linter.RuleEntry<[]>
  /**
   * disallow direct calls to the 'set' function of 'useState' in 'useLayoutEffect'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-layout-effect
   */
  '@eslint-react/hooks-extra/no-direct-set-state-in-use-layout-effect'?: Linter.RuleEntry<[]>
  /**
   * enforce custom hooks to use at least one other hook inside
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-redundant-custom-hook
   */
  '@eslint-react/hooks-extra/no-redundant-custom-hook'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary usage of 'useCallback'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-callback
   */
  '@eslint-react/hooks-extra/no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary usage of 'useMemo'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo
   */
  '@eslint-react/hooks-extra/no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * disallow function calls in 'useState' that aren't wrapped in an initializer function
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-prefer-use-state-lazy-initialization
   */
  '@eslint-react/hooks-extra/prefer-use-state-lazy-initialization'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate props
   * @see https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props
   */
  '@eslint-react/jsx-no-duplicate-props'?: Linter.RuleEntry<[]>
  /**
   * a helper rule to mark variables as used
   * @see https://eslint-react.xyz/docs/rules/jsx-uses-vars
   */
  '@eslint-react/jsx-uses-vars'?: Linter.RuleEntry<[]>
  /**
   * enforce component naming convention to 'PascalCase' or 'CONSTANT_CASE'
   * @see https://eslint-react.xyz/docs/rules/naming-convention-component-name
   */
  '@eslint-react/naming-convention/component-name'?: Linter.RuleEntry<EslintReactNamingConventionComponentName>
  /**
   * enforce naming convention for JSX filenames
   * @see https://eslint-react.xyz/docs/rules/naming-convention-filename
   */
  '@eslint-react/naming-convention/filename'?: Linter.RuleEntry<EslintReactNamingConventionFilename>
  /**
   * enforce naming convention for JSX file extensions
   * @see https://eslint-react.xyz/docs/rules/naming-convention-filename-extension
   */
  '@eslint-react/naming-convention/filename-extension'?: Linter.RuleEntry<EslintReactNamingConventionFilenameExtension>
  /**
   * enforce destructuring and symmetric naming of 'useState' hook value and setter variables
   * @see https://eslint-react.xyz/docs/rules/naming-convention-use-state
   */
  '@eslint-react/naming-convention/use-state'?: Linter.RuleEntry<[]>
  /**
   * disallow accessing 'this.state' within 'setState'
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  '@eslint-react/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * disallow using Array index as 'key'
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  '@eslint-react/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.count'
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  '@eslint-react/no-children-count'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.forEach'
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  '@eslint-react/no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.map'
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  '@eslint-react/no-children-map'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.only'
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  '@eslint-react/no-children-only'?: Linter.RuleEntry<[]>
  /**
   * disallow passing 'children' as props
   * @see https://eslint-react.xyz/docs/rules/no-children-prop
   */
  '@eslint-react/no-children-prop'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.toArray'
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  '@eslint-react/no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * disallow using class components
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  '@eslint-react/no-class-component'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'cloneElement'
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  '@eslint-react/no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * disallow comments from being inserted as text nodes
   * @see https://eslint-react.xyz/docs/rules/no-comment-textnodes
   */
  '@eslint-react/no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * disallow complex conditional rendering
   * @see https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering
   */
  '@eslint-react/no-complex-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * disallow complex conditional rendering
   * @see https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering
   */
  '@eslint-react/no-complicated-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'componentWillMount'
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  '@eslint-react/no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'componentWillReceiveProps'
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  '@eslint-react/no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'componentWillReceiveProps'
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  '@eslint-react/no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * disallow the use of '<Context.Provider>'
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  '@eslint-react/no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'createRef' in function components
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  '@eslint-react/no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'defaultProps' property in components
   * @see https://eslint-react.xyz/docs/rules/no-default-props
   */
  '@eslint-react/no-default-props'?: Linter.RuleEntry<[]>
  /**
   * disallow direct mutation of state
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  '@eslint-react/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate keys when rendering list
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  '@eslint-react/no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * disallow the use of 'forwardRef'
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  '@eslint-react/no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * disallow implicit 'key' props
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  '@eslint-react/no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * disallow problematic leaked values from being rendered
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  '@eslint-react/no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * require 'displayName' for 'memo' and 'forwardRef' components
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  '@eslint-react/no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * require 'key' when rendering list
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  '@eslint-react/no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * disallow using unstable nested components
   * @see https://eslint-react.xyz/docs/rules/no-nested-components
   */
  '@eslint-react/no-nested-components'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'propTypes' property in components
   * @see https://eslint-react.xyz/docs/rules/no-prop-types
   */
  '@eslint-react/no-prop-types'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'shouldComponentUpdate' in class component extends 'React.PureComponent'
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  '@eslint-react/no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'setState' in 'componentDidMount'
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  '@eslint-react/no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'setState' in 'componentDidUpdate'
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  '@eslint-react/no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'setState' in 'componentWillUpdate'
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  '@eslint-react/no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated string refs
   * @see https://eslint-react.xyz/docs/rules/no-string-refs
   */
  '@eslint-react/no-string-refs'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'UNSAFE_componentWillMount'
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  '@eslint-react/no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'UNSAFE_componentWillReceiveProps'
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  '@eslint-react/no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'UNSAFE_componentWillUpdate'
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  '@eslint-react/no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * disallow passing constructed values to context providers
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  '@eslint-react/no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * disallow using unstable value as default param in function component
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  '@eslint-react/no-unstable-default-props'?: Linter.RuleEntry<[]>
  /**
   * disallow unused class component members
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  '@eslint-react/no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * disallow unused state of class component
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  '@eslint-react/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary fragments
   * @see https://eslint-react.xyz/docs/rules/no-useless-fragment
   */
  '@eslint-react/no-useless-fragment'?: Linter.RuleEntry<EslintReactNoUselessFragment>
  /**
   * enforce using destructuring assignment in component props and context
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  '@eslint-react/prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * enforce React is imported via a namespace import
   * @see https://eslint-react.xyz/docs/rules/prefer-react-namespace-import
   */
  '@eslint-react/prefer-react-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * enforce read-only props in components
   * @see https://eslint-react.xyz/docs/rules/prefer-read-only-props
   */
  '@eslint-react/prefer-read-only-props'?: Linter.RuleEntry<[]>
  /**
   * enforce using shorthand boolean attributes
   * @see https://eslint-react.xyz/docs/rules/prefer-shorthand-boolean
   */
  '@eslint-react/prefer-shorthand-boolean'?: Linter.RuleEntry<[]>
  /**
   * enforce using fragment syntax instead of 'Fragment' component
   * @see https://eslint-react.xyz/docs/rules/prefer-shorthand-fragment
   */
  '@eslint-react/prefer-shorthand-fragment'?: Linter.RuleEntry<[]>
  /**
   * enforce that every 'addEventListener' in a component or custom hook has a corresponding 'removeEventListener'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
   */
  '@eslint-react/web-api/no-leaked-event-listener'?: Linter.RuleEntry<[]>
  /**
   * enforce that every 'setInterval' in a component or custom hook has a corresponding 'clearInterval'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
   */
  '@eslint-react/web-api/no-leaked-interval'?: Linter.RuleEntry<[]>
  /**
   * enforce cleanup of 'ResizeObserver' instances in components and custom hooks.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
   */
  '@eslint-react/web-api/no-leaked-resize-observer'?: Linter.RuleEntry<[]>
  /**
   * enforce that every 'setTimeout' in a component or custom hook has a corresponding 'clearTimeout'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
   */
  '@eslint-react/web-api/no-leaked-timeout'?: Linter.RuleEntry<[]>
  /**
   * Enforce font-display behavior with Google Fonts.
   * @see https://nextjs.org/docs/messages/google-font-display
   */
  '@next/next/google-font-display'?: Linter.RuleEntry<[]>
  /**
   * Ensure `preconnect` is used with Google Fonts.
   * @see https://nextjs.org/docs/messages/google-font-preconnect
   */
  '@next/next/google-font-preconnect'?: Linter.RuleEntry<[]>
  /**
   * Enforce `id` attribute on `next/script` components with inline content.
   * @see https://nextjs.org/docs/messages/inline-script-id
   */
  '@next/next/inline-script-id'?: Linter.RuleEntry<[]>
  /**
   * Prefer `next/script` component when using the inline script for Google Analytics.
   * @see https://nextjs.org/docs/messages/next-script-for-ga
   */
  '@next/next/next-script-for-ga'?: Linter.RuleEntry<[]>
  /**
   * Prevent assignment to the `module` variable.
   * @see https://nextjs.org/docs/messages/no-assign-module-variable
   */
  '@next/next/no-assign-module-variable'?: Linter.RuleEntry<[]>
  /**
   * Prevent client components from being async functions.
   * @see https://nextjs.org/docs/messages/no-async-client-component
   */
  '@next/next/no-async-client-component'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `next/script`'s `beforeInteractive` strategy outside of `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-before-interactive-script-outside-document
   */
  '@next/next/no-before-interactive-script-outside-document'?: Linter.RuleEntry<[]>
  /**
   * Prevent manual stylesheet tags.
   * @see https://nextjs.org/docs/messages/no-css-tags
   */
  '@next/next/no-css-tags'?: Linter.RuleEntry<[]>
  /**
   * Prevent importing `next/document` outside of `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-document-import-in-page
   */
  '@next/next/no-document-import-in-page'?: Linter.RuleEntry<[]>
  /**
   * Prevent duplicate usage of `<Head>` in `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-duplicate-head
   */
  '@next/next/no-duplicate-head'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `<head>` element.
   * @see https://nextjs.org/docs/messages/no-head-element
   */
  '@next/next/no-head-element'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `next/head` in `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-head-import-in-document
   */
  '@next/next/no-head-import-in-document'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `<a>` elements to navigate to internal Next.js pages.
   * @see https://nextjs.org/docs/messages/no-html-link-for-pages
   */
  '@next/next/no-html-link-for-pages'?: Linter.RuleEntry<NextNextNoHtmlLinkForPages>
  /**
   * Prevent usage of `<img>` element due to slower LCP and higher bandwidth.
   * @see https://nextjs.org/docs/messages/no-img-element
   */
  '@next/next/no-img-element'?: Linter.RuleEntry<[]>
  /**
   * Prevent page-only custom fonts.
   * @see https://nextjs.org/docs/messages/no-page-custom-font
   */
  '@next/next/no-page-custom-font'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `next/script` in `next/head` component.
   * @see https://nextjs.org/docs/messages/no-script-component-in-head
   */
  '@next/next/no-script-component-in-head'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `styled-jsx` in `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-styled-jsx-in-document
   */
  '@next/next/no-styled-jsx-in-document'?: Linter.RuleEntry<[]>
  /**
   * Prevent synchronous scripts.
   * @see https://nextjs.org/docs/messages/no-sync-scripts
   */
  '@next/next/no-sync-scripts'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `<title>` with `Head` component from `next/document`.
   * @see https://nextjs.org/docs/messages/no-title-in-document-head
   */
  '@next/next/no-title-in-document-head'?: Linter.RuleEntry<[]>
  /**
   * Prevent common typos in Next.js data fetching functions.
   */
  '@next/next/no-typos'?: Linter.RuleEntry<[]>
  /**
   * Prevent duplicate polyfills from Polyfill.io.
   * @see https://nextjs.org/docs/messages/no-unwanted-polyfillio
   */
  '@next/next/no-unwanted-polyfillio'?: Linter.RuleEntry<[]>
  /**
   * Enforce getter and setter pairs in objects and classes
   * @see https://eslint.org/docs/latest/rules/accessor-pairs
   */
  'accessor-pairs'?: Linter.RuleEntry<AccessorPairs>
  'arca/curly'?: Linter.RuleEntry<[]>
  'arca/import-absolutes'?: Linter.RuleEntry<ArcaImportAbsolutes>
  'arca/import-align'?: Linter.RuleEntry<ArcaImportAlign>
  'arca/import-ordering'?: Linter.RuleEntry<ArcaImportOrdering>
  'arca/import-quotes'?: Linter.RuleEntry<[]>
  'arca/jsx-import-react'?: Linter.RuleEntry<[]>
  'arca/jsx-longhand-props'?: Linter.RuleEntry<[]>
  'arca/jsx-no-html-attrs'?: Linter.RuleEntry<[]>
  'arca/jsx-no-string-styles'?: Linter.RuleEntry<[]>
  'arca/melted-constructs'?: Linter.RuleEntry<[]>
  'arca/newline-after-import-section'?: Linter.RuleEntry<ArcaNewlineAfterImportSection>
  /**
   * Enforce linebreaks after opening and before closing array brackets
   * @see https://eslint.org/docs/latest/rules/array-bracket-newline
   * @deprecated
   */
  'array-bracket-newline'?: Linter.RuleEntry<ArrayBracketNewline>
  /**
   * Enforce consistent spacing inside array brackets
   * @see https://eslint.org/docs/latest/rules/array-bracket-spacing
   * @deprecated
   */
  'array-bracket-spacing'?: Linter.RuleEntry<ArrayBracketSpacing>
  /**
   * Enforce `return` statements in callbacks of array methods
   * @see https://eslint.org/docs/latest/rules/array-callback-return
   */
  'array-callback-return'?: Linter.RuleEntry<ArrayCallbackReturn>
  /**
   * Enforce line breaks after each array element
   * @see https://eslint.org/docs/latest/rules/array-element-newline
   * @deprecated
   */
  'array-element-newline'?: Linter.RuleEntry<ArrayElementNewline>
  /**
   * Require braces around arrow function bodies
   * @see https://eslint.org/docs/latest/rules/arrow-body-style
   */
  'arrow-body-style'?: Linter.RuleEntry<ArrowBodyStyle>
  /**
   * Require parentheses around arrow function arguments
   * @see https://eslint.org/docs/latest/rules/arrow-parens
   * @deprecated
   */
  'arrow-parens'?: Linter.RuleEntry<ArrowParens>
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   * @see https://eslint.org/docs/latest/rules/arrow-spacing
   * @deprecated
   */
  'arrow-spacing'?: Linter.RuleEntry<ArrowSpacing>
  /**
   * Enforce the use of variables within the scope they are defined
   * @see https://eslint.org/docs/latest/rules/block-scoped-var
   */
  'block-scoped-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   * @see https://eslint.org/docs/latest/rules/block-spacing
   * @deprecated
   */
  'block-spacing'?: Linter.RuleEntry<BlockSpacing>
  /**
   * Enforce consistent brace style for blocks
   * @see https://eslint.org/docs/latest/rules/brace-style
   * @deprecated
   */
  'brace-style'?: Linter.RuleEntry<BraceStyle>
  /**
   * Require `return` statements after callbacks
   * @see https://eslint.org/docs/latest/rules/callback-return
   * @deprecated
   */
  'callback-return'?: Linter.RuleEntry<CallbackReturn>
  /**
   * Enforce camelcase naming convention
   * @see https://eslint.org/docs/latest/rules/camelcase
   */
  'camelcase'?: Linter.RuleEntry<Camelcase>
  /**
   * Enforce or disallow capitalization of the first letter of a comment
   * @see https://eslint.org/docs/latest/rules/capitalized-comments
   */
  'capitalized-comments'?: Linter.RuleEntry<CapitalizedComments>
  /**
   * Enforce that class methods utilize `this`
   * @see https://eslint.org/docs/latest/rules/class-methods-use-this
   */
  'class-methods-use-this'?: Linter.RuleEntry<ClassMethodsUseThis>
  /**
   * Require or disallow trailing commas
   * @see https://eslint.org/docs/latest/rules/comma-dangle
   * @deprecated
   */
  'comma-dangle'?: Linter.RuleEntry<CommaDangle>
  /**
   * Enforce consistent spacing before and after commas
   * @see https://eslint.org/docs/latest/rules/comma-spacing
   * @deprecated
   */
  'comma-spacing'?: Linter.RuleEntry<CommaSpacing>
  /**
   * Enforce consistent comma style
   * @see https://eslint.org/docs/latest/rules/comma-style
   * @deprecated
   */
  'comma-style'?: Linter.RuleEntry<CommaStyle>
  /**
   * require a `eslint-enable` comment for every `eslint-disable` comment
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
   */
  'comments/disable-enable-pair'?: Linter.RuleEntry<CommentsDisableEnablePair>
  /**
   * disallow a `eslint-enable` comment for multiple `eslint-disable` comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
   */
  'comments/no-aggregating-enable'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate `eslint-disable` comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
   */
  'comments/no-duplicate-disable'?: Linter.RuleEntry<[]>
  /**
   * disallow `eslint-disable` comments about specific rules
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
   */
  'comments/no-restricted-disable'?: Linter.RuleEntry<CommentsNoRestrictedDisable>
  /**
   * disallow `eslint-disable` comments without rule names
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
   */
  'comments/no-unlimited-disable'?: Linter.RuleEntry<[]>
  /**
   * disallow unused `eslint-disable` comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
   */
  'comments/no-unused-disable'?: Linter.RuleEntry<[]>
  /**
   * disallow unused `eslint-enable` comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
   */
  'comments/no-unused-enable'?: Linter.RuleEntry<[]>
  /**
   * disallow ESLint directive-comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-use.html
   */
  'comments/no-use'?: Linter.RuleEntry<CommentsNoUse>
  /**
   * require include descriptions in ESLint directive-comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html
   */
  'comments/require-description'?: Linter.RuleEntry<CommentsRequireDescription>
  /**
   * Enforce a maximum cyclomatic complexity allowed in a program
   * @see https://eslint.org/docs/latest/rules/complexity
   */
  'complexity'?: Linter.RuleEntry<Complexity>
  /**
   * Enforce consistent spacing inside computed property brackets
   * @see https://eslint.org/docs/latest/rules/computed-property-spacing
   * @deprecated
   */
  'computed-property-spacing'?: Linter.RuleEntry<ComputedPropertySpacing>
  /**
   * Require `return` statements to either always or never specify values
   * @see https://eslint.org/docs/latest/rules/consistent-return
   */
  'consistent-return'?: Linter.RuleEntry<ConsistentReturn>
  /**
   * Enforce consistent naming when capturing the current execution context
   * @see https://eslint.org/docs/latest/rules/consistent-this
   */
  'consistent-this'?: Linter.RuleEntry<ConsistentThis>
  /**
   * Require `super()` calls in constructors
   * @see https://eslint.org/docs/latest/rules/constructor-super
   */
  'constructor-super'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent brace style for all control statements
   * @see https://eslint.org/docs/latest/rules/curly
   */
  'curly'?: Linter.RuleEntry<Curly>
  /**
   * Require `default` cases in `switch` statements
   * @see https://eslint.org/docs/latest/rules/default-case
   */
  'default-case'?: Linter.RuleEntry<DefaultCase>
  /**
   * Enforce default clauses in switch statements to be last
   * @see https://eslint.org/docs/latest/rules/default-case-last
   */
  'default-case-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce default parameters to be last
   * @see https://eslint.org/docs/latest/rules/default-param-last
   */
  'default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent newlines before and after dots
   * @see https://eslint.org/docs/latest/rules/dot-location
   * @deprecated
   */
  'dot-location'?: Linter.RuleEntry<DotLocation>
  /**
   * Enforce dot notation whenever possible
   * @see https://eslint.org/docs/latest/rules/dot-notation
   */
  'dot-notation'?: Linter.RuleEntry<DotNotation>
  /**
   * Require or disallow newline at the end of files
   * @see https://eslint.org/docs/latest/rules/eol-last
   * @deprecated
   */
  'eol-last'?: Linter.RuleEntry<EolLast>
  /**
   * Require the use of `===` and `!==`
   * @see https://eslint.org/docs/latest/rules/eqeqeq
   */
  'eqeqeq'?: Linter.RuleEntry<Eqeqeq>
  /**
   * disallow accessor properties.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-accessor-properties.html
   */
  'es-x/no-accessor-properties'?: Linter.RuleEntry<[]>
  /**
   * disallow arbitrary module namespace names.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-arbitrary-module-namespace-names.html
   */
  'es-x/no-arbitrary-module-namespace-names'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Array.from` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-from.html
   */
  'es-x/no-array-from'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Array.isArray` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-isarray.html
   */
  'es-x/no-array-isarray'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Array.of` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-of.html
   */
  'es-x/no-array-of'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Array.prototype.at()` methods.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-at.html
   */
  'es-x/no-array-prototype-at'?: Linter.RuleEntry<EsXNoArrayPrototypeAt>
  /**
   * disallow the `Array.prototype.copyWithin` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-copywithin.html
   */
  'es-x/no-array-prototype-copywithin'?: Linter.RuleEntry<EsXNoArrayPrototypeCopywithin>
  /**
   * disallow the `Array.prototype.entries` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-entries.html
   */
  'es-x/no-array-prototype-entries'?: Linter.RuleEntry<EsXNoArrayPrototypeEntries>
  /**
   * disallow the `Array.prototype.every` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-every.html
   */
  'es-x/no-array-prototype-every'?: Linter.RuleEntry<EsXNoArrayPrototypeEvery>
  /**
   * disallow the `Array.prototype.fill` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-fill.html
   */
  'es-x/no-array-prototype-fill'?: Linter.RuleEntry<EsXNoArrayPrototypeFill>
  /**
   * disallow the `Array.prototype.filter` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-filter.html
   */
  'es-x/no-array-prototype-filter'?: Linter.RuleEntry<EsXNoArrayPrototypeFilter>
  /**
   * disallow the `Array.prototype.find` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-find.html
   */
  'es-x/no-array-prototype-find'?: Linter.RuleEntry<EsXNoArrayPrototypeFind>
  /**
   * disallow the `Array.prototype.findIndex` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-findindex.html
   */
  'es-x/no-array-prototype-findindex'?: Linter.RuleEntry<EsXNoArrayPrototypeFindindex>
  /**
   * disallow the `Array.prototype.{findLast,findLastIndex}` methods.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-findlast-findlastindex.html
   */
  'es-x/no-array-prototype-findlast-findlastindex'?: Linter.RuleEntry<EsXNoArrayPrototypeFindlastFindlastindex>
  /**
   * disallow the `Array.prototype.{flat,flatMap}` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-flat.html
   */
  'es-x/no-array-prototype-flat'?: Linter.RuleEntry<EsXNoArrayPrototypeFlat>
  /**
   * disallow the `Array.prototype.forEach` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-foreach.html
   */
  'es-x/no-array-prototype-foreach'?: Linter.RuleEntry<EsXNoArrayPrototypeForeach>
  /**
   * disallow the `Array.prototype.includes` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-includes.html
   */
  'es-x/no-array-prototype-includes'?: Linter.RuleEntry<EsXNoArrayPrototypeIncludes>
  /**
   * disallow the `Array.prototype.indexOf` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-indexof.html
   */
  'es-x/no-array-prototype-indexof'?: Linter.RuleEntry<EsXNoArrayPrototypeIndexof>
  /**
   * disallow the `Array.prototype.keys` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-keys.html
   */
  'es-x/no-array-prototype-keys'?: Linter.RuleEntry<EsXNoArrayPrototypeKeys>
  /**
   * disallow the `Array.prototype.lastIndexOf` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-lastindexof.html
   */
  'es-x/no-array-prototype-lastindexof'?: Linter.RuleEntry<EsXNoArrayPrototypeLastindexof>
  /**
   * disallow the `Array.prototype.map` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-map.html
   */
  'es-x/no-array-prototype-map'?: Linter.RuleEntry<EsXNoArrayPrototypeMap>
  /**
   * disallow the `Array.prototype.reduce` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-reduce.html
   */
  'es-x/no-array-prototype-reduce'?: Linter.RuleEntry<EsXNoArrayPrototypeReduce>
  /**
   * disallow the `Array.prototype.reduceRight` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-reduceright.html
   */
  'es-x/no-array-prototype-reduceright'?: Linter.RuleEntry<EsXNoArrayPrototypeReduceright>
  /**
   * disallow the `Array.prototype.some` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-some.html
   */
  'es-x/no-array-prototype-some'?: Linter.RuleEntry<EsXNoArrayPrototypeSome>
  /**
   * disallow the `Array.prototype.toReversed` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-toreversed.html
   */
  'es-x/no-array-prototype-toreversed'?: Linter.RuleEntry<EsXNoArrayPrototypeToreversed>
  /**
   * disallow the `Array.prototype.toSorted` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-tosorted.html
   */
  'es-x/no-array-prototype-tosorted'?: Linter.RuleEntry<EsXNoArrayPrototypeTosorted>
  /**
   * disallow the `Array.prototype.toSpliced` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-tospliced.html
   */
  'es-x/no-array-prototype-tospliced'?: Linter.RuleEntry<EsXNoArrayPrototypeTospliced>
  /**
   * disallow the `Array.prototype.values` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-values.html
   */
  'es-x/no-array-prototype-values'?: Linter.RuleEntry<EsXNoArrayPrototypeValues>
  /**
   * disallow the `Array.prototype.with` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-with.html
   */
  'es-x/no-array-prototype-with'?: Linter.RuleEntry<EsXNoArrayPrototypeWith>
  /**
   * disallow the `{Array,String}.prototype.at()` methods.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-string-prototype-at.html
   * @deprecated
   */
  'es-x/no-array-string-prototype-at'?: Linter.RuleEntry<EsXNoArrayStringPrototypeAt>
  /**
   * disallow the `ArrayBuffer.prototype.transfer` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-arraybuffer-prototype-transfer.html
   */
  'es-x/no-arraybuffer-prototype-transfer'?: Linter.RuleEntry<EsXNoArraybufferPrototypeTransfer>
  /**
   * disallow arrow function expressions.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-arrow-functions.html
   */
  'es-x/no-arrow-functions'?: Linter.RuleEntry<[]>
  /**
   * disallow async function declarations.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-async-functions.html
   */
  'es-x/no-async-functions'?: Linter.RuleEntry<[]>
  /**
   * disallow async iteration.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-async-iteration.html
   */
  'es-x/no-async-iteration'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Atomics` class.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-atomics.html
   */
  'es-x/no-atomics'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Atomics.waitAsync` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-atomics-waitasync.html
   */
  'es-x/no-atomics-waitasync'?: Linter.RuleEntry<[]>
  /**
   * disallow `bigint` syntax and built-ins
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-bigint.html
   */
  'es-x/no-bigint'?: Linter.RuleEntry<[]>
  /**
   * disallow binary numeric literals.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-binary-numeric-literals.html
   */
  'es-x/no-binary-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow block-scoped function declarations.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-block-scoped-functions.html
   */
  'es-x/no-block-scoped-functions'?: Linter.RuleEntry<[]>
  /**
   * disallow block-scoped variable declarations.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-block-scoped-variables.html
   */
  'es-x/no-block-scoped-variables'?: Linter.RuleEntry<[]>
  /**
   * disallow class fields.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-class-fields.html
   * @deprecated
   */
  'es-x/no-class-fields'?: Linter.RuleEntry<[]>
  /**
   * disallow instance class fields.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-class-instance-fields.html
   */
  'es-x/no-class-instance-fields'?: Linter.RuleEntry<[]>
  /**
   * disallow private class fields.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-class-private-fields.html
   */
  'es-x/no-class-private-fields'?: Linter.RuleEntry<[]>
  /**
   * disallow private class methods.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-class-private-methods.html
   */
  'es-x/no-class-private-methods'?: Linter.RuleEntry<[]>
  /**
   * disallow class static block.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-class-static-block.html
   */
  'es-x/no-class-static-block'?: Linter.RuleEntry<[]>
  /**
   * disallow static class fields.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-class-static-fields.html
   */
  'es-x/no-class-static-fields'?: Linter.RuleEntry<[]>
  /**
   * disallow class declarations.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-classes.html
   */
  'es-x/no-classes'?: Linter.RuleEntry<[]>
  /**
   * disallow computed properties.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-computed-properties.html
   */
  'es-x/no-computed-properties'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Date.now` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-date-now.html
   */
  'es-x/no-date-now'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Date.prototype.{getYear,setYear}` methods.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-date-prototype-getyear-setyear.html
   */
  'es-x/no-date-prototype-getyear-setyear'?: Linter.RuleEntry<EsXNoDatePrototypeGetyearSetyear>
  /**
   * disallow the `Date.prototype.toGMTString` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-date-prototype-togmtstring.html
   */
  'es-x/no-date-prototype-togmtstring'?: Linter.RuleEntry<EsXNoDatePrototypeTogmtstring>
  /**
   * disallow default parameters.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-default-parameters.html
   */
  'es-x/no-default-parameters'?: Linter.RuleEntry<[]>
  /**
   * disallow destructuring.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-destructuring.html
   */
  'es-x/no-destructuring'?: Linter.RuleEntry<[]>
  /**
   * disallow `import()` syntax
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-dynamic-import.html
   */
  'es-x/no-dynamic-import'?: Linter.RuleEntry<[]>
  /**
   * disallow the second parameter to `import()`
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-dynamic-import-options.html
   */
  'es-x/no-dynamic-import-options'?: Linter.RuleEntry<[]>
  /**
   * disallow Error Cause.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-error-cause.html
   */
  'es-x/no-error-cause'?: Linter.RuleEntry<[]>
  /**
   * disallow `escape` and `unescape`
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-escape-unescape.html
   */
  'es-x/no-escape-unescape'?: Linter.RuleEntry<[]>
  /**
   * disallow exponential operators.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-exponential-operators.html
   */
  'es-x/no-exponential-operators'?: Linter.RuleEntry<[]>
  /**
   * disallow `export * as ns`.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-export-ns-from.html
   */
  'es-x/no-export-ns-from'?: Linter.RuleEntry<[]>
  /**
   * disallow `for-of` statements.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-for-of-loops.html
   */
  'es-x/no-for-of-loops'?: Linter.RuleEntry<[]>
  /**
   * disallow function declarations in if statement clauses without using blocks.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-function-declarations-in-if-statement-clauses-without-block.html
   */
  'es-x/no-function-declarations-in-if-statement-clauses-without-block'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Function.prototype.bind` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-function-prototype-bind.html
   */
  'es-x/no-function-prototype-bind'?: Linter.RuleEntry<EsXNoFunctionPrototypeBind>
  /**
   * disallow generator function declarations.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-generators.html
   */
  'es-x/no-generators'?: Linter.RuleEntry<[]>
  /**
   * disallow the `globalThis` variable
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-global-this.html
   */
  'es-x/no-global-this'?: Linter.RuleEntry<[]>
  /**
   * disallow Hashbang comments.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-hashbang.html
   */
  'es-x/no-hashbang'?: Linter.RuleEntry<[]>
  /**
   * disallow Import Attributes.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-import-attributes.html
   */
  'es-x/no-import-attributes'?: Linter.RuleEntry<[]>
  /**
   * disallow `import.meta` meta property.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-import-meta.html
   */
  'es-x/no-import-meta'?: Linter.RuleEntry<[]>
  /**
   * disallow initializers in for-in heads.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-initializers-in-for-in.html
   */
  'es-x/no-initializers-in-for-in'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Intl.DateTimeFormat.prototype.formatRange` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-datetimeformat-prototype-formatrange.html
   */
  'es-x/no-intl-datetimeformat-prototype-formatrange'?: Linter.RuleEntry<EsXNoIntlDatetimeformatPrototypeFormatrange>
  /**
   * disallow the `DateTimeFormat.prototype.formatToParts` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-datetimeformat-prototype-formattoparts.html
   */
  'es-x/no-intl-datetimeformat-prototype-formattoparts'?: Linter.RuleEntry<EsXNoIntlDatetimeformatPrototypeFormattoparts>
  /**
   * disallow the `Intl.DisplayNames` object.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-displaynames.html
   */
  'es-x/no-intl-displaynames'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Intl.getCanonicalLocales` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-getcanonicallocales.html
   */
  'es-x/no-intl-getcanonicallocales'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Intl.ListFormat` object.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-listformat.html
   */
  'es-x/no-intl-listformat'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Intl.Locale` object.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-locale.html
   */
  'es-x/no-intl-locale'?: Linter.RuleEntry<[]>
  /**
   * disallow the `NumberFormat.prototype.formatRange` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-numberformat-prototype-formatrange.html
   */
  'es-x/no-intl-numberformat-prototype-formatrange'?: Linter.RuleEntry<EsXNoIntlNumberformatPrototypeFormatrange>
  /**
   * disallow the `NumberFormat.prototype.formatRangeToParts` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-numberformat-prototype-formatrangetoparts.html
   */
  'es-x/no-intl-numberformat-prototype-formatrangetoparts'?: Linter.RuleEntry<EsXNoIntlNumberformatPrototypeFormatrangetoparts>
  /**
   * disallow the `NumberFormat.prototype.formatToParts` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-numberformat-prototype-formattoparts.html
   */
  'es-x/no-intl-numberformat-prototype-formattoparts'?: Linter.RuleEntry<EsXNoIntlNumberformatPrototypeFormattoparts>
  /**
   * disallow the `Intl.PluralRules` object.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-pluralrules.html
   */
  'es-x/no-intl-pluralrules'?: Linter.RuleEntry<[]>
  /**
   * disallow the `PluralRules.prototype.selectRange` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-pluralrules-prototype-selectrange.html
   */
  'es-x/no-intl-pluralrules-prototype-selectrange'?: Linter.RuleEntry<EsXNoIntlPluralrulesPrototypeSelectrange>
  /**
   * disallow the `Intl.RelativeTimeFormat` object.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-relativetimeformat.html
   */
  'es-x/no-intl-relativetimeformat'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Intl.Segmenter` object.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-segmenter.html
   */
  'es-x/no-intl-segmenter'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Intl.supportedValuesOf` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-supportedvaluesof.html
   */
  'es-x/no-intl-supportedvaluesof'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Iterator` class.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator.html
   */
  'es-x/no-iterator'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Iterator.prototype.drop` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-drop.html
   */
  'es-x/no-iterator-prototype-drop'?: Linter.RuleEntry<EsXNoIteratorPrototypeDrop>
  /**
   * disallow the `Iterator.prototype.every` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-every.html
   */
  'es-x/no-iterator-prototype-every'?: Linter.RuleEntry<EsXNoIteratorPrototypeEvery>
  /**
   * disallow the `Iterator.prototype.filter` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-filter.html
   */
  'es-x/no-iterator-prototype-filter'?: Linter.RuleEntry<EsXNoIteratorPrototypeFilter>
  /**
   * disallow the `Iterator.prototype.find` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-find.html
   */
  'es-x/no-iterator-prototype-find'?: Linter.RuleEntry<EsXNoIteratorPrototypeFind>
  /**
   * disallow the `Iterator.prototype.flatMap` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-flatmap.html
   */
  'es-x/no-iterator-prototype-flatmap'?: Linter.RuleEntry<EsXNoIteratorPrototypeFlatmap>
  /**
   * disallow the `Iterator.prototype.forEach` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-foreach.html
   */
  'es-x/no-iterator-prototype-foreach'?: Linter.RuleEntry<EsXNoIteratorPrototypeForeach>
  /**
   * disallow the `Iterator.prototype.map` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-map.html
   */
  'es-x/no-iterator-prototype-map'?: Linter.RuleEntry<EsXNoIteratorPrototypeMap>
  /**
   * disallow the `Iterator.prototype.reduce` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-reduce.html
   */
  'es-x/no-iterator-prototype-reduce'?: Linter.RuleEntry<EsXNoIteratorPrototypeReduce>
  /**
   * disallow the `Iterator.prototype.some` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-some.html
   */
  'es-x/no-iterator-prototype-some'?: Linter.RuleEntry<EsXNoIteratorPrototypeSome>
  /**
   * disallow the `Iterator.prototype.take` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-take.html
   */
  'es-x/no-iterator-prototype-take'?: Linter.RuleEntry<EsXNoIteratorPrototypeTake>
  /**
   * disallow the `Iterator.prototype.toArray` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-toarray.html
   */
  'es-x/no-iterator-prototype-toarray'?: Linter.RuleEntry<EsXNoIteratorPrototypeToarray>
  /**
   * disallow the `JSON` class.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-json.html
   */
  'es-x/no-json'?: Linter.RuleEntry<[]>
  /**
   * disallow JSON Modules.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-json-modules.html
   */
  'es-x/no-json-modules'?: Linter.RuleEntry<[]>
  /**
   * disallow `\u2028` and `\u2029` in string literals.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-json-superset.html
   */
  'es-x/no-json-superset'?: Linter.RuleEntry<[]>
  /**
   * disallow reserved words as property names.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-keyword-properties.html
   */
  'es-x/no-keyword-properties'?: Linter.RuleEntry<[]>
  /**
   * disallow labelled function declarations.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-labelled-function-declarations.html
   */
  'es-x/no-labelled-function-declarations'?: Linter.RuleEntry<[]>
  /**
   * disallow legacy `Object.prototype` accessor methods.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-legacy-object-prototype-accessor-methods.html
   */
  'es-x/no-legacy-object-prototype-accessor-methods'?: Linter.RuleEntry<[]>
  /**
   * disallow logical assignment operators.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-logical-assignment-operators.html
   */
  'es-x/no-logical-assignment-operators'?: Linter.RuleEntry<[]>
  /**
   * disallow template literals with invalid escape sequences.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-malformed-template-literals.html
   */
  'es-x/no-malformed-template-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Map` class.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-map.html
   */
  'es-x/no-map'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Map.groupBy()` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-map-groupby.html
   */
  'es-x/no-map-groupby'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.acosh` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-acosh.html
   */
  'es-x/no-math-acosh'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.asinh` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-asinh.html
   */
  'es-x/no-math-asinh'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.atanh` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-atanh.html
   */
  'es-x/no-math-atanh'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.cbrt` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-cbrt.html
   */
  'es-x/no-math-cbrt'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.clz32` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-clz32.html
   */
  'es-x/no-math-clz32'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.cosh` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-cosh.html
   */
  'es-x/no-math-cosh'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.expm1` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-expm1.html
   */
  'es-x/no-math-expm1'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.fround` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-fround.html
   */
  'es-x/no-math-fround'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.hypot` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-hypot.html
   */
  'es-x/no-math-hypot'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.imul` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-imul.html
   */
  'es-x/no-math-imul'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.log10` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-log10.html
   */
  'es-x/no-math-log10'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.log1p` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-log1p.html
   */
  'es-x/no-math-log1p'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.log2` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-log2.html
   */
  'es-x/no-math-log2'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.sign` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-sign.html
   */
  'es-x/no-math-sign'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.sinh` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-sinh.html
   */
  'es-x/no-math-sinh'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.tanh` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-tanh.html
   */
  'es-x/no-math-tanh'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Math.trunc` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-trunc.html
   */
  'es-x/no-math-trunc'?: Linter.RuleEntry<[]>
  /**
   * disallow modules.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-modules.html
   */
  'es-x/no-modules'?: Linter.RuleEntry<[]>
  /**
   * disallow `new.target` meta property.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-new-target.html
   */
  'es-x/no-new-target'?: Linter.RuleEntry<[]>
  /**
   * disallow non-standard static properties on `Array` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-array-properties.html
   */
  'es-x/no-nonstandard-array-properties'?: Linter.RuleEntry<EsXNoNonstandardArrayProperties>
  /**
   * disallow non-standard properties on Array instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-array-prototype-properties.html
   */
  'es-x/no-nonstandard-array-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardArrayPrototypeProperties>
  /**
   * disallow non-standard static properties on `ArrayBuffer` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-arraybuffer-properties.html
   */
  'es-x/no-nonstandard-arraybuffer-properties'?: Linter.RuleEntry<EsXNoNonstandardArraybufferProperties>
  /**
   * disallow non-standard properties on ArrayBuffer instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-arraybuffer-prototype-properties.html
   */
  'es-x/no-nonstandard-arraybuffer-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardArraybufferPrototypeProperties>
  /**
   * disallow non-standard static properties on `Atomics`
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-atomics-properties.html
   */
  'es-x/no-nonstandard-atomics-properties'?: Linter.RuleEntry<EsXNoNonstandardAtomicsProperties>
  /**
   * disallow non-standard static properties on `BigInt` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-bigint-properties.html
   */
  'es-x/no-nonstandard-bigint-properties'?: Linter.RuleEntry<EsXNoNonstandardBigintProperties>
  /**
   * disallow non-standard properties on BigInt instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-bigint-prototype-properties.html
   */
  'es-x/no-nonstandard-bigint-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardBigintPrototypeProperties>
  /**
   * disallow non-standard static properties on `Boolean` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-boolean-properties.html
   */
  'es-x/no-nonstandard-boolean-properties'?: Linter.RuleEntry<EsXNoNonstandardBooleanProperties>
  /**
   * disallow non-standard properties on Boolean instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-boolean-prototype-properties.html
   */
  'es-x/no-nonstandard-boolean-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardBooleanPrototypeProperties>
  /**
   * disallow non-standard static properties on `DataView` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-dataview-properties.html
   */
  'es-x/no-nonstandard-dataview-properties'?: Linter.RuleEntry<EsXNoNonstandardDataviewProperties>
  /**
   * disallow non-standard properties on DataView instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-dataview-prototype-properties.html
   */
  'es-x/no-nonstandard-dataview-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardDataviewPrototypeProperties>
  /**
   * disallow non-standard static properties on `Date` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-date-properties.html
   */
  'es-x/no-nonstandard-date-properties'?: Linter.RuleEntry<EsXNoNonstandardDateProperties>
  /**
   * disallow non-standard properties on Date instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-date-prototype-properties.html
   */
  'es-x/no-nonstandard-date-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardDatePrototypeProperties>
  /**
   * disallow non-standard static properties on `FinalizationRegistry` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-finalizationregistry-properties.html
   */
  'es-x/no-nonstandard-finalizationregistry-properties'?: Linter.RuleEntry<EsXNoNonstandardFinalizationregistryProperties>
  /**
   * disallow non-standard properties on FinalizationRegistry instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-finalizationregistry-prototype-properties.html
   */
  'es-x/no-nonstandard-finalizationregistry-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardFinalizationregistryPrototypeProperties>
  /**
   * disallow non-standard static properties on `Function` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-function-properties.html
   */
  'es-x/no-nonstandard-function-properties'?: Linter.RuleEntry<EsXNoNonstandardFunctionProperties>
  /**
   * disallow non-standard static properties on `Intl.Collator` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-collator-properties.html
   */
  'es-x/no-nonstandard-intl-collator-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlCollatorProperties>
  /**
   * disallow non-standard properties on Intl.Collator instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-collator-prototype-properties.html
   */
  'es-x/no-nonstandard-intl-collator-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlCollatorPrototypeProperties>
  /**
   * disallow non-standard static properties on `Intl.DateTimeFormat` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-datetimeformat-properties.html
   */
  'es-x/no-nonstandard-intl-datetimeformat-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlDatetimeformatProperties>
  /**
   * disallow non-standard properties on Intl.DateTimeFormat instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-datetimeformat-prototype-properties.html
   */
  'es-x/no-nonstandard-intl-datetimeformat-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlDatetimeformatPrototypeProperties>
  /**
   * disallow non-standard static properties on `Intl.DisplayNames` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-displaynames-properties.html
   */
  'es-x/no-nonstandard-intl-displaynames-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlDisplaynamesProperties>
  /**
   * disallow non-standard properties on Intl.DisplayNames instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-displaynames-prototype-properties.html
   */
  'es-x/no-nonstandard-intl-displaynames-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlDisplaynamesPrototypeProperties>
  /**
   * disallow non-standard static properties on `Intl.ListFormat` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-listformat-properties.html
   */
  'es-x/no-nonstandard-intl-listformat-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlListformatProperties>
  /**
   * disallow non-standard properties on Intl.ListFormat instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-listformat-prototype-properties.html
   */
  'es-x/no-nonstandard-intl-listformat-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlListformatPrototypeProperties>
  /**
   * disallow non-standard static properties on `Intl.Locale` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-locale-properties.html
   */
  'es-x/no-nonstandard-intl-locale-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlLocaleProperties>
  /**
   * disallow non-standard properties on Intl.Locale instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-locale-prototype-properties.html
   */
  'es-x/no-nonstandard-intl-locale-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlLocalePrototypeProperties>
  /**
   * disallow non-standard static properties on `Intl.NumberFormat` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-numberformat-properties.html
   */
  'es-x/no-nonstandard-intl-numberformat-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlNumberformatProperties>
  /**
   * disallow non-standard properties on Intl.NumberFormat instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-numberformat-prototype-properties.html
   */
  'es-x/no-nonstandard-intl-numberformat-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlNumberformatPrototypeProperties>
  /**
   * disallow non-standard static properties on `Intl.PluralRules` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-pluralrules-properties.html
   */
  'es-x/no-nonstandard-intl-pluralrules-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlPluralrulesProperties>
  /**
   * disallow non-standard properties on Intl.PluralRules instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-pluralrules-prototype-properties.html
   */
  'es-x/no-nonstandard-intl-pluralrules-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlPluralrulesPrototypeProperties>
  /**
   * disallow non-standard static properties on `Intl`
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-properties.html
   */
  'es-x/no-nonstandard-intl-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlProperties>
  /**
   * disallow non-standard static properties on `Intl.RelativeTimeFormat` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-relativetimeformat-properties.html
   */
  'es-x/no-nonstandard-intl-relativetimeformat-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlRelativetimeformatProperties>
  /**
   * disallow non-standard properties on Intl.RelativeTimeFormat instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-relativetimeformat-prototype-properties.html
   */
  'es-x/no-nonstandard-intl-relativetimeformat-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlRelativetimeformatPrototypeProperties>
  /**
   * disallow non-standard static properties on `Intl.Segmenter` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-segmenter-properties.html
   */
  'es-x/no-nonstandard-intl-segmenter-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlSegmenterProperties>
  /**
   * disallow non-standard properties on Intl.Segmenter instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-segmenter-prototype-properties.html
   */
  'es-x/no-nonstandard-intl-segmenter-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardIntlSegmenterPrototypeProperties>
  /**
   * disallow non-standard static properties on `Iterator` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-iterator-properties.html
   */
  'es-x/no-nonstandard-iterator-properties'?: Linter.RuleEntry<EsXNoNonstandardIteratorProperties>
  /**
   * disallow non-standard properties on Iterator instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-iterator-prototype-properties.html
   */
  'es-x/no-nonstandard-iterator-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardIteratorPrototypeProperties>
  /**
   * disallow non-standard static properties on `JSON`
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-json-properties.html
   */
  'es-x/no-nonstandard-json-properties'?: Linter.RuleEntry<EsXNoNonstandardJsonProperties>
  /**
   * disallow non-standard static properties on `Map` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-map-properties.html
   */
  'es-x/no-nonstandard-map-properties'?: Linter.RuleEntry<EsXNoNonstandardMapProperties>
  /**
   * disallow non-standard properties on Map instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-map-prototype-properties.html
   */
  'es-x/no-nonstandard-map-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardMapPrototypeProperties>
  /**
   * disallow non-standard static properties on `Math`
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-math-properties.html
   */
  'es-x/no-nonstandard-math-properties'?: Linter.RuleEntry<EsXNoNonstandardMathProperties>
  /**
   * disallow non-standard static properties on `Number` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-number-properties.html
   */
  'es-x/no-nonstandard-number-properties'?: Linter.RuleEntry<EsXNoNonstandardNumberProperties>
  /**
   * disallow non-standard properties on Number instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-number-prototype-properties.html
   */
  'es-x/no-nonstandard-number-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardNumberPrototypeProperties>
  /**
   * disallow non-standard static properties on `Object` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-object-properties.html
   */
  'es-x/no-nonstandard-object-properties'?: Linter.RuleEntry<EsXNoNonstandardObjectProperties>
  /**
   * disallow non-standard static properties on `Promise` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-promise-properties.html
   */
  'es-x/no-nonstandard-promise-properties'?: Linter.RuleEntry<EsXNoNonstandardPromiseProperties>
  /**
   * disallow non-standard properties on Promise instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-promise-prototype-properties.html
   */
  'es-x/no-nonstandard-promise-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardPromisePrototypeProperties>
  /**
   * disallow non-standard static properties on `Proxy` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-proxy-properties.html
   */
  'es-x/no-nonstandard-proxy-properties'?: Linter.RuleEntry<EsXNoNonstandardProxyProperties>
  /**
   * disallow non-standard static properties on `Reflect`
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-reflect-properties.html
   */
  'es-x/no-nonstandard-reflect-properties'?: Linter.RuleEntry<EsXNoNonstandardReflectProperties>
  /**
   * disallow non-standard static properties on `RegExp` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-regexp-properties.html
   */
  'es-x/no-nonstandard-regexp-properties'?: Linter.RuleEntry<EsXNoNonstandardRegexpProperties>
  /**
   * disallow non-standard properties on RegExp instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-regexp-prototype-properties.html
   */
  'es-x/no-nonstandard-regexp-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardRegexpPrototypeProperties>
  /**
   * disallow non-standard static properties on `Set` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-set-properties.html
   */
  'es-x/no-nonstandard-set-properties'?: Linter.RuleEntry<EsXNoNonstandardSetProperties>
  /**
   * disallow non-standard properties on Set instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-set-prototype-properties.html
   */
  'es-x/no-nonstandard-set-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardSetPrototypeProperties>
  /**
   * disallow non-standard static properties on `SharedArrayBuffer` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-sharedarraybuffer-properties.html
   */
  'es-x/no-nonstandard-sharedarraybuffer-properties'?: Linter.RuleEntry<EsXNoNonstandardSharedarraybufferProperties>
  /**
   * disallow non-standard properties on SharedArrayBuffer instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-sharedarraybuffer-prototype-properties.html
   */
  'es-x/no-nonstandard-sharedarraybuffer-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardSharedarraybufferPrototypeProperties>
  /**
   * disallow non-standard static properties on `String` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-string-properties.html
   */
  'es-x/no-nonstandard-string-properties'?: Linter.RuleEntry<EsXNoNonstandardStringProperties>
  /**
   * disallow non-standard properties on String instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-string-prototype-properties.html
   */
  'es-x/no-nonstandard-string-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardStringPrototypeProperties>
  /**
   * disallow non-standard static properties on `Symbol` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-symbol-properties.html
   */
  'es-x/no-nonstandard-symbol-properties'?: Linter.RuleEntry<EsXNoNonstandardSymbolProperties>
  /**
   * disallow non-standard properties on Symbol instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-symbol-prototype-properties.html
   */
  'es-x/no-nonstandard-symbol-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardSymbolPrototypeProperties>
  /**
   * disallow non-standard static properties on typed array class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-typed-array-properties.html
   */
  'es-x/no-nonstandard-typed-array-properties'?: Linter.RuleEntry<EsXNoNonstandardTypedArrayProperties>
  /**
   * disallow non-standard properties on typed array instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-typed-array-prototype-properties.html
   */
  'es-x/no-nonstandard-typed-array-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardTypedArrayPrototypeProperties>
  /**
   * disallow non-standard static properties on `WeakMap` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-weakmap-properties.html
   */
  'es-x/no-nonstandard-weakmap-properties'?: Linter.RuleEntry<EsXNoNonstandardWeakmapProperties>
  /**
   * disallow non-standard properties on WeakMap instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-weakmap-prototype-properties.html
   */
  'es-x/no-nonstandard-weakmap-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardWeakmapPrototypeProperties>
  /**
   * disallow non-standard static properties on `WeakRef` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-weakref-properties.html
   */
  'es-x/no-nonstandard-weakref-properties'?: Linter.RuleEntry<EsXNoNonstandardWeakrefProperties>
  /**
   * disallow non-standard properties on WeakRef instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-weakref-prototype-properties.html
   */
  'es-x/no-nonstandard-weakref-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardWeakrefPrototypeProperties>
  /**
   * disallow non-standard static properties on `WeakSet` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-weakset-properties.html
   */
  'es-x/no-nonstandard-weakset-properties'?: Linter.RuleEntry<EsXNoNonstandardWeaksetProperties>
  /**
   * disallow non-standard properties on WeakSet instance
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-weakset-prototype-properties.html
   */
  'es-x/no-nonstandard-weakset-prototype-properties'?: Linter.RuleEntry<EsXNoNonstandardWeaksetPrototypeProperties>
  /**
   * disallow nullish coalescing operators.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nullish-coalescing-operators.html
   */
  'es-x/no-nullish-coalescing-operators'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Number.EPSILON` property.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-epsilon.html
   */
  'es-x/no-number-epsilon'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Number.isFinite` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-isfinite.html
   */
  'es-x/no-number-isfinite'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Number.isInteger` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-isinteger.html
   */
  'es-x/no-number-isinteger'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Number.isNaN` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-isnan.html
   */
  'es-x/no-number-isnan'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Number.isSafeInteger` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-issafeinteger.html
   */
  'es-x/no-number-issafeinteger'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Number.MAX_SAFE_INTEGER` property.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-maxsafeinteger.html
   */
  'es-x/no-number-maxsafeinteger'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Number.MIN_SAFE_INTEGER` property.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-minsafeinteger.html
   */
  'es-x/no-number-minsafeinteger'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Number.parseFloat` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-parsefloat.html
   */
  'es-x/no-number-parsefloat'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Number.parseInt` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-parseint.html
   */
  'es-x/no-number-parseint'?: Linter.RuleEntry<[]>
  /**
   * disallow numeric separators.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-numeric-separators.html
   */
  'es-x/no-numeric-separators'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.assign` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-assign.html
   */
  'es-x/no-object-assign'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.create` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-create.html
   */
  'es-x/no-object-create'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.defineProperties` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-defineproperties.html
   */
  'es-x/no-object-defineproperties'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.defineProperty` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-defineproperty.html
   */
  'es-x/no-object-defineproperty'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.entries` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-entries.html
   */
  'es-x/no-object-entries'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.freeze` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-freeze.html
   */
  'es-x/no-object-freeze'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.fromEntries` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-fromentries.html
   */
  'es-x/no-object-fromentries'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.getOwnPropertyDescriptor` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-getownpropertydescriptor.html
   */
  'es-x/no-object-getownpropertydescriptor'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.getOwnPropertyDescriptors` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-getownpropertydescriptors.html
   */
  'es-x/no-object-getownpropertydescriptors'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.getOwnPropertyNames` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-getownpropertynames.html
   */
  'es-x/no-object-getownpropertynames'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.getOwnPropertySymbols` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-getownpropertysymbols.html
   */
  'es-x/no-object-getownpropertysymbols'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.getPrototypeOf` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-getprototypeof.html
   */
  'es-x/no-object-getprototypeof'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.groupBy()` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-groupby.html
   */
  'es-x/no-object-groupby'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.hasOwn` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-hasown.html
   */
  'es-x/no-object-hasown'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.is` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-is.html
   */
  'es-x/no-object-is'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.isExtensible` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-isextensible.html
   */
  'es-x/no-object-isextensible'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.isFrozen` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-isfrozen.html
   */
  'es-x/no-object-isfrozen'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.isSealed` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-issealed.html
   */
  'es-x/no-object-issealed'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.keys` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-keys.html
   */
  'es-x/no-object-keys'?: Linter.RuleEntry<[]>
  /**
   * disallow the `{Object,Map}.groupBy()` function (array grouping).
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-map-groupby.html
   * @deprecated
   */
  'es-x/no-object-map-groupby'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.preventExtensions` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-preventextensions.html
   */
  'es-x/no-object-preventextensions'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.seal` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-seal.html
   */
  'es-x/no-object-seal'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.setPrototypeOf` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-setprototypeof.html
   */
  'es-x/no-object-setprototypeof'?: Linter.RuleEntry<[]>
  /**
   * disallow `super` property accesses in object literals.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-super-properties.html
   */
  'es-x/no-object-super-properties'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Object.values` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-values.html
   */
  'es-x/no-object-values'?: Linter.RuleEntry<[]>
  /**
   * disallow octal numeric literals.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-octal-numeric-literals.html
   */
  'es-x/no-octal-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow optional `catch` binding.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-optional-catch-binding.html
   */
  'es-x/no-optional-catch-binding'?: Linter.RuleEntry<[]>
  /**
   * disallow optional chaining.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-optional-chaining.html
   */
  'es-x/no-optional-chaining'?: Linter.RuleEntry<[]>
  /**
   * disallow `#x in obj`.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-private-in.html
   */
  'es-x/no-private-in'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Promise` class.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-promise.html
   */
  'es-x/no-promise'?: Linter.RuleEntry<[]>
  /**
   * disallow `Promise.allSettled` function
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-promise-all-settled.html
   */
  'es-x/no-promise-all-settled'?: Linter.RuleEntry<[]>
  /**
   * disallow `Promise.any` function and `AggregateError` class
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-promise-any.html
   */
  'es-x/no-promise-any'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Promise.prototype.finally` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-promise-prototype-finally.html
   */
  'es-x/no-promise-prototype-finally'?: Linter.RuleEntry<EsXNoPromisePrototypeFinally>
  /**
   * disallow `Promise.try` function
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-promise-try.html
   */
  'es-x/no-promise-try'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Promise.withResolvers()` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-promise-withresolvers.html
   */
  'es-x/no-promise-withresolvers'?: Linter.RuleEntry<[]>
  /**
   * disallow property shorthands.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-property-shorthands.html
   */
  'es-x/no-property-shorthands'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Proxy` class.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-proxy.html
   */
  'es-x/no-proxy'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Reflect` class.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-reflect.html
   */
  'es-x/no-reflect'?: Linter.RuleEntry<[]>
  /**
   * disallow RegExp `d` flag.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-d-flag.html
   */
  'es-x/no-regexp-d-flag'?: Linter.RuleEntry<[]>
  /**
   * disallow RegExp duplicate named capturing groups.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-duplicate-named-capturing-groups.html
   */
  'es-x/no-regexp-duplicate-named-capturing-groups'?: Linter.RuleEntry<[]>
  /**
   * disallow RegExp lookbehind assertions.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-lookbehind-assertions.html
   */
  'es-x/no-regexp-lookbehind-assertions'?: Linter.RuleEntry<[]>
  /**
   * disallow RegExp Modifiers.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-modifiers.html
   */
  'es-x/no-regexp-modifiers'?: Linter.RuleEntry<[]>
  /**
   * disallow RegExp named capture groups.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-named-capture-groups.html
   */
  'es-x/no-regexp-named-capture-groups'?: Linter.RuleEntry<[]>
  /**
   * disallow the `RegExp.prototype.compile` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-prototype-compile.html
   */
  'es-x/no-regexp-prototype-compile'?: Linter.RuleEntry<EsXNoRegexpPrototypeCompile>
  /**
   * disallow the `RegExp.prototype.flags` property.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-prototype-flags.html
   */
  'es-x/no-regexp-prototype-flags'?: Linter.RuleEntry<EsXNoRegexpPrototypeFlags>
  /**
   * disallow RegExp `s` flag.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-s-flag.html
   */
  'es-x/no-regexp-s-flag'?: Linter.RuleEntry<[]>
  /**
   * disallow RegExp `u` flag.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-u-flag.html
   */
  'es-x/no-regexp-u-flag'?: Linter.RuleEntry<[]>
  /**
   * disallow RegExp Unicode property escape sequences.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-unicode-property-escapes.html
   */
  'es-x/no-regexp-unicode-property-escapes'?: Linter.RuleEntry<[]>
  /**
   * disallow the new values of RegExp Unicode property escape sequences in ES2019
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-unicode-property-escapes-2019.html
   */
  'es-x/no-regexp-unicode-property-escapes-2019'?: Linter.RuleEntry<[]>
  /**
   * disallow the new values of RegExp Unicode property escape sequences in ES2020
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-unicode-property-escapes-2020.html
   */
  'es-x/no-regexp-unicode-property-escapes-2020'?: Linter.RuleEntry<[]>
  /**
   * disallow the new values of RegExp Unicode property escape sequences in ES2021
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-unicode-property-escapes-2021.html
   */
  'es-x/no-regexp-unicode-property-escapes-2021'?: Linter.RuleEntry<[]>
  /**
   * disallow the new values of RegExp Unicode property escape sequences in ES2022
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-unicode-property-escapes-2022.html
   */
  'es-x/no-regexp-unicode-property-escapes-2022'?: Linter.RuleEntry<[]>
  /**
   * disallow the new values of RegExp Unicode property escape sequences in ES2023
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-unicode-property-escapes-2023.html
   */
  'es-x/no-regexp-unicode-property-escapes-2023'?: Linter.RuleEntry<[]>
  /**
   * disallow RegExp `v` flag.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-v-flag.html
   */
  'es-x/no-regexp-v-flag'?: Linter.RuleEntry<[]>
  /**
   * disallow RegExp `y` flag.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-y-flag.html
   */
  'es-x/no-regexp-y-flag'?: Linter.RuleEntry<[]>
  /**
   * disallow resizable and growable ArrayBuffers
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-resizable-and-growable-arraybuffers.html
   */
  'es-x/no-resizable-and-growable-arraybuffers'?: Linter.RuleEntry<EsXNoResizableAndGrowableArraybuffers>
  /**
   * disallow rest parameters.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-rest-parameters.html
   */
  'es-x/no-rest-parameters'?: Linter.RuleEntry<[]>
  /**
   * disallow rest/spread properties.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-rest-spread-properties.html
   */
  'es-x/no-rest-spread-properties'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Set` class.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set.html
   */
  'es-x/no-set'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Set.prototype.difference` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-difference.html
   */
  'es-x/no-set-prototype-difference'?: Linter.RuleEntry<EsXNoSetPrototypeDifference>
  /**
   * disallow the `Set.prototype.intersection` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-intersection.html
   */
  'es-x/no-set-prototype-intersection'?: Linter.RuleEntry<EsXNoSetPrototypeIntersection>
  /**
   * disallow the `Set.prototype.isDisjointFrom` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-isdisjointfrom.html
   */
  'es-x/no-set-prototype-isdisjointfrom'?: Linter.RuleEntry<EsXNoSetPrototypeIsdisjointfrom>
  /**
   * disallow the `Set.prototype.isSubsetOf` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-issubsetof.html
   */
  'es-x/no-set-prototype-issubsetof'?: Linter.RuleEntry<EsXNoSetPrototypeIssubsetof>
  /**
   * disallow the `Set.prototype.isSupersetOf` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-issupersetof.html
   */
  'es-x/no-set-prototype-issupersetof'?: Linter.RuleEntry<EsXNoSetPrototypeIssupersetof>
  /**
   * disallow the `Set.prototype.symmetricDifference` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-symmetricdifference.html
   */
  'es-x/no-set-prototype-symmetricdifference'?: Linter.RuleEntry<EsXNoSetPrototypeSymmetricdifference>
  /**
   * disallow the `Set.prototype.union` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-union.html
   */
  'es-x/no-set-prototype-union'?: Linter.RuleEntry<EsXNoSetPrototypeUnion>
  /**
   * disallow identifiers from shadowing catch parameter names.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-shadow-catch-param.html
   */
  'es-x/no-shadow-catch-param'?: Linter.RuleEntry<[]>
  /**
   * disallow the `SharedArrayBuffer` class.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-shared-array-buffer.html
   */
  'es-x/no-shared-array-buffer'?: Linter.RuleEntry<[]>
  /**
   * disallow spread elements.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-spread-elements.html
   */
  'es-x/no-spread-elements'?: Linter.RuleEntry<[]>
  /**
   * disallow HTML creation methods of string instances.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-create-html-methods.html
   */
  'es-x/no-string-create-html-methods'?: Linter.RuleEntry<EsXNoStringCreateHtmlMethods>
  /**
   * disallow the `String.fromCodePoint` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-fromcodepoint.html
   */
  'es-x/no-string-fromcodepoint'?: Linter.RuleEntry<[]>
  /**
   * disallow the `String.prototype.at()` methods.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-at.html
   */
  'es-x/no-string-prototype-at'?: Linter.RuleEntry<EsXNoStringPrototypeAt>
  /**
   * disallow the `String.prototype.codePointAt` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-codepointat.html
   */
  'es-x/no-string-prototype-codepointat'?: Linter.RuleEntry<EsXNoStringPrototypeCodepointat>
  /**
   * disallow the `String.prototype.endsWith` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-endswith.html
   */
  'es-x/no-string-prototype-endswith'?: Linter.RuleEntry<EsXNoStringPrototypeEndswith>
  /**
   * disallow the `String.prototype.includes` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-includes.html
   */
  'es-x/no-string-prototype-includes'?: Linter.RuleEntry<EsXNoStringPrototypeIncludes>
  /**
   * disallow the `String.prototype.isWellFormed` methods.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-iswellformed.html
   */
  'es-x/no-string-prototype-iswellformed'?: Linter.RuleEntry<EsXNoStringPrototypeIswellformed>
  /**
   * disallow the `String.prototype.{isWellFormed,toWellFormed}` methods.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-iswellformed-towellformed.html
   * @deprecated
   */
  'es-x/no-string-prototype-iswellformed-towellformed'?: Linter.RuleEntry<EsXNoStringPrototypeIswellformedTowellformed>
  /**
   * disallow the `String.prototype.matchAll` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-matchall.html
   */
  'es-x/no-string-prototype-matchall'?: Linter.RuleEntry<EsXNoStringPrototypeMatchall>
  /**
   * disallow the `String.prototype.normalize` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-normalize.html
   */
  'es-x/no-string-prototype-normalize'?: Linter.RuleEntry<EsXNoStringPrototypeNormalize>
  /**
   * disallow the `String.prototype.{padStart,padEnd}` methods.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-padstart-padend.html
   */
  'es-x/no-string-prototype-padstart-padend'?: Linter.RuleEntry<EsXNoStringPrototypePadstartPadend>
  /**
   * disallow the `String.prototype.repeat` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-repeat.html
   */
  'es-x/no-string-prototype-repeat'?: Linter.RuleEntry<EsXNoStringPrototypeRepeat>
  /**
   * disallow the `String.prototype.replaceAll` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-replaceall.html
   */
  'es-x/no-string-prototype-replaceall'?: Linter.RuleEntry<EsXNoStringPrototypeReplaceall>
  /**
   * disallow the `String.prototype.startsWith` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-startswith.html
   */
  'es-x/no-string-prototype-startswith'?: Linter.RuleEntry<EsXNoStringPrototypeStartswith>
  /**
   * disallow the `String.prototype.substr` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-substr.html
   */
  'es-x/no-string-prototype-substr'?: Linter.RuleEntry<EsXNoStringPrototypeSubstr>
  /**
   * disallow the `String.prototype.toWellFormed` methods.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-towellformed.html
   */
  'es-x/no-string-prototype-towellformed'?: Linter.RuleEntry<EsXNoStringPrototypeTowellformed>
  /**
   * disallow the `String.prototype.trim` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-trim.html
   */
  'es-x/no-string-prototype-trim'?: Linter.RuleEntry<EsXNoStringPrototypeTrim>
  /**
   * disallow the `String.prototype.{trimLeft,trimRight}` methods.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-trimleft-trimright.html
   */
  'es-x/no-string-prototype-trimleft-trimright'?: Linter.RuleEntry<EsXNoStringPrototypeTrimleftTrimright>
  /**
   * disallow the `String.prototype.{trimStart,trimEnd}` methods.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-trimstart-trimend.html
   */
  'es-x/no-string-prototype-trimstart-trimend'?: Linter.RuleEntry<EsXNoStringPrototypeTrimstartTrimend>
  /**
   * disallow the `String.raw` method.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-raw.html
   */
  'es-x/no-string-raw'?: Linter.RuleEntry<[]>
  /**
   * disallow the subclassing of the built-in classes.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-subclassing-builtins.html
   */
  'es-x/no-subclassing-builtins'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Symbol` class.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-symbol.html
   */
  'es-x/no-symbol'?: Linter.RuleEntry<[]>
  /**
   * disallow the `Symbol.prototype.description` property.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-symbol-prototype-description.html
   */
  'es-x/no-symbol-prototype-description'?: Linter.RuleEntry<EsXNoSymbolPrototypeDescription>
  /**
   * disallow template literals.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-template-literals.html
   */
  'es-x/no-template-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow top-level `await`.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-top-level-await.html
   */
  'es-x/no-top-level-await'?: Linter.RuleEntry<[]>
  /**
   * disallow trailing commas in array/object literals.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-trailing-commas.html
   */
  'es-x/no-trailing-commas'?: Linter.RuleEntry<[]>
  /**
   * disallow trailing commas in `import()`
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-trailing-dynamic-import-commas.html
   */
  'es-x/no-trailing-dynamic-import-commas'?: Linter.RuleEntry<[]>
  /**
   * disallow trailing commas in parameter/argument lists.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-trailing-function-commas.html
   */
  'es-x/no-trailing-function-commas'?: Linter.RuleEntry<[]>
  /**
   * disallow ES2015 typed arrays.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-typed-arrays.html
   */
  'es-x/no-typed-arrays'?: Linter.RuleEntry<[]>
  /**
   * disallow Unicode code point escape sequences.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-unicode-codepoint-escapes.html
   */
  'es-x/no-unicode-codepoint-escapes'?: Linter.RuleEntry<[]>
  /**
   * disallow the `WeakMap` class.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-weak-map.html
   */
  'es-x/no-weak-map'?: Linter.RuleEntry<[]>
  /**
   * disallow the `WeakSet` class.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-weak-set.html
   */
  'es-x/no-weak-set'?: Linter.RuleEntry<[]>
  /**
   * disallow the `WeakRef` and `FinalizationRegistry` class.
   * @see http://eslint-community.github.io/eslint-plugin-es-x/rules/no-weakrefs.html
   */
  'es-x/no-weakrefs'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent use of `output` assertions in rule tests
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/consistent-output.md
   */
  'eslint-plugin/consistent-output'?: Linter.RuleEntry<EslintPluginConsistentOutput>
  /**
   * require fixer functions to return a fix
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/fixer-return.md
   */
  'eslint-plugin/fixer-return'?: Linter.RuleEntry<[]>
  /**
   * enforce the order of meta properties
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/meta-property-ordering.md
   */
  'eslint-plugin/meta-property-ordering'?: Linter.RuleEntry<EslintPluginMetaPropertyOrdering>
  /**
   * disallow usage of deprecated methods on rule context objects
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-deprecated-context-methods.md
   */
  'eslint-plugin/no-deprecated-context-methods'?: Linter.RuleEntry<[]>
  /**
   * disallow the version of `context.report()` with multiple arguments
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-deprecated-report-api.md
   */
  'eslint-plugin/no-deprecated-report-api'?: Linter.RuleEntry<[]>
  /**
   * disallow identical tests
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-identical-tests.md
   */
  'eslint-plugin/no-identical-tests'?: Linter.RuleEntry<[]>
  /**
   * disallow `messageId`s that are missing from `meta.messages`
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-missing-message-ids.md
   */
  'eslint-plugin/no-missing-message-ids'?: Linter.RuleEntry<[]>
  /**
   * disallow missing placeholders in rule report messages
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-missing-placeholders.md
   */
  'eslint-plugin/no-missing-placeholders'?: Linter.RuleEntry<[]>
  /**
   * disallow the test case property `only`
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-only-tests.md
   */
  'eslint-plugin/no-only-tests'?: Linter.RuleEntry<[]>
  /**
   * disallow using `in` to narrow node types instead of looking at properties
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-property-in-node.md
   */
  'eslint-plugin/no-property-in-node'?: Linter.RuleEntry<EslintPluginNoPropertyInNode>
  /**
   * disallow unused `messageId`s in `meta.messages`
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-unused-message-ids.md
   */
  'eslint-plugin/no-unused-message-ids'?: Linter.RuleEntry<[]>
  /**
   * disallow unused placeholders in rule report messages
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-unused-placeholders.md
   */
  'eslint-plugin/no-unused-placeholders'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary calls to `sourceCode.getFirstToken()` and `sourceCode.getLastToken()`
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-useless-token-range.md
   */
  'eslint-plugin/no-useless-token-range'?: Linter.RuleEntry<[]>
  /**
   * require using `messageId` instead of `message` or `desc` to report rule violations
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/prefer-message-ids.md
   */
  'eslint-plugin/prefer-message-ids'?: Linter.RuleEntry<[]>
  /**
   * disallow function-style rules
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/prefer-object-rule.md
   */
  'eslint-plugin/prefer-object-rule'?: Linter.RuleEntry<[]>
  /**
   * disallow invalid RuleTester test cases where the `output` matches the `code`
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/prefer-output-null.md
   */
  'eslint-plugin/prefer-output-null'?: Linter.RuleEntry<[]>
  /**
   * require using placeholders for dynamic report messages
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/prefer-placeholders.md
   */
  'eslint-plugin/prefer-placeholders'?: Linter.RuleEntry<[]>
  /**
   * require using `replaceText()` instead of `replaceTextRange()`
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/prefer-replace-text.md
   */
  'eslint-plugin/prefer-replace-text'?: Linter.RuleEntry<[]>
  /**
   * enforce a consistent format for rule report messages
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/report-message-format.md
   */
  'eslint-plugin/report-message-format'?: Linter.RuleEntry<EslintPluginReportMessageFormat>
  /**
   * require rules to implement a `meta.docs.description` property with the correct format
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-docs-description.md
   */
  'eslint-plugin/require-meta-docs-description'?: Linter.RuleEntry<EslintPluginRequireMetaDocsDescription>
  /**
   * require rules to implement a `meta.docs.recommended` property
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-docs-recommended.md
   */
  'eslint-plugin/require-meta-docs-recommended'?: Linter.RuleEntry<EslintPluginRequireMetaDocsRecommended>
  /**
   * require rules to implement a `meta.docs.url` property
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-docs-url.md
   */
  'eslint-plugin/require-meta-docs-url'?: Linter.RuleEntry<EslintPluginRequireMetaDocsUrl>
  /**
   * require rules to implement a `meta.fixable` property
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-fixable.md
   */
  'eslint-plugin/require-meta-fixable'?: Linter.RuleEntry<EslintPluginRequireMetaFixable>
  /**
   * require suggestable rules to implement a `meta.hasSuggestions` property
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-has-suggestions.md
   */
  'eslint-plugin/require-meta-has-suggestions'?: Linter.RuleEntry<[]>
  /**
   * require rules to implement a `meta.schema` property
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-schema.md
   */
  'eslint-plugin/require-meta-schema'?: Linter.RuleEntry<EslintPluginRequireMetaSchema>
  /**
   * require rules `meta.schema` properties to include descriptions
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-schema-description.md
   */
  'eslint-plugin/require-meta-schema-description'?: Linter.RuleEntry<[]>
  /**
   * require rules to implement a `meta.type` property
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-type.md
   */
  'eslint-plugin/require-meta-type'?: Linter.RuleEntry<[]>
  /**
   * require the properties of a test case to be placed in a consistent order
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/test-case-property-ordering.md
   */
  'eslint-plugin/test-case-property-ordering'?: Linter.RuleEntry<EslintPluginTestCasePropertyOrdering>
  /**
   * enforce consistent usage of shorthand strings for test cases with no options
   * @see https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/test-case-shorthand-strings.md
   */
  'eslint-plugin/test-case-shorthand-strings'?: Linter.RuleEntry<EslintPluginTestCaseShorthandStrings>
  /**
   * Enforce "for" loop update clause moving the counter in the right direction
   * @see https://eslint.org/docs/latest/rules/for-direction
   */
  'for-direction'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.org/docs/latest/rules/func-call-spacing
   * @deprecated
   */
  'func-call-spacing'?: Linter.RuleEntry<FuncCallSpacing>
  /**
   * Require function names to match the name of the variable or property to which they are assigned
   * @see https://eslint.org/docs/latest/rules/func-name-matching
   */
  'func-name-matching'?: Linter.RuleEntry<FuncNameMatching>
  /**
   * Require or disallow named `function` expressions
   * @see https://eslint.org/docs/latest/rules/func-names
   */
  'func-names'?: Linter.RuleEntry<FuncNames>
  /**
   * Enforce the consistent use of either `function` declarations or expressions assigned to variables
   * @see https://eslint.org/docs/latest/rules/func-style
   */
  'func-style'?: Linter.RuleEntry<FuncStyle>
  /**
   * Enforce line breaks between arguments of a function call
   * @see https://eslint.org/docs/latest/rules/function-call-argument-newline
   * @deprecated
   */
  'function-call-argument-newline'?: Linter.RuleEntry<FunctionCallArgumentNewline>
  /**
   * Enforce consistent line breaks inside function parentheses
   * @see https://eslint.org/docs/latest/rules/function-paren-newline
   * @deprecated
   */
  'function-paren-newline'?: Linter.RuleEntry<FunctionParenNewline>
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   * @see https://eslint.org/docs/latest/rules/generator-star-spacing
   * @deprecated
   */
  'generator-star-spacing'?: Linter.RuleEntry<GeneratorStarSpacing>
  /**
   * Enforce `return` statements in getters
   * @see https://eslint.org/docs/latest/rules/getter-return
   */
  'getter-return'?: Linter.RuleEntry<GetterReturn>
  /**
   * Require `require()` calls to be placed at top-level module scope
   * @see https://eslint.org/docs/latest/rules/global-require
   * @deprecated
   */
  'global-require'?: Linter.RuleEntry<[]>
  /**
   * Require grouped accessor pairs in object literals and classes
   * @see https://eslint.org/docs/latest/rules/grouped-accessor-pairs
   */
  'grouped-accessor-pairs'?: Linter.RuleEntry<GroupedAccessorPairs>
  /**
   * Require `for-in` loops to include an `if` statement
   * @see https://eslint.org/docs/latest/rules/guard-for-in
   */
  'guard-for-in'?: Linter.RuleEntry<[]>
  /**
   * Require error handling in callbacks
   * @see https://eslint.org/docs/latest/rules/handle-callback-err
   * @deprecated
   */
  'handle-callback-err'?: Linter.RuleEntry<HandleCallbackErr>
  /**
   * Disallow specified identifiers
   * @see https://eslint.org/docs/latest/rules/id-blacklist
   * @deprecated
   */
  'id-blacklist'?: Linter.RuleEntry<IdBlacklist>
  /**
   * Disallow specified identifiers
   * @see https://eslint.org/docs/latest/rules/id-denylist
   */
  'id-denylist'?: Linter.RuleEntry<IdDenylist>
  /**
   * Enforce minimum and maximum identifier lengths
   * @see https://eslint.org/docs/latest/rules/id-length
   */
  'id-length'?: Linter.RuleEntry<IdLength>
  /**
   * Require identifiers to match a specified regular expression
   * @see https://eslint.org/docs/latest/rules/id-match
   */
  'id-match'?: Linter.RuleEntry<IdMatch>
  /**
   * Enforce the location of arrow function bodies
   * @see https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
   * @deprecated
   */
  'implicit-arrow-linebreak'?: Linter.RuleEntry<ImplicitArrowLinebreak>
  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/consistent-type-specifier-style.md
   */
  'import/consistent-type-specifier-style'?: Linter.RuleEntry<ImportConsistentTypeSpecifierStyle>
  /**
   * Ensure a default export is present, given a default import.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/default.md
   */
  'import/default'?: Linter.RuleEntry<[]>
  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/dynamic-import-chunkname.md
   */
  'import/dynamic-import-chunkname'?: Linter.RuleEntry<ImportDynamicImportChunkname>
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/export.md
   */
  'import/export'?: Linter.RuleEntry<[]>
  /**
   * Ensure all exports appear after other statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/exports-last.md
   */
  'import/exports-last'?: Linter.RuleEntry<[]>
  /**
   * Ensure consistent use of file extension within the import path.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/extensions.md
   */
  'import/extensions'?: Linter.RuleEntry<ImportExtensions>
  /**
   * Ensure all imports appear before other statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/first.md
   */
  'import/first'?: Linter.RuleEntry<ImportFirst>
  /**
   * Prefer named exports to be grouped together in a single export declaration
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/group-exports.md
   */
  'import/group-exports'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `import/first`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md
   * @deprecated
   */
  'import/imports-first'?: Linter.RuleEntry<ImportImportsFirst>
  /**
   * Enforce the maximum number of dependencies a module can have.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/max-dependencies.md
   */
  'import/max-dependencies'?: Linter.RuleEntry<ImportMaxDependencies>
  /**
   * Ensure named imports correspond to a named export in the remote file.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/named.md
   */
  'import/named'?: Linter.RuleEntry<ImportNamed>
  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/namespace.md
   */
  'import/namespace'?: Linter.RuleEntry<ImportNamespace>
  /**
   * Enforce a newline after import statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/newline-after-import.md
   */
  'import/newline-after-import'?: Linter.RuleEntry<ImportNewlineAfterImport>
  /**
   * Forbid import of modules using absolute paths.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-absolute-path.md
   */
  'import/no-absolute-path'?: Linter.RuleEntry<ImportNoAbsolutePath>
  /**
   * Forbid AMD `require` and `define` calls.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-amd.md
   */
  'import/no-amd'?: Linter.RuleEntry<[]>
  /**
   * Forbid anonymous values as default exports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-anonymous-default-export.md
   */
  'import/no-anonymous-default-export'?: Linter.RuleEntry<ImportNoAnonymousDefaultExport>
  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-commonjs.md
   */
  'import/no-commonjs'?: Linter.RuleEntry<ImportNoCommonjs>
  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-cycle.md
   */
  'import/no-cycle'?: Linter.RuleEntry<ImportNoCycle>
  /**
   * Forbid default exports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-default-export.md
   */
  'import/no-default-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-deprecated.md
   */
  'import/no-deprecated'?: Linter.RuleEntry<[]>
  /**
   * Forbid repeated import of the same module in multiple places.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-duplicates.md
   */
  'import/no-duplicates'?: Linter.RuleEntry<ImportNoDuplicates>
  /**
   * Forbid `require()` calls with expressions.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-dynamic-require.md
   */
  'import/no-dynamic-require'?: Linter.RuleEntry<ImportNoDynamicRequire>
  /**
   * Forbid empty named import blocks.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-empty-named-blocks.md
   */
  'import/no-empty-named-blocks'?: Linter.RuleEntry<[]>
  /**
   * Forbid the use of extraneous packages.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-extraneous-dependencies.md
   */
  'import/no-extraneous-dependencies'?: Linter.RuleEntry<ImportNoExtraneousDependencies>
  /**
   * Forbid import statements with CommonJS module.exports.
   */
  'import/no-import-module-exports'?: Linter.RuleEntry<ImportNoImportModuleExports>
  /**
   * Forbid importing the submodules of other modules.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-internal-modules.md
   */
  'import/no-internal-modules'?: Linter.RuleEntry<ImportNoInternalModules>
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-mutable-exports.md
   */
  'import/no-mutable-exports'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as identifier of default export.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-named-as-default.md
   */
  'import/no-named-as-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as property of default export.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-named-as-default-member.md
   */
  'import/no-named-as-default-member'?: Linter.RuleEntry<[]>
  /**
   * Forbid named default exports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-named-default.md
   */
  'import/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid named exports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-named-export.md
   */
  'import/no-named-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-namespace.md
   */
  'import/no-namespace'?: Linter.RuleEntry<ImportNoNamespace>
  /**
   * Forbid Node.js builtin modules.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-nodejs-modules.md
   */
  'import/no-nodejs-modules'?: Linter.RuleEntry<ImportNoNodejsModules>
  /**
   * Forbid importing packages through relative paths.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-relative-packages.md
   */
  'import/no-relative-packages'?: Linter.RuleEntry<ImportNoRelativePackages>
  /**
   * Forbid importing modules from parent directories.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-relative-parent-imports.md
   */
  'import/no-relative-parent-imports'?: Linter.RuleEntry<ImportNoRelativeParentImports>
  /**
   * Enforce which files can be imported in a given folder.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-restricted-paths.md
   */
  'import/no-restricted-paths'?: Linter.RuleEntry<ImportNoRestrictedPaths>
  /**
   * Forbid a module from importing itself.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-self-import.md
   */
  'import/no-self-import'?: Linter.RuleEntry<[]>
  /**
   * Forbid unassigned imports
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-unassigned-import.md
   */
  'import/no-unassigned-import'?: Linter.RuleEntry<ImportNoUnassignedImport>
  /**
   * Ensure imports point to a file/module that can be resolved.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-unresolved.md
   */
  'import/no-unresolved'?: Linter.RuleEntry<ImportNoUnresolved>
  /**
   * Forbid modules without exports, or exports without matching import in another module.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-unused-modules.md
   */
  'import/no-unused-modules'?: Linter.RuleEntry<ImportNoUnusedModules>
  /**
   * Forbid unnecessary path segments in import and require statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-useless-path-segments.md
   */
  'import/no-useless-path-segments'?: Linter.RuleEntry<ImportNoUselessPathSegments>
  /**
   * Forbid webpack loader syntax in imports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-webpack-loader-syntax.md
   */
  'import/no-webpack-loader-syntax'?: Linter.RuleEntry<[]>
  /**
   * Enforce a convention in module import order.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/order.md
   */
  'import/order'?: Linter.RuleEntry<ImportOrder>
  /**
   * Prefer a default export if module exports a single name or multiple names.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/prefer-default-export.md
   */
  'import/prefer-default-export'?: Linter.RuleEntry<ImportPreferDefaultExport>
  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/unambiguous.md
   */
  'import/unambiguous'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent indentation
   * @see https://eslint.org/docs/latest/rules/indent
   * @deprecated
   */
  'indent'?: Linter.RuleEntry<Indent>
  /**
   * Enforce consistent indentation
   * @see https://eslint.org/docs/latest/rules/indent-legacy
   * @deprecated
   */
  'indent-legacy'?: Linter.RuleEntry<IndentLegacy>
  /**
   * Require or disallow initialization in variable declarations
   * @see https://eslint.org/docs/latest/rules/init-declarations
   */
  'init-declarations'?: Linter.RuleEntry<InitDeclarations>
  /**
   * Enforce emojis are wrapped in `<span>` and provide screen reader access.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/accessible-emoji.md
   * @deprecated
   */
  'jsx-a11y/accessible-emoji'?: Linter.RuleEntry<JsxA11YAccessibleEmoji>
  /**
   * Enforce all elements that require alternative text have meaningful information to relay back to end user.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/alt-text.md
   */
  'jsx-a11y/alt-text'?: Linter.RuleEntry<JsxA11YAltText>
  /**
   * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-ambiguous-text.md
   */
  'jsx-a11y/anchor-ambiguous-text'?: Linter.RuleEntry<JsxA11YAnchorAmbiguousText>
  /**
   * Enforce all anchors to contain accessible content.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-has-content.md
   */
  'jsx-a11y/anchor-has-content'?: Linter.RuleEntry<JsxA11YAnchorHasContent>
  /**
   * Enforce all anchors are valid, navigable elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-is-valid.md
   */
  'jsx-a11y/anchor-is-valid'?: Linter.RuleEntry<JsxA11YAnchorIsValid>
  /**
   * Enforce elements with aria-activedescendant are tabbable.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-activedescendant-has-tabindex.md
   */
  'jsx-a11y/aria-activedescendant-has-tabindex'?: Linter.RuleEntry<JsxA11YAriaActivedescendantHasTabindex>
  /**
   * Enforce all `aria-*` props are valid.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-props.md
   */
  'jsx-a11y/aria-props'?: Linter.RuleEntry<JsxA11YAriaProps>
  /**
   * Enforce ARIA state and property values are valid.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-proptypes.md
   */
  'jsx-a11y/aria-proptypes'?: Linter.RuleEntry<JsxA11YAriaProptypes>
  /**
   * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md
   */
  'jsx-a11y/aria-role'?: Linter.RuleEntry<JsxA11YAriaRole>
  /**
   * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-unsupported-elements.md
   */
  'jsx-a11y/aria-unsupported-elements'?: Linter.RuleEntry<JsxA11YAriaUnsupportedElements>
  /**
   * Enforce that autocomplete attributes are used correctly.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/autocomplete-valid.md
   */
  'jsx-a11y/autocomplete-valid'?: Linter.RuleEntry<JsxA11YAutocompleteValid>
  /**
   * Enforce a clickable non-interactive element has at least one keyboard event listener.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/click-events-have-key-events.md
   */
  'jsx-a11y/click-events-have-key-events'?: Linter.RuleEntry<JsxA11YClickEventsHaveKeyEvents>
  /**
   * Enforce that a control (an interactive element) has a text label.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
   */
  'jsx-a11y/control-has-associated-label'?: Linter.RuleEntry<JsxA11YControlHasAssociatedLabel>
  /**
   * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/heading-has-content.md
   */
  'jsx-a11y/heading-has-content'?: Linter.RuleEntry<JsxA11YHeadingHasContent>
  /**
   * Enforce `<html>` element has `lang` prop.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/html-has-lang.md
   */
  'jsx-a11y/html-has-lang'?: Linter.RuleEntry<JsxA11YHtmlHasLang>
  /**
   * Enforce iframe elements have a title attribute.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/iframe-has-title.md
   */
  'jsx-a11y/iframe-has-title'?: Linter.RuleEntry<JsxA11YIframeHasTitle>
  /**
   * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/img-redundant-alt.md
   */
  'jsx-a11y/img-redundant-alt'?: Linter.RuleEntry<JsxA11YImgRedundantAlt>
  /**
   * Enforce that elements with interactive handlers like `onClick` must be focusable.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/interactive-supports-focus.md
   */
  'jsx-a11y/interactive-supports-focus'?: Linter.RuleEntry<JsxA11YInteractiveSupportsFocus>
  /**
   * Enforce that a `label` tag has a text label and an associated control.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
   */
  'jsx-a11y/label-has-associated-control'?: Linter.RuleEntry<JsxA11YLabelHasAssociatedControl>
  /**
   * Enforce that `<label>` elements have the `htmlFor` prop.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/label-has-for.md
   * @deprecated
   */
  'jsx-a11y/label-has-for'?: Linter.RuleEntry<JsxA11YLabelHasFor>
  /**
   * Enforce lang attribute has a valid value.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/lang.md
   */
  'jsx-a11y/lang'?: Linter.RuleEntry<JsxA11YLang>
  /**
   * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/media-has-caption.md
   */
  'jsx-a11y/media-has-caption'?: Linter.RuleEntry<JsxA11YMediaHasCaption>
  /**
   * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/mouse-events-have-key-events.md
   */
  'jsx-a11y/mouse-events-have-key-events'?: Linter.RuleEntry<JsxA11YMouseEventsHaveKeyEvents>
  /**
   * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screen reader.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-access-key.md
   */
  'jsx-a11y/no-access-key'?: Linter.RuleEntry<JsxA11YNoAccessKey>
  /**
   * Disallow `aria-hidden="true"` from being set on focusable elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-aria-hidden-on-focusable.md
   */
  'jsx-a11y/no-aria-hidden-on-focusable'?: Linter.RuleEntry<JsxA11YNoAriaHiddenOnFocusable>
  /**
   * Enforce autoFocus prop is not used.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-autofocus.md
   */
  'jsx-a11y/no-autofocus'?: Linter.RuleEntry<JsxA11YNoAutofocus>
  /**
   * Enforce distracting elements are not used.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-distracting-elements.md
   */
  'jsx-a11y/no-distracting-elements'?: Linter.RuleEntry<JsxA11YNoDistractingElements>
  /**
   * Interactive elements should not be assigned non-interactive roles.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md
   */
  'jsx-a11y/no-interactive-element-to-noninteractive-role'?: Linter.RuleEntry<JsxA11YNoInteractiveElementToNoninteractiveRole>
  /**
   * Non-interactive elements should not be assigned mouse or keyboard event listeners.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-interactions.md
   */
  'jsx-a11y/no-noninteractive-element-interactions'?: Linter.RuleEntry<JsxA11YNoNoninteractiveElementInteractions>
  /**
   * Non-interactive elements should not be assigned interactive roles.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md
   */
  'jsx-a11y/no-noninteractive-element-to-interactive-role'?: Linter.RuleEntry<JsxA11YNoNoninteractiveElementToInteractiveRole>
  /**
   * `tabIndex` should only be declared on interactive elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-tabindex.md
   */
  'jsx-a11y/no-noninteractive-tabindex'?: Linter.RuleEntry<JsxA11YNoNoninteractiveTabindex>
  /**
   * Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-onchange.md
   * @deprecated
   */
  'jsx-a11y/no-onchange'?: Linter.RuleEntry<JsxA11YNoOnchange>
  /**
   * Enforce explicit role property is not the same as implicit/default role property on element.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-redundant-roles.md
   */
  'jsx-a11y/no-redundant-roles'?: Linter.RuleEntry<JsxA11YNoRedundantRoles>
  /**
   * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-static-element-interactions.md
   */
  'jsx-a11y/no-static-element-interactions'?: Linter.RuleEntry<JsxA11YNoStaticElementInteractions>
  /**
   * Enforces using semantic DOM elements over the ARIA `role` property.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/prefer-tag-over-role.md
   */
  'jsx-a11y/prefer-tag-over-role'?: Linter.RuleEntry<JsxA11YPreferTagOverRole>
  /**
   * Enforce that elements with ARIA roles must have all required attributes for that role.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-has-required-aria-props.md
   */
  'jsx-a11y/role-has-required-aria-props'?: Linter.RuleEntry<JsxA11YRoleHasRequiredAriaProps>
  /**
   * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-supports-aria-props.md
   */
  'jsx-a11y/role-supports-aria-props'?: Linter.RuleEntry<JsxA11YRoleSupportsAriaProps>
  /**
   * Enforce `scope` prop is only used on `<th>` elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/scope.md
   */
  'jsx-a11y/scope'?: Linter.RuleEntry<JsxA11YScope>
  /**
   * Enforce `tabIndex` value is not greater than zero.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/tabindex-no-positive.md
   */
  'jsx-a11y/tabindex-no-positive'?: Linter.RuleEntry<JsxA11YTabindexNoPositive>
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   * @see https://eslint.org/docs/latest/rules/jsx-quotes
   * @deprecated
   */
  'jsx-quotes'?: Linter.RuleEntry<JsxQuotes>
  /**
   * Enforce consistent spacing between keys and values in object literal properties
   * @see https://eslint.org/docs/latest/rules/key-spacing
   * @deprecated
   */
  'key-spacing'?: Linter.RuleEntry<KeySpacing>
  /**
   * Enforce consistent spacing before and after keywords
   * @see https://eslint.org/docs/latest/rules/keyword-spacing
   * @deprecated
   */
  'keyword-spacing'?: Linter.RuleEntry<KeywordSpacing>
  /**
   * Enforce position of line comments
   * @see https://eslint.org/docs/latest/rules/line-comment-position
   * @deprecated
   */
  'line-comment-position'?: Linter.RuleEntry<LineCommentPosition>
  /**
   * Enforce consistent linebreak style
   * @see https://eslint.org/docs/latest/rules/linebreak-style
   * @deprecated
   */
  'linebreak-style'?: Linter.RuleEntry<LinebreakStyle>
  /**
   * Require empty lines around comments
   * @see https://eslint.org/docs/latest/rules/lines-around-comment
   * @deprecated
   */
  'lines-around-comment'?: Linter.RuleEntry<LinesAroundComment>
  /**
   * Require or disallow newlines around directives
   * @see https://eslint.org/docs/latest/rules/lines-around-directive
   * @deprecated
   */
  'lines-around-directive'?: Linter.RuleEntry<LinesAroundDirective>
  /**
   * Require or disallow an empty line between class members
   * @see https://eslint.org/docs/latest/rules/lines-between-class-members
   * @deprecated
   */
  'lines-between-class-members'?: Linter.RuleEntry<LinesBetweenClassMembers>
  /**
   * Require or disallow logical assignment operator shorthand
   * @see https://eslint.org/docs/latest/rules/logical-assignment-operators
   */
  'logical-assignment-operators'?: Linter.RuleEntry<LogicalAssignmentOperators>
  /**
   * Enforce a maximum number of classes per file
   * @see https://eslint.org/docs/latest/rules/max-classes-per-file
   */
  'max-classes-per-file'?: Linter.RuleEntry<MaxClassesPerFile>
  /**
   * Enforce a maximum depth that blocks can be nested
   * @see https://eslint.org/docs/latest/rules/max-depth
   */
  'max-depth'?: Linter.RuleEntry<MaxDepth>
  /**
   * Enforce a maximum line length
   * @see https://eslint.org/docs/latest/rules/max-len
   * @deprecated
   */
  'max-len'?: Linter.RuleEntry<MaxLen>
  /**
   * Enforce a maximum number of lines per file
   * @see https://eslint.org/docs/latest/rules/max-lines
   */
  'max-lines'?: Linter.RuleEntry<MaxLines>
  /**
   * Enforce a maximum number of lines of code in a function
   * @see https://eslint.org/docs/latest/rules/max-lines-per-function
   */
  'max-lines-per-function'?: Linter.RuleEntry<MaxLinesPerFunction>
  /**
   * Enforce a maximum depth that callbacks can be nested
   * @see https://eslint.org/docs/latest/rules/max-nested-callbacks
   */
  'max-nested-callbacks'?: Linter.RuleEntry<MaxNestedCallbacks>
  /**
   * Enforce a maximum number of parameters in function definitions
   * @see https://eslint.org/docs/latest/rules/max-params
   */
  'max-params'?: Linter.RuleEntry<MaxParams>
  /**
   * Enforce a maximum number of statements allowed in function blocks
   * @see https://eslint.org/docs/latest/rules/max-statements
   */
  'max-statements'?: Linter.RuleEntry<MaxStatements>
  /**
   * Enforce a maximum number of statements allowed per line
   * @see https://eslint.org/docs/latest/rules/max-statements-per-line
   * @deprecated
   */
  'max-statements-per-line'?: Linter.RuleEntry<MaxStatementsPerLine>
  /**
   * Enforce a particular style for multiline comments
   * @see https://eslint.org/docs/latest/rules/multiline-comment-style
   * @deprecated
   */
  'multiline-comment-style'?: Linter.RuleEntry<MultilineCommentStyle>
  /**
   * Enforce newlines between operands of ternary expressions
   * @see https://eslint.org/docs/latest/rules/multiline-ternary
   * @deprecated
   */
  'multiline-ternary'?: Linter.RuleEntry<MultilineTernary>
  /**
   * disallow unsafe mutating functions such as Object.assign
   */
  'mutation/no-mutating-functions'?: Linter.RuleEntry<MutationNoMutatingFunctions>
  /**
   * disallow unsafe mutating methods such as sort.
   */
  'mutation/no-mutating-methods'?: Linter.RuleEntry<MutationNoMutatingMethods>
  /**
   * disallow mutating operators.
   */
  'mutation/no-mutation'?: Linter.RuleEntry<MutationNoMutation>
  /**
   * Require constructor names to begin with a capital letter
   * @see https://eslint.org/docs/latest/rules/new-cap
   */
  'new-cap'?: Linter.RuleEntry<NewCap>
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   * @see https://eslint.org/docs/latest/rules/new-parens
   * @deprecated
   */
  'new-parens'?: Linter.RuleEntry<NewParens>
  /**
   * Require or disallow an empty line after variable declarations
   * @see https://eslint.org/docs/latest/rules/newline-after-var
   * @deprecated
   */
  'newline-after-var'?: Linter.RuleEntry<NewlineAfterVar>
  /**
   * Require an empty line before `return` statements
   * @see https://eslint.org/docs/latest/rules/newline-before-return
   * @deprecated
   */
  'newline-before-return'?: Linter.RuleEntry<[]>
  /**
   * Require a newline after each call in a method chain
   * @see https://eslint.org/docs/latest/rules/newline-per-chained-call
   * @deprecated
   */
  'newline-per-chained-call'?: Linter.RuleEntry<NewlinePerChainedCall>
  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`
   * @see https://eslint.org/docs/latest/rules/no-alert
   */
  'no-alert'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Array` constructors
   * @see https://eslint.org/docs/latest/rules/no-array-constructor
   */
  'no-array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow using an async function as a Promise executor
   * @see https://eslint.org/docs/latest/rules/no-async-promise-executor
   */
  'no-async-promise-executor'?: Linter.RuleEntry<[]>
  /**
   * Disallow `await` inside of loops
   * @see https://eslint.org/docs/latest/rules/no-await-in-loop
   */
  'no-await-in-loop'?: Linter.RuleEntry<[]>
  /**
   * Disallow bitwise operators
   * @see https://eslint.org/docs/latest/rules/no-bitwise
   */
  'no-bitwise'?: Linter.RuleEntry<NoBitwise>
  /**
   * Disallow use of the `Buffer()` constructor
   * @see https://eslint.org/docs/latest/rules/no-buffer-constructor
   * @deprecated
   */
  'no-buffer-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`
   * @see https://eslint.org/docs/latest/rules/no-caller
   */
  'no-caller'?: Linter.RuleEntry<[]>
  /**
   * Disallow lexical declarations in case clauses
   * @see https://eslint.org/docs/latest/rules/no-case-declarations
   */
  'no-case-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallow `catch` clause parameters from shadowing variables in the outer scope
   * @see https://eslint.org/docs/latest/rules/no-catch-shadow
   * @deprecated
   */
  'no-catch-shadow'?: Linter.RuleEntry<[]>
  /**
   * Disallow reassigning class members
   * @see https://eslint.org/docs/latest/rules/no-class-assign
   */
  'no-class-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing against `-0`
   * @see https://eslint.org/docs/latest/rules/no-compare-neg-zero
   */
  'no-compare-neg-zero'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignment operators in conditional expressions
   * @see https://eslint.org/docs/latest/rules/no-cond-assign
   */
  'no-cond-assign'?: Linter.RuleEntry<NoCondAssign>
  /**
   * Disallow arrow functions where they could be confused with comparisons
   * @see https://eslint.org/docs/latest/rules/no-confusing-arrow
   * @deprecated
   */
  'no-confusing-arrow'?: Linter.RuleEntry<NoConfusingArrow>
  /**
   * Disallow the use of `console`
   * @see https://eslint.org/docs/latest/rules/no-console
   */
  'no-console'?: Linter.RuleEntry<NoConsole>
  /**
   * Disallow reassigning `const` variables
   * @see https://eslint.org/docs/latest/rules/no-const-assign
   */
  'no-const-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow expressions where the operation doesn't affect the value
   * @see https://eslint.org/docs/latest/rules/no-constant-binary-expression
   */
  'no-constant-binary-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow constant expressions in conditions
   * @see https://eslint.org/docs/latest/rules/no-constant-condition
   */
  'no-constant-condition'?: Linter.RuleEntry<NoConstantCondition>
  /**
   * Disallow returning value from constructor
   * @see https://eslint.org/docs/latest/rules/no-constructor-return
   */
  'no-constructor-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow `continue` statements
   * @see https://eslint.org/docs/latest/rules/no-continue
   */
  'no-continue'?: Linter.RuleEntry<[]>
  /**
   * Disallow control characters in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-control-regex
   */
  'no-control-regex'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `debugger`
   * @see https://eslint.org/docs/latest/rules/no-debugger
   */
  'no-debugger'?: Linter.RuleEntry<[]>
  /**
   * Disallow deleting variables
   * @see https://eslint.org/docs/latest/rules/no-delete-var
   */
  'no-delete-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow equal signs explicitly at the beginning of regular expressions
   * @see https://eslint.org/docs/latest/rules/no-div-regex
   */
  'no-div-regex'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate arguments in `function` definitions
   * @see https://eslint.org/docs/latest/rules/no-dupe-args
   */
  'no-dupe-args'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate class members
   * @see https://eslint.org/docs/latest/rules/no-dupe-class-members
   */
  'no-dupe-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate conditions in if-else-if chains
   * @see https://eslint.org/docs/latest/rules/no-dupe-else-if
   */
  'no-dupe-else-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate keys in object literals
   * @see https://eslint.org/docs/latest/rules/no-dupe-keys
   */
  'no-dupe-keys'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate case labels
   * @see https://eslint.org/docs/latest/rules/no-duplicate-case
   */
  'no-duplicate-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate module imports
   * @see https://eslint.org/docs/latest/rules/no-duplicate-imports
   */
  'no-duplicate-imports'?: Linter.RuleEntry<NoDuplicateImports>
  /**
   * Disallow `else` blocks after `return` statements in `if` statements
   * @see https://eslint.org/docs/latest/rules/no-else-return
   */
  'no-else-return'?: Linter.RuleEntry<NoElseReturn>
  /**
   * Disallow empty block statements
   * @see https://eslint.org/docs/latest/rules/no-empty
   */
  'no-empty'?: Linter.RuleEntry<NoEmpty>
  /**
   * Disallow empty character classes in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-empty-character-class
   */
  'no-empty-character-class'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty functions
   * @see https://eslint.org/docs/latest/rules/no-empty-function
   */
  'no-empty-function'?: Linter.RuleEntry<NoEmptyFunction>
  /**
   * Disallow empty destructuring patterns
   * @see https://eslint.org/docs/latest/rules/no-empty-pattern
   */
  'no-empty-pattern'?: Linter.RuleEntry<NoEmptyPattern>
  /**
   * Disallow empty static blocks
   * @see https://eslint.org/docs/latest/rules/no-empty-static-block
   */
  'no-empty-static-block'?: Linter.RuleEntry<[]>
  /**
   * Disallow `null` comparisons without type-checking operators
   * @see https://eslint.org/docs/latest/rules/no-eq-null
   */
  'no-eq-null'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `eval()`
   * @see https://eslint.org/docs/latest/rules/no-eval
   */
  'no-eval'?: Linter.RuleEntry<NoEval>
  /**
   * Disallow reassigning exceptions in `catch` clauses
   * @see https://eslint.org/docs/latest/rules/no-ex-assign
   */
  'no-ex-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow extending native types
   * @see https://eslint.org/docs/latest/rules/no-extend-native
   */
  'no-extend-native'?: Linter.RuleEntry<NoExtendNative>
  /**
   * Disallow unnecessary calls to `.bind()`
   * @see https://eslint.org/docs/latest/rules/no-extra-bind
   */
  'no-extra-bind'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary boolean casts
   * @see https://eslint.org/docs/latest/rules/no-extra-boolean-cast
   */
  'no-extra-boolean-cast'?: Linter.RuleEntry<NoExtraBooleanCast>
  /**
   * Disallow unnecessary labels
   * @see https://eslint.org/docs/latest/rules/no-extra-label
   */
  'no-extra-label'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary parentheses
   * @see https://eslint.org/docs/latest/rules/no-extra-parens
   * @deprecated
   */
  'no-extra-parens'?: Linter.RuleEntry<NoExtraParens>
  /**
   * Disallow unnecessary semicolons
   * @see https://eslint.org/docs/latest/rules/no-extra-semi
   * @deprecated
   */
  'no-extra-semi'?: Linter.RuleEntry<[]>
  /**
   * Disallow fallthrough of `case` statements
   * @see https://eslint.org/docs/latest/rules/no-fallthrough
   */
  'no-fallthrough'?: Linter.RuleEntry<NoFallthrough>
  /**
   * Disallow leading or trailing decimal points in numeric literals
   * @see https://eslint.org/docs/latest/rules/no-floating-decimal
   * @deprecated
   */
  'no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * Disallow reassigning `function` declarations
   * @see https://eslint.org/docs/latest/rules/no-func-assign
   */
  'no-func-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignments to native objects or read-only global variables
   * @see https://eslint.org/docs/latest/rules/no-global-assign
   */
  'no-global-assign'?: Linter.RuleEntry<NoGlobalAssign>
  /**
   * Disallow shorthand type conversions
   * @see https://eslint.org/docs/latest/rules/no-implicit-coercion
   */
  'no-implicit-coercion'?: Linter.RuleEntry<NoImplicitCoercion>
  /**
   * Disallow declarations in the global scope
   * @see https://eslint.org/docs/latest/rules/no-implicit-globals
   */
  'no-implicit-globals'?: Linter.RuleEntry<NoImplicitGlobals>
  /**
   * Disallow the use of `eval()`-like methods
   * @see https://eslint.org/docs/latest/rules/no-implied-eval
   */
  'no-implied-eval'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning to imported bindings
   * @see https://eslint.org/docs/latest/rules/no-import-assign
   */
  'no-import-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow inline comments after code
   * @see https://eslint.org/docs/latest/rules/no-inline-comments
   */
  'no-inline-comments'?: Linter.RuleEntry<NoInlineComments>
  /**
   * Disallow variable or `function` declarations in nested blocks
   * @see https://eslint.org/docs/latest/rules/no-inner-declarations
   */
  'no-inner-declarations'?: Linter.RuleEntry<NoInnerDeclarations>
  /**
   * Disallow invalid regular expression strings in `RegExp` constructors
   * @see https://eslint.org/docs/latest/rules/no-invalid-regexp
   */
  'no-invalid-regexp'?: Linter.RuleEntry<NoInvalidRegexp>
  /**
   * Disallow use of `this` in contexts where the value of `this` is `undefined`
   * @see https://eslint.org/docs/latest/rules/no-invalid-this
   */
  'no-invalid-this'?: Linter.RuleEntry<NoInvalidThis>
  /**
   * Disallow irregular whitespace
   * @see https://eslint.org/docs/latest/rules/no-irregular-whitespace
   */
  'no-irregular-whitespace'?: Linter.RuleEntry<NoIrregularWhitespace>
  /**
   * Disallow the use of the `__iterator__` property
   * @see https://eslint.org/docs/latest/rules/no-iterator
   */
  'no-iterator'?: Linter.RuleEntry<[]>
  /**
   * Disallow labels that share a name with a variable
   * @see https://eslint.org/docs/latest/rules/no-label-var
   */
  'no-label-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow labeled statements
   * @see https://eslint.org/docs/latest/rules/no-labels
   */
  'no-labels'?: Linter.RuleEntry<NoLabels>
  /**
   * Disallow unnecessary nested blocks
   * @see https://eslint.org/docs/latest/rules/no-lone-blocks
   */
  'no-lone-blocks'?: Linter.RuleEntry<[]>
  /**
   * Disallow `if` statements as the only statement in `else` blocks
   * @see https://eslint.org/docs/latest/rules/no-lonely-if
   */
  'no-lonely-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   * @see https://eslint.org/docs/latest/rules/no-loop-func
   */
  'no-loop-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow literal numbers that lose precision
   * @see https://eslint.org/docs/latest/rules/no-loss-of-precision
   */
  'no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow magic numbers
   * @see https://eslint.org/docs/latest/rules/no-magic-numbers
   */
  'no-magic-numbers'?: Linter.RuleEntry<NoMagicNumbers>
  /**
   * Disallow characters which are made with multiple code points in character class syntax
   * @see https://eslint.org/docs/latest/rules/no-misleading-character-class
   */
  'no-misleading-character-class'?: Linter.RuleEntry<NoMisleadingCharacterClass>
  /**
   * Disallow mixed binary operators
   * @see https://eslint.org/docs/latest/rules/no-mixed-operators
   * @deprecated
   */
  'no-mixed-operators'?: Linter.RuleEntry<NoMixedOperators>
  /**
   * Disallow `require` calls to be mixed with regular variable declarations
   * @see https://eslint.org/docs/latest/rules/no-mixed-requires
   * @deprecated
   */
  'no-mixed-requires'?: Linter.RuleEntry<NoMixedRequires>
  /**
   * Disallow mixed spaces and tabs for indentation
   * @see https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
   * @deprecated
   */
  'no-mixed-spaces-and-tabs'?: Linter.RuleEntry<NoMixedSpacesAndTabs>
  /**
   * Disallow use of chained assignment expressions
   * @see https://eslint.org/docs/latest/rules/no-multi-assign
   */
  'no-multi-assign'?: Linter.RuleEntry<NoMultiAssign>
  /**
   * Disallow multiple spaces
   * @see https://eslint.org/docs/latest/rules/no-multi-spaces
   * @deprecated
   */
  'no-multi-spaces'?: Linter.RuleEntry<NoMultiSpaces>
  /**
   * Disallow multiline strings
   * @see https://eslint.org/docs/latest/rules/no-multi-str
   */
  'no-multi-str'?: Linter.RuleEntry<[]>
  /**
   * Disallow multiple empty lines
   * @see https://eslint.org/docs/latest/rules/no-multiple-empty-lines
   * @deprecated
   */
  'no-multiple-empty-lines'?: Linter.RuleEntry<NoMultipleEmptyLines>
  /**
   * Disallow assignments to native objects or read-only global variables
   * @see https://eslint.org/docs/latest/rules/no-native-reassign
   * @deprecated
   */
  'no-native-reassign'?: Linter.RuleEntry<NoNativeReassign>
  /**
   * Disallow negated conditions
   * @see https://eslint.org/docs/latest/rules/no-negated-condition
   */
  'no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow negating the left operand in `in` expressions
   * @see https://eslint.org/docs/latest/rules/no-negated-in-lhs
   * @deprecated
   */
  'no-negated-in-lhs'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested ternary expressions
   * @see https://eslint.org/docs/latest/rules/no-nested-ternary
   */
  'no-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators outside of assignments or comparisons
   * @see https://eslint.org/docs/latest/rules/no-new
   */
  'no-new'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with the `Function` object
   * @see https://eslint.org/docs/latest/rules/no-new-func
   */
  'no-new-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with global non-constructor functions
   * @see https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
   */
  'no-new-native-nonconstructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Object` constructors
   * @see https://eslint.org/docs/latest/rules/no-new-object
   * @deprecated
   */
  'no-new-object'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with calls to `require`
   * @see https://eslint.org/docs/latest/rules/no-new-require
   * @deprecated
   */
  'no-new-require'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with the `Symbol` object
   * @see https://eslint.org/docs/latest/rules/no-new-symbol
   * @deprecated
   */
  'no-new-symbol'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
   * @see https://eslint.org/docs/latest/rules/no-new-wrappers
   */
  'no-new-wrappers'?: Linter.RuleEntry<[]>
  /**
   * Disallow `\8` and `\9` escape sequences in string literals
   * @see https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
   */
  'no-nonoctal-decimal-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling global object properties as functions
   * @see https://eslint.org/docs/latest/rules/no-obj-calls
   */
  'no-obj-calls'?: Linter.RuleEntry<[]>
  /**
   * Disallow calls to the `Object` constructor without an argument
   * @see https://eslint.org/docs/latest/rules/no-object-constructor
   */
  'no-object-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow octal literals
   * @see https://eslint.org/docs/latest/rules/no-octal
   */
  'no-octal'?: Linter.RuleEntry<[]>
  /**
   * Disallow octal escape sequences in string literals
   * @see https://eslint.org/docs/latest/rules/no-octal-escape
   */
  'no-octal-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow reassigning `function` parameters
   * @see https://eslint.org/docs/latest/rules/no-param-reassign
   */
  'no-param-reassign'?: Linter.RuleEntry<NoParamReassign>
  /**
   * Disallow string concatenation with `__dirname` and `__filename`
   * @see https://eslint.org/docs/latest/rules/no-path-concat
   * @deprecated
   */
  'no-path-concat'?: Linter.RuleEntry<[]>
  /**
   * Disallow the unary operators `++` and `--`
   * @see https://eslint.org/docs/latest/rules/no-plusplus
   */
  'no-plusplus'?: Linter.RuleEntry<NoPlusplus>
  /**
   * Disallow the use of `process.env`
   * @see https://eslint.org/docs/latest/rules/no-process-env
   * @deprecated
   */
  'no-process-env'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `process.exit()`
   * @see https://eslint.org/docs/latest/rules/no-process-exit
   * @deprecated
   */
  'no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning values from Promise executor functions
   * @see https://eslint.org/docs/latest/rules/no-promise-executor-return
   */
  'no-promise-executor-return'?: Linter.RuleEntry<NoPromiseExecutorReturn>
  /**
   * Disallow the use of the `__proto__` property
   * @see https://eslint.org/docs/latest/rules/no-proto
   */
  'no-proto'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling some `Object.prototype` methods directly on objects
   * @see https://eslint.org/docs/latest/rules/no-prototype-builtins
   */
  'no-prototype-builtins'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable redeclaration
   * @see https://eslint.org/docs/latest/rules/no-redeclare
   */
  'no-redeclare'?: Linter.RuleEntry<NoRedeclare>
  /**
   * Disallow multiple spaces in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-regex-spaces
   */
  'no-regex-spaces'?: Linter.RuleEntry<[]>
  /**
   * Disallow specified names in exports
   * @see https://eslint.org/docs/latest/rules/no-restricted-exports
   */
  'no-restricted-exports'?: Linter.RuleEntry<NoRestrictedExports>
  /**
   * Disallow specified global variables
   * @see https://eslint.org/docs/latest/rules/no-restricted-globals
   */
  'no-restricted-globals'?: Linter.RuleEntry<NoRestrictedGlobals>
  /**
   * Disallow specified modules when loaded by `import`
   * @see https://eslint.org/docs/latest/rules/no-restricted-imports
   */
  'no-restricted-imports'?: Linter.RuleEntry<NoRestrictedImports>
  /**
   * Disallow specified modules when loaded by `require`
   * @see https://eslint.org/docs/latest/rules/no-restricted-modules
   * @deprecated
   */
  'no-restricted-modules'?: Linter.RuleEntry<NoRestrictedModules>
  /**
   * Disallow certain properties on certain objects
   * @see https://eslint.org/docs/latest/rules/no-restricted-properties
   */
  'no-restricted-properties'?: Linter.RuleEntry<NoRestrictedProperties>
  /**
   * Disallow specified syntax
   * @see https://eslint.org/docs/latest/rules/no-restricted-syntax
   */
  'no-restricted-syntax'?: Linter.RuleEntry<NoRestrictedSyntax>
  /**
   * Disallow assignment operators in `return` statements
   * @see https://eslint.org/docs/latest/rules/no-return-assign
   */
  'no-return-assign'?: Linter.RuleEntry<NoReturnAssign>
  /**
   * Disallow unnecessary `return await`
   * @see https://eslint.org/docs/latest/rules/no-return-await
   * @deprecated
   */
  'no-return-await'?: Linter.RuleEntry<[]>
  /**
   * Disallow `javascript:` urls
   * @see https://eslint.org/docs/latest/rules/no-script-url
   */
  'no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignments where both sides are exactly the same
   * @see https://eslint.org/docs/latest/rules/no-self-assign
   */
  'no-self-assign'?: Linter.RuleEntry<NoSelfAssign>
  /**
   * Disallow comparisons where both sides are exactly the same
   * @see https://eslint.org/docs/latest/rules/no-self-compare
   */
  'no-self-compare'?: Linter.RuleEntry<[]>
  /**
   * Disallow comma operators
   * @see https://eslint.org/docs/latest/rules/no-sequences
   */
  'no-sequences'?: Linter.RuleEntry<NoSequences>
  /**
   * Disallow returning values from setters
   * @see https://eslint.org/docs/latest/rules/no-setter-return
   */
  'no-setter-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://eslint.org/docs/latest/rules/no-shadow
   */
  'no-shadow'?: Linter.RuleEntry<NoShadow>
  /**
   * Disallow identifiers from shadowing restricted names
   * @see https://eslint.org/docs/latest/rules/no-shadow-restricted-names
   */
  'no-shadow-restricted-names'?: Linter.RuleEntry<[]>
  /**
   * Disallow spacing between function identifiers and their applications (deprecated)
   * @see https://eslint.org/docs/latest/rules/no-spaced-func
   * @deprecated
   */
  'no-spaced-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow sparse arrays
   * @see https://eslint.org/docs/latest/rules/no-sparse-arrays
   */
  'no-sparse-arrays'?: Linter.RuleEntry<[]>
  /**
   * Disallow synchronous methods
   * @see https://eslint.org/docs/latest/rules/no-sync
   * @deprecated
   */
  'no-sync'?: Linter.RuleEntry<NoSync>
  /**
   * Disallow all tabs
   * @see https://eslint.org/docs/latest/rules/no-tabs
   * @deprecated
   */
  'no-tabs'?: Linter.RuleEntry<NoTabs>
  /**
   * Disallow template literal placeholder syntax in regular strings
   * @see https://eslint.org/docs/latest/rules/no-template-curly-in-string
   */
  'no-template-curly-in-string'?: Linter.RuleEntry<[]>
  /**
   * Disallow ternary operators
   * @see https://eslint.org/docs/latest/rules/no-ternary
   */
  'no-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `this`/`super` before calling `super()` in constructors
   * @see https://eslint.org/docs/latest/rules/no-this-before-super
   */
  'no-this-before-super'?: Linter.RuleEntry<[]>
  /**
   * Disallow throwing literals as exceptions
   * @see https://eslint.org/docs/latest/rules/no-throw-literal
   */
  'no-throw-literal'?: Linter.RuleEntry<[]>
  /**
   * Disallow trailing whitespace at the end of lines
   * @see https://eslint.org/docs/latest/rules/no-trailing-spaces
   * @deprecated
   */
  'no-trailing-spaces'?: Linter.RuleEntry<NoTrailingSpaces>
  /**
   * Disallow the use of undeclared variables unless mentioned in `/*global *\/` comments
   * @see https://eslint.org/docs/latest/rules/no-undef
   */
  'no-undef'?: Linter.RuleEntry<NoUndef>
  /**
   * Disallow initializing variables to `undefined`
   * @see https://eslint.org/docs/latest/rules/no-undef-init
   */
  'no-undef-init'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `undefined` as an identifier
   * @see https://eslint.org/docs/latest/rules/no-undefined
   */
  'no-undefined'?: Linter.RuleEntry<[]>
  /**
   * Disallow dangling underscores in identifiers
   * @see https://eslint.org/docs/latest/rules/no-underscore-dangle
   */
  'no-underscore-dangle'?: Linter.RuleEntry<NoUnderscoreDangle>
  /**
   * Disallow confusing multiline expressions
   * @see https://eslint.org/docs/latest/rules/no-unexpected-multiline
   */
  'no-unexpected-multiline'?: Linter.RuleEntry<[]>
  /**
   * Disallow unmodified loop conditions
   * @see https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
   */
  'no-unmodified-loop-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow ternary operators when simpler alternatives exist
   * @see https://eslint.org/docs/latest/rules/no-unneeded-ternary
   */
  'no-unneeded-ternary'?: Linter.RuleEntry<NoUnneededTernary>
  /**
   * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
   * @see https://eslint.org/docs/latest/rules/no-unreachable
   */
  'no-unreachable'?: Linter.RuleEntry<[]>
  /**
   * Disallow loops with a body that allows only one iteration
   * @see https://eslint.org/docs/latest/rules/no-unreachable-loop
   */
  'no-unreachable-loop'?: Linter.RuleEntry<NoUnreachableLoop>
  /**
   * Disallow control flow statements in `finally` blocks
   * @see https://eslint.org/docs/latest/rules/no-unsafe-finally
   */
  'no-unsafe-finally'?: Linter.RuleEntry<[]>
  /**
   * Disallow negating the left operand of relational operators
   * @see https://eslint.org/docs/latest/rules/no-unsafe-negation
   */
  'no-unsafe-negation'?: Linter.RuleEntry<NoUnsafeNegation>
  /**
   * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
   * @see https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
   */
  'no-unsafe-optional-chaining'?: Linter.RuleEntry<NoUnsafeOptionalChaining>
  /**
   * Disallow unused expressions
   * @see https://eslint.org/docs/latest/rules/no-unused-expressions
   */
  'no-unused-expressions'?: Linter.RuleEntry<NoUnusedExpressions>
  /**
   * Disallow unused labels
   * @see https://eslint.org/docs/latest/rules/no-unused-labels
   */
  'no-unused-labels'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused private class members
   * @see https://eslint.org/docs/latest/rules/no-unused-private-class-members
   */
  'no-unused-private-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused variables
   * @see https://eslint.org/docs/latest/rules/no-unused-vars
   */
  'no-unused-vars'?: Linter.RuleEntry<NoUnusedVars>
  /**
   * Disallow the use of variables before they are defined
   * @see https://eslint.org/docs/latest/rules/no-use-before-define
   */
  'no-use-before-define'?: Linter.RuleEntry<NoUseBeforeDefine>
  /**
   * Disallow variable assignments when the value is not used
   * @see https://eslint.org/docs/latest/rules/no-useless-assignment
   */
  'no-useless-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless backreferences in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-useless-backreference
   */
  'no-useless-backreference'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`
   * @see https://eslint.org/docs/latest/rules/no-useless-call
   */
  'no-useless-call'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `catch` clauses
   * @see https://eslint.org/docs/latest/rules/no-useless-catch
   */
  'no-useless-catch'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary computed property keys in objects and classes
   * @see https://eslint.org/docs/latest/rules/no-useless-computed-key
   */
  'no-useless-computed-key'?: Linter.RuleEntry<NoUselessComputedKey>
  /**
   * Disallow unnecessary concatenation of literals or template literals
   * @see https://eslint.org/docs/latest/rules/no-useless-concat
   */
  'no-useless-concat'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary constructors
   * @see https://eslint.org/docs/latest/rules/no-useless-constructor
   */
  'no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary escape characters
   * @see https://eslint.org/docs/latest/rules/no-useless-escape
   */
  'no-useless-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow renaming import, export, and destructured assignments to the same name
   * @see https://eslint.org/docs/latest/rules/no-useless-rename
   */
  'no-useless-rename'?: Linter.RuleEntry<NoUselessRename>
  /**
   * Disallow redundant return statements
   * @see https://eslint.org/docs/latest/rules/no-useless-return
   */
  'no-useless-return'?: Linter.RuleEntry<[]>
  /**
   * Require `let` or `const` instead of `var`
   * @see https://eslint.org/docs/latest/rules/no-var
   */
  'no-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow `void` operators
   * @see https://eslint.org/docs/latest/rules/no-void
   */
  'no-void'?: Linter.RuleEntry<NoVoid>
  /**
   * Disallow specified warning terms in comments
   * @see https://eslint.org/docs/latest/rules/no-warning-comments
   */
  'no-warning-comments'?: Linter.RuleEntry<NoWarningComments>
  /**
   * Disallow whitespace before properties
   * @see https://eslint.org/docs/latest/rules/no-whitespace-before-property
   * @deprecated
   */
  'no-whitespace-before-property'?: Linter.RuleEntry<[]>
  /**
   * Disallow `with` statements
   * @see https://eslint.org/docs/latest/rules/no-with
   */
  'no-with'?: Linter.RuleEntry<[]>
  /**
   * require `return` statements after callbacks
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/callback-return.md
   */
  'node/callback-return'?: Linter.RuleEntry<NodeCallbackReturn>
  /**
   * enforce either `module.exports` or `exports`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/exports-style.md
   */
  'node/exports-style'?: Linter.RuleEntry<NodeExportsStyle>
  /**
   * enforce the style of file extensions in `import` declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/file-extension-in-import.md
   */
  'node/file-extension-in-import'?: Linter.RuleEntry<NodeFileExtensionInImport>
  /**
   * require `require()` calls to be placed at top-level module scope
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/global-require.md
   */
  'node/global-require'?: Linter.RuleEntry<[]>
  /**
   * require error handling in callbacks
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/handle-callback-err.md
   */
  'node/handle-callback-err'?: Linter.RuleEntry<NodeHandleCallbackErr>
  /**
   * require correct usage of hashbang
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
   */
  'node/hashbang'?: Linter.RuleEntry<NodeHashbang>
  /**
   * enforce Node.js-style error-first callback pattern is followed
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-callback-literal.md
   */
  'node/no-callback-literal'?: Linter.RuleEntry<[]>
  /**
   * disallow deprecated APIs
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-deprecated-api.md
   */
  'node/no-deprecated-api'?: Linter.RuleEntry<NodeNoDeprecatedApi>
  /**
   * disallow the assignment to `exports`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md
   */
  'node/no-exports-assign'?: Linter.RuleEntry<[]>
  /**
   * disallow `import` declarations which import extraneous modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-import.md
   */
  'node/no-extraneous-import'?: Linter.RuleEntry<NodeNoExtraneousImport>
  /**
   * disallow `require()` expressions which import extraneous modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-require.md
   */
  'node/no-extraneous-require'?: Linter.RuleEntry<NodeNoExtraneousRequire>
  /**
   * disallow third-party modules which are hiding core modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-hide-core-modules.md
   * @deprecated
   */
  'node/no-hide-core-modules'?: Linter.RuleEntry<NodeNoHideCoreModules>
  /**
   * disallow `import` declarations which import non-existence modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md
   */
  'node/no-missing-import'?: Linter.RuleEntry<NodeNoMissingImport>
  /**
   * disallow `require()` expressions which import non-existence modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-require.md
   */
  'node/no-missing-require'?: Linter.RuleEntry<NodeNoMissingRequire>
  /**
   * disallow `require` calls to be mixed with regular variable declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-mixed-requires.md
   */
  'node/no-mixed-requires'?: Linter.RuleEntry<NodeNoMixedRequires>
  /**
   * disallow `new` operators with calls to `require`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-new-require.md
   */
  'node/no-new-require'?: Linter.RuleEntry<[]>
  /**
   * disallow string concatenation with `__dirname` and `__filename`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-path-concat.md
   */
  'node/no-path-concat'?: Linter.RuleEntry<[]>
  /**
   * disallow the use of `process.env`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-env.md
   */
  'node/no-process-env'?: Linter.RuleEntry<NodeNoProcessEnv>
  /**
   * disallow the use of `process.exit()`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md
   */
  'node/no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * disallow specified modules when loaded by `import` declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-import.md
   */
  'node/no-restricted-import'?: Linter.RuleEntry<NodeNoRestrictedImport>
  /**
   * disallow specified modules when loaded by `require`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-require.md
   */
  'node/no-restricted-require'?: Linter.RuleEntry<NodeNoRestrictedRequire>
  /**
   * disallow synchronous methods
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-sync.md
   */
  'node/no-sync'?: Linter.RuleEntry<NodeNoSync>
  /**
   * disallow `bin` files that npm ignores
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-bin.md
   */
  'node/no-unpublished-bin'?: Linter.RuleEntry<NodeNoUnpublishedBin>
  /**
   * disallow `import` declarations which import private modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-import.md
   */
  'node/no-unpublished-import'?: Linter.RuleEntry<NodeNoUnpublishedImport>
  /**
   * disallow `require()` expressions which import private modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-require.md
   */
  'node/no-unpublished-require'?: Linter.RuleEntry<NodeNoUnpublishedRequire>
  /**
   * disallow unsupported ECMAScript built-ins on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md
   */
  'node/no-unsupported-features/es-builtins'?: Linter.RuleEntry<NodeNoUnsupportedFeaturesEsBuiltins>
  /**
   * disallow unsupported ECMAScript syntax on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-syntax.md
   */
  'node/no-unsupported-features/es-syntax'?: Linter.RuleEntry<NodeNoUnsupportedFeaturesEsSyntax>
  /**
   * disallow unsupported Node.js built-in APIs on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md
   */
  'node/no-unsupported-features/node-builtins'?: Linter.RuleEntry<NodeNoUnsupportedFeaturesNodeBuiltins>
  /**
   * enforce either `Buffer` or `require("buffer").Buffer`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/buffer.md
   */
  'node/prefer-global/buffer'?: Linter.RuleEntry<NodePreferGlobalBuffer>
  /**
   * enforce either `console` or `require("console")`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/console.md
   */
  'node/prefer-global/console'?: Linter.RuleEntry<NodePreferGlobalConsole>
  /**
   * enforce either `process` or `require("process")`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/process.md
   */
  'node/prefer-global/process'?: Linter.RuleEntry<NodePreferGlobalProcess>
  /**
   * enforce either `TextDecoder` or `require("util").TextDecoder`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-decoder.md
   */
  'node/prefer-global/text-decoder'?: Linter.RuleEntry<NodePreferGlobalTextDecoder>
  /**
   * enforce either `TextEncoder` or `require("util").TextEncoder`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-encoder.md
   */
  'node/prefer-global/text-encoder'?: Linter.RuleEntry<NodePreferGlobalTextEncoder>
  /**
   * enforce either `URL` or `require("url").URL`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url.md
   */
  'node/prefer-global/url'?: Linter.RuleEntry<NodePreferGlobalUrl>
  /**
   * enforce either `URLSearchParams` or `require("url").URLSearchParams`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url-search-params.md
   */
  'node/prefer-global/url-search-params'?: Linter.RuleEntry<NodePreferGlobalUrlSearchParams>
  /**
   * enforce using the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-node-protocol.md
   */
  'node/prefer-node-protocol'?: Linter.RuleEntry<NodePreferNodeProtocol>
  /**
   * enforce `require("dns").promises`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/dns.md
   */
  'node/prefer-promises/dns'?: Linter.RuleEntry<[]>
  /**
   * enforce `require("fs").promises`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/fs.md
   */
  'node/prefer-promises/fs'?: Linter.RuleEntry<[]>
  /**
   * require that `process.exit()` expressions use the same code path as `throw`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md
   */
  'node/process-exit-as-throw'?: Linter.RuleEntry<[]>
  /**
   * require correct usage of hashbang
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
   * @deprecated
   */
  'node/shebang'?: Linter.RuleEntry<NodeShebang>
  /**
   * Enforce the location of single-line statements
   * @see https://eslint.org/docs/latest/rules/nonblock-statement-body-position
   * @deprecated
   */
  'nonblock-statement-body-position'?: Linter.RuleEntry<NonblockStatementBodyPosition>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.org/docs/latest/rules/object-curly-newline
   * @deprecated
   */
  'object-curly-newline'?: Linter.RuleEntry<ObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces
   * @see https://eslint.org/docs/latest/rules/object-curly-spacing
   * @deprecated
   */
  'object-curly-spacing'?: Linter.RuleEntry<ObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines
   * @see https://eslint.org/docs/latest/rules/object-property-newline
   * @deprecated
   */
  'object-property-newline'?: Linter.RuleEntry<ObjectPropertyNewline>
  /**
   * Require or disallow method and property shorthand syntax for object literals
   * @see https://eslint.org/docs/latest/rules/object-shorthand
   */
  'object-shorthand'?: Linter.RuleEntry<ObjectShorthand>
  /**
   * Enforce variables to be declared either together or separately in functions
   * @see https://eslint.org/docs/latest/rules/one-var
   */
  'one-var'?: Linter.RuleEntry<OneVar>
  /**
   * Require or disallow newlines around variable declarations
   * @see https://eslint.org/docs/latest/rules/one-var-declaration-per-line
   * @deprecated
   */
  'one-var-declaration-per-line'?: Linter.RuleEntry<OneVarDeclarationPerLine>
  /**
   * Require or disallow assignment operator shorthand where possible
   * @see https://eslint.org/docs/latest/rules/operator-assignment
   */
  'operator-assignment'?: Linter.RuleEntry<OperatorAssignment>
  /**
   * Enforce consistent linebreak style for operators
   * @see https://eslint.org/docs/latest/rules/operator-linebreak
   * @deprecated
   */
  'operator-linebreak'?: Linter.RuleEntry<OperatorLinebreak>
  /**
   * Require or disallow padding within blocks
   * @see https://eslint.org/docs/latest/rules/padded-blocks
   * @deprecated
   */
  'padded-blocks'?: Linter.RuleEntry<PaddedBlocks>
  /**
   * Require or disallow padding lines between statements
   * @see https://eslint.org/docs/latest/rules/padding-line-between-statements
   * @deprecated
   */
  'padding-line-between-statements'?: Linter.RuleEntry<PaddingLineBetweenStatements>
  /**
   * Enforce sorted arrays before include method.
   * @see https://perfectionist.dev/rules/sort-array-includes
   */
  'perfectionist/sort-array-includes'?: Linter.RuleEntry<PerfectionistSortArrayIncludes>
  /**
   * Enforce sorted classes.
   * @see https://perfectionist.dev/rules/sort-classes
   */
  'perfectionist/sort-classes'?: Linter.RuleEntry<PerfectionistSortClasses>
  /**
   * Enforce sorted decorators.
   * @see https://perfectionist.dev/rules/sort-decorators
   */
  'perfectionist/sort-decorators'?: Linter.RuleEntry<PerfectionistSortDecorators>
  /**
   * Enforce sorted TypeScript enums.
   * @see https://perfectionist.dev/rules/sort-enums
   */
  'perfectionist/sort-enums'?: Linter.RuleEntry<PerfectionistSortEnums>
  /**
   * Enforce sorted exports.
   * @see https://perfectionist.dev/rules/sort-exports
   */
  'perfectionist/sort-exports'?: Linter.RuleEntry<PerfectionistSortExports>
  /**
   * Enforce sorted heritage clauses.
   * @see https://perfectionist.dev/rules/sort-heritage-clauses
   */
  'perfectionist/sort-heritage-clauses'?: Linter.RuleEntry<PerfectionistSortHeritageClauses>
  /**
   * Enforce sorted imports.
   * @see https://perfectionist.dev/rules/sort-imports
   */
  'perfectionist/sort-imports'?: Linter.RuleEntry<PerfectionistSortImports>
  /**
   * Enforce sorted interface properties.
   * @see https://perfectionist.dev/rules/sort-interfaces
   */
  'perfectionist/sort-interfaces'?: Linter.RuleEntry<PerfectionistSortInterfaces>
  /**
   * Enforce sorted intersection types.
   * @see https://perfectionist.dev/rules/sort-intersection-types
   */
  'perfectionist/sort-intersection-types'?: Linter.RuleEntry<PerfectionistSortIntersectionTypes>
  /**
   * Enforce sorted JSX props.
   * @see https://perfectionist.dev/rules/sort-jsx-props
   */
  'perfectionist/sort-jsx-props'?: Linter.RuleEntry<PerfectionistSortJsxProps>
  /**
   * Enforce sorted Map elements.
   * @see https://perfectionist.dev/rules/sort-maps
   */
  'perfectionist/sort-maps'?: Linter.RuleEntry<PerfectionistSortMaps>
  /**
   * Enforce sorted modules.
   * @see https://perfectionist.dev/rules/sort-modules
   */
  'perfectionist/sort-modules'?: Linter.RuleEntry<PerfectionistSortModules>
  /**
   * Enforce sorted named exports.
   * @see https://perfectionist.dev/rules/sort-named-exports
   */
  'perfectionist/sort-named-exports'?: Linter.RuleEntry<PerfectionistSortNamedExports>
  /**
   * Enforce sorted named imports.
   * @see https://perfectionist.dev/rules/sort-named-imports
   */
  'perfectionist/sort-named-imports'?: Linter.RuleEntry<PerfectionistSortNamedImports>
  /**
   * Enforce sorted object types.
   * @see https://perfectionist.dev/rules/sort-object-types
   */
  'perfectionist/sort-object-types'?: Linter.RuleEntry<PerfectionistSortObjectTypes>
  /**
   * Enforce sorted objects.
   * @see https://perfectionist.dev/rules/sort-objects
   */
  'perfectionist/sort-objects'?: Linter.RuleEntry<PerfectionistSortObjects>
  /**
   * Enforce sorted sets.
   * @see https://perfectionist.dev/rules/sort-sets
   */
  'perfectionist/sort-sets'?: Linter.RuleEntry<PerfectionistSortSets>
  /**
   * Enforce sorted switch cases.
   * @see https://perfectionist.dev/rules/sort-switch-case
   */
  'perfectionist/sort-switch-case'?: Linter.RuleEntry<PerfectionistSortSwitchCase>
  /**
   * Enforce sorted union types.
   * @see https://perfectionist.dev/rules/sort-union-types
   */
  'perfectionist/sort-union-types'?: Linter.RuleEntry<PerfectionistSortUnionTypes>
  /**
   * Enforce sorted variable declarations.
   * @see https://perfectionist.dev/rules/sort-variable-declarations
   */
  'perfectionist/sort-variable-declarations'?: Linter.RuleEntry<PerfectionistSortVariableDeclarations>
  /**
   * Require using arrow functions for callbacks
   * @see https://eslint.org/docs/latest/rules/prefer-arrow-callback
   */
  'prefer-arrow-callback'?: Linter.RuleEntry<PreferArrowCallback>
  /**
   * Require `const` declarations for variables that are never reassigned after declared
   * @see https://eslint.org/docs/latest/rules/prefer-const
   */
  'prefer-const'?: Linter.RuleEntry<PreferConst>
  /**
   * Require destructuring from arrays and/or objects
   * @see https://eslint.org/docs/latest/rules/prefer-destructuring
   */
  'prefer-destructuring'?: Linter.RuleEntry<PreferDestructuring>
  /**
   * Disallow the use of `Math.pow` in favor of the `**` operator
   * @see https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
   */
  'prefer-exponentiation-operator'?: Linter.RuleEntry<[]>
  /**
   * Enforce using named capture group in regular expression
   * @see https://eslint.org/docs/latest/rules/prefer-named-capture-group
   */
  'prefer-named-capture-group'?: Linter.RuleEntry<[]>
  /**
   * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
   * @see https://eslint.org/docs/latest/rules/prefer-numeric-literals
   */
  'prefer-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
   * @see https://eslint.org/docs/latest/rules/prefer-object-has-own
   */
  'prefer-object-has-own'?: Linter.RuleEntry<[]>
  /**
   * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
   * @see https://eslint.org/docs/latest/rules/prefer-object-spread
   */
  'prefer-object-spread'?: Linter.RuleEntry<[]>
  /**
   * Require using Error objects as Promise rejection reasons
   * @see https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
   */
  'prefer-promise-reject-errors'?: Linter.RuleEntry<PreferPromiseRejectErrors>
  /**
   * Require `Reflect` methods where applicable
   * @see https://eslint.org/docs/latest/rules/prefer-reflect
   * @deprecated
   */
  'prefer-reflect'?: Linter.RuleEntry<PreferReflect>
  /**
   * Disallow use of the `RegExp` constructor in favor of regular expression literals
   * @see https://eslint.org/docs/latest/rules/prefer-regex-literals
   */
  'prefer-regex-literals'?: Linter.RuleEntry<PreferRegexLiterals>
  /**
   * Require rest parameters instead of `arguments`
   * @see https://eslint.org/docs/latest/rules/prefer-rest-params
   */
  'prefer-rest-params'?: Linter.RuleEntry<[]>
  /**
   * Require spread operators instead of `.apply()`
   * @see https://eslint.org/docs/latest/rules/prefer-spread
   */
  'prefer-spread'?: Linter.RuleEntry<[]>
  /**
   * Require template literals instead of string concatenation
   * @see https://eslint.org/docs/latest/rules/prefer-template
   */
  'prefer-template'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/prettier/eslint-plugin-prettier#options
   */
  'prettier/prettier'?: Linter.RuleEntry<PrettierPrettier>
  /**
   * Require returning inside each `then()` to create readable and reusable Promise chains.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md
   */
  'promise/always-return'?: Linter.RuleEntry<PromiseAlwaysReturn>
  /**
   * Disallow creating `new` promises outside of utility libs (use [util.promisify][] instead).
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md
   */
  'promise/avoid-new'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `catch()` on un-returned promises.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md
   */
  'promise/catch-or-return'?: Linter.RuleEntry<PromiseCatchOrReturn>
  /**
   * Disallow calling `cb()` inside of a `then()` (use [util.callbackify][] instead).
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-callback-in-promise.md
   */
  'promise/no-callback-in-promise'?: Linter.RuleEntry<PromiseNoCallbackInPromise>
  /**
   * Disallow creating new promises with paths that resolve multiple times.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md
   */
  'promise/no-multiple-resolved'?: Linter.RuleEntry<[]>
  /**
   * Require creating a `Promise` constructor before using it in an ES5 environment.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-native.md
   */
  'promise/no-native'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested `then()` or `catch()` statements.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md
   */
  'promise/no-nesting'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling `new` on a Promise static method.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md
   */
  'promise/no-new-statics'?: Linter.RuleEntry<[]>
  /**
   * Disallow using promises inside of callbacks.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md
   */
  'promise/no-promise-in-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallow return statements in `finally()`.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md
   */
  'promise/no-return-in-finally'?: Linter.RuleEntry<[]>
  /**
   * Disallow wrapping values in `Promise.resolve` or `Promise.reject` when not needed.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md
   */
  'promise/no-return-wrap'?: Linter.RuleEntry<PromiseNoReturnWrap>
  /**
   * Enforce consistent param names and ordering when creating new promises.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md
   */
  'promise/param-names'?: Linter.RuleEntry<PromiseParamNames>
  /**
   * Prefer `async`/`await` to the callback pattern.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md
   */
  'promise/prefer-await-to-callbacks'?: Linter.RuleEntry<[]>
  /**
   * Prefer `await` to `then()`/`catch()`/`finally()` for reading Promise values.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md
   */
  'promise/prefer-await-to-then'?: Linter.RuleEntry<PromisePreferAwaitToThen>
  /**
   * Prefer `catch` to `then(a, b)`/`then(null, b)` for handling errors.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-catch.md
   */
  'promise/prefer-catch'?: Linter.RuleEntry<[]>
  /**
   * Disallow use of non-standard Promise static methods.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/spec-only.md
   */
  'promise/spec-only'?: Linter.RuleEntry<PromiseSpecOnly>
  /**
   * Enforces the proper number of arguments are passed to Promise functions.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/valid-params.md
   */
  'promise/valid-params'?: Linter.RuleEntry<PromiseValidParams>
  /**
   * Require quotes around object literal property names
   * @see https://eslint.org/docs/latest/rules/quote-props
   * @deprecated
   */
  'quote-props'?: Linter.RuleEntry<QuoteProps>
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   * @see https://eslint.org/docs/latest/rules/quotes
   * @deprecated
   */
  'quotes'?: Linter.RuleEntry<Quotes>
  /**
   * Enforce the consistent use of the radix argument when using `parseInt()`
   * @see https://eslint.org/docs/latest/rules/radix
   */
  'radix'?: Linter.RuleEntry<Radix>
  /**
   * disallow passing 'children' to void DOM elements
   * @see https://eslint-react.xyz/docs/rules/dom-no-children-in-void-dom-elements
   */
  'react-dom/no-children-in-void-dom-elements'?: Linter.RuleEntry<[]>
  /**
   * disallow when a DOM component is using 'dangerouslySetInnerHTML'
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
   */
  'react-dom/no-dangerously-set-innerhtml'?: Linter.RuleEntry<[]>
  /**
   * disallow when a DOM component is using both 'children' and 'dangerouslySetInnerHTML'
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
   */
  'react-dom/no-dangerously-set-innerhtml-with-children'?: Linter.RuleEntry<[]>
  /**
   * disallow 'findDOMNode'
   * @see https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
   */
  'react-dom/no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * enforce that button component have an explicit 'type' attribute
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
   */
  'react-dom/no-missing-button-type'?: Linter.RuleEntry<[]>
  /**
   * enforce that 'iframe' component have an explicit 'sandbox' attribute
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
   */
  'react-dom/no-missing-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * enforce that namespaces are not used in React elements
   * @see https://eslint-react.xyz/docs/rules/dom-no-namespace
   */
  'react-dom/no-namespace'?: Linter.RuleEntry<[]>
  /**
   * disallow usage of the return value of 'ReactDOM.render'
   * @see https://eslint-react.xyz/docs/rules/dom-no-render-return-value
   */
  'react-dom/no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * disallow 'javascript:' URLs as JSX event handler prop's value
   * @see https://eslint-react.xyz/docs/rules/dom-no-script-url
   */
  'react-dom/no-script-url'?: Linter.RuleEntry<[]>
  /**
   * disallow usage of unknown DOM property
   * @see https://eslint-react.xyz/docs/rules/dom-no-unknown-property
   */
  'react-dom/no-unknown-property'?: Linter.RuleEntry<ReactDomNoUnknownProperty>
  /**
   * disallow unsafe iframe 'sandbox' attribute combinations
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
   */
  'react-dom/no-unsafe-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * disallow 'target="_blank"' on an external link without 'rel="noreferrer noopener"'
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
   */
  'react-dom/no-unsafe-target-blank'?: Linter.RuleEntry<[]>
  /**
   * enforce custom hooks to use at least one other hook inside
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-redundant-custom-hook
   */
  'react-hooks-extra/ensure-custom-hooks-using-other-hooks'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary usage of 'useMemo'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo
   */
  'react-hooks-extra/ensure-use-memo-has-non-empty-deps'?: Linter.RuleEntry<[]>
  /**
   * disallow direct calls to the 'set' function of 'useState' in 'useEffect'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-effect
   */
  'react-hooks-extra/no-direct-set-state-in-use-effect'?: Linter.RuleEntry<[]>
  /**
   * disallow direct calls to the 'set' function of 'useState' in 'useLayoutEffect'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-layout-effect
   */
  'react-hooks-extra/no-direct-set-state-in-use-layout-effect'?: Linter.RuleEntry<[]>
  /**
   * enforce custom hooks to use at least one other hook inside
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-redundant-custom-hook
   */
  'react-hooks-extra/no-redundant-custom-hook'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary usage of 'useCallback'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-callback
   */
  'react-hooks-extra/no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary usage of 'useMemo'
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-no-unnecessary-use-memo
   */
  'react-hooks-extra/no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * disallow function calls in 'useState' that aren't wrapped in an initializer function
   * @see https://eslint-react.xyz/docs/rules/hooks-extra-prefer-use-state-lazy-initialization
   */
  'react-hooks-extra/prefer-use-state-lazy-initialization'?: Linter.RuleEntry<[]>
  /**
   * verifies the list of dependencies for Hooks like useEffect and similar
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-hooks/exhaustive-deps'?: Linter.RuleEntry<ReactHooksExhaustiveDeps>
  /**
   * enforces the Rules of Hooks
   * @see https://reactjs.org/docs/hooks-rules.html
   */
  'react-hooks/rules-of-hooks'?: Linter.RuleEntry<[]>
  /**
   * enforce component naming convention to 'PascalCase' or 'CONSTANT_CASE'
   * @see https://eslint-react.xyz/docs/rules/naming-convention-component-name
   */
  'react-naming-convention/component-name'?: Linter.RuleEntry<ReactNamingConventionComponentName>
  /**
   * enforce naming convention for JSX filenames
   * @see https://eslint-react.xyz/docs/rules/naming-convention-filename
   */
  'react-naming-convention/filename'?: Linter.RuleEntry<ReactNamingConventionFilename>
  /**
   * enforce naming convention for JSX file extensions
   * @see https://eslint-react.xyz/docs/rules/naming-convention-filename-extension
   */
  'react-naming-convention/filename-extension'?: Linter.RuleEntry<ReactNamingConventionFilenameExtension>
  /**
   * enforce destructuring and symmetric naming of 'useState' hook value and setter variables
   * @see https://eslint-react.xyz/docs/rules/naming-convention-use-state
   */
  'react-naming-convention/use-state'?: Linter.RuleEntry<[]>
  'react-refresh/only-export-components'?: Linter.RuleEntry<ReactRefreshOnlyExportComponents>
  /**
   * enforce that every 'addEventListener' in a component or custom hook has a corresponding 'removeEventListener'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
   */
  'react-web-api/no-leaked-event-listener'?: Linter.RuleEntry<[]>
  /**
   * enforce that every 'setInterval' in a component or custom hook has a corresponding 'clearInterval'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
   */
  'react-web-api/no-leaked-interval'?: Linter.RuleEntry<[]>
  /**
   * enforce cleanup of 'ResizeObserver' instances in components and custom hooks.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
   */
  'react-web-api/no-leaked-resize-observer'?: Linter.RuleEntry<[]>
  /**
   * enforce that every 'setTimeout' in a component or custom hook has a corresponding 'clearTimeout'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
   */
  'react-web-api/no-leaked-timeout'?: Linter.RuleEntry<[]>
  /**
   * disallow using shorthand boolean attributes
   * @see https://eslint-react.xyz/docs/rules/avoid-shorthand-boolean
   */
  'react-x/avoid-shorthand-boolean'?: Linter.RuleEntry<[]>
  /**
   * disallow using shorthand fragment syntax
   * @see https://eslint-react.xyz/docs/rules/avoid-shorthand-fragment
   */
  'react-x/avoid-shorthand-fragment'?: Linter.RuleEntry<[]>
  /**
   * require a 'ref' parameter to be set when using 'forwardRef'
   * @see https://eslint-react.xyz/docs/rules/ensure-forward-ref-using-ref
   */
  'react-x/ensure-forward-ref-using-ref'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate props
   * @see https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props
   */
  'react-x/jsx-no-duplicate-props'?: Linter.RuleEntry<[]>
  /**
   * a helper rule to mark variables as used
   * @see https://eslint-react.xyz/docs/rules/jsx-uses-vars
   */
  'react-x/jsx-uses-vars'?: Linter.RuleEntry<[]>
  /**
   * disallow accessing 'this.state' within 'setState'
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react-x/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * disallow using Array index as 'key'
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react-x/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.count'
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react-x/no-children-count'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.forEach'
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react-x/no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.map'
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react-x/no-children-map'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.only'
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react-x/no-children-only'?: Linter.RuleEntry<[]>
  /**
   * disallow passing 'children' as props
   * @see https://eslint-react.xyz/docs/rules/no-children-prop
   */
  'react-x/no-children-prop'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'Children.toArray'
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react-x/no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * disallow using class components
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react-x/no-class-component'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'cloneElement'
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react-x/no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * disallow comments from being inserted as text nodes
   * @see https://eslint-react.xyz/docs/rules/no-comment-textnodes
   */
  'react-x/no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * disallow complex conditional rendering
   * @see https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering
   */
  'react-x/no-complex-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * disallow complex conditional rendering
   * @see https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering
   */
  'react-x/no-complicated-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'componentWillMount'
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react-x/no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'componentWillReceiveProps'
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react-x/no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'componentWillReceiveProps'
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react-x/no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * disallow the use of '<Context.Provider>'
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react-x/no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'createRef' in function components
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react-x/no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'defaultProps' property in components
   * @see https://eslint-react.xyz/docs/rules/no-default-props
   */
  'react-x/no-default-props'?: Linter.RuleEntry<[]>
  /**
   * disallow direct mutation of state
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react-x/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate keys when rendering list
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react-x/no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * disallow the use of 'forwardRef'
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react-x/no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * disallow implicit 'key' props
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react-x/no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * disallow problematic leaked values from being rendered
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react-x/no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * require 'displayName' for 'memo' and 'forwardRef' components
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react-x/no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * require 'key' when rendering list
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react-x/no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * disallow using unstable nested components
   * @see https://eslint-react.xyz/docs/rules/no-nested-components
   */
  'react-x/no-nested-components'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'propTypes' property in components
   * @see https://eslint-react.xyz/docs/rules/no-prop-types
   */
  'react-x/no-prop-types'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'shouldComponentUpdate' in class component extends 'React.PureComponent'
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  'react-x/no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'setState' in 'componentDidMount'
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react-x/no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'setState' in 'componentDidUpdate'
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react-x/no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'setState' in 'componentWillUpdate'
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react-x/no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated string refs
   * @see https://eslint-react.xyz/docs/rules/no-string-refs
   */
  'react-x/no-string-refs'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'UNSAFE_componentWillMount'
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react-x/no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'UNSAFE_componentWillReceiveProps'
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react-x/no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * disallow using 'UNSAFE_componentWillUpdate'
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react-x/no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * disallow passing constructed values to context providers
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react-x/no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * disallow using unstable value as default param in function component
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react-x/no-unstable-default-props'?: Linter.RuleEntry<[]>
  /**
   * disallow unused class component members
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react-x/no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * disallow unused state of class component
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react-x/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary fragments
   * @see https://eslint-react.xyz/docs/rules/no-useless-fragment
   */
  'react-x/no-useless-fragment'?: Linter.RuleEntry<ReactXNoUselessFragment>
  /**
   * enforce using destructuring assignment in component props and context
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  'react-x/prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * enforce React is imported via a namespace import
   * @see https://eslint-react.xyz/docs/rules/prefer-react-namespace-import
   */
  'react-x/prefer-react-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * enforce read-only props in components
   * @see https://eslint-react.xyz/docs/rules/prefer-read-only-props
   */
  'react-x/prefer-read-only-props'?: Linter.RuleEntry<[]>
  /**
   * enforce using shorthand boolean attributes
   * @see https://eslint-react.xyz/docs/rules/prefer-shorthand-boolean
   */
  'react-x/prefer-shorthand-boolean'?: Linter.RuleEntry<[]>
  /**
   * enforce using fragment syntax instead of 'Fragment' component
   * @see https://eslint-react.xyz/docs/rules/prefer-shorthand-fragment
   */
  'react-x/prefer-shorthand-fragment'?: Linter.RuleEntry<[]>
  /**
   * Enforces consistent naming for boolean props
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md
   */
  'react/boolean-prop-naming'?: Linter.RuleEntry<ReactBooleanPropNaming>
  /**
   * Disallow usage of `button` elements without an explicit `type` attribute
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/button-has-type.md
   */
  'react/button-has-type'?: Linter.RuleEntry<ReactButtonHasType>
  /**
   * Enforce using `onChange` or `readonly` attribute when `checked` is used
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/checked-requires-onchange-or-readonly.md
   */
  'react/checked-requires-onchange-or-readonly'?: Linter.RuleEntry<ReactCheckedRequiresOnchangeOrReadonly>
  /**
   * Enforce all defaultProps have a corresponding non-required PropType
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md
   */
  'react/default-props-match-prop-types'?: Linter.RuleEntry<ReactDefaultPropsMatchPropTypes>
  /**
   * Enforce consistent usage of destructuring assignment of props, state, and context
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md
   */
  'react/destructuring-assignment'?: Linter.RuleEntry<ReactDestructuringAssignment>
  /**
   * Disallow missing displayName in a React component definition
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/display-name.md
   */
  'react/display-name'?: Linter.RuleEntry<ReactDisplayName>
  /**
   * Disallow certain props on components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md
   */
  'react/forbid-component-props'?: Linter.RuleEntry<ReactForbidComponentProps>
  /**
   * Disallow certain props on DOM Nodes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md
   */
  'react/forbid-dom-props'?: Linter.RuleEntry<ReactForbidDomProps>
  /**
   * Disallow certain elements
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md
   */
  'react/forbid-elements'?: Linter.RuleEntry<ReactForbidElements>
  /**
   * Disallow using another component's propTypes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md
   */
  'react/forbid-foreign-prop-types'?: Linter.RuleEntry<ReactForbidForeignPropTypes>
  /**
   * Disallow certain propTypes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md
   */
  'react/forbid-prop-types'?: Linter.RuleEntry<ReactForbidPropTypes>
  /**
   * Require all forwardRef components include a ref parameter
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forward-ref-uses-ref.md
   */
  'react/forward-ref-uses-ref'?: Linter.RuleEntry<[]>
  /**
   * Enforce a specific function type for function components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md
   */
  'react/function-component-definition'?: Linter.RuleEntry<ReactFunctionComponentDefinition>
  /**
   * Ensure destructuring and symmetric naming of useState hook value and setter variables
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/hook-use-state.md
   */
  'react/hook-use-state'?: Linter.RuleEntry<ReactHookUseState>
  /**
   * Enforce sandbox attribute on iframe elements
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/iframe-missing-sandbox.md
   */
  'react/iframe-missing-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Enforce boolean attributes notation in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md
   */
  'react/jsx-boolean-value'?: Linter.RuleEntry<ReactJsxBooleanValue>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md
   */
  'react/jsx-child-element-spacing'?: Linter.RuleEntry<[]>
  /**
   * Enforce closing bracket location in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md
   */
  'react/jsx-closing-bracket-location'?: Linter.RuleEntry<ReactJsxClosingBracketLocation>
  /**
   * Enforce closing tag location for multiline JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-tag-location.md
   */
  'react/jsx-closing-tag-location'?: Linter.RuleEntry<ReactJsxClosingTagLocation>
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md
   */
  'react/jsx-curly-brace-presence'?: Linter.RuleEntry<ReactJsxCurlyBracePresence>
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md
   */
  'react/jsx-curly-newline'?: Linter.RuleEntry<ReactJsxCurlyNewline>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md
   */
  'react/jsx-curly-spacing'?: Linter.RuleEntry<ReactJsxCurlySpacing>
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md
   */
  'react/jsx-equals-spacing'?: Linter.RuleEntry<ReactJsxEqualsSpacing>
  /**
   * Disallow file extensions that may contain JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md
   */
  'react/jsx-filename-extension'?: Linter.RuleEntry<ReactJsxFilenameExtension>
  /**
   * Enforce proper position of the first property in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md
   */
  'react/jsx-first-prop-new-line'?: Linter.RuleEntry<ReactJsxFirstPropNewLine>
  /**
   * Enforce shorthand or standard form for React fragments
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-fragments.md
   */
  'react/jsx-fragments'?: Linter.RuleEntry<ReactJsxFragments>
  /**
   * Enforce event handler naming conventions in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md
   */
  'react/jsx-handler-names'?: Linter.RuleEntry<ReactJsxHandlerNames>
  /**
   * Enforce JSX indentation
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md
   */
  'react/jsx-indent'?: Linter.RuleEntry<ReactJsxIndent>
  /**
   * Enforce props indentation in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md
   */
  'react/jsx-indent-props'?: Linter.RuleEntry<ReactJsxIndentProps>
  /**
   * Disallow missing `key` props in iterators/collection literals
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-key.md
   */
  'react/jsx-key'?: Linter.RuleEntry<ReactJsxKey>
  /**
   * Enforce JSX maximum depth
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md
   */
  'react/jsx-max-depth'?: Linter.RuleEntry<ReactJsxMaxDepth>
  /**
   * Enforce maximum of props on a single line in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md
   */
  'react/jsx-max-props-per-line'?: Linter.RuleEntry<ReactJsxMaxPropsPerLine>
  /**
   * Require or prevent a new line after jsx elements and expressions.
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-newline.md
   */
  'react/jsx-newline'?: Linter.RuleEntry<ReactJsxNewline>
  /**
   * Disallow `.bind()` or arrow functions in JSX props
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md
   */
  'react/jsx-no-bind'?: Linter.RuleEntry<ReactJsxNoBind>
  /**
   * Disallow comments from being inserted as text nodes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md
   */
  'react/jsx-no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * Disallows JSX context provider values from taking values that will cause needless rerenders
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-constructed-context-values.md
   */
  'react/jsx-no-constructed-context-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate properties in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md
   */
  'react/jsx-no-duplicate-props'?: Linter.RuleEntry<ReactJsxNoDuplicateProps>
  /**
   * Disallow problematic leaked values from being rendered
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-leaked-render.md
   */
  'react/jsx-no-leaked-render'?: Linter.RuleEntry<ReactJsxNoLeakedRender>
  /**
   * Disallow usage of string literals in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md
   */
  'react/jsx-no-literals'?: Linter.RuleEntry<ReactJsxNoLiterals>
  /**
   * Disallow usage of `javascript:` URLs
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md
   */
  'react/jsx-no-script-url'?: Linter.RuleEntry<ReactJsxNoScriptUrl>
  /**
   * Disallow `target="_blank"` attribute without `rel="noreferrer"`
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md
   */
  'react/jsx-no-target-blank'?: Linter.RuleEntry<ReactJsxNoTargetBlank>
  /**
   * Disallow undeclared variables in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md
   */
  'react/jsx-no-undef'?: Linter.RuleEntry<ReactJsxNoUndef>
  /**
   * Disallow unnecessary fragments
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md
   */
  'react/jsx-no-useless-fragment'?: Linter.RuleEntry<ReactJsxNoUselessFragment>
  /**
   * Require one JSX element per line
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md
   */
  'react/jsx-one-expression-per-line'?: Linter.RuleEntry<ReactJsxOneExpressionPerLine>
  /**
   * Enforce PascalCase for user-defined JSX components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md
   */
  'react/jsx-pascal-case'?: Linter.RuleEntry<ReactJsxPascalCase>
  /**
   * Disallow multiple spaces between inline JSX props
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md
   */
  'react/jsx-props-no-multi-spaces'?: Linter.RuleEntry<[]>
  /**
   * Disallow JSX prop spreading the same identifier multiple times
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spread-multi.md
   */
  'react/jsx-props-no-spread-multi'?: Linter.RuleEntry<[]>
  /**
   * Disallow JSX prop spreading
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md
   */
  'react/jsx-props-no-spreading'?: Linter.RuleEntry<ReactJsxPropsNoSpreading>
  /**
   * Enforce defaultProps declarations alphabetical sorting
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md
   * @deprecated
   */
  'react/jsx-sort-default-props'?: Linter.RuleEntry<ReactJsxSortDefaultProps>
  /**
   * Enforce props alphabetical sorting
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md
   */
  'react/jsx-sort-props'?: Linter.RuleEntry<ReactJsxSortProps>
  /**
   * Enforce spacing before closing bracket in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md
   * @deprecated
   */
  'react/jsx-space-before-closing'?: Linter.RuleEntry<ReactJsxSpaceBeforeClosing>
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md
   */
  'react/jsx-tag-spacing'?: Linter.RuleEntry<ReactJsxTagSpacing>
  /**
   * Disallow React to be incorrectly marked as unused
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md
   */
  'react/jsx-uses-react'?: Linter.RuleEntry<[]>
  /**
   * Disallow variables used in JSX to be incorrectly marked as unused
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md
   */
  'react/jsx-uses-vars'?: Linter.RuleEntry<[]>
  /**
   * Disallow missing parentheses around multiline JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md
   */
  'react/jsx-wrap-multilines'?: Linter.RuleEntry<ReactJsxWrapMultilines>
  /**
   * Disallow when this.state is accessed within setState
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md
   */
  'react/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallow adjacent inline elements not separated by whitespace.
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-adjacent-inline-elements.md
   */
  'react/no-adjacent-inline-elements'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of Array index in keys
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md
   */
  'react/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Lifecycle methods should be methods on the prototype, not class fields
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-arrow-function-lifecycle.md
   */
  'react/no-arrow-function-lifecycle'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing of children as props
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md
   */
  'react/no-children-prop'?: Linter.RuleEntry<ReactNoChildrenProp>
  /**
   * Disallow usage of dangerous JSX properties
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger.md
   */
  'react/no-danger'?: Linter.RuleEntry<ReactNoDanger>
  /**
   * Disallow when a DOM element is using both children and dangerouslySetInnerHTML
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md
   */
  'react/no-danger-with-children'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of deprecated methods
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md
   */
  'react/no-deprecated'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of setState in componentDidMount
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md
   */
  'react/no-did-mount-set-state'?: Linter.RuleEntry<ReactNoDidMountSetState>
  /**
   * Disallow usage of setState in componentDidUpdate
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md
   */
  'react/no-did-update-set-state'?: Linter.RuleEntry<ReactNoDidUpdateSetState>
  /**
   * Disallow direct mutation of this.state
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md
   */
  'react/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of findDOMNode
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md
   */
  'react/no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of invalid attributes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-invalid-html-attribute.md
   */
  'react/no-invalid-html-attribute'?: Linter.RuleEntry<ReactNoInvalidHtmlAttribute>
  /**
   * Disallow usage of isMounted
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md
   */
  'react/no-is-mounted'?: Linter.RuleEntry<[]>
  /**
   * Disallow multiple component definition per file
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md
   */
  'react/no-multi-comp'?: Linter.RuleEntry<ReactNoMultiComp>
  /**
   * Enforce that namespaces are not used in React elements
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-namespace.md
   */
  'react/no-namespace'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of referential-type variables as default param in functional component
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-object-type-as-default-prop.md
   */
  'react/no-object-type-as-default-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of shouldComponentUpdate when extending React.PureComponent
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-redundant-should-component-update.md
   */
  'react/no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of the return value of ReactDOM.render
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md
   */
  'react/no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of setState
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-set-state.md
   */
  'react/no-set-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow using string references
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md
   */
  'react/no-string-refs'?: Linter.RuleEntry<ReactNoStringRefs>
  /**
   * Disallow `this` from being used in stateless functional components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md
   */
  'react/no-this-in-sfc'?: Linter.RuleEntry<[]>
  /**
   * Disallow common typos
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-typos.md
   */
  'react/no-typos'?: Linter.RuleEntry<[]>
  /**
   * Disallow unescaped HTML entities from appearing in markup
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md
   */
  'react/no-unescaped-entities'?: Linter.RuleEntry<ReactNoUnescapedEntities>
  /**
   * Disallow usage of unknown DOM property
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md
   */
  'react/no-unknown-property'?: Linter.RuleEntry<ReactNoUnknownProperty>
  /**
   * Disallow usage of unsafe lifecycle methods
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md
   */
  'react/no-unsafe'?: Linter.RuleEntry<ReactNoUnsafe>
  /**
   * Disallow creating unstable components inside components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unstable-nested-components.md
   */
  'react/no-unstable-nested-components'?: Linter.RuleEntry<ReactNoUnstableNestedComponents>
  /**
   * Disallow declaring unused methods of component class
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-class-component-methods.md
   */
  'react/no-unused-class-component-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow definitions of unused propTypes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md
   */
  'react/no-unused-prop-types'?: Linter.RuleEntry<ReactNoUnusedPropTypes>
  /**
   * Disallow definitions of unused state
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md
   */
  'react/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of setState in componentWillUpdate
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md
   */
  'react/no-will-update-set-state'?: Linter.RuleEntry<ReactNoWillUpdateSetState>
  /**
   * Enforce ES5 or ES6 class for React Components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md
   */
  'react/prefer-es6-class'?: Linter.RuleEntry<ReactPreferEs6Class>
  /**
   * Prefer exact proptype definitions
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-exact-props.md
   */
  'react/prefer-exact-props'?: Linter.RuleEntry<[]>
  /**
   * Enforce that props are read-only
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-read-only-props.md
   */
  'react/prefer-read-only-props'?: Linter.RuleEntry<[]>
  /**
   * Enforce stateless components to be written as a pure function
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md
   */
  'react/prefer-stateless-function'?: Linter.RuleEntry<ReactPreferStatelessFunction>
  /**
   * Disallow missing props validation in a React component definition
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md
   */
  'react/prop-types'?: Linter.RuleEntry<ReactPropTypes>
  /**
   * Disallow missing React when using JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md
   */
  'react/react-in-jsx-scope'?: Linter.RuleEntry<[]>
  /**
   * Enforce a defaultProps definition for every prop that is not a required prop
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-default-props.md
   */
  'react/require-default-props'?: Linter.RuleEntry<ReactRequireDefaultProps>
  /**
   * Enforce React components to have a shouldComponentUpdate method
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-optimization.md
   */
  'react/require-optimization'?: Linter.RuleEntry<ReactRequireOptimization>
  /**
   * Enforce ES5 or ES6 class for returning value in render function
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-render-return.md
   */
  'react/require-render-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow extra closing tags for components without children
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md
   */
  'react/self-closing-comp'?: Linter.RuleEntry<ReactSelfClosingComp>
  /**
   * Enforce component methods order
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-comp.md
   */
  'react/sort-comp'?: Linter.RuleEntry<ReactSortComp>
  /**
   * Enforce defaultProps declarations alphabetical sorting
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-default-props.md
   */
  'react/sort-default-props'?: Linter.RuleEntry<ReactSortDefaultProps>
  /**
   * Enforce propTypes declarations alphabetical sorting
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md
   */
  'react/sort-prop-types'?: Linter.RuleEntry<ReactSortPropTypes>
  /**
   * Enforce class component state initialization style
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/state-in-constructor.md
   */
  'react/state-in-constructor'?: Linter.RuleEntry<ReactStateInConstructor>
  /**
   * Enforces where React component static properties should be positioned.
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md
   */
  'react/static-property-placement'?: Linter.RuleEntry<ReactStaticPropertyPlacement>
  /**
   * Enforce style prop value is an object
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md
   */
  'react/style-prop-object'?: Linter.RuleEntry<ReactStylePropObject>
  /**
   * Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md
   */
  'react/void-dom-elements-no-children'?: Linter.RuleEntry<[]>
  /**
   * disallow confusing quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/confusing-quantifier.html
   */
  'regexp/confusing-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent escaping of control characters
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/control-character-escape.html
   */
  'regexp/control-character-escape'?: Linter.RuleEntry<[]>
  /**
   * enforce single grapheme in string literal
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/grapheme-string-literal.html
   */
  'regexp/grapheme-string-literal'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent usage of hexadecimal escape
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/hexadecimal-escape.html
   */
  'regexp/hexadecimal-escape'?: Linter.RuleEntry<RegexpHexadecimalEscape>
  /**
   * enforce into your favorite case
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/letter-case.html
   */
  'regexp/letter-case'?: Linter.RuleEntry<RegexpLetterCase>
  /**
   * enforce match any character style
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/match-any.html
   */
  'regexp/match-any'?: Linter.RuleEntry<RegexpMatchAny>
  /**
   * enforce use of escapes on negation
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/negation.html
   */
  'regexp/negation'?: Linter.RuleEntry<[]>
  /**
   * disallow elements that contradict assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-contradiction-with-assertion.html
   */
  'regexp/no-contradiction-with-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow control characters
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-control-character.html
   */
  'regexp/no-control-character'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate characters in the RegExp character class
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-characters-character-class.html
   */
  'regexp/no-dupe-characters-character-class'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate disjunctions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-disjunctions.html
   */
  'regexp/no-dupe-disjunctions'?: Linter.RuleEntry<RegexpNoDupeDisjunctions>
  /**
   * disallow alternatives without elements
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-alternative.html
   */
  'regexp/no-empty-alternative'?: Linter.RuleEntry<[]>
  /**
   * disallow capturing group that captures empty.
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-capturing-group.html
   */
  'regexp/no-empty-capturing-group'?: Linter.RuleEntry<[]>
  /**
   * disallow character classes that match no characters
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-character-class.html
   */
  'regexp/no-empty-character-class'?: Linter.RuleEntry<[]>
  /**
   * disallow empty group
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-group.html
   */
  'regexp/no-empty-group'?: Linter.RuleEntry<[]>
  /**
   * disallow empty lookahead assertion or empty lookbehind assertion
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-lookarounds-assertion.html
   */
  'regexp/no-empty-lookarounds-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow empty string literals in character classes
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-string-literal.html
   */
  'regexp/no-empty-string-literal'?: Linter.RuleEntry<[]>
  /**
   * disallow escape backspace (`[\b]`)
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-escape-backspace.html
   */
  'regexp/no-escape-backspace'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary nested lookaround assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-extra-lookaround-assertions.html
   */
  'regexp/no-extra-lookaround-assertions'?: Linter.RuleEntry<[]>
  /**
   * disallow invalid regular expression strings in `RegExp` constructors
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invalid-regexp.html
   */
  'regexp/no-invalid-regexp'?: Linter.RuleEntry<[]>
  /**
   * disallow invisible raw character
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invisible-character.html
   */
  'regexp/no-invisible-character'?: Linter.RuleEntry<[]>
  /**
   * disallow lazy quantifiers at the end of an expression
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-lazy-ends.html
   */
  'regexp/no-lazy-ends'?: Linter.RuleEntry<RegexpNoLazyEnds>
  /**
   * disallow legacy RegExp features
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-legacy-features.html
   */
  'regexp/no-legacy-features'?: Linter.RuleEntry<RegexpNoLegacyFeatures>
  /**
   * disallow capturing groups that do not behave as one would expect
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-capturing-group.html
   */
  'regexp/no-misleading-capturing-group'?: Linter.RuleEntry<RegexpNoMisleadingCapturingGroup>
  /**
   * disallow multi-code-point characters in character classes and quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-unicode-character.html
   */
  'regexp/no-misleading-unicode-character'?: Linter.RuleEntry<RegexpNoMisleadingUnicodeCharacter>
  /**
   * disallow missing `g` flag in patterns used in `String#matchAll` and `String#replaceAll`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-missing-g-flag.html
   */
  'regexp/no-missing-g-flag'?: Linter.RuleEntry<RegexpNoMissingGFlag>
  /**
   * disallow non-standard flags
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-non-standard-flag.html
   */
  'regexp/no-non-standard-flag'?: Linter.RuleEntry<[]>
  /**
   * disallow obscure character ranges
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-obscure-range.html
   */
  'regexp/no-obscure-range'?: Linter.RuleEntry<RegexpNoObscureRange>
  /**
   * disallow octal escape sequence
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-octal.html
   */
  'regexp/no-octal'?: Linter.RuleEntry<[]>
  /**
   * disallow optional assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-optional-assertion.html
   */
  'regexp/no-optional-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow backreferences that reference a group that might not be matched
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-potentially-useless-backreference.html
   */
  'regexp/no-potentially-useless-backreference'?: Linter.RuleEntry<[]>
  /**
   * disallow standalone backslashes (`\`)
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-standalone-backslash.html
   */
  'regexp/no-standalone-backslash'?: Linter.RuleEntry<[]>
  /**
   * disallow exponential and polynomial backtracking
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-backtracking.html
   */
  'regexp/no-super-linear-backtracking'?: Linter.RuleEntry<RegexpNoSuperLinearBacktracking>
  /**
   * disallow quantifiers that cause quadratic moves
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-move.html
   */
  'regexp/no-super-linear-move'?: Linter.RuleEntry<RegexpNoSuperLinearMove>
  /**
   * disallow trivially nested assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-assertion.html
   */
  'regexp/no-trivially-nested-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow nested quantifiers that can be rewritten as one quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-quantifier.html
   */
  'regexp/no-trivially-nested-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow unused capturing group
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-unused-capturing-group.html
   */
  'regexp/no-unused-capturing-group'?: Linter.RuleEntry<RegexpNoUnusedCapturingGroup>
  /**
   * disallow assertions that are known to always accept (or reject)
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-assertions.html
   */
  'regexp/no-useless-assertions'?: Linter.RuleEntry<[]>
  /**
   * disallow useless backreferences in regular expressions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-backreference.html
   */
  'regexp/no-useless-backreference'?: Linter.RuleEntry<[]>
  /**
   * disallow character class with one character
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-character-class.html
   */
  'regexp/no-useless-character-class'?: Linter.RuleEntry<RegexpNoUselessCharacterClass>
  /**
   * disallow useless `$` replacements in replacement string
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-dollar-replacements.html
   */
  'regexp/no-useless-dollar-replacements'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary escape characters in RegExp
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-escape.html
   */
  'regexp/no-useless-escape'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary regex flags
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-flag.html
   */
  'regexp/no-useless-flag'?: Linter.RuleEntry<RegexpNoUselessFlag>
  /**
   * disallow unnecessarily non-greedy quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-lazy.html
   */
  'regexp/no-useless-lazy'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary non-capturing group
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-non-capturing-group.html
   */
  'regexp/no-useless-non-capturing-group'?: Linter.RuleEntry<RegexpNoUselessNonCapturingGroup>
  /**
   * disallow quantifiers that can be removed
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-quantifier.html
   */
  'regexp/no-useless-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary character ranges
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-range.html
   */
  'regexp/no-useless-range'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary elements in expression character classes
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-set-operand.html
   */
  'regexp/no-useless-set-operand'?: Linter.RuleEntry<[]>
  /**
   * disallow string disjunction of single characters in `\q{...}`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-string-literal.html
   */
  'regexp/no-useless-string-literal'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary `{n,m}` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-two-nums-quantifier.html
   */
  'regexp/no-useless-two-nums-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow quantifiers with a maximum of zero
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-zero-quantifier.html
   */
  'regexp/no-zero-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow the alternatives of lookarounds that end with a non-constant quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-lookaround-quantifier.html
   */
  'regexp/optimal-lookaround-quantifier'?: Linter.RuleEntry<[]>
  /**
   * require optimal quantifiers for concatenated quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-quantifier-concatenation.html
   */
  'regexp/optimal-quantifier-concatenation'?: Linter.RuleEntry<RegexpOptimalQuantifierConcatenation>
  /**
   * enforce using character class
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-character-class.html
   */
  'regexp/prefer-character-class'?: Linter.RuleEntry<RegexpPreferCharacterClass>
  /**
   * enforce using `\d`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-d.html
   */
  'regexp/prefer-d'?: Linter.RuleEntry<RegexpPreferD>
  /**
   * enforces escape of replacement `$` character (`$$`).
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-escape-replacement-dollar-char.html
   */
  'regexp/prefer-escape-replacement-dollar-char'?: Linter.RuleEntry<[]>
  /**
   * prefer lookarounds over capturing group that do not replace
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-lookaround.html
   */
  'regexp/prefer-lookaround'?: Linter.RuleEntry<RegexpPreferLookaround>
  /**
   * enforce using named backreferences
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-backreference.html
   */
  'regexp/prefer-named-backreference'?: Linter.RuleEntry<[]>
  /**
   * enforce using named capture groups
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-capture-group.html
   */
  'regexp/prefer-named-capture-group'?: Linter.RuleEntry<[]>
  /**
   * enforce using named replacement
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-replacement.html
   */
  'regexp/prefer-named-replacement'?: Linter.RuleEntry<RegexpPreferNamedReplacement>
  /**
   * enforce using `+` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-plus-quantifier.html
   */
  'regexp/prefer-plus-quantifier'?: Linter.RuleEntry<[]>
  /**
   * prefer predefined assertion over equivalent lookarounds
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-predefined-assertion.html
   */
  'regexp/prefer-predefined-assertion'?: Linter.RuleEntry<[]>
  /**
   * enforce using quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-quantifier.html
   */
  'regexp/prefer-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce using `?` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-question-quantifier.html
   */
  'regexp/prefer-question-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce using character class range
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-range.html
   */
  'regexp/prefer-range'?: Linter.RuleEntry<RegexpPreferRange>
  /**
   * enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-exec.html
   */
  'regexp/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * enforce that `RegExp#test` is used instead of `String#match` and `RegExp#exec`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-test.html
   */
  'regexp/prefer-regexp-test'?: Linter.RuleEntry<[]>
  /**
   * enforce using result array `groups`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-result-array-groups.html
   */
  'regexp/prefer-result-array-groups'?: Linter.RuleEntry<RegexpPreferResultArrayGroups>
  /**
   * prefer character class set operations instead of lookarounds
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-set-operation.html
   */
  'regexp/prefer-set-operation'?: Linter.RuleEntry<[]>
  /**
   * enforce using `*` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-star-quantifier.html
   */
  'regexp/prefer-star-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce use of unicode codepoint escapes
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-unicode-codepoint-escapes.html
   */
  'regexp/prefer-unicode-codepoint-escapes'?: Linter.RuleEntry<[]>
  /**
   * enforce using `\w`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-w.html
   */
  'regexp/prefer-w'?: Linter.RuleEntry<[]>
  /**
   * enforce the use of the `u` flag
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/require-unicode-regexp.html
   */
  'regexp/require-unicode-regexp'?: Linter.RuleEntry<[]>
  /**
   * enforce the use of the `v` flag
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/require-unicode-sets-regexp.html
   */
  'regexp/require-unicode-sets-regexp'?: Linter.RuleEntry<[]>
  /**
   * require simplify set operations
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/simplify-set-operations.html
   */
  'regexp/simplify-set-operations'?: Linter.RuleEntry<[]>
  /**
   * sort alternatives if order doesn't matter
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-alternatives.html
   */
  'regexp/sort-alternatives'?: Linter.RuleEntry<[]>
  /**
   * enforces elements order in character class
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-character-class-elements.html
   */
  'regexp/sort-character-class-elements'?: Linter.RuleEntry<RegexpSortCharacterClassElements>
  /**
   * require regex flags to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-flags.html
   */
  'regexp/sort-flags'?: Linter.RuleEntry<[]>
  /**
   * disallow not strictly valid regular expressions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/strict.html
   */
  'regexp/strict'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent usage of unicode escape or unicode codepoint escape
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/unicode-escape.html
   */
  'regexp/unicode-escape'?: Linter.RuleEntry<RegexpUnicodeEscape>
  /**
   * enforce consistent naming of unicode properties
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/unicode-property.html
   */
  'regexp/unicode-property'?: Linter.RuleEntry<RegexpUnicodeProperty>
  /**
   * use the `i` flag if it simplifies the pattern
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/use-ignore-case.html
   */
  'regexp/use-ignore-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
   * @see https://eslint.org/docs/latest/rules/require-atomic-updates
   */
  'require-atomic-updates'?: Linter.RuleEntry<RequireAtomicUpdates>
  /**
   * Disallow async functions which have no `await` expression
   * @see https://eslint.org/docs/latest/rules/require-await
   */
  'require-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `u` or `v` flag on RegExp
   * @see https://eslint.org/docs/latest/rules/require-unicode-regexp
   */
  'require-unicode-regexp'?: Linter.RuleEntry<RequireUnicodeRegexp>
  /**
   * Require generator functions to contain `yield`
   * @see https://eslint.org/docs/latest/rules/require-yield
   */
  'require-yield'?: Linter.RuleEntry<[]>
  /**
   * Enforce spacing between rest and spread operators and their expressions
   * @see https://eslint.org/docs/latest/rules/rest-spread-spacing
   * @deprecated
   */
  'rest-spread-spacing'?: Linter.RuleEntry<RestSpreadSpacing>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://eslint.org/docs/latest/rules/semi
   * @deprecated
   */
  'semi'?: Linter.RuleEntry<Semi>
  /**
   * Enforce consistent spacing before and after semicolons
   * @see https://eslint.org/docs/latest/rules/semi-spacing
   * @deprecated
   */
  'semi-spacing'?: Linter.RuleEntry<SemiSpacing>
  /**
   * Enforce location of semicolons
   * @see https://eslint.org/docs/latest/rules/semi-style
   * @deprecated
   */
  'semi-style'?: Linter.RuleEntry<SemiStyle>
  /**
   * Automatically sort exports.
   * @see https://github.com/lydell/eslint-plugin-simple-import-sort#sort-order
   */
  'simple-import-sort/exports'?: Linter.RuleEntry<[]>
  /**
   * Automatically sort imports.
   * @see https://github.com/lydell/eslint-plugin-simple-import-sort#sort-order
   */
  'simple-import-sort/imports'?: Linter.RuleEntry<SimpleImportSortImports>
  /**
   * Property getters and setters should come in pairs
   * @see https://sonarsource.github.io/rspec/#/rspec/S2376/javascript
   */
  'sonarjs/accessor-pairs'?: Linter.RuleEntry<SonarjsAccessorPairs>
  /**
   * Image, area, button with image and object elements should have an alternative text
   * @see https://sonarsource.github.io/rspec/#/rspec/S1077/javascript
   */
  'sonarjs/alt-text'?: Linter.RuleEntry<SonarjsAltText>
  /**
   * Anchors should contain accessible content
   * @see https://sonarsource.github.io/rspec/#/rspec/S6827/javascript
   */
  'sonarjs/anchor-has-content'?: Linter.RuleEntry<SonarjsAnchorHasContent>
  /**
   * Anchor tags should not be used as buttons
   * @see https://sonarsource.github.io/rspec/#/rspec/S6844/javascript
   */
  'sonarjs/anchor-is-valid'?: Linter.RuleEntry<SonarjsAnchorIsValid>
  /**
   * Alternatives in regular expressions should be grouped when used with anchors
   * @see https://sonarsource.github.io/rspec/#/rspec/S5850/javascript
   */
  'sonarjs/anchor-precedence'?: Linter.RuleEntry<[]>
  /**
   * Arguments to built-in functions should match documented types
   * @see https://sonarsource.github.io/rspec/#/rspec/S3782/javascript
   */
  'sonarjs/argument-type'?: Linter.RuleEntry<[]>
  /**
   * Parameters should be passed in the correct order
   * @see https://sonarsource.github.io/rspec/#/rspec/S2234/javascript
   */
  'sonarjs/arguments-order'?: Linter.RuleEntry<SonarjsArgumentsOrder>
  /**
   * "arguments" should not be accessed directly
   * @see https://sonarsource.github.io/rspec/#/rspec/S3513/javascript
   */
  'sonarjs/arguments-usage'?: Linter.RuleEntry<SonarjsArgumentsUsage>
  /**
   * Callbacks of array methods should have return statements
   * @see https://sonarsource.github.io/rspec/#/rspec/S3796/javascript
   */
  'sonarjs/array-callback-without-return'?: Linter.RuleEntry<[]>
  /**
   * Array constructors should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1528/javascript
   */
  'sonarjs/array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Braces and parentheses should be used consistently with arrow functions
   * @see https://sonarsource.github.io/rspec/#/rspec/S3524/javascript
   */
  'sonarjs/arrow-function-convention'?: Linter.RuleEntry<SonarjsArrowFunctionConvention>
  /**
   * Tests should include assertions
   * @see https://sonarsource.github.io/rspec/#/rspec/S2699/javascript
   */
  'sonarjs/assertions-in-tests'?: Linter.RuleEntry<[]>
  /**
   * Creating public APIs is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6333/javascript
   */
  'sonarjs/aws-apigateway-public-api'?: Linter.RuleEntry<[]>
  /**
   * Allowing public network access to cloud resources is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6329/javascript
   */
  'sonarjs/aws-ec2-rds-dms-public'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted EBS volumes is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6275/javascript
   */
  'sonarjs/aws-ec2-unencrypted-ebs-volume'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted EFS file systems is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6332/javascript
   */
  'sonarjs/aws-efs-unencrypted'?: Linter.RuleEntry<[]>
  /**
   * Policies granting all privileges are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6302/javascript
   */
  'sonarjs/aws-iam-all-privileges'?: Linter.RuleEntry<SonarjsAwsIamAllPrivileges>
  /**
   * Policies granting access to all resources of an account are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6304/javascript
   */
  'sonarjs/aws-iam-all-resources-accessible'?: Linter.RuleEntry<SonarjsAwsIamAllResourcesAccessible>
  /**
   * AWS IAM policies should limit the scope of permissions given
   * @see https://sonarsource.github.io/rspec/#/rspec/S6317/javascript
   */
  'sonarjs/aws-iam-privilege-escalation'?: Linter.RuleEntry<SonarjsAwsIamPrivilegeEscalation>
  /**
   * Policies authorizing public access to resources are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6270/javascript
   */
  'sonarjs/aws-iam-public-access'?: Linter.RuleEntry<SonarjsAwsIamPublicAccess>
  /**
   * Using unencrypted Elasticsearch domains is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6308/javascript
   */
  'sonarjs/aws-opensearchservice-domain'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted RDS DB resources is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6303/javascript
   */
  'sonarjs/aws-rds-unencrypted-databases'?: Linter.RuleEntry<[]>
  /**
   * Administration services access should be restricted to specific IP addresses
   * @see https://sonarsource.github.io/rspec/#/rspec/S6321/javascript
   */
  'sonarjs/aws-restricted-ip-admin-access'?: Linter.RuleEntry<[]>
  /**
   * Granting access to S3 buckets to all or authenticated users is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6265/javascript
   */
  'sonarjs/aws-s3-bucket-granted-access'?: Linter.RuleEntry<SonarjsAwsS3BucketGrantedAccess>
  /**
   * Authorizing HTTP communications with S3 buckets is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6249/javascript
   */
  'sonarjs/aws-s3-bucket-insecure-http'?: Linter.RuleEntry<[]>
  /**
   * Allowing public ACLs or policies on a S3 bucket is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6281/javascript
   */
  'sonarjs/aws-s3-bucket-public-access'?: Linter.RuleEntry<SonarjsAwsS3BucketPublicAccess>
  /**
   * Disabling server-side encryption of S3 buckets is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6245/javascript
   * @deprecated
   */
  'sonarjs/aws-s3-bucket-server-encryption'?: Linter.RuleEntry<SonarjsAwsS3BucketServerEncryption>
  /**
   * Disabling versioning of S3 buckets is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6252/javascript
   */
  'sonarjs/aws-s3-bucket-versioning'?: Linter.RuleEntry<SonarjsAwsS3BucketVersioning>
  /**
   * Using unencrypted SageMaker notebook instances is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6319/javascript
   */
  'sonarjs/aws-sagemaker-unencrypted-notebook'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted SNS topics is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6327/javascript
   */
  'sonarjs/aws-sns-unencrypted-topics'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted SQS queues is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6330/javascript
   */
  'sonarjs/aws-sqs-unencrypted-queue'?: Linter.RuleEntry<[]>
  /**
   * Bitwise operators should not be used in boolean contexts
   * @see https://sonarsource.github.io/rspec/#/rspec/S1529/javascript
   */
  'sonarjs/bitwise-operators'?: Linter.RuleEntry<[]>
  /**
   * Optional boolean parameters should have default value
   * @see https://sonarsource.github.io/rspec/#/rspec/S4798/javascript
   */
  'sonarjs/bool-param-default'?: Linter.RuleEntry<[]>
  /**
   * An open curly brace should be located at the end of a line
   * @see https://sonarsource.github.io/rspec/#/rspec/S1105/javascript
   * @deprecated
   */
  'sonarjs/brace-style'?: Linter.RuleEntry<SonarjsBraceStyle>
  /**
   * Function call arguments should not start on new lines
   * @see https://sonarsource.github.io/rspec/#/rspec/S1472/javascript
   */
  'sonarjs/call-argument-line'?: Linter.RuleEntry<[]>
  /**
   * Disabling Certificate Transparency monitoring is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5742/javascript
   */
  'sonarjs/certificate-transparency'?: Linter.RuleEntry<SonarjsCertificateTransparency>
  /**
   * Chai assertions should have only one reason to succeed
   * @see https://sonarsource.github.io/rspec/#/rspec/S6092/javascript
   */
  'sonarjs/chai-determinate-assertion'?: Linter.RuleEntry<[]>
  /**
   * Class names should comply with a naming convention
   * @see https://sonarsource.github.io/rspec/#/rspec/S101/javascript
   */
  'sonarjs/class-name'?: Linter.RuleEntry<SonarjsClassName>
  /**
   * Class methods should be used instead of "prototype" assignments
   * @see https://sonarsource.github.io/rspec/#/rspec/S3525/javascript
   */
  'sonarjs/class-prototype'?: Linter.RuleEntry<[]>
  /**
   * Dynamically executing code is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S1523/javascript
   */
  'sonarjs/code-eval'?: Linter.RuleEntry<[]>
  /**
   * Cognitive Complexity of functions should not be too high
   * @see https://sonarsource.github.io/rspec/#/rspec/S3776/javascript
   */
  'sonarjs/cognitive-complexity'?: Linter.RuleEntry<SonarjsCognitiveComplexity>
  /**
   * Comma and logical OR operators should not be used in switch cases
   * @see https://sonarsource.github.io/rspec/#/rspec/S3616/javascript
   */
  'sonarjs/comma-or-logical-or-case'?: Linter.RuleEntry<[]>
  /**
   * Track comments matching a regular expression
   * @see https://sonarsource.github.io/rspec/#/rspec/S124/javascript
   */
  'sonarjs/comment-regex'?: Linter.RuleEntry<SonarjsCommentRegex>
  /**
   * Regular expression quantifiers and character classes should be used concisely
   * @see https://sonarsource.github.io/rspec/#/rspec/S6353/javascript
   */
  'sonarjs/concise-regex'?: Linter.RuleEntry<[]>
  /**
   * A conditionally executed single line should be denoted by indentation
   * @see https://sonarsource.github.io/rspec/#/rspec/S3973/javascript
   * @deprecated
   */
  'sonarjs/conditional-indentation'?: Linter.RuleEntry<SonarjsConditionalIndentation>
  /**
   * Allowing confidential information to be logged is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5757/javascript
   */
  'sonarjs/confidential-information-logging'?: Linter.RuleEntry<SonarjsConfidentialInformationLogging>
  /**
   * Objects should not be created to be dropped immediately without being used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1848/javascript
   */
  'sonarjs/constructor-for-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Allowing requests with excessive content length is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5693/javascript
   */
  'sonarjs/content-length'?: Linter.RuleEntry<SonarjsContentLength>
  /**
   * Disabling content security policy fetch directives is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5728/javascript
   */
  'sonarjs/content-security-policy'?: Linter.RuleEntry<SonarjsContentSecurityPolicy>
  /**
   * Creating cookies without the "HttpOnly" flag is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S3330/javascript
   */
  'sonarjs/cookie-no-httponly'?: Linter.RuleEntry<SonarjsCookieNoHttponly>
  /**
   * Writing cookies is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2255/javascript
   * @deprecated
   */
  'sonarjs/cookies'?: Linter.RuleEntry<[]>
  /**
   * Having a permissive Cross-Origin Resource Sharing policy is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5122/javascript
   */
  'sonarjs/cors'?: Linter.RuleEntry<SonarjsCors>
  /**
   * Disabling CSRF protections is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4502/javascript
   */
  'sonarjs/csrf'?: Linter.RuleEntry<SonarjsCsrf>
  /**
   * Cyclomatic Complexity of functions should not be too high
   * @see https://sonarsource.github.io/rspec/#/rspec/S1541/javascript
   */
  'sonarjs/cyclomatic-complexity'?: Linter.RuleEntry<SonarjsCyclomaticComplexity>
  /**
   * Variables and functions should not be declared in the global scope
   * @see https://sonarsource.github.io/rspec/#/rspec/S3798/javascript
   */
  'sonarjs/declarations-in-global-scope'?: Linter.RuleEntry<[]>
  /**
   * Function parameters with default values should be last
   * @see https://sonarsource.github.io/rspec/#/rspec/S1788/javascript
   */
  'sonarjs/default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Deprecated APIs should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1874/javascript
   */
  'sonarjs/deprecation'?: Linter.RuleEntry<[]>
  /**
   * Destructuring syntax should be used for assignments
   * @see https://sonarsource.github.io/rspec/#/rspec/S3514/javascript
   */
  'sonarjs/destructuring-assignment-syntax'?: Linter.RuleEntry<SonarjsDestructuringAssignmentSyntax>
  /**
   * Strict equality operators should not be used with dissimilar types
   * @see https://sonarsource.github.io/rspec/#/rspec/S3403/javascript
   */
  'sonarjs/different-types-comparison'?: Linter.RuleEntry<SonarjsDifferentTypesComparison>
  /**
   * Disabling auto-escaping in template engines is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5247/javascript
   */
  'sonarjs/disabled-auto-escaping'?: Linter.RuleEntry<SonarjsDisabledAutoEscaping>
  /**
   * Using remote artifacts without integrity checks is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5725/javascript
   */
  'sonarjs/disabled-resource-integrity'?: Linter.RuleEntry<[]>
  /**
   * Disabling Mocha timeouts should be explicit
   * @see https://sonarsource.github.io/rspec/#/rspec/S6080/javascript
   */
  'sonarjs/disabled-timeout'?: Linter.RuleEntry<[]>
  /**
   * Allowing browsers to perform DNS prefetching is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5743/javascript
   * @deprecated
   */
  'sonarjs/dns-prefetching'?: Linter.RuleEntry<SonarjsDnsPrefetching>
  /**
   * Character classes in regular expressions should not contain the same character twice
   * @see https://sonarsource.github.io/rspec/#/rspec/S5869/javascript
   */
  'sonarjs/duplicates-in-character-class'?: Linter.RuleEntry<SonarjsDuplicatesInCharacterClass>
  /**
   * "if ... else if" constructs should end with "else" clauses
   * @see https://sonarsource.github.io/rspec/#/rspec/S126/javascript
   */
  'sonarjs/elseif-without-else'?: Linter.RuleEntry<[]>
  /**
   * Repeated patterns in regular expressions should not match the empty string
   * @see https://sonarsource.github.io/rspec/#/rspec/S5842/javascript
   */
  'sonarjs/empty-string-repetition'?: Linter.RuleEntry<[]>
  /**
   * Encrypting data is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4787/javascript
   * @deprecated
   */
  'sonarjs/encryption'?: Linter.RuleEntry<[]>
  /**
   * Encryption algorithms should be used with secure mode and padding scheme
   * @see https://sonarsource.github.io/rspec/#/rspec/S5542/javascript
   */
  'sonarjs/encryption-secure-mode'?: Linter.RuleEntry<[]>
  /**
   * Trailing commas should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S3723/javascript
   * @deprecated
   */
  'sonarjs/enforce-trailing-comma'?: Linter.RuleEntry<SonarjsEnforceTrailingComma>
  /**
   * Replacement strings should reference existing regular expression groups
   * @see https://sonarsource.github.io/rspec/#/rspec/S6328/javascript
   */
  'sonarjs/existing-groups'?: Linter.RuleEntry<[]>
  /**
   * Expressions should not be too complex
   * @see https://sonarsource.github.io/rspec/#/rspec/S1067/javascript
   */
  'sonarjs/expression-complexity'?: Linter.RuleEntry<SonarjsExpressionComplexity>
  /**
   * Track lack of copyright and license headers
   * @see https://sonarsource.github.io/rspec/#/rspec/S1451/javascript
   */
  'sonarjs/file-header'?: Linter.RuleEntry<SonarjsFileHeader>
  /**
   * Default export names and file names should match
   * @see https://sonarsource.github.io/rspec/#/rspec/S3317/javascript
   */
  'sonarjs/file-name-differ-from-class'?: Linter.RuleEntry<[]>
  /**
   * Setting loose POSIX file permissions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2612/javascript
   */
  'sonarjs/file-permissions'?: Linter.RuleEntry<[]>
  /**
   * File uploads should be restricted
   * @see https://sonarsource.github.io/rspec/#/rspec/S2598/javascript
   */
  'sonarjs/file-uploads'?: Linter.RuleEntry<SonarjsFileUploads>
  /**
   * Track uses of "FIXME" tags
   * @see https://sonarsource.github.io/rspec/#/rspec/S1134/javascript
   */
  'sonarjs/fixme-tag'?: Linter.RuleEntry<[]>
  /**
   * "for...in" loops should filter properties before acting on them
   * @see https://sonarsource.github.io/rspec/#/rspec/S1535/javascript
   */
  'sonarjs/for-in'?: Linter.RuleEntry<[]>
  /**
   * A "for" loop update clause should move the counter in the right direction
   * @see https://sonarsource.github.io/rspec/#/rspec/S2251/javascript
   */
  'sonarjs/for-loop-increment-sign'?: Linter.RuleEntry<SonarjsForLoopIncrementSign>
  /**
   * Disabling content security policy frame-ancestors directive is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5732/javascript
   */
  'sonarjs/frame-ancestors'?: Linter.RuleEntry<SonarjsFrameAncestors>
  /**
   * Functions should not be defined inside loops
   * @see https://sonarsource.github.io/rspec/#/rspec/S1515/javascript
   */
  'sonarjs/function-inside-loop'?: Linter.RuleEntry<SonarjsFunctionInsideLoop>
  /**
   * Function and method names should comply with a naming convention
   * @see https://sonarsource.github.io/rspec/#/rspec/S100/javascript
   */
  'sonarjs/function-name'?: Linter.RuleEntry<SonarjsFunctionName>
  /**
   * Functions should always return the same type
   * @see https://sonarsource.github.io/rspec/#/rspec/S3800/javascript
   */
  'sonarjs/function-return-type'?: Linter.RuleEntry<SonarjsFunctionReturnType>
  /**
   * Future reserved words should not be used as identifiers
   * @see https://sonarsource.github.io/rspec/#/rspec/S1527/javascript
   */
  'sonarjs/future-reserved-words'?: Linter.RuleEntry<[]>
  /**
   * Generators should explicitly "yield" a value
   * @see https://sonarsource.github.io/rspec/#/rspec/S3531/javascript
   */
  'sonarjs/generator-without-yield'?: Linter.RuleEntry<[]>
  /**
   * Using weak hashing algorithms is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4790/javascript
   */
  'sonarjs/hashing'?: Linter.RuleEntry<[]>
  /**
   * Statically serving hidden files is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5691/javascript
   */
  'sonarjs/hidden-files'?: Linter.RuleEntry<[]>
  /**
   * The return value of "useState" should be destructured and named symmetrically
   * @see https://sonarsource.github.io/rspec/#/rspec/S6754/javascript
   */
  'sonarjs/hook-use-state'?: Linter.RuleEntry<SonarjsHookUseState>
  /**
   * HTML elements should have a valid language attribute
   * @see https://sonarsource.github.io/rspec/#/rspec/S5254/javascript
   */
  'sonarjs/html-has-lang'?: Linter.RuleEntry<[]>
  /**
   * "in" should not be used with primitive types
   * @see https://sonarsource.github.io/rspec/#/rspec/S3785/javascript
   */
  'sonarjs/in-operator-type-error'?: Linter.RuleEntry<SonarjsInOperatorTypeError>
  /**
   * Functions should be called consistently with or without "new"
   * @see https://sonarsource.github.io/rspec/#/rspec/S3686/javascript
   */
  'sonarjs/inconsistent-function-call'?: Linter.RuleEntry<SonarjsInconsistentFunctionCall>
  /**
   * "indexOf" checks should not be for positive numbers
   * @see https://sonarsource.github.io/rspec/#/rspec/S2692/javascript
   */
  'sonarjs/index-of-compare-to-positive-number'?: Linter.RuleEntry<[]>
  /**
   * Creating cookies without the "secure" flag is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2092/javascript
   */
  'sonarjs/insecure-cookie'?: Linter.RuleEntry<SonarjsInsecureCookie>
  /**
   * JWT should be signed and verified with strong cipher algorithms
   * @see https://sonarsource.github.io/rspec/#/rspec/S5659/javascript
   */
  'sonarjs/insecure-jwt-token'?: Linter.RuleEntry<SonarjsInsecureJwtToken>
  /**
   * Assertion arguments should be passed in the correct order
   * @see https://sonarsource.github.io/rspec/#/rspec/S3415/javascript
   */
  'sonarjs/inverted-assertion-arguments'?: Linter.RuleEntry<SonarjsInvertedAssertionArguments>
  /**
   * JSX list components should have a key property
   * @see https://sonarsource.github.io/rspec/#/rspec/S6477/javascript
   */
  'sonarjs/jsx-key'?: Linter.RuleEntry<[]>
  /**
   * React Context Provider values should have stable identities
   * @see https://sonarsource.github.io/rspec/#/rspec/S6481/javascript
   */
  'sonarjs/jsx-no-constructed-context-values'?: Linter.RuleEntry<[]>
  /**
   * Redundant React fragments should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S6749/javascript
   */
  'sonarjs/jsx-no-useless-fragment'?: Linter.RuleEntry<SonarjsJsxNoUselessFragment>
  /**
   * Label elements should have a text label and an associated control
   * @see https://sonarsource.github.io/rspec/#/rspec/S6853/javascript
   */
  'sonarjs/label-has-associated-control'?: Linter.RuleEntry<SonarjsLabelHasAssociatedControl>
  /**
   * Only "while", "do", "for" and "switch" statements should be labelled
   * @see https://sonarsource.github.io/rspec/#/rspec/S1439/javascript
   */
  'sonarjs/label-position'?: Linter.RuleEntry<[]>
  /**
   * Authorizing an opened window to access back to the originating window is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5148/javascript
   */
  'sonarjs/link-with-target-blank'?: Linter.RuleEntry<[]>
  /**
   * "switch" statements should not have too many "case" clauses
   * @see https://sonarsource.github.io/rspec/#/rspec/S1479/javascript
   */
  'sonarjs/max-switch-cases'?: Linter.RuleEntry<SonarjsMaxSwitchCases>
  /**
   * Union types should not have too many elements
   * @see https://sonarsource.github.io/rspec/#/rspec/S4622/javascript
   */
  'sonarjs/max-union-size'?: Linter.RuleEntry<SonarjsMaxUnionSize>
  /**
   * Media elements should have captions
   * @see https://sonarsource.github.io/rspec/#/rspec/S4084/javascript
   */
  'sonarjs/media-has-caption'?: Linter.RuleEntry<SonarjsMediaHasCaption>
  /**
   * "for" loop increment clauses should modify the loops' counters
   * @see https://sonarsource.github.io/rspec/#/rspec/S1994/javascript
   */
  'sonarjs/misplaced-loop-counter'?: Linter.RuleEntry<[]>
  /**
   * Mouse events should have corresponding keyboard events
   * @see https://sonarsource.github.io/rspec/#/rspec/S1082/javascript
   */
  'sonarjs/mouse-events-a11y'?: Linter.RuleEntry<[]>
  /**
   * Control flow statements "if", "for", "while", "switch" and "try" should not be nested too deeply
   * @see https://sonarsource.github.io/rspec/#/rspec/S134/javascript
   */
  'sonarjs/nested-control-flow'?: Linter.RuleEntry<SonarjsNestedControlFlow>
  /**
   * Constructor names should start with an upper case letter
   * @see https://sonarsource.github.io/rspec/#/rspec/S2430/javascript
   */
  'sonarjs/new-cap'?: Linter.RuleEntry<SonarjsNewCap>
  /**
   * "new" should only be used with functions and classes
   * @see https://sonarsource.github.io/rspec/#/rspec/S2999/javascript
   */
  'sonarjs/new-operator-misuse'?: Linter.RuleEntry<SonarjsNewOperatorMisuse>
  /**
   * Getters and setters should access the expected fields
   * @see https://sonarsource.github.io/rspec/#/rspec/S4275/javascript
   */
  'sonarjs/no-accessor-field-mismatch'?: Linter.RuleEntry<SonarjsNoAccessorFieldMismatch>
  /**
   * All branches in a conditional structure should not have exactly the same implementation
   * @see https://sonarsource.github.io/rspec/#/rspec/S3923/javascript
   */
  'sonarjs/no-all-duplicated-branches'?: Linter.RuleEntry<[]>
  /**
   * "Array.prototype.sort()" and "Array.prototype.toSorted()" should use a compare function
   * @see https://sonarsource.github.io/rspec/#/rspec/S2871/javascript
   */
  'sonarjs/no-alphabetical-sort'?: Linter.RuleEntry<[]>
  /**
   * Disabling Angular built-in sanitization is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6268/javascript
   */
  'sonarjs/no-angular-bypass-sanitization'?: Linter.RuleEntry<[]>
  /**
   * "delete" should not be used on arrays
   * @see https://sonarsource.github.io/rspec/#/rspec/S2870/javascript
   */
  'sonarjs/no-array-delete'?: Linter.RuleEntry<[]>
  /**
   * JSX list components should not use array indexes as key
   * @see https://sonarsource.github.io/rspec/#/rspec/S6479/javascript
   */
  'sonarjs/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Array indexes should be numeric
   * @see https://sonarsource.github.io/rspec/#/rspec/S3579/javascript
   */
  'sonarjs/no-associative-arrays'?: Linter.RuleEntry<[]>
  /**
   * Constructors should not contain asynchronous operations
   * @see https://sonarsource.github.io/rspec/#/rspec/S7059/javascript
   */
  'sonarjs/no-async-constructor'?: Linter.RuleEntry<[]>
  /**
   * Objects and classes converted or coerced to strings should define a "toString()" method
   * @see https://sonarsource.github.io/rspec/#/rspec/S6551/javascript
   */
  'sonarjs/no-base-to-string'?: Linter.RuleEntry<SonarjsNoBaseToString>
  /**
   * Built-in objects should not be overridden
   * @see https://sonarsource.github.io/rspec/#/rspec/S2424/javascript
   */
  'sonarjs/no-built-in-override'?: Linter.RuleEntry<[]>
  /**
   * "switch" statements should not contain non-case labels
   * @see https://sonarsource.github.io/rspec/#/rspec/S1219/javascript
   */
  'sonarjs/no-case-label-in-switch'?: Linter.RuleEntry<[]>
  /**
   * Using clear-text protocols is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5332/javascript
   */
  'sonarjs/no-clear-text-protocols'?: Linter.RuleEntry<[]>
  /**
   * Tests should not execute any code after "done()" is called
   * @see https://sonarsource.github.io/rspec/#/rspec/S6079/javascript
   */
  'sonarjs/no-code-after-done'?: Linter.RuleEntry<SonarjsNoCodeAfterDone>
  /**
   * Mergeable "if" statements should be combined
   * @see https://sonarsource.github.io/rspec/#/rspec/S1066/javascript
   */
  'sonarjs/no-collapsible-if'?: Linter.RuleEntry<SonarjsNoCollapsibleIf>
  /**
   * Collection size and array length comparisons should make sense
   * @see https://sonarsource.github.io/rspec/#/rspec/S3981/javascript
   */
  'sonarjs/no-collection-size-mischeck'?: Linter.RuleEntry<[]>
  /**
   * Sections of code should not be commented out
   * @see https://sonarsource.github.io/rspec/#/rspec/S125/javascript
   */
  'sonarjs/no-commented-code'?: Linter.RuleEntry<[]>
  /**
   * Unused assignments should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1854/javascript
   */
  'sonarjs/no-dead-store'?: Linter.RuleEntry<[]>
  /**
   * "delete" should be used only with object properties
   * @see https://sonarsource.github.io/rspec/#/rspec/S3001/javascript
   */
  'sonarjs/no-delete-var'?: Linter.RuleEntry<[]>
  /**
   * Deprecated React APIs should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S6957/javascript
   */
  'sonarjs/no-deprecated-react'?: Linter.RuleEntry<SonarjsNoDeprecatedReact>
  /**
   * Union and intersection types should not include duplicated constituents
   * @see https://sonarsource.github.io/rspec/#/rspec/S4621/javascript
   */
  'sonarjs/no-duplicate-in-composite'?: Linter.RuleEntry<SonarjsNoDuplicateInComposite>
  /**
   * String literals should not be duplicated
   * @see https://sonarsource.github.io/rspec/#/rspec/S1192/javascript
   */
  'sonarjs/no-duplicate-string'?: Linter.RuleEntry<SonarjsNoDuplicateString>
  /**
   * Two branches in a conditional structure should not have exactly the same implementation
   * @see https://sonarsource.github.io/rspec/#/rspec/S1871/javascript
   */
  'sonarjs/no-duplicated-branches'?: Linter.RuleEntry<SonarjsNoDuplicatedBranches>
  /**
   * Collection elements should not be replaced unconditionally
   * @see https://sonarsource.github.io/rspec/#/rspec/S4143/javascript
   */
  'sonarjs/no-element-overwrite'?: Linter.RuleEntry<SonarjsNoElementOverwrite>
  /**
   * Reluctant quantifiers in regular expressions should be followed by an expression that can't match the empty string
   * @see https://sonarsource.github.io/rspec/#/rspec/S6019/javascript
   */
  'sonarjs/no-empty-after-reluctant'?: Linter.RuleEntry<[]>
  /**
   * Alternation in regular expressions should not contain empty alternatives
   * @see https://sonarsource.github.io/rspec/#/rspec/S6323/javascript
   */
  'sonarjs/no-empty-alternatives'?: Linter.RuleEntry<[]>
  /**
   * Empty collections should not be accessed or iterated
   * @see https://sonarsource.github.io/rspec/#/rspec/S4158/javascript
   */
  'sonarjs/no-empty-collection'?: Linter.RuleEntry<[]>
  /**
   * Functions should not be empty
   * @see https://sonarsource.github.io/rspec/#/rspec/S1186/javascript
   */
  'sonarjs/no-empty-function'?: Linter.RuleEntry<SonarjsNoEmptyFunction>
  /**
   * Regular expressions should not contain empty groups
   * @see https://sonarsource.github.io/rspec/#/rspec/S6331/javascript
   */
  'sonarjs/no-empty-group'?: Linter.RuleEntry<[]>
  /**
   * Interfaces should not be empty
   * @see https://sonarsource.github.io/rspec/#/rspec/S4023/javascript
   */
  'sonarjs/no-empty-interface'?: Linter.RuleEntry<SonarjsNoEmptyInterface>
  /**
   * Test files should contain at least one test case
   * @see https://sonarsource.github.io/rspec/#/rspec/S2187/javascript
   */
  'sonarjs/no-empty-test-file'?: Linter.RuleEntry<[]>
  /**
   * Equality operators should not be used in "for" loop termination conditions
   * @see https://sonarsource.github.io/rspec/#/rspec/S888/javascript
   */
  'sonarjs/no-equals-in-for-termination'?: Linter.RuleEntry<[]>
  /**
   * Exclusive tests should not be commited to version control
   * @see https://sonarsource.github.io/rspec/#/rspec/S6426/javascript
   */
  'sonarjs/no-exclusive-tests'?: Linter.RuleEntry<[]>
  /**
   * Prototypes of builtin objects should not be modified
   * @see https://sonarsource.github.io/rspec/#/rspec/S6643/javascript
   */
  'sonarjs/no-extend-native'?: Linter.RuleEntry<SonarjsNoExtendNative>
  /**
   * Function calls should not pass extra arguments
   * @see https://sonarsource.github.io/rspec/#/rspec/S930/javascript
   */
  'sonarjs/no-extra-arguments'?: Linter.RuleEntry<SonarjsNoExtraArguments>
  /**
   * Extra semicolons should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1116/javascript
   * @deprecated
   */
  'sonarjs/no-extra-semi'?: Linter.RuleEntry<[]>
  /**
   * React's "findDOMNode" should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S6788/javascript
   */
  'sonarjs/no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * "for in" should not be used with iterables
   * @see https://sonarsource.github.io/rspec/#/rspec/S4139/javascript
   */
  'sonarjs/no-for-in-iterable'?: Linter.RuleEntry<[]>
  /**
   * Function declarations should not be made within blocks
   * @see https://sonarsource.github.io/rspec/#/rspec/S1530/javascript
   */
  'sonarjs/no-function-declaration-in-block'?: Linter.RuleEntry<[]>
  /**
   * The global "this" object should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2990/javascript
   */
  'sonarjs/no-global-this'?: Linter.RuleEntry<[]>
  /**
   * Special identifiers should not be bound or assigned
   * @see https://sonarsource.github.io/rspec/#/rspec/S2137/javascript
   */
  'sonarjs/no-globals-shadowing'?: Linter.RuleEntry<[]>
  /**
   * Boolean expressions should not be gratuitous
   * @see https://sonarsource.github.io/rspec/#/rspec/S2589/javascript
   */
  'sonarjs/no-gratuitous-expressions'?: Linter.RuleEntry<SonarjsNoGratuitousExpressions>
  /**
   * Hard-coded credentials are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2068/javascript
   */
  'sonarjs/no-hardcoded-credentials'?: Linter.RuleEntry<SonarjsNoHardcodedCredentials>
  /**
   * Using hardcoded IP addresses is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S1313/javascript
   */
  'sonarjs/no-hardcoded-ip'?: Linter.RuleEntry<[]>
  /**
   * React's useState hook should not be used directly in the render function or body of a component
   * @see https://sonarsource.github.io/rspec/#/rspec/S6442/javascript
   */
  'sonarjs/no-hook-setter-in-body'?: Linter.RuleEntry<[]>
  /**
   * "if/else if" chains and "switch" cases should not have the same condition
   * @see https://sonarsource.github.io/rspec/#/rspec/S1862/javascript
   */
  'sonarjs/no-identical-conditions'?: Linter.RuleEntry<SonarjsNoIdenticalConditions>
  /**
   * Identical expressions should not be used on both sides of a binary operator
   * @see https://sonarsource.github.io/rspec/#/rspec/S1764/javascript
   */
  'sonarjs/no-identical-expressions'?: Linter.RuleEntry<SonarjsNoIdenticalExpressions>
  /**
   * Functions should not have identical implementations
   * @see https://sonarsource.github.io/rspec/#/rspec/S4144/javascript
   */
  'sonarjs/no-identical-functions'?: Linter.RuleEntry<SonarjsNoIdenticalFunctions>
  /**
   * Exceptions should not be ignored
   * @see https://sonarsource.github.io/rspec/#/rspec/S2486/javascript
   */
  'sonarjs/no-ignored-exceptions'?: Linter.RuleEntry<[]>
  /**
   * Return values from functions without side effects should not be ignored
   * @see https://sonarsource.github.io/rspec/#/rspec/S2201/javascript
   */
  'sonarjs/no-ignored-return'?: Linter.RuleEntry<[]>
  /**
   * Dependencies should be explicit
   * @see https://sonarsource.github.io/rspec/#/rspec/S4328/javascript
   */
  'sonarjs/no-implicit-dependencies'?: Linter.RuleEntry<SonarjsNoImplicitDependencies>
  /**
   * Variables should be declared explicitly
   * @see https://sonarsource.github.io/rspec/#/rspec/S2703/javascript
   */
  'sonarjs/no-implicit-global'?: Linter.RuleEntry<[]>
  /**
   * "in" should not be used on arrays
   * @see https://sonarsource.github.io/rspec/#/rspec/S4619/javascript
   */
  'sonarjs/no-in-misuse'?: Linter.RuleEntry<[]>
  /**
   * Assertions should be complete
   * @see https://sonarsource.github.io/rspec/#/rspec/S2970/javascript
   */
  'sonarjs/no-incomplete-assertions'?: Linter.RuleEntry<[]>
  /**
   * Functions should use "return" consistently
   * @see https://sonarsource.github.io/rspec/#/rspec/S3801/javascript
   */
  'sonarjs/no-inconsistent-returns'?: Linter.RuleEntry<SonarjsNoInconsistentReturns>
  /**
   * Strings and non-strings should not be added
   * @see https://sonarsource.github.io/rspec/#/rspec/S3402/javascript
   */
  'sonarjs/no-incorrect-string-concat'?: Linter.RuleEntry<SonarjsNoIncorrectStringConcat>
  /**
   * Loops should not be infinite
   * @see https://sonarsource.github.io/rspec/#/rspec/S2189/javascript
   */
  'sonarjs/no-infinite-loop'?: Linter.RuleEntry<[]>
  /**
   * Users should not use internal APIs
   * @see https://sonarsource.github.io/rspec/#/rspec/S6627/javascript
   */
  'sonarjs/no-internal-api-use'?: Linter.RuleEntry<[]>
  /**
   * Using intrusive permissions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5604/javascript
   */
  'sonarjs/no-intrusive-permissions'?: Linter.RuleEntry<SonarjsNoIntrusivePermissions>
  /**
   * "await" should only be used with promises
   * @see https://sonarsource.github.io/rspec/#/rspec/S4123/javascript
   */
  'sonarjs/no-invalid-await'?: Linter.RuleEntry<[]>
  /**
   * Function returns should not be invariant
   * @see https://sonarsource.github.io/rspec/#/rspec/S3516/javascript
   */
  'sonarjs/no-invariant-returns'?: Linter.RuleEntry<SonarjsNoInvariantReturns>
  /**
   * Boolean checks should not be inverted
   * @see https://sonarsource.github.io/rspec/#/rspec/S1940/javascript
   */
  'sonarjs/no-inverted-boolean-check'?: Linter.RuleEntry<[]>
  /**
   * Forwarding client IP address is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5759/javascript
   */
  'sonarjs/no-ip-forward'?: Linter.RuleEntry<SonarjsNoIpForward>
  /**
   * Labels should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1119/javascript
   */
  'sonarjs/no-labels'?: Linter.RuleEntry<[]>
  /**
   * Literals should not be used as functions
   * @see https://sonarsource.github.io/rspec/#/rspec/S6958/javascript
   */
  'sonarjs/no-literal-call'?: Linter.RuleEntry<[]>
  /**
   * If statements should not be the only statement in else blocks
   * @see https://sonarsource.github.io/rspec/#/rspec/S6660/javascript
   */
  'sonarjs/no-lonely-if'?: Linter.RuleEntry<[]>
  /**
   * Allowing browsers to sniff MIME types is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5734/javascript
   */
  'sonarjs/no-mime-sniff'?: Linter.RuleEntry<SonarjsNoMimeSniff>
  /**
   * Array-mutating methods should not be used misleadingly
   * @see https://sonarsource.github.io/rspec/#/rspec/S4043/javascript
   */
  'sonarjs/no-misleading-array-reverse'?: Linter.RuleEntry<[]>
  /**
   * Promises should not be misused
   * @see https://sonarsource.github.io/rspec/#/rspec/S6544/javascript
   */
  'sonarjs/no-misused-promises'?: Linter.RuleEntry<SonarjsNoMisusedPromises>
  /**
   * Allowing mixed-content is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5730/javascript
   */
  'sonarjs/no-mixed-content'?: Linter.RuleEntry<SonarjsNoMixedContent>
  /**
   * Assignments should not be made from within sub-expressions
   * @see https://sonarsource.github.io/rspec/#/rspec/S1121/javascript
   */
  'sonarjs/no-nested-assignment'?: Linter.RuleEntry<[]>
  /**
   * Ternary operators should not be nested
   * @see https://sonarsource.github.io/rspec/#/rspec/S3358/javascript
   */
  'sonarjs/no-nested-conditional'?: Linter.RuleEntry<[]>
  /**
   * Functions should not be nested too deeply
   * @see https://sonarsource.github.io/rspec/#/rspec/S2004/javascript
   */
  'sonarjs/no-nested-functions'?: Linter.RuleEntry<SonarjsNoNestedFunctions>
  /**
   * Increment (++) and decrement (--) operators should not be used in a method call or mixed with other operators in an expression
   * @see https://sonarsource.github.io/rspec/#/rspec/S881/javascript
   */
  'sonarjs/no-nested-incdec'?: Linter.RuleEntry<[]>
  /**
   * "switch" statements should not be nested
   * @see https://sonarsource.github.io/rspec/#/rspec/S1821/javascript
   */
  'sonarjs/no-nested-switch'?: Linter.RuleEntry<[]>
  /**
   * Template literals should not be nested
   * @see https://sonarsource.github.io/rspec/#/rspec/S4624/javascript
   */
  'sonarjs/no-nested-template-literals'?: Linter.RuleEntry<[]>
  /**
   * Loops with at most one iteration should be refactored
   * @see https://sonarsource.github.io/rspec/#/rspec/S1751/javascript
   */
  'sonarjs/no-one-iteration-loop'?: Linter.RuleEntry<[]>
  /**
   * Searching OS commands in PATH is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4036/javascript
   */
  'sonarjs/no-os-command-from-path'?: Linter.RuleEntry<[]>
  /**
   * Initial values of parameters, caught exceptions, and loop variables should not be ignored
   * @see https://sonarsource.github.io/rspec/#/rspec/S1226/javascript
   */
  'sonarjs/no-parameter-reassignment'?: Linter.RuleEntry<[]>
  /**
   * Wrapper objects should not be used for primitive types
   * @see https://sonarsource.github.io/rspec/#/rspec/S1533/javascript
   */
  'sonarjs/no-primitive-wrappers'?: Linter.RuleEntry<[]>
  /**
   * Variables and functions should not be redeclared
   * @see https://sonarsource.github.io/rspec/#/rspec/S2814/javascript
   */
  'sonarjs/no-redeclare'?: Linter.RuleEntry<SonarjsNoRedeclare>
  /**
   * Assignments should not be redundant
   * @see https://sonarsource.github.io/rspec/#/rspec/S4165/javascript
   */
  'sonarjs/no-redundant-assignments'?: Linter.RuleEntry<[]>
  /**
   * Boolean literals should not be used in comparisons
   * @see https://sonarsource.github.io/rspec/#/rspec/S1125/javascript
   */
  'sonarjs/no-redundant-boolean'?: Linter.RuleEntry<[]>
  /**
   * Jump statements should not be redundant
   * @see https://sonarsource.github.io/rspec/#/rspec/S3626/javascript
   */
  'sonarjs/no-redundant-jump'?: Linter.RuleEntry<[]>
  /**
   * Optional property declarations should not use both '?' and 'undefined' syntax
   * @see https://sonarsource.github.io/rspec/#/rspec/S4782/javascript
   */
  'sonarjs/no-redundant-optional'?: Linter.RuleEntry<SonarjsNoRedundantOptional>
  /**
   * Redundant pairs of parentheses should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1110/javascript
   * @deprecated
   */
  'sonarjs/no-redundant-parentheses'?: Linter.RuleEntry<SonarjsNoRedundantParentheses>
  /**
   * Type constituents of unions and intersections should not be redundant
   * @see https://sonarsource.github.io/rspec/#/rspec/S6571/javascript
   */
  'sonarjs/no-redundant-type-constituents'?: Linter.RuleEntry<[]>
  /**
   * Variables should be defined before being used
   * @see https://sonarsource.github.io/rspec/#/rspec/S3827/javascript
   */
  'sonarjs/no-reference-error'?: Linter.RuleEntry<SonarjsNoReferenceError>
  /**
   * Disabling strict HTTP no-referrer policy is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5736/javascript
   */
  'sonarjs/no-referrer-policy'?: Linter.RuleEntry<SonarjsNoReferrerPolicy>
  /**
   * "import" should be used to include external code
   * @see https://sonarsource.github.io/rspec/#/rspec/S3533/javascript
   */
  'sonarjs/no-require-or-define'?: Linter.RuleEntry<[]>
  /**
   * Primitive return types should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4324/javascript
   */
  'sonarjs/no-return-type-any'?: Linter.RuleEntry<[]>
  /**
   * Assertions should not be given twice the same argument
   * @see https://sonarsource.github.io/rspec/#/rspec/S5863/javascript
   */
  'sonarjs/no-same-argument-assert'?: Linter.RuleEntry<SonarjsNoSameArgumentAssert>
  /**
   * Conditionals should start on new lines
   * @see https://sonarsource.github.io/rspec/#/rspec/S3972/javascript
   */
  'sonarjs/no-same-line-conditional'?: Linter.RuleEntry<SonarjsNoSameLineConditional>
  /**
   * Methods should not contain selector parameters
   * @see https://sonarsource.github.io/rspec/#/rspec/S2301/javascript
   */
  'sonarjs/no-selector-parameter'?: Linter.RuleEntry<SonarjsNoSelectorParameter>
  /**
   * "Number.isNaN()" should be used to check for "NaN" value
   * @see https://sonarsource.github.io/rspec/#/rspec/S6679/javascript
   */
  'sonarjs/no-self-compare'?: Linter.RuleEntry<[]>
  /**
   * Module should not import itself
   * @see https://sonarsource.github.io/rspec/#/rspec/S7060/javascript
   */
  'sonarjs/no-self-import'?: Linter.RuleEntry<[]>
  /**
   * Tests should not be skipped without providing a reason
   * @see https://sonarsource.github.io/rspec/#/rspec/S1607/javascript
   */
  'sonarjs/no-skipped-test'?: Linter.RuleEntry<[]>
  /**
   * "if" statements should be preferred over "switch" when simpler
   * @see https://sonarsource.github.io/rspec/#/rspec/S1301/javascript
   */
  'sonarjs/no-small-switch'?: Linter.RuleEntry<[]>
  /**
   * Tabulation characters should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S105/javascript
   * @deprecated
   */
  'sonarjs/no-tab'?: Linter.RuleEntry<[]>
  /**
   * HTML "<table>" should not be used for layout purposes
   * @see https://sonarsource.github.io/rspec/#/rspec/S5257/javascript
   */
  'sonarjs/no-table-as-layout'?: Linter.RuleEntry<[]>
  /**
   * "this" should not be assigned to variables
   * @see https://sonarsource.github.io/rspec/#/rspec/S4327/javascript
   */
  'sonarjs/no-this-alias'?: Linter.RuleEntry<SonarjsNoThisAlias>
  /**
   * Literals should not be thrown
   * @see https://sonarsource.github.io/rspec/#/rspec/S3696/javascript
   */
  'sonarjs/no-throw-literal'?: Linter.RuleEntry<[]>
  /**
   * Promise rejections should not be caught by "try" blocks
   * @see https://sonarsource.github.io/rspec/#/rspec/S4822/javascript
   */
  'sonarjs/no-try-promise'?: Linter.RuleEntry<SonarjsNoTryPromise>
  /**
   * "undefined" should not be passed as the value of optional parameters
   * @see https://sonarsource.github.io/rspec/#/rspec/S4623/javascript
   */
  'sonarjs/no-undefined-argument'?: Linter.RuleEntry<[]>
  /**
   * "undefined" should not be assigned
   * @see https://sonarsource.github.io/rspec/#/rspec/S2138/javascript
   */
  'sonarjs/no-undefined-assignment'?: Linter.RuleEntry<[]>
  /**
   * Multiline blocks should be enclosed in curly braces
   * @see https://sonarsource.github.io/rspec/#/rspec/S2681/javascript
   */
  'sonarjs/no-unenclosed-multiline-block'?: Linter.RuleEntry<[]>
  /**
   * JSX list components keys should match up between renders
   * @see https://sonarsource.github.io/rspec/#/rspec/S6486/javascript
   */
  'sonarjs/no-uniq-key'?: Linter.RuleEntry<[]>
  /**
   * JSX elements should not use unknown properties and attributes
   * @see https://sonarsource.github.io/rspec/#/rspec/S6747/javascript
   */
  'sonarjs/no-unknown-property'?: Linter.RuleEntry<SonarjsNoUnknownProperty>
  /**
   * All code should be reachable
   * @see https://sonarsource.github.io/rspec/#/rspec/S1763/javascript
   */
  'sonarjs/no-unreachable'?: Linter.RuleEntry<[]>
  /**
   * React legacy lifecycle methods should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S6791/javascript
   */
  'sonarjs/no-unsafe'?: Linter.RuleEntry<SonarjsNoUnsafe>
  /**
   * Expanding archive files without controlling resource consumption is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5042/javascript
   */
  'sonarjs/no-unsafe-unzip'?: Linter.RuleEntry<[]>
  /**
   * React components should not be nested
   * @see https://sonarsource.github.io/rspec/#/rspec/S6478/javascript
   */
  'sonarjs/no-unstable-nested-components'?: Linter.RuleEntry<SonarjsNoUnstableNestedComponents>
  /**
   * Errors should not be created without being thrown
   * @see https://sonarsource.github.io/rspec/#/rspec/S3984/javascript
   */
  'sonarjs/no-unthrown-error'?: Linter.RuleEntry<[]>
  /**
   * Collection contents should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4030/javascript
   */
  'sonarjs/no-unused-collection'?: Linter.RuleEntry<[]>
  /**
   * Non-empty statements should change control flow or have at least one side-effect
   * @see https://sonarsource.github.io/rspec/#/rspec/S905/javascript
   */
  'sonarjs/no-unused-expressions'?: Linter.RuleEntry<SonarjsNoUnusedExpressions>
  /**
   * Unused function parameters should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1172/javascript
   */
  'sonarjs/no-unused-function-argument'?: Linter.RuleEntry<[]>
  /**
   * Unused private class members should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1068/javascript
   */
  'sonarjs/no-unused-private-class-members'?: Linter.RuleEntry<[]>
  /**
   * The return value of void functions should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S3699/javascript
   */
  'sonarjs/no-use-of-empty-return-value'?: Linter.RuleEntry<[]>
  /**
   * Calls to ".call()" and ".apply()" methods should not be redundant
   * @see https://sonarsource.github.io/rspec/#/rspec/S6676/javascript
   */
  'sonarjs/no-useless-call'?: Linter.RuleEntry<[]>
  /**
   * "catch" clauses should do more than rethrow
   * @see https://sonarsource.github.io/rspec/#/rspec/S2737/javascript
   */
  'sonarjs/no-useless-catch'?: Linter.RuleEntry<[]>
  /**
   * Unnecessary constructors should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S6647/javascript
   */
  'sonarjs/no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Values should not be uselessly incremented
   * @see https://sonarsource.github.io/rspec/#/rspec/S2123/javascript
   */
  'sonarjs/no-useless-increment'?: Linter.RuleEntry<[]>
  /**
   * Type intersections should use meaningful types
   * @see https://sonarsource.github.io/rspec/#/rspec/S4335/javascript
   */
  'sonarjs/no-useless-intersection'?: Linter.RuleEntry<[]>
  /**
   * React state setter function should not be called with its matching state variable
   * @see https://sonarsource.github.io/rspec/#/rspec/S6443/javascript
   */
  'sonarjs/no-useless-react-setstate'?: Linter.RuleEntry<[]>
  /**
   * Variables should be declared with "let" or "const"
   * @see https://sonarsource.github.io/rspec/#/rspec/S3504/javascript
   */
  'sonarjs/no-var'?: Linter.RuleEntry<[]>
  /**
   * Variables declared with "var" should be declared before they are used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1526/javascript
   */
  'sonarjs/no-variable-usage-before-declaration'?: Linter.RuleEntry<SonarjsNoVariableUsageBeforeDeclaration>
  /**
   * Disabling Vue.js built-in escaping is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6299/javascript
   */
  'sonarjs/no-vue-bypass-sanitization'?: Linter.RuleEntry<[]>
  /**
   * Cipher algorithms should be robust
   * @see https://sonarsource.github.io/rspec/#/rspec/S5547/javascript
   */
  'sonarjs/no-weak-cipher'?: Linter.RuleEntry<[]>
  /**
   * Cryptographic keys should be robust
   * @see https://sonarsource.github.io/rspec/#/rspec/S4426/javascript
   */
  'sonarjs/no-weak-keys'?: Linter.RuleEntry<[]>
  /**
   * Wildcard imports should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2208/javascript
   */
  'sonarjs/no-wildcard-import'?: Linter.RuleEntry<[]>
  /**
   * Non-existent operators '=+', '=-' and '=!' should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2757/javascript
   */
  'sonarjs/non-existent-operator'?: Linter.RuleEntry<[]>
  /**
   * Arithmetic operators should only have numbers as operands
   * @see https://sonarsource.github.io/rspec/#/rspec/S3760/javascript
   */
  'sonarjs/non-number-in-arithmetic-expression'?: Linter.RuleEntry<SonarjsNonNumberInArithmeticExpression>
  /**
   * Properties of variables with "null" or "undefined" values should not be accessed
   * @see https://sonarsource.github.io/rspec/#/rspec/S2259/javascript
   */
  'sonarjs/null-dereference'?: Linter.RuleEntry<[]>
  /**
   * "<object>" tags should provide an alternative content
   * @see https://sonarsource.github.io/rspec/#/rspec/S5264/javascript
   */
  'sonarjs/object-alt-content'?: Linter.RuleEntry<[]>
  /**
   * Object literal shorthand syntax should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S3498/javascript
   */
  'sonarjs/object-shorthand'?: Linter.RuleEntry<SonarjsObjectShorthand>
  /**
   * Arithmetic operations should not result in "NaN"
   * @see https://sonarsource.github.io/rspec/#/rspec/S3757/javascript
   */
  'sonarjs/operation-returning-nan'?: Linter.RuleEntry<[]>
  /**
   * Using shell interpreter when executing OS commands is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4721/javascript
   */
  'sonarjs/os-command'?: Linter.RuleEntry<[]>
  /**
   * Origins should be verified during cross-origin communications
   * @see https://sonarsource.github.io/rspec/#/rspec/S2819/javascript
   */
  'sonarjs/post-message'?: Linter.RuleEntry<[]>
  /**
   * "default" clauses should be last
   * @see https://sonarsource.github.io/rspec/#/rspec/S4524/javascript
   */
  'sonarjs/prefer-default-last'?: Linter.RuleEntry<[]>
  /**
   * Enum member values should be either all initialized or none
   * @see https://sonarsource.github.io/rspec/#/rspec/S6572/javascript
   */
  'sonarjs/prefer-enum-initializers'?: Linter.RuleEntry<[]>
  /**
   * "for of" should be used with Iterables
   * @see https://sonarsource.github.io/rspec/#/rspec/S4138/javascript
   */
  'sonarjs/prefer-for-of'?: Linter.RuleEntry<[]>
  /**
   * Function types should be preferred
   * @see https://sonarsource.github.io/rspec/#/rspec/S6598/javascript
   */
  'sonarjs/prefer-function-type'?: Linter.RuleEntry<[]>
  /**
   * Local variables should not be declared and then immediately returned or thrown
   * @see https://sonarsource.github.io/rspec/#/rspec/S1488/javascript
   */
  'sonarjs/prefer-immediate-return'?: Linter.RuleEntry<[]>
  /**
   * "module" should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4156/javascript
   */
  'sonarjs/prefer-namespace-keyword'?: Linter.RuleEntry<[]>
  /**
   * Nullish coalescing should be preferred
   * @see https://sonarsource.github.io/rspec/#/rspec/S6606/javascript
   */
  'sonarjs/prefer-nullish-coalescing'?: Linter.RuleEntry<SonarjsPreferNullishCoalescing>
  /**
   * Object literal syntax should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2428/javascript
   */
  'sonarjs/prefer-object-literal'?: Linter.RuleEntry<[]>
  /**
   * Object spread syntax should be used instead of "Object.assign"
   * @see https://sonarsource.github.io/rspec/#/rspec/S6661/javascript
   */
  'sonarjs/prefer-object-spread'?: Linter.RuleEntry<[]>
  /**
   * Shorthand promises should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4634/javascript
   */
  'sonarjs/prefer-promise-shorthand'?: Linter.RuleEntry<[]>
  /**
   * Return of boolean expressions should not be wrapped into an "if-then-else" statement
   * @see https://sonarsource.github.io/rspec/#/rspec/S1126/javascript
   */
  'sonarjs/prefer-single-boolean-return'?: Linter.RuleEntry<[]>
  /**
   * Spread syntax should be used instead of "apply()"
   * @see https://sonarsource.github.io/rspec/#/rspec/S6666/javascript
   */
  'sonarjs/prefer-spread'?: Linter.RuleEntry<[]>
  /**
   * Ends of strings should be checked with "startsWith()" and "endsWith()"
   * @see https://sonarsource.github.io/rspec/#/rspec/S6557/javascript
   */
  'sonarjs/prefer-string-starts-ends-with'?: Linter.RuleEntry<SonarjsPreferStringStartsEndsWith>
  /**
   * Template strings should be used instead of concatenation
   * @see https://sonarsource.github.io/rspec/#/rspec/S3512/javascript
   */
  'sonarjs/prefer-template'?: Linter.RuleEntry<[]>
  /**
   * Type predicates should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4322/javascript
   */
  'sonarjs/prefer-type-guard'?: Linter.RuleEntry<[]>
  /**
   * A "while" loop should be used instead of a "for" loop
   * @see https://sonarsource.github.io/rspec/#/rspec/S1264/javascript
   */
  'sonarjs/prefer-while'?: Linter.RuleEntry<[]>
  /**
   * Using command line arguments is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4823/javascript
   * @deprecated
   */
  'sonarjs/process-argv'?: Linter.RuleEntry<[]>
  /**
   * Delivering code in production with debug features activated is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4507/javascript
   */
  'sonarjs/production-debug'?: Linter.RuleEntry<[]>
  /**
   * Using pseudorandom number generators (PRNGs) is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2245/javascript
   */
  'sonarjs/pseudo-random'?: Linter.RuleEntry<[]>
  /**
   * Public "static" fields should be read-only
   * @see https://sonarsource.github.io/rspec/#/rspec/S1444/javascript
   */
  'sonarjs/public-static-readonly'?: Linter.RuleEntry<[]>
  /**
   * Using publicly writable directories is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5443/javascript
   */
  'sonarjs/publicly-writable-directories'?: Linter.RuleEntry<[]>
  /**
   * "Array.reduce()" calls should include an initial value
   * @see https://sonarsource.github.io/rspec/#/rspec/S6959/javascript
   */
  'sonarjs/reduce-initial-value'?: Linter.RuleEntry<[]>
  /**
   * Redundant type aliases should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S6564/javascript
   */
  'sonarjs/redundant-type-aliases'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions should not be too complicated
   * @see https://sonarsource.github.io/rspec/#/rspec/S5843/javascript
   */
  'sonarjs/regex-complexity'?: Linter.RuleEntry<SonarjsRegexComplexity>
  /**
   * Using regular expressions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4784/javascript
   * @deprecated
   */
  'sonarjs/regular-expr'?: Linter.RuleEntry<[]>
  /**
   * React Hooks should be properly called
   * @see https://sonarsource.github.io/rspec/#/rspec/S6440/javascript
   */
  'sonarjs/rules-of-hooks'?: Linter.RuleEntry<[]>
  /**
   * Statements should end with semicolons
   * @see https://sonarsource.github.io/rspec/#/rspec/S1438/javascript
   * @deprecated
   */
  'sonarjs/semi'?: Linter.RuleEntry<SonarjsSemi>
  /**
   * A new session should be created during user authentication
   * @see https://sonarsource.github.io/rspec/#/rspec/S5876/javascript
   */
  'sonarjs/session-regeneration'?: Linter.RuleEntry<[]>
  /**
   * Shorthand object properties should be grouped at the beginning or end of an object declaration
   * @see https://sonarsource.github.io/rspec/#/rspec/S3499/javascript
   */
  'sonarjs/shorthand-property-grouping'?: Linter.RuleEntry<SonarjsShorthandPropertyGrouping>
  /**
   * Character classes in regular expressions should not contain only one character
   * @see https://sonarsource.github.io/rspec/#/rspec/S6397/javascript
   */
  'sonarjs/single-char-in-character-classes'?: Linter.RuleEntry<[]>
  /**
   * Single-character alternations in regular expressions should be replaced with character classes
   * @see https://sonarsource.github.io/rspec/#/rspec/S6035/javascript
   */
  'sonarjs/single-character-alternation'?: Linter.RuleEntry<[]>
  /**
   * Using slow regular expressions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5852/javascript
   */
  'sonarjs/slow-regex'?: Linter.RuleEntry<[]>
  /**
   * Using Sockets is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4818/javascript
   * @deprecated
   */
  'sonarjs/sockets'?: Linter.RuleEntry<[]>
  /**
   * Variables should be used in the blocks where they are declared
   * @see https://sonarsource.github.io/rspec/#/rspec/S2392/javascript
   */
  'sonarjs/sonar-block-scoped-var'?: Linter.RuleEntry<SonarjsSonarBlockScopedVar>
  /**
   * React components should not render non-boolean condition values
   * @see https://sonarsource.github.io/rspec/#/rspec/S6439/javascript
   */
  'sonarjs/sonar-jsx-no-leaked-render'?: Linter.RuleEntry<[]>
  /**
   * Files should not have too many lines of code
   * @see https://sonarsource.github.io/rspec/#/rspec/S104/javascript
   */
  'sonarjs/sonar-max-lines'?: Linter.RuleEntry<SonarjsSonarMaxLines>
  /**
   * Functions should not have too many lines of code
   * @see https://sonarsource.github.io/rspec/#/rspec/S138/javascript
   */
  'sonarjs/sonar-max-lines-per-function'?: Linter.RuleEntry<SonarjsSonarMaxLinesPerFunction>
  /**
   * Functions should not have too many parameters
   * @see https://sonarsource.github.io/rspec/#/rspec/S107/javascript
   */
  'sonarjs/sonar-max-params'?: Linter.RuleEntry<SonarjsSonarMaxParams>
  /**
   * Regular expressions should not contain control characters
   * @see https://sonarsource.github.io/rspec/#/rspec/S6324/javascript
   */
  'sonarjs/sonar-no-control-regex'?: Linter.RuleEntry<[]>
  /**
   * Member names should not be duplicated within a class or object literal
   * @see https://sonarsource.github.io/rspec/#/rspec/S1534/javascript
   */
  'sonarjs/sonar-no-dupe-keys'?: Linter.RuleEntry<[]>
  /**
   * Empty character classes should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2639/javascript
   */
  'sonarjs/sonar-no-empty-character-class'?: Linter.RuleEntry<[]>
  /**
   * Switch cases should end with an unconditional "break" statement
   * @see https://sonarsource.github.io/rspec/#/rspec/S128/javascript
   */
  'sonarjs/sonar-no-fallthrough'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions should be syntactically valid
   * @see https://sonarsource.github.io/rspec/#/rspec/S5856/javascript
   */
  'sonarjs/sonar-no-invalid-regexp'?: Linter.RuleEntry<[]>
  /**
   * Magic numbers should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S109/javascript
   */
  'sonarjs/sonar-no-magic-numbers'?: Linter.RuleEntry<SonarjsSonarNoMagicNumbers>
  /**
   * Unicode Grapheme Clusters should be avoided inside regex character classes
   * @see https://sonarsource.github.io/rspec/#/rspec/S5868/javascript
   */
  'sonarjs/sonar-no-misleading-character-class'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions should not contain multiple spaces
   * @see https://sonarsource.github.io/rspec/#/rspec/S6326/javascript
   */
  'sonarjs/sonar-no-regex-spaces'?: Linter.RuleEntry<[]>
  /**
   * Unused methods of React components should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S6441/javascript
   */
  'sonarjs/sonar-no-unused-class-component-methods'?: Linter.RuleEntry<[]>
  /**
   * Unused local variables and functions should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1481/javascript
   */
  'sonarjs/sonar-no-unused-vars'?: Linter.RuleEntry<[]>
  /**
   * Optional chaining should be preferred
   * @see https://sonarsource.github.io/rspec/#/rspec/S6582/javascript
   */
  'sonarjs/sonar-prefer-optional-chain'?: Linter.RuleEntry<SonarjsSonarPreferOptionalChain>
  /**
   * React props should be read-only
   * @see https://sonarsource.github.io/rspec/#/rspec/S6759/javascript
   */
  'sonarjs/sonar-prefer-read-only-props'?: Linter.RuleEntry<[]>
  /**
   * "RegExp.exec()" should be preferred over "String.match()"
   * @see https://sonarsource.github.io/rspec/#/rspec/S6594/javascript
   */
  'sonarjs/sonar-prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * Formatting SQL queries is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2077/javascript
   */
  'sonarjs/sql-queries'?: Linter.RuleEntry<[]>
  /**
   * Tests should be stable
   * @see https://sonarsource.github.io/rspec/#/rspec/S5973/javascript
   */
  'sonarjs/stable-tests'?: Linter.RuleEntry<[]>
  /**
   * Reading the Standard Input is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4829/javascript
   * @deprecated
   */
  'sonarjs/standard-input'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions with the global flag should be used with caution
   * @see https://sonarsource.github.io/rspec/#/rspec/S6351/javascript
   */
  'sonarjs/stateful-regex'?: Linter.RuleEntry<SonarjsStatefulRegex>
  /**
   * Disabling Strict-Transport-Security policy is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5739/javascript
   */
  'sonarjs/strict-transport-security'?: Linter.RuleEntry<SonarjsStrictTransportSecurity>
  /**
   * Comparison operators should not be used with strings
   * @see https://sonarsource.github.io/rspec/#/rspec/S3003/javascript
   */
  'sonarjs/strings-comparison'?: Linter.RuleEntry<SonarjsStringsComparison>
  /**
   * "super()" should be invoked appropriately
   * @see https://sonarsource.github.io/rspec/#/rspec/S3854/javascript
   */
  'sonarjs/super-invocation'?: Linter.RuleEntry<[]>
  /**
   * "switch" statements should have "default" clauses
   * @see https://sonarsource.github.io/rspec/#/rspec/S131/javascript
   */
  'sonarjs/switch-without-default'?: Linter.RuleEntry<[]>
  /**
   * Tables should have headers
   * @see https://sonarsource.github.io/rspec/#/rspec/S5256/javascript
   */
  'sonarjs/table-header'?: Linter.RuleEntry<[]>
  /**
   * Table cells should reference their headers
   * @see https://sonarsource.github.io/rspec/#/rspec/S5260/javascript
   */
  'sonarjs/table-header-reference'?: Linter.RuleEntry<[]>
  /**
   * Tests should check which exception is thrown
   * @see https://sonarsource.github.io/rspec/#/rspec/S5958/javascript
   */
  'sonarjs/test-check-exception'?: Linter.RuleEntry<[]>
  /**
   * Track uses of "TODO" tags
   * @see https://sonarsource.github.io/rspec/#/rspec/S1135/javascript
   */
  'sonarjs/todo-tag'?: Linter.RuleEntry<[]>
  /**
   * Loops should not contain more than a single "break" or "continue" statement
   * @see https://sonarsource.github.io/rspec/#/rspec/S135/javascript
   */
  'sonarjs/too-many-break-or-continue-in-loop'?: Linter.RuleEntry<SonarjsTooManyBreakOrContinueInLoop>
  /**
   * Regular expressions using Unicode character classes or property escapes should enable the unicode flag
   * @see https://sonarsource.github.io/rspec/#/rspec/S5867/javascript
   */
  'sonarjs/unicode-aware-regex'?: Linter.RuleEntry<SonarjsUnicodeAwareRegex>
  /**
   * Unnecessary character escapes should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S6535/javascript
   */
  'sonarjs/unnecessary-character-escapes'?: Linter.RuleEntry<[]>
  /**
   * Unnecessary imports should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1128/javascript
   */
  'sonarjs/unused-import'?: Linter.RuleEntry<[]>
  /**
   * Names of regular expressions named groups should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S5860/javascript
   */
  'sonarjs/unused-named-groups'?: Linter.RuleEntry<SonarjsUnusedNamedGroups>
  /**
   * Server certificates should be verified during SSL/TLS connections
   * @see https://sonarsource.github.io/rspec/#/rspec/S4830/javascript
   */
  'sonarjs/unverified-certificate'?: Linter.RuleEntry<SonarjsUnverifiedCertificate>
  /**
   * Server hostnames should be verified during SSL/TLS connections
   * @see https://sonarsource.github.io/rspec/#/rspec/S5527/javascript
   */
  'sonarjs/unverified-hostname'?: Linter.RuleEntry<SonarjsUnverifiedHostname>
  /**
   * "const" variables should not be reassigned
   * @see https://sonarsource.github.io/rspec/#/rspec/S3500/javascript
   */
  'sonarjs/updated-const-var'?: Linter.RuleEntry<SonarjsUpdatedConstVar>
  /**
   * Loop counters should not be assigned within the loop body
   * @see https://sonarsource.github.io/rspec/#/rspec/S2310/javascript
   */
  'sonarjs/updated-loop-counter'?: Linter.RuleEntry<SonarjsUpdatedLoopCounter>
  /**
   * "NaN" should not be used in comparisons
   * @see https://sonarsource.github.io/rspec/#/rspec/S2688/javascript
   */
  'sonarjs/use-isnan'?: Linter.RuleEntry<SonarjsUseIsnan>
  /**
   * Type aliases should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4323/javascript
   */
  'sonarjs/use-type-alias'?: Linter.RuleEntry<SonarjsUseTypeAlias>
  /**
   * Results of operations on strings should not be ignored
   * @see https://sonarsource.github.io/rspec/#/rspec/S1154/javascript
   * @deprecated
   */
  'sonarjs/useless-string-operation'?: Linter.RuleEntry<[]>
  /**
   * Values not convertible to numbers should not be used in numeric comparisons
   * @see https://sonarsource.github.io/rspec/#/rspec/S3758/javascript
   */
  'sonarjs/values-not-convertible-to-numbers'?: Linter.RuleEntry<[]>
  /**
   * Variable, property and parameter names should comply with a naming convention
   * @see https://sonarsource.github.io/rspec/#/rspec/S117/javascript
   */
  'sonarjs/variable-name'?: Linter.RuleEntry<SonarjsVariableName>
  /**
   * "void" should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S3735/javascript
   */
  'sonarjs/void-use'?: Linter.RuleEntry<[]>
  /**
   * Weak SSL/TLS protocols should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4423/javascript
   */
  'sonarjs/weak-ssl'?: Linter.RuleEntry<[]>
  /**
   * Web SQL databases should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2817/javascript
   * @deprecated
   */
  'sonarjs/web-sql-database'?: Linter.RuleEntry<[]>
  /**
   * Disclosing fingerprints from web application technologies is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5689/javascript
   */
  'sonarjs/x-powered-by'?: Linter.RuleEntry<[]>
  /**
   * XML parsers should not be vulnerable to XXE attacks
   * @see https://sonarsource.github.io/rspec/#/rspec/S2755/javascript
   */
  'sonarjs/xml-parser-xxe'?: Linter.RuleEntry<SonarjsXmlParserXxe>
  /**
   * Executing XPath expressions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4817/javascript
   * @deprecated
   */
  'sonarjs/xpath'?: Linter.RuleEntry<[]>
  /**
   * Enforce sorted import declarations within modules
   * @see https://eslint.org/docs/latest/rules/sort-imports
   */
  'sort-imports'?: Linter.RuleEntry<SortImports>
  /**
   * Require object keys to be sorted
   * @see https://eslint.org/docs/latest/rules/sort-keys
   */
  'sort-keys'?: Linter.RuleEntry<SortKeys>
  /**
   * Require variables within the same declaration block to be sorted
   * @see https://eslint.org/docs/latest/rules/sort-vars
   */
  'sort-vars'?: Linter.RuleEntry<SortVars>
  /**
   * Enforce consistent spacing before blocks
   * @see https://eslint.org/docs/latest/rules/space-before-blocks
   * @deprecated
   */
  'space-before-blocks'?: Linter.RuleEntry<SpaceBeforeBlocks>
  /**
   * Enforce consistent spacing before `function` definition opening parenthesis
   * @see https://eslint.org/docs/latest/rules/space-before-function-paren
   * @deprecated
   */
  'space-before-function-paren'?: Linter.RuleEntry<SpaceBeforeFunctionParen>
  /**
   * Enforce consistent spacing inside parentheses
   * @see https://eslint.org/docs/latest/rules/space-in-parens
   * @deprecated
   */
  'space-in-parens'?: Linter.RuleEntry<SpaceInParens>
  /**
   * Require spacing around infix operators
   * @see https://eslint.org/docs/latest/rules/space-infix-ops
   * @deprecated
   */
  'space-infix-ops'?: Linter.RuleEntry<SpaceInfixOps>
  /**
   * Enforce consistent spacing before or after unary operators
   * @see https://eslint.org/docs/latest/rules/space-unary-ops
   * @deprecated
   */
  'space-unary-ops'?: Linter.RuleEntry<SpaceUnaryOps>
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   * @see https://eslint.org/docs/latest/rules/spaced-comment
   * @deprecated
   */
  'spaced-comment'?: Linter.RuleEntry<SpacedComment>
  /**
   * Require or disallow strict mode directives
   * @see https://eslint.org/docs/latest/rules/strict
   */
  'strict'?: Linter.RuleEntry<Strict>
  /**
   * Enforce spacing around colons of switch statements
   * @see https://eslint.org/docs/latest/rules/switch-colon-spacing
   * @deprecated
   */
  'switch-colon-spacing'?: Linter.RuleEntry<SwitchColonSpacing>
  /**
   * Require symbol descriptions
   * @see https://eslint.org/docs/latest/rules/symbol-description
   */
  'symbol-description'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around embedded expressions of template strings
   * @see https://eslint.org/docs/latest/rules/template-curly-spacing
   * @deprecated
   */
  'template-curly-spacing'?: Linter.RuleEntry<TemplateCurlySpacing>
  /**
   * Require or disallow spacing between template tags and their literals
   * @see https://eslint.org/docs/latest/rules/template-tag-spacing
   * @deprecated
   */
  'template-tag-spacing'?: Linter.RuleEntry<TemplateTagSpacing>
  /**
   * Require that function overload signatures be consecutive
   * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
   */
  'ts/adjacent-overload-signatures'?: Linter.RuleEntry<[]>
  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays
   * @see https://typescript-eslint.io/rules/array-type
   */
  'ts/array-type'?: Linter.RuleEntry<TsArrayType>
  /**
   * Disallow awaiting a value that is not a Thenable
   * @see https://typescript-eslint.io/rules/await-thenable
   */
  'ts/await-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives
   * @see https://typescript-eslint.io/rules/ban-ts-comment
   */
  'ts/ban-ts-comment'?: Linter.RuleEntry<TsBanTsComment>
  /**
   * Disallow `// tslint:<rule-flag>` comments
   * @see https://typescript-eslint.io/rules/ban-tslint-comment
   */
  'ts/ban-tslint-comment'?: Linter.RuleEntry<[]>
  /**
   * Enforce that literals on classes are exposed in a consistent style
   * @see https://typescript-eslint.io/rules/class-literal-property-style
   */
  'ts/class-literal-property-style'?: Linter.RuleEntry<TsClassLiteralPropertyStyle>
  /**
   * Enforce that class methods utilize `this`
   * @see https://typescript-eslint.io/rules/class-methods-use-this
   */
  'ts/class-methods-use-this'?: Linter.RuleEntry<TsClassMethodsUseThis>
  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
   * @see https://typescript-eslint.io/rules/consistent-generic-constructors
   */
  'ts/consistent-generic-constructors'?: Linter.RuleEntry<TsConsistentGenericConstructors>
  /**
   * Require or disallow the `Record` type
   * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
   */
  'ts/consistent-indexed-object-style'?: Linter.RuleEntry<TsConsistentIndexedObjectStyle>
  /**
   * Require `return` statements to either always or never specify values
   * @see https://typescript-eslint.io/rules/consistent-return
   */
  'ts/consistent-return'?: Linter.RuleEntry<TsConsistentReturn>
  /**
   * Enforce consistent usage of type assertions
   * @see https://typescript-eslint.io/rules/consistent-type-assertions
   */
  'ts/consistent-type-assertions'?: Linter.RuleEntry<TsConsistentTypeAssertions>
  /**
   * Enforce type definitions to consistently use either `interface` or `type`
   * @see https://typescript-eslint.io/rules/consistent-type-definitions
   */
  'ts/consistent-type-definitions'?: Linter.RuleEntry<TsConsistentTypeDefinitions>
  /**
   * Enforce consistent usage of type exports
   * @see https://typescript-eslint.io/rules/consistent-type-exports
   */
  'ts/consistent-type-exports'?: Linter.RuleEntry<TsConsistentTypeExports>
  /**
   * Enforce consistent usage of type imports
   * @see https://typescript-eslint.io/rules/consistent-type-imports
   */
  'ts/consistent-type-imports'?: Linter.RuleEntry<TsConsistentTypeImports>
  /**
   * Enforce default parameters to be last
   * @see https://typescript-eslint.io/rules/default-param-last
   */
  'ts/default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce dot notation whenever possible
   * @see https://typescript-eslint.io/rules/dot-notation
   */
  'ts/dot-notation'?: Linter.RuleEntry<TsDotNotation>
  /**
   * Require explicit return types on functions and class methods
   * @see https://typescript-eslint.io/rules/explicit-function-return-type
   */
  'ts/explicit-function-return-type'?: Linter.RuleEntry<TsExplicitFunctionReturnType>
  /**
   * Require explicit accessibility modifiers on class properties and methods
   * @see https://typescript-eslint.io/rules/explicit-member-accessibility
   */
  'ts/explicit-member-accessibility'?: Linter.RuleEntry<TsExplicitMemberAccessibility>
  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods
   * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
   */
  'ts/explicit-module-boundary-types'?: Linter.RuleEntry<TsExplicitModuleBoundaryTypes>
  /**
   * Require or disallow initialization in variable declarations
   * @see https://typescript-eslint.io/rules/init-declarations
   */
  'ts/init-declarations'?: Linter.RuleEntry<TsInitDeclarations>
  /**
   * Enforce a maximum number of parameters in function definitions
   * @see https://typescript-eslint.io/rules/max-params
   */
  'ts/max-params'?: Linter.RuleEntry<TsMaxParams>
  /**
   * Require a consistent member declaration order
   * @see https://typescript-eslint.io/rules/member-ordering
   */
  'ts/member-ordering'?: Linter.RuleEntry<TsMemberOrdering>
  /**
   * Enforce using a particular method signature syntax
   * @see https://typescript-eslint.io/rules/method-signature-style
   */
  'ts/method-signature-style'?: Linter.RuleEntry<TsMethodSignatureStyle>
  /**
   * Enforce naming conventions for everything across a codebase
   * @see https://typescript-eslint.io/rules/naming-convention
   */
  'ts/naming-convention'?: Linter.RuleEntry<TsNamingConvention>
  /**
   * Disallow generic `Array` constructors
   * @see https://typescript-eslint.io/rules/no-array-constructor
   */
  'ts/no-array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `delete` operator on array values
   * @see https://typescript-eslint.io/rules/no-array-delete
   */
  'ts/no-array-delete'?: Linter.RuleEntry<[]>
  /**
   * Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified
   * @see https://typescript-eslint.io/rules/no-base-to-string
   */
  'ts/no-base-to-string'?: Linter.RuleEntry<TsNoBaseToString>
  /**
   * Disallow non-null assertion in locations that may be confusing
   * @see https://typescript-eslint.io/rules/no-confusing-non-null-assertion
   */
  'ts/no-confusing-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require expressions of type void to appear in statement position
   * @see https://typescript-eslint.io/rules/no-confusing-void-expression
   */
  'ts/no-confusing-void-expression'?: Linter.RuleEntry<TsNoConfusingVoidExpression>
  /**
   * Disallow using code marked as `@deprecated`
   * @see https://typescript-eslint.io/rules/no-deprecated
   */
  'ts/no-deprecated'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate class members
   * @see https://typescript-eslint.io/rules/no-dupe-class-members
   */
  'ts/no-dupe-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate enum member values
   * @see https://typescript-eslint.io/rules/no-duplicate-enum-values
   */
  'ts/no-duplicate-enum-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate constituents of union or intersection types
   * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
   */
  'ts/no-duplicate-type-constituents'?: Linter.RuleEntry<TsNoDuplicateTypeConstituents>
  /**
   * Disallow using the `delete` operator on computed key expressions
   * @see https://typescript-eslint.io/rules/no-dynamic-delete
   */
  'ts/no-dynamic-delete'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty functions
   * @see https://typescript-eslint.io/rules/no-empty-function
   */
  'ts/no-empty-function'?: Linter.RuleEntry<TsNoEmptyFunction>
  /**
   * Disallow the declaration of empty interfaces
   * @see https://typescript-eslint.io/rules/no-empty-interface
   * @deprecated
   */
  'ts/no-empty-interface'?: Linter.RuleEntry<TsNoEmptyInterface>
  /**
   * Disallow accidentally using the "empty object" type
   * @see https://typescript-eslint.io/rules/no-empty-object-type
   */
  'ts/no-empty-object-type'?: Linter.RuleEntry<TsNoEmptyObjectType>
  /**
   * Disallow the `any` type
   * @see https://typescript-eslint.io/rules/no-explicit-any
   */
  'ts/no-explicit-any'?: Linter.RuleEntry<TsNoExplicitAny>
  /**
   * Disallow extra non-null assertions
   * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
   */
  'ts/no-extra-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes used as namespaces
   * @see https://typescript-eslint.io/rules/no-extraneous-class
   */
  'ts/no-extraneous-class'?: Linter.RuleEntry<TsNoExtraneousClass>
  /**
   * Require Promise-like statements to be handled appropriately
   * @see https://typescript-eslint.io/rules/no-floating-promises
   */
  'ts/no-floating-promises'?: Linter.RuleEntry<TsNoFloatingPromises>
  /**
   * Disallow iterating over an array with a for-in loop
   * @see https://typescript-eslint.io/rules/no-for-in-array
   */
  'ts/no-for-in-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `eval()`-like methods
   * @see https://typescript-eslint.io/rules/no-implied-eval
   */
  'ts/no-implied-eval'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
   * @see https://typescript-eslint.io/rules/no-import-type-side-effects
   */
  'ts/no-import-type-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
   * @see https://typescript-eslint.io/rules/no-inferrable-types
   */
  'ts/no-inferrable-types'?: Linter.RuleEntry<TsNoInferrableTypes>
  /**
   * Disallow `this` keywords outside of classes or class-like objects
   * @see https://typescript-eslint.io/rules/no-invalid-this
   */
  'ts/no-invalid-this'?: Linter.RuleEntry<TsNoInvalidThis>
  /**
   * Disallow `void` type outside of generic or return types
   * @see https://typescript-eslint.io/rules/no-invalid-void-type
   */
  'ts/no-invalid-void-type'?: Linter.RuleEntry<TsNoInvalidVoidType>
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   * @see https://typescript-eslint.io/rules/no-loop-func
   */
  'ts/no-loop-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow literal numbers that lose precision
   * @see https://typescript-eslint.io/rules/no-loss-of-precision
   * @deprecated
   */
  'ts/no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow magic numbers
   * @see https://typescript-eslint.io/rules/no-magic-numbers
   */
  'ts/no-magic-numbers'?: Linter.RuleEntry<TsNoMagicNumbers>
  /**
   * Disallow the `void` operator except when used to discard a value
   * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
   */
  'ts/no-meaningless-void-operator'?: Linter.RuleEntry<TsNoMeaninglessVoidOperator>
  /**
   * Enforce valid definition of `new` and `constructor`
   * @see https://typescript-eslint.io/rules/no-misused-new
   */
  'ts/no-misused-new'?: Linter.RuleEntry<[]>
  /**
   * Disallow Promises in places not designed to handle them
   * @see https://typescript-eslint.io/rules/no-misused-promises
   */
  'ts/no-misused-promises'?: Linter.RuleEntry<TsNoMisusedPromises>
  /**
   * Disallow enums from having both number and string members
   * @see https://typescript-eslint.io/rules/no-mixed-enums
   */
  'ts/no-mixed-enums'?: Linter.RuleEntry<[]>
  /**
   * Disallow TypeScript namespaces
   * @see https://typescript-eslint.io/rules/no-namespace
   */
  'ts/no-namespace'?: Linter.RuleEntry<TsNoNamespace>
  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
   */
  'ts/no-non-null-asserted-nullish-coalescing'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions after an optional chain expression
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
   */
  'ts/no-non-null-asserted-optional-chain'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions using the `!` postfix operator
   * @see https://typescript-eslint.io/rules/no-non-null-assertion
   */
  'ts/no-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable redeclaration
   * @see https://typescript-eslint.io/rules/no-redeclare
   */
  'ts/no-redeclare'?: Linter.RuleEntry<TsNoRedeclare>
  /**
   * Disallow members of unions and intersections that do nothing or override type information
   * @see https://typescript-eslint.io/rules/no-redundant-type-constituents
   */
  'ts/no-redundant-type-constituents'?: Linter.RuleEntry<[]>
  /**
   * Disallow invocation of `require()`
   * @see https://typescript-eslint.io/rules/no-require-imports
   */
  'ts/no-require-imports'?: Linter.RuleEntry<TsNoRequireImports>
  /**
   * Disallow specified modules when loaded by `import`
   * @see https://typescript-eslint.io/rules/no-restricted-imports
   */
  'ts/no-restricted-imports'?: Linter.RuleEntry<TsNoRestrictedImports>
  /**
   * Disallow certain types
   * @see https://typescript-eslint.io/rules/no-restricted-types
   */
  'ts/no-restricted-types'?: Linter.RuleEntry<TsNoRestrictedTypes>
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://typescript-eslint.io/rules/no-shadow
   */
  'ts/no-shadow'?: Linter.RuleEntry<TsNoShadow>
  /**
   * Disallow aliasing `this`
   * @see https://typescript-eslint.io/rules/no-this-alias
   */
  'ts/no-this-alias'?: Linter.RuleEntry<TsNoThisAlias>
  /**
   * Disallow type aliases
   * @see https://typescript-eslint.io/rules/no-type-alias
   * @deprecated
   */
  'ts/no-type-alias'?: Linter.RuleEntry<TsNoTypeAlias>
  /**
   * Disallow unnecessary equality comparisons against boolean literals
   * @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
   */
  'ts/no-unnecessary-boolean-literal-compare'?: Linter.RuleEntry<TsNoUnnecessaryBooleanLiteralCompare>
  /**
   * Disallow conditionals where the type is always truthy or always falsy
   * @see https://typescript-eslint.io/rules/no-unnecessary-condition
   */
  'ts/no-unnecessary-condition'?: Linter.RuleEntry<TsNoUnnecessaryCondition>
  /**
   * Disallow unnecessary assignment of constructor property parameter
   * @see https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
   */
  'ts/no-unnecessary-parameter-property-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary namespace qualifiers
   * @see https://typescript-eslint.io/rules/no-unnecessary-qualifier
   */
  'ts/no-unnecessary-qualifier'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary template expressions
   * @see https://typescript-eslint.io/rules/no-unnecessary-template-expression
   */
  'ts/no-unnecessary-template-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow type arguments that are equal to the default
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments
   */
  'ts/no-unnecessary-type-arguments'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that do not change the type of an expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
   */
  'ts/no-unnecessary-type-assertion'?: Linter.RuleEntry<TsNoUnnecessaryTypeAssertion>
  /**
   * Disallow unnecessary constraints on generic types
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
   */
  'ts/no-unnecessary-type-constraint'?: Linter.RuleEntry<[]>
  /**
   * Disallow type parameters that aren't used multiple times
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-parameters
   */
  'ts/no-unnecessary-type-parameters'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a function with a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-argument
   */
  'ts/no-unsafe-argument'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning a value with type `any` to variables and properties
   * @see https://typescript-eslint.io/rules/no-unsafe-assignment
   */
  'ts/no-unsafe-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-call
   */
  'ts/no-unsafe-call'?: Linter.RuleEntry<[]>
  /**
   * Disallow unsafe declaration merging
   * @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging
   */
  'ts/no-unsafe-declaration-merging'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing an enum value with a non-enum value
   * @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison
   */
  'ts/no-unsafe-enum-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the unsafe built-in Function type
   * @see https://typescript-eslint.io/rules/no-unsafe-function-type
   */
  'ts/no-unsafe-function-type'?: Linter.RuleEntry<[]>
  /**
   * Disallow member access on a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-member-access
   */
  'ts/no-unsafe-member-access'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning a value with type `any` from a function
   * @see https://typescript-eslint.io/rules/no-unsafe-return
   */
  'ts/no-unsafe-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that narrow a type
   * @see https://typescript-eslint.io/rules/no-unsafe-type-assertion
   */
  'ts/no-unsafe-type-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require unary negation to take a number
   * @see https://typescript-eslint.io/rules/no-unsafe-unary-minus
   */
  'ts/no-unsafe-unary-minus'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused expressions
   * @see https://typescript-eslint.io/rules/no-unused-expressions
   */
  'ts/no-unused-expressions'?: Linter.RuleEntry<TsNoUnusedExpressions>
  /**
   * Disallow unused variables
   * @see https://typescript-eslint.io/rules/no-unused-vars
   */
  'ts/no-unused-vars'?: Linter.RuleEntry<TsNoUnusedVars>
  /**
   * Disallow the use of variables before they are defined
   * @see https://typescript-eslint.io/rules/no-use-before-define
   */
  'ts/no-use-before-define'?: Linter.RuleEntry<TsNoUseBeforeDefine>
  /**
   * Disallow unnecessary constructors
   * @see https://typescript-eslint.io/rules/no-useless-constructor
   */
  'ts/no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty exports that don't change anything in a module file
   * @see https://typescript-eslint.io/rules/no-useless-empty-export
   */
  'ts/no-useless-empty-export'?: Linter.RuleEntry<[]>
  /**
   * Disallow `require` statements except in import statements
   * @see https://typescript-eslint.io/rules/no-var-requires
   * @deprecated
   */
  'ts/no-var-requires'?: Linter.RuleEntry<TsNoVarRequires>
  /**
   * Disallow using confusing built-in primitive class wrappers
   * @see https://typescript-eslint.io/rules/no-wrapper-object-types
   */
  'ts/no-wrapper-object-types'?: Linter.RuleEntry<[]>
  /**
   * Enforce non-null assertions over explicit type casts
   * @see https://typescript-eslint.io/rules/non-nullable-type-assertion-style
   */
  'ts/non-nullable-type-assertion-style'?: Linter.RuleEntry<[]>
  /**
   * Disallow throwing non-`Error` values as exceptions
   * @see https://typescript-eslint.io/rules/only-throw-error
   */
  'ts/only-throw-error'?: Linter.RuleEntry<TsOnlyThrowError>
  /**
   * Require or disallow parameter properties in class constructors
   * @see https://typescript-eslint.io/rules/parameter-properties
   */
  'ts/parameter-properties'?: Linter.RuleEntry<TsParameterProperties>
  /**
   * Enforce the use of `as const` over literal type
   * @see https://typescript-eslint.io/rules/prefer-as-const
   */
  'ts/prefer-as-const'?: Linter.RuleEntry<[]>
  /**
   * Require destructuring from arrays and/or objects
   * @see https://typescript-eslint.io/rules/prefer-destructuring
   */
  'ts/prefer-destructuring'?: Linter.RuleEntry<TsPreferDestructuring>
  /**
   * Require each enum member value to be explicitly initialized
   * @see https://typescript-eslint.io/rules/prefer-enum-initializers
   */
  'ts/prefer-enum-initializers'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
   * @see https://typescript-eslint.io/rules/prefer-find
   */
  'ts/prefer-find'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible
   * @see https://typescript-eslint.io/rules/prefer-for-of
   */
  'ts/prefer-for-of'?: Linter.RuleEntry<[]>
  /**
   * Enforce using function types instead of interfaces with call signatures
   * @see https://typescript-eslint.io/rules/prefer-function-type
   */
  'ts/prefer-function-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce `includes` method over `indexOf` method
   * @see https://typescript-eslint.io/rules/prefer-includes
   */
  'ts/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Require all enum members to be literal values
   * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
   */
  'ts/prefer-literal-enum-member'?: Linter.RuleEntry<TsPreferLiteralEnumMember>
  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
   * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
   */
  'ts/prefer-namespace-keyword'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining
   * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
   */
  'ts/prefer-nullish-coalescing'?: Linter.RuleEntry<TsPreferNullishCoalescing>
  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
   * @see https://typescript-eslint.io/rules/prefer-optional-chain
   */
  'ts/prefer-optional-chain'?: Linter.RuleEntry<TsPreferOptionalChain>
  /**
   * Require using Error objects as Promise rejection reasons
   * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors
   */
  'ts/prefer-promise-reject-errors'?: Linter.RuleEntry<TsPreferPromiseRejectErrors>
  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor
   * @see https://typescript-eslint.io/rules/prefer-readonly
   */
  'ts/prefer-readonly'?: Linter.RuleEntry<TsPreferReadonly>
  /**
   * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
   * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
   */
  'ts/prefer-readonly-parameter-types'?: Linter.RuleEntry<TsPreferReadonlyParameterTypes>
  /**
   * Enforce using type parameter when calling `Array#reduce` instead of casting
   * @see https://typescript-eslint.io/rules/prefer-reduce-type-parameter
   */
  'ts/prefer-reduce-type-parameter'?: Linter.RuleEntry<[]>
  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided
   * @see https://typescript-eslint.io/rules/prefer-regexp-exec
   */
  'ts/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * Enforce that `this` is used when only `this` type is returned
   * @see https://typescript-eslint.io/rules/prefer-return-this-type
   */
  'ts/prefer-return-this-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
   * @see https://typescript-eslint.io/rules/prefer-string-starts-ends-with
   */
  'ts/prefer-string-starts-ends-with'?: Linter.RuleEntry<TsPreferStringStartsEndsWith>
  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`
   * @see https://typescript-eslint.io/rules/prefer-ts-expect-error
   * @deprecated
   */
  'ts/prefer-ts-expect-error'?: Linter.RuleEntry<[]>
  /**
   * Require any function or method that returns a Promise to be marked async
   * @see https://typescript-eslint.io/rules/promise-function-async
   */
  'ts/promise-function-async'?: Linter.RuleEntry<TsPromiseFunctionAsync>
  /**
   * Enforce that `get()` types should be assignable to their equivalent `set()` type
   * @see https://typescript-eslint.io/rules/related-getter-setter-pairs
   */
  'ts/related-getter-setter-pairs'?: Linter.RuleEntry<[]>
  /**
   * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
   * @see https://typescript-eslint.io/rules/require-array-sort-compare
   */
  'ts/require-array-sort-compare'?: Linter.RuleEntry<TsRequireArraySortCompare>
  /**
   * Disallow async functions which do not return promises and have no `await` expression
   * @see https://typescript-eslint.io/rules/require-await
   */
  'ts/require-await'?: Linter.RuleEntry<[]>
  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
   * @see https://typescript-eslint.io/rules/restrict-plus-operands
   */
  'ts/restrict-plus-operands'?: Linter.RuleEntry<TsRestrictPlusOperands>
  /**
   * Enforce template literal expressions to be of `string` type
   * @see https://typescript-eslint.io/rules/restrict-template-expressions
   */
  'ts/restrict-template-expressions'?: Linter.RuleEntry<TsRestrictTemplateExpressions>
  /**
   * Enforce consistent awaiting of returned promises
   * @see https://typescript-eslint.io/rules/return-await
   */
  'ts/return-await'?: Linter.RuleEntry<TsReturnAwait>
  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically
   * @see https://typescript-eslint.io/rules/sort-type-constituents
   * @deprecated
   */
  'ts/sort-type-constituents'?: Linter.RuleEntry<TsSortTypeConstituents>
  /**
   * Disallow certain types in boolean expressions
   * @see https://typescript-eslint.io/rules/strict-boolean-expressions
   */
  'ts/strict-boolean-expressions'?: Linter.RuleEntry<TsStrictBooleanExpressions>
  /**
   * Require switch-case statements to be exhaustive
   * @see https://typescript-eslint.io/rules/switch-exhaustiveness-check
   */
  'ts/switch-exhaustiveness-check'?: Linter.RuleEntry<TsSwitchExhaustivenessCheck>
  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations
   * @see https://typescript-eslint.io/rules/triple-slash-reference
   */
  'ts/triple-slash-reference'?: Linter.RuleEntry<TsTripleSlashReference>
  /**
   * Require type annotations in certain places
   * @see https://typescript-eslint.io/rules/typedef
   */
  'ts/typedef'?: Linter.RuleEntry<TsTypedef>
  /**
   * Enforce unbound methods are called with their expected scope
   * @see https://typescript-eslint.io/rules/unbound-method
   */
  'ts/unbound-method'?: Linter.RuleEntry<TsUnboundMethod>
  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
   * @see https://typescript-eslint.io/rules/unified-signatures
   */
  'ts/unified-signatures'?: Linter.RuleEntry<TsUnifiedSignatures>
  /**
   * Enforce typing arguments in Promise rejection callbacks as `unknown`
   * @see https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
   */
  'ts/use-unknown-in-catch-callback-variable'?: Linter.RuleEntry<[]>
  /**
   * Enforce a consistent and logical order of the Tailwind CSS classnames
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/classnames-order.md
   */
  'tw/classnames-order'?: Linter.RuleEntry<TwClassnamesOrder>
  /**
   * Warns about dash prefixed classnames using arbitrary values
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/enforces-negative-arbitrary-values.md
   */
  'tw/enforces-negative-arbitrary-values'?: Linter.RuleEntry<TwEnforcesNegativeArbitraryValues>
  /**
   * Enforces the usage of shorthand Tailwind CSS classnames
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/enforces-shorthand.md
   */
  'tw/enforces-shorthand'?: Linter.RuleEntry<TwEnforcesShorthand>
  /**
   * Detect obsolete classnames when upgrading to Tailwind CSS v3
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/migration-from-tailwind-2.md
   */
  'tw/migration-from-tailwind-2'?: Linter.RuleEntry<TwMigrationFromTailwind2>
  /**
   * Forbid using arbitrary values in classnames
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-arbitrary-value.md
   */
  'tw/no-arbitrary-value'?: Linter.RuleEntry<TwNoArbitraryValue>
  /**
   * Avoid contradicting Tailwind CSS classnames (e.g. "w-3 w-5")
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-contradicting-classname.md
   */
  'tw/no-contradicting-classname'?: Linter.RuleEntry<TwNoContradictingClassname>
  /**
   * Detect classnames which do not belong to Tailwind CSS
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-custom-classname.md
   */
  'tw/no-custom-classname'?: Linter.RuleEntry<TwNoCustomClassname>
  /**
   * Forbid using arbitrary values in classnames when an equivalent preset exists
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-unnecessary-arbitrary-value.md
   */
  'tw/no-unnecessary-arbitrary-value'?: Linter.RuleEntry<TwNoUnnecessaryArbitraryValue>
  /**
   * Require or disallow Unicode byte order mark (BOM)
   * @see https://eslint.org/docs/latest/rules/unicode-bom
   */
  'unicode-bom'?: Linter.RuleEntry<UnicodeBom>
  /**
   * Improve regexes by making them shorter, consistent, and safer.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/better-regex.md
   */
  'unicorn/better-regex'?: Linter.RuleEntry<UnicornBetterRegex>
  /**
   * Enforce a specific parameter name in catch clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/catch-error-name.md
   */
  'unicorn/catch-error-name'?: Linter.RuleEntry<UnicornCatchErrorName>
  /**
   * Use destructured variables over properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/consistent-destructuring.md
   */
  'unicorn/consistent-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Prefer consistent types when spreading a ternary in an array literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/consistent-empty-array-spread.md
   */
  'unicorn/consistent-empty-array-spread'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/consistent-existence-index-check.md
   */
  'unicorn/consistent-existence-index-check'?: Linter.RuleEntry<[]>
  /**
   * Move function definitions to the highest possible scope.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/consistent-function-scoping.md
   */
  'unicorn/consistent-function-scoping'?: Linter.RuleEntry<UnicornConsistentFunctionScoping>
  /**
   * Enforce correct `Error` subclassing.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/custom-error-definition.md
   */
  'unicorn/custom-error-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforce no spaces between braces.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/empty-brace-spaces.md
   */
  'unicorn/empty-brace-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce passing a `message` value when creating a built-in error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/error-message.md
   */
  'unicorn/error-message'?: Linter.RuleEntry<[]>
  /**
   * Require escape sequences to use uppercase values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/escape-case.md
   */
  'unicorn/escape-case'?: Linter.RuleEntry<[]>
  /**
   * Add expiration conditions to TODO comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/expiring-todo-comments.md
   */
  'unicorn/expiring-todo-comments'?: Linter.RuleEntry<UnicornExpiringTodoComments>
  /**
   * Enforce explicitly comparing the `length` or `size` property of a value.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/explicit-length-check.md
   */
  'unicorn/explicit-length-check'?: Linter.RuleEntry<UnicornExplicitLengthCheck>
  /**
   * Enforce a case style for filenames.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/filename-case.md
   */
  'unicorn/filename-case'?: Linter.RuleEntry<UnicornFilenameCase>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#import-index
   * @deprecated
   */
  'unicorn/import-index'?: Linter.RuleEntry<[]>
  /**
   * Enforce specific import styles per module.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/import-style.md
   */
  'unicorn/import-style'?: Linter.RuleEntry<UnicornImportStyle>
  /**
   * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/new-for-builtins.md
   */
  'unicorn/new-for-builtins'?: Linter.RuleEntry<[]>
  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-abusive-eslint-disable.md
   */
  'unicorn/no-abusive-eslint-disable'?: Linter.RuleEntry<[]>
  /**
   * Disallow anonymous functions and classes as the default export.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-anonymous-default-export.md
   */
  'unicorn/no-anonymous-default-export'?: Linter.RuleEntry<[]>
  /**
   * Prevent passing a function reference directly to iterator methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-callback-reference.md
   */
  'unicorn/no-array-callback-reference'?: Linter.RuleEntry<[]>
  /**
   * Prefer `for…of` over the `forEach` method.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-for-each.md
   */
  'unicorn/no-array-for-each'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#no-array-instanceof
   * @deprecated
   */
  'unicorn/no-array-instanceof'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `this` argument in array methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-method-this-argument.md
   */
  'unicorn/no-array-method-this-argument'?: Linter.RuleEntry<[]>
  /**
   * Enforce combining multiple `Array#push()` into one call.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-push-push.md
   */
  'unicorn/no-array-push-push'?: Linter.RuleEntry<UnicornNoArrayPushPush>
  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-reduce.md
   */
  'unicorn/no-array-reduce'?: Linter.RuleEntry<UnicornNoArrayReduce>
  /**
   * Disallow member access from await expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-await-expression-member.md
   */
  'unicorn/no-await-expression-member'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `await` in `Promise` method parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-await-in-promise-methods.md
   */
  'unicorn/no-await-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Do not use leading/trailing space between `console.log` parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-console-spaces.md
   */
  'unicorn/no-console-spaces'?: Linter.RuleEntry<[]>
  /**
   * Do not use `document.cookie` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-document-cookie.md
   */
  'unicorn/no-document-cookie'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty files.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-empty-file.md
   */
  'unicorn/no-empty-file'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#no-fn-reference-in-iterator
   * @deprecated
   */
  'unicorn/no-fn-reference-in-iterator'?: Linter.RuleEntry<[]>
  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-for-loop.md
   */
  'unicorn/no-for-loop'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-hex-escape.md
   */
  'unicorn/no-hex-escape'?: Linter.RuleEntry<[]>
  /**
   * Require `Array.isArray()` instead of `instanceof Array`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-instanceof-array.md
   */
  'unicorn/no-instanceof-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid options in `fetch()` and `new Request()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-invalid-fetch-options.md
   */
  'unicorn/no-invalid-fetch-options'?: Linter.RuleEntry<[]>
  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-invalid-remove-event-listener.md
   */
  'unicorn/no-invalid-remove-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Disallow identifiers starting with `new` or `class`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-keyword-prefix.md
   */
  'unicorn/no-keyword-prefix'?: Linter.RuleEntry<UnicornNoKeywordPrefix>
  /**
   * Disallow using `.length` as the `end` argument of `{Array,String,TypedArray}#slice()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-length-as-slice-end.md
   */
  'unicorn/no-length-as-slice-end'?: Linter.RuleEntry<[]>
  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-lonely-if.md
   */
  'unicorn/no-lonely-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow a magic number as the `depth` argument in `Array#flat(…).`
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-magic-array-flat-depth.md
   */
  'unicorn/no-magic-array-flat-depth'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-negated-condition.md
   */
  'unicorn/no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated expression in equality check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-negation-in-equality-check.md
   */
  'unicorn/no-negation-in-equality-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested ternary expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-nested-ternary.md
   */
  'unicorn/no-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new Array()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-new-array.md
   */
  'unicorn/no-new-array'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-new-buffer.md
   */
  'unicorn/no-new-buffer'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of the `null` literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-null.md
   */
  'unicorn/no-null'?: Linter.RuleEntry<UnicornNoNull>
  /**
   * Disallow the use of objects as default parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-object-as-default-parameter.md
   */
  'unicorn/no-object-as-default-parameter'?: Linter.RuleEntry<[]>
  /**
   * Disallow `process.exit()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-process-exit.md
   */
  'unicorn/no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#no-reduce
   * @deprecated
   */
  'unicorn/no-reduce'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing single-element arrays to `Promise` methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-single-promise-in-promise-methods.md
   */
  'unicorn/no-single-promise-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes that only have static members.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-static-only-class.md
   */
  'unicorn/no-static-only-class'?: Linter.RuleEntry<[]>
  /**
   * Disallow `then` property.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-thenable.md
   */
  'unicorn/no-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning `this` to a variable.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-this-assignment.md
   */
  'unicorn/no-this-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing `undefined` using `typeof`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-typeof-undefined.md
   */
  'unicorn/no-typeof-undefined'?: Linter.RuleEntry<UnicornNoTypeofUndefined>
  /**
   * Disallow awaiting non-promise values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unnecessary-await.md
   */
  'unicorn/no-unnecessary-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of built-in methods instead of unnecessary polyfills.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unnecessary-polyfills.md
   */
  'unicorn/no-unnecessary-polyfills'?: Linter.RuleEntry<UnicornNoUnnecessaryPolyfills>
  /**
   * Disallow unreadable array destructuring.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unreadable-array-destructuring.md
   */
  'unicorn/no-unreadable-array-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable IIFEs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unreadable-iife.md
   */
  'unicorn/no-unreadable-iife'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#no-unsafe-regex
   * @deprecated
   */
  'unicorn/no-unsafe-regex'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused object properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unused-properties.md
   */
  'unicorn/no-unused-properties'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless fallback when spreading in object literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-fallback-in-spread.md
   */
  'unicorn/no-useless-fallback-in-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless array length check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-length-check.md
   */
  'unicorn/no-useless-length-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-promise-resolve-reject.md
   */
  'unicorn/no-useless-promise-resolve-reject'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary spread.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-spread.md
   */
  'unicorn/no-useless-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless case in switch statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-switch-case.md
   */
  'unicorn/no-useless-switch-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `undefined`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-undefined.md
   */
  'unicorn/no-useless-undefined'?: Linter.RuleEntry<UnicornNoUselessUndefined>
  /**
   * Disallow number literals with zero fractions or dangling dots.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-zero-fractions.md
   */
  'unicorn/no-zero-fractions'?: Linter.RuleEntry<[]>
  /**
   * Enforce proper case for numeric literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/number-literal-case.md
   */
  'unicorn/number-literal-case'?: Linter.RuleEntry<[]>
  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/numeric-separators-style.md
   */
  'unicorn/numeric-separators-style'?: Linter.RuleEntry<UnicornNumericSeparatorsStyle>
  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-add-event-listener.md
   */
  'unicorn/prefer-add-event-listener'?: Linter.RuleEntry<UnicornPreferAddEventListener>
  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-find.md
   */
  'unicorn/prefer-array-find'?: Linter.RuleEntry<UnicornPreferArrayFind>
  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-flat.md
   */
  'unicorn/prefer-array-flat'?: Linter.RuleEntry<UnicornPreferArrayFlat>
  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-flat-map.md
   */
  'unicorn/prefer-array-flat-map'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-index-of.md
   */
  'unicorn/prefer-array-index-of'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-some.md
   */
  'unicorn/prefer-array-some'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-at.md
   */
  'unicorn/prefer-at'?: Linter.RuleEntry<UnicornPreferAt>
  /**
   * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-blob-reading-methods.md
   */
  'unicorn/prefer-blob-reading-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-code-point.md
   */
  'unicorn/prefer-code-point'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-dataset
   * @deprecated
   */
  'unicorn/prefer-dataset'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-date-now.md
   */
  'unicorn/prefer-date-now'?: Linter.RuleEntry<[]>
  /**
   * Prefer default parameters over reassignment.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-default-parameters.md
   */
  'unicorn/prefer-default-parameters'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Node#append()` over `Node#appendChild()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-append.md
   */
  'unicorn/prefer-dom-node-append'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `.dataset` on DOM elements over calling attribute methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-dataset.md
   */
  'unicorn/prefer-dom-node-dataset'?: Linter.RuleEntry<[]>
  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-remove.md
   */
  'unicorn/prefer-dom-node-remove'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.textContent` over `.innerText`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-text-content.md
   */
  'unicorn/prefer-dom-node-text-content'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-event-key
   * @deprecated
   */
  'unicorn/prefer-event-key'?: Linter.RuleEntry<[]>
  /**
   * Prefer `EventTarget` over `EventEmitter`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-event-target.md
   */
  'unicorn/prefer-event-target'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-exponentiation-operator
   * @deprecated
   */
  'unicorn/prefer-exponentiation-operator'?: Linter.RuleEntry<[]>
  /**
   * Prefer `export…from` when re-exporting.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-export-from.md
   */
  'unicorn/prefer-export-from'?: Linter.RuleEntry<UnicornPreferExportFrom>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-flat-map
   * @deprecated
   */
  'unicorn/prefer-flat-map'?: Linter.RuleEntry<[]>
  /**
   * Prefer `globalThis` over `window`, `self`, and `global`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-global-this.md
   */
  'unicorn/prefer-global-this'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-includes.md
   */
  'unicorn/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Prefer reading a JSON file as a buffer.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-json-parse-buffer.md
   */
  'unicorn/prefer-json-parse-buffer'?: Linter.RuleEntry<[]>
  /**
   * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-keyboard-event-key.md
   */
  'unicorn/prefer-keyboard-event-key'?: Linter.RuleEntry<[]>
  /**
   * Prefer using a logical operator over a ternary.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-logical-operator-over-ternary.md
   */
  'unicorn/prefer-logical-operator-over-ternary'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-math-min-max.md
   */
  'unicorn/prefer-math-min-max'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Math.trunc` instead of bitwise operators.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-math-trunc.md
   */
  'unicorn/prefer-math-trunc'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-modern-dom-apis.md
   */
  'unicorn/prefer-modern-dom-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer modern `Math` APIs over legacy patterns.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-modern-math-apis.md
   */
  'unicorn/prefer-modern-math-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-module.md
   */
  'unicorn/prefer-module'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-native-coercion-functions.md
   */
  'unicorn/prefer-native-coercion-functions'?: Linter.RuleEntry<[]>
  /**
   * Prefer negative index over `.length - index` when possible.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-negative-index.md
   */
  'unicorn/prefer-negative-index'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-node-append
   * @deprecated
   */
  'unicorn/prefer-node-append'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-node-protocol.md
   */
  'unicorn/prefer-node-protocol'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-node-remove
   * @deprecated
   */
  'unicorn/prefer-node-remove'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Number` static properties over global ones.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-number-properties.md
   */
  'unicorn/prefer-number-properties'?: Linter.RuleEntry<UnicornPreferNumberProperties>
  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-object-from-entries.md
   */
  'unicorn/prefer-object-from-entries'?: Linter.RuleEntry<UnicornPreferObjectFromEntries>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-object-has-own
   * @deprecated
   */
  'unicorn/prefer-object-has-own'?: Linter.RuleEntry<[]>
  /**
   * Prefer omitting the `catch` binding parameter.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-optional-catch-binding.md
   */
  'unicorn/prefer-optional-catch-binding'?: Linter.RuleEntry<[]>
  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-prototype-methods.md
   */
  'unicorn/prefer-prototype-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()` and `.getElementsByName()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-query-selector.md
   */
  'unicorn/prefer-query-selector'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-reflect-apply.md
   */
  'unicorn/prefer-reflect-apply'?: Linter.RuleEntry<[]>
  /**
   * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-regexp-test.md
   */
  'unicorn/prefer-regexp-test'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-replace-all
   * @deprecated
   */
  'unicorn/prefer-replace-all'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-set-has.md
   */
  'unicorn/prefer-set-has'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Set#size` instead of `Array#length`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-set-size.md
   */
  'unicorn/prefer-set-size'?: Linter.RuleEntry<[]>
  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-spread.md
   */
  'unicorn/prefer-spread'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-starts-ends-with
   * @deprecated
   */
  'unicorn/prefer-starts-ends-with'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `String.raw` tag to avoid escaping `\`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-raw.md
   */
  'unicorn/prefer-string-raw'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-replace-all.md
   */
  'unicorn/prefer-string-replace-all'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-slice.md
   */
  'unicorn/prefer-string-slice'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-starts-ends-with.md
   */
  'unicorn/prefer-string-starts-ends-with'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-trim-start-end.md
   */
  'unicorn/prefer-string-trim-start-end'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `structuredClone` to create a deep clone.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-structured-clone.md
   */
  'unicorn/prefer-structured-clone'?: Linter.RuleEntry<UnicornPreferStructuredClone>
  /**
   * Prefer `switch` over multiple `else-if`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-switch.md
   */
  'unicorn/prefer-switch'?: Linter.RuleEntry<UnicornPreferSwitch>
  /**
   * Prefer ternary expressions over simple `if-else` statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-ternary.md
   */
  'unicorn/prefer-ternary'?: Linter.RuleEntry<UnicornPreferTernary>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-text-content
   * @deprecated
   */
  'unicorn/prefer-text-content'?: Linter.RuleEntry<[]>
  /**
   * Prefer top-level await over top-level promises and async function calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-top-level-await.md
   */
  'unicorn/prefer-top-level-await'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-trim-start-end
   * @deprecated
   */
  'unicorn/prefer-trim-start-end'?: Linter.RuleEntry<[]>
  /**
   * Enforce throwing `TypeError` in type checking conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-type-error.md
   */
  'unicorn/prefer-type-error'?: Linter.RuleEntry<[]>
  /**
   * Prevent abbreviations.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prevent-abbreviations.md
   */
  'unicorn/prevent-abbreviations'?: Linter.RuleEntry<UnicornPreventAbbreviations>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#regex-shorthand
   * @deprecated
   */
  'unicorn/regex-shorthand'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent relative URL style.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/relative-url-style.md
   */
  'unicorn/relative-url-style'?: Linter.RuleEntry<UnicornRelativeUrlStyle>
  /**
   * Enforce using the separator argument with `Array#join()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/require-array-join-separator.md
   */
  'unicorn/require-array-join-separator'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the digits argument with `Number#toFixed()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/require-number-to-fixed-digits-argument.md
   */
  'unicorn/require-number-to-fixed-digits-argument'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/require-post-message-target-origin.md
   */
  'unicorn/require-post-message-target-origin'?: Linter.RuleEntry<[]>
  /**
   * Enforce better string content.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/string-content.md
   */
  'unicorn/string-content'?: Linter.RuleEntry<UnicornStringContent>
  /**
   * Enforce consistent brace style for `case` clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/switch-case-braces.md
   */
  'unicorn/switch-case-braces'?: Linter.RuleEntry<UnicornSwitchCaseBraces>
  /**
   * Fix whitespace-insensitive template indentation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/template-indent.md
   */
  'unicorn/template-indent'?: Linter.RuleEntry<UnicornTemplateIndent>
  /**
   * Enforce consistent case for text encoding identifiers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/text-encoding-identifier-case.md
   */
  'unicorn/text-encoding-identifier-case'?: Linter.RuleEntry<[]>
  /**
   * Require `new` when creating an error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/throw-new-error.md
   */
  'unicorn/throw-new-error'?: Linter.RuleEntry<[]>
  /**
   * Require calls to `isNaN()` when checking for `NaN`
   * @see https://eslint.org/docs/latest/rules/use-isnan
   */
  'use-isnan'?: Linter.RuleEntry<UseIsnan>
  /**
   * Enforce comparing `typeof` expressions against valid strings
   * @see https://eslint.org/docs/latest/rules/valid-typeof
   */
  'valid-typeof'?: Linter.RuleEntry<ValidTypeof>
  /**
   * Require `var` declarations be placed at the top of their containing scope
   * @see https://eslint.org/docs/latest/rules/vars-on-top
   */
  'vars-on-top'?: Linter.RuleEntry<[]>
  /**
   * Require parentheses around immediate `function` invocations
   * @see https://eslint.org/docs/latest/rules/wrap-iife
   * @deprecated
   */
  'wrap-iife'?: Linter.RuleEntry<WrapIife>
  /**
   * Require parenthesis around regex literals
   * @see https://eslint.org/docs/latest/rules/wrap-regex
   * @deprecated
   */
  'wrap-regex'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   * @see https://eslint.org/docs/latest/rules/yield-star-spacing
   * @deprecated
   */
  'yield-star-spacing'?: Linter.RuleEntry<YieldStarSpacing>
  /**
   * Require or disallow "Yoda" conditions
   * @see https://eslint.org/docs/latest/rules/yoda
   */
  'yoda'?: Linter.RuleEntry<Yoda>
}

/* ======= Declarations ======= */
// ----- @eslint-react/dom/no-unknown-property -----
type EslintReactDomNoUnknownProperty = []|[{
  ignore?: string[]
  requireDataLowercase?: boolean
}]
// ----- @eslint-react/naming-convention/component-name -----
type EslintReactNamingConventionComponentName = []|[(("PascalCase" | "CONSTANT_CASE") | {
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  excepts?: string[]
  rule?: ("PascalCase" | "CONSTANT_CASE")
})]
// ----- @eslint-react/naming-convention/filename -----
type EslintReactNamingConventionFilename = []|[(("PascalCase" | "camelCase" | "kebab-case" | "snake_case") | {
  excepts?: string[]
  extensions?: string[]
  rule?: ("PascalCase" | "camelCase" | "kebab-case" | "snake_case")
})]
// ----- @eslint-react/naming-convention/filename-extension -----
type EslintReactNamingConventionFilenameExtension = []|[(("always" | "as-needed") | {
  allow?: ("always" | "as-needed")
  extensions?: string[]
  ignoreFilesWithoutCode?: boolean
})]
// ----- @eslint-react/no-useless-fragment -----
type EslintReactNoUselessFragment = []|[{
  
  allowExpressions?: boolean
}]
// ----- @next/next/no-html-link-for-pages -----
type NextNextNoHtmlLinkForPages = []|[(string | string[])]
// ----- accessor-pairs -----
type AccessorPairs = []|[{
  getWithoutSet?: boolean
  setWithoutGet?: boolean
  enforceForClassMembers?: boolean
}]
// ----- arca/import-absolutes -----
type ArcaImportAbsolutes = []|[{
  preferRelative?: string
  replaceAbsolutePathStart?: []|[{
    from?: string
    to?: string
    [k: string]: unknown | undefined
  }]
}]
// ----- arca/import-align -----
type ArcaImportAlign = []|[{
  collapseExtraSpaces?: boolean
  minColumnWidth?: number
}]
// ----- arca/import-ordering -----
type ArcaImportOrdering = []|[{
  sections?: []|[string]
  hoistOneliners?: boolean
  [k: string]: unknown | undefined
}]
// ----- arca/newline-after-import-section -----
type ArcaNewlineAfterImportSection = []|[{
  sections?: []|[string]
  enableOnelinerSections?: boolean
  [k: string]: unknown | undefined
}]
// ----- array-bracket-newline -----
type ArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- array-bracket-spacing -----
type ArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- array-callback-return -----
type ArrayCallbackReturn = []|[{
  allowImplicit?: boolean
  checkForEach?: boolean
  allowVoid?: boolean
}]
// ----- array-element-newline -----
type ArrayElementNewline = []|[(_ArrayElementNewlineBasicConfig | {
  ArrayExpression?: _ArrayElementNewlineBasicConfig
  ArrayPattern?: _ArrayElementNewlineBasicConfig
})]
type _ArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})
// ----- arrow-body-style -----
type ArrowBodyStyle = ([]|[("always" | "never")] | []|["as-needed"]|["as-needed", {
  requireReturnForObjectLiteral?: boolean
}])
// ----- arrow-parens -----
type ArrowParens = []|[("always" | "as-needed")]|[("always" | "as-needed"), {
  requireForBlockBody?: boolean
}]
// ----- arrow-spacing -----
type ArrowSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- block-spacing -----
type BlockSpacing = []|[("always" | "never")]
// ----- brace-style -----
type BraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- callback-return -----
type CallbackReturn = []|[string[]]
// ----- camelcase -----
type Camelcase = []|[{
  ignoreDestructuring?: boolean
  ignoreImports?: boolean
  ignoreGlobals?: boolean
  properties?: ("always" | "never")
  
  allow?: string[]
}]
// ----- capitalized-comments -----
type CapitalizedComments = []|[("always" | "never")]|[("always" | "never"), ({
  ignorePattern?: string
  ignoreInlineComments?: boolean
  ignoreConsecutiveComments?: boolean
} | {
  line?: {
    ignorePattern?: string
    ignoreInlineComments?: boolean
    ignoreConsecutiveComments?: boolean
  }
  block?: {
    ignorePattern?: string
    ignoreInlineComments?: boolean
    ignoreConsecutiveComments?: boolean
  }
})]
// ----- class-methods-use-this -----
type ClassMethodsUseThis = []|[{
  exceptMethods?: string[]
  enforceForClassFields?: boolean
}]
// ----- comma-dangle -----
type CommaDangle = []|[(_CommaDangleValue | {
  arrays?: _CommaDangleValueWithIgnore
  objects?: _CommaDangleValueWithIgnore
  imports?: _CommaDangleValueWithIgnore
  exports?: _CommaDangleValueWithIgnore
  functions?: _CommaDangleValueWithIgnore
})]
type _CommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _CommaDangleValueWithIgnore = ("always-multiline" | "always" | "ignore" | "never" | "only-multiline")
// ----- comma-spacing -----
type CommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- comma-style -----
type CommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- comments/disable-enable-pair -----
type CommentsDisableEnablePair = []|[{
  allowWholeFile?: boolean
}]
// ----- comments/no-restricted-disable -----
type CommentsNoRestrictedDisable = string[]
// ----- comments/no-use -----
type CommentsNoUse = []|[{
  allow?: ("eslint" | "eslint-disable" | "eslint-disable-line" | "eslint-disable-next-line" | "eslint-enable" | "eslint-env" | "exported" | "global" | "globals")[]
}]
// ----- comments/require-description -----
type CommentsRequireDescription = []|[{
  ignore?: ("eslint" | "eslint-disable" | "eslint-disable-line" | "eslint-disable-next-line" | "eslint-enable" | "eslint-env" | "exported" | "global" | "globals")[]
}]
// ----- complexity -----
type Complexity = []|[(number | {
  maximum?: number
  max?: number
  variant?: ("classic" | "modified")
})]
// ----- computed-property-spacing -----
type ComputedPropertySpacing = []|[("always" | "never")]|[("always" | "never"), {
  enforceForClassMembers?: boolean
}]
// ----- consistent-return -----
type ConsistentReturn = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- consistent-this -----
type ConsistentThis = string[]
// ----- curly -----
type Curly = ([]|["all"] | []|[("multi" | "multi-line" | "multi-or-nest")]|[("multi" | "multi-line" | "multi-or-nest"), "consistent"])
// ----- default-case -----
type DefaultCase = []|[{
  commentPattern?: string
}]
// ----- dot-location -----
type DotLocation = []|[("object" | "property")]
// ----- dot-notation -----
type DotNotation = []|[{
  allowKeywords?: boolean
  allowPattern?: string
}]
// ----- eol-last -----
type EolLast = []|[("always" | "never" | "unix" | "windows")]
// ----- eqeqeq -----
type Eqeqeq = ([]|["always"]|["always", {
  null?: ("always" | "never" | "ignore")
}] | []|[("smart" | "allow-null")])
// ----- es-x/no-array-prototype-at -----
type EsXNoArrayPrototypeAt = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-copywithin -----
type EsXNoArrayPrototypeCopywithin = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-entries -----
type EsXNoArrayPrototypeEntries = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-every -----
type EsXNoArrayPrototypeEvery = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-fill -----
type EsXNoArrayPrototypeFill = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-filter -----
type EsXNoArrayPrototypeFilter = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-find -----
type EsXNoArrayPrototypeFind = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-findindex -----
type EsXNoArrayPrototypeFindindex = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-findlast-findlastindex -----
type EsXNoArrayPrototypeFindlastFindlastindex = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-flat -----
type EsXNoArrayPrototypeFlat = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-foreach -----
type EsXNoArrayPrototypeForeach = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-includes -----
type EsXNoArrayPrototypeIncludes = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-indexof -----
type EsXNoArrayPrototypeIndexof = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-keys -----
type EsXNoArrayPrototypeKeys = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-lastindexof -----
type EsXNoArrayPrototypeLastindexof = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-map -----
type EsXNoArrayPrototypeMap = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-reduce -----
type EsXNoArrayPrototypeReduce = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-reduceright -----
type EsXNoArrayPrototypeReduceright = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-some -----
type EsXNoArrayPrototypeSome = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-toreversed -----
type EsXNoArrayPrototypeToreversed = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-tosorted -----
type EsXNoArrayPrototypeTosorted = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-tospliced -----
type EsXNoArrayPrototypeTospliced = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-values -----
type EsXNoArrayPrototypeValues = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-prototype-with -----
type EsXNoArrayPrototypeWith = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-array-string-prototype-at -----
type EsXNoArrayStringPrototypeAt = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-arraybuffer-prototype-transfer -----
type EsXNoArraybufferPrototypeTransfer = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-date-prototype-getyear-setyear -----
type EsXNoDatePrototypeGetyearSetyear = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-date-prototype-togmtstring -----
type EsXNoDatePrototypeTogmtstring = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-function-prototype-bind -----
type EsXNoFunctionPrototypeBind = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-intl-datetimeformat-prototype-formatrange -----
type EsXNoIntlDatetimeformatPrototypeFormatrange = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-intl-datetimeformat-prototype-formattoparts -----
type EsXNoIntlDatetimeformatPrototypeFormattoparts = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-intl-numberformat-prototype-formatrange -----
type EsXNoIntlNumberformatPrototypeFormatrange = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-intl-numberformat-prototype-formatrangetoparts -----
type EsXNoIntlNumberformatPrototypeFormatrangetoparts = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-intl-numberformat-prototype-formattoparts -----
type EsXNoIntlNumberformatPrototypeFormattoparts = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-intl-pluralrules-prototype-selectrange -----
type EsXNoIntlPluralrulesPrototypeSelectrange = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-iterator-prototype-drop -----
type EsXNoIteratorPrototypeDrop = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-iterator-prototype-every -----
type EsXNoIteratorPrototypeEvery = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-iterator-prototype-filter -----
type EsXNoIteratorPrototypeFilter = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-iterator-prototype-find -----
type EsXNoIteratorPrototypeFind = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-iterator-prototype-flatmap -----
type EsXNoIteratorPrototypeFlatmap = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-iterator-prototype-foreach -----
type EsXNoIteratorPrototypeForeach = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-iterator-prototype-map -----
type EsXNoIteratorPrototypeMap = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-iterator-prototype-reduce -----
type EsXNoIteratorPrototypeReduce = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-iterator-prototype-some -----
type EsXNoIteratorPrototypeSome = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-iterator-prototype-take -----
type EsXNoIteratorPrototypeTake = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-iterator-prototype-toarray -----
type EsXNoIteratorPrototypeToarray = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-nonstandard-array-properties -----
type EsXNoNonstandardArrayProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-array-prototype-properties -----
type EsXNoNonstandardArrayPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-arraybuffer-properties -----
type EsXNoNonstandardArraybufferProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-arraybuffer-prototype-properties -----
type EsXNoNonstandardArraybufferPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-atomics-properties -----
type EsXNoNonstandardAtomicsProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-bigint-properties -----
type EsXNoNonstandardBigintProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-bigint-prototype-properties -----
type EsXNoNonstandardBigintPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-boolean-properties -----
type EsXNoNonstandardBooleanProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-boolean-prototype-properties -----
type EsXNoNonstandardBooleanPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-dataview-properties -----
type EsXNoNonstandardDataviewProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-dataview-prototype-properties -----
type EsXNoNonstandardDataviewPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-date-properties -----
type EsXNoNonstandardDateProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-date-prototype-properties -----
type EsXNoNonstandardDatePrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-finalizationregistry-properties -----
type EsXNoNonstandardFinalizationregistryProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-finalizationregistry-prototype-properties -----
type EsXNoNonstandardFinalizationregistryPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-function-properties -----
type EsXNoNonstandardFunctionProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-collator-properties -----
type EsXNoNonstandardIntlCollatorProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-collator-prototype-properties -----
type EsXNoNonstandardIntlCollatorPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-datetimeformat-properties -----
type EsXNoNonstandardIntlDatetimeformatProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-datetimeformat-prototype-properties -----
type EsXNoNonstandardIntlDatetimeformatPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-displaynames-properties -----
type EsXNoNonstandardIntlDisplaynamesProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-displaynames-prototype-properties -----
type EsXNoNonstandardIntlDisplaynamesPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-listformat-properties -----
type EsXNoNonstandardIntlListformatProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-listformat-prototype-properties -----
type EsXNoNonstandardIntlListformatPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-locale-properties -----
type EsXNoNonstandardIntlLocaleProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-locale-prototype-properties -----
type EsXNoNonstandardIntlLocalePrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-numberformat-properties -----
type EsXNoNonstandardIntlNumberformatProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-numberformat-prototype-properties -----
type EsXNoNonstandardIntlNumberformatPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-pluralrules-properties -----
type EsXNoNonstandardIntlPluralrulesProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-pluralrules-prototype-properties -----
type EsXNoNonstandardIntlPluralrulesPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-properties -----
type EsXNoNonstandardIntlProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-relativetimeformat-properties -----
type EsXNoNonstandardIntlRelativetimeformatProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-relativetimeformat-prototype-properties -----
type EsXNoNonstandardIntlRelativetimeformatPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-segmenter-properties -----
type EsXNoNonstandardIntlSegmenterProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-intl-segmenter-prototype-properties -----
type EsXNoNonstandardIntlSegmenterPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-iterator-properties -----
type EsXNoNonstandardIteratorProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-iterator-prototype-properties -----
type EsXNoNonstandardIteratorPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-json-properties -----
type EsXNoNonstandardJsonProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-map-properties -----
type EsXNoNonstandardMapProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-map-prototype-properties -----
type EsXNoNonstandardMapPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-math-properties -----
type EsXNoNonstandardMathProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-number-properties -----
type EsXNoNonstandardNumberProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-number-prototype-properties -----
type EsXNoNonstandardNumberPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-object-properties -----
type EsXNoNonstandardObjectProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-promise-properties -----
type EsXNoNonstandardPromiseProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-promise-prototype-properties -----
type EsXNoNonstandardPromisePrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-proxy-properties -----
type EsXNoNonstandardProxyProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-reflect-properties -----
type EsXNoNonstandardReflectProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-regexp-properties -----
type EsXNoNonstandardRegexpProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-regexp-prototype-properties -----
type EsXNoNonstandardRegexpPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-set-properties -----
type EsXNoNonstandardSetProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-set-prototype-properties -----
type EsXNoNonstandardSetPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-sharedarraybuffer-properties -----
type EsXNoNonstandardSharedarraybufferProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-sharedarraybuffer-prototype-properties -----
type EsXNoNonstandardSharedarraybufferPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-string-properties -----
type EsXNoNonstandardStringProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-string-prototype-properties -----
type EsXNoNonstandardStringPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-symbol-properties -----
type EsXNoNonstandardSymbolProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-symbol-prototype-properties -----
type EsXNoNonstandardSymbolPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-typed-array-properties -----
type EsXNoNonstandardTypedArrayProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-typed-array-prototype-properties -----
type EsXNoNonstandardTypedArrayPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-weakmap-properties -----
type EsXNoNonstandardWeakmapProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-weakmap-prototype-properties -----
type EsXNoNonstandardWeakmapPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-weakref-properties -----
type EsXNoNonstandardWeakrefProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-weakref-prototype-properties -----
type EsXNoNonstandardWeakrefPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-weakset-properties -----
type EsXNoNonstandardWeaksetProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-nonstandard-weakset-prototype-properties -----
type EsXNoNonstandardWeaksetPrototypeProperties = []|[{
  allow?: string[]
}]
// ----- es-x/no-promise-prototype-finally -----
type EsXNoPromisePrototypeFinally = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-regexp-prototype-compile -----
type EsXNoRegexpPrototypeCompile = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-regexp-prototype-flags -----
type EsXNoRegexpPrototypeFlags = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-resizable-and-growable-arraybuffers -----
type EsXNoResizableAndGrowableArraybuffers = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-set-prototype-difference -----
type EsXNoSetPrototypeDifference = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-set-prototype-intersection -----
type EsXNoSetPrototypeIntersection = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-set-prototype-isdisjointfrom -----
type EsXNoSetPrototypeIsdisjointfrom = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-set-prototype-issubsetof -----
type EsXNoSetPrototypeIssubsetof = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-set-prototype-issupersetof -----
type EsXNoSetPrototypeIssupersetof = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-set-prototype-symmetricdifference -----
type EsXNoSetPrototypeSymmetricdifference = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-set-prototype-union -----
type EsXNoSetPrototypeUnion = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-create-html-methods -----
type EsXNoStringCreateHtmlMethods = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-at -----
type EsXNoStringPrototypeAt = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-codepointat -----
type EsXNoStringPrototypeCodepointat = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-endswith -----
type EsXNoStringPrototypeEndswith = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-includes -----
type EsXNoStringPrototypeIncludes = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-iswellformed -----
type EsXNoStringPrototypeIswellformed = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-iswellformed-towellformed -----
type EsXNoStringPrototypeIswellformedTowellformed = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-matchall -----
type EsXNoStringPrototypeMatchall = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-normalize -----
type EsXNoStringPrototypeNormalize = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-padstart-padend -----
type EsXNoStringPrototypePadstartPadend = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-repeat -----
type EsXNoStringPrototypeRepeat = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-replaceall -----
type EsXNoStringPrototypeReplaceall = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-startswith -----
type EsXNoStringPrototypeStartswith = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-substr -----
type EsXNoStringPrototypeSubstr = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-towellformed -----
type EsXNoStringPrototypeTowellformed = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-trim -----
type EsXNoStringPrototypeTrim = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-trimleft-trimright -----
type EsXNoStringPrototypeTrimleftTrimright = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-string-prototype-trimstart-trimend -----
type EsXNoStringPrototypeTrimstartTrimend = []|[{
  aggressive?: boolean
}]
// ----- es-x/no-symbol-prototype-description -----
type EsXNoSymbolPrototypeDescription = []|[{
  aggressive?: boolean
}]
// ----- eslint-plugin/consistent-output -----
type EslintPluginConsistentOutput = []|[("always" | "consistent")]
// ----- eslint-plugin/meta-property-ordering -----
type EslintPluginMetaPropertyOrdering = []|[unknown[]]
// ----- eslint-plugin/no-property-in-node -----
type EslintPluginNoPropertyInNode = []|[{
  
  additionalNodeTypeFiles?: unknown[]
}]
// ----- eslint-plugin/report-message-format -----
type EslintPluginReportMessageFormat = []|[string]
// ----- eslint-plugin/require-meta-docs-description -----
type EslintPluginRequireMetaDocsDescription = []|[{
  
  pattern?: string
}]
// ----- eslint-plugin/require-meta-docs-recommended -----
type EslintPluginRequireMetaDocsRecommended = []|[{
  
  allowNonBoolean?: boolean
}]
// ----- eslint-plugin/require-meta-docs-url -----
type EslintPluginRequireMetaDocsUrl = []|[{
  
  pattern?: string
}]
// ----- eslint-plugin/require-meta-fixable -----
type EslintPluginRequireMetaFixable = []|[{
  
  catchNoFixerButFixableProperty?: boolean
}]
// ----- eslint-plugin/require-meta-schema -----
type EslintPluginRequireMetaSchema = []|[{
  
  requireSchemaPropertyWhenOptionless?: boolean
}]
// ----- eslint-plugin/test-case-property-ordering -----
type EslintPluginTestCasePropertyOrdering = []|[unknown[]]
// ----- eslint-plugin/test-case-shorthand-strings -----
type EslintPluginTestCaseShorthandStrings = []|[("as-needed" | "never" | "consistent" | "consistent-as-needed")]
// ----- func-call-spacing -----
type FuncCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
}])
// ----- func-name-matching -----
type FuncNameMatching = ([]|[("always" | "never")]|[("always" | "never"), {
  considerPropertyDescriptor?: boolean
  includeCommonJSModuleExports?: boolean
}] | []|[{
  considerPropertyDescriptor?: boolean
  includeCommonJSModuleExports?: boolean
}])
// ----- func-names -----
type FuncNames = []|[_FuncNamesValue]|[_FuncNamesValue, {
  generators?: _FuncNamesValue
}]
type _FuncNamesValue = ("always" | "as-needed" | "never")
// ----- func-style -----
type FuncStyle = []|[("declaration" | "expression")]|[("declaration" | "expression"), {
  allowArrowFunctions?: boolean
  overrides?: {
    namedExports?: ("declaration" | "expression" | "ignore")
  }
}]
// ----- function-call-argument-newline -----
type FunctionCallArgumentNewline = []|[("always" | "never" | "consistent")]
// ----- function-paren-newline -----
type FunctionParenNewline = []|[(("always" | "never" | "consistent" | "multiline" | "multiline-arguments") | {
  minItems?: number
})]
// ----- generator-star-spacing -----
type GeneratorStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
  named?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  anonymous?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  method?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
})]
// ----- getter-return -----
type GetterReturn = []|[{
  allowImplicit?: boolean
}]
// ----- grouped-accessor-pairs -----
type GroupedAccessorPairs = []|[("anyOrder" | "getBeforeSet" | "setBeforeGet")]
// ----- handle-callback-err -----
type HandleCallbackErr = []|[string]
// ----- id-blacklist -----
type IdBlacklist = string[]
// ----- id-denylist -----
type IdDenylist = string[]
// ----- id-length -----
type IdLength = []|[{
  min?: number
  max?: number
  exceptions?: string[]
  exceptionPatterns?: string[]
  properties?: ("always" | "never")
}]
// ----- id-match -----
type IdMatch = []|[string]|[string, {
  properties?: boolean
  classFields?: boolean
  onlyDeclarations?: boolean
  ignoreDestructuring?: boolean
}]
// ----- implicit-arrow-linebreak -----
type ImplicitArrowLinebreak = []|[("beside" | "below")]
// ----- import/consistent-type-specifier-style -----
type ImportConsistentTypeSpecifierStyle = []|[("prefer-inline" | "prefer-top-level")]
// ----- import/dynamic-import-chunkname -----
type ImportDynamicImportChunkname = []|[{
  importFunctions?: string[]
  allowEmpty?: boolean
  webpackChunknameFormat?: string
  [k: string]: unknown | undefined
}]
// ----- import/extensions -----
type ImportExtensions = ([]|[("always" | "ignorePackages" | "never")] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  checkTypeImports?: boolean
  ignorePackages?: boolean
  [k: string]: unknown | undefined
}] | []|[{
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  checkTypeImports?: boolean
  ignorePackages?: boolean
  [k: string]: unknown | undefined
}] | []|[{
  [k: string]: ("always" | "ignorePackages" | "never")
}] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  [k: string]: ("always" | "ignorePackages" | "never")
}])
// ----- import/first -----
type ImportFirst = []|[("absolute-first" | "disable-absolute-first")]
// ----- import/imports-first -----
type ImportImportsFirst = []|[("absolute-first" | "disable-absolute-first")]
// ----- import/max-dependencies -----
type ImportMaxDependencies = []|[{
  max?: number
  ignoreTypeImports?: boolean
}]
// ----- import/named -----
type ImportNamed = []|[{
  commonjs?: boolean
}]
// ----- import/namespace -----
type ImportNamespace = []|[{
  
  allowComputed?: boolean
}]
// ----- import/newline-after-import -----
type ImportNewlineAfterImport = []|[{
  count?: number
  exactCount?: boolean
  considerComments?: boolean
}]
// ----- import/no-absolute-path -----
type ImportNoAbsolutePath = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import/no-anonymous-default-export -----
type ImportNoAnonymousDefaultExport = []|[{
  
  allowArray?: boolean
  
  allowArrowFunction?: boolean
  
  allowCallExpression?: boolean
  
  allowAnonymousClass?: boolean
  
  allowAnonymousFunction?: boolean
  
  allowLiteral?: boolean
  
  allowObject?: boolean
  
  allowNew?: boolean
}]
// ----- import/no-commonjs -----
type ImportNoCommonjs = ([]|["allow-primitive-modules"] | []|[{
  allowPrimitiveModules?: boolean
  allowRequire?: boolean
  allowConditionalRequire?: boolean
}])
// ----- import/no-cycle -----
type ImportNoCycle = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
  maxDepth?: (number | "∞")
  
  ignoreExternal?: boolean
  
  allowUnsafeDynamicCyclicDependency?: boolean
  
  disableScc?: boolean
}]
// ----- import/no-duplicates -----
type ImportNoDuplicates = []|[{
  considerQueryString?: boolean
  "prefer-inline"?: boolean
}]
// ----- import/no-dynamic-require -----
type ImportNoDynamicRequire = []|[{
  esmodule?: boolean
}]
// ----- import/no-extraneous-dependencies -----
type ImportNoExtraneousDependencies = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  bundledDependencies?: (boolean | unknown[])
  packageDir?: (string | unknown[])
  includeInternal?: boolean
  includeTypes?: boolean
}]
// ----- import/no-import-module-exports -----
type ImportNoImportModuleExports = []|[{
  exceptions?: unknown[]
}]
// ----- import/no-internal-modules -----
type ImportNoInternalModules = []|[({
  allow?: string[]
} | {
  forbid?: string[]
})]
// ----- import/no-namespace -----
type ImportNoNamespace = []|[{
  ignore?: string[]
  [k: string]: unknown | undefined
}]
// ----- import/no-nodejs-modules -----
type ImportNoNodejsModules = []|[{
  allow?: string[]
}]
// ----- import/no-relative-packages -----
type ImportNoRelativePackages = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import/no-relative-parent-imports -----
type ImportNoRelativeParentImports = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import/no-restricted-paths -----
type ImportNoRestrictedPaths = []|[{
  
  zones?: [{
    target?: (string | string[])
    from?: (string | string[])
    except?: string[]
    message?: string
  }, ...({
    target?: (string | string[])
    from?: (string | string[])
    except?: string[]
    message?: string
  })[]]
  basePath?: string
}]
// ----- import/no-unassigned-import -----
type ImportNoUnassignedImport = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  allow?: string[]
}]
// ----- import/no-unresolved -----
type ImportNoUnresolved = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
  caseSensitive?: boolean
  caseSensitiveStrict?: boolean
}]
// ----- import/no-unused-modules -----
type ImportNoUnusedModules = []|[({
  unusedExports: true
  src?: {
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
} | {
  missingExports: true
  [k: string]: unknown | undefined
})]
// ----- import/no-useless-path-segments -----
type ImportNoUselessPathSegments = []|[{
  commonjs?: boolean
  noUselessIndex?: boolean
}]
// ----- import/order -----
type ImportOrder = []|[{
  groups?: unknown[]
  pathGroupsExcludedImportTypes?: unknown[]
  distinctGroup?: boolean
  pathGroups?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    group: ("builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type")
    position?: ("after" | "before")
  }[]
  "newlines-between"?: ("ignore" | "always" | "always-and-inside-groups" | "never")
  named?: (boolean | {
    enabled?: boolean
    import?: boolean
    export?: boolean
    require?: boolean
    cjsExports?: boolean
    types?: ("mixed" | "types-first" | "types-last")
  })
  alphabetize?: {
    caseInsensitive?: boolean
    order?: ("ignore" | "asc" | "desc")
    orderImportKind?: ("ignore" | "asc" | "desc")
  }
  warnOnUnassignedImports?: boolean
}]
// ----- import/prefer-default-export -----
type ImportPreferDefaultExport = []|[{
  target?: ("single" | "any")
}]
// ----- indent -----
type Indent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
  })
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
}]
// ----- indent-legacy -----
type IndentLegacy = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: (number | {
    var?: number
    let?: number
    const?: number
    [k: string]: unknown | undefined
  })
  outerIIFEBody?: number
  MemberExpression?: number
  FunctionDeclaration?: {
    parameters?: (number | "first")
    body?: number
    [k: string]: unknown | undefined
  }
  FunctionExpression?: {
    parameters?: (number | "first")
    body?: number
    [k: string]: unknown | undefined
  }
  CallExpression?: {
    parameters?: (number | "first")
    [k: string]: unknown | undefined
  }
  ArrayExpression?: (number | "first")
  ObjectExpression?: (number | "first")
}]
// ----- init-declarations -----
type InitDeclarations = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])
// ----- jsx-a11y/accessible-emoji -----
type JsxA11YAccessibleEmoji = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/alt-text -----
type JsxA11YAltText = []|[{
  elements?: string[]
  img?: string[]
  object?: string[]
  area?: string[]
  "input[type=\"image\"]"?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/anchor-ambiguous-text -----
type JsxA11YAnchorAmbiguousText = []|[{
  words?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/anchor-has-content -----
type JsxA11YAnchorHasContent = []|[{
  components?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/anchor-is-valid -----
type JsxA11YAnchorIsValid = []|[{
  components?: string[]
  specialLink?: string[]
  
  aspects?: [("noHref" | "invalidHref" | "preferButton"), ...(("noHref" | "invalidHref" | "preferButton"))[]]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-activedescendant-has-tabindex -----
type JsxA11YAriaActivedescendantHasTabindex = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-props -----
type JsxA11YAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-proptypes -----
type JsxA11YAriaProptypes = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-role -----
type JsxA11YAriaRole = []|[{
  allowedInvalidRoles?: string[]
  ignoreNonDOM?: boolean
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-unsupported-elements -----
type JsxA11YAriaUnsupportedElements = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/autocomplete-valid -----
type JsxA11YAutocompleteValid = []|[{
  inputComponents?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/click-events-have-key-events -----
type JsxA11YClickEventsHaveKeyEvents = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/control-has-associated-label -----
type JsxA11YControlHasAssociatedLabel = []|[{
  labelAttributes?: string[]
  controlComponents?: string[]
  ignoreElements?: string[]
  ignoreRoles?: string[]
  
  depth?: number
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/heading-has-content -----
type JsxA11YHeadingHasContent = []|[{
  components?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/html-has-lang -----
type JsxA11YHtmlHasLang = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/iframe-has-title -----
type JsxA11YIframeHasTitle = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/img-redundant-alt -----
type JsxA11YImgRedundantAlt = []|[{
  components?: string[]
  words?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/interactive-supports-focus -----
type JsxA11YInteractiveSupportsFocus = []|[{
  
  tabbable?: ("button" | "checkbox" | "columnheader" | "combobox" | "grid" | "gridcell" | "link" | "listbox" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "option" | "progressbar" | "radio" | "radiogroup" | "row" | "rowheader" | "scrollbar" | "searchbox" | "slider" | "spinbutton" | "switch" | "tab" | "tablist" | "textbox" | "tree" | "treegrid" | "treeitem" | "doc-backlink" | "doc-biblioref" | "doc-glossref" | "doc-noteref")[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/label-has-associated-control -----
type JsxA11YLabelHasAssociatedControl = []|[{
  labelComponents?: string[]
  labelAttributes?: string[]
  controlComponents?: string[]
  
  assert?: ("htmlFor" | "nesting" | "both" | "either")
  
  depth?: number
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/label-has-for -----
type JsxA11YLabelHasFor = []|[{
  components?: string[]
  required?: (("nesting" | "id") | {
    
    some: ("nesting" | "id")[]
    [k: string]: unknown | undefined
  } | {
    
    every: ("nesting" | "id")[]
    [k: string]: unknown | undefined
  })
  allowChildren?: boolean
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/lang -----
type JsxA11YLang = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/media-has-caption -----
type JsxA11YMediaHasCaption = []|[{
  audio?: string[]
  video?: string[]
  track?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/mouse-events-have-key-events -----
type JsxA11YMouseEventsHaveKeyEvents = []|[{
  
  hoverInHandlers?: string[]
  
  hoverOutHandlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-access-key -----
type JsxA11YNoAccessKey = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-aria-hidden-on-focusable -----
type JsxA11YNoAriaHiddenOnFocusable = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-autofocus -----
type JsxA11YNoAutofocus = []|[{
  ignoreNonDOM?: boolean
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-distracting-elements -----
type JsxA11YNoDistractingElements = []|[{
  
  elements?: ("marquee" | "blink")[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-interactive-element-to-noninteractive-role -----
type JsxA11YNoInteractiveElementToNoninteractiveRole = []|[{
  [k: string]: string[] | undefined
}]
// ----- jsx-a11y/no-noninteractive-element-interactions -----
type JsxA11YNoNoninteractiveElementInteractions = []|[{
  handlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-noninteractive-element-to-interactive-role -----
type JsxA11YNoNoninteractiveElementToInteractiveRole = []|[{
  [k: string]: string[] | undefined
}]
// ----- jsx-a11y/no-noninteractive-tabindex -----
type JsxA11YNoNoninteractiveTabindex = []|[{
  
  roles?: string[]
  
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-onchange -----
type JsxA11YNoOnchange = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-redundant-roles -----
type JsxA11YNoRedundantRoles = []|[{
  [k: string]: string[] | undefined
}]
// ----- jsx-a11y/no-static-element-interactions -----
type JsxA11YNoStaticElementInteractions = []|[{
  handlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/prefer-tag-over-role -----
type JsxA11YPreferTagOverRole = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/role-has-required-aria-props -----
type JsxA11YRoleHasRequiredAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/role-supports-aria-props -----
type JsxA11YRoleSupportsAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/scope -----
type JsxA11YScope = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/tabindex-no-positive -----
type JsxA11YTabindexNoPositive = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-quotes -----
type JsxQuotes = []|[("prefer-single" | "prefer-double")]
// ----- key-spacing -----
type KeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- keyword-spacing -----
type KeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
  }
}]
// ----- line-comment-position -----
type LineCommentPosition = []|[(("above" | "beside") | {
  position?: ("above" | "beside")
  ignorePattern?: string
  applyDefaultPatterns?: boolean
  applyDefaultIgnorePatterns?: boolean
})]
// ----- linebreak-style -----
type LinebreakStyle = []|[("unix" | "windows")]
// ----- lines-around-comment -----
type LinesAroundComment = []|[{
  beforeBlockComment?: boolean
  afterBlockComment?: boolean
  beforeLineComment?: boolean
  afterLineComment?: boolean
  allowBlockStart?: boolean
  allowBlockEnd?: boolean
  allowClassStart?: boolean
  allowClassEnd?: boolean
  allowObjectStart?: boolean
  allowObjectEnd?: boolean
  allowArrayStart?: boolean
  allowArrayEnd?: boolean
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]
// ----- lines-around-directive -----
type LinesAroundDirective = []|[(("always" | "never") | {
  before?: ("always" | "never")
  after?: ("always" | "never")
})]
// ----- lines-between-class-members -----
type LinesBetweenClassMembers = []|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never"))]|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never")), {
  exceptAfterSingleLine?: boolean
}]
// ----- logical-assignment-operators -----
type LogicalAssignmentOperators = (([]|["always"]|["always", {
  enforceForIfStatements?: boolean
}] | ["never"]) & unknown[])
// ----- max-classes-per-file -----
type MaxClassesPerFile = []|[(number | {
  ignoreExpressions?: boolean
  max?: number
})]
// ----- max-depth -----
type MaxDepth = []|[(number | {
  maximum?: number
  max?: number
})]
// ----- max-len -----
type MaxLen = []|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), {
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
}]
// ----- max-lines -----
type MaxLines = []|[(number | {
  max?: number
  skipComments?: boolean
  skipBlankLines?: boolean
})]
// ----- max-lines-per-function -----
type MaxLinesPerFunction = []|[({
  max?: number
  skipComments?: boolean
  skipBlankLines?: boolean
  IIFEs?: boolean
} | number)]
// ----- max-nested-callbacks -----
type MaxNestedCallbacks = []|[(number | {
  maximum?: number
  max?: number
})]
// ----- max-params -----
type MaxParams = []|[(number | {
  maximum?: number
  max?: number
})]
// ----- max-statements -----
type MaxStatements = []|[(number | {
  maximum?: number
  max?: number
})]|[(number | {
  maximum?: number
  max?: number
}), {
  ignoreTopLevelFunctions?: boolean
}]
// ----- max-statements-per-line -----
type MaxStatementsPerLine = []|[{
  max?: number
}]
// ----- multiline-comment-style -----
type MultilineCommentStyle = ([]|[("starred-block" | "bare-block")] | []|["separate-lines"]|["separate-lines", {
  checkJSDoc?: boolean
}])
// ----- multiline-ternary -----
type MultilineTernary = []|[("always" | "always-multiline" | "never")]
// ----- mutation/no-mutating-functions -----
type MutationNoMutatingFunctions = []|[{
  functionProps?: boolean
  ignoredMethods?: string[]
  useLodashFunctionImports?: boolean
  reducers?: string[]
  [k: string]: unknown | undefined
}]
// ----- mutation/no-mutating-methods -----
type MutationNoMutatingMethods = []|[{
  allowedObjects?: string[]
  reducers?: string[]
  initializers?: string[]
  [k: string]: unknown | undefined
}]
// ----- mutation/no-mutation -----
type MutationNoMutation = []|[{
  commonjs?: boolean
  allowThis?: boolean
  prototypes?: boolean
  functionProps?: boolean
  exceptions?: {
    object?: string
    property?: string
    [k: string]: unknown | undefined
  }[]
  reducers?: string[]
  initializers?: string[]
  [k: string]: unknown | undefined
}]
// ----- new-cap -----
type NewCap = []|[{
  newIsCap?: boolean
  capIsNew?: boolean
  newIsCapExceptions?: string[]
  newIsCapExceptionPattern?: string
  capIsNewExceptions?: string[]
  capIsNewExceptionPattern?: string
  properties?: boolean
}]
// ----- new-parens -----
type NewParens = []|[("always" | "never")]
// ----- newline-after-var -----
type NewlineAfterVar = []|[("never" | "always")]
// ----- newline-per-chained-call -----
type NewlinePerChainedCall = []|[{
  ignoreChainWithDepth?: number
}]
// ----- no-bitwise -----
type NoBitwise = []|[{
  allow?: ("^" | "|" | "&" | "<<" | ">>" | ">>>" | "^=" | "|=" | "&=" | "<<=" | ">>=" | ">>>=" | "~")[]
  int32Hint?: boolean
}]
// ----- no-cond-assign -----
type NoCondAssign = []|[("except-parens" | "always")]
// ----- no-confusing-arrow -----
type NoConfusingArrow = []|[{
  allowParens?: boolean
  onlyOneSimpleParam?: boolean
}]
// ----- no-console -----
type NoConsole = []|[{
  
  allow?: [string, ...(string)[]]
}]
// ----- no-constant-condition -----
type NoConstantCondition = []|[{
  checkLoops?: ("all" | "allExceptWhileTrue" | "none" | true | false)
}]
// ----- no-duplicate-imports -----
type NoDuplicateImports = []|[{
  includeExports?: boolean
}]
// ----- no-else-return -----
type NoElseReturn = []|[{
  allowElseIf?: boolean
}]
// ----- no-empty -----
type NoEmpty = []|[{
  allowEmptyCatch?: boolean
}]
// ----- no-empty-function -----
type NoEmptyFunction = []|[{
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "asyncFunctions" | "asyncMethods")[]
}]
// ----- no-empty-pattern -----
type NoEmptyPattern = []|[{
  allowObjectPatternsAsParameters?: boolean
}]
// ----- no-eval -----
type NoEval = []|[{
  allowIndirect?: boolean
}]
// ----- no-extend-native -----
type NoExtendNative = []|[{
  exceptions?: string[]
}]
// ----- no-extra-boolean-cast -----
type NoExtraBooleanCast = []|[({
  enforceForInnerExpressions?: boolean
} | {
  enforceForLogicalOperands?: boolean
})]
// ----- no-extra-parens -----
type NoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
}])
// ----- no-fallthrough -----
type NoFallthrough = []|[{
  commentPattern?: string
  allowEmptyCase?: boolean
  reportUnusedFallthroughComment?: boolean
}]
// ----- no-global-assign -----
type NoGlobalAssign = []|[{
  exceptions?: string[]
}]
// ----- no-implicit-coercion -----
type NoImplicitCoercion = []|[{
  boolean?: boolean
  number?: boolean
  string?: boolean
  disallowTemplateShorthand?: boolean
  allow?: ("~" | "!!" | "+" | "- -" | "-" | "*")[]
}]
// ----- no-implicit-globals -----
type NoImplicitGlobals = []|[{
  lexicalBindings?: boolean
}]
// ----- no-inline-comments -----
type NoInlineComments = []|[{
  ignorePattern?: string
}]
// ----- no-inner-declarations -----
type NoInnerDeclarations = []|[("functions" | "both")]|[("functions" | "both"), {
  blockScopedFunctions?: ("allow" | "disallow")
}]
// ----- no-invalid-regexp -----
type NoInvalidRegexp = []|[{
  allowConstructorFlags?: string[]
}]
// ----- no-invalid-this -----
type NoInvalidThis = []|[{
  capIsConstructor?: boolean
}]
// ----- no-irregular-whitespace -----
type NoIrregularWhitespace = []|[{
  skipComments?: boolean
  skipStrings?: boolean
  skipTemplates?: boolean
  skipRegExps?: boolean
  skipJSXText?: boolean
}]
// ----- no-labels -----
type NoLabels = []|[{
  allowLoop?: boolean
  allowSwitch?: boolean
}]
// ----- no-magic-numbers -----
type NoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
}]
// ----- no-misleading-character-class -----
type NoMisleadingCharacterClass = []|[{
  allowEscape?: boolean
}]
// ----- no-mixed-operators -----
type NoMixedOperators = []|[{
  groups?: [("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ...(("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"))[]][]
  allowSamePrecedence?: boolean
}]
// ----- no-mixed-requires -----
type NoMixedRequires = []|[(boolean | {
  grouping?: boolean
  allowCall?: boolean
})]
// ----- no-mixed-spaces-and-tabs -----
type NoMixedSpacesAndTabs = []|[("smart-tabs" | true | false)]
// ----- no-multi-assign -----
type NoMultiAssign = []|[{
  ignoreNonDeclaration?: boolean
}]
// ----- no-multi-spaces -----
type NoMultiSpaces = []|[{
  exceptions?: {
    [k: string]: boolean
  }
  ignoreEOLComments?: boolean
}]
// ----- no-multiple-empty-lines -----
type NoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]
// ----- no-native-reassign -----
type NoNativeReassign = []|[{
  exceptions?: string[]
}]
// ----- no-param-reassign -----
type NoParamReassign = []|[({
  props?: false
} | {
  props?: true
  ignorePropertyModificationsFor?: string[]
  ignorePropertyModificationsForRegex?: string[]
})]
// ----- no-plusplus -----
type NoPlusplus = []|[{
  allowForLoopAfterthoughts?: boolean
}]
// ----- no-promise-executor-return -----
type NoPromiseExecutorReturn = []|[{
  allowVoid?: boolean
}]
// ----- no-redeclare -----
type NoRedeclare = []|[{
  builtinGlobals?: boolean
}]
// ----- no-restricted-exports -----
type NoRestrictedExports = []|[({
  restrictedNamedExports?: string[]
  restrictedNamedExportsPattern?: string
} | {
  restrictedNamedExports?: string[]
  restrictedNamedExportsPattern?: string
  restrictDefaultExports?: {
    direct?: boolean
    named?: boolean
    defaultFrom?: boolean
    namedFrom?: boolean
    namespaceFrom?: boolean
  }
})]
// ----- no-restricted-globals -----
type NoRestrictedGlobals = (string | {
  name: string
  message?: string
})[]
// ----- no-restricted-imports -----
type NoRestrictedImports = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
  })[]
  patterns?: (string[] | ({
    [k: string]: unknown | undefined
  } | {
    [k: string]: unknown | undefined
  })[])
}])
// ----- no-restricted-modules -----
type NoRestrictedModules = ((string | {
  name: string
  message?: string
})[] | {
  paths?: (string | {
    name: string
    message?: string
  })[]
  patterns?: string[]
}[])
// ----- no-restricted-properties -----
type NoRestrictedProperties = ({
  object: string
  property?: string
  message?: string
} | {
  object?: string
  property: string
  message?: string
})[]
// ----- no-restricted-syntax -----
type NoRestrictedSyntax = (string | {
  selector: string
  message?: string
})[]
// ----- no-return-assign -----
type NoReturnAssign = []|[("except-parens" | "always")]
// ----- no-self-assign -----
type NoSelfAssign = []|[{
  props?: boolean
}]
// ----- no-sequences -----
type NoSequences = []|[{
  allowInParentheses?: boolean
}]
// ----- no-shadow -----
type NoShadow = []|[{
  builtinGlobals?: boolean
  hoist?: ("all" | "functions" | "never")
  allow?: string[]
  ignoreOnInitialization?: boolean
}]
// ----- no-sync -----
type NoSync = []|[{
  allowAtRootLevel?: boolean
}]
// ----- no-tabs -----
type NoTabs = []|[{
  allowIndentationTabs?: boolean
}]
// ----- no-trailing-spaces -----
type NoTrailingSpaces = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]
// ----- no-undef -----
type NoUndef = []|[{
  typeof?: boolean
}]
// ----- no-underscore-dangle -----
type NoUnderscoreDangle = []|[{
  allow?: string[]
  allowAfterThis?: boolean
  allowAfterSuper?: boolean
  allowAfterThisConstructor?: boolean
  enforceInMethodNames?: boolean
  allowFunctionParams?: boolean
  enforceInClassFields?: boolean
  allowInArrayDestructuring?: boolean
  allowInObjectDestructuring?: boolean
}]
// ----- no-unneeded-ternary -----
type NoUnneededTernary = []|[{
  defaultAssignment?: boolean
}]
// ----- no-unreachable-loop -----
type NoUnreachableLoop = []|[{
  ignore?: ("WhileStatement" | "DoWhileStatement" | "ForStatement" | "ForInStatement" | "ForOfStatement")[]
}]
// ----- no-unsafe-negation -----
type NoUnsafeNegation = []|[{
  enforceForOrderingRelations?: boolean
}]
// ----- no-unsafe-optional-chaining -----
type NoUnsafeOptionalChaining = []|[{
  disallowArithmeticOperators?: boolean
}]
// ----- no-unused-expressions -----
type NoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
}]
// ----- no-unused-vars -----
type NoUnusedVars = []|[(("all" | "local") | {
  vars?: ("all" | "local")
  varsIgnorePattern?: string
  args?: ("all" | "after-used" | "none")
  ignoreRestSiblings?: boolean
  argsIgnorePattern?: string
  caughtErrors?: ("all" | "none")
  caughtErrorsIgnorePattern?: string
  destructuredArrayIgnorePattern?: string
  ignoreClassWithStaticInitBlock?: boolean
  reportUsedIgnorePattern?: boolean
})]
// ----- no-use-before-define -----
type NoUseBeforeDefine = []|[("nofunc" | {
  functions?: boolean
  classes?: boolean
  variables?: boolean
  allowNamedExports?: boolean
})]
// ----- no-useless-computed-key -----
type NoUselessComputedKey = []|[{
  enforceForClassMembers?: boolean
}]
// ----- no-useless-rename -----
type NoUselessRename = []|[{
  ignoreDestructuring?: boolean
  ignoreImport?: boolean
  ignoreExport?: boolean
}]
// ----- no-void -----
type NoVoid = []|[{
  allowAsStatement?: boolean
}]
// ----- no-warning-comments -----
type NoWarningComments = []|[{
  terms?: string[]
  location?: ("start" | "anywhere")
  
  decoration?: [string, ...(string)[]]
}]
// ----- node/callback-return -----
type NodeCallbackReturn = []|[string[]]
// ----- node/exports-style -----
type NodeExportsStyle = []|[("module.exports" | "exports")]|[("module.exports" | "exports"), {
  allowBatchAssign?: boolean
}]
// ----- node/file-extension-in-import -----
type NodeFileExtensionInImport = []|[("always" | "never")]|[("always" | "never"), {
  [k: string]: ("always" | "never") | undefined
}]
// ----- node/handle-callback-err -----
type NodeHandleCallbackErr = []|[string]
// ----- node/hashbang -----
type NodeHashbang = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  ignoreUnpublished?: boolean
  additionalExecutables?: string[]
  executableMap?: {
    [k: string]: string
  }
}]
// ----- node/no-deprecated-api -----
type NodeNoDeprecatedApi = []|[{
  version?: string
  ignoreModuleItems?: ("_linklist" | "_stream_wrap" | "async_hooks.currentId" | "async_hooks.triggerId" | "buffer.Buffer()" | "new buffer.Buffer()" | "buffer.SlowBuffer" | "constants" | "crypto._toBuf" | "crypto.Credentials" | "crypto.DEFAULT_ENCODING" | "crypto.createCipher" | "crypto.createCredentials" | "crypto.createDecipher" | "crypto.fips" | "crypto.prng" | "crypto.pseudoRandomBytes" | "crypto.rng" | "domain" | "events.EventEmitter.listenerCount" | "events.listenerCount" | "freelist" | "fs.SyncWriteStream" | "fs.exists" | "fs.lchmod" | "fs.lchmodSync" | "http.createClient" | "module.Module.createRequireFromPath" | "module.Module.requireRepl" | "module.Module._debug" | "module.createRequireFromPath" | "module.requireRepl" | "module._debug" | "net._setSimultaneousAccepts" | "os.getNetworkInterfaces" | "os.tmpDir" | "path._makeLong" | "process.EventEmitter" | "process.assert" | "process.binding" | "process.env.NODE_REPL_HISTORY_FILE" | "process.report.triggerReport" | "punycode" | "readline.codePointAt" | "readline.getStringWidth" | "readline.isFullWidthCodePoint" | "readline.stripVTControlCharacters" | "repl.REPLServer" | "repl.Recoverable" | "repl.REPL_MODE_MAGIC" | "safe-buffer.Buffer()" | "new safe-buffer.Buffer()" | "safe-buffer.SlowBuffer" | "sys" | "timers.enroll" | "timers.unenroll" | "tls.CleartextStream" | "tls.CryptoStream" | "tls.SecurePair" | "tls.convertNPNProtocols" | "tls.createSecurePair" | "tls.parseCertString" | "tty.setRawMode" | "url.parse" | "url.resolve" | "util.debug" | "util.error" | "util.isArray" | "util.isBoolean" | "util.isBuffer" | "util.isDate" | "util.isError" | "util.isFunction" | "util.isNull" | "util.isNullOrUndefined" | "util.isNumber" | "util.isObject" | "util.isPrimitive" | "util.isRegExp" | "util.isString" | "util.isSymbol" | "util.isUndefined" | "util.log" | "util.print" | "util.pump" | "util.puts" | "util._extend" | "vm.runInDebugContext" | "zlib.BrotliCompress()" | "zlib.BrotliDecompress()" | "zlib.Deflate()" | "zlib.DeflateRaw()" | "zlib.Gunzip()" | "zlib.Gzip()" | "zlib.Inflate()" | "zlib.InflateRaw()" | "zlib.Unzip()")[]
  ignoreGlobalItems?: ("Buffer()" | "new Buffer()" | "COUNTER_NET_SERVER_CONNECTION" | "COUNTER_NET_SERVER_CONNECTION_CLOSE" | "COUNTER_HTTP_SERVER_REQUEST" | "COUNTER_HTTP_SERVER_RESPONSE" | "COUNTER_HTTP_CLIENT_REQUEST" | "COUNTER_HTTP_CLIENT_RESPONSE" | "GLOBAL" | "Intl.v8BreakIterator" | "require.extensions" | "root" | "process.EventEmitter" | "process.assert" | "process.binding" | "process.env.NODE_REPL_HISTORY_FILE" | "process.report.triggerReport")[]
  ignoreIndirectDependencies?: boolean
}]
// ----- node/no-extraneous-import -----
type NodeNoExtraneousImport = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
}]
// ----- node/no-extraneous-require -----
type NodeNoExtraneousRequire = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
}]
// ----- node/no-hide-core-modules -----
type NodeNoHideCoreModules = []|[{
  allow?: ("assert" | "buffer" | "child_process" | "cluster" | "console" | "constants" | "crypto" | "dgram" | "dns" | "events" | "fs" | "http" | "https" | "module" | "net" | "os" | "path" | "querystring" | "readline" | "repl" | "stream" | "string_decoder" | "timers" | "tls" | "tty" | "url" | "util" | "vm" | "zlib")[]
  ignoreDirectDependencies?: boolean
  ignoreIndirectDependencies?: boolean
}]
// ----- node/no-missing-import -----
type NodeNoMissingImport = []|[{
  allowModules?: string[]
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
  ignoreTypeImport?: boolean
  tsconfigPath?: string
  typescriptExtensionMap?: (unknown[][] | ("react" | "react-jsx" | "react-jsxdev" | "react-native" | "preserve"))
}]
// ----- node/no-missing-require -----
type NodeNoMissingRequire = []|[{
  allowModules?: string[]
  tryExtensions?: string[]
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  typescriptExtensionMap?: (unknown[][] | ("react" | "react-jsx" | "react-jsxdev" | "react-native" | "preserve"))
  tsconfigPath?: string
}]
// ----- node/no-mixed-requires -----
type NodeNoMixedRequires = []|[(boolean | {
  grouping?: boolean
  allowCall?: boolean
})]
// ----- node/no-process-env -----
type NodeNoProcessEnv = []|[{
  allowedVariables?: string[]
}]
// ----- node/no-restricted-import -----
type NodeNoRestrictedImport = []|[(string | {
  name: (string | string[])
  message?: string
})[]]
// ----- node/no-restricted-require -----
type NodeNoRestrictedRequire = []|[(string | {
  name: (string | string[])
  message?: string
})[]]
// ----- node/no-sync -----
type NodeNoSync = []|[{
  allowAtRootLevel?: boolean
  ignores?: string[]
}]
// ----- node/no-unpublished-bin -----
type NodeNoUnpublishedBin = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  [k: string]: unknown | undefined
}]
// ----- node/no-unpublished-import -----
type NodeNoUnpublishedImport = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  ignoreTypeImport?: boolean
  ignorePrivate?: boolean
}]
// ----- node/no-unpublished-require -----
type NodeNoUnpublishedRequire = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
  ignorePrivate?: boolean
}]
// ----- node/no-unsupported-features/es-builtins -----
type NodeNoUnsupportedFeaturesEsBuiltins = []|[{
  version?: string
  ignores?: ("AggregateError" | "Array" | "Array.from" | "Array.isArray" | "Array.length" | "Array.of" | "Array.toLocaleString" | "ArrayBuffer" | "ArrayBuffer.isView" | "Atomics" | "Atomics.add" | "Atomics.and" | "Atomics.compareExchange" | "Atomics.exchange" | "Atomics.isLockFree" | "Atomics.load" | "Atomics.notify" | "Atomics.or" | "Atomics.store" | "Atomics.sub" | "Atomics.wait" | "Atomics.waitAsync" | "Atomics.xor" | "BigInt" | "BigInt.asIntN" | "BigInt.asUintN" | "BigInt64Array" | "BigInt64Array.BYTES_PER_ELEMENT" | "BigInt64Array.from" | "BigInt64Array.name" | "BigInt64Array.of" | "BigUint64Array" | "BigUint64Array.BYTES_PER_ELEMENT" | "BigUint64Array.from" | "BigUint64Array.name" | "BigUint64Array.of" | "Boolean" | "DataView" | "Date" | "Date.UTC" | "Date.now" | "Date.parse" | "Date.toLocaleDateString" | "Date.toLocaleString" | "Date.toLocaleTimeString" | "Error" | "Error.cause" | "EvalError" | "FinalizationRegistry" | "Float32Array" | "Float32Array.BYTES_PER_ELEMENT" | "Float32Array.from" | "Float32Array.name" | "Float32Array.of" | "Float64Array" | "Float64Array.BYTES_PER_ELEMENT" | "Float64Array.from" | "Float64Array.name" | "Float64Array.of" | "Function" | "Function.length" | "Function.name" | "Infinity" | "Int16Array" | "Int16Array.BYTES_PER_ELEMENT" | "Int16Array.from" | "Int16Array.name" | "Int16Array.of" | "Int32Array" | "Int32Array.BYTES_PER_ELEMENT" | "Int32Array.from" | "Int32Array.name" | "Int32Array.of" | "Int8Array" | "Int8Array.BYTES_PER_ELEMENT" | "Int8Array.from" | "Int8Array.name" | "Int8Array.of" | "Intl" | "Intl.Collator" | "Intl.DateTimeFormat" | "Intl.DisplayNames" | "Intl.ListFormat" | "Intl.Locale" | "Intl.NumberFormat" | "Intl.PluralRules" | "Intl.RelativeTimeFormat" | "Intl.Segmenter" | "Intl.Segments" | "Intl.getCanonicalLocales" | "Intl.supportedValuesOf" | "JSON" | "JSON.parse" | "JSON.stringify" | "Map" | "Map.groupBy" | "Math" | "Math.E" | "Math.LN10" | "Math.LN2" | "Math.LOG10E" | "Math.LOG2E" | "Math.PI" | "Math.SQRT1_2" | "Math.SQRT2" | "Math.abs" | "Math.acos" | "Math.acosh" | "Math.asin" | "Math.asinh" | "Math.atan" | "Math.atan2" | "Math.atanh" | "Math.cbrt" | "Math.ceil" | "Math.clz32" | "Math.cos" | "Math.cosh" | "Math.exp" | "Math.expm1" | "Math.floor" | "Math.fround" | "Math.hypot" | "Math.imul" | "Math.log" | "Math.log10" | "Math.log1p" | "Math.log2" | "Math.max" | "Math.min" | "Math.pow" | "Math.random" | "Math.round" | "Math.sign" | "Math.sin" | "Math.sinh" | "Math.sqrt" | "Math.tan" | "Math.tanh" | "Math.trunc" | "NaN" | "Number.EPSILON" | "Number.MAX_SAFE_INTEGER" | "Number.MAX_VALUE" | "Number.MIN_SAFE_INTEGER" | "Number.MIN_VALUE" | "Number.NEGATIVE_INFINITY" | "Number.NaN" | "Number.POSITIVE_INFINITY" | "Number.isFinite" | "Number.isInteger" | "Number.isNaN" | "Number.isSafeInteger" | "Number.parseFloat" | "Number.parseInt" | "Number.toLocaleString" | "Object.assign" | "Object.create" | "Object.defineGetter" | "Object.defineProperties" | "Object.defineProperty" | "Object.defineSetter" | "Object.entries" | "Object.freeze" | "Object.fromEntries" | "Object.getOwnPropertyDescriptor" | "Object.getOwnPropertyDescriptors" | "Object.getOwnPropertyNames" | "Object.getOwnPropertySymbols" | "Object.getPrototypeOf" | "Object.groupBy" | "Object.hasOwn" | "Object.is" | "Object.isExtensible" | "Object.isFrozen" | "Object.isSealed" | "Object.keys" | "Object.lookupGetter" | "Object.lookupSetter" | "Object.preventExtensions" | "Object.proto" | "Object.seal" | "Object.setPrototypeOf" | "Object.values" | "Promise" | "Promise.all" | "Promise.allSettled" | "Promise.any" | "Promise.race" | "Promise.reject" | "Promise.resolve" | "Proxy" | "Proxy.revocable" | "RangeError" | "ReferenceError" | "Reflect" | "Reflect.apply" | "Reflect.construct" | "Reflect.defineProperty" | "Reflect.deleteProperty" | "Reflect.get" | "Reflect.getOwnPropertyDescriptor" | "Reflect.getPrototypeOf" | "Reflect.has" | "Reflect.isExtensible" | "Reflect.ownKeys" | "Reflect.preventExtensions" | "Reflect.set" | "Reflect.setPrototypeOf" | "RegExp" | "RegExp.dotAll" | "RegExp.hasIndices" | "RegExp.input" | "RegExp.lastIndex" | "RegExp.lastMatch" | "RegExp.lastParen" | "RegExp.leftContext" | "RegExp.n" | "RegExp.rightContext" | "Set" | "SharedArrayBuffer" | "String" | "String.fromCharCode" | "String.fromCodePoint" | "String.length" | "String.localeCompare" | "String.raw" | "String.toLocaleLowerCase" | "String.toLocaleUpperCase" | "Symbol" | "Symbol.asyncIterator" | "Symbol.for" | "Symbol.hasInstance" | "Symbol.isConcatSpreadable" | "Symbol.iterator" | "Symbol.keyFor" | "Symbol.match" | "Symbol.matchAll" | "Symbol.replace" | "Symbol.search" | "Symbol.species" | "Symbol.split" | "Symbol.toPrimitive" | "Symbol.toStringTag" | "Symbol.unscopables" | "SyntaxError" | "TypeError" | "URIError" | "Uint16Array" | "Uint16Array.BYTES_PER_ELEMENT" | "Uint16Array.from" | "Uint16Array.name" | "Uint16Array.of" | "Uint32Array" | "Uint32Array.BYTES_PER_ELEMENT" | "Uint32Array.from" | "Uint32Array.name" | "Uint32Array.of" | "Uint8Array" | "Uint8Array.BYTES_PER_ELEMENT" | "Uint8Array.from" | "Uint8Array.name" | "Uint8Array.of" | "Uint8ClampedArray" | "Uint8ClampedArray.BYTES_PER_ELEMENT" | "Uint8ClampedArray.from" | "Uint8ClampedArray.name" | "Uint8ClampedArray.of" | "WeakMap" | "WeakRef" | "WeakSet" | "decodeURI" | "decodeURIComponent" | "encodeURI" | "encodeURIComponent" | "escape" | "eval" | "globalThis" | "isFinite" | "isNaN" | "parseFloat" | "parseInt" | "unescape")[]
}]
// ----- node/no-unsupported-features/es-syntax -----
type NodeNoUnsupportedFeaturesEsSyntax = []|[{
  version?: string
  ignores?: ("no-accessor-properties" | "accessor-properties" | "accessorProperties" | "no-arbitrary-module-namespace-names" | "arbitrary-module-namespace-names" | "arbitraryModuleNamespaceNames" | "no-array-from" | "array-from" | "arrayFrom" | "no-array-isarray" | "array-isarray" | "arrayIsarray" | "no-array-of" | "array-of" | "arrayOf" | "no-array-prototype-copywithin" | "array-prototype-copywithin" | "arrayPrototypeCopywithin" | "no-array-prototype-entries" | "array-prototype-entries" | "arrayPrototypeEntries" | "no-array-prototype-every" | "array-prototype-every" | "arrayPrototypeEvery" | "no-array-prototype-fill" | "array-prototype-fill" | "arrayPrototypeFill" | "no-array-prototype-filter" | "array-prototype-filter" | "arrayPrototypeFilter" | "no-array-prototype-find" | "array-prototype-find" | "arrayPrototypeFind" | "no-array-prototype-findindex" | "array-prototype-findindex" | "arrayPrototypeFindindex" | "no-array-prototype-findlast-findlastindex" | "array-prototype-findlast-findlastindex" | "arrayPrototypeFindlastFindlastindex" | "no-array-prototype-flat" | "array-prototype-flat" | "arrayPrototypeFlat" | "no-array-prototype-foreach" | "array-prototype-foreach" | "arrayPrototypeForeach" | "no-array-prototype-includes" | "array-prototype-includes" | "arrayPrototypeIncludes" | "no-array-prototype-indexof" | "array-prototype-indexof" | "arrayPrototypeIndexof" | "no-array-prototype-keys" | "array-prototype-keys" | "arrayPrototypeKeys" | "no-array-prototype-lastindexof" | "array-prototype-lastindexof" | "arrayPrototypeLastindexof" | "no-array-prototype-map" | "array-prototype-map" | "arrayPrototypeMap" | "no-array-prototype-reduce" | "array-prototype-reduce" | "arrayPrototypeReduce" | "no-array-prototype-reduceright" | "array-prototype-reduceright" | "arrayPrototypeReduceright" | "no-array-prototype-some" | "array-prototype-some" | "arrayPrototypeSome" | "no-array-prototype-toreversed" | "array-prototype-toreversed" | "arrayPrototypeToreversed" | "no-array-prototype-tosorted" | "array-prototype-tosorted" | "arrayPrototypeTosorted" | "no-array-prototype-tospliced" | "array-prototype-tospliced" | "arrayPrototypeTospliced" | "no-array-prototype-values" | "array-prototype-values" | "arrayPrototypeValues" | "no-array-prototype-with" | "array-prototype-with" | "arrayPrototypeWith" | "no-array-string-prototype-at" | "array-string-prototype-at" | "arrayStringPrototypeAt" | "no-arrow-functions" | "arrow-functions" | "arrowFunctions" | "no-async-functions" | "async-functions" | "asyncFunctions" | "no-async-iteration" | "async-iteration" | "asyncIteration" | "no-atomics-waitasync" | "atomics-waitasync" | "atomicsWaitasync" | "no-atomics" | "atomics" | "no-bigint" | "bigint" | "no-binary-numeric-literals" | "binary-numeric-literals" | "binaryNumericLiterals" | "no-block-scoped-functions" | "block-scoped-functions" | "blockScopedFunctions" | "no-block-scoped-variables" | "block-scoped-variables" | "blockScopedVariables" | "no-class-fields" | "class-fields" | "classFields" | "no-class-static-block" | "class-static-block" | "classStaticBlock" | "no-classes" | "classes" | "no-computed-properties" | "computed-properties" | "computedProperties" | "no-date-now" | "date-now" | "dateNow" | "no-date-prototype-getyear-setyear" | "date-prototype-getyear-setyear" | "datePrototypeGetyearSetyear" | "no-date-prototype-togmtstring" | "date-prototype-togmtstring" | "datePrototypeTogmtstring" | "no-default-parameters" | "default-parameters" | "defaultParameters" | "no-destructuring" | "destructuring" | "no-dynamic-import" | "dynamic-import" | "dynamicImport" | "no-error-cause" | "error-cause" | "errorCause" | "no-escape-unescape" | "escape-unescape" | "escapeUnescape" | "no-exponential-operators" | "exponential-operators" | "exponentialOperators" | "no-export-ns-from" | "export-ns-from" | "exportNsFrom" | "no-for-of-loops" | "for-of-loops" | "forOfLoops" | "no-function-declarations-in-if-statement-clauses-without-block" | "function-declarations-in-if-statement-clauses-without-block" | "functionDeclarationsInIfStatementClausesWithoutBlock" | "no-function-prototype-bind" | "function-prototype-bind" | "functionPrototypeBind" | "no-generators" | "generators" | "no-global-this" | "global-this" | "globalThis" | "no-hashbang" | "hashbang" | "no-import-meta" | "import-meta" | "importMeta" | "no-initializers-in-for-in" | "initializers-in-for-in" | "initializersInForIn" | "no-intl-datetimeformat-prototype-formatrange" | "intl-datetimeformat-prototype-formatrange" | "intlDatetimeformatPrototypeFormatrange" | "no-intl-datetimeformat-prototype-formattoparts" | "intl-datetimeformat-prototype-formattoparts" | "intlDatetimeformatPrototypeFormattoparts" | "no-intl-displaynames" | "intl-displaynames" | "intlDisplaynames" | "no-intl-getcanonicallocales" | "intl-getcanonicallocales" | "intlGetcanonicallocales" | "no-intl-listformat" | "intl-listformat" | "intlListformat" | "no-intl-locale" | "intl-locale" | "intlLocale" | "no-intl-numberformat-prototype-formatrange" | "intl-numberformat-prototype-formatrange" | "intlNumberformatPrototypeFormatrange" | "no-intl-numberformat-prototype-formatrangetoparts" | "intl-numberformat-prototype-formatrangetoparts" | "intlNumberformatPrototypeFormatrangetoparts" | "no-intl-numberformat-prototype-formattoparts" | "intl-numberformat-prototype-formattoparts" | "intlNumberformatPrototypeFormattoparts" | "no-intl-pluralrules-prototype-selectrange" | "intl-pluralrules-prototype-selectrange" | "intlPluralrulesPrototypeSelectrange" | "no-intl-pluralrules" | "intl-pluralrules" | "intlPluralrules" | "no-intl-relativetimeformat" | "intl-relativetimeformat" | "intlRelativetimeformat" | "no-intl-segmenter" | "intl-segmenter" | "intlSegmenter" | "no-intl-supportedvaluesof" | "intl-supportedvaluesof" | "intlSupportedvaluesof" | "no-json-superset" | "json-superset" | "jsonSuperset" | "no-json" | "json" | "no-keyword-properties" | "keyword-properties" | "keywordProperties" | "no-labelled-function-declarations" | "labelled-function-declarations" | "labelledFunctionDeclarations" | "no-legacy-object-prototype-accessor-methods" | "legacy-object-prototype-accessor-methods" | "legacyObjectPrototypeAccessorMethods" | "no-logical-assignment-operators" | "logical-assignment-operators" | "logicalAssignmentOperators" | "no-malformed-template-literals" | "malformed-template-literals" | "malformedTemplateLiterals" | "no-map" | "map" | "no-math-acosh" | "math-acosh" | "mathAcosh" | "no-math-asinh" | "math-asinh" | "mathAsinh" | "no-math-atanh" | "math-atanh" | "mathAtanh" | "no-math-cbrt" | "math-cbrt" | "mathCbrt" | "no-math-clz32" | "math-clz32" | "mathClz32" | "no-math-cosh" | "math-cosh" | "mathCosh" | "no-math-expm1" | "math-expm1" | "mathExpm1" | "no-math-fround" | "math-fround" | "mathFround" | "no-math-hypot" | "math-hypot" | "mathHypot" | "no-math-imul" | "math-imul" | "mathImul" | "no-math-log10" | "math-log10" | "mathLog10" | "no-math-log1p" | "math-log1p" | "mathLog1p" | "no-math-log2" | "math-log2" | "mathLog2" | "no-math-sign" | "math-sign" | "mathSign" | "no-math-sinh" | "math-sinh" | "mathSinh" | "no-math-tanh" | "math-tanh" | "mathTanh" | "no-math-trunc" | "math-trunc" | "mathTrunc" | "no-modules" | "modules" | "no-new-target" | "new-target" | "newTarget" | "new.target" | "no-nullish-coalescing-operators" | "nullish-coalescing-operators" | "nullishCoalescingOperators" | "no-number-epsilon" | "number-epsilon" | "numberEpsilon" | "no-number-isfinite" | "number-isfinite" | "numberIsfinite" | "no-number-isinteger" | "number-isinteger" | "numberIsinteger" | "no-number-isnan" | "number-isnan" | "numberIsnan" | "no-number-issafeinteger" | "number-issafeinteger" | "numberIssafeinteger" | "no-number-maxsafeinteger" | "number-maxsafeinteger" | "numberMaxsafeinteger" | "no-number-minsafeinteger" | "number-minsafeinteger" | "numberMinsafeinteger" | "no-number-parsefloat" | "number-parsefloat" | "numberParsefloat" | "no-number-parseint" | "number-parseint" | "numberParseint" | "no-numeric-separators" | "numeric-separators" | "numericSeparators" | "no-object-assign" | "object-assign" | "objectAssign" | "no-object-create" | "object-create" | "objectCreate" | "no-object-defineproperties" | "object-defineproperties" | "objectDefineproperties" | "no-object-defineproperty" | "object-defineproperty" | "objectDefineproperty" | "no-object-entries" | "object-entries" | "objectEntries" | "no-object-freeze" | "object-freeze" | "objectFreeze" | "no-object-fromentries" | "object-fromentries" | "objectFromentries" | "no-object-getownpropertydescriptor" | "object-getownpropertydescriptor" | "objectGetownpropertydescriptor" | "no-object-getownpropertydescriptors" | "object-getownpropertydescriptors" | "objectGetownpropertydescriptors" | "no-object-getownpropertynames" | "object-getownpropertynames" | "objectGetownpropertynames" | "no-object-getownpropertysymbols" | "object-getownpropertysymbols" | "objectGetownpropertysymbols" | "no-object-getprototypeof" | "object-getprototypeof" | "objectGetprototypeof" | "no-object-hasown" | "object-hasown" | "objectHasown" | "no-object-is" | "object-is" | "objectIs" | "no-object-isextensible" | "object-isextensible" | "objectIsextensible" | "no-object-isfrozen" | "object-isfrozen" | "objectIsfrozen" | "no-object-issealed" | "object-issealed" | "objectIssealed" | "no-object-keys" | "object-keys" | "objectKeys" | "no-object-map-groupby" | "object-map-groupby" | "objectMapGroupby" | "no-object-preventextensions" | "object-preventextensions" | "objectPreventextensions" | "no-object-seal" | "object-seal" | "objectSeal" | "no-object-setprototypeof" | "object-setprototypeof" | "objectSetprototypeof" | "no-object-super-properties" | "object-super-properties" | "objectSuperProperties" | "no-object-values" | "object-values" | "objectValues" | "no-octal-numeric-literals" | "octal-numeric-literals" | "octalNumericLiterals" | "no-optional-catch-binding" | "optional-catch-binding" | "optionalCatchBinding" | "no-optional-chaining" | "optional-chaining" | "optionalChaining" | "no-private-in" | "private-in" | "privateIn" | "no-promise-all-settled" | "promise-all-settled" | "promiseAllSettled" | "no-promise-any" | "promise-any" | "promiseAny" | "no-promise-prototype-finally" | "promise-prototype-finally" | "promisePrototypeFinally" | "no-promise-withresolvers" | "promise-withresolvers" | "promiseWithresolvers" | "no-promise" | "promise" | "no-property-shorthands" | "property-shorthands" | "propertyShorthands" | "no-proxy" | "proxy" | "no-reflect" | "reflect" | "no-regexp-d-flag" | "regexp-d-flag" | "regexpDFlag" | "no-regexp-lookbehind-assertions" | "regexp-lookbehind-assertions" | "regexpLookbehindAssertions" | "regexpLookbehind" | "no-regexp-named-capture-groups" | "regexp-named-capture-groups" | "regexpNamedCaptureGroups" | "no-regexp-prototype-compile" | "regexp-prototype-compile" | "regexpPrototypeCompile" | "no-regexp-prototype-flags" | "regexp-prototype-flags" | "regexpPrototypeFlags" | "no-regexp-s-flag" | "regexp-s-flag" | "regexpSFlag" | "regexpS" | "no-regexp-u-flag" | "regexp-u-flag" | "regexpUFlag" | "regexpU" | "no-regexp-unicode-property-escapes-2019" | "regexp-unicode-property-escapes-2019" | "regexpUnicodePropertyEscapes2019" | "no-regexp-unicode-property-escapes-2020" | "regexp-unicode-property-escapes-2020" | "regexpUnicodePropertyEscapes2020" | "no-regexp-unicode-property-escapes-2021" | "regexp-unicode-property-escapes-2021" | "regexpUnicodePropertyEscapes2021" | "no-regexp-unicode-property-escapes-2022" | "regexp-unicode-property-escapes-2022" | "regexpUnicodePropertyEscapes2022" | "no-regexp-unicode-property-escapes-2023" | "regexp-unicode-property-escapes-2023" | "regexpUnicodePropertyEscapes2023" | "no-regexp-unicode-property-escapes" | "regexp-unicode-property-escapes" | "regexpUnicodePropertyEscapes" | "regexpUnicodeProperties" | "no-regexp-v-flag" | "regexp-v-flag" | "regexpVFlag" | "no-regexp-y-flag" | "regexp-y-flag" | "regexpYFlag" | "regexpY" | "no-resizable-and-growable-arraybuffers" | "resizable-and-growable-arraybuffers" | "resizableAndGrowableArraybuffers" | "no-rest-parameters" | "rest-parameters" | "restParameters" | "no-rest-spread-properties" | "rest-spread-properties" | "restSpreadProperties" | "no-set" | "set" | "no-shadow-catch-param" | "shadow-catch-param" | "shadowCatchParam" | "no-shared-array-buffer" | "shared-array-buffer" | "sharedArrayBuffer" | "no-spread-elements" | "spread-elements" | "spreadElements" | "no-string-create-html-methods" | "string-create-html-methods" | "stringCreateHtmlMethods" | "no-string-fromcodepoint" | "string-fromcodepoint" | "stringFromcodepoint" | "no-string-prototype-codepointat" | "string-prototype-codepointat" | "stringPrototypeCodepointat" | "no-string-prototype-endswith" | "string-prototype-endswith" | "stringPrototypeEndswith" | "no-string-prototype-includes" | "string-prototype-includes" | "stringPrototypeIncludes" | "no-string-prototype-iswellformed-towellformed" | "string-prototype-iswellformed-towellformed" | "stringPrototypeIswellformedTowellformed" | "no-string-prototype-matchall" | "string-prototype-matchall" | "stringPrototypeMatchall" | "no-string-prototype-normalize" | "string-prototype-normalize" | "stringPrototypeNormalize" | "no-string-prototype-padstart-padend" | "string-prototype-padstart-padend" | "stringPrototypePadstartPadend" | "no-string-prototype-repeat" | "string-prototype-repeat" | "stringPrototypeRepeat" | "no-string-prototype-replaceall" | "string-prototype-replaceall" | "stringPrototypeReplaceall" | "no-string-prototype-startswith" | "string-prototype-startswith" | "stringPrototypeStartswith" | "no-string-prototype-substr" | "string-prototype-substr" | "stringPrototypeSubstr" | "no-string-prototype-trim" | "string-prototype-trim" | "stringPrototypeTrim" | "no-string-prototype-trimleft-trimright" | "string-prototype-trimleft-trimright" | "stringPrototypeTrimleftTrimright" | "no-string-prototype-trimstart-trimend" | "string-prototype-trimstart-trimend" | "stringPrototypeTrimstartTrimend" | "no-string-raw" | "string-raw" | "stringRaw" | "no-subclassing-builtins" | "subclassing-builtins" | "subclassingBuiltins" | "no-symbol-prototype-description" | "symbol-prototype-description" | "symbolPrototypeDescription" | "no-symbol" | "symbol" | "no-template-literals" | "template-literals" | "templateLiterals" | "no-top-level-await" | "top-level-await" | "topLevelAwait" | "no-trailing-commas" | "trailing-commas" | "trailingCommas" | "no-trailing-function-commas" | "trailing-function-commas" | "trailingFunctionCommas" | "trailingCommasInFunctions" | "no-typed-arrays" | "typed-arrays" | "typedArrays" | "no-unicode-codepoint-escapes" | "unicode-codepoint-escapes" | "unicodeCodepointEscapes" | "unicodeCodePointEscapes" | "no-weak-map" | "weak-map" | "weakMap" | "no-weak-set" | "weak-set" | "weakSet" | "no-weakrefs" | "weakrefs")[]
}]
// ----- node/no-unsupported-features/node-builtins -----
type NodeNoUnsupportedFeaturesNodeBuiltins = []|[{
  version?: string
  allowExperimental?: boolean
  ignores?: ("__filename" | "__dirname" | "require" | "require.cache" | "require.extensions" | "require.main" | "require.resolve" | "require.resolve.paths" | "module" | "module.children" | "module.exports" | "module.filename" | "module.id" | "module.isPreloading" | "module.loaded" | "module.parent" | "module.path" | "module.paths" | "module.require" | "exports" | "AbortController" | "AbortSignal" | "AbortSignal.abort" | "AbortSignal.timeout" | "AbortSignal.any" | "DOMException" | "FormData" | "Headers" | "MessageEvent" | "Navigator" | "Request" | "Response" | "WebAssembly" | "WebSocket" | "fetch" | "global" | "queueMicrotask" | "navigator" | "navigator.hardwareConcurrency" | "navigator.language" | "navigator.languages" | "navigator.platform" | "navigator.userAgent" | "structuredClone" | "localStorage" | "sessionStorage" | "Storage" | "Blob" | "new Buffer()" | "Buffer" | "Buffer.alloc" | "Buffer.allocUnsafe" | "Buffer.allocUnsafeSlow" | "Buffer.byteLength" | "Buffer.compare" | "Buffer.concat" | "Buffer.copyBytesFrom" | "Buffer.from" | "Buffer.isBuffer" | "Buffer.isEncoding" | "File" | "atob" | "btoa" | "console" | "console.profile" | "console.profileEnd" | "console.timeStamp" | "console.Console" | "console.assert" | "console.clear" | "console.count" | "console.countReset" | "console.debug" | "console.dir" | "console.dirxml" | "console.error" | "console.group" | "console.groupCollapsed" | "console.groupEnd" | "console.info" | "console.log" | "console.table" | "console.time" | "console.timeEnd" | "console.timeLog" | "console.trace" | "console.warn" | "crypto" | "crypto.subtle" | "crypto.subtle.decrypt" | "crypto.subtle.deriveBits" | "crypto.subtle.deriveKey" | "crypto.subtle.digest" | "crypto.subtle.encrypt" | "crypto.subtle.exportKey" | "crypto.subtle.generateKey" | "crypto.subtle.importKey" | "crypto.subtle.sign" | "crypto.subtle.unwrapKey" | "crypto.subtle.verify" | "crypto.subtle.wrapKey" | "crypto.getRandomValues" | "crypto.randomUUID" | "Crypto" | "CryptoKey" | "SubtleCrypto" | "CloseEvent" | "CustomEvent" | "Event" | "EventSource" | "EventTarget" | "PerformanceEntry" | "PerformanceMark" | "PerformanceMeasure" | "PerformanceObserver" | "PerformanceObserverEntryList" | "PerformanceResourceTiming" | "performance" | "performance.clearMarks" | "performance.clearMeasures" | "performance.clearResourceTimings" | "performance.eventLoopUtilization" | "performance.getEntries" | "performance.getEntriesByName" | "performance.getEntriesByType" | "performance.mark" | "performance.markResourceTiming" | "performance.measure" | "performance.nodeTiming" | "performance.nodeTiming.bootstrapComplete" | "performance.nodeTiming.environment" | "performance.nodeTiming.idleTime" | "performance.nodeTiming.loopExit" | "performance.nodeTiming.loopStart" | "performance.nodeTiming.nodeStart" | "performance.nodeTiming.uvMetricsInfo" | "performance.nodeTiming.v8Start" | "performance.now" | "performance.onresourcetimingbufferfull" | "performance.setResourceTimingBufferSize" | "performance.timeOrigin" | "performance.timerify" | "performance.toJSON" | "process" | "process.allowedNodeEnvironmentFlags" | "process.availableMemory" | "process.arch" | "process.argv" | "process.argv0" | "process.channel" | "process.config" | "process.connected" | "process.debugPort" | "process.env" | "process.execArgv" | "process.execPath" | "process.exitCode" | "process.features.cached_builtins" | "process.features.debug" | "process.features.inspector" | "process.features.ipv6" | "process.features.require_module" | "process.features.tls" | "process.features.tls_alpn" | "process.features.tls_ocsp" | "process.features.tls_sni" | "process.features.typescript" | "process.features.uv" | "process.finalization.register" | "process.finalization.registerBeforeExit" | "process.finalization.unregister" | "process.getBuiltinModule" | "process.mainModule" | "process.noDeprecation" | "process.permission" | "process.pid" | "process.platform" | "process.ppid" | "process.release" | "process.report" | "process.report.excludeEnv" | "process.sourceMapsEnabled" | "process.stdin" | "process.stdin.isRaw" | "process.stdin.isTTY" | "process.stdin.setRawMode" | "process.stdout" | "process.stdout.clearLine" | "process.stdout.clearScreenDown" | "process.stdout.columns" | "process.stdout.cursorTo" | "process.stdout.getColorDepth" | "process.stdout.getWindowSize" | "process.stdout.hasColors" | "process.stdout.isTTY" | "process.stdout.moveCursor" | "process.stdout.rows" | "process.stderr" | "process.stderr.clearLine" | "process.stderr.clearScreenDown" | "process.stderr.columns" | "process.stderr.cursorTo" | "process.stderr.getColorDepth" | "process.stderr.getWindowSize" | "process.stderr.hasColors" | "process.stderr.isTTY" | "process.stderr.moveCursor" | "process.stderr.rows" | "process.throwDeprecation" | "process.title" | "process.traceDeprecation" | "process.version" | "process.versions" | "process.abort" | "process.chdir" | "process.constrainedMemory" | "process.cpuUsage" | "process.cwd" | "process.disconnect" | "process.dlopen" | "process.emitWarning" | "process.exit" | "process.getActiveResourcesInfo" | "process.getegid" | "process.geteuid" | "process.getgid" | "process.getgroups" | "process.getuid" | "process.hasUncaughtExceptionCaptureCallback" | "process.hrtime" | "process.hrtime.bigint" | "process.initgroups" | "process.kill" | "process.loadEnvFile" | "process.memoryUsage" | "process.rss" | "process.nextTick" | "process.resourceUsage" | "process.send" | "process.setegid" | "process.seteuid" | "process.setgid" | "process.setgroups" | "process.setuid" | "process.setSourceMapsEnabled" | "process.setUncaughtExceptionCaptureCallback" | "process.umask" | "process.uptime" | "ReadableStream" | "ReadableStream.from" | "ReadableStreamDefaultReader" | "ReadableStreamBYOBReader" | "ReadableStreamDefaultController" | "ReadableByteStreamController" | "ReadableStreamBYOBRequest" | "WritableStream" | "WritableStreamDefaultWriter" | "WritableStreamDefaultController" | "TransformStream" | "TransformStreamDefaultController" | "ByteLengthQueuingStrategy" | "CountQueuingStrategy" | "TextEncoderStream" | "TextDecoderStream" | "CompressionStream" | "DecompressionStream" | "setInterval" | "clearInterval" | "setTimeout" | "clearTimeout" | "setImmediate" | "clearImmediate" | "URL" | "URL.canParse" | "URL.createObjectURL" | "URL.revokeObjectURL" | "URLSearchParams" | "TextDecoder" | "TextEncoder" | "BroadcastChannel" | "MessageChannel" | "MessagePort" | "assert" | "assert.assert" | "assert.deepEqual" | "assert.deepStrictEqual" | "assert.doesNotMatch" | "assert.doesNotReject" | "assert.doesNotThrow" | "assert.equal" | "assert.fail" | "assert.ifError" | "assert.match" | "assert.notDeepEqual" | "assert.notDeepStrictEqual" | "assert.notEqual" | "assert.notStrictEqual" | "assert.ok" | "assert.rejects" | "assert.strictEqual" | "assert.throws" | "assert.CallTracker" | "assert.strict" | "assert.strict.assert" | "assert.strict.deepEqual" | "assert.strict.deepStrictEqual" | "assert.strict.doesNotMatch" | "assert.strict.doesNotReject" | "assert.strict.doesNotThrow" | "assert.strict.equal" | "assert.strict.fail" | "assert.strict.ifError" | "assert.strict.match" | "assert.strict.notDeepEqual" | "assert.strict.notDeepStrictEqual" | "assert.strict.notEqual" | "assert.strict.notStrictEqual" | "assert.strict.ok" | "assert.strict.rejects" | "assert.strict.strictEqual" | "assert.strict.throws" | "assert.strict.CallTracker" | "assert/strict" | "assert/strict.assert" | "assert/strict.deepEqual" | "assert/strict.deepStrictEqual" | "assert/strict.doesNotMatch" | "assert/strict.doesNotReject" | "assert/strict.doesNotThrow" | "assert/strict.equal" | "assert/strict.fail" | "assert/strict.ifError" | "assert/strict.match" | "assert/strict.notDeepEqual" | "assert/strict.notDeepStrictEqual" | "assert/strict.notEqual" | "assert/strict.notStrictEqual" | "assert/strict.ok" | "assert/strict.rejects" | "assert/strict.strictEqual" | "assert/strict.throws" | "assert/strict.CallTracker" | "async_hooks" | "async_hooks.createHook" | "async_hooks.executionAsyncResource" | "async_hooks.executionAsyncId" | "async_hooks.triggerAsyncId" | "async_hooks.AsyncLocalStorage" | "async_hooks.AsyncLocalStorage.bind" | "async_hooks.AsyncLocalStorage.snapshot" | "async_hooks.AsyncResource" | "async_hooks.AsyncResource.bind" | "buffer" | "buffer.constants" | "buffer.INSPECT_MAX_BYTES" | "buffer.kMaxLength" | "buffer.kStringMaxLength" | "buffer.atob" | "buffer.btoa" | "buffer.isAscii" | "buffer.isUtf8" | "buffer.resolveObjectURL" | "buffer.transcode" | "buffer.SlowBuffer" | "buffer.Blob" | "new buffer.Buffer()" | "buffer.Buffer" | "buffer.Buffer.alloc" | "buffer.Buffer.allocUnsafe" | "buffer.Buffer.allocUnsafeSlow" | "buffer.Buffer.byteLength" | "buffer.Buffer.compare" | "buffer.Buffer.concat" | "buffer.Buffer.copyBytesFrom" | "buffer.Buffer.from" | "buffer.Buffer.isBuffer" | "buffer.Buffer.isEncoding" | "buffer.File" | "child_process" | "child_process.exec" | "child_process.execFile" | "child_process.fork" | "child_process.spawn" | "child_process.execFileSync" | "child_process.execSync" | "child_process.spawnSync" | "child_process.ChildProcess" | "cluster" | "cluster.isMaster" | "cluster.isPrimary" | "cluster.isWorker" | "cluster.schedulingPolicy" | "cluster.settings" | "cluster.worker" | "cluster.workers" | "cluster.disconnect" | "cluster.fork" | "cluster.setupMaster" | "cluster.setupPrimary" | "cluster.Worker" | "crypto.constants" | "crypto.fips" | "crypto.webcrypto" | "crypto.webcrypto.subtle" | "crypto.webcrypto.subtle.decrypt" | "crypto.webcrypto.subtle.deriveBits" | "crypto.webcrypto.subtle.deriveKey" | "crypto.webcrypto.subtle.digest" | "crypto.webcrypto.subtle.encrypt" | "crypto.webcrypto.subtle.exportKey" | "crypto.webcrypto.subtle.generateKey" | "crypto.webcrypto.subtle.importKey" | "crypto.webcrypto.subtle.sign" | "crypto.webcrypto.subtle.unwrapKey" | "crypto.webcrypto.subtle.verify" | "crypto.webcrypto.subtle.wrapKey" | "crypto.webcrypto.getRandomValues" | "crypto.webcrypto.randomUUID" | "crypto.checkPrime" | "crypto.checkPrimeSync" | "crypto.createCipher" | "crypto.createCipheriv" | "crypto.createDecipher" | "crypto.createDecipheriv" | "crypto.createDiffieHellman" | "crypto.createDiffieHellmanGroup" | "crypto.createECDH" | "crypto.createHash" | "crypto.createHmac" | "crypto.createPrivateKey" | "crypto.createPublicKey" | "crypto.createSecretKey" | "crypto.createSign" | "crypto.createVerify" | "crypto.diffieHellman" | "crypto.generateKey" | "crypto.generateKeyPair" | "crypto.generateKeyPairSync" | "crypto.generateKeySync" | "crypto.generatePrime" | "crypto.generatePrimeSync" | "crypto.getCipherInfo" | "crypto.getCiphers" | "crypto.getCurves" | "crypto.getDiffieHellman" | "crypto.getFips" | "crypto.getHashes" | "crypto.hash" | "crypto.hkdf" | "crypto.hkdfSync" | "crypto.pbkdf2" | "crypto.pbkdf2Sync" | "crypto.privateDecrypt" | "crypto.privateEncrypt" | "crypto.publicDecrypt" | "crypto.publicEncrypt" | "crypto.randomBytes" | "crypto.randomFillSync" | "crypto.randomFill" | "crypto.randomInt" | "crypto.scrypt" | "crypto.scryptSync" | "crypto.secureHeapUsed" | "crypto.setEngine" | "crypto.setFips" | "crypto.sign" | "crypto.timingSafeEqual" | "crypto.verify" | "crypto.Certificate" | "crypto.Certificate.exportChallenge" | "crypto.Certificate.exportPublicKey" | "crypto.Certificate.verifySpkac" | "crypto.Cipher" | "crypto.Decipher" | "crypto.DiffieHellman" | "crypto.DiffieHellmanGroup" | "crypto.ECDH" | "crypto.ECDH.convertKey" | "crypto.Hash()" | "new crypto.Hash()" | "crypto.Hash" | "crypto.Hmac()" | "new crypto.Hmac()" | "crypto.Hmac" | "crypto.KeyObject" | "crypto.KeyObject.from" | "crypto.Sign" | "crypto.Verify" | "crypto.X509Certificate" | "dgram" | "dgram.createSocket" | "dgram.Socket" | "diagnostics_channel" | "diagnostics_channel.hasSubscribers" | "diagnostics_channel.channel" | "diagnostics_channel.subscribe" | "diagnostics_channel.unsubscribe" | "diagnostics_channel.tracingChannel" | "diagnostics_channel.Channel" | "diagnostics_channel.TracingChannel" | "dns" | "dns.Resolver" | "dns.getServers" | "dns.lookup" | "dns.lookupService" | "dns.resolve" | "dns.resolve4" | "dns.resolve6" | "dns.resolveAny" | "dns.resolveCname" | "dns.resolveCaa" | "dns.resolveMx" | "dns.resolveNaptr" | "dns.resolveNs" | "dns.resolvePtr" | "dns.resolveSoa" | "dns.resolveSrv" | "dns.resolveTxt" | "dns.reverse" | "dns.setDefaultResultOrder" | "dns.getDefaultResultOrder" | "dns.setServers" | "dns.promises" | "dns.promises.Resolver" | "dns.promises.cancel" | "dns.promises.getServers" | "dns.promises.lookup" | "dns.promises.lookupService" | "dns.promises.resolve" | "dns.promises.resolve4" | "dns.promises.resolve6" | "dns.promises.resolveAny" | "dns.promises.resolveCaa" | "dns.promises.resolveCname" | "dns.promises.resolveMx" | "dns.promises.resolveNaptr" | "dns.promises.resolveNs" | "dns.promises.resolvePtr" | "dns.promises.resolveSoa" | "dns.promises.resolveSrv" | "dns.promises.resolveTxt" | "dns.promises.reverse" | "dns.promises.setDefaultResultOrder" | "dns.promises.getDefaultResultOrder" | "dns.promises.setServers" | "dns/promises" | "dns/promises.Resolver" | "dns/promises.cancel" | "dns/promises.getServers" | "dns/promises.lookup" | "dns/promises.lookupService" | "dns/promises.resolve" | "dns/promises.resolve4" | "dns/promises.resolve6" | "dns/promises.resolveAny" | "dns/promises.resolveCaa" | "dns/promises.resolveCname" | "dns/promises.resolveMx" | "dns/promises.resolveNaptr" | "dns/promises.resolveNs" | "dns/promises.resolvePtr" | "dns/promises.resolveSoa" | "dns/promises.resolveSrv" | "dns/promises.resolveTxt" | "dns/promises.reverse" | "dns/promises.setDefaultResultOrder" | "dns/promises.getDefaultResultOrder" | "dns/promises.setServers" | "domain" | "domain.create" | "domain.Domain" | "events" | "events.Event" | "events.EventTarget" | "events.CustomEvent" | "events.NodeEventTarget" | "events.EventEmitter" | "events.EventEmitter.defaultMaxListeners" | "events.EventEmitter.errorMonitor" | "events.EventEmitter.captureRejections" | "events.EventEmitter.captureRejectionSymbol" | "events.EventEmitter.getEventListeners" | "events.EventEmitter.getMaxListeners" | "events.EventEmitter.once" | "events.EventEmitter.listenerCount" | "events.EventEmitter.on" | "events.EventEmitter.setMaxListeners" | "events.EventEmitter.addAbortListener" | "events.EventEmitterAsyncResource" | "events.EventEmitterAsyncResource.defaultMaxListeners" | "events.EventEmitterAsyncResource.errorMonitor" | "events.EventEmitterAsyncResource.captureRejections" | "events.EventEmitterAsyncResource.captureRejectionSymbol" | "events.EventEmitterAsyncResource.getEventListeners" | "events.EventEmitterAsyncResource.getMaxListeners" | "events.EventEmitterAsyncResource.once" | "events.EventEmitterAsyncResource.listenerCount" | "events.EventEmitterAsyncResource.on" | "events.EventEmitterAsyncResource.setMaxListeners" | "events.EventEmitterAsyncResource.addAbortListener" | "events.defaultMaxListeners" | "events.errorMonitor" | "events.captureRejections" | "events.captureRejectionSymbol" | "events.getEventListeners" | "events.getMaxListeners" | "events.once" | "events.listenerCount" | "events.on" | "events.setMaxListeners" | "events.addAbortListener" | "fs" | "fs.promises" | "fs.promises.FileHandle" | "fs.promises.access" | "fs.promises.appendFile" | "fs.promises.chmod" | "fs.promises.chown" | "fs.promises.constants" | "fs.promises.copyFile" | "fs.promises.cp" | "fs.promises.glob" | "fs.promises.lchmod" | "fs.promises.lchown" | "fs.promises.link" | "fs.promises.lstat" | "fs.promises.lutimes" | "fs.promises.mkdir" | "fs.promises.mkdtemp" | "fs.promises.open" | "fs.promises.opendir" | "fs.promises.readFile" | "fs.promises.readdir" | "fs.promises.readlink" | "fs.promises.realpath" | "fs.promises.rename" | "fs.promises.rm" | "fs.promises.rmdir" | "fs.promises.stat" | "fs.promises.statfs" | "fs.promises.symlink" | "fs.promises.truncate" | "fs.promises.unlink" | "fs.promises.utimes" | "fs.promises.watch" | "fs.promises.writeFile" | "fs.access" | "fs.appendFile" | "fs.chmod" | "fs.chown" | "fs.close" | "fs.copyFile" | "fs.cp" | "fs.createReadStream" | "fs.createWriteStream" | "fs.exists" | "fs.fchmod" | "fs.fchown" | "fs.fdatasync" | "fs.fstat" | "fs.fsync" | "fs.ftruncate" | "fs.futimes" | "fs.glob" | "fs.lchmod" | "fs.lchown" | "fs.link" | "fs.lstat" | "fs.lutimes" | "fs.mkdir" | "fs.mkdtemp" | "fs.native" | "fs.open" | "fs.openAsBlob" | "fs.opendir" | "fs.read" | "fs.readdir" | "fs.readFile" | "fs.readlink" | "fs.readv" | "fs.realpath" | "fs.realpath.native" | "fs.rename" | "fs.rm" | "fs.rmdir" | "fs.stat" | "fs.statfs" | "fs.symlink" | "fs.truncate" | "fs.unlink" | "fs.unwatchFile" | "fs.utimes" | "fs.watch" | "fs.watchFile" | "fs.write" | "fs.writeFile" | "fs.writev" | "fs.accessSync" | "fs.appendFileSync" | "fs.chmodSync" | "fs.chownSync" | "fs.closeSync" | "fs.copyFileSync" | "fs.cpSync" | "fs.existsSync" | "fs.fchmodSync" | "fs.fchownSync" | "fs.fdatasyncSync" | "fs.fstatSync" | "fs.fsyncSync" | "fs.ftruncateSync" | "fs.futimesSync" | "fs.globSync" | "fs.lchmodSync" | "fs.lchownSync" | "fs.linkSync" | "fs.lstatSync" | "fs.lutimesSync" | "fs.mkdirSync" | "fs.mkdtempSync" | "fs.opendirSync" | "fs.openSync" | "fs.readdirSync" | "fs.readFileSync" | "fs.readlinkSync" | "fs.readSync" | "fs.readvSync" | "fs.realpathSync" | "fs.realpathSync.native" | "fs.renameSync" | "fs.rmdirSync" | "fs.rmSync" | "fs.statfsSync" | "fs.statSync" | "fs.symlinkSync" | "fs.truncateSync" | "fs.unlinkSync" | "fs.utimesSync" | "fs.writeFileSync" | "fs.writeSync" | "fs.writevSync" | "fs.constants" | "fs.Dir" | "fs.Dirent" | "fs.FSWatcher" | "fs.StatWatcher" | "fs.ReadStream" | "fs.Stats()" | "new fs.Stats()" | "fs.Stats" | "fs.StatFs" | "fs.WriteStream" | "fs.common_objects" | "fs/promises" | "fs/promises.FileHandle" | "fs/promises.access" | "fs/promises.appendFile" | "fs/promises.chmod" | "fs/promises.chown" | "fs/promises.constants" | "fs/promises.copyFile" | "fs/promises.cp" | "fs/promises.glob" | "fs/promises.lchmod" | "fs/promises.lchown" | "fs/promises.link" | "fs/promises.lstat" | "fs/promises.lutimes" | "fs/promises.mkdir" | "fs/promises.mkdtemp" | "fs/promises.open" | "fs/promises.opendir" | "fs/promises.readFile" | "fs/promises.readdir" | "fs/promises.readlink" | "fs/promises.realpath" | "fs/promises.rename" | "fs/promises.rm" | "fs/promises.rmdir" | "fs/promises.stat" | "fs/promises.statfs" | "fs/promises.symlink" | "fs/promises.truncate" | "fs/promises.unlink" | "fs/promises.utimes" | "fs/promises.watch" | "fs/promises.writeFile" | "http2" | "http2.constants" | "http2.sensitiveHeaders" | "http2.createServer" | "http2.createSecureServer" | "http2.connect" | "http2.getDefaultSettings" | "http2.getPackedSettings" | "http2.getUnpackedSettings" | "http2.performServerHandshake" | "http2.Http2Session" | "http2.ServerHttp2Session" | "http2.ClientHttp2Session" | "http2.Http2Stream" | "http2.ClientHttp2Stream" | "http2.ServerHttp2Stream" | "http2.Http2Server" | "http2.Http2SecureServer" | "http2.Http2ServerRequest" | "http2.Http2ServerResponse" | "http" | "http.globalAgent" | "http.createServer" | "http.get" | "http.request" | "http.Agent" | "http.Server" | "inspector" | "inspector.Session" | "inspector.Network.loadingFailed" | "inspector.Network.loadingFinished" | "inspector.Network.requestWillBeSent" | "inspector.Network.responseReceived" | "inspector.console" | "inspector.close" | "inspector.open" | "inspector.url" | "inspector.waitForDebugger" | "inspector/promises" | "inspector/promises.Session" | "inspector/promises.Network.loadingFailed" | "inspector/promises.Network.loadingFinished" | "inspector/promises.Network.requestWillBeSent" | "inspector/promises.Network.responseReceived" | "inspector/promises.console" | "inspector/promises.close" | "inspector/promises.open" | "inspector/promises.url" | "inspector/promises.waitForDebugger" | "module.builtinModules" | "module.constants.compileCacheStatus" | "module.createRequire" | "module.createRequireFromPath" | "module.enableCompileCache" | "module.findPackageJSON" | "module.flushCompileCache" | "module.getCompileCacheDir" | "module.isBuiltin" | "module.register" | "module.stripTypeScriptTypes" | "module.syncBuiltinESMExports" | "module.findSourceMap" | "module.SourceMap" | "module.Module.builtinModules" | "module.Module.createRequire" | "module.Module.createRequireFromPath" | "module.Module.enableCompileCache" | "module.Module.findPackageJSON" | "module.Module.flushCompileCache" | "module.Module.getCompileCacheDir" | "module.Module.isBuiltin" | "module.Module.register" | "module.Module.stripTypeScriptTypes" | "module.Module.syncBuiltinESMExports" | "module.Module.findSourceMap" | "module.Module.SourceMap" | "net" | "net.connect" | "net.createConnection" | "net.createServer" | "net.getDefaultAutoSelectFamily" | "net.setDefaultAutoSelectFamily" | "net.getDefaultAutoSelectFamilyAttemptTimeout" | "net.setDefaultAutoSelectFamilyAttemptTimeout" | "net.isIP" | "net.isIPv4" | "net.isIPv6" | "net.BlockList" | "net.SocketAddress" | "net.Server" | "net.Socket" | "os" | "os.EOL" | "os.constants" | "os.constants.priority" | "os.devNull" | "os.availableParallelism" | "os.arch" | "os.cpus" | "os.endianness" | "os.freemem" | "os.getPriority" | "os.homedir" | "os.hostname" | "os.loadavg" | "os.machine" | "os.networkInterfaces" | "os.platform" | "os.release" | "os.setPriority" | "os.tmpdir" | "os.totalmem" | "os.type" | "os.uptime" | "os.userInfo" | "os.version" | "path" | "path.posix" | "path.posix.delimiter" | "path.posix.sep" | "path.posix.basename" | "path.posix.dirname" | "path.posix.extname" | "path.posix.format" | "path.posix.matchesGlob" | "path.posix.isAbsolute" | "path.posix.join" | "path.posix.normalize" | "path.posix.parse" | "path.posix.relative" | "path.posix.resolve" | "path.posix.toNamespacedPath" | "path.win32" | "path.win32.delimiter" | "path.win32.sep" | "path.win32.basename" | "path.win32.dirname" | "path.win32.extname" | "path.win32.format" | "path.win32.matchesGlob" | "path.win32.isAbsolute" | "path.win32.join" | "path.win32.normalize" | "path.win32.parse" | "path.win32.relative" | "path.win32.resolve" | "path.win32.toNamespacedPath" | "path.delimiter" | "path.sep" | "path.basename" | "path.dirname" | "path.extname" | "path.format" | "path.matchesGlob" | "path.isAbsolute" | "path.join" | "path.normalize" | "path.parse" | "path.relative" | "path.resolve" | "path.toNamespacedPath" | "path/posix" | "path/posix.delimiter" | "path/posix.sep" | "path/posix.basename" | "path/posix.dirname" | "path/posix.extname" | "path/posix.format" | "path/posix.matchesGlob" | "path/posix.isAbsolute" | "path/posix.join" | "path/posix.normalize" | "path/posix.parse" | "path/posix.relative" | "path/posix.resolve" | "path/posix.toNamespacedPath" | "path/win32" | "path/win32.delimiter" | "path/win32.sep" | "path/win32.basename" | "path/win32.dirname" | "path/win32.extname" | "path/win32.format" | "path/win32.matchesGlob" | "path/win32.isAbsolute" | "path/win32.join" | "path/win32.normalize" | "path/win32.parse" | "path/win32.relative" | "path/win32.resolve" | "path/win32.toNamespacedPath" | "perf_hooks" | "perf_hooks.performance" | "perf_hooks.performance.clearMarks" | "perf_hooks.performance.clearMeasures" | "perf_hooks.performance.clearResourceTimings" | "perf_hooks.performance.eventLoopUtilization" | "perf_hooks.performance.getEntries" | "perf_hooks.performance.getEntriesByName" | "perf_hooks.performance.getEntriesByType" | "perf_hooks.performance.mark" | "perf_hooks.performance.markResourceTiming" | "perf_hooks.performance.measure" | "perf_hooks.performance.nodeTiming" | "perf_hooks.performance.nodeTiming.bootstrapComplete" | "perf_hooks.performance.nodeTiming.environment" | "perf_hooks.performance.nodeTiming.idleTime" | "perf_hooks.performance.nodeTiming.loopExit" | "perf_hooks.performance.nodeTiming.loopStart" | "perf_hooks.performance.nodeTiming.nodeStart" | "perf_hooks.performance.nodeTiming.uvMetricsInfo" | "perf_hooks.performance.nodeTiming.v8Start" | "perf_hooks.performance.now" | "perf_hooks.performance.onresourcetimingbufferfull" | "perf_hooks.performance.setResourceTimingBufferSize" | "perf_hooks.performance.timeOrigin" | "perf_hooks.performance.timerify" | "perf_hooks.performance.toJSON" | "perf_hooks.createHistogram" | "perf_hooks.monitorEventLoopDelay" | "perf_hooks.PerformanceEntry" | "perf_hooks.PerformanceMark" | "perf_hooks.PerformanceMeasure" | "perf_hooks.PerformanceNodeEntry" | "perf_hooks.PerformanceNodeTiming" | "perf_hooks.PerformanceResourceTiming" | "perf_hooks.PerformanceObserver" | "perf_hooks.PerformanceObserverEntryList" | "perf_hooks.Histogram" | "perf_hooks.IntervalHistogram" | "perf_hooks.RecordableHistogram" | "punycode" | "punycode.ucs2" | "punycode.version" | "punycode.decode" | "punycode.encode" | "punycode.toASCII" | "punycode.toUnicode" | "querystring" | "querystring.decode" | "querystring.encode" | "querystring.escape" | "querystring.parse" | "querystring.stringify" | "querystring.unescape" | "readline" | "readline.promises" | "readline.promises.createInterface" | "readline.promises.Interface" | "readline.promises.Readline" | "readline.clearLine" | "readline.clearScreenDown" | "readline.createInterface" | "readline.cursorTo" | "readline.moveCursor" | "readline.Interface" | "readline.emitKeypressEvents" | "readline.InterfaceConstructor" | "readline/promises" | "readline/promises.createInterface" | "readline/promises.Interface" | "readline/promises.Readline" | "repl" | "repl.start" | "repl.writer" | "repl.REPLServer()" | "repl.REPLServer" | "repl.REPL_MODE_MAGIC" | "repl.REPL_MODE_SLOPPY" | "repl.REPL_MODE_STRICT" | "repl.Recoverable()" | "repl.Recoverable" | "repl.builtinModules" | "sea" | "sea.isSea" | "sea.getAsset" | "sea.getAssetAsBlob" | "sea.getRawAsset" | "sea.sea.isSea" | "sea.sea.getAsset" | "sea.sea.getAssetAsBlob" | "sea.sea.getRawAsset" | "stream" | "stream.promises" | "stream.promises.pipeline" | "stream.promises.finished" | "stream.finished" | "stream.pipeline" | "stream.compose" | "stream.duplexPair" | "stream.Readable" | "stream.Readable.from" | "stream.Readable.isDisturbed" | "stream.Readable.fromWeb" | "stream.Readable.toWeb" | "stream.Writable" | "stream.Writable.fromWeb" | "stream.Writable.toWeb" | "stream.Duplex" | "stream.Duplex.from" | "stream.Duplex.fromWeb" | "stream.Duplex.toWeb" | "stream.Transform" | "stream.isErrored" | "stream.isReadable" | "stream.addAbortSignal" | "stream.getDefaultHighWaterMark" | "stream.setDefaultHighWaterMark" | "stream/promises.pipeline" | "stream/promises.finished" | "stream/web" | "stream/web.ReadableStream" | "stream/web.ReadableStream.from" | "stream/web.ReadableStreamDefaultReader" | "stream/web.ReadableStreamBYOBReader" | "stream/web.ReadableStreamDefaultController" | "stream/web.ReadableByteStreamController" | "stream/web.ReadableStreamBYOBRequest" | "stream/web.WritableStream" | "stream/web.WritableStreamDefaultWriter" | "stream/web.WritableStreamDefaultController" | "stream/web.TransformStream" | "stream/web.TransformStreamDefaultController" | "stream/web.ByteLengthQueuingStrategy" | "stream/web.CountQueuingStrategy" | "stream/web.TextEncoderStream" | "stream/web.TextDecoderStream" | "stream/web.CompressionStream" | "stream/web.DecompressionStream" | "stream/consumers" | "stream/consumers.arrayBuffer" | "stream/consumers.blob" | "stream/consumers.buffer" | "stream/consumers.json" | "stream/consumers.text" | "string_decoder" | "string_decoder.StringDecoder" | "test" | "test.after" | "test.afterEach" | "test.before" | "test.beforeEach" | "test.describe" | "test.describe.only" | "test.describe.skip" | "test.describe.todo" | "test.it" | "test.it.only" | "test.it.skip" | "test.it.todo" | "test.mock" | "test.mock.fn" | "test.mock.getter" | "test.mock.method" | "test.mock.module" | "test.mock.reset" | "test.mock.restoreAll" | "test.mock.setter" | "test.mock.timers" | "test.mock.timers.enable" | "test.mock.timers.reset" | "test.mock.timers.tick" | "test.only" | "test.run" | "test.snapshot" | "test.snapshot.setDefaultSnapshotSerializers" | "test.snapshot.setResolveSnapshotPath" | "test.skip" | "test.suite" | "test.test" | "test.test.only" | "test.test.skip" | "test.test.todo" | "test.todo" | "timers" | "timers.Immediate" | "timers.Timeout" | "timers.setImmediate" | "timers.clearImmediate" | "timers.setInterval" | "timers.clearInterval" | "timers.setTimeout" | "timers.clearTimeout" | "timers.promises" | "timers.promises.setTimeout" | "timers.promises.setImmediate" | "timers.promises.setInterval" | "timers.promises.scheduler.wait" | "timers.promises.scheduler.yield" | "timers/promises" | "timers/promises.setTimeout" | "timers/promises.setImmediate" | "timers/promises.setInterval" | "timers/promises.scheduler.wait" | "timers/promises.scheduler.yield" | "tls" | "tls.rootCertificates" | "tls.DEFAULT_ECDH_CURVE" | "tls.DEFAULT_MAX_VERSION" | "tls.DEFAULT_MIN_VERSION" | "tls.DEFAULT_CIPHERS" | "tls.checkServerIdentity" | "tls.connect" | "tls.createSecureContext" | "tls.createSecurePair" | "tls.createServer" | "tls.getCiphers" | "tls.SecureContext" | "tls.CryptoStream" | "tls.SecurePair" | "tls.Server" | "tls.TLSSocket" | "trace_events" | "trace_events.createTracing" | "trace_events.getEnabledCategories" | "tty" | "tty.isatty" | "tty.ReadStream" | "tty.WriteStream" | "url" | "url.domainToASCII" | "url.domainToUnicode" | "url.fileURLToPath" | "url.format" | "url.pathToFileURL" | "url.urlToHttpOptions" | "url.URL" | "url.URL.canParse" | "url.URL.createObjectURL" | "url.URL.revokeObjectURL" | "url.URLSearchParams" | "url.Url" | "util.promisify" | "util.promisify.custom" | "util.callbackify" | "util.debuglog" | "util.debug" | "util.deprecate" | "util.format" | "util.formatWithOptions" | "util.getCallSite" | "util.getCallSites" | "util.getSystemErrorName" | "util.getSystemErrorMap" | "util.getSystemErrorMessage" | "util.inherits" | "util.inspect" | "util.inspect.custom" | "util.inspect.defaultOptions" | "util.inspect.replDefaults" | "util.isDeepStrictEqual" | "util.parseArgs" | "util.parseEnv" | "util.stripVTControlCharacters" | "util.styleText" | "util.toUSVString" | "util.transferableAbortController" | "util.transferableAbortSignal" | "util.aborted" | "util.MIMEType" | "util.MIMEParams" | "util.TextDecoder" | "util.TextEncoder" | "util.types" | "util.types.isExternal" | "util.types.isDate" | "util.types.isArgumentsObject" | "util.types.isBigIntObject" | "util.types.isBooleanObject" | "util.types.isNumberObject" | "util.types.isStringObject" | "util.types.isSymbolObject" | "util.types.isNativeError" | "util.types.isRegExp" | "util.types.isAsyncFunction" | "util.types.isGeneratorFunction" | "util.types.isGeneratorObject" | "util.types.isPromise" | "util.types.isMap" | "util.types.isSet" | "util.types.isMapIterator" | "util.types.isSetIterator" | "util.types.isWeakMap" | "util.types.isWeakSet" | "util.types.isArrayBuffer" | "util.types.isDataView" | "util.types.isSharedArrayBuffer" | "util.types.isProxy" | "util.types.isModuleNamespaceObject" | "util.types.isAnyArrayBuffer" | "util.types.isBoxedPrimitive" | "util.types.isArrayBufferView" | "util.types.isTypedArray" | "util.types.isUint8Array" | "util.types.isUint8ClampedArray" | "util.types.isUint16Array" | "util.types.isUint32Array" | "util.types.isInt8Array" | "util.types.isInt16Array" | "util.types.isInt32Array" | "util.types.isFloat32Array" | "util.types.isFloat64Array" | "util.types.isBigInt64Array" | "util.types.isBigUint64Array" | "util.types.isKeyObject" | "util.types.isCryptoKey" | "util.types.isWebAssemblyCompiledModule" | "util._extend" | "util.isArray" | "util.isBoolean" | "util.isBuffer" | "util.isDate" | "util.isError" | "util.isFunction" | "util.isNull" | "util.isNullOrUndefined" | "util.isNumber" | "util.isObject" | "util.isPrimitive" | "util.isRegExp" | "util.isString" | "util.isSymbol" | "util.isUndefined" | "util.log" | "util" | "util/types" | "util/types.isExternal" | "util/types.isDate" | "util/types.isArgumentsObject" | "util/types.isBigIntObject" | "util/types.isBooleanObject" | "util/types.isNumberObject" | "util/types.isStringObject" | "util/types.isSymbolObject" | "util/types.isNativeError" | "util/types.isRegExp" | "util/types.isAsyncFunction" | "util/types.isGeneratorFunction" | "util/types.isGeneratorObject" | "util/types.isPromise" | "util/types.isMap" | "util/types.isSet" | "util/types.isMapIterator" | "util/types.isSetIterator" | "util/types.isWeakMap" | "util/types.isWeakSet" | "util/types.isArrayBuffer" | "util/types.isDataView" | "util/types.isSharedArrayBuffer" | "util/types.isProxy" | "util/types.isModuleNamespaceObject" | "util/types.isAnyArrayBuffer" | "util/types.isBoxedPrimitive" | "util/types.isArrayBufferView" | "util/types.isTypedArray" | "util/types.isUint8Array" | "util/types.isUint8ClampedArray" | "util/types.isUint16Array" | "util/types.isUint32Array" | "util/types.isInt8Array" | "util/types.isInt16Array" | "util/types.isInt32Array" | "util/types.isFloat32Array" | "util/types.isFloat64Array" | "util/types.isBigInt64Array" | "util/types.isBigUint64Array" | "util/types.isKeyObject" | "util/types.isCryptoKey" | "util/types.isWebAssemblyCompiledModule" | "v8" | "v8.serialize" | "v8.deserialize" | "v8.Serializer" | "v8.Deserializer" | "v8.DefaultSerializer" | "v8.DefaultDeserializer" | "v8.promiseHooks" | "v8.promiseHooks.onInit" | "v8.promiseHooks.onSettled" | "v8.promiseHooks.onBefore" | "v8.promiseHooks.onAfter" | "v8.promiseHooks.createHook" | "v8.startupSnapshot" | "v8.startupSnapshot.addSerializeCallback" | "v8.startupSnapshot.addDeserializeCallback" | "v8.startupSnapshot.setDeserializeMainFunction" | "v8.startupSnapshot.isBuildingSnapshot" | "v8.cachedDataVersionTag" | "v8.getHeapCodeStatistics" | "v8.getHeapSnapshot" | "v8.getHeapSpaceStatistics" | "v8.getHeapStatistics" | "v8.queryObjects" | "v8.setFlagsFromString" | "v8.stopCoverage" | "v8.takeCoverage" | "v8.writeHeapSnapshot" | "v8.setHeapSnapshotNearHeapLimit" | "v8.GCProfiler" | "vm.constants" | "vm.compileFunction" | "vm.createContext" | "vm.isContext" | "vm.measureMemory" | "vm.runInContext" | "vm.runInNewContext" | "vm.runInThisContext" | "vm.Script" | "vm.Module" | "vm.SourceTextModule" | "vm.SyntheticModule" | "vm" | "wasi.WASI" | "wasi" | "worker_threads" | "worker_threads.isMainThread" | "worker_threads.parentPort" | "worker_threads.resourceLimits" | "worker_threads.SHARE_ENV" | "worker_threads.threadId" | "worker_threads.workerData" | "worker_threads.getEnvironmentData" | "worker_threads.markAsUncloneable" | "worker_threads.markAsUntransferable" | "worker_threads.isMarkedAsUntransferable" | "worker_threads.moveMessagePortToContext" | "worker_threads.postMessageToThread" | "worker_threads.receiveMessageOnPort" | "worker_threads.setEnvironmentData" | "worker_threads.BroadcastChannel" | "worker_threads.MessageChannel" | "worker_threads.MessagePort" | "worker_threads.Worker" | "zlib.constants" | "zlib.crc32" | "zlib.createBrotliCompress" | "zlib.createBrotliDecompress" | "zlib.createDeflate" | "zlib.createDeflateRaw" | "zlib.createGunzip" | "zlib.createGzip" | "zlib.createInflate" | "zlib.createInflateRaw" | "zlib.createUnzip" | "zlib.brotliCompress" | "zlib.brotliCompressSync" | "zlib.brotliDecompress" | "zlib.brotliDecompressSync" | "zlib.deflate" | "zlib.deflateSync" | "zlib.deflateRaw" | "zlib.deflateRawSync" | "zlib.gunzip" | "zlib.gunzipSync" | "zlib.gzip" | "zlib.gzipSync" | "zlib.inflate" | "zlib.inflateSync" | "zlib.inflateRaw" | "zlib.inflateRawSync" | "zlib.unzip" | "zlib.unzipSync" | "zlib.BrotliCompress()" | "zlib.BrotliCompress" | "zlib.BrotliDecompress()" | "zlib.BrotliDecompress" | "zlib.Deflate()" | "zlib.Deflate" | "zlib.DeflateRaw()" | "zlib.DeflateRaw" | "zlib.Gunzip()" | "zlib.Gunzip" | "zlib.Gzip()" | "zlib.Gzip" | "zlib.Inflate()" | "zlib.Inflate" | "zlib.InflateRaw()" | "zlib.InflateRaw" | "zlib.Unzip()" | "zlib.Unzip" | "zlib")[]
}]
// ----- node/prefer-global/buffer -----
type NodePreferGlobalBuffer = []|[("always" | "never")]
// ----- node/prefer-global/console -----
type NodePreferGlobalConsole = []|[("always" | "never")]
// ----- node/prefer-global/process -----
type NodePreferGlobalProcess = []|[("always" | "never")]
// ----- node/prefer-global/text-decoder -----
type NodePreferGlobalTextDecoder = []|[("always" | "never")]
// ----- node/prefer-global/text-encoder -----
type NodePreferGlobalTextEncoder = []|[("always" | "never")]
// ----- node/prefer-global/url -----
type NodePreferGlobalUrl = []|[("always" | "never")]
// ----- node/prefer-global/url-search-params -----
type NodePreferGlobalUrlSearchParams = []|[("always" | "never")]
// ----- node/prefer-node-protocol -----
type NodePreferNodeProtocol = []|[{
  version?: string
}]
// ----- node/shebang -----
type NodeShebang = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  ignoreUnpublished?: boolean
  additionalExecutables?: string[]
  executableMap?: {
    [k: string]: string
  }
}]
// ----- nonblock-statement-body-position -----
type NonblockStatementBodyPosition = []|[("beside" | "below" | "any")]|[("beside" | "below" | "any"), {
  overrides?: {
    if?: ("beside" | "below" | "any")
    else?: ("beside" | "below" | "any")
    while?: ("beside" | "below" | "any")
    do?: ("beside" | "below" | "any")
    for?: ("beside" | "below" | "any")
  }
}]
// ----- object-curly-newline -----
type ObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- object-curly-spacing -----
type ObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]
// ----- object-property-newline -----
type ObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]
// ----- object-shorthand -----
type ObjectShorthand = ([]|[("always" | "methods" | "properties" | "never" | "consistent" | "consistent-as-needed")] | []|[("always" | "methods" | "properties")]|[("always" | "methods" | "properties"), {
  avoidQuotes?: boolean
}] | []|[("always" | "methods")]|[("always" | "methods"), {
  ignoreConstructors?: boolean
  methodsIgnorePattern?: string
  avoidQuotes?: boolean
  avoidExplicitReturnArrows?: boolean
}])
// ----- one-var -----
type OneVar = []|[(("always" | "never" | "consecutive") | {
  separateRequires?: boolean
  var?: ("always" | "never" | "consecutive")
  let?: ("always" | "never" | "consecutive")
  const?: ("always" | "never" | "consecutive")
} | {
  initialized?: ("always" | "never" | "consecutive")
  uninitialized?: ("always" | "never" | "consecutive")
})]
// ----- one-var-declaration-per-line -----
type OneVarDeclarationPerLine = []|[("always" | "initializations")]
// ----- operator-assignment -----
type OperatorAssignment = []|[("always" | "never")]
// ----- operator-linebreak -----
type OperatorLinebreak = []|[("after" | "before" | "none" | null)]|[("after" | "before" | "none" | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore") | undefined
  }
}]
// ----- padded-blocks -----
type PaddedBlocks = []|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
})]|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
}), {
  allowSingleLineBlocks?: boolean
}]
// ----- padding-line-between-statements -----
type _PaddingLineBetweenStatementsPaddingType = ("any" | "never" | "always")
type _PaddingLineBetweenStatementsStatementType = (("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with") | [("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with"), ...(("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with"))[]])
type PaddingLineBetweenStatements = {
  blankLine: _PaddingLineBetweenStatementsPaddingType
  prev: _PaddingLineBetweenStatementsStatementType
  next: _PaddingLineBetweenStatementsStatementType
}[]
// ----- perfectionist/sort-array-includes -----
type PerfectionistSortArrayIncludes = []|[{
  
  partitionByComment?: (string[] | boolean | string)
  
  groupKind?: ("mixed" | "literals-first" | "spreads-first")
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-classes -----
type PerfectionistSortClasses = []|[{
  
  ignoreCallbackDependenciesPatterns?: string[]
  
  partitionByComment?: (string[] | boolean | string)
  
  customGroups?: ({
    
    groupName?: string
    
    type?: ("alphabetical" | "line-length" | "natural" | "unsorted")
    
    order?: ("desc" | "asc")
    anyOf?: {
      
      elementValuePattern?: string
      
      decoratorNamePattern?: string
      
      modifiers?: ("async" | "protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
      
      selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
      
      elementNamePattern?: string
    }[]
  } | {
    
    groupName?: string
    
    type?: ("alphabetical" | "line-length" | "natural" | "unsorted")
    
    order?: ("desc" | "asc")
    
    elementValuePattern?: string
    
    decoratorNamePattern?: string
    
    modifiers?: ("async" | "protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
    
    selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
    
    elementNamePattern?: string
  })[]
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  groups?: (string | string[])[]
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-decorators -----
type PerfectionistSortDecorators = []|[{
  
  partitionByComment?: (string[] | boolean | string)
  
  sortOnParameters?: boolean
  
  sortOnProperties?: boolean
  
  sortOnAccessors?: boolean
  
  sortOnMethods?: boolean
  
  sortOnClasses?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  groups?: (string | string[])[]
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-enums -----
type PerfectionistSortEnums = []|[{
  
  partitionByComment?: (string[] | boolean | string)
  
  forceNumericSort?: boolean
  
  sortByValue?: boolean
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-exports -----
type PerfectionistSortExports = []|[{
  
  partitionByComment?: (string[] | boolean | string)
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-heritage-clauses -----
type PerfectionistSortHeritageClauses = []|[{
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  groups?: (string | string[])[]
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-imports -----
type PerfectionistSortImports = []|[_PerfectionistSortImportsSortImports]
type _PerfectionistSortImportsSortImports = (_PerfectionistSortImportsMaxLineLengthRequiresLineLengthType & {
  
  customGroups?: {
    
    value?: {
      [k: string]: unknown | undefined
    }
    
    type?: {
      [k: string]: unknown | undefined
    }
  }
  
  partitionByComment?: (string[] | boolean | string)
  
  internalPattern?: string[]
  
  maxLineLength?: number
  
  sortSideEffects?: boolean
  
  environment?: ("node" | "bun")
  
  tsconfigRootDir?: string
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  groups?: (string | string[])[]
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
})
type _PerfectionistSortImportsMaxLineLengthRequiresLineLengthType = ({
  [k: string]: unknown | undefined
} | _PerfectionistSortImports_IsLineLength)
interface _PerfectionistSortImports_IsLineLength {
  type: "line-length"
  [k: string]: unknown | undefined
}
// ----- perfectionist/sort-interfaces -----
type PerfectionistSortInterfaces = []|[{
  
  ignorePattern?: string[]
  
  partitionByComment?: (string[] | boolean | string)
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    
    groupName?: string
    
    type?: ("alphabetical" | "line-length" | "natural" | "unsorted")
    
    order?: ("desc" | "asc")
    anyOf?: {
      
      modifiers?: ("optional" | "required" | "multiline")[]
      
      selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
      
      elementNamePattern?: string
    }[]
  } | {
    
    groupName?: string
    
    type?: ("alphabetical" | "line-length" | "natural" | "unsorted")
    
    order?: ("desc" | "asc")
    
    modifiers?: ("optional" | "required" | "multiline")[]
    
    selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
    
    elementNamePattern?: string
  })[])
  
  groupKind?: ("mixed" | "required-first" | "optional-first")
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  groups?: (string | string[])[]
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-intersection-types -----
type PerfectionistSortIntersectionTypes = []|[{
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  groups?: (string | string[])[]
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-jsx-props -----
type PerfectionistSortJsxProps = []|[{
  
  ignorePattern?: string[]
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  groups?: (string | string[])[]
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-maps -----
type PerfectionistSortMaps = []|[{
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-modules -----
type PerfectionistSortModules = []|[{
  
  partitionByComment?: (string[] | boolean | string)
  
  customGroups?: ({
    
    groupName?: string
    
    type?: ("alphabetical" | "line-length" | "natural" | "unsorted")
    
    order?: ("desc" | "asc")
    anyOf?: {
      
      decoratorNamePattern?: string
      
      modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[]
      
      selector?: ("enum" | "function" | "interface" | "type" | "class")
      
      elementNamePattern?: string
    }[]
  } | {
    
    groupName?: string
    
    type?: ("alphabetical" | "line-length" | "natural" | "unsorted")
    
    order?: ("desc" | "asc")
    
    decoratorNamePattern?: string
    
    modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[]
    
    selector?: ("enum" | "function" | "interface" | "type" | "class")
    
    elementNamePattern?: string
  })[]
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  groups?: (string | string[])[]
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-named-exports -----
type PerfectionistSortNamedExports = []|[{
  
  partitionByComment?: (string[] | boolean | string)
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-named-imports -----
type PerfectionistSortNamedImports = []|[{
  
  partitionByComment?: (string[] | boolean | string)
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  ignoreAlias?: boolean
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-object-types -----
type PerfectionistSortObjectTypes = []|[{
  
  ignorePattern?: string[]
  
  partitionByComment?: (string[] | boolean | string)
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    
    groupName?: string
    
    type?: ("alphabetical" | "line-length" | "natural" | "unsorted")
    
    order?: ("desc" | "asc")
    anyOf?: {
      
      modifiers?: ("optional" | "required" | "multiline")[]
      
      selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
      
      elementNamePattern?: string
    }[]
  } | {
    
    groupName?: string
    
    type?: ("alphabetical" | "line-length" | "natural" | "unsorted")
    
    order?: ("desc" | "asc")
    
    modifiers?: ("optional" | "required" | "multiline")[]
    
    selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
    
    elementNamePattern?: string
  })[])
  
  groupKind?: ("mixed" | "required-first" | "optional-first")
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  groups?: (string | string[])[]
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-objects -----
type PerfectionistSortObjects = []|[{
  
  destructuredObjects?: (boolean | {
    
    groups?: boolean
  })
  
  ignorePattern?: string[]
  
  partitionByComment?: (string[] | boolean | string)
  
  destructureOnly?: boolean
  
  objectDeclarations?: boolean
  
  styledComponents?: boolean
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  groups?: (string | string[])[]
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-sets -----
type PerfectionistSortSets = []|[{
  
  partitionByComment?: (string[] | boolean | string)
  
  groupKind?: ("mixed" | "literals-first" | "spreads-first")
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-switch-case -----
type PerfectionistSortSwitchCase = []|[{
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-union-types -----
type PerfectionistSortUnionTypes = []|[{
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  newlinesBetween?: ("ignore" | "always" | "never")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  groups?: (string | string[])[]
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- perfectionist/sort-variable-declarations -----
type PerfectionistSortVariableDeclarations = []|[{
  
  partitionByComment?: (string[] | boolean | string)
  
  partitionByNewLine?: boolean
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length")
}]
// ----- prefer-arrow-callback -----
type PreferArrowCallback = []|[{
  allowNamedFunctions?: boolean
  allowUnboundThis?: boolean
}]
// ----- prefer-const -----
type PreferConst = []|[{
  destructuring?: ("any" | "all")
  ignoreReadBeforeAssign?: boolean
}]
// ----- prefer-destructuring -----
type PreferDestructuring = []|[({
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  enforceForRenamedProperties?: boolean
}]
// ----- prefer-promise-reject-errors -----
type PreferPromiseRejectErrors = []|[{
  allowEmptyReject?: boolean
}]
// ----- prefer-reflect -----
type PreferReflect = []|[{
  exceptions?: ("apply" | "call" | "delete" | "defineProperty" | "getOwnPropertyDescriptor" | "getPrototypeOf" | "setPrototypeOf" | "isExtensible" | "getOwnPropertyNames" | "preventExtensions")[]
}]
// ----- prefer-regex-literals -----
type PreferRegexLiterals = []|[{
  disallowRedundantWrapping?: boolean
}]
// ----- prettier/prettier -----
type PrettierPrettier = []|[{
  [k: string]: unknown | undefined
}]|[{
  [k: string]: unknown | undefined
}, {
  usePrettierrc?: boolean
  fileInfoOptions?: {
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}]
// ----- promise/always-return -----
type PromiseAlwaysReturn = []|[{
  ignoreLastCallback?: boolean
  ignoreAssignmentVariable?: string[]
}]
// ----- promise/catch-or-return -----
type PromiseCatchOrReturn = []|[{
  allowFinally?: boolean
  allowThen?: boolean
  allowThenStrict?: boolean
  terminationMethod?: (string | string[])
}]
// ----- promise/no-callback-in-promise -----
type PromiseNoCallbackInPromise = []|[{
  exceptions?: string[]
  timeoutsErr?: boolean
}]
// ----- promise/no-return-wrap -----
type PromiseNoReturnWrap = []|[{
  allowReject?: boolean
}]
// ----- promise/param-names -----
type PromiseParamNames = []|[{
  resolvePattern?: string
  rejectPattern?: string
}]
// ----- promise/prefer-await-to-then -----
type PromisePreferAwaitToThen = []|[{
  strict?: boolean
  [k: string]: unknown | undefined
}]
// ----- promise/spec-only -----
type PromiseSpecOnly = []|[{
  allowedMethods?: string[]
}]
// ----- promise/valid-params -----
type PromiseValidParams = []|[{
  exclude?: string[]
}]
// ----- quote-props -----
type QuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- quotes -----
type Quotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: boolean
})]
// ----- radix -----
type Radix = []|[("always" | "as-needed")]
// ----- react-dom/no-unknown-property -----
type ReactDomNoUnknownProperty = []|[{
  ignore?: string[]
  requireDataLowercase?: boolean
}]
// ----- react-hooks/exhaustive-deps -----
type ReactHooksExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
}]
// ----- react-naming-convention/component-name -----
type ReactNamingConventionComponentName = []|[(("PascalCase" | "CONSTANT_CASE") | {
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  excepts?: string[]
  rule?: ("PascalCase" | "CONSTANT_CASE")
})]
// ----- react-naming-convention/filename -----
type ReactNamingConventionFilename = []|[(("PascalCase" | "camelCase" | "kebab-case" | "snake_case") | {
  excepts?: string[]
  extensions?: string[]
  rule?: ("PascalCase" | "camelCase" | "kebab-case" | "snake_case")
})]
// ----- react-naming-convention/filename-extension -----
type ReactNamingConventionFilenameExtension = []|[(("always" | "as-needed") | {
  allow?: ("always" | "as-needed")
  extensions?: string[]
  ignoreFilesWithoutCode?: boolean
})]
// ----- react-refresh/only-export-components -----
type ReactRefreshOnlyExportComponents = []|[{
  allowExportNames?: string[]
  allowConstantExport?: boolean
  customHOCs?: string[]
  checkJS?: boolean
}]
// ----- react-x/no-useless-fragment -----
type ReactXNoUselessFragment = []|[{
  
  allowExpressions?: boolean
}]
// ----- react/boolean-prop-naming -----
type ReactBooleanPropNaming = []|[{
  
  propTypeNames?: [string, ...(string)[]]
  rule?: string
  message?: string
  validateNested?: boolean
}]
// ----- react/button-has-type -----
type ReactButtonHasType = []|[{
  button?: boolean
  submit?: boolean
  reset?: boolean
}]
// ----- react/checked-requires-onchange-or-readonly -----
type ReactCheckedRequiresOnchangeOrReadonly = []|[{
  ignoreMissingProperties?: boolean
  ignoreExclusiveCheckedAttribute?: boolean
}]
// ----- react/default-props-match-prop-types -----
type ReactDefaultPropsMatchPropTypes = []|[{
  allowRequiredDefaults?: boolean
}]
// ----- react/destructuring-assignment -----
type ReactDestructuringAssignment = []|[("always" | "never")]|[("always" | "never"), {
  ignoreClassFields?: boolean
  destructureInSignature?: ("always" | "ignore")
}]
// ----- react/display-name -----
type ReactDisplayName = []|[{
  ignoreTranspilerName?: boolean
  checkContextObjects?: boolean
}]
// ----- react/forbid-component-props -----
type ReactForbidComponentProps = []|[{
  forbid?: (string | {
    propName?: string
    allowedFor?: string[]
    allowedForPatterns?: string[]
    message?: string
  } | ({
    [k: string]: unknown | undefined
  } | {
    [k: string]: unknown | undefined
  }) | {
    propNamePattern?: string
    allowedFor?: string[]
    allowedForPatterns?: string[]
    message?: string
  } | ({
    [k: string]: unknown | undefined
  } | {
    [k: string]: unknown | undefined
  }))[]
  [k: string]: unknown | undefined
}]
// ----- react/forbid-dom-props -----
type ReactForbidDomProps = []|[{
  forbid?: (string | {
    propName?: string
    disallowedFor?: string[]
    message?: string
    [k: string]: unknown | undefined
  })[]
}]
// ----- react/forbid-elements -----
type ReactForbidElements = []|[{
  forbid?: (string | {
    element: string
    message?: string
  })[]
}]
// ----- react/forbid-foreign-prop-types -----
type ReactForbidForeignPropTypes = []|[{
  allowInPropTypes?: boolean
}]
// ----- react/forbid-prop-types -----
type ReactForbidPropTypes = []|[{
  forbid?: string[]
  checkContextTypes?: boolean
  checkChildContextTypes?: boolean
  [k: string]: unknown | undefined
}]
// ----- react/function-component-definition -----
type ReactFunctionComponentDefinition = []|[{
  namedComponents?: (("function-declaration" | "arrow-function" | "function-expression") | ("function-declaration" | "arrow-function" | "function-expression")[])
  unnamedComponents?: (("arrow-function" | "function-expression") | ("arrow-function" | "function-expression")[])
  [k: string]: unknown | undefined
}]
// ----- react/hook-use-state -----
type ReactHookUseState = []|[{
  allowDestructuredState?: boolean
}]
// ----- react/jsx-boolean-value -----
type ReactJsxBooleanValue = ([]|[("always" | "never")] | []|["always"]|["always", {
  never?: string[]
  assumeUndefinedIsFalse?: boolean
}] | []|["never"]|["never", {
  always?: string[]
  assumeUndefinedIsFalse?: boolean
}])
// ----- react/jsx-closing-bracket-location -----
type ReactJsxClosingBracketLocation = []|[(("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | {
  location?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
} | {
  nonEmpty?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned" | false)
  selfClosing?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned" | false)
})]
// ----- react/jsx-closing-tag-location -----
type ReactJsxClosingTagLocation = []|[(("tag-aligned" | "line-aligned") | {
  location?: ("tag-aligned" | "line-aligned")
})]
// ----- react/jsx-curly-brace-presence -----
type ReactJsxCurlyBracePresence = []|[({
  props?: ("always" | "never" | "ignore")
  children?: ("always" | "never" | "ignore")
  propElementValues?: ("always" | "never" | "ignore")
} | ("always" | "never" | "ignore"))]
// ----- react/jsx-curly-newline -----
type ReactJsxCurlyNewline = []|[(("consistent" | "never") | {
  singleline?: ("consistent" | "require" | "forbid")
  multiline?: ("consistent" | "require" | "forbid")
})]
// ----- react/jsx-curly-spacing -----
type ReactJsxCurlySpacing = []|[((_ReactJsxCurlySpacing_BasicConfig & {
  attributes?: _ReactJsxCurlySpacingBasicConfigOrBoolean
  children?: _ReactJsxCurlySpacingBasicConfigOrBoolean
  [k: string]: unknown | undefined
}) | ("always" | "never"))]|[((_ReactJsxCurlySpacing_BasicConfig & {
  attributes?: _ReactJsxCurlySpacingBasicConfigOrBoolean
  children?: _ReactJsxCurlySpacingBasicConfigOrBoolean
  [k: string]: unknown | undefined
}) | ("always" | "never")), {
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
    [k: string]: unknown | undefined
  }
}]
type _ReactJsxCurlySpacingBasicConfigOrBoolean = (_ReactJsxCurlySpacing_BasicConfig | boolean)
interface _ReactJsxCurlySpacing_BasicConfig {
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
// ----- react/jsx-equals-spacing -----
type ReactJsxEqualsSpacing = []|[("always" | "never")]
// ----- react/jsx-filename-extension -----
type ReactJsxFilenameExtension = []|[{
  allow?: ("always" | "as-needed")
  extensions?: string[]
  ignoreFilesWithoutCode?: boolean
}]
// ----- react/jsx-first-prop-new-line -----
type ReactJsxFirstPropNewLine = []|[("always" | "never" | "multiline" | "multiline-multiprop" | "multiprop")]
// ----- react/jsx-fragments -----
type ReactJsxFragments = []|[("syntax" | "element")]
// ----- react/jsx-handler-names -----
type ReactJsxHandlerNames = []|[({
  eventHandlerPrefix?: string
  eventHandlerPropPrefix?: string
  checkLocalVariables?: boolean
  checkInlineFunction?: boolean
  ignoreComponentNames?: string[]
} | {
  eventHandlerPrefix?: string
  eventHandlerPropPrefix?: false
  checkLocalVariables?: boolean
  checkInlineFunction?: boolean
  ignoreComponentNames?: string[]
} | {
  eventHandlerPrefix?: false
  eventHandlerPropPrefix?: string
  checkLocalVariables?: boolean
  checkInlineFunction?: boolean
  ignoreComponentNames?: string[]
} | {
  checkLocalVariables?: boolean
} | {
  checkInlineFunction?: boolean
} | {
  ignoreComponentNames?: string[]
  [k: string]: unknown | undefined
})]
// ----- react/jsx-indent -----
type ReactJsxIndent = []|[("tab" | number)]|[("tab" | number), {
  checkAttributes?: boolean
  indentLogicalExpressions?: boolean
}]
// ----- react/jsx-indent-props -----
type ReactJsxIndentProps = []|[(("tab" | "first") | number | {
  indentMode?: (("tab" | "first") | number)
  ignoreTernaryOperator?: boolean
  [k: string]: unknown | undefined
})]
// ----- react/jsx-key -----
type ReactJsxKey = []|[{
  checkFragmentShorthand?: boolean
  checkKeyMustBeforeSpread?: boolean
  warnOnDuplicates?: boolean
}]
// ----- react/jsx-max-depth -----
type ReactJsxMaxDepth = []|[{
  max?: number
}]
// ----- react/jsx-max-props-per-line -----
type ReactJsxMaxPropsPerLine = []|[({
  maximum?: {
    single?: number
    multi?: number
    [k: string]: unknown | undefined
  }
} | {
  maximum?: number
  when?: ("always" | "multiline")
})]
// ----- react/jsx-newline -----
type ReactJsxNewline = []|[{
  prevent?: boolean
  allowMultilines?: boolean
}]
// ----- react/jsx-no-bind -----
type ReactJsxNoBind = []|[{
  allowArrowFunctions?: boolean
  allowBind?: boolean
  allowFunctions?: boolean
  ignoreRefs?: boolean
  ignoreDOMComponents?: boolean
}]
// ----- react/jsx-no-duplicate-props -----
type ReactJsxNoDuplicateProps = []|[{
  ignoreCase?: boolean
}]
// ----- react/jsx-no-leaked-render -----
type ReactJsxNoLeakedRender = []|[{
  validStrategies?: ("ternary" | "coerce")[]
}]
// ----- react/jsx-no-literals -----
type ReactJsxNoLiterals = []|[{
  elementOverrides?: {
    [k: string]: {
      applyToNestedElements?: boolean
      noStrings?: boolean
      allowedStrings?: string[]
      ignoreProps?: boolean
      noAttributeStrings?: boolean
      [k: string]: unknown | undefined
    }
  }
  noStrings?: boolean
  allowedStrings?: string[]
  ignoreProps?: boolean
  noAttributeStrings?: boolean
}]
// ----- react/jsx-no-script-url -----
type ReactJsxNoScriptUrl = ([]|[{
  name: string
  props: string[]
}[]]|[{
  name: string
  props: string[]
}[], {
  includeFromSettings?: boolean
  [k: string]: unknown | undefined
}] | []|[{
  includeFromSettings?: boolean
  [k: string]: unknown | undefined
}])
// ----- react/jsx-no-target-blank -----
type ReactJsxNoTargetBlank = []|[{
  allowReferrer?: boolean
  enforceDynamicLinks?: ("always" | "never")
  warnOnSpreadAttributes?: boolean
  links?: boolean
  forms?: boolean
}]
// ----- react/jsx-no-undef -----
type ReactJsxNoUndef = []|[{
  allowGlobals?: boolean
}]
// ----- react/jsx-no-useless-fragment -----
type ReactJsxNoUselessFragment = []|[{
  allowExpressions?: boolean
  [k: string]: unknown | undefined
}]
// ----- react/jsx-one-expression-per-line -----
type ReactJsxOneExpressionPerLine = []|[{
  allow?: ("none" | "literal" | "single-child" | "non-jsx")
}]
// ----- react/jsx-pascal-case -----
type ReactJsxPascalCase = []|[{
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  
  ignore?: []|[string]
}]
// ----- react/jsx-props-no-spreading -----
type ReactJsxPropsNoSpreading = []|[({
  html?: ("enforce" | "ignore")
  custom?: ("enforce" | "ignore")
  explicitSpread?: ("enforce" | "ignore")
  exceptions?: string[]
  [k: string]: unknown | undefined
} & {
  [k: string]: unknown | undefined
})]
// ----- react/jsx-sort-default-props -----
type ReactJsxSortDefaultProps = []|[{
  ignoreCase?: boolean
}]
// ----- react/jsx-sort-props -----
type ReactJsxSortProps = []|[{
  callbacksLast?: boolean
  shorthandFirst?: boolean
  shorthandLast?: boolean
  multiline?: ("ignore" | "first" | "last")
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  reservedFirst?: (unknown[] | boolean)
  locale?: string
}]
// ----- react/jsx-space-before-closing -----
type ReactJsxSpaceBeforeClosing = []|[("always" | "never")]
// ----- react/jsx-tag-spacing -----
type ReactJsxTagSpacing = []|[{
  closingSlash?: ("always" | "never" | "allow")
  beforeSelfClosing?: ("always" | "proportional-always" | "never" | "allow")
  afterOpening?: ("always" | "allow-multiline" | "never" | "allow")
  beforeClosing?: ("always" | "proportional-always" | "never" | "allow")
}]
// ----- react/jsx-wrap-multilines -----
type ReactJsxWrapMultilines = []|[{
  declaration?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  assignment?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  return?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  arrow?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  condition?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  logical?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  prop?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
}]
// ----- react/no-children-prop -----
type ReactNoChildrenProp = []|[{
  allowFunctions?: boolean
}]
// ----- react/no-danger -----
type ReactNoDanger = []|[{
  
  customComponentNames?: string[]
  [k: string]: unknown | undefined
}]
// ----- react/no-did-mount-set-state -----
type ReactNoDidMountSetState = []|["disallow-in-func"]
// ----- react/no-did-update-set-state -----
type ReactNoDidUpdateSetState = []|["disallow-in-func"]
// ----- react/no-invalid-html-attribute -----
type ReactNoInvalidHtmlAttribute = []|[("rel")[]]
// ----- react/no-multi-comp -----
type ReactNoMultiComp = []|[{
  ignoreStateless?: boolean
}]
// ----- react/no-string-refs -----
type ReactNoStringRefs = []|[{
  noTemplateLiterals?: boolean
}]
// ----- react/no-unescaped-entities -----
type ReactNoUnescapedEntities = []|[{
  forbid?: (string | {
    char?: string
    alternatives?: string[]
    [k: string]: unknown | undefined
  })[]
}]
// ----- react/no-unknown-property -----
type ReactNoUnknownProperty = []|[{
  ignore?: string[]
  requireDataLowercase?: boolean
}]
// ----- react/no-unsafe -----
type ReactNoUnsafe = []|[{
  checkAliases?: boolean
}]
// ----- react/no-unstable-nested-components -----
type ReactNoUnstableNestedComponents = []|[{
  customValidators?: string[]
  allowAsProps?: boolean
  propNamePattern?: string
}]
// ----- react/no-unused-prop-types -----
type ReactNoUnusedPropTypes = []|[{
  ignore?: string[]
  customValidators?: string[]
  skipShapeProps?: boolean
}]
// ----- react/no-will-update-set-state -----
type ReactNoWillUpdateSetState = []|["disallow-in-func"]
// ----- react/prefer-es6-class -----
type ReactPreferEs6Class = []|[("always" | "never")]
// ----- react/prefer-stateless-function -----
type ReactPreferStatelessFunction = []|[{
  ignorePureComponents?: boolean
}]
// ----- react/prop-types -----
type ReactPropTypes = []|[{
  ignore?: string[]
  customValidators?: string[]
  skipUndeclared?: boolean
}]
// ----- react/require-default-props -----
type ReactRequireDefaultProps = []|[{
  forbidDefaultForRequired?: boolean
  classes?: ("defaultProps" | "ignore")
  functions?: ("defaultArguments" | "defaultProps" | "ignore")
  ignoreFunctionalComponents?: boolean
}]
// ----- react/require-optimization -----
type ReactRequireOptimization = []|[{
  allowDecorators?: string[]
}]
// ----- react/self-closing-comp -----
type ReactSelfClosingComp = []|[{
  component?: boolean
  html?: boolean
}]
// ----- react/sort-comp -----
type ReactSortComp = []|[{
  order?: string[]
  groups?: {
    [k: string]: string[]
  }
}]
// ----- react/sort-default-props -----
type ReactSortDefaultProps = []|[{
  ignoreCase?: boolean
}]
// ----- react/sort-prop-types -----
type ReactSortPropTypes = []|[{
  requiredFirst?: boolean
  callbacksLast?: boolean
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  sortShapeProp?: boolean
  checkTypes?: boolean
}]
// ----- react/state-in-constructor -----
type ReactStateInConstructor = []|[("always" | "never")]
// ----- react/static-property-placement -----
type ReactStaticPropertyPlacement = []|[("static public field" | "static getter" | "property assignment")]|[("static public field" | "static getter" | "property assignment"), {
  propTypes?: ("static public field" | "static getter" | "property assignment")
  defaultProps?: ("static public field" | "static getter" | "property assignment")
  childContextTypes?: ("static public field" | "static getter" | "property assignment")
  contextTypes?: ("static public field" | "static getter" | "property assignment")
  contextType?: ("static public field" | "static getter" | "property assignment")
  displayName?: ("static public field" | "static getter" | "property assignment")
}]
// ----- react/style-prop-object -----
type ReactStylePropObject = []|[{
  allow?: string[]
  [k: string]: unknown | undefined
}]
// ----- regexp/hexadecimal-escape -----
type RegexpHexadecimalEscape = []|[("always" | "never")]
// ----- regexp/letter-case -----
type RegexpLetterCase = []|[{
  caseInsensitive?: ("lowercase" | "uppercase" | "ignore")
  unicodeEscape?: ("lowercase" | "uppercase" | "ignore")
  hexadecimalEscape?: ("lowercase" | "uppercase" | "ignore")
  controlEscape?: ("lowercase" | "uppercase" | "ignore")
}]
// ----- regexp/match-any -----
type RegexpMatchAny = []|[{
  
  allows?: [("[\\s\\S]" | "[\\S\\s]" | "[^]" | "dotAll"), ...(("[\\s\\S]" | "[\\S\\s]" | "[^]" | "dotAll"))[]]
}]
// ----- regexp/no-dupe-disjunctions -----
type RegexpNoDupeDisjunctions = []|[{
  report?: ("all" | "trivial" | "interesting")
  reportExponentialBacktracking?: ("none" | "certain" | "potential")
  reportUnreachable?: ("certain" | "potential")
}]
// ----- regexp/no-lazy-ends -----
type RegexpNoLazyEnds = []|[{
  ignorePartial?: boolean
}]
// ----- regexp/no-legacy-features -----
type RegexpNoLegacyFeatures = []|[{
  staticProperties?: ("input" | "$_" | "lastMatch" | "$&" | "lastParen" | "$+" | "leftContext" | "$`" | "rightContext" | "$'" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9")[]
  prototypeMethods?: ("compile")[]
}]
// ----- regexp/no-misleading-capturing-group -----
type RegexpNoMisleadingCapturingGroup = []|[{
  reportBacktrackingEnds?: boolean
}]
// ----- regexp/no-misleading-unicode-character -----
type RegexpNoMisleadingUnicodeCharacter = []|[{
  fixable?: boolean
}]
// ----- regexp/no-missing-g-flag -----
type RegexpNoMissingGFlag = []|[{
  strictTypes?: boolean
}]
// ----- regexp/no-obscure-range -----
type RegexpNoObscureRange = []|[{
  allowed?: (("all" | "alphanumeric") | [("all" | "alphanumeric")] | [("alphanumeric" | string), ...(("alphanumeric" | string))[]])
}]
// ----- regexp/no-super-linear-backtracking -----
type RegexpNoSuperLinearBacktracking = []|[{
  report?: ("certain" | "potential")
}]
// ----- regexp/no-super-linear-move -----
type RegexpNoSuperLinearMove = []|[{
  report?: ("certain" | "potential")
  ignoreSticky?: boolean
  ignorePartial?: boolean
}]
// ----- regexp/no-unused-capturing-group -----
type RegexpNoUnusedCapturingGroup = []|[{
  fixable?: boolean
  allowNamed?: boolean
}]
// ----- regexp/no-useless-character-class -----
type RegexpNoUselessCharacterClass = []|[{
  ignores?: string[]
}]
// ----- regexp/no-useless-flag -----
type RegexpNoUselessFlag = []|[{
  ignore?: ("i" | "m" | "s" | "g" | "y")[]
  strictTypes?: boolean
}]
// ----- regexp/no-useless-non-capturing-group -----
type RegexpNoUselessNonCapturingGroup = []|[{
  allowTop?: (boolean | ("always" | "never" | "partial"))
}]
// ----- regexp/optimal-quantifier-concatenation -----
type RegexpOptimalQuantifierConcatenation = []|[{
  capturingGroups?: ("ignore" | "report")
}]
// ----- regexp/prefer-character-class -----
type RegexpPreferCharacterClass = []|[{
  minAlternatives?: number
}]
// ----- regexp/prefer-d -----
type RegexpPreferD = []|[{
  insideCharacterClass?: ("ignore" | "range" | "d")
}]
// ----- regexp/prefer-lookaround -----
type RegexpPreferLookaround = []|[{
  lookbehind?: boolean
  strictTypes?: boolean
}]
// ----- regexp/prefer-named-replacement -----
type RegexpPreferNamedReplacement = []|[{
  strictTypes?: boolean
}]
// ----- regexp/prefer-range -----
type RegexpPreferRange = []|[{
  target?: (("all" | "alphanumeric") | [("all" | "alphanumeric")] | [("alphanumeric" | string), ...(("alphanumeric" | string))[]])
}]
// ----- regexp/prefer-result-array-groups -----
type RegexpPreferResultArrayGroups = []|[{
  strictTypes?: boolean
}]
// ----- regexp/sort-character-class-elements -----
type RegexpSortCharacterClassElements = []|[{
  order?: ("\\s" | "\\w" | "\\d" | "\\p" | "*" | "\\q" | "[]")[]
}]
// ----- regexp/unicode-escape -----
type RegexpUnicodeEscape = []|[("unicodeCodePointEscape" | "unicodeEscape")]
// ----- regexp/unicode-property -----
type RegexpUnicodeProperty = []|[{
  generalCategory?: ("always" | "never" | "ignore")
  key?: ("short" | "long" | "ignore")
  property?: (("short" | "long" | "ignore") | {
    binary?: ("short" | "long" | "ignore")
    generalCategory?: ("short" | "long" | "ignore")
    script?: ("short" | "long" | "ignore")
  })
}]
// ----- require-atomic-updates -----
type RequireAtomicUpdates = []|[{
  allowProperties?: boolean
}]
// ----- require-unicode-regexp -----
type RequireUnicodeRegexp = []|[{
  requireFlag?: ("u" | "v")
}]
// ----- rest-spread-spacing -----
type RestSpreadSpacing = []|[("always" | "never")]
// ----- semi -----
type Semi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- semi-spacing -----
type SemiSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- semi-style -----
type SemiStyle = []|[("last" | "first")]
// ----- simple-import-sort/imports -----
type SimpleImportSortImports = []|[{
  groups?: string[][]
}]
// ----- sonarjs/accessor-pairs -----
type SonarjsAccessorPairs = []|[{
  getWithoutSet?: boolean
  setWithoutGet?: boolean
  enforceForClassMembers?: boolean
}]
// ----- sonarjs/alt-text -----
type SonarjsAltText = []|[{
  elements?: string[]
  img?: string[]
  object?: string[]
  area?: string[]
  "input[type=\"image\"]"?: string[]
  [k: string]: unknown | undefined
}]
// ----- sonarjs/anchor-has-content -----
type SonarjsAnchorHasContent = []|[{
  components?: string[]
  [k: string]: unknown | undefined
}]
// ----- sonarjs/anchor-is-valid -----
type SonarjsAnchorIsValid = []|[{
  components?: string[]
  specialLink?: string[]
  
  aspects?: [("noHref" | "invalidHref" | "preferButton"), ...(("noHref" | "invalidHref" | "preferButton"))[]]
  [k: string]: unknown | undefined
}]
// ----- sonarjs/arguments-order -----
type SonarjsArgumentsOrder = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/arguments-usage -----
type SonarjsArgumentsUsage = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/arrow-function-convention -----
type SonarjsArrowFunctionConvention = []|[{
  requireParameterParentheses?: boolean
  requireBodyBraces?: boolean
}]
// ----- sonarjs/aws-iam-all-privileges -----
type SonarjsAwsIamAllPrivileges = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-iam-all-resources-accessible -----
type SonarjsAwsIamAllResourcesAccessible = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-iam-privilege-escalation -----
type SonarjsAwsIamPrivilegeEscalation = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-iam-public-access -----
type SonarjsAwsIamPublicAccess = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-s3-bucket-granted-access -----
type SonarjsAwsS3BucketGrantedAccess = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-s3-bucket-public-access -----
type SonarjsAwsS3BucketPublicAccess = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-s3-bucket-server-encryption -----
type SonarjsAwsS3BucketServerEncryption = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/aws-s3-bucket-versioning -----
type SonarjsAwsS3BucketVersioning = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/brace-style -----
type SonarjsBraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- sonarjs/certificate-transparency -----
type SonarjsCertificateTransparency = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/class-name -----
type SonarjsClassName = []|[{
  format?: string
}]
// ----- sonarjs/cognitive-complexity -----
type SonarjsCognitiveComplexity = []|[number]|[number, ("sonar-runtime" | "metric")]
// ----- sonarjs/comment-regex -----
type SonarjsCommentRegex = []|[{
  regularExpression?: string
  message?: string
  flags?: string
}]
// ----- sonarjs/conditional-indentation -----
type SonarjsConditionalIndentation = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/confidential-information-logging -----
type SonarjsConfidentialInformationLogging = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/content-length -----
type SonarjsContentLength = []|[{
  fileUploadSizeLimit?: number
  standardSizeLimit?: number
}]
// ----- sonarjs/content-security-policy -----
type SonarjsContentSecurityPolicy = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/cookie-no-httponly -----
type SonarjsCookieNoHttponly = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/cors -----
type SonarjsCors = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/csrf -----
type SonarjsCsrf = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/cyclomatic-complexity -----
type SonarjsCyclomaticComplexity = []|[{
  threshold?: number
}]|[{
  threshold?: number
}, ("sonar-runtime" | "metric")]
// ----- sonarjs/destructuring-assignment-syntax -----
type SonarjsDestructuringAssignmentSyntax = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/different-types-comparison -----
type SonarjsDifferentTypesComparison = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/disabled-auto-escaping -----
type SonarjsDisabledAutoEscaping = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/dns-prefetching -----
type SonarjsDnsPrefetching = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/duplicates-in-character-class -----
type SonarjsDuplicatesInCharacterClass = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/enforce-trailing-comma -----
type SonarjsEnforceTrailingComma = []|[(_SonarjsEnforceTrailingCommaValue | {
  arrays?: _SonarjsEnforceTrailingCommaValueWithIgnore
  objects?: _SonarjsEnforceTrailingCommaValueWithIgnore
  imports?: _SonarjsEnforceTrailingCommaValueWithIgnore
  exports?: _SonarjsEnforceTrailingCommaValueWithIgnore
  functions?: _SonarjsEnforceTrailingCommaValueWithIgnore
})]
type _SonarjsEnforceTrailingCommaValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _SonarjsEnforceTrailingCommaValueWithIgnore = ("always-multiline" | "always" | "ignore" | "never" | "only-multiline")
// ----- sonarjs/expression-complexity -----
type SonarjsExpressionComplexity = []|[{
  max?: number
}]|[{
  max?: number
}, ("sonar-runtime" | "metric")]
// ----- sonarjs/file-header -----
type SonarjsFileHeader = []|[{
  headerFormat?: string
  isRegularExpression?: boolean
}]
// ----- sonarjs/file-uploads -----
type SonarjsFileUploads = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/for-loop-increment-sign -----
type SonarjsForLoopIncrementSign = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/frame-ancestors -----
type SonarjsFrameAncestors = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/function-inside-loop -----
type SonarjsFunctionInsideLoop = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/function-name -----
type SonarjsFunctionName = []|[{
  format?: string
}]
// ----- sonarjs/function-return-type -----
type SonarjsFunctionReturnType = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/hook-use-state -----
type SonarjsHookUseState = []|[{
  allowDestructuredState?: boolean
}]
// ----- sonarjs/in-operator-type-error -----
type SonarjsInOperatorTypeError = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/inconsistent-function-call -----
type SonarjsInconsistentFunctionCall = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/insecure-cookie -----
type SonarjsInsecureCookie = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/insecure-jwt-token -----
type SonarjsInsecureJwtToken = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/inverted-assertion-arguments -----
type SonarjsInvertedAssertionArguments = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/jsx-no-useless-fragment -----
type SonarjsJsxNoUselessFragment = []|[{
  allowExpressions?: boolean
  [k: string]: unknown | undefined
}]
// ----- sonarjs/label-has-associated-control -----
type SonarjsLabelHasAssociatedControl = []|[{
  labelComponents?: string[]
  labelAttributes?: string[]
  controlComponents?: string[]
  
  assert?: ("htmlFor" | "nesting" | "both" | "either")
  
  depth?: number
  [k: string]: unknown | undefined
}]
// ----- sonarjs/max-switch-cases -----
type SonarjsMaxSwitchCases = []|[number]
// ----- sonarjs/max-union-size -----
type SonarjsMaxUnionSize = []|[{
  threshold?: number
}]
// ----- sonarjs/media-has-caption -----
type SonarjsMediaHasCaption = []|[{
  audio?: string[]
  video?: string[]
  track?: string[]
  [k: string]: unknown | undefined
}]
// ----- sonarjs/nested-control-flow -----
type SonarjsNestedControlFlow = []|[{
  maximumNestingLevel?: number
}]|[{
  maximumNestingLevel?: number
}, ("sonar-runtime" | "metric")]
// ----- sonarjs/new-cap -----
type SonarjsNewCap = []|[{
  newIsCap?: boolean
  capIsNew?: boolean
  newIsCapExceptions?: string[]
  newIsCapExceptionPattern?: string
  capIsNewExceptions?: string[]
  capIsNewExceptionPattern?: string
  properties?: boolean
}]
// ----- sonarjs/new-operator-misuse -----
type SonarjsNewOperatorMisuse = []|[{
  considerJSDoc?: boolean
}]|[{
  considerJSDoc?: boolean
}, unknown]
// ----- sonarjs/no-accessor-field-mismatch -----
type SonarjsNoAccessorFieldMismatch = []|[{
  allowImplicit?: boolean
}]|[{
  allowImplicit?: boolean
}, ("sonar-runtime" | "metric")]
// ----- sonarjs/no-base-to-string -----
type SonarjsNoBaseToString = []|[{
  ignoredTypeNames?: string[]
}]
// ----- sonarjs/no-code-after-done -----
type SonarjsNoCodeAfterDone = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-collapsible-if -----
type SonarjsNoCollapsibleIf = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-deprecated-react -----
type SonarjsNoDeprecatedReact = []|[{
  "react-version"?: string
}]
// ----- sonarjs/no-duplicate-in-composite -----
type SonarjsNoDuplicateInComposite = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-duplicate-string -----
type SonarjsNoDuplicateString = []|[{
  threshold?: number
  ignoreStrings?: string
}]|[{
  threshold?: number
  ignoreStrings?: string
}, ("sonar-runtime" | "metric")]
// ----- sonarjs/no-duplicated-branches -----
type SonarjsNoDuplicatedBranches = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-element-overwrite -----
type SonarjsNoElementOverwrite = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-empty-function -----
type SonarjsNoEmptyFunction = []|[{
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "private-constructors" | "protected-constructors" | "asyncFunctions" | "asyncMethods" | "decoratedFunctions" | "overrideMethods")[]
}]
// ----- sonarjs/no-empty-interface -----
type SonarjsNoEmptyInterface = []|[{
  allowSingleExtends?: boolean
}]
// ----- sonarjs/no-extend-native -----
type SonarjsNoExtendNative = []|[{
  exceptions?: string[]
}]
// ----- sonarjs/no-extra-arguments -----
type SonarjsNoExtraArguments = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-gratuitous-expressions -----
type SonarjsNoGratuitousExpressions = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-hardcoded-credentials -----
type SonarjsNoHardcodedCredentials = []|[{
  credentialWords?: string[]
}]
// ----- sonarjs/no-identical-conditions -----
type SonarjsNoIdenticalConditions = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-identical-expressions -----
type SonarjsNoIdenticalExpressions = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-identical-functions -----
type SonarjsNoIdenticalFunctions = []|[number]|[number, ("sonar-runtime" | "metric")]
// ----- sonarjs/no-implicit-dependencies -----
type SonarjsNoImplicitDependencies = []|[{
  whitelist?: string[]
}]
// ----- sonarjs/no-inconsistent-returns -----
type SonarjsNoInconsistentReturns = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-incorrect-string-concat -----
type SonarjsNoIncorrectStringConcat = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-intrusive-permissions -----
type SonarjsNoIntrusivePermissions = []|[{
  permissions?: string[]
}]
// ----- sonarjs/no-invariant-returns -----
type SonarjsNoInvariantReturns = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-ip-forward -----
type SonarjsNoIpForward = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-mime-sniff -----
type SonarjsNoMimeSniff = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-misused-promises -----
type SonarjsNoMisusedPromises = []|[{
  [k: string]: unknown | undefined
}]
// ----- sonarjs/no-mixed-content -----
type SonarjsNoMixedContent = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-nested-functions -----
type SonarjsNoNestedFunctions = []|[{
  threshold?: number
}]|[{
  threshold?: number
}, ("sonar-runtime" | "metric")]
// ----- sonarjs/no-redeclare -----
type SonarjsNoRedeclare = []|[{
  builtinGlobals?: boolean
  ignoreDeclarationMerge?: boolean
}]
// ----- sonarjs/no-redundant-optional -----
type SonarjsNoRedundantOptional = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-redundant-parentheses -----
type SonarjsNoRedundantParentheses = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-reference-error -----
type SonarjsNoReferenceError = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-referrer-policy -----
type SonarjsNoReferrerPolicy = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-same-argument-assert -----
type SonarjsNoSameArgumentAssert = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-same-line-conditional -----
type SonarjsNoSameLineConditional = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-selector-parameter -----
type SonarjsNoSelectorParameter = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-this-alias -----
type SonarjsNoThisAlias = []|[{
  
  allowDestructuring?: boolean
  
  allowedNames?: string[]
}]
// ----- sonarjs/no-try-promise -----
type SonarjsNoTryPromise = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/no-unknown-property -----
type SonarjsNoUnknownProperty = []|[{
  ignore?: string[]
  [k: string]: unknown | undefined
}]
// ----- sonarjs/no-unsafe -----
type SonarjsNoUnsafe = []|[{
  checkAliases?: boolean
}]
// ----- sonarjs/no-unstable-nested-components -----
type SonarjsNoUnstableNestedComponents = []|[{
  customValidators?: string[]
  allowAsProps?: boolean
}]
// ----- sonarjs/no-unused-expressions -----
type SonarjsNoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
}]
// ----- sonarjs/no-variable-usage-before-declaration -----
type SonarjsNoVariableUsageBeforeDeclaration = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/non-number-in-arithmetic-expression -----
type SonarjsNonNumberInArithmeticExpression = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/object-shorthand -----
type SonarjsObjectShorthand = ([]|[("always" | "methods" | "properties" | "never" | "consistent" | "consistent-as-needed")] | []|[("always" | "methods" | "properties")]|[("always" | "methods" | "properties"), {
  avoidQuotes?: boolean
}] | []|[("always" | "methods")]|[("always" | "methods"), {
  ignoreConstructors?: boolean
  methodsIgnorePattern?: string
  avoidQuotes?: boolean
  avoidExplicitReturnArrows?: boolean
}])
// ----- sonarjs/prefer-nullish-coalescing -----
type SonarjsPreferNullishCoalescing = []|[{
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  ignoreConditionalTests?: boolean
  ignoreMixedLogicalExpressions?: boolean
  ignorePrimitives?: ({
    bigint?: boolean
    boolean?: boolean
    number?: boolean
    string?: boolean
    [k: string]: unknown | undefined
  } | true)
  ignoreTernaryTests?: boolean
}]
// ----- sonarjs/prefer-string-starts-ends-with -----
type SonarjsPreferStringStartsEndsWith = []|[{
  
  allowSingleElementEquality?: ("always" | "never")
}]
// ----- sonarjs/regex-complexity -----
type SonarjsRegexComplexity = []|[{
  threshold?: number
}]|[{
  threshold?: number
}, ("sonar-runtime" | "metric")]
// ----- sonarjs/semi -----
type SonarjsSemi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- sonarjs/shorthand-property-grouping -----
type SonarjsShorthandPropertyGrouping = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/sonar-block-scoped-var -----
type SonarjsSonarBlockScopedVar = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/sonar-max-lines -----
type SonarjsSonarMaxLines = []|[{
  maximum?: number
}]
// ----- sonarjs/sonar-max-lines-per-function -----
type SonarjsSonarMaxLinesPerFunction = []|[{
  maximum?: number
}]
// ----- sonarjs/sonar-max-params -----
type SonarjsSonarMaxParams = []|[{
  max?: number
}]
// ----- sonarjs/sonar-no-magic-numbers -----
type SonarjsSonarNoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  ignoreNumericLiteralTypes?: boolean
  ignoreEnums?: boolean
  ignoreReadonlyClassProperties?: boolean
  ignoreTypeIndexes?: boolean
}]
// ----- sonarjs/sonar-prefer-optional-chain -----
type SonarjsSonarPreferOptionalChain = []|[{
  
  checkAny?: boolean
  
  checkUnknown?: boolean
  
  checkString?: boolean
  
  checkNumber?: boolean
  
  checkBoolean?: boolean
  
  checkBigInt?: boolean
  
  requireNullish?: boolean
  
  allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean
}]
// ----- sonarjs/stateful-regex -----
type SonarjsStatefulRegex = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/strict-transport-security -----
type SonarjsStrictTransportSecurity = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/strings-comparison -----
type SonarjsStringsComparison = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/too-many-break-or-continue-in-loop -----
type SonarjsTooManyBreakOrContinueInLoop = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/unicode-aware-regex -----
type SonarjsUnicodeAwareRegex = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/unused-named-groups -----
type SonarjsUnusedNamedGroups = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/unverified-certificate -----
type SonarjsUnverifiedCertificate = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/unverified-hostname -----
type SonarjsUnverifiedHostname = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/updated-const-var -----
type SonarjsUpdatedConstVar = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/updated-loop-counter -----
type SonarjsUpdatedLoopCounter = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/use-isnan -----
type SonarjsUseIsnan = []|[{
  enforceForSwitchCase?: boolean
  enforceForIndexOf?: boolean
}]
// ----- sonarjs/use-type-alias -----
type SonarjsUseTypeAlias = []|[("sonar-runtime" | "metric")]
// ----- sonarjs/variable-name -----
type SonarjsVariableName = []|[{
  format?: string
}]
// ----- sonarjs/xml-parser-xxe -----
type SonarjsXmlParserXxe = []|[("sonar-runtime" | "metric")]
// ----- sort-imports -----
type SortImports = []|[{
  ignoreCase?: boolean
  
  memberSyntaxSortOrder?: [("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single")]
  ignoreDeclarationSort?: boolean
  ignoreMemberSort?: boolean
  allowSeparatedGroups?: boolean
}]
// ----- sort-keys -----
type SortKeys = []|[("asc" | "desc")]|[("asc" | "desc"), {
  caseSensitive?: boolean
  natural?: boolean
  minKeys?: number
  allowLineSeparatedGroups?: boolean
  ignoreComputedKeys?: boolean
}]
// ----- sort-vars -----
type SortVars = []|[{
  ignoreCase?: boolean
}]
// ----- space-before-blocks -----
type SpaceBeforeBlocks = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
})]
// ----- space-before-function-paren -----
type SpaceBeforeFunctionParen = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
})]
// ----- space-in-parens -----
type SpaceInParens = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]
// ----- space-infix-ops -----
type SpaceInfixOps = []|[{
  int32Hint?: boolean
}]
// ----- space-unary-ops -----
type SpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]
// ----- spaced-comment -----
type SpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    exceptions?: string[]
    markers?: string[]
    balanced?: boolean
  }
}]
// ----- strict -----
type Strict = []|[("never" | "global" | "function" | "safe")]
// ----- switch-colon-spacing -----
type SwitchColonSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- template-curly-spacing -----
type TemplateCurlySpacing = []|[("always" | "never")]
// ----- template-tag-spacing -----
type TemplateTagSpacing = []|[("always" | "never")]
// ----- ts/array-type -----
type TsArrayType = []|[{
  
  default?: ("array" | "generic" | "array-simple")
  
  readonly?: ("array" | "generic" | "array-simple")
}]
// ----- ts/ban-ts-comment -----
type TsBanTsComment = []|[{
  
  minimumDescriptionLength?: number
  "ts-check"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-expect-error"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-ignore"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-nocheck"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
}]
// ----- ts/class-literal-property-style -----
type TsClassLiteralPropertyStyle = []|[("fields" | "getters")]
// ----- ts/class-methods-use-this -----
type TsClassMethodsUseThis = []|[{
  
  enforceForClassFields?: boolean
  
  exceptMethods?: string[]
  
  ignoreClassesThatImplementAnInterface?: (boolean | "public-fields")
  
  ignoreOverrideMethods?: boolean
}]
// ----- ts/consistent-generic-constructors -----
type TsConsistentGenericConstructors = []|[("type-annotation" | "constructor")]
// ----- ts/consistent-indexed-object-style -----
type TsConsistentIndexedObjectStyle = []|[("record" | "index-signature")]
// ----- ts/consistent-return -----
type TsConsistentReturn = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- ts/consistent-type-assertions -----
type TsConsistentTypeAssertions = []|[({
  
  assertionStyle: "never"
} | {
  
  assertionStyle: ("as" | "angle-bracket")
  
  objectLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
})]
// ----- ts/consistent-type-definitions -----
type TsConsistentTypeDefinitions = []|[("interface" | "type")]
// ----- ts/consistent-type-exports -----
type TsConsistentTypeExports = []|[{
  
  fixMixedExportsWithInlineTypeSpecifier?: boolean
}]
// ----- ts/consistent-type-imports -----
type TsConsistentTypeImports = []|[{
  
  disallowTypeAnnotations?: boolean
  
  fixStyle?: ("separate-type-imports" | "inline-type-imports")
  
  prefer?: ("type-imports" | "no-type-imports")
}]
// ----- ts/dot-notation -----
type TsDotNotation = []|[{
  
  allowIndexSignaturePropertyAccess?: boolean
  
  allowKeywords?: boolean
  
  allowPattern?: string
  
  allowPrivateClassPropertyAccess?: boolean
  
  allowProtectedClassPropertyAccess?: boolean
}]
// ----- ts/explicit-function-return-type -----
type TsExplicitFunctionReturnType = []|[{
  
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowExpressions?: boolean
  
  allowFunctionsWithoutTypeParameters?: boolean
  
  allowHigherOrderFunctions?: boolean
  
  allowIIFEs?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- ts/explicit-member-accessibility -----
type TsExplicitMemberAccessibility = []|[{
  
  accessibility?: ("explicit" | "no-public" | "off")
  
  ignoredMethodNames?: string[]
  
  overrides?: {
    accessors?: ("explicit" | "no-public" | "off")
    constructors?: ("explicit" | "no-public" | "off")
    methods?: ("explicit" | "no-public" | "off")
    parameterProperties?: ("explicit" | "no-public" | "off")
    properties?: ("explicit" | "no-public" | "off")
  }
}]
// ----- ts/explicit-module-boundary-types -----
type TsExplicitModuleBoundaryTypes = []|[{
  
  allowArgumentsExplicitlyTypedAsAny?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowHigherOrderFunctions?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- ts/init-declarations -----
type TsInitDeclarations = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])
// ----- ts/max-params -----
type TsMaxParams = []|[{
  
  countVoidThis?: boolean
  
  max?: number
  
  maximum?: number
}]
// ----- ts/member-ordering -----
type TsMemberOrdering = []|[{
  classes?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  classExpressions?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  default?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  interfaces?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  typeLiterals?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
}]
// ----- ts/method-signature-style -----
type TsMethodSignatureStyle = []|[("property" | "method")]
// ----- ts/naming-convention -----
type _TsNamingConventionFormatOptionsConfig = (_TsNamingConventionPredefinedFormats[] | null)
type _TsNamingConventionPredefinedFormats = ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")
type _TsNamingConventionUnderscoreOptions = ("forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble")
type _TsNamingConvention_PrefixSuffixConfig = string[]
type _TsNamingConventionTypeModifiers = ("boolean" | "string" | "number" | "function" | "array")
type TsNamingConvention = ({
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
  selector: ("default" | "variableLike" | "memberLike" | "typeLike" | "method" | "property" | "accessor" | "variable" | "function" | "parameter" | "parameterProperty" | "classicAccessor" | "enumMember" | "classMethod" | "objectLiteralMethod" | "typeMethod" | "classProperty" | "objectLiteralProperty" | "typeProperty" | "autoAccessor" | "class" | "interface" | "typeAlias" | "enum" | "typeParameter" | "import")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "default"
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "variableLike"
  modifiers?: ("unused" | "async")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "variable"
  modifiers?: ("const" | "destructured" | "exported" | "global" | "unused" | "async")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "function"
  modifiers?: ("exported" | "global" | "unused" | "async")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "parameter"
  modifiers?: ("destructured" | "unused")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "memberLike"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "classProperty"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "objectLiteralProperty"
  modifiers?: ("public" | "requiresQuotes")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "typeProperty"
  modifiers?: ("public" | "readonly" | "requiresQuotes")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "parameterProperty"
  modifiers?: ("private" | "protected" | "public" | "readonly")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "property"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "classMethod"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "objectLiteralMethod"
  modifiers?: ("public" | "requiresQuotes" | "async")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "typeMethod"
  modifiers?: ("public" | "requiresQuotes")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "method"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "classicAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "autoAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "accessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "enumMember"
  modifiers?: ("requiresQuotes")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "typeLike"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "class"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "interface"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "typeAlias"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "enum"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "typeParameter"
  modifiers?: ("unused")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "import"
  modifiers?: ("default" | "namespace")[]
})[]
interface _TsNamingConvention_MatchRegexConfig {
  match: boolean
  regex: string
}
// ----- ts/no-base-to-string -----
type TsNoBaseToString = []|[{
  
  ignoredTypeNames?: string[]
}]
// ----- ts/no-confusing-void-expression -----
type TsNoConfusingVoidExpression = []|[{
  
  ignoreArrowShorthand?: boolean
  
  ignoreVoidOperator?: boolean
  
  ignoreVoidReturningFunctions?: boolean
}]
// ----- ts/no-duplicate-type-constituents -----
type TsNoDuplicateTypeConstituents = []|[{
  
  ignoreIntersections?: boolean
  
  ignoreUnions?: boolean
}]
// ----- ts/no-empty-function -----
type TsNoEmptyFunction = []|[{
  
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "private-constructors" | "protected-constructors" | "asyncFunctions" | "asyncMethods" | "decoratedFunctions" | "overrideMethods")[]
}]
// ----- ts/no-empty-interface -----
type TsNoEmptyInterface = []|[{
  
  allowSingleExtends?: boolean
}]
// ----- ts/no-empty-object-type -----
type TsNoEmptyObjectType = []|[{
  
  allowInterfaces?: ("always" | "never" | "with-single-extends")
  
  allowObjectTypes?: ("always" | "never")
  
  allowWithName?: string
}]
// ----- ts/no-explicit-any -----
type TsNoExplicitAny = []|[{
  
  fixToUnknown?: boolean
  
  ignoreRestArgs?: boolean
}]
// ----- ts/no-extraneous-class -----
type TsNoExtraneousClass = []|[{
  
  allowConstructorOnly?: boolean
  
  allowEmpty?: boolean
  
  allowStaticOnly?: boolean
  
  allowWithDecorator?: boolean
}]
// ----- ts/no-floating-promises -----
type TsNoFloatingPromises = []|[{
  
  allowForKnownSafeCalls?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowForKnownSafePromises?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkThenables?: boolean
  
  ignoreIIFE?: boolean
  
  ignoreVoid?: boolean
}]
// ----- ts/no-inferrable-types -----
type TsNoInferrableTypes = []|[{
  
  ignoreParameters?: boolean
  
  ignoreProperties?: boolean
}]
// ----- ts/no-invalid-this -----
type TsNoInvalidThis = []|[{
  capIsConstructor?: boolean
}]
// ----- ts/no-invalid-void-type -----
type TsNoInvalidVoidType = []|[{
  
  allowAsThisParameter?: boolean
  
  allowInGenericTypeArguments?: (boolean | [string, ...(string)[]])
}]
// ----- ts/no-magic-numbers -----
type TsNoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  
  ignoreEnums?: boolean
  
  ignoreNumericLiteralTypes?: boolean
  
  ignoreReadonlyClassProperties?: boolean
  
  ignoreTypeIndexes?: boolean
}]
// ----- ts/no-meaningless-void-operator -----
type TsNoMeaninglessVoidOperator = []|[{
  
  checkNever?: boolean
}]
// ----- ts/no-misused-promises -----
type TsNoMisusedPromises = []|[{
  
  checksConditionals?: boolean
  
  checksSpreads?: boolean
  
  checksVoidReturn?: (boolean | {
    
    arguments?: boolean
    
    attributes?: boolean
    
    inheritedMethods?: boolean
    
    properties?: boolean
    
    returns?: boolean
    
    variables?: boolean
  })
}]
// ----- ts/no-namespace -----
type TsNoNamespace = []|[{
  
  allowDeclarations?: boolean
  
  allowDefinitionFiles?: boolean
}]
// ----- ts/no-redeclare -----
type TsNoRedeclare = []|[{
  
  builtinGlobals?: boolean
  
  ignoreDeclarationMerge?: boolean
}]
// ----- ts/no-require-imports -----
type TsNoRequireImports = []|[{
  
  allow?: string[]
  
  allowAsImport?: boolean
}]
// ----- ts/no-restricted-imports -----
type TsNoRestrictedImports = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
  
  allowTypeImports?: boolean
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
    
    allowTypeImports?: boolean
  })[]
  patterns?: (string[] | {
    
    importNames?: [string, ...(string)[]]
    
    allowImportNames?: [string, ...(string)[]]
    
    group?: [string, ...(string)[]]
    regex?: string
    importNamePattern?: string
    allowImportNamePattern?: string
    message?: string
    caseSensitive?: boolean
    
    allowTypeImports?: boolean
  }[])
}])
// ----- ts/no-restricted-types -----
type TsNoRestrictedTypes = []|[{
  
  types?: {
    [k: string]: (true | string | {
      
      fixWith?: string
      
      message?: string
      
      suggest?: string[]
    }) | undefined
  }
}]
// ----- ts/no-shadow -----
type TsNoShadow = []|[{
  
  allow?: string[]
  
  builtinGlobals?: boolean
  
  hoist?: ("all" | "functions" | "never")
  
  ignoreFunctionTypeParameterNameValueShadow?: boolean
  
  ignoreOnInitialization?: boolean
  
  ignoreTypeValueShadow?: boolean
}]
// ----- ts/no-this-alias -----
type TsNoThisAlias = []|[{
  
  allowDestructuring?: boolean
  
  allowedNames?: string[]
}]
// ----- ts/no-type-alias -----
type TsNoTypeAlias = []|[{
  
  allowAliases?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowCallbacks?: ("always" | "never")
  
  allowConditionalTypes?: ("always" | "never")
  
  allowConstructors?: ("always" | "never")
  
  allowGenerics?: ("always" | "never")
  
  allowLiterals?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowMappedTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowTupleTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
}]
// ----- ts/no-unnecessary-boolean-literal-compare -----
type TsNoUnnecessaryBooleanLiteralCompare = []|[{
  
  allowComparingNullableBooleansToFalse?: boolean
  
  allowComparingNullableBooleansToTrue?: boolean
}]
// ----- ts/no-unnecessary-condition -----
type TsNoUnnecessaryCondition = []|[{
  
  allowConstantLoopConditions?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  checkTypePredicates?: boolean
}]
// ----- ts/no-unnecessary-type-assertion -----
type TsNoUnnecessaryTypeAssertion = []|[{
  
  typesToIgnore?: string[]
}]
// ----- ts/no-unused-expressions -----
type TsNoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
}]
// ----- ts/no-unused-vars -----
type TsNoUnusedVars = []|[(("all" | "local") | {
  
  args?: ("all" | "after-used" | "none")
  
  argsIgnorePattern?: string
  
  caughtErrors?: ("all" | "none")
  
  caughtErrorsIgnorePattern?: string
  
  destructuredArrayIgnorePattern?: string
  
  ignoreClassWithStaticInitBlock?: boolean
  
  ignoreRestSiblings?: boolean
  
  reportUsedIgnorePattern?: boolean
  
  vars?: ("all" | "local")
  
  varsIgnorePattern?: string
})]
// ----- ts/no-use-before-define -----
type TsNoUseBeforeDefine = []|[("nofunc" | {
  
  allowNamedExports?: boolean
  
  classes?: boolean
  
  enums?: boolean
  
  functions?: boolean
  
  ignoreTypeReferences?: boolean
  
  typedefs?: boolean
  
  variables?: boolean
})]
// ----- ts/no-var-requires -----
type TsNoVarRequires = []|[{
  
  allow?: string[]
}]
// ----- ts/only-throw-error -----
type TsOnlyThrowError = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- ts/parameter-properties -----
type TsParameterProperties = []|[{
  
  allow?: ("readonly" | "private" | "protected" | "public" | "private readonly" | "protected readonly" | "public readonly")[]
  
  prefer?: ("class-property" | "parameter-property")
}]
// ----- ts/prefer-destructuring -----
type TsPreferDestructuring = []|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  
  enforceForDeclarationWithTypeAnnotation?: boolean
  
  enforceForRenamedProperties?: boolean
  [k: string]: unknown | undefined
}]
// ----- ts/prefer-literal-enum-member -----
type TsPreferLiteralEnumMember = []|[{
  
  allowBitwiseExpressions?: boolean
}]
// ----- ts/prefer-nullish-coalescing -----
type TsPreferNullishCoalescing = []|[{
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  ignoreBooleanCoercion?: boolean
  
  ignoreConditionalTests?: boolean
  
  ignoreMixedLogicalExpressions?: boolean
  
  ignorePrimitives?: ({
    
    bigint?: boolean
    
    boolean?: boolean
    
    number?: boolean
    
    string?: boolean
    [k: string]: unknown | undefined
  } | true)
  
  ignoreTernaryTests?: boolean
}]
// ----- ts/prefer-optional-chain -----
type TsPreferOptionalChain = []|[{
  
  allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean
  
  checkAny?: boolean
  
  checkBigInt?: boolean
  
  checkBoolean?: boolean
  
  checkNumber?: boolean
  
  checkString?: boolean
  
  checkUnknown?: boolean
  
  requireNullish?: boolean
}]
// ----- ts/prefer-promise-reject-errors -----
type TsPreferPromiseRejectErrors = []|[{
  
  allowEmptyReject?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- ts/prefer-readonly -----
type TsPreferReadonly = []|[{
  
  onlyInlineLambdas?: boolean
}]
// ----- ts/prefer-readonly-parameter-types -----
type TsPreferReadonlyParameterTypes = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkParameterProperties?: boolean
  
  ignoreInferredTypes?: boolean
  
  treatMethodsAsReadonly?: boolean
}]
// ----- ts/prefer-string-starts-ends-with -----
type TsPreferStringStartsEndsWith = []|[{
  
  allowSingleElementEquality?: ("always" | "never")
}]
// ----- ts/promise-function-async -----
type TsPromiseFunctionAsync = []|[{
  
  allowAny?: boolean
  
  allowedPromiseNames?: string[]
  
  checkArrowFunctions?: boolean
  
  checkFunctionDeclarations?: boolean
  
  checkFunctionExpressions?: boolean
  
  checkMethodDeclarations?: boolean
}]
// ----- ts/require-array-sort-compare -----
type TsRequireArraySortCompare = []|[{
  
  ignoreStringArrays?: boolean
}]
// ----- ts/restrict-plus-operands -----
type TsRestrictPlusOperands = []|[{
  
  allowAny?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumberAndString?: boolean
  
  allowRegExp?: boolean
  
  skipCompoundAssignments?: boolean
}]
// ----- ts/restrict-template-expressions -----
type TsRestrictTemplateExpressions = []|[{
  
  allowAny?: boolean
  
  allowArray?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumber?: boolean
  
  allowRegExp?: boolean
  
  allowNever?: boolean
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- ts/return-await -----
type TsReturnAwait = []|[(("always" | "error-handling-correctness-only" | "in-try-catch" | "never") & string)]
// ----- ts/sort-type-constituents -----
type TsSortTypeConstituents = []|[{
  
  caseSensitive?: boolean
  
  checkIntersections?: boolean
  
  checkUnions?: boolean
  
  groupOrder?: ("conditional" | "function" | "import" | "intersection" | "keyword" | "nullish" | "literal" | "named" | "object" | "operator" | "tuple" | "union")[]
}]
// ----- ts/strict-boolean-expressions -----
type TsStrictBooleanExpressions = []|[{
  
  allowAny?: boolean
  
  allowNullableBoolean?: boolean
  
  allowNullableEnum?: boolean
  
  allowNullableNumber?: boolean
  
  allowNullableObject?: boolean
  
  allowNullableString?: boolean
  
  allowNumber?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  allowString?: boolean
}]
// ----- ts/switch-exhaustiveness-check -----
type TsSwitchExhaustivenessCheck = []|[{
  
  allowDefaultCaseForExhaustiveSwitch?: boolean
  
  considerDefaultExhaustiveForUnions?: boolean
  
  defaultCaseCommentPattern?: string
  
  requireDefaultForNonUnion?: boolean
}]
// ----- ts/triple-slash-reference -----
type TsTripleSlashReference = []|[{
  
  lib?: ("always" | "never")
  
  path?: ("always" | "never")
  
  types?: ("always" | "never" | "prefer-import")
}]
// ----- ts/typedef -----
type TsTypedef = []|[{
  
  arrayDestructuring?: boolean
  
  arrowParameter?: boolean
  
  memberVariableDeclaration?: boolean
  
  objectDestructuring?: boolean
  
  parameter?: boolean
  
  propertyDeclaration?: boolean
  
  variableDeclaration?: boolean
  
  variableDeclarationIgnoreFunction?: boolean
}]
// ----- ts/unbound-method -----
type TsUnboundMethod = []|[{
  
  ignoreStatic?: boolean
}]
// ----- ts/unified-signatures -----
type TsUnifiedSignatures = []|[{
  
  ignoreDifferentlyNamedParameters?: boolean
}]
// ----- tw/classnames-order -----
type TwClassnamesOrder = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  removeDuplicates?: boolean
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- tw/enforces-negative-arbitrary-values -----
type TwEnforcesNegativeArbitraryValues = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- tw/enforces-shorthand -----
type TwEnforcesShorthand = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- tw/migration-from-tailwind-2 -----
type TwMigrationFromTailwind2 = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- tw/no-arbitrary-value -----
type TwNoArbitraryValue = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- tw/no-contradicting-classname -----
type TwNoContradictingClassname = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- tw/no-custom-classname -----
type TwNoCustomClassname = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  cssFiles?: string[]
  cssFilesRefreshRate?: number
  tags?: string[]
  whitelist?: string[]
  [k: string]: unknown | undefined
}]
// ----- tw/no-unnecessary-arbitrary-value -----
type TwNoUnnecessaryArbitraryValue = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- unicode-bom -----
type UnicodeBom = []|[("always" | "never")]
// ----- unicorn/better-regex -----
type UnicornBetterRegex = []|[{
  sortCharacterClasses?: boolean
}]
// ----- unicorn/catch-error-name -----
type UnicornCatchErrorName = []|[{
  name?: string
  ignore?: unknown[]
}]
// ----- unicorn/consistent-function-scoping -----
type UnicornConsistentFunctionScoping = []|[{
  checkArrowFunctions?: boolean
}]
// ----- unicorn/expiring-todo-comments -----
type UnicornExpiringTodoComments = []|[{
  terms?: string[]
  ignore?: unknown[]
  ignoreDatesOnPullRequests?: boolean
  allowWarningComments?: boolean
  date?: string
}]
// ----- unicorn/explicit-length-check -----
type UnicornExplicitLengthCheck = []|[{
  "non-zero"?: ("greater-than" | "not-equal")
}]
// ----- unicorn/filename-case -----
type UnicornFilenameCase = []|[({
  case?: ("camelCase" | "snakeCase" | "kebabCase" | "pascalCase")
  ignore?: unknown[]
  multipleFileExtensions?: boolean
} | {
  cases?: {
    camelCase?: boolean
    snakeCase?: boolean
    kebabCase?: boolean
    pascalCase?: boolean
  }
  ignore?: unknown[]
  multipleFileExtensions?: boolean
})]
// ----- unicorn/import-style -----
type UnicornImportStyle = []|[{
  checkImport?: boolean
  checkDynamicImport?: boolean
  checkExportFrom?: boolean
  checkRequire?: boolean
  extendDefaultStyles?: boolean
  styles?: _UnicornImportStyle_ModuleStyles
}]
type _UnicornImportStyleStyles = (false | _UnicornImportStyle_BooleanObject) | undefined
interface _UnicornImportStyle_ModuleStyles {
  [k: string]: _UnicornImportStyleStyles | undefined
}
interface _UnicornImportStyle_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/no-array-push-push -----
type UnicornNoArrayPushPush = []|[{
  ignore?: unknown[]
}]
// ----- unicorn/no-array-reduce -----
type UnicornNoArrayReduce = []|[{
  allowSimpleOperations?: boolean
}]
// ----- unicorn/no-keyword-prefix -----
type UnicornNoKeywordPrefix = []|[{
  
  disallowedPrefixes?: []|[string]
  checkProperties?: boolean
  onlyCamelCase?: boolean
}]
// ----- unicorn/no-null -----
type UnicornNoNull = []|[{
  checkStrictEquality?: boolean
}]
// ----- unicorn/no-typeof-undefined -----
type UnicornNoTypeofUndefined = []|[{
  checkGlobalVariables?: boolean
}]
// ----- unicorn/no-unnecessary-polyfills -----
type UnicornNoUnnecessaryPolyfills = []|[{
  targets: (string | unknown[] | {
    [k: string]: unknown | undefined
  })
}]
// ----- unicorn/no-useless-undefined -----
type UnicornNoUselessUndefined = []|[{
  checkArguments?: boolean
  checkArrowFunctionBody?: boolean
}]
// ----- unicorn/numeric-separators-style -----
type UnicornNumericSeparatorsStyle = []|[{
  binary?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  octal?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  hexadecimal?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  number?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  onlyIfContainsSeparator?: boolean
}]
// ----- unicorn/prefer-add-event-listener -----
type UnicornPreferAddEventListener = []|[{
  excludedPackages?: string[]
}]
// ----- unicorn/prefer-array-find -----
type UnicornPreferArrayFind = []|[{
  checkFromLast?: boolean
}]
// ----- unicorn/prefer-array-flat -----
type UnicornPreferArrayFlat = []|[{
  functions?: unknown[]
}]
// ----- unicorn/prefer-at -----
type UnicornPreferAt = []|[{
  getLastElementFunctions?: unknown[]
  checkAllIndexAccess?: boolean
}]
// ----- unicorn/prefer-export-from -----
type UnicornPreferExportFrom = []|[{
  ignoreUsedVariables?: boolean
}]
// ----- unicorn/prefer-number-properties -----
type UnicornPreferNumberProperties = []|[{
  checkInfinity?: boolean
  checkNaN?: boolean
}]
// ----- unicorn/prefer-object-from-entries -----
type UnicornPreferObjectFromEntries = []|[{
  functions?: unknown[]
}]
// ----- unicorn/prefer-structured-clone -----
type UnicornPreferStructuredClone = []|[{
  functions?: unknown[]
}]
// ----- unicorn/prefer-switch -----
type UnicornPreferSwitch = []|[{
  minimumCases?: number
  emptyDefaultCase?: ("no-default-comment" | "do-nothing-comment" | "no-default-case")
}]
// ----- unicorn/prefer-ternary -----
type UnicornPreferTernary = []|[("always" | "only-single-line")]
// ----- unicorn/prevent-abbreviations -----
type UnicornPreventAbbreviations = []|[{
  checkProperties?: boolean
  checkVariables?: boolean
  checkDefaultAndNamespaceImports?: (boolean | string)
  checkShorthandImports?: (boolean | string)
  checkShorthandProperties?: boolean
  checkFilenames?: boolean
  extendDefaultReplacements?: boolean
  replacements?: _UnicornPreventAbbreviations_Abbreviations
  extendDefaultAllowList?: boolean
  allowList?: _UnicornPreventAbbreviations_BooleanObject
  ignore?: unknown[]
}]
type _UnicornPreventAbbreviationsReplacements = (false | _UnicornPreventAbbreviations_BooleanObject) | undefined
interface _UnicornPreventAbbreviations_Abbreviations {
  [k: string]: _UnicornPreventAbbreviationsReplacements | undefined
}
interface _UnicornPreventAbbreviations_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/relative-url-style -----
type UnicornRelativeUrlStyle = []|[("never" | "always")]
// ----- unicorn/string-content -----
type UnicornStringContent = []|[{
  patterns?: {
    [k: string]: (string | {
      suggest: string
      fix?: boolean
      message?: string
    }) | undefined
  }
}]
// ----- unicorn/switch-case-braces -----
type UnicornSwitchCaseBraces = []|[("always" | "avoid")]
// ----- unicorn/template-indent -----
type UnicornTemplateIndent = []|[{
  indent?: (string | number)
  tags?: string[]
  functions?: string[]
  selectors?: string[]
  comments?: string[]
}]
// ----- use-isnan -----
type UseIsnan = []|[{
  enforceForSwitchCase?: boolean
  enforceForIndexOf?: boolean
}]
// ----- valid-typeof -----
type ValidTypeof = []|[{
  requireStringLiterals?: boolean
}]
// ----- wrap-iife -----
type WrapIife = []|[("outside" | "inside" | "any")]|[("outside" | "inside" | "any"), {
  functionPrototypeMethods?: boolean
}]
// ----- yield-star-spacing -----
type YieldStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
})]
// ----- yoda -----
type Yoda = []|[("always" | "never")]|[("always" | "never"), {
  exceptRange?: boolean
  onlyEquality?: boolean
}]
// Names of all the configs
export type ConfigNames = 'js/setup' | 'js/rules' | 'tailwindcss/rules' | 'node/rules' | 'jsx/setup' | 'perfectionist/rules' | 'unicorn/rules' | 'react/setup' | 'react/rules' | 'next/rules' | 'esx/rules' | 'eslint-rules/rules' | 'import/rules' | 'ts/setup' | 'ts/parser' | 'ts/rules' | 'prettier/rules' | 'arca/rules' | 'comments/rules' | 'mutation/rules' | 'promise/rules' | 'regexp/rules' | 'sonarjs/rules'
