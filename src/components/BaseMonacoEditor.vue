<script setup>
import '@vue/repl/style.css'
import { Repl, useStore } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import { ref, watch } from 'vue'

const code = ref(`
      <template>
        <h1>set data success</h1>
      </template>`)

const store = new useStore({
  builtinImportMap: ref({
    imports: {
      vue: 'https://play.vuejs.org/vue.runtime.esm-browser.js',
      'vue/server-renderer': 'https://play.vuejs.org/server-renderer.esm-browser.js',
      '@headlessui/vue': 'https://unpkg.com/@headlessui/vue@1.7.3/dist/headlessui.esm.js'
    }
  })
})
function setData() {
  store.setFiles({
    'src/App.vue': code.value
  })
}
function getFiles() {
  console.log(store.getFiles())
}
function onSetImportMap() {
  // console.log(store)
}
</script>

<template>
  <div>
    <div class="flex *:border gap-2">
      <button @click="onSetImportMap">click</button>
      <button @click="setData">set data</button>
      <button @click="getFiles">get data</button>
    </div>
    <Repl :editor="CodeMirror" :store="store" :clear-console="false" />
  </div>
</template>

<style>
.editor {
  min-height: 300px !important;
}
</style>
