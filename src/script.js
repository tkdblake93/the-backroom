window.onload = function() {
  let openMobileMenu = document.body.querySelector('#open-mobile-menu');
  let closeMobileMenu = document.body.querySelector('#close-mobile-menu');
  let mobileMenu = document.body.querySelector('#mobile-menu');

  function open() {
    openMobileMenu?.classList.add('hidden');
    mobileMenu?.classList.add('flex', 'p-6');
    mobileMenu?.classList.remove('hidden');
    closeMobileMenu?.classList.remove('hidden');
  }
  function close() {
    closeMobileMenu?.classList.add('hidden');
    mobileMenu?.classList.add('hidden');
    mobileMenu?.classList.remove('flex', 'p-6');
    openMobileMenu?.classList.remove('hidden');
  }

  openMobileMenu?.addEventListener('click', function() {
    open();
  });
  closeMobileMenu?.addEventListener('click', function() {
    close();
  });
  mobileMenu?.addEventListener('click', function() {
    close();
  });
}
