
(function () {
  const textEditBtn = document.querySelector('[data-open="reply"]');
  const textEdit = document.querySelector('[data-target="reply"]');

  textEditBtn.addEventListener('click', function () {
    if (!textEdit.classList.contains('show')) {
      textEdit.classList.add('show');
    }else {return;}
  })

  textEdit.querySelector('[data-close="reply"]').addEventListener('click', function () {
    textEdit.classList.remove('show');
  })})();
