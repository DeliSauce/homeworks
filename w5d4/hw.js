window.setTimeout(function () {
  alert('HAMMERTIME');
}, 2000);


function hammerTime(time) {
  window.setTimeout(timeAlert, 2000);

  function timeAlert() {
    alert(`${time} is hammer time!`);
  }
}

hammerTime("3pm");
