declare module '*.vue' {
    import { DefineComponent } from './vue-shim'
    const component: DefineComponent<{}, {}, any>
    export default component
}