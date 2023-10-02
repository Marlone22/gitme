function animate() {
  let content1 = document.querySelector(".box1");
  let content2 = document.querySelector(".box2");
  let content3 = document.querySelector(".box3");
  let content4 = document.querySelector(".box4");
  let content5 = document.querySelector(".box5");
  let content6 = document.querySelector(".box6");
  let content7 = document.querySelector(".box7");

  let content1fadeIn = null;
  let content1fadeOut = null;
  let content2Show = null;
  let content3Show = null;
  let content4FadeIn = null;
  let content5FadeIn = null;
  let content6Show = null;
  let content7FadeIn = null;

  let position = -120;
  let position2 = -1150;
  let position3 = -900;
  let opacity = 0;
  let fadeOpacity = 1.5;
  let fadeScale = 1.5;

  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";
  content5.style.display = "none";
  content6.style.display = "none";
  content7.style.display = "none";

  clearInterval(content1fadeIn);
  clearInterval(content1fadeOut);
  clearInterval(content2Show);
  clearInterval(content3Show);
  clearInterval(content4FadeIn);
  clearInterval(content5FadeIn);
  clearInterval(content6Show);
  clearInterval(content7FadeIn);

  content1.style.display = "block";
  setTimeout(() => {
    content1fadeOut = setInterval(animate1, 5);
  }, 20);

  function animate1() {
    if (fadeOpacity > 1) {
      clearInterval(content1fadeOut);
      let content1fadeIn = setInterval(() => {
        if (fadeOpacity > 0) {
          fadeOpacity -= 0.01;
          content1.style.opacity = fadeOpacity;
        } else {
          content1.style.opacity = 0;
          clearInterval(content1fadeIn);
          content2.style.display = "block";
        }
      }, 35);
      if (content1.style.opacity < 0) {
        clearInterval(content1fadeOut);
        content1.style.display = "none";
      }
    } else {
      content1.style.opacity = fadeOpacity;
      fadeOpacity += 0.01;
      content2.style.display = "block";
    }
  }
  setTimeout(() => {
    content2Show = setInterval(animate2, 4);
  }, 10);

  function animate2() {
    if (position < 120) {
      position++;
      content2.style.left = `${position}px`;
    } else if (fadeScale > 0) {
      fadeScale -= 0.01;
      content2.style.scale = fadeScale;
    } else {
      clearInterval(content2Show);
      content3.style.display = "block";
    }
  }
  setTimeout(() => {
    content3Show = setInterval(animate3, 1.5);
  }, 50);

  function animate3() {
    if (position2 < -150) {
      position2++;
      content3.style.right = `${position2}px`;
    } else {
      clearInterval(content3Show);
      content4.style.display = "block";
      let content4FadeIn = setInterval(() => {
        if (opacity < 1) {
          opacity += 0.01;
          content4.style.opacity = opacity;
        } else {
          clearInterval(content4FadeIn);
          content5.style.display = "block";
          let content5FadeIn = setInterval(() => {
            if (opacity < 1) {
              opacity += 0.01;
              content5.style.opacity = opacity;
            } else {
              clearInterval(content5FadeIn);
              content6.style.display = "block";
            }
          }, 100);
        }
      }, 100);
    }
  }

  setTimeout(() => {
    content6Show = setInterval(animate4, 1.5);
  }, 40);

  function animate4() {
    if (position3 < 620) {
      position3++;
      content6.style.left = `${position3}px`;
    } else {
      clearInterval(content6Show);
      content7.style.display = "block";
    }
  }
  setTimeout(() => {
    content7FadeIn = setInterval(animate5, 15);
  }, 50);

  function animate5() {
    if (opacity < 1) {
      opacity += 0.01;
      content7.style.opacity = opacity;
    } else {
      clearInterval(content7FadeIn);
    }
  }
  const replaySlide = document.getElementById("resetButton");
  replaySlide.addEventListener("click", () => {
    content1fadeOut = null;
    content2Show = null;
    content3Show = null;
    content4FadeIn = null;
    content5FadeIn = null;
    content6Show = null;
    content7FadeIn = null;

    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";

    position = 0;
    position2 = -900;
    position3 = -500;
    opacity = 0;
    fadeOpacity = 1;
    fadeScale = 1;

    clearInterval(content1fadeOut);
    clearInterval(content2Show);
    clearInterval(content3Show);
    clearInterval(content4FadeIn);
    clearInterval(content5FadeIn);
    clearInterval(content6Show);
    clearInterval(content7FadeIn);

    animate();
  });
}
animate();
