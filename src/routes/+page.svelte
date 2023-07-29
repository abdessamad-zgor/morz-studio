
<script lang="ts">
import Home from "../components/Home.svelte";
import Pitch from "../components/Pitch.svelte";
import Work from "../components/Work.svelte";
import { index } from "$lib";

let tape : HTMLDivElement
let currentIndex:number = $index
// if index increases slide the div by 100 vw
index.subscribe(()=>{
    console.log("Reactive currentIndex ", currentIndex, " $index store ", $index);
    if (currentIndex-$index>0){
        console.log("Tape ", currentIndex-$index)

        tape.animate(
        [{transform: `translateX(-100vw)`}
        ,{transform: `translateX(0)`}],
        {duration: 800,
        easing:"ease",
        fill: "forwards"}); 


        currentIndex = $index
    }else if(currentIndex-$index<0){
        console.log("Tape ", currentIndex-$index)
    
    tape.animate([{transform: `translateX(0)`},{transform: `translateX(-${($index)*100}vw)`}],
    {duration: 800,easing:"ease", fill:"forwards"});

        currentIndex = $index
    }
});

</script>

<div bind:this={tape} class="flex flex-row w-[200vw]">
<Home/>
<Work/>
<Pitch/> 
</div>

<style>
*{
cursor: cell;
}
</style>

