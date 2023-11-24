<script>
    import { Heading } from 'flowbite-svelte';
    import "iconify-icon";

    export let data;

    const film = data.data[0] ?? null;
    console.log(film)

    function convertDuration(duration) {
        const hours = Math.floor(duration / 60);
        const minutes = duration - (hours * 60);

        if (minutes < 10) return `${hours}h0${minutes}`
        else return `${hours}h${minutes}`;
    }
</script>

<title>{ film.title } | TP</title>
{ #if film }
    <div class="grid grid-rows-3 grid-cols-6">
        <img src={ film.cover } alt={`Capa do filme ${film.title}`} srcset="" class="col-span-2 row-span-6 rounded-xl">
        <div class="col-span-4 row-span-1 p-4">
            <Heading tag="h3" class="mb-2">{ film.title }</Heading>
            <div class="flex items-center gap-1">
                <div class="bg-red-500 rounded text-white px-2 w-min text-sm">{ film.category }</div>
                <iconify-icon icon="ph:dot-outline-fill"/>
                <p class="text-gray-700 italic semibold">{ convertDuration(film.duration) }</p>
                <iconify-icon icon="ph:dot-outline-fill"/>
                { #each Array.from({ length: film.score }, (_, i) => i + 1) as score }
                    <iconify-icon class="text-yellow-400" icon="material-symbols:kid-star"/>
                {/each }
                { #each Array.from({ length: 5 - film.score }, (_, i) => i + 1) as score }
                    <iconify-icon class="text-gray-800" icon="material-symbols:kid-star"/>
                {/each }
            </div>
        </div>
        <div class="col-span-4 row-span-2 px-4">
            <p class="">{ film.description }</p><br>
            <p><b>Direção: </b>{ film.director }</p>
            <p><b>Ano de Lançamento: </b>{ film.releaseyear }</p>
        </div>
    </div>
{ :else }
    <Heading tag="h1" class="text-center">404!</Heading>
    <Heading tag="h3" class="text-center">Filme não encontrado</Heading>
{ /if }