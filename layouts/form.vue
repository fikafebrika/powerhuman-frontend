<template>
  <div>
    <div class="pt-[50px] md:px-[50px] flex justify-between items-center px-4">
      <a href="/index.html">
        <div class="flex flex-row items-center justify-center space-x-3">
          <img src="/assets/images/logo.png" alt="" width="35" />
          <p class="text-[20px] font-bold text-sky-900">HuManage</p>
        </div>
      </a>
      <a href="#" onclick="history.back()">
        <img src="/assets/svgs/ric-close-white.svg" alt="" />
      </a>
    </div>
    <Nuxt />
  </div>
</template>
