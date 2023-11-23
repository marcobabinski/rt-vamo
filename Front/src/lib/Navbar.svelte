<script>
    import { A, Input, Button, ButtonGroup, Heading } from "flowbite-svelte";
    import "iconify-icon";

    let searchInput;

    function handleSearch() {
        // console.log(searchInput);
        alert(searchInput);
    }
</script>

<nav class="bg-red-700 w-full px-8 py-2 grid grid-cols-[1fr_2fr_1fr]">
    <A href="/">
        <Heading tag="h3" class="text-white flex items-center gap-2">
            <iconify-icon icon="game-icons:tomato"/>
            Tomate Podre
        </Heading>
    </A>

    <form on:submit|once={handleSearch} class="flex justify-center">
        <ButtonGroup class="w-full max-w-2xl px-4">
            <Input bind:value="{searchInput}" placeholder={"O Cavaleiro das Trevas, Django Livre..."}/>
            <Button type="submit" alt="Buscar" class="bg-orange-500 text-white">
                <iconify-icon icon="material-symbols:search" class="text-2xl"/>
            </Button>
        </ButtonGroup>
    </form>

    <div class="">

    </div>
</nav>