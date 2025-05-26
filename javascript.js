jQuery(document).ready(function(){

    $(window).on('scroll', function () {
        $('.profile-menu').each(function () {
            var elementTop = $(this).offset().top;
            var scrollBottom = $(window).scrollTop() + $(window).height();
    
            if (scrollBottom > elementTop + 50) { // 50px 여유 있게
                $(this).addClass('show');
            }
        });
    });

    $(function() {
        const text = "웹 퍼블리셔를 꿈 꾸는 박경동입니다!";
        let index = 0;
        let typingInterval;
        let started = false; // 애니메이션 시작 여부
      
        function type() {
          if (index < text.length) {
            $('#typing-text').append(text.charAt(index));
            index++;
          } else {
            clearInterval(typingInterval);
          }
        }
      
        $(window).on('scroll', function() {
          if (started) return; // 이미 시작했으면 아무 것도 안 함
      
          const scrollTop = $(window).scrollTop();
          const profileTop = $('#profile').offset().top;
          const windowHeight = $(window).height();
      
          if (scrollTop + windowHeight > profileTop) {
            started = true;
            typingInterval = setInterval(type, 100);
          }
        });
      
        // 페이지 로드 시 스크롤 상태 체크
        $(window).trigger('scroll');
      });

      
});
