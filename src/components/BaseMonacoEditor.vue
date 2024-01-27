<template>
  <vue-monaco-editor
    v-model:value="model"
    theme="vs-dark"
    :options="MONACO_EDITOR_OPTIONS"
    @mount="handleMount"
    language="html"
  />
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  fontLigatures: true,
  fontFamily: 'Times',
  minimap: { enabled: false }
}

// interface Props {
//   codeValue: string
// }
// const { codeValue } = defineProps<Props>()

const model = defineModel()

const editorRef = shallowRef()
const handleMount = (editor) => {
  editorRef.value = editor
  console.log(editorRef.value)
}

// your action
function formatCode() {
  editorRef.value?.getAction('editor.action.formatDocument').run()
}
</script>
