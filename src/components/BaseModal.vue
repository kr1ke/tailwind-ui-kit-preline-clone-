<template>
  <div class="w-screen h-screen top-0 left-0 fixed bg-gray-600 z-50 opacity-85"></div>
  <div
    class="hs-overlay w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden flex items-center justify-center overflow-y-auto">
    <div class="opacity-100 duration-500 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
      <div class="bg-white border h-fit border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h2 class="block text-2xl font-bold text-gray-800 dark:text-gray-200">Добавить компонент</h2>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remember your password?
              <a
                class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="../examples/html/modal-signin.html">
                Sign in here
              </a>
            </p>
          </div>

          <div class="mt-5">
            <!-- Form -->
            <form>
              <div class="">
                <!-- Form Group -->
                <div>
                  <label for="email" class="">Имя</label>
                  <div class="relative">
                    <input type="email" id="email" name="email"
                           class="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                           required aria-describedby="email-error" placeholder="Имя компонента">
                  </div>
                </div>
                <div class="mt-4">
                  <label for="email" class="">Описание</label>
                  <div class="relative">
                    <textarea type="email" id="email" name="email"
                              class="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                              required aria-describedby="email-error" placeholder="Описание компонента"></textarea>
                  </div>
                </div>
                <div class="relative">
                  <select data-hs-select='{
      "placeholder": "Select option...",
      "toggleTag": "<button type=\"button\"></button>",
      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
      "dropdownClasses": "mt-2 z-50 w-full max-h-[300px] p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto dark:bg-slate-900 dark:border-gray-700",
      "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
    }'>
                    <option value="">Choose</option>
                    <option>Name</option>
                    <option>Email address</option>
                    <option>Description</option>
                    <option>User ID</option>
                  </select>

                  <div class="absolute top-1/2 end-2.5 -translate-y-1/2">
                    <svg class="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
                  </div>
                </div>
                <CodeInput />
                <div class="items-center justify-center flex gap-2 mt-4">
                  <button type="button"
                          @click="emit('closeModal')"
                          class="w-1/2 text-center justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold text-base rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Отмена
                  </button>
                  <button type="button"
                          class="w-1/2 justify-center text-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold text-base rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Добавить
                  </button>
                </div>
                <!-- End Form Group -->
              </div>
            </form>
            <!-- End Form -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['closeModal'])
import CodeInput from '@/components/CodeInput.vue'
</script>