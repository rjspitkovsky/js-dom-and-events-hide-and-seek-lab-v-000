function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')
  const firstChildren = lis[0]
  const secondChildren = lis[1]

  let children = firstChildren.children
  let start = 1

  for (let i = 0; i < children.length; i < l; i++) {
    children[i].innerHTML = (start + i + n).toString()

    children = secondChildren.children
    start = 12

    for (let i = 0; i < children.length; i < l; i++) {
      children[i].innerHTML = (start - i + n).toString()
  }
}
