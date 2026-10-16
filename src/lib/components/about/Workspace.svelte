<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "../Separator.svelte";
</script>

<div class="about-workspace">
    <div class="workspace-laptop" aria-hidden="true"><span>⌘</span></div>

    <Separator margin={false} />

    <div class="worspace-info">
        <div class="workspace-info__entry">
            <h3>{@html $_("page.about.workspace.model")}</h3>
            <h3 class="desktop-only">:</h3>
            <p>Edit your device</p>
        </div>

        <div class="workspace-info__entry">
            <h3>{@html $_("page.about.workspace.chip")}</h3>
            <h3 class="desktop-only">:</h3>
            <p>Edit your CPU</p>
        </div>

        <div class="workspace-info__entry">
            <h3>{@html $_("page.about.workspace.system")}</h3>
            <h3 class="desktop-only">:</h3>
            <p>Edit your OS</p>
        </div>
    </div>
</div>

<style>
    .about-workspace {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--padding-m);
    }

    .workspace-laptop {
        width: 50%;
        display: flex;
        justify-content: center;
    }
    .workspace-laptop span { font-size: 5rem; color: var(--color-accent); border: 2px dashed var(--color-border); padding: 1rem 2rem; }

    .workspace-info__entry {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: var(--padding-m);
        align-items: center;
    }
    .workspace-info__entry h3:nth-child(1) {
        text-align: right;
    }
    .workspace-info__entry p {
        text-align: left;
    }

    @media screen and (max-width: 728px) {
        .worspace-info {
            display: flex;
            flex-direction: column;
            gap: var(--padding-x);
        }

        .workspace-info__entry {
            display: flex;
            flex-direction: column;
            gap: var(--padding-s);
        }

        .workspace-laptop {
            width: 90%;
        }
    }
</style>
