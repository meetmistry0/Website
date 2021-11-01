<style>
    :global(code[class*="language-"], pre[class*="language-"]) {
        color: #ccc;
        background: 0 0;
        font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
        font-size: 1em;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }
    :global(pre[class*="language-"]) {
        padding: 1em;
        margin: 0.5em 0;
        overflow: auto;
    }
    :global(:not(pre) > code[class*="language-"], pre[class*="language-"]) {
        background: #282c34;
    }
    :global(:not(pre) > code[class*="language-"]) {
        padding: 0.1em;
        border-radius: 0.3em;
        white-space: normal;
    }
    :global(.token.block-comment, .token.cdata, .token.comment, .token.doctype, .token.prolog) {
        color: #999;
    }
    :global(.token.punctuation) {
        color: #ccc;
    }
    :global(.token.attr-name, .token.deleted, .token.namespace, .token.tag) {
        color: #e2777a;
    }
    :global(.token.function-name) {
        color: #6196cc;
    }
    :global(.token.boolean, .token.function, .token.number) {
        color: #f08d49;
    }
    :global(.token.class-name, .token.constant, .token.property, .token.symbol) {
        color: #f8c555;
    }
    :global(.token.atrule, .token.builtin, .token.important, .token.keyword, .token.selector) {
        color: #cc99cd;
    }
    :global(.token.attr-value, .token.char, .token.regex, .token.string, .token.variable) {
        color: #7ec699;
    }
    :global(.token.entity, .token.operator, .token.url) {
        color: #67cdcc;
    }
    :global(.token.bold, .token.important) {
        font-weight: 700;
    }
    :global(.token.italic) {
        font-style: italic;
    }
    :global(.token.entity) {
        cursor: help;
    }
    :global(.token.inserted) {
        color: green;
    }
</style>
