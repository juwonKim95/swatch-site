//윈도우의 높이 1000
let winh = window.innerHeight;
const lis = document.querySelectorAll("#menu li");
let sections = document.querySelectorAll("section");
//lis lis[0] lis[1] lis[2]
lis.forEach((li,index)=>{
    li.addEventListener('click',function(e){
        //기존 이벤트 제거
        e.preventDefault();
        window.scrollTo({top:index*winh, behavior:"smooth"})
        //스크롤값이 0~1*winh 까지면
        //첫번째 li에 클래스 on은 붙임
        //스크롤값이 1*winh같거나 크면서 ~2*winh보다 작을때
        //두번째 li에 클래스 on을 붙임
        //lis[0].classList.add("on");
        if(sct>=0 && sct < 1*winh){
            lis[0].classList.add("on");
            lis[1].classList.add("on");
            lis[2].classList.add("on");
            lis[3].classList.add("on");
        }
        if(sct>=1 && sct < 2*winh){
            lis[1].classList.add("on");
            lis[0].classList.add("on");
            lis[2].classList.add("on");
            lis[3].classList.add("on");
        }
        if(sct>=2 && sct < 3*winh){
            lis[2].classList.add("on");
            lis[1].classList.add("on");
            lis[0].classList.add("on");
            lis[3].classList.add("on");
        }
        if(sct>=3 && sct < 4*winh){
            lis[3].classList.add("on");
            lis[1].classList.add("on");
            lis[2].classList.add("on");
            lis[0].classList.add("on");
        }
    })

    //마우스 무브 이벤트
    sections[0].addEventListener("mousemove",function(e){
        let x = e.pageX;
        let y = e.pageY;
        document.querySelector(".img11").style.right = 20+(x/30)+"px";
        document.querySelector(".img12").style.right = 20-(x/30)+"px";
    })
})
lis[0].classList.add("on");
//스크롤 이벤트 발생했을때
document.addEventListener("scroll",function(){
    //스크롤 값
    let sct = document.documentElement.scrollTop;
    console.log(sct);
})
