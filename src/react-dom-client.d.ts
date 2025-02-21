   // src/react-dom-client.d.ts
   declare module 'react-dom/client' {
    import { Root } from 'react-dom';
    export function createRoot(container: Element | DocumentFragment): Root;
}