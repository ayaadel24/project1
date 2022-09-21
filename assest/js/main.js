// var timer;
// var aya = document.getElementById('timer');
// (function()
// {
//   var sec = 0;
//   timer = setInterval(()=>
//   {v
//     aya.innerHTML = '00:'+sec;
//     sec ++;
//   }, 1000)
  
// })()



const codes = document.querySelectorAll('.form-control');
codes[0].focus();
codes.forEach((code, index) => {
  code.addEventListener('keydown', (e) => {
    if(e.key >= 0 && e.key <= 9) {
      codes[index].value =  '';
      setTimeout(() => codes[index + 1].focus(), 10 );
    }
    else if (e.key === 'Backspace' )
    {
      setTimeout(() => codes[index - 1].focus(), 10 );
    }

});
});


// $(document).ready(function() {
//   let i = 120;
//   let a = setInterval(function() {
//       if (i < 10)
//           document.querySelector('.count_down').textContent = 0${i};
//       else  {
//           document.querySelector('.count_down').textContent = ${i}
//       }
//       i--;
//       if (i < 0) {
//           clearInterval(a);
//       }
//   }, 1000)
// });

