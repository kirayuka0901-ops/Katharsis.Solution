<script lang="ts">
    import { _ } from "svelte-i18n";
    import Link from "$lib/components/links/Link.svelte";
    import Separator from "$lib/components/Separator.svelte";
</script>

<h1 class="title">{$_("page.links.title")}</h1>

<Separator />

<div class="container">
    <div class="container__list">
        <Link
            name={"YouTube"}
            description={$_("page.links.youtube")}
            icon={"YouTube"}
            link={"https://www.youtube.com/@KirayucaRC"}
        />
        <Link
            name={"Twitter"}
            description={$_("page.links.twitter")}
            icon={"Twitter"}
            link={"https://x.com/KirayukaVT"}
        />
        <Link
            name={"Discord"}
            description={$_("page.links.ko-fi")}
            icon={"Discord"}
            link={"https://discord.com/"}
        />
        <Link
            name={"Ko-Fi"}
            description={$_("page.links.ko-fi")}
            icon={"Ko-Fi"}
            link={"https://ko-fi.com/"}
        />
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
    }

    .container__list {
        width: 60%;
        flex-direction: column;
        display: flex;
        align-items: center;
        gap: var(--padding-m);
    }

    /* RESPONSIVE */
    @media screen and (max-width: 728px) {
        .container__list {
            width: 100%;
        }
    }
</style>
