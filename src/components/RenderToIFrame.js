import { h, ref, createApp, onMounted, onBeforeUpdate } from "vue"

export default {
  name: "RenderToIFrame",
  props: {
    css: {
      type: String,
      default: ""
    }
  },
  setup(props, { slots }) {
    const iframeRef = ref(null)
    const iframeBody = ref(null)
    const iframeHead = ref(null)
    const iframeStyle = ref(null)
    let iframeApp = null

    onMounted(() => {
      // any
      iframeBody.value = iframeRef.value.contentDocument.body
      iframeHead.value = iframeRef.value.contentDocument.head
      const elem = document.createElement('script')
      elem.src = "https://cdn.tailwindcss.com"
      iframeHead.value.appendChild(elem)
      const el = document.createElement("div")
      iframeBody.value.appendChild(el)
      iframeStyle.value = document.createElement("style")
      iframeStyle.value.innerHTML = props.css
      iframeApp = createApp({
        name: "iframeRender",
        setup() {
          return () => slots.default()
        }
      }).mount(el)
    })
    onBeforeUpdate(() => {
      if (!iframeApp || !iframeRef.value) {
        return
      }
      if (props.css) {
        iframeStyle.value.innerHTML = props.css
      }
    })
    return () => h("iframe", { ref: iframeRef })
  }
}
