<script>
    import { Heading, Hr } from "flowbite-svelte";
    import "iconify-icon";

    export let icon = "material-symbols:kid-star";
    export let text = "Título"
    export let tag = "h3"
</script>

<div class="flex items-center">
    <iconify-icon icon={`${icon}` ?? ""} class="text-xl mr-1"/>
    <Heading tag={tag} class="m-0">{ text }</Heading>
</div>
<Hr hrClass="mt-1 mb-4"/>