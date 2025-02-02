import {push} from "svelte-spa-router";

export function push_to(direction: string){
    return (event: any) => {
        event.preventDefault();
        push(direction).then(() => {});
    }
}