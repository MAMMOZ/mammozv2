<template>
  <div class="min-h-screen max-w mx-auto p-4 bg-[#2d1a64]">
    <div class="max-w-4xl mx-auto my-8 text-white px-4">
      <div
        class="bg-gradient-to-r from-blue-600 to-purple-800 p-10 rounded-lg flex flex-col sm:flex-row justify-between items-center"
      >
        <div class="text-lg">Welcome</div>
        <div class="text-4xl font-bold">MAMMOZ</div>
        <div class="flex space-x-4 mt-4 sm:mt-0">
          <div class="text-green-400" id="online">ONLINE : 0</div>
          <div class="text-red-400" id="offline">OFFLINE : 0</div>
          <div class="text-yellow-400" id="adb">ADB : 0</div>
        </div>
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
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt="Gem"
            class="w-16 rounded-lg"
          />
          <div class="text-2xl font-bold" id="gembot">Gold</div>
          <div class="text-2xl font-bold" id="gembot">599</div>
        </div>

        <!-- Enchant Relic -->
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <img
            src="https://media.discordapp.net/attachments/1214633871899885698/1303638347490525225/image.png?ex=672c7b52&is=672b29d2&hm=5e07bc5b1ebcb2b3fe1845f0cbcaebdd6e7ee19f0199937298ea8fce1ae1096c&=&format=webp&quality=lossless"
            alt="Enchant Relic"
            class="w-16 rounded-lg"
          />
          <div class="text-2xl font-bold" id="rrbot">Enchant Relic</div>
          <div class="text-2xl font-bold" id="gembot">599</div>
        </div>

        <!-- Trident Rod -->
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <img
            src="https://media.discordapp.net/attachments/1214633871899885698/1303966969158041660/Sea_Mine.webp?ex=672dad5f&is=672c5bdf&hm=fff06207b0a9a8c8b78a80003f37f345bdde2719f54b9b9f45ae96ee8796988b&=&format=webp"
            alt="Trident Rod"
            class="w-16 rounded-lg"
          />
          <div class="text-2xl font-bold" id="rrbot">Boom</div>
          <div class="text-2xl font-bold" id="rrbot">599</div>
        </div>

        <!-- Trident Rod -->
        <div
          class="bg-[#463187] p-4 rounded-lg text-center flex flex-col items-center place-content-center"
        >
          <img
            src="https://media.discordapp.net/attachments/1214633871899885698/1303638496686116874/image.png?ex=672c7b76&is=672b29f6&hm=9cb527417ee73b0dea61fa667c3837992d23b9bb4345798e16b76c4db474bea0&=&format=webp&quality=lossless"
            alt="Trident Rod"
            class="w-16 rounded-lg"
          />
          <div class="text-2xl font-bold" id="rrbot">Trident Rod</div>
          <div class="text-2xl font-bold" id="rrbot">599</div>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto my-4 text-white px-4">
      <!-- Navigation -->
      <div class="mt-4 flex items-center justify-between py-2">
        <div class="flex items-center">
          <span class="text-sm text-white">
            Showing {{ currentBatch[0]?.id || 0 }} to
            {{ currentBatch[currentBatch.length - 1]?.id || 0 }}
          </span>
        </div>
        <div class="flex space-x-2">
          <button
            @click="handlePrevious"
            :disabled="currentBatchIndex === 0"
            class="px-4 py-2 rounded bg-purple-700 text-white disabled:opacity-50 hover:bg-purple-600 transition-colors"
          >
            Previous (1-50)
          </button>
          <button
            @click="handleNext"
            :disabled="currentBatchIndex === 1"
            class="px-4 py-2 rounded bg-purple-700 text-white disabled:opacity-50 hover:bg-purple-600 transition-colors"
          >
            Next (51-100)
          </button>
        </div>
      </div>
      
      <div class="bg-[#3a287a] p-6 rounded-lg">
        <div class="px-2 sm:px-6">
          <div class="-mx-4 mt-2 sm:-mx-0">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="relative px-3 py-3.5 text-left text-sm font-semibold text-white sm:table-cell"
                  >
                    Com
                  </th>
                  <th
                    scope="col"
                    class="relative px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Swap
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y">
                <tr v-for="person in currentBatch">
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0"
                  >
                    {{ person.name }}
                  </td>
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0"
                  >
                    {{ person.name }}
                  </td>
                  <td
                    class="relative whitespace-nowrap px-3 py-4 text-sm font-medium sm:pr-3"
                  >
                    <a href="#" class="text-yellow-500">Swap</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center">
          <span class="text-sm text-white">
            Showing {{ currentBatch[0]?.id || 0 }} to
            {{ currentBatch[currentBatch.length - 1]?.id || 0 }}
          </span>
        </div>
        <div class="flex space-x-2">
          <button
            @click="handlePrevious"
            :disabled="currentBatchIndex === 0"
            class="px-4 py-2 rounded bg-purple-700 text-white disabled:opacity-50 hover:bg-purple-600 transition-colors"
          >
            Previous (1-50)
          </button>
          <button
            @click="handleNext"
            :disabled="currentBatchIndex === 1"
            class="px-4 py-2 rounded bg-purple-700 text-white disabled:opacity-50 hover:bg-purple-600 transition-colors"
          >
            Next (51-100)
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// const people = [
//   {
//     name: "mammoz",
//     money: "mammoz",
//     enchant_relic: "mammoz",
//     boom: "mammoz",
//     trident_rod: "mammoz",
//   },
//   {
//     name: "mammoz",
//     money: "mammoz",
//     enchant_relic: "mammoz",
//     boom: "mammoz",
//     trident_rod: "mammoz",
//   },
//   {
//     name: "mammoz",
//     money: "mammoz",
//     enchant_relic: "mammoz",
//     boom: "mammoz",
//     trident_rod: "mammoz",
//   },
// ];

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
