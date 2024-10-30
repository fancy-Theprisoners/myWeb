const images = gsap.utils.toArray(".item");

const imageSize = images.length;
const total = images.length;
const degree = 360 / total;

const init = () => {
  const timeline = gsap.timeline();

  images.forEach((image, index) => {
    const sign = Math.floor((index / 2) % 2) ? 1 : -1;
    const value = Math.floor((index + 4) / 4) * 4;
    const rotation = index > imageSize - 3 ? 0 : sign * value;
    console.log(rotation);

    gsap.set(image, {
      rotation: rotation,
      scale: 0.5,
    });

    timeline.from(
      image,
      {
        x: () =>
          index % 2
            ? window.innerWidth + image.clientWidth * 4
            : -window.innerWidth - image.clientWidth * 4,
        y: () => window.innerHeight - image.clientHeight,
        rotation: index % 2 ? 200 : -200,
        scale: 4,
        opacity: 1,
        ease: "power4.out",
        duration: 1,
        delay: 0.15 * Math.floor(index / 2),
      },
      0
    );

    let rotationAngle = index * degree;
    timeline.to(
      image,
      {
        scale: 1,
        duration: 0,
      },
      0.15 * (imageSize / 2 - 1) + 1
    );

    timeline.to(
      image,
      {
        transformOrigin: "center 200vh",
        rotation:
          index > imageSize / 2 ? -degree * (imageSize - index) : rotationAngle,
        duration: 1,
        ease: "power1.out",
      },
      0.15 * (imageSize / 2 - 1) + 1
    );
  });
};

const draggable = () => {
  let start = 0;
  Draggable.create(".items", {
    type: "rotation",

    onDragStart: function () {
      start = this.rotation;
    },
    onDragEnd: function () {
      const rotation = this.rotation;
      const offset = Math.abs(rotation - start);
      if (rotation > start) {
        if (rotation - start < degree / 2) {
          gsap.to(".items", {
            rotation: `-=${offset}`,
          });
        } else {
          gsap.to(".items", {
            rotation: `+=${2 * degree - offset}`,
          });
        }
      } else {
        if (Math.abs(rotation - start) < degree / 2) {
          gsap.to(".items", {
            rotation: `+=${offset}`,
          });
        } else {
          gsap.to(".items", {
            rotation: `-=${2 * degree - offset}`,
          });
        }
      }
    },
  });
};

document.addEventListener('DOMContentLoaded', function() {
  var img = document.getElementById('myImage');
  img.addEventListener('click', function() {
      window.location.href = 'index17.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var img2 = document.getElementById('myImage2');
  img2.addEventListener('click', function() {
      window.location.href = 'index12.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var img3 = document.getElementById('myImage3');
  img3.addEventListener('click', function() {
      window.location.href = 'index12.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var img4 = document.getElementById('myImage4');
  img4.addEventListener('click', function() {
      window.location.href = 'index11.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var img5 = document.getElementById('myImage5');
  img5.addEventListener('click', function() {
      window.location.href = 'index11.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var img6 = document.getElementById('myImage6');
  img6.addEventListener('click', function() {
      window.location.href = 'index11.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var img7 = document.getElementById('myImage7');
  img7.addEventListener('click', function() {
      window.location.href = 'index11.html';
  });
});

init();
draggable();
