<script setup lang="ts">
import RenderToIFrame from '@/components/RenderToIFrame'
import BaseMonacoEditor from '@/components/BaseMonacoEditor.vue'
import { ref, onMounted } from 'vue'

const myFrame = ref(null)

// onMounted(() => {
//   let doc;
//   if(myFrame.value.contentDocument) {
//     doc = myFrame.value.contentDocument;
//   } else {
//     doc = myFrame.value.contentWindow.document;
//   }
//   console.log(doc.body)
//   doc.body.innerHTML = '1113dzzzz';
//   doc.body.innerText = '1113dzzzz';
//   // myFrame.value.document.body.innerHTML = `<spam class="text-red">jjjj</spam>`
// })
const count = ref(0)
const codeValue = ref(
  `<div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
          <ul class="space-y-4">
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                Customizing your
                <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                Extracting classes with
                <code class="text-sm font-bold text-gray-900">@apply</code>
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">Code completion with instant preview</p>
            </li>
          </ul>
          <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
        </div>`
)
const testBool = ref(false)
onMounted(() => {
  setTimeout(() => {
    testBool.value = true
  }, 400)
})
</script>

<template>
  <div class="px-8 py-4">
    <h1 @click="testBool = !testBool">Handler</h1>
    <div class="flex">
      <BaseMonacoEditor width="700px" height="500px" v-model="codeValue" />
    </div>
  </div>
</template>
