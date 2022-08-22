const saniye = document.querySelector('.saniye')
const dakika = document.querySelector('.dakika')
const saat = document.querySelector('.saat')

function tiktak(params) {
  let second = new Date().getSeconds()
  let minute = new Date().getMinutes()
  let hour = new Date().getHours()

  saniye.style.transform = `rotate(${180 + second * 6}deg)`
  dakika.style.transform = `rotate(${180 + minute * 6}deg)`
  saat.style.transform = `rotate(${180 + hour * 30}deg)`
  // console.log(saniye, dakika, saat)
}
setInterval(tiktak, 1000)
