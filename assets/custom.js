$(document).ready(function() {
  var detailsModal = $("header details-modal");
  var detailsParent = detailsModal.parent();
  var detailsMoved = false;
  function updateModal() {
    $("header details").attr("open", "true");
    $('header #Search-In-Modal').attr("placeholder", "Buscar producto");
    detailsModal.insertAfter("header nav");
    detailsMoved = true;
  }

  function handleResize() {
    if ($(window).width() < 990) {
      if (detailsMoved) {
        $("header details").removeAttr("open");
        detailsModal.prependTo(detailsParent);
        detailsMoved = false;
      }
    } else {
      if (!detailsMoved) {
        updateModal();
      }
    }
  }

  handleResize();

  $(window).resize(function() {
    handleResize();
  });
});
