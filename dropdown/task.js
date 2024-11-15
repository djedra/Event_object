const openCloseMenu = document.querySelector('.dropdown__value')
const openMenu = document.querySelector('ul')
const choice = document.querySelectorAll(".dropdown__link")

const choiceName = function ()  {
  if(openMenu.className === ('dropdown__list')) {
    openMenu.classList.add('dropdown__list_active')
  }else {
  openMenu.classList.remove('dropdown__list_active')
  }
}

choice.forEach((item) => {
  item.onclick = () => {
    openCloseMenu.textContent = item.textContent
    openMenu.classList.remove('dropdown__list_active')
  }
})

openCloseMenu.addEventListener( 'click' , choiceName)