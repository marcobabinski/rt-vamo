<script>
    import MovieCard from "./MovieCard.svelte";

    export let filmList;
</script>

<div class="flex overflow-x-auto space-x-4 p-4 mb-8">
    { #each filmList as film }
        <div class="">
            <MovieCard {...film} />
        </div>
    {/each }
</div>

<style>
</style>