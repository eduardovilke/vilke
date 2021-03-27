import { useEffect } from 'react'

import styles from './styles/home.module.css'

function Home () {

  useEffect(() => {
    paintStars(80, 4)
  }, [])

  function createDiv(size) {
    let sky = document.querySelector('.sky');

    let circle = document.createElement('div');
    circle.classList.add(`${styles.circle}`);
    
    let randRange5 = Math.floor(Math.random() * 5) + 1;
  
    switch (randRange5) {
      case 1:
        circle.classList.add(`${styles.blink_1}`);
        break;
      case 2:
        circle.classList.add(`${styles.blink_2}`);
        break;
      case 3:
        circle.classList.add(`${styles.blink_3}`);
        break;
      case 4:
        circle.classList.add(`${styles.blink_4}`);
        break;
      case 5:
        circle.classList.add(`${styles.blink_5}`);
        break;
      default:
        break;
    }
    
    let widthAndHeight = random(size, 'px');
    circle.style.height = circle.style.width = widthAndHeight;
    
    circle.style.left = random(window.innerWidth, 'px');
    circle.style.top = random(window.innerHeight, 'px');
    
    sky.appendChild(circle);
  }

  function paintStars(stars, size) {
    let sky = document.querySelector('.sky');
    while (sky.firstChild) {
      sky.removeChild(sky.firstChild);
    }
    for (let i = 0; i < stars; i++) {
      createDiv(size);
    }
  }

  function random(range, unit) {
    let randNum = Math.floor(Math.random() * range) + 1;
    return `${randNum}${unit}`;
  }

  return (
    <div className={styles.container}>
      <div className="sky"></div>
    </div>
    
  )
}

export default Home