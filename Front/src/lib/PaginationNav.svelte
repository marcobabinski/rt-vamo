<script>
    import "iconify-icon";
    import { Heading, A } from "flowbite-svelte";
    import { goto } from '$app/navigation';

    export let route;
    export let page = 1;

    function routePage(route, page, replaceState = false) {
        // goto(`/${route}/${page}`, { replaceState })
        window.location.assign(`/${route}/${page}`)
    }
</script>

<div class="w-full flex justify-center items-center">
    <button on:click={() => routePage(route, Math.max(1, page - 1))}><iconify-icon icon="material-symbols:chevron-left" class="flex justify-center text-orange-500 text-2xl hover:-translate-x-1 duration-75"/></button>
    <Heading tag="h4" class="w-min">{ page }</Heading>
    <button on:click={() => {routePage(route, page + 1);}}><iconify-icon icon="material-symbols:chevron-right" class="flex justify-center text-orange-500 text-2xl hover:translate-x-1 duration-75"/></button>
</div>