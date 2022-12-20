document.getElementById('execCopyCodigoAdm').addEventListener('click', execCopy);
function execCopy() {
  document.querySelector("#input").select();
  document.execCommand("copy");
}
