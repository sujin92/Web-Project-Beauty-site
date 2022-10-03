// 1.통합검색
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
// 문구추가
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
// 문구삭제
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});


// 2.페이지 스크롤 배너
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')

window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 900px이 넘으면 배너 숨기기
  if (window.scrollY > 900) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // 상단으로 스크롤 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    })

  // 페이지 스크롤 위치가 700px이 넘지 않으면 배너 보이기
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300))
// 상단으로 스크롤 버튼을 클릭하면 페이지 위치를 최상단으로 이동
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})
