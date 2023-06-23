$(function () {

	$('.toggle_btn , .mask').on('click', function () {
		$('header').toggleClass('open');
	});

	$("nav a").on("click", function () {
		$("header").removeClass("open");
	});
});

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth) {
	var responsiveImage = [
		{ src: 'img/cody-weaver-xu6pELUdcsY-unsplash.jpg' },
		{ src: 'img/samuel-berner-GcppSsR_RAg-unsplash.jpg' },
		{ src: 'img/kyle-head-PW8K-W-Kni0-unsplash.jpg' }
	];
}

$('.main-img').vegas({
	overlay: false,//画像の上に網線やドットのオーバーレイパターン画像を指定。
	transition: 'blur',//切り替わりのアニメーション。
	transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
	delay: 10000,//スライド間の遅延をミリ秒単位で。
	animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
	animation: 'kenburns',//スライドアニメーションの種類。
	slides: responsiveImage,//画像設定を読む
});

$(function () {
	$('a[href^="#"]').click(function () {
		let href = $(this).attr("href");
		let target = $(href == "#" || href == "" ? "html" : href);
		let position = target.offset().top;
		$("html, body").animate({ scrollTop: position }, 2000, "swing");
		return false;
	});
});

