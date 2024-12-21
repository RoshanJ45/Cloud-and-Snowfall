    const cloud = document.querySelector(".cloud");
    const snowflakeArea = document.createElement("div");
    const middleCloud = document.querySelector(".middle-cloud");
    middleCloud.style.position = "relative";
    snowflakeArea.classList.add("snowflake-area");
    middleCloud.appendChild(snowflakeArea);
    const getRandomX = () => {
      return ${Math.random() * 5}vw;
    }
    const getRandomXLeft = () => {
      return -${Math.random() * 5}vw;
    }
    const stylesheet = document.createElement("style");
    stylesheet.innerHTML = `
      @keyframes wind {
        0% {
          transform: translate(0, 0);
        }
        5% {
          transform: translate(0, 5vh);
        }
        40% {
          transform: translate(var(--randomXLeft), 40vh);
        }
        100% {
          transform: translate(var(--randomX), 100vh);
        }
      }
    `;
    document.head.appendChild(stylesheet);
    for (let i = 0; i < 800; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      const randomSize = Math.random() * 3 + 1;
      const randomLeft = Math.random() * 100;
      const animationDelay = Math.random() * 5 + 1;
      const animationDuration = Math.random() * 5 + 3;
      const randomOpacity = Math.random() * 0.6 + 0.4;
      const randomX = getRandomX();
      const randomXLeft = getRandomXLeft();
      snowflake.style.setProperty('--randomX', randomX);
      snowflake.style.setProperty('--randomXLeft', randomXLeft);
      snowflake.style.animation = "wind 5s linear infinite";
      snowflake.style.width = ${randomSize}px;
      snowflake.style.left = ${randomLeft}%;
      snowflake.style.animationDelay = ${animationDelay}s;
      snowflake.style.animationDuration = ${animationDuration}s;
      snowflake.style.opacity = ${randomOpacity};
      snowflakeArea.appendChild(snowflake);
    }
  