$('#btn').on("click", function () {
    let cidade = $('#input').val().toLowerCase().replace(" ", "-");
    $.ajax({
        type: "GET",
        url: `https://goweather.herokuapp.com/weather/${cidade}`,
        dataType: "json",
        success: function (data) {
            if (!data.temperature.value && !data.wind) {
                $('#temp').text("");
                $('#wind').text("");
                let p = $('<p class="error">Cidade não encontrada. Por favor, insira um nome de cidade válido.</p>')
                $('.form').append(p);
            } else {
                $('#infoField').removeClass("none");
                $('#temp').text(data.temperature);
                $('#wind').text(data.wind);
                console.log(data);
            }

        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
        }
    });

});
