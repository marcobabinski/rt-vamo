<script>
    import { Heading, List, Li, A } from "flowbite-svelte" 
    export let data;

    const genres = data.data;

    const baseUrl = "/genre"
</script>

<Heading tag="h1">Lista de Gêneros</Heading>

<List>
    { #each genres as { name } }
        <Li>
            <A href={`${baseUrl}/${name}`}>{name}</A> 
        </Li>
    {/each}
</List>