<script>
    import MovieCard from "$lib/MovieCard.svelte";
    import PaginationNav from "$lib/PaginationNav.svelte";
    
    import { Heading, List, Li } from "flowbite-svelte";
    export let data;

    const films = data.data.result;
    const page = Number(data.data.page) + 1;

    function getPage() {
        const url = location.href;
        let pos = 0;
        let result = "";

        while (!result.includes("/")) {
            result += url[url.length - pos];
            pos -= 1;
        }

        return result.replace("/", "")
    }
</script>

<Heading tag="h2" class="mb-8">Lista de Filmes:</Heading>

<div class="grid grid-cols-4 gap-x-4 gap-y-8 mb-8">
    { #each films as film }
        <MovieCard {...film}/>
    {/each}
</div>

<PaginationNav route={"films"} page={page}/>