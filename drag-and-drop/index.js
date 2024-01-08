const elDrag = document.querySelector(".drag")
const drop = document.querySelector(".target")


elDrag.addEventListener("dragstart",dragstart)

function dragstart(e){
 console.log(e.target)
 e.dataTransfer.setData("text/plain",e.target.id)

 setTimeout(()=>{
    e.target.classList.add("hide")
 },0)

}

 drop.addEventListener("dragenter",dragEnter)

 drop.addEventListener("dragover",dragOver)

 drop.addEventListener("dragleave",dragLeave)

 drop.addEventListener("drop",drops)

function dragEnter(e){
    e.preventDefault()
    console.log(e.target)
  e.target.classList.add("dragenter")
 }


function dragOver(e){
    e.preventDefault()
    e.target.classList.add("dragenter")
  }

 function dragLeave(e){
    e.target.classList.remove("dragenter")
  }

  function drops(e){
    e.target.classList.remove("dragenter")
    const id = e.dataTransfer.getData("text/plain")
    console.log(id)

  const dragID = document.getElementById(id)
   e.target.appendChild(dragID)

   dragID.classList.remove("hide")
  }



