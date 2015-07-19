var color = (function() {

  // 'private' variables
  //
  var _schemeNames = ["gold", "red", "blue", "purple", "green",
                      "orange", "silver", "pastel", "tropical",
                      "navyred", "sunrise-gradient", "chill-gradient",
                      "lime-gradient", "red-gradient"];
  var _$el = $('body');
  var _intervalDuration = 2000;
  var _interval;

  // 'private' functions
  //
  var _parseSchemeName = function(unparsedName) {
    if (unparsedName == null) {
      throw "You must pass in a color scheme name.";
    }
    var parsedSchemeName = unparsedName.toLowerCase().replace(/[0-9\s]/g, '');
    if (!_.contains(_schemeNames, parsedSchemeName)) {
      throw "Color scheme name '" + unparsedName + "' is not valid.";
    }
    return parsedSchemeName;
  };

  var _startRotation = function(intervalMilliseconds) {
    _interval = setInterval(_changeToNextColor, _intervalDuration);
  };

  var _clearRotation = function() {
    clearInterval(_interval);
  };

  var _changeToNextColor = function() {
    // get current color
    // get next color
    // set next color
  };

  var _clearCurrentScheme = function() {
    _.each(_schemeNames, function(schemeName) {
      _$el.removeClass(schemeName);
    });
  };

  // 'public' functions
  //
  return {
    set: function(schemeName) {
      var parsedSchemeName;
      try {
        parsedSchemeName = _parseSchemeName(schemeName);
      } catch (e) {
        console.log("ERROR: " + e);
        return;
      }
      _clearCurrentScheme();
      _$el.addClass(parsedSchemeName);
      console.log("Color scheme updated to " + parsedSchemeName + ".");
    },

    rotate: function(intervalSeconds) {
      _intervalDuration = intervalSeconds ? intervalSeconds * 1000 : _intervalDuration;
      _clearRotation();
      _startRotation();
    },

    help: function() {
      console.log(
        "Welcome to DanielKimbel.com!\n" +
        "You can control the site's color scheme right here using JavaScript.\n" +
        "To change to a specific scheme, use the color.set method, like `color.set('green')`.\n" +
        "To rotate through all of the available color schemes, call `color.rotate()`.\n" +
        "Available color schemes: " + _schemeNames.join(", ") + "."
      );
    }
  }
}());

$(document).ready(color.help);

