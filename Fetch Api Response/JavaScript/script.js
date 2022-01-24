function update() {
  let url = 'https://gorest.co.in/public/v1/users'
  let show = document.getElementById('show')
  let show1 = document.getElementById('show1')

  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)

  xhr.setRequestHeader('Accept', 'application/json')
  xhr.setRequestHeader('Authorization', 'Bearer {token}')

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      show.innerHTML = '<p>Status is ' + xhr.status + '</p>'
      show1.innerHTML = xhr.responseText
    }
  }

  xhr.send()
}
update()
