<script>
  import { goto } from '$app/navigation'; // นำเข้า goto สำหรับการนำทาง
  function handleSubmit() {
    goto(`/login`);
  }
</script>
<div class="min-h-screen max-w mx-auto p-4 bg-[#2d1a64]">
  <div class="max-w-4xl mx-auto my-8 text-white px-4 w-full sm:grid grid-cols-2 gap-4">
    <div class="mt-5">
      <div class="text-xl">Welcome</div>
      <div class="text-6xl font-bold py-2">MAMMOZ</div>
      <div class="text-3xl font-bold mt-2">SWAP COOKIE WITH MAMMOZ</div>
      <div class="grid grid-cols-2 gap-2">
        <button class="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-2 sm:px-5 mt-4" on:click={handleSubmit}>Click</button>
          <button class="rounded-lg sm:px-2 mt-4">
            <center>
              <div class="flex items-center">
                <div>
                  <img class="w-[20px]" src="https://static.vecteezy.com/system/resources/thumbnails/011/888/164/small/neumorphic-play-icon-neumorphism-play-button-free-png.png" alt="" srcset="">
                </div>
                <div>
                  Learn how to start
                </div>
              </div>
            </center>
            
          </button>
        </div>
    </div>
    <div class="relative sm:mt-0 mt-5">
      <img
        src="https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/6408f05e6c67d8c648382f59_crypto-web-development-agency.png"
        alt=""
        class="relative z-10 w-full h-auto"
      />
    </div>
    
  </div>
  <div class="isolate overflow-hidden">
    <div class="flow-root mt-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="relative z-10">
          <div class="mt-16 flex justify-center">
            <fieldset aria-label="Payment frequency">
              <div class="rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white">
                <!-- Checked: "bg-indigo-500" -->
                <label class="cursor-pointer rounded-full px-2.5 py-1">
                  <input type="radio" name="frequency" value="monthly" class="sr-only">
                  <span>รายเดือน</span>
                </label>
              </div>
            </fieldset>
          </div>
        </div>
        <div class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
          <svg viewBox="0 0 1208 1024" aria-hidden="true" class="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0">
            <ellipse cx="604" cy="512" fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" rx="604" ry="512" />
            <defs>
              <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                <stop stop-color="#7775D6" />
                <stop offset="1" stop-color="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div class="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-[#463187] lg:ring-1 lg:ring-white/10" aria-hidden="true"></div>
          <div class="relative rounded-2xl bg-[#463187] ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0">
            <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
              <h3 id="tier-starter" class="text-sm/6 font-semibold text-white">Starter</h3>
              <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                <div class="mt-2 flex items-center gap-x-4">
                  <!-- Price, update based on frequency toggle state -->
                  <p class="text-4xl font-semibold tracking-tight text-white">30</p>
                  <div class="text-sm">
                    <p class="text-white">บาท</p>
                    <!-- Payment frequency, update based on frequency toggle state -->
                    <p class="text-gray-400">Billed monthly</p>
                  </div>
                </div>
                <a href="#" aria-describedby="tier-starter" class="rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Buy this plan</a>
              </div>
              <div class="mt-8 flow-root sm:mt-10">
                <ul role="list" class="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white lg:border-t-0">
                  <li class="flex gap-x-3 py-2">
                    <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    Swap Cookie
                  </li>
                  <li class="flex gap-x-3 py-2">
                    <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    Program Rejoin
                  </li>
                  <li class="flex gap-x-3 py-2">
                    <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    Account 300+
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="relative z-10 rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/10">
            <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
              <h3 id="tier-scale" class="text-sm/6 font-semibold text-gray-900">Scale</h3>
              <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                <div class="mt-2 flex items-center gap-x-4">
                  <!-- Price, update based on frequency toggle state -->
                  <p class="text-4xl font-semibold tracking-tight text-gray-900">150</p>
                  <div class="text-sm">
                    <p class="text-gray-900">บาท</p>
                    <!-- Payment frequency, update based on frequency toggle state -->
                    <p class="text-gray-500">Billed monthly</p>
                  </div>
                </div>
                <a href="#" aria-describedby="tier-scale" class="rounded-md bg-indigo-600 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy this plan</a>
              </div>
              <div class="mt-8 flow-root sm:mt-10">
                <ul role="list" class="-my-2 divide-y divide-gray-900/5 border-t border-gray-900/5 text-sm/6 text-gray-600 lg:border-t-0">
                  <li class="flex gap-x-3 py-2">
                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    Swap Cookie
                  </li>
                  <li class="flex gap-x-3 py-2">
                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    Program Rejoin
                  </li>
                  <li class="flex gap-x-3 py-2">
                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    Account 1000+
                  </li>
                  <li class="flex gap-x-3 py-2">
                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    Auto Swap Cookie (Script)
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div class="relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0">
            <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
              <h3 id="tier-growth" class="text-sm/6 font-semibold text-white">Growth</h3>
              <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                <div class="mt-2 flex items-center gap-x-4">
                  <!-- Price, update based on frequency toggle state -->
                  <p class="text-4xl font-semibold tracking-tight text-white">60</p>
                  <div class="text-sm">
                    <p class="text-white">บาท</p>
                    <!-- Payment frequency, update based on frequency toggle state -->
                    <p class="text-gray-400">Billed monthly</p>
                  </div>
                </div>
                <a href="#" aria-describedby="tier-growth" class="rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Buy this plan</a>
              </div>
              <div class="mt-8 flow-root sm:mt-10">
                <ul role="list" class="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white lg:border-t-0">
                  <li class="flex gap-x-3 py-2">
                    <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    Swap Cookie
                  </li>
                  <li class="flex gap-x-3 py-2">
                    <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    Program Rejoin
                  </li>
                  <li class="flex gap-x-3 py-2">
                    <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    Account 500+
                  </li>
                  <li class="flex gap-x-3 py-2">
                    <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    Auto Swap Cookie (Script)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>