let on = document.getElementById('on')
let off = document.getElementById('off')
let image = document.getElementById('image')

on.addEventListener('click', function () {
  image.src = 'images/on.gif'
})

off.addEventListener('click', function () {
  image.src = 'images/off.gif'
})
