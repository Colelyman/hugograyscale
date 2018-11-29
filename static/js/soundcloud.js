(function($) {
    var getSoundCloudEmbed = function (url, id) {
        var res = $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'https://soundcloud.com/oembed',
            data: {
                format: 'json',
                url: url,
                iframe: 'true'
            },
            async: false
        }).responseText
        console.log(res)
        var data = $.parseJSON(res)
        $('#soundcloud-' + id).innerHTML(data.html)
    }
})(jQuery);
