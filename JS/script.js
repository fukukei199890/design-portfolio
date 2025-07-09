//フェードイン

window.addEventListener("DOMContentLoaded",() => {

const heading = document.querySelector(".heading")
const subheading = document.querySelector(".subheading")


const keyframe = {

opacity:[0, 1],


transform:["translateY(50px)","translteY(0)"]

}


const option = {

duration:2000,
ease:"linear",
fill:"forwards"

}


if(heading) heading.animate(keyframe, option)
if(subheading) subheading.animate(keyframe, option)



});