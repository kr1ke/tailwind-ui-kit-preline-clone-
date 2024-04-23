<script setup>
import '@vue/repl/style.css'
import { Repl, useStore } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import { computed, onMounted, ref, watch, watchEffect, nextTick } from 'vue'
import appVue from './appVue.json'
import exampleVue from './exampleVue.json'

const appVueCode = appVue.code
const exampleCode = exampleVue.code
console.log(appVueCode, exampleCode)

const replComponent = ref()

const store = new useStore({
  builtinImportMap: ref({
    imports: {
      vue: 'https://play.vuejs.org/vue.runtime.esm-browser.js',
      'vue/server-renderer': 'https://play.vuejs.org/server-renderer.esm-browser.js',
      '@headlessui/vue': 'https://unpkg.com/@headlessui/vue@1.7.3/dist/headlessui.esm.js'
    }
  })
})
async function initEditor() {
  await store.setFiles({
    'src/App.vue': appVueCode,
    'src/Example.vue': exampleCode
  })
  await store.setActive('src/Example.vue')
  // console.log(store.getFiles())
  setTimeout(() => {
    store.init()
  }, 600)
}
onMounted(async () => {
  await initEditor()
})
function setData() {
  // store.setFiles({
  //   'src/App.vue': code.value,
  //   'src/index.vue': code.value
  // })
}
function getFiles() {
  console.log(replComponent.value)
  console.log(store.loading)
  console.log(store.getFiles())
}
function onSetImportMap() {
  // console.log(store)
}

function test() {
  console.log('test')
}

const counter = ref(0)

// watch(
//   () => store,
//   async (newValue, oldValue) => {
//     console.log(newValue, oldValue)
//     counter.value++
//     if (counter.value === 7) {
//       await nextTick()
//       setTimeout(() => {
//         console.log('hhhh')
//         store.init()
//       }, 1)
//     }
//   },
//   { deep: true }
// )
</script>

<template>
  <div>
    <div class="flex *:border gap-2">
      {{ counter }}
      <button @click="onSetImportMap">click</button>
      <button @click="setData">set data</button>
      <button @click="getFiles">get data</button>
    </div>
    <Repl
      :editor="CodeMirror"
      @update="test"
      :store="store"
      :clear-console="false"
      ref="replComponent"
    />
  </div>
</template>

<style>
.editor {
  min-height: 300px !important;
}
</style>
