<script>
    export let data;

    const film = data.data[0] ?? {};
    // console.log(film)

    function convertDuration(duration) {
        const hours = Math.floor(duration / 60);
        const minutes = duration - (hours * 60);

        if (minutes < 10) return `${hours}h0${minutes}`
        else return `${hours}h${minutes}`;
    }
</script>
  
Título: { film.title } <br>
Descrição: { film.description } <br>
Nota: { film.note / 10 } <br>
Duração: { convertDuration(film.duration) }<br>