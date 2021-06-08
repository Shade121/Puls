  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false, 
    controls: false,
    
    responsive: {
        320: {
            nav: true                   
        },
        425: {
            nav: true
        },
        640: {
            nav: true                   
        },
        700: {
            nav: true
        },
        900: {
            nav: true,
        },
        1024: {
            nav: false,
        },
    } 
  });
  
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev'); 
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next'); 
  });