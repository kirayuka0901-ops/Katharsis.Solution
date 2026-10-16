<script lang="ts">
    import { skillGroups } from "$lib/data/skills";
</script>

<div class="tools-container">
    {#each skillGroups as group, index (group.title + index)}
        <fieldset class="tools-section">
            <legend>{group.title}</legend>
            {#each group.items as item, itemIndex (item + itemIndex)}
                <div class="tool-entry" title={item}><span>{item}</span></div>
            {/each}
        </fieldset>
    {/each}
</div>

<style>
    .tools-container {
        display: flex;
        flex-direction: column;
        gap: var(--padding-m);
    }

    .tools-section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--padding-m);
        border: var(--color-border) solid var(--border-width);
        padding: var(--padding-m);
    }

    .tool-entry {
        border: 1px solid var(--color-border);
        padding: var(--padding-s) var(--padding-m);
        min-height: 2.5rem;
        display: grid;
        place-items: center;
    }
    .tool-entry span { font-size: .9rem; }
</style>
