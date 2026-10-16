<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
    import { games } from "$lib/data/games";
</script>

<svelte:head>
    <title>{$_("page.games.title")} | Katastacia's Underground</title>
</svelte:head>

<h1 class="title">{$_("page.games.title")}</h1>
<Separator />
<p class="intro">A small collection of games I play. Edit <code>src/lib/data/games.ts</code> to make this list yours.</p>

<div class="game-list">
    {#each games as game, index (game.name + index)}
        <article class="game">
            {#if game.link}
                <a class="game-link" href={game.link} target="_blank" rel="noreferrer">
                    <img src={game.image} alt={`Cover art for ${game.name}`} loading="lazy" />
                    <div class="game-copy"><h2>{game.name}</h2>{#if game.description}<p>{game.description}</p>{/if}</div>
                    <span class="external" aria-hidden="true">↗</span>
                </a>
            {:else}
                <div class="game-link">
                    <img src={game.image} alt={`Cover art for ${game.name}`} loading="lazy" />
                    <div class="game-copy"><h2>{game.name}</h2>{#if game.description}<p>{game.description}</p>{/if}</div>
                </div>
            {/if}
        </article>
    {/each}
</div>

<style>
    .intro { margin: 0 0 var(--padding-m); color: var(--color-fg); line-height: 1.6; }
    code { overflow-wrap: anywhere; }
    .game-list { display: flex; flex-direction: column; gap: var(--padding-s); }
    .game { background: var(--color-dark); border-left: .35rem solid var(--color-border); }
    .game-link { min-height: 6rem; display: flex; align-items: center; gap: var(--padding-m); padding: var(--padding-s); color: inherit; text-decoration: none; }
    a.game-link { transition: background-color .15s ease; }
    a.game-link:hover { background-color: var(--color-border); }
    .game-link img { width: 6.5rem; height: 4.5rem; object-fit: cover; flex: 0 0 auto; border: 1px solid var(--color-border); }
    .game-copy { min-width: 0; flex: 1; }
    .game-copy h2 { margin: 0 0 .35rem; font-size: 1rem; }
    .game-copy p { margin: 0; opacity: .8; line-height: 1.5; font-size: .9rem; }
    .external { font-size: 1.25rem; color: var(--color-accent); }
    @media (max-width: 480px) { .game-link img { width: 5rem; height: 3.5rem; } }
</style>
