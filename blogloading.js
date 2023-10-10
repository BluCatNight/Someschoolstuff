var posttemp = document.getElementById("postexample")
var feed = document.getElementById("feed")
class post {
    constructor(title, text, imgpath) {
      this.text = text;
      this.imgpath = imgpath;
      this.title = title;
    }
  }

Jeffposts = [new post("Hello.","We have tooken off 3 days ago. we are in a stable orbit around earth. This rocket is pretty cozy. But i see myself getting bored in the future. Signing off, Jeff.","earth.jpeg"),
new post("A tiny tour of the panel.","So, it has been almost a month into the mission, and i have found somthing fun. It is giving a small tour for the spaceship. Here we have AC and wifi controls, With some radio stuff there. Goodbye, Jeff","Panel.jpeg"),
new post("FOCUS","This mission is taking too long, We have currently filed at least 125 bordom sheets. Its really hard to focus here. We really have done what we could. We cant do anything else. And the sound of the rocket its driving me crazy...","Focus.jpeg")]
function renderposts(list) {
  for(i=0;i<=list.length-1;i++) {
      //def
      content = []
      title = []
      img = []
      clone = posttemp.cloneNode(true)
      clone.id = "post" + i
      feed.appendChild(clone)
      for(z=0;z<=clone.childNodes.length-1;z++) {
          if(clone.childNodes[z].id == "cloneimg") {
            img = clone.childNodes[z]
            img.id = "img" + i
            console.log("img")
          }
          if(clone.childNodes[z].id == "title") {
            title = clone.childNodes[z]
            title.id = "title" + i
            console.log("title")
          }
          if(clone.childNodes[z].id == "clonebt") {
            content = clone.childNodes[z]
            content.id = "content" + i
            console.log("content")
          }
      }
      content.innerHTML = list[i].text
      title.innerHTML = list[i].title
      img.src = "./img/"+list[i].imgpath
      clone.style.display = "block"
      
      console.log(list[i])
  }
}