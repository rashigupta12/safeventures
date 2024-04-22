var modalInitHandler = function (e) {
    e.preventDefault();
    if ($(this).closest('.dropdown.show').length == 0) e.stopPropagation();
    var $this = $(this);
    var $url = $this.data('remote') || $this.attr('href');
    ajaxModal($url);
}

function ajaxModal($url) {
    $('#ajaxModal').remove();
    $modal = $('<div class="modal" id="ajaxModal" data-backdrop="static"></div>');
    $('body').append($modal);
    $modal.modal({ backdrop: 'static', keyboard: false });
    $.ajax({
        url: $url,
        type: 'GET',
        success: function (data) {
            $modal.append(data);
            $modal.modal('show');
        }
    });
}

function initModal(sel) {
    $(sel).once('click', modalInitHandler);
};
$(document).on('click', '[data-toggle="ajaxModal"]', modalInitHandler);
function closeModal() {
    $('#ajaxModal').modal('hide');
}
$(document).on("click", "table.row-clickable tbody td", function (e) {
    if (!$(this).hasClass('no-click')) {
        window.location = $(this).closest('table').attr('data-viewurl') + $(this).closest('tr').attr('data-id');
    }
});
$(document).ready(function (e) {
    $("form[autosave]").submit(function (e) {
        e.preventDefault();
    });
});
$(document).on('change', 'form[autosave] input,form[autosave] select', function (e) {
    var self = $(this);
    if (self.valid()) {
        var elem = $(this);
        if (self.is('select') && self.hasClass('select2-hidden-accessible')) {
            elem = $(this).next('.select2-container');
        }
        if (elem.next('span.autosave-indicator').length) elem.next('span.autosave-indicator').remove();
        var indicator = $('<span class="autosave-indicator"><i class="icon-spinner2 spinner autosave-progress"></i></span>');
        if (self.is('select') && !elem.hasClass('arrow-hidden')) elem.addClass('arrow-hidden');
        elem.after(indicator);
        var url = $(this).closest('form').attr('action');
        $.ajax({
            type: "POST", dataType: 'json', url: url, data: { 'a': self.attr('name'), 'b': self.val() }, cache: false,
            error: function () {
                indicator.find('i').removeClass().addClass('icon-notification2 text-danger');
                indicator.fadeOut(1500, function () { if (self.is('select') && elem.hasClass('arrow-hidden')) elem.removeClass('arrow-hidden'); $(this).remove(); });
            },
            success: function (response) {
                var rowalert = elem.closest('.row').parent().find('.row-alert');
                if (response.action_status == 'fail') {
                    indicator.find('i').removeClass().addClass('icon-notification2 text-danger');
                    if (rowalert.length == 0) {
                        rowalert = $('<div class="row row-alert pt-1"><div class="col-sm-4"></div><div class="col-sm-8 text-danger"></div></div>');
                        rowalert.appendTo(elem.closest('.row').parent());
                    }
                    rowalert.find('.text-danger').html(response.message);
                } else if (response.action_status == 'success') {
                    indicator.find('i').removeClass().addClass('icon-checkmark2 text-success');
                    if (rowalert.length) {
                        rowalert.remove();
                    }
                }
                indicator.fadeOut(1500, function () { if (self.is('select') && elem.hasClass('arrow-hidden')) elem.removeClass('arrow-hidden'); $(this).remove(); });
            }
        });
    }
});