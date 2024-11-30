<script>
    import { writable, derived } from 'svelte/store';
    import { goto } from '$app/navigation'; // นำเข้า goto สำหรับการนำทาง
  
    const currentBatchIndex = writable(0);
  
    // Generate all 100 items but split them into two batches
    const allPeople = Array(7)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        name: `Person ${index + 1}`,
        money: `$${Math.floor(Math.random() * 10000)}`,
        enchant_relic: Math.floor(Math.random() * 100),
        boom: Math.floor(Math.random() * 50),
        trident_rod: `trident_rod ${index + 1}`,
      }));
  
    const batches = [
      allPeople.slice(0, 50), // First batch (1-50)
      allPeople.slice(50, 100), // Second batch (51-100)
    ];
  
    const currentBatch = derived(currentBatchIndex, $currentBatchIndex => batches[$currentBatchIndex]);

    console.log(allPeople);
  
    const handleNext = () => {
      currentBatchIndex.update(value => (value < 1 ? value + 1 : value));
    };
  
    const handlePrevious = () => {
      currentBatchIndex.update(value => (value > 0 ? value - 1 : value));
    };

    function handleSubmit(id) {
      console.log(id);
      goto(`/swap/${id}`);
    }
</script>
  
  <div class="min-h-screen max-w mx-auto p-4 bg-[#2d1a64]">
    <div class="max-w-4xl mx-auto my-8 text-white px-4">
      <div
        class="bg-gradient-to-r from-blue-600 to-purple-800 p-10 rounded-lg flex flex-col sm:flex-row justify-between items-center"
      >
        <div class="text-lg">Welcome</div>
        <div class="text-4xl font-bold">MAMMOZ</div>
      </div>
    </div>
  
    <div class="flex items-center justify-center">
      <div
        class="max-w-4xl w-full grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 text-white"
      >
        <!-- Gem -->
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <img
            src="https://media.discordapp.net/attachments/1214633871899885698/1304809534682042489/cffc83ee-4f80-4e13-8a5e-1648e6fc1a1c.png?ex=673aa153&is=67394fd3&hm=015d5993ffb8135ebd4fbdc109de00d8e7cd3d56db671386fd2ad827e390b120&=&format=webp&quality=lossless&width=792&height=700"
            alt="Gem"
            class="w-[120px] rounded-lg"
          />
          <div class="text-2xl font-bold py-2">Cookie</div>
          <div class="text-xl font-bold">599</div>
        </div>
  
        <!-- Enchant Relic -->
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <!-- Optional image can be added here -->
          <div class="text-2xl font-bold py-2 text-green-500">Online</div>
          <div class="text-xl font-bold">599</div>
        </div>
  
        <!-- Trident Rod -->
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <!-- Optional image can be added here -->
          <div class="text-2xl font-bold py-2 text-red-500">Offline</div>
          <div class="text-xl font-bold">599</div>
        </div>
  
        <!-- Trident Rod -->
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <img
            src="https://media.discordapp.net/attachments/1214633871899885698/1304805216423645305/rb_43924.png?ex=6734ae8d&is=67335d0d&hm=51487f9b1aaeab57aab90312cd89856d1e0eca45400261d6b34638ba7337c078&=&format=webp&quality=lossless&width=700&height=700"
            alt="Trident Rod"
            class="w-[120px] rounded-lg"
          />
          <div class="text-2xl font-bold py-2">PC</div>
          <div class="text-xl font-bold">{allPeople.length}</div>
        </div>
      </div>
    </div>
  
    <div class="max-w-4xl mx-auto my-8 text-white px-4">
      <div class="max-w-4xl w-full px-4 bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-2">
        <h1 class="text-white text-xl">My PC</h1>
      </div>
    </div>
  
    <div class="flex items-center justify-center px-4 mt-4">
      <div class="max-w-4xl w-full grid grid-cols-2 sm:grid-cols-5 gap-4 px-4 text-white">
        {#each allPeople as pc (pc.id)}
        
        <button on:click={handleSubmit(pc.id)}>
          <div
            class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
            key={pc.id}
          >
            <img
              src="https://media.discordapp.net/attachments/1214633871899885698/1304805216423645305/rb_43924.png?ex=6734ae8d&is=67335d0d&hm=51487f9b1aaeab57aab90312cd89856d1e0eca45400261d6b34638ba7337c078&=&format=webp&quality=lossless&width=700&height=700"
              alt="Gem"
              class="w-32 rounded-lg"
            />
            <div class="text-2xl font-bold">PC {pc.id}</div>
          </div>
        </button>
        {/each}
      </div>
    </div>
  </div>
  