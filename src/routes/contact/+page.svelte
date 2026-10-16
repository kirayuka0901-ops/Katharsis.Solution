<script lang="ts">
    import { _ } from "svelte-i18n";
    import Separator from "$lib/components/Separator.svelte";
    import Social from "$lib/components/contact/Social.svelte";
</script>

<svelte:head>
    <title>{$_("page.contact.title")}</title>
</svelte:head>

<h1 class="title">{$_("page.contact.title")}</h1>

<Separator />

<div class="container">
	<div class="container__items">
		<Social
			socialApp={"Mail"}
			name={"Email"}
			linkText={"Business"}
			link={"mailto:your-email@example.com"}
		/>
		<Social
			socialApp={"Twitter"}
			name={"Twitter"}
			linkText={"Your username"}
			link={"https://x.com/your-username"}
		/>
		<Social
			socialApp={"Discord"}
			name={"Discord"}
			linkText={"Net Cafe"}
			link={"https://discord.com/"}
		/>
	</div>
</div>

<style>
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    
	.container__items {
		width: fit-content;
		align-items: center;
        display: flex;
    }

    @media screen and (max-width: 728px) {
        .container__items {
            flex-direction: column;
        }
    }
</style>
