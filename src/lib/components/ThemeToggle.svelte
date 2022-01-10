<!-- <script>
    import { onMount } from "svelte";

    onMount(() => {
        const toggleSwitch = document.querySelector(
            '.theme-switch input[type="checkbox"]'
        );

        const currentTheme = localStorage.getItem("theme");

        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme);

            if (currentTheme === "dark") {
                toggleSwitch.checked = true;
            }
        }

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light");
            }
        }

        toggleSwitch.addEventListener("change", switchTheme, false);
    });
</script> -->
<script>
    import { onMount } from "svelte";

    onMount(() => {
        (function () {
            var toggler = document.querySelector(
                    '.theme-switch input[type="checkbox"]'
                ),
                root = document.documentElement,
                currentTheme = localStorage.getItem("theme") || "dark";

            if (currentTheme == "light") toggler.removeAttribute("checked");
            else toggler.checked = "true";

            root.setAttribute("data-theme", currentTheme);
            toggler.addEventListener("change", toggleTheme, false);

            function toggleTheme(e) {
                if (this.checked) {
                    root.setAttribute("data-theme", "dark");
                    localStorage.setItem("theme", "dark");
                } else {
                    root.setAttribute("data-theme", "light");
                    localStorage.setItem("theme", "light");
                }
            }
        })();
    });
</script>

<svelte:head>
    <script>
        // This is to prevent a brief white flash when page is reloaded while it is using dark theme.
        if (localStorage.theme)
            document.documentElement.setAttribute(
                "data-theme",
                localStorage.theme
            );
    </script>
</svelte:head>

<main>
    <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round" />
    </label>
</main>

<style>
    main {
        float: right;
    }

    .theme-switch {
        display: block;
        height: 26px;
        position: relative;
        width: 50px;
    }

    .theme-switch input {
        display: none;
    }

    .slider {
        background-color: #96dcee;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: ease 0.4s;
    }

    .slider:before {
        background-color: #fffaa8;
        border: 2px solid #f5eb71;
        bottom: 2px;
        content: "";
        height: 18px;
        left: 2px;
        position: absolute;
        transition: ease 0.4s;
        width: 18px;
    }

    input:checked + .slider {
        background-color: #6b7abb;
    }

    input:checked + .slider:before {
        background-color: #fff;
        border: 2px solid #d6d6d6;
        transform: translateX(24px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>
