let button=document.querySelector("#button");
let message_status=document.querySelector("#message");

button.addEventListener("click",()=>{
    let input_field= document.querySelector("#input_field");
    if(input_field.value==""){
        message_status.innerHTML="Please Enter the text";
    }
    else{
      input_field.select();
      navigator.clipboard.writeText(input_field.value).then(() => {
        message_status.innerHTML="Text is Copied!";
      })
    }
})
