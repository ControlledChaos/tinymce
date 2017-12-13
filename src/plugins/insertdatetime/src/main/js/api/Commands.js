/**
 * Commands.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import Settings from 'tinymce/plugins/fullpage/api/Settings';
import Actions from '../core/Actions';

var register = function (editor) {
  editor.addCommand('mceInsertDate', function () {
    Actions.insertDateTime(editor, Settings.getDateFormat());
  });

  editor.addCommand('mceInsertTime', function () {
    Actions.insertDateTime(editor, Settings.getTimeFormat());
  });
};

export default <any> {
  register: register
};