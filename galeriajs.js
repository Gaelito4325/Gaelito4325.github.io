function abreImagen() {
  document.querySelectorAll('.clickImagen').forEach(img => {
    img.onclick = function () {
      if (document.querySelector('.modalImagen')) return;

      let modal = document.createElement('div');
      modal.classList.add('modalImagen');
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
      modal.style.zIndex = '2000';

      modal.onclick = function () {
        document.body.removeChild(document.querySelector('.modalImagen'));
      };

      let cerrar = document.createElement('button');
      cerrar.textContent = '×';
      cerrar.style.position = 'absolute';
      cerrar.style.top = '20px';
      cerrar.style.right = '20px';
      cerrar.style.fontSize = '30px';
      cerrar.style.background = 'black';
      cerrar.style.color = 'white';
      cerrar.style.border = 'none';
      cerrar.style.cursor = 'pointer';
      cerrar.onclick = function (e) {
        e.stopPropagation();
        document.body.removeChild(document.querySelector('.modalImagen'));
      };

      let imgModal = document.createElement('img');
      imgModal.src = img.src;
      imgModal.style.maxWidth = '70%';
      imgModal.style.maxHeight = '80%';
      imgModal.style.borderRadius = '10px';
      imgModal.style.boxShadow = '0px 0px 20px white';

      modal.appendChild(imgModal);
      modal.appendChild(cerrar);
      document.body.appendChild(modal);
    };
  });
}

document.addEventListener('DOMContentLoaded', abreImagen);