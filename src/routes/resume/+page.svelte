<script lang="ts">
    import Separator from "$lib/components/Separator.svelte";
</script>
<svelte:head><title>Resume | Katastacia's Underground</title></svelte:head>
<h1 class="title">Resume / CV</h1>
<Separator />
<section class="resume-panel">
    <p>Place your finished CV at <code>static/resume.pdf</code>, then uncomment the download link below.</p>
    <!-- When static/resume.pdf exists, uncomment this link: -->
    <!-- <a class="resume-link" href="/resume.pdf" download>Download my CV ↧</a> -->
    <p class="note">Remember to replace this message after adding your PDF.</p>
</section>
<style>
    .resume-panel { padding: var(--padding-m); background: var(--color-dark); border: var(--border-width) solid var(--color-border); line-height: 1.7; }
    code { overflow-wrap: anywhere; } .note { color: var(--color-accent); font-size: .9rem; }
    .resume-link { display: inline-block; margin-top: var(--padding-m); padding: var(--padding-s) var(--padding-m); border: 1px solid var(--color-border); color: var(--color-fg); text-decoration: none; }
</style>
