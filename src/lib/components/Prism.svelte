<!-- ##### ONE DARK THEME FOR SYNTAX HIGHLIGHTING ###### -->
<style>
    :global(code[class*="language-"], pre[class*="language-"]) {
        color: #abb2bf;
        background: none;
        font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
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

    :global(pre[class*="language-"]::-moz-selection, pre[class*="language-"]
            ::-moz-selection, code[class*="language-"]::-moz-selection, code[class*="language-"]
            ::-moz-selection) {
        text-shadow: none;
        background: #383e49;
    }

    :global(pre[class*="language-"]::selection, pre[class*="language-"]
            ::selection, code[class*="language-"]::selection, code[class*="language-"]
            ::selection) {
        text-shadow: none;
        background: #9aa2b1;
    }

    @media print {
        :global(code[class*="language-"], pre[class*="language-"]) {
            text-shadow: none;
        }
    }
    /* Code blocks */
    :global(pre[class*="language-"]) {
        padding: 1em;
        margin: 0.5em 0;
        overflow: auto;
    }

    :global(:not(pre) > code[class*="language-"], pre[class*="language-"]) {
        background: #282c34;
    }

    /* Inline code */
    :global(:not(pre) > code[class*="language-"]) {
        padding: 0.1em;
        border-radius: 0.3em;
        white-space: normal;
    }

    :global(.token.comment, .token.prolog, .token.doctype, .token.cdata) {
        color: #5c6370;
    }

    :global(.token.punctuation) {
        color: #abb2bf;
    }

    :global(.token.selector, .token.tag) {
        color: #e06c75;
    }

    :global(.token.property, .token.boolean, .token.number, .token.constant, .token.symbol, .token.attr-name, .token.deleted) {
        color: #d19a66;
    }

    :global(.token.string, .token.char, .token.attr-value, .token.builtin, .token.inserted) {
        color: #98c379;
    }

    :global(.token.operator, .token.entity, .token.url, .language-css
            .token.string, .style .token.string) {
        color: #56b6c2;
    }

    :global(.token.atrule, .token.keyword) {
        color: #c678dd;
    }

    :global(.token.function) {
        color: #61afef;
    }

    :global(.token.regex, .token.important, .token.variable) {
        color: #c678dd;
    }

    :global(.token.important, .token.bold) {
        font-weight: bold;
    }

    :global(.token.italic) {
        font-style: italic;
    }

    :global(.token.entity) {
        cursor: help;
    }

    :global(.pre.line-numbers) {
        position: relative;
        padding-left: 3.8em;
        counter-reset: linenumber;
    }

    :global(.pre.line-numbers > code) {
        position: relative;
    }

    :global(.line-numbers .line-numbers-rows) {
        position: absolute;
        pointer-events: none;
        top: 0;
        font-size: 100%;
        left: -3.8em;
        width: 3em; /* works for line-numbers below 1000 lines */
        letter-spacing: -1px;
        border-right: 0;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    :global(.line-numbers-rows > span) {
        pointer-events: none;
        display: block;
        counter-increment: linenumber;
    }

    :global(.line-numbers-rows > span:before) {
        content: counter(linenumber);
        color: #5c6370;
        display: block;
        padding-right: 0.8em;
        text-align: right;
    }
</style>
