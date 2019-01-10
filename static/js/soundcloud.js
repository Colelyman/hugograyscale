function getSoundCloudEmbed(url, id) {
    var res = $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://soundcloud.com/oembed',
        data: {
            format: 'json',
            url: url,
            iframe: 'true',
            height: '450',
            color: '0050ff'
        },
        async: false
    }).responseText
    console.log(res)
    res = res.replace('visual=true', 'visual=false')
    var data = $.parseJSON(res)
    $('#soundcloud-' + id).html(data.html)
}
