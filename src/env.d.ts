declare module '*.vue' {
  import { DefineComponent } from 'vue'
  //@ts-nocheck
  const component: DefineComponent<{}, {}, any>
  export default component
}
