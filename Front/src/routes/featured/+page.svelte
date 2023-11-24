<script>
    import { Heading, List, Li } from "flowbite-svelte" 
    export let data;

    const genres = data.data;
</script>

<Heading tag="h1">Lista de Gêneros</Heading>

<List>
    { #each genres as movie }
        <Li>{ movie.title }</Li>
    {/each}
</List>