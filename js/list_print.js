"use strict";

(function($) {
    // 日付を変更する
    var events = [
        'app.record.index.show',
    ]
    kintone.events.on(events, function(event) {
        var record = event.record;

        var el = kintone.app.getHeaderSpaceElement();
        el.innerHTML = '<button id="btn-print" type="button" class="gaia-ui-actionmenu-save" style="user-select: none;" onclick="window.print()">印刷する</button>';

        return event;
    });
})(jQuery);
