/* 페이지별 스크롤트리거 */
const page = new Swiper('.pages',{
    mousewheel:true,
    direction:'vertical',
    on:{
        slideChangeTransitionEnd:function(){
            setTimeout(()=> ScrollTrigger.refresh(), 0)
        }
    }
})

gsap.registerPlugin(ScrollTrigger);

gsap.to('.cover',{
    scrollTrigger:{
        trigger:'.cover',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse'
    },
    opacity:1,
    y:100,
})

gsap.to('.resume',{
    scrollTrigger:{
        trigger:'.resume',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse'
    },
    opacity:1,
    y:100,
})

gsap.to('.works-content',{
    scrollTrigger:{
        trigger:'.works-content',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse'
    },
    opacity:1,
    y:100,
})
gsap.to('.works-content',{
    scrollTrigger:{
        trigger:'.works-content',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse'
    },
    opacity:1,
    y:100,
})

//이력서 페이지 마우스 휠 스크롤 기능
document.addEventListener("DOMContentLoaded", function () {
    const listWrap = document.querySelector('.resume .list-wrap');

    listWrap.addEventListener('wheel', function (e) {
        if (this.scrollHeight > this.clientHeight) { // 내부 내용이 넘칠 때만 실행
            e.preventDefault(); // 기본 휠 스크롤 방지
            this.scrollTop += e.deltaY; // 휠 방향대로 스크롤 이동
        }
    }, { passive: false }); // 기본 이벤트 차단을 위해 passive: false 설정
});

//모바일콘텐츠 슬라이드
const monthlySwiper = new Swiper('.mon-swiper',{
    slidesPerView: 'auto',
    spaceBetween: 12,
    // loop: true,
    // speed: 4000,
    // autoplay: {
    //     delay: 0,
    //     disableOnInteraction: false,
    // },
    // freeMode: true, // 자동으로 부드럽게 흘러가도록 설정
    // freeModeMomentum: false, // 관성 효과 제거
})

const dwaSwiper = new Swiper('.dwa-swiper',{
    slidesPerView: 3,
    spaceBetween: 6,
    freeModeMomentum: false, // 관성 효과 제거
})

//그래픽디자인 섹션 이미지 팝업
document.addEventListener("DOMContentLoaded", function () {
    const popupBg = document.querySelector(".popup-bg");
    const popupContent = document.querySelector(".popup-content img");
    const imageElements = document.querySelectorAll(".row1 img, .row2 img");

    //열기
    imageElements.forEach(img => {
        img.addEventListener("click", function () {
            popupContent.src = this.src;
            popupBg.style.display = "flex";
        });
    });
    //닫기
    popupBg.addEventListener("click", function () {
        popupBg.style.display = "none";
    });
    //스크롤 위치 Top 고정
    popupBg.scrollTop = 0;
    popupContent.scrollTop = 0;
    imageElements.scrollTop = 0;
});

document.querySelector(".popup-content").addEventListener("wheel", function(e) {
    e.stopPropagation(); // 배경 클릭 시 팝업 닫히는 것과 분리
});