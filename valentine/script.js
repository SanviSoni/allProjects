const img2 = document.querySelector(".img2")
const btn2 = document.querySelector(".btn2")
const btn1 = document.querySelector(".btn1")
const bgimg = document.querySelector(".bgimg")

function moveAway() {
    var newX = Math.random() * (700-window.innerWidth - btn2.clientWidth);
    var newY = Math.random() * (600-window.innerHeight - btn2.clientHeight);
    
    btn2.style.left = newX + "px";
    btn2.style.bottom = newY + "px"
    console.log(newX , newY)
  }


  btn2.addEventListener("mouseover",function(){
    moveAway()
    img2.style.backgroundImage = "url(https://media.tenor.com/p-tsA5hdz2cAAAAj/crying-cute-anime.gif)"
  })

  btn1.addEventListener("click",function(){
    bgimg.style.backgroundImage = "url(https://i.pinimg.com/originals/d0/37/37/d037372e5405bf698167d6516f170fdd.gif)"
    // bgimg.style.backgroundImage = "url(./cute-adorable.gif)"
    bgimg.style.zIndex = 1
    
    setTimeout(function(){
        bgimg.style.backgroundImage = "url(https://media.tenor.com/u4cVspRbEcsAAAAj/dance-happy.gif"
    },3000)
    setTimeout(function(){
        bgimg.style.backgroundImage = "url(https://i.pinimg.com/originals/d0/6e/aa/d06eaa2f7f8e5a6c22ab1d09f9704a19.gif)"
    },2000)

    setTimeout(function(){
        bgimg.style.backgroundImage = "url(https://media.tenor.com/3l1D7TWAzM8AAAAi/dance.gif)"
    },2000)

    setTimeout(function(){
        bgimg.style.backgroundImage = "url(https://media.tenor.com/HDsyFgI2MN0AAAAi/chika-chika-dance.gif)"
    },6000)

    setTimeout(function(){
        bgimg.style.backgroundImage = "url(https://media.tenor.com/ch2_EdUIa5EAAAAi/discord-anime.gif)"
    },1000)

    setTimeout(function(){
        bgimg.style.backgroundImage = "url(https://media1.tenor.com/m/ZQndYO4NwBcAAAAC/gojo-satoru.gif)"
    },5000)

    setTimeout(function(){
        bgimg.style.zIndex = -1
    },10000)

  })
 x