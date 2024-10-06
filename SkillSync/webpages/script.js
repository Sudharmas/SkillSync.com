function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to change the box shadow color of the element with class 'box-shadow-changer'
  function changeBoxShadowColor() {
    var boxShadowChangerElement = document.querySelector('#firstpara');
    var randomColor = getRandomColor();
    boxShadowChangerElement.style.boxShadow = `-1px 1px 10px 5px ${randomColor}`;
  }

  // Call changeBoxShadowColor every 2 seconds
  setInterval(changeBoxShadowColor, 1000);