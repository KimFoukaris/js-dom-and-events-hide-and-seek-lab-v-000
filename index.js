function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll('.ranked-list li');

  var i
  for (i=0; i < ranks.length; ++i) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild() {
  const kids = document.querySelector('#grand-node div div div div');
}
