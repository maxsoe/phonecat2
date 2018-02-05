// convert text strings into glyphs: ✓ for "true", and ✘ for "false"
angular
  .module('checkmark',[])
  .filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
