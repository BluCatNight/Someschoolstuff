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


JobPosts = [
  new post("Wanna cook?","Our local culinary guild is currently really freindly to up and coming bakers! Make sweet treats and bread for the entire village to enjoy! We pay <span style='color:rgb(54,171,44)'>Well</span> for this job.",""),
  new post("Working with iron?","We build swords and tools for the rest of the town, We are part of our local Smithing Guild, We require large experince and the training is very intensive. We pay <span style='color:rgb(41,246,36)'>Extremely well</span> for this job.",""),
  new post("Going to build?","Want to build buildings and churches for the town? You must we wanting to work for the Smithing Guild! It does both jobs! It requires little top no expirince, if you can listen to a architect then you can do this! We pay <span style='color:rgb(246,241,36)'>Ok</span> for this job.",""),
  new post("Want to battle?","You have to train to be a knight, You first must do work for the ladies of the castle. In return, they teach you chivalry. You must then train for battle, You will know when you are ready. We pay <span style='color:rgb(41,246,36)'>Extremely well</span> for this job.","")
]
HealthPosts = [
  new post("Got sick?","Experince our healing strategys! They work well and the victim heal in a few days."),
  new post("Blood Draining","We drain the corrupt blood and wait for new blood to take its place, I promise that the pain is temporary."),
  new post("Herb healing","We put the purest flowers in your meal so you rejuvinate better")
]

EducationPosts = [
  new post("Chivalry.","You can become a knight but you will have to go though a training proccess and master chivalry.",""),
  new post("More???","Out Guilds are not against training up and coming masters of craft. You can meet guild members in stores around the town square.", "")
]

EntertainmentPosts = [new post("Music","We have our town band ready to play any music you like, if you are more on the religious side, you can see the church's choir",""),
new post("Mountains","Outkast has a marvelous view of massive mountains that stretch up to the sky.",""),
new post("Barracks policy","Outkast has quite a large barracks. Many people may sharpen their skills with many weapons like daggers, bows and swords.",""),
new post("Church","If you have spare time to spend you may spend that praying at the church. The church is large, relaxing and quiet.","")]

GoodtoknowPosts = [
  new post("Urgent need for BETTER Food?","We gotcha! We have many master bakers scattered around town! You can eat all you want*! We have breads, treats and more! You can also have it delivered straight to your door! *as long as you dont dent your pockets",""),
  new post("Enemies", "There are a lot of aggressive rulers around our town, if you hear a threat of attack, please report it directly to the king or your lord")
]
async function renderposts(list) {
  for(i=0;i<=list.length-1;i++) {
      offset = Math.floor(Math.random() * 31)
      //def
      content = []
      title = []
      img = []
      clone = posttemp.cloneNode(true)
      clone.style.display = "block"
      clone.id = "post" + i
      if(list[i].imgpath == "") {
        clone.style.width = "640px";
      }
      feed.appendChild(clone)
      for(z=0;z<=clone.childNodes.length-1;z++) {
          if(clone.childNodes[z].id == "nail") {
            nail = clone.childNodes[z]
            nail.style.left = String(parseInt(nail.style.left.replace('px','')) + offset) + "px";
            console.log("nail")
          }
          if(clone.childNodes[z].id == "gh") {
            gh = clone.childNodes[z]
            gh.style.left = String(parseInt(gh.style.left.replace('px','')) + offset) + "px";
          }
          if(clone.childNodes[z].id == "cloneimg") {
            if(!list[i].imgpath == "") {
              img = clone.childNodes[z]
              img.id = "img" + i
              console.log("img")
            }else {
              clone.childNodes[z].remove()
            }
          }
          if(clone.childNodes[z].id == "title") {
            title = clone.childNodes[z]
            title.id = "title" + i
            title.style.textAlign = "left";
            title.style.marginLeft = "100px";
            console.log("title")
          }
          if(clone.childNodes[z].id == "clonebt") {
            content = clone.childNodes[z]
            content.id = "content" + i
            if(list[i].imgpath == "") {
              content.style.marginLeft = "120px";
            }
            console.log("content")
          }
      }
      content.innerHTML = list[i].text
      title.innerHTML = list[i].title
      if(!list[i].imgpath == "") {
        img.src = "./img/"+list[i].imgpath
      }
      console.log(list[i])
      await new Promise(r => setTimeout(r, Math.floor(Math.random() * 312)));
  }
}