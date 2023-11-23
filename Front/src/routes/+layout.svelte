<script>
  import Navbar from "$lib/Navbar.svelte";
  import "../app.postcss";
</script>


<div class="app bg-gray-200 w-screen min-h-screen flex flex-col items-center gap-4">
  <Navbar />
  <main class="w-[800px] max-w-full bg-white rounded py-4 px-6 shadow-md">
    robson
    <slot />
  </main>
</div>