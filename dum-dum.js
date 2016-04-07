const writeArea = document.querySelector('.js-write-area')
const listOfSaves = document.querySelector('.js-list-of-saves')
const saveNameFixed = 'scribbleSave'
const currentSave = function () {
  return localStorage.getItem('currentScribbleSave')
}

const loadSaves = function () {
  return Object.keys(localStorage).filter(function (key) {
    return key.startsWith(saveNameFixed)
  }).reverse()
}
