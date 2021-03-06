'use strict';

module.exports = {
  export: require('./exporter'),
  chromeshell:  require('./formats/chrome-secure-shell'),
  defaults:     require('./formats/defaults'),
  gnome:        require('./formats/gnome'),
  guake:        require('./formats/guake'),
  iterm:        require('./formats/iterm'),
  konsole:      require('./formats/konsole'),
  json:         require('./formats/json'),
  mintty:       require('./formats/mintty'),
  putty :       require('./formats/putty'),
  termite:      require('./formats/termite'),
  terminator:   require('./formats/terminator'),
  terminalapp:  require('./formats/terminal-app'),
  textmate:     require('./formats/textmate'),
  xfce:         require('./formats/xfce'),
  xresources:   require('./formats/xresources'),
};
