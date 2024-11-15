const tabsList = Array.from(document.querySelectorAll('.tab'))
const tabContentsList = Array.from(document.querySelectorAll('.tab__content'))

const delFunction = function (num) {
  tabContentsList[num].classList.remove('tab__content_active')
}

tabsList.forEach((i, num) => {
  i.onclick = () => {
    tabsList.forEach((j) => {
      j.classList.remove('tab_active')
      if (i.className !== 'tab tab_active') {
        i.classList.add('tab_active')
        switch(num) {
          case 0:
            tabContentsList[0].classList.add('tab__content_active')
            delFunction(1)
            delFunction(2)
            break
          case 1:
            tabContentsList[1].classList.add('tab__content_active')
            delFunction(0)
            delFunction(2)
            break
          case 2:
            tabContentsList[2].classList.add('tab__content_active')
            delFunction(0)
            delFunction(1)
            break
        }
      }
    })
  }
})