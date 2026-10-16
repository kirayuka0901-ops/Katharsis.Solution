<script lang="ts">
    import { applications } from "$lib/data/applications";
</script>

<div class="apps-container">
    {#each applications as app, index (app.name + index)}
        <div class="app-entry" title={app.description ?? app.name}>
            {#if app.link}
                <a class="app-link" href={app.link} target="_blank" rel="noreferrer">
                    <div class="app-image"><img src={app.image} alt={app.name} loading="lazy" /></div>
                    <p>{app.name}</p>
                </a>
            {:else}
                <div class="app-link">
                    <div class="app-image"><img src={app.image} alt={app.name} loading="lazy" /></div>
                    <p>{app.name}</p>
                </div>
            {/if}
        </div>
    {/each}
</div>

<style>
    .apps-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--padding-m);
    }

    .app-entry {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--padding-s);
        padding: var(--padding-s) var(--padding-m);
    }
    
    .app-image {
        position: relative;
        height: 100%;
        width: 3.5rem;
        display: grid;
        place-items: center;
        height: fit-content;
        padding: var(--padding-s);
    }
    .app-image img {
        height: auto;
        width: 100%;
        display: block;
    }
    .app-link { color: inherit; text-decoration: none; display: flex; flex-direction: column; align-items: center; gap: var(--padding-s); }
    a.app-link:hover { color: var(--color-accent); }
</style>
