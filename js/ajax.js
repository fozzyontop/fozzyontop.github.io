function apiAjax(path, action, params, onSuccess, onError) {
    $.ajax({
        type: 'POST',
        url: path,
        dataType: 'json',
        data: Object.assign({}, {'action': action}, params),
        success: function(data, status, xhr) {
            if (data.error !== null) {
                onError(data.error);
            } else {
                if ('data' in data)
                    onSuccess(data.data);
                else
                    onSuccess(null);
            }
        },
        error: function(xhr, status, error) {
            onError(error);
        }
    });
}