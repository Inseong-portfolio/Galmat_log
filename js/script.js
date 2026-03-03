// 지도 호버 구현 
// 마우스 호버(mouseenter, mouseleave) 시 색상 변경 이벤트 함수

function initMapInteractions() {
    const container = document.getElementById('map-area-1');
    const paths = container.querySelectorAll('path');

    paths.forEach(path => {
        // 마우스가 구역 위로 올라왔을 때
        path.addEventListener('mouseenter', function () {
            this.classList.add('active');
        });

        // 마우스가 구역 밖으로 나갔을 때
        path.addEventListener('mouseleave', function () {
            this.classList.remove('active');
        });
    });
}

// 코스 탭 
$(document).ready(function () {
    // 탭 버튼 클릭 이벤트 (제이쿼리)
    $('.tab-btn').on('click', function () {
        // 1. 클릭한 버튼의 data-tab 값을 가져옴 (예: 1, 2, 3...)
        var num = $(this).data('tab');

        // 2. 모든 버튼과 이미지 박스의 'active' 클래스 제거 (초기화)
        $('.tab-btn').removeClass('active');
        $('.course-detail').removeClass('active');

        // 3. 클릭한 버튼에 'active' 클래스 추가
        $(this).addClass('active');

        // 4. 해당하는 이미지 박스(#course-숫자)에 'active' 클래스 추가
        $('#course-' + num).addClass('active');
    });

});

// sub1 슬라이드
$(document).ready(function () {
    var swiper = new Swiper(".mySwiper_sub1", {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 74,
        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        on: {
            init: function () {
                $('#sub1_banner').addClass('loaded');
            }
        }
    });
});

window.addEventListener('DOMContentLoaded', initMapInteractions);

//sub2 슬라이드
document.addEventListener('DOMContentLoaded', function () {

    // 핵심 로직: querySelectorAll을 통해 페이지 내의 '모든' 슬라이더 줄(섹션)을 찾아 각각 독립적으로 실행시킵니다.
    const sections = document.querySelectorAll('.view-spots-section');

    sections.forEach(function (section) {
        // 해당 줄(section) 안에 있는 요소만 찾습니다! (서로 엉키지 않는 핵심 이유)
        const swiperContainer = section.querySelector('.view-spots-swiper');
        const prevBtn = section.querySelector('.custom-prev');
        const nextBtn = section.querySelector('.custom-next');
        const scrollbarEl = section.querySelector('.custom-scrollbar');
        const mainCard = section.querySelector('.fixed-main-card');

        if (!swiperContainer) return;

        var swiper = new Swiper(swiperContainer, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            grabCursor: true,
            loop: true,

            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            scrollbar: {
                el: scrollbarEl,
                hide: false,
                draggable: true,
            },

            on: {
                init: function () {
                    updateMainCard(this, mainCard);
                    var swiperInstance = this;
                    setTimeout(function () { swiperInstance.update(); }, 100);
                },
                slideChange: function () {
                    updateMainCard(this, mainCard);
                }
            }
        });
    });

    // 왼쪽 고정 카드 업데이트 함수
    function updateMainCard(swiperInstance, mainCardElement) {
        const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
        if (!activeSlide) return;

        const imgSrc = activeSlide.querySelector('.card-image').src;
        const imgAlt = activeSlide.querySelector('.card-image').alt;
        const titleEn = activeSlide.querySelector('.card-title-en').textContent;
        const titleKo = activeSlide.querySelector('.card-title-ko').textContent;
        const desc = activeSlide.querySelector('.card-desc').textContent;

        mainCardElement.querySelector('.main-img').src = imgSrc;
        mainCardElement.querySelector('.main-img').alt = imgAlt;
        mainCardElement.querySelector('.main-en').textContent = titleEn;
        mainCardElement.querySelector('.main-ko').textContent = titleKo;
        mainCardElement.querySelector('.main-desc').textContent = desc;

        mainCardElement.classList.remove('update-anim');
        void mainCardElement.offsetWidth;
        mainCardElement.classList.add('update-anim');
    }

});

//브랜드스토리 슬라이드
var swiper = new Swiper(".brandstory_swiper", {
    effect: "cards",
    grabCursor: true,
    // 자동 슬라이드 설정
    autoplay: {
        delay: 2500, // 슬라이드 대기 시간 (2500 = 2.5초)
        disableOnInteraction: false, // 사용자가 터치하거나 스와이프한 후에도 자동 슬라이드를 멈추지 않음
    },
    // 불릿(페이지네이션) 추가
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // 불릿을 클릭했을 때 해당 슬라이드로 이동
    },
});


//우리들만의 로그 
// 첫 번째 줄 스와이퍼 (왼쪽에서 오른쪽으로 흐름)
var swiperRow1 = new Swiper(".log-1-swiper", {
    slidesPerView: 'auto', // 자연스러운 이어짐을 위해 auto로 변경
    spaceBetween: 35,
    loop: true,
    speed: 4000,      // 스르륵 넘어가는 속도 (숫자가 클수록 느려짐)
    autoplay: {
        delay: 0,       // 멈추는 대기 시간 없앰
        disableOnInteraction: false,
        reverseDirection: true, // 역방향(왼쪽에서 오른쪽) 설정
    },
});

// 두 번째 줄 스와이퍼 (오른쪽에서 왼쪽으로 흐름)
var swiperRow2 = new Swiper(".log-2-swiper", {
    slidesPerView: 'auto',
    spaceBetween: 35,
    loop: true,
    speed: 4000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});
