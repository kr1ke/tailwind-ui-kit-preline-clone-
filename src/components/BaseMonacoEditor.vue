<script setup>
import '@vue/repl/style.css'
import { Repl, useStore } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import { ref, watch } from 'vue'

const code = ref(`
      <template>
        <h1>set data success</h1>
      </template>`)

const store = new useStore()
function setData() {
  store.setFiles({
    'src/App.vue': code.value
  })
}
function getFiles() {
  console.log(store.getFiles())
}
</script>

<template>
  <div>
    <div class="flex *:border gap-2">
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
