let dataObj = {
  "header": "User rating",
  "maxvalue": 254,
  "data": [
    {
      "title": "5 stars",
      "value": 150
    },
    {
      "title": "4 stars",
      "value": 63
    },
    {
      "title": "3 stars",
      "value": 15
    },
    {
      "title": "2 stars",
      "value": 6
    },
    {
      "title": "1 star",
      "value": 20
    }
  ]
}


$('.wrap').append(`<h1>${dataObj.header}</h1>`);
for (let i = 0; i < dataObj.data.length; i++) {
  $('.wrap').append(`<div class="scale"><span class="scale-title">${dataObj.data[i].title}</span><div class="scale-bar"><div class="scale-bar-color"></div></div><span class="scale-value">${dataObj.data[i].value}</span></div>`);

  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  document.getElementsByClassName('scale-bar-color')[i].style.background = `rgb(${r}, ${g}, ${b})`;
  document.getElementsByClassName('scale-bar-color')[i].style.width = `${Math.round((dataObj.data[i].value / dataObj.maxvalue) * 100)}%`;
}