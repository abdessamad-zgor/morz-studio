<script lang="ts">
//    import {onMount} from "svelte";
import { index } from "$lib";

    function slide(dir: -1|1){
        console.log("slide to ", dir)
            index.set($index+dir)
    }

let workIndex: number|null = null;

const works = [
    {
        id:0,
        title: "Badis",
        description: "Web à "
    }
]

function allowDrop(ev:Event) {
  ev.preventDefault();
}

function drag(ev:Event) {
  //@ts-ignore
  ev.dataTransfer.setData("refrence", ev.target);
}

function drop(ev:Event) {
  ev.preventDefault();
  //@ts-ignore
  var data = ev.dataTransfer.getData("refrence");
  //@ts-ignore
  ev.target.appendChild(data);
}

</script>

<section class="relative w-[100vw] min-h-screen flex flex-col items-center overflow-hidden">
 <div class="relative w-full min-h-screen overflow-hidden">
    <div class="w-[40vw] bg-stone-400 shadow-xl z-10 h-[40vw] rounded-[10vw] border border-stone-400 absolute top-[-20vw] right-[-20vw]"></div>
    <div class="w-[40vw] bg-stone-300 shadow-xl z-[9] h-[40vw] rounded-[10vw] border border-stone-300 absolute top-0 right-[-20vw]"></div>
    <div class="w-[40vw] bg-stone-300 shadow-xl z-[8] h-[40vw] rounded-[10vw] border border-stone-300 absolute top-[-20vw] right-0"></div>
    <div class="w-[40vw] bg-stone-100 shadow-xl z-[7] h-[40vw] rounded-[10vw] border border-stone-100 absolute top-[-20vw] right-[20vw]"></div>
    <div class="w-[40vw] bg-stone-100 shadow-xl z-[6] h-[40vw] rounded-[10vw] border border-stone-100 absolute top-0 right-0"></div>
    <div class="w-[40vw] bg-stone-100 shadow-xl z-[7] h-[40vw] rounded-[10vw] border border-stone-100 absolute top-[20vw] right-[-20vw]"></div>
</div>
<div class="h-[200vh] w-[200vh] absolute top-[50%] left-[-50%] rounded-full border-[20px] border-sky-500"></div>

<div class="absolute top-0 bottom-0 left-0 p-20" on:click={()=>slide(-1)}></div>
<div class="absolute top-0 bottom-0 right-0 z-20 p-20" on:click={()=>slide(1)}></div>
</section>

