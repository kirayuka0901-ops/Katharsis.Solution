<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
    import Window from "$lib/components/Window.svelte";
    import { playlists } from "$lib/data/music-playlists";
    import "$lib/assets/css/music.css";
</script>

<svelte:head>
    <title>{$_("page.music.page-title")} | Katastacia's Underground</title>
</svelte:head>

<h1 class="title">{$_("page.music.title")}</h1>
<Separator />
<p class="intro">A few playlists I keep on rotation. Edit <code>src/lib/data/music-playlists.ts</code> to add your own Spotify links.</p>

<Window title="~/Spotify">
    <div class="playlist-container">
        {#each playlists as playlist, index (playlist.name + index)}
            <a class="playlist-button" href={playlist.url} target="_blank" rel="noreferrer">
                <span class="spotify-mark" aria-hidden="true">♫</span>
                <span class="playlist-copy"><strong>{playlist.name}</strong>{#if playlist.description}<small>{playlist.description}</small>{/if}</span>
                <span class="arrow" aria-hidden="true">↗</span>
            </a>
        {/each}
    </div>
</Window>

<style>
    .intro { margin: 0 0 var(--padding-m); color: var(--color-fg); line-height: 1.6; }
    code { overflow-wrap: anywhere; }
    .playlist-container { display: flex; flex-direction: column; gap: var(--padding-s); }
    .playlist-button { display: flex; align-items: center; gap: var(--padding-m); padding: var(--padding-m); color: var(--color-fg); text-decoration: none; background: var(--color-dark); border: var(--border-width) solid var(--color-border); transition: background-color .15s ease, border-color .15s ease; }
    .playlist-button:hover { background: var(--color-border); border-color: var(--color-accent); }
    .spotify-mark { display: grid; place-items: center; width: 2.5rem; height: 2.5rem; border: 1px solid var(--color-accent); color: var(--color-accent); font-size: 1.5rem; flex: 0 0 auto; }
    .playlist-copy { display: flex; flex-direction: column; gap: .25rem; flex: 1; min-width: 0; }
    .playlist-copy strong { font-weight: 700; }
    .playlist-copy small { opacity: .75; line-height: 1.4; }
    .arrow { color: var(--color-accent); font-size: 1.25rem; }
</style>
