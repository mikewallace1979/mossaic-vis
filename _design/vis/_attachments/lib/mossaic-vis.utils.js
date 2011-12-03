$(function() {
  if (typeof(Mossaic) === "undefined") {
    Mossaic = {};
  }
  if (typeof(Mossaic.utils) === "undefined") {
    Mossaic.utils = {};
  }
  Mossaic.utils.get_db_name = function() {
    return unescape(document.location.href).split('/')[3];
  }
});