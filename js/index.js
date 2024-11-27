import 'sliderm.js';
const sliderm = new Sliderm('#exampe-slider', {
    arrow: true,
    pagination: true,
    grouping: false,
    loop: true,
    preview: false,
    columns: 4,
    duration: 1000,
    spacing: 10,
    align: 'center',
    autoplay: true,
  });
  sliderm.on('slide.start', () => {
    console.log('Just starting to slide!');
  });
  
  sliderm.on('slide.end', () => {
    console.log('The slider is stopped.');
  });
  


  sliderm.on('initialize', (s) => {
    console.log('Hello, world.');
  });
