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
    res = res.replace('visual=true', 'visual=false') // this is to disable the large album art
    var data = $.parseJSON(res)
    $('#soundcloud-title-' + id).html(data.title.replace(' by Zach Sundwall', ''))
    $('#soundcloud-' + id).html(data.html)
}
