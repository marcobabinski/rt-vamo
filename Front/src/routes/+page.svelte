<script>
    import HorizontalList from '$lib/HorizontalList.svelte';
    import Title from '$lib/Title.svelte';
    import { Carousel } from 'flowbite-svelte';
    export let data;

    console.log(data);

    const featured = data.featured.data;
    const genres = data.genres.data;
    const genreFilms = data.genreFilms;

    // console.log(featured.map((film) => ({title: film.title, src: film.cover, alt: film.title}) ))
    const images = featured.map((film) => ({title: film.title, src: film.cover, alt: film.title, id: film.i_film}))
    let image;
    // console.log(genreFilms[genres[0].name])
</script>

<main class="flex flex-col gap-10">
    <div class="">
        <Title text="Destaques" icon="material-symbols:kid-star"/>

        <Carousel {images} let:Indicators on:change={({ detail }) => (image = detail)} >
            <Indicators />
        </Carousel>

        <div on:click={() => {window.location.assign(`/film/${image.id}`)}} role="button" class="rounded bg-gray-100 p-2 my-2 text-center font-semibold text-2xl">
            {image?.title}
        </div>
    </div>

    <div class="">
        <Title icon="carbon:categories" text="Categorias"/>

        { #each genres as genre }
            <Title icon="" text={genre.name} tag="h5"/>
            <HorizontalList filmList={genreFilms[genre.name].data}/>
        { /each }
    </div>
</main>