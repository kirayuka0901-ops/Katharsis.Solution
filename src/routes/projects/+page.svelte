<script lang="ts">
    import Separator from "$lib/components/Separator.svelte";
    import { projects } from "$lib/data/projects";
</script>

<svelte:head><title>Projects | Katastacia's Underground</title></svelte:head>
<h1 class="title">Projects</h1>
<Separator />
<p class="intro">A collection of things I've built or am learning to build. Edit <code>src/lib/data/projects.ts</code> to add your own work.</p>
<div class="project-list">
    {#each projects as project, index (project.name + index)}
        <article class="project">
            <div class="project-heading"><h2>{project.name}</h2><span>PROJECT_{String(index + 1).padStart(2, "0")}</span></div>
            <p>{project.description}</p>
            <div class="tags">{#each project.technologies as technology}<span>{technology}</span>{/each}</div>
            <div class="links">
                {#if project.repository}<a href={project.repository} target="_blank" rel="noreferrer">Repository ↗</a>{/if}
                {#if project.demo}<a href={project.demo} target="_blank" rel="noreferrer">Live demo ↗</a>{/if}
            </div>
        </article>
    {/each}
</div>
<style>
    .intro { line-height: 1.6; margin: 0 0 var(--padding-m); } code { overflow-wrap: anywhere; }
    .project-list { display: flex; flex-direction: column; gap: var(--padding-m); }
    .project { padding: var(--padding-m); background: var(--color-dark); border: var(--border-width) solid var(--color-border); }
    .project-heading { display: flex; justify-content: space-between; align-items: baseline; gap: var(--padding-s); }
    .project-heading h2 { font-size: 1.1rem; margin: 0; } .project-heading span { font-size: .75rem; color: var(--color-accent); }
    .project p { line-height: 1.6; } .tags,.links { display: flex; flex-wrap: wrap; gap: var(--padding-s); }
    .tags span { border: 1px solid var(--color-border); padding: .2rem .45rem; font-size: .8rem; }
    .links { margin-top: var(--padding-m); } .links a { color: var(--color-accent); }
</style>
