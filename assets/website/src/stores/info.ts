import { defineStore } from 'pinia'
import { ref } from 'vue';
import {Websocket} from "@/modules/http.js";

function timestamp(seconds:number) {
  const calculatedTime = new Date(null!);
  calculatedTime.setSeconds( seconds ); //setting value in seconds
  const newTime = calculatedTime.toISOString().substr(11, 8);
  return newTime;
}


export const useInfoStore = defineStore('info', () => {
  const project = ref("None")
  const variant = ref("")
  const time    = ref("")
  const length  = ref("")
 
  function update( data_string:string ) {
      const data_object = JSON.parse( data_string);
      project.value = data_object.project;
      variant.value = data_object.variant;
      time.value = timestamp( data_object.time );
      length.value = timestamp( data_object.length );
    }
    Websocket.addEventListener( "message", (event:any) => update( event.data ));

    return { project, variant, time, length}
  }
);

