<script>
    import "../app.css";
    import Navbar from "./Navbar.svelte";
  </script>
  
  <svelte:head>
    <title>MAMMOZ</title>
  </svelte:head>
  
  <div class="min-h-screen w-full">
      <Navbar />
      <slot />
  </div>