<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "../Separator.svelte";
    // Images
    


</script>

<div class="about-character-view">
    <div class="about-character-img">
        <img src="/katastacia-avatar.svg" alt="Katastacia avatar placeholder" />
    </div>

    <Separator margin={false} />

    <div class="about-character-info">
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.nick")}</b>
            <p>:</p>
            <p>Katastacia</p></span
        >
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.level")}</b>
            <p>:</p>
            <p>—</p></span
        >
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.hp")}</b>
            <p>:</p>
            <p>???</p></span
        >
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.source")}</b>
            <p>:</p>
            <div class="info-separator__flags"><span>EDIT</span></div>
        </span>
        <span class="info-separator"
            ><b>{@html $_("page.about.stats.rank")}</b>
            <p>:</p>
            <p>01</p></span
        >
    </div>
</div>

<style>
    .about-character-view {
        height: 100%;
        width: 15rem;

        display: flex;
        flex-direction: column;
        gap: var(--padding-s);

        border-right: var(--border-width) solid var(--color-border);
        padding: var(--padding-m);
    }

    .info-separator {
        display: grid;
        grid-template-columns: 1fr min-content 1fr;
    }
    .info-separator p:last-child {
        text-align: right;
    }

    .info-separator__flags {
        display: flex;
        justify-content: end;
        gap: var(--padding-s);
    }

    .about-character-img {
        height: 17.6rem;
        display: flex;
        justify-content: center;
    }
    .about-character-img img {
        height: 100%;
        width: auto;
    }
</style>
