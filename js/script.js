$('.owl-carousel').owlCarousel(
    {

    // items:2,
    // center:true,
    loop:true,
    margin:10,
    nav:true,
    navText:['<h1> <i class="fa-solid fa-left-long" style=" font-size: 20px; top:2%;"></i> </h1>' ,
    '<h1> <i class="fa-solid fa-right-long" style=" font-size: 20px;"></i> </h1>'],
    dots:false,
    responsive:{
        0:{
            items:1,
            autoplay:true,
            autoplayTimeOut:2000 //melly seconds
        },
        600:{
            items:2,
            autoplay:false
        },
        // 1000:{
        //     items:5
        // }
    }
}
)




var count1=document.getElementById("count-id1")
var count2=document.getElementById("count-id2")
var count3=document.getElementById("count-id3")
var count4=document.getElementById("count-id4")

function counter(start,clear,count,item,time)
{
    var i= start
    var set= setInterval(() => {
        if(i==clear)
        {
            clearInterval(set)
        }
        else
        {
            i+=count
            item.innerText=i
        }
    }, time);

}


counter(0,8000,10,count1,0.05)
counter(0,2000,10,count2,20)
counter(0,810,2,count3,1)
counter(0,20,1,count4,200)









var topBtn = document.getElementById("btn-up")

window.addEventListener("scroll" , function(){
    // console.log("window is scrolling ....")
    if(this.document.documentElement.scrollTop>600 && this.document.documentElement.scrollTop<700)
    {
        counter(0,8000,10,count1,0.05)
        counter(0,2000,10,count2,20)
        counter(0,810,2,count3,1)
        counter(0,20,1,count4,200)
    }
    if(document.documentElement.scrollTop > 400)
    topBtn.style.display = "block"
    else topBtn.style.display = "none"
})










