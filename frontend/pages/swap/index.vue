<template>
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
            src="https://media.discordapp.net/attachments/1214633871899885698/1304809534682042489/cffc83ee-4f80-4e13-8a5e-1648e6fc1a1c.png?ex=6730be13&is=672f6c93&hm=ee78425ac82ce5d40af6757990b534f3a9536bf5a403f23c0677737d9141dac4&=&format=webp&quality=lossless&width=396&height=350"
            alt="Gem"
            class="w-[120px] rounded-lg"
          />
          <div class="text-2xl font-bold py-2" id="gembot">Cookie</div>
          <div class="text-xl font-bold" id="gembot">599</div>
        </div>

        <!-- Enchant Relic -->
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <!-- <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c47c63af-de18-490c-ae7e-41a182c73d4a/d7s3tq3-356d900c-ecc5-4d09-822e-06819c50507f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0N2M2M2FmLWRlMTgtNDkwYy1hZTdlLTQxYTE4MmM3M2Q0YVwvZDdzM3RxMy0zNTZkOTAwYy1lY2M1LTRkMDktODIyZS0wNjgxOWM1MDUwN2YuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.g4ydAnI2OMxw-unjB9XJHLFNrdQDz0-OjlXxfvMJQA4"
            alt="Trident Rod"
            class="w-[160px] rounded-lg"
          /> -->
        </div>

        <!-- Trident Rod -->
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <!-- <img
            src="https://media1.tenor.com/m/NxEfSoc5_-kAAAAd/roblox.gif"
            alt="Trident Rod"
            class="w-[160px] rounded-lg"
          /> -->
        </div>

        <!-- Trident Rod -->
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <img
            src="https://media.discordapp.net/attachments/1214633871899885698/1304805216423645305/rb_43924.png?ex=6730ba0d&is=672f688d&hm=91cc1de3fb020c17a8e32a1fe7a8012e03b59d92425d1d9d743720ed615be989&=&format=webp&quality=lossless&width=350&height=350"
            alt="Trident Rod"
            class="w-[120px] rounded-lg"
          />
          <div class="text-2xl font-bold py-2" id="rrbot">PC</div>
          <div class="text-xl font-bold" id="rrbot">4</div>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto my-4 text-white px-4">
      <div class="mt-4 flex items-center justify-between py-2">
        <div class="flex items-center"></div>
        <div class="flex space-x-2">
          <button
            :disabled="currentBatchIndex === 1"
            class="px-4 py-2 rounded bg-blue-700 text-white disabled:opacity-50 hover:bg-blue-600 transition-colors"
          >
            Click Add Cookie
          </button>
        </div>
      </div>
      <div>
        <label for="comment" class="block text-sm/6 font-medium text-white"
          >Add Cookie</label
        >
        <div class="mt-2">
          <textarea
            rows="4"
            name="comment"
            id="comment"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm/6"
          ></textarea>
        </div>
        <div class="mt-4 flex items-center justify-between py-2">
          <div class="flex items-center"></div>
          <div class="flex space-x-2">
            <button
              :disabled="currentBatchIndex === 1"
              class="px-4 py-2 rounded bg-blue-700 text-white disabled:opacity-50 hover:bg-blue-600 transition-colors"
            >
              Add Cookie
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto my-8 text-white px-4">
      <div
        class="max-w-4xl w-full px-4 bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-2"
      >
        <h1 class="text-white text-xl">My PC</h1>
      </div>
    </div>

    <div class="flex items-center justify-center px-4 mt-4">
      <div
        class="max-w-4xl w-full grid grid-cols-2 sm:grid-cols-5 gap-4 px-4 text-white"
      >
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <img
            src="https://media.discordapp.net/attachments/1214633871899885698/1304805216423645305/rb_43924.png?ex=6730ba0d&is=672f688d&hm=91cc1de3fb020c17a8e32a1fe7a8012e03b59d92425d1d9d743720ed615be989&=&format=webp&quality=lossless&width=350&height=350"
            alt="Gem"
            class="w-32 rounded-lg"
          />
          <div class="text-2xl font-bold">PC 1</div>
        </div>
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <img
            src="https://media.discordapp.net/attachments/1214633871899885698/1304805216423645305/rb_43924.png?ex=6730ba0d&is=672f688d&hm=91cc1de3fb020c17a8e32a1fe7a8012e03b59d92425d1d9d743720ed615be989&=&format=webp&quality=lossless&width=350&height=350"
            alt="Gem"
            class="w-32 rounded-lg"
          />
          <div class="text-2xl font-bold">PC 2</div>
        </div>
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <img
            src="https://media.discordapp.net/attachments/1214633871899885698/1304805216423645305/rb_43924.png?ex=6730ba0d&is=672f688d&hm=91cc1de3fb020c17a8e32a1fe7a8012e03b59d92425d1d9d743720ed615be989&=&format=webp&quality=lossless&width=350&height=350"
            alt="Gem"
            class="w-32 rounded-lg"
          />
          <div class="text-2xl font-bold">PC 3</div>
        </div>
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <img
            src="https://media.discordapp.net/attachments/1214633871899885698/1304805216423645305/rb_43924.png?ex=6730ba0d&is=672f688d&hm=91cc1de3fb020c17a8e32a1fe7a8012e03b59d92425d1d9d743720ed615be989&=&format=webp&quality=lossless&width=350&height=350"
            alt="Gem"
            class="w-32 rounded-lg"
          />
          <div class="text-2xl font-bold">PC 4</div>
        </div>
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <img
            src="https://media.discordapp.net/attachments/1214633871899885698/1304805216423645305/rb_43924.png?ex=6730ba0d&is=672f688d&hm=91cc1de3fb020c17a8e32a1fe7a8012e03b59d92425d1d9d743720ed615be989&=&format=webp&quality=lossless&width=350&height=350"
            alt="Gem"
            class="w-32 rounded-lg"
          />
          <div class="text-2xl font-bold">PC 5</div>
        </div>
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <img
            src="https://media.discordapp.net/attachments/1214633871899885698/1304805216423645305/rb_43924.png?ex=6730ba0d&is=672f688d&hm=91cc1de3fb020c17a8e32a1fe7a8012e03b59d92425d1d9d743720ed615be989&=&format=webp&quality=lossless&width=350&height=350"
            alt="Gem"
            class="w-32 rounded-lg"
          />
          <div class="text-2xl font-bold">PC 6</div>
        </div>
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <img
            src="https://media.discordapp.net/attachments/1214633871899885698/1304805216423645305/rb_43924.png?ex=6730ba0d&is=672f688d&hm=91cc1de3fb020c17a8e32a1fe7a8012e03b59d92425d1d9d743720ed615be989&=&format=webp&quality=lossless&width=350&height=350"
            alt="Gem"
            class="w-32 rounded-lg"
          />
          <div class="text-2xl font-bold">PC 7</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const currentBatchIndex = ref(0);

// Generate all 100 items but split them into two batches
const allPeople = Array(100)
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

const currentBatch = computed(() => {
  return batches[currentBatchIndex.value];
});

const handleNext = () => {
  if (currentBatchIndex.value < 1) {
    currentBatchIndex.value++;
  }
};

const handlePrevious = () => {
  if (currentBatchIndex.value > 0) {
    currentBatchIndex.value--;
  }
};
</script>
