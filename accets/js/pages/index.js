document.getElementById('execCopyCodigoAdm').addEventListener('click', execCopyCodigoAdm);
function execCopyCodigoAdm() {
  document.querySelector("#inputCopyCodigoAdm").select();
  document.execCommand("copy");
  window.alert("link copiado");
}
