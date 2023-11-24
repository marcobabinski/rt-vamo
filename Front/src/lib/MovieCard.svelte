<script>
    // export let url;
    export let cover;
    export let title;
    export let i_film;
</script>

<div class="">
    <a href={`/film/${i_film}`} class="cursor-pointer">
        <div class="cover border rounded-lg overflow-hidden">
            <img src={cover} alt={`Capa do filme ${title}`} srcset="" class="transition h-[280px]">
        </div>
        <p class="text-center">{title}</p>
    </a>
</div>
       
<style>
    .cover:hover img {
        transform: scale(1.05);
    }

    img, .cover {
        max-width: 190px !important;
    }
</style>