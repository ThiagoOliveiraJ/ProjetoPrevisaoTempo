$('#btn').on("click", function () {
    let cidade = $('#input').val().toLowerCase().replace(" ", "-");
    $.ajax({
        type: "GET",
        url: `https://goweather.herokuapp.com/weather/${cidade}`,
        dataType: "json",
        success: function (data) {
            let p;
            if (!data.temperature.value && !data.wind) {
                $('#temp').text("");
                $('#wind').text("");
                p = $('<p class="error">Cidade não encontrada. Por favor, insira um nome de cidade válido.</p>')
                $('.form').append(p);
            } else {
                $('.error').text(' ')
                $('#infoField').removeClass("none");
                $('#temp').text(data.temperature);
                $('#wind').text(data.wind);
            }

        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
        }
    });

});
