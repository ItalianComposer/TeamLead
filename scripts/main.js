document.addEventListener('DOMContentLoaded', function () {
      // инициализация слайдера
      var slider = new SimpleAdaptiveSlider('.slider', {
        autoplay: true,
        interval: 10000,
      });
    });
// таймер обратного отсчета
    document.addEventListener('DOMContentLoaded', function() {
  const deadline = new Date(2022, 02, 26);
  let timerId = timer;
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }

  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }

  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});

// подсказка при наведении на поле ввода
function showTooltip(e, text) {
    var e_id = e.id;
    var tt_id = e_id.substring(0, e_id.indexOf('_') + 1) + 't';
    var tt = document.getElementById(tt_id);

    tt.style.top = e.offsetTop + -35 + 'px';
    tt.style.left = e.offsetLeft + 160 + 'px';
    tt.innerHTML = text||'tooltip';
    tt.style.width = '100px';
    tt.style.display = 'block';
}

function hideTooltip(e) {
    var e_id = e.id;
    var tt_id = e_id.substring(0, e_id.indexOf('_') + 1) + 't';
    var tt = document.getElementById(tt_id);

    tt.style.display = 'none';
}
