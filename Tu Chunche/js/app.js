

$('#camera').hide();


$('#takeImage').click(function(){
    $('#main').fadeOut(400);
    $('#camera').fadeIn(400);
    start(); // camera.js -> start

});

// cambiar la camara del usuario
$('#changeCamera').click(function(){
    start(); // camera.js -> start

    if($('#cameraIcon').html() == 'camera_front'){
        $('#cameraIcon').fadeOut(400, function(){
            $('#cameraIcon').html('camera_rear');
            $('#cameraIcon').fadeIn(400);
        });
    }else{
        $('#cameraIcon').fadeOut(400, function(){
            $('#cameraIcon').html('camera_front') ;
            $('#cameraIcon').fadeIn(400);
        });

    }
}); 


/// actualizar nombre de input file
// generar priview

jQuery('input[type=file]').change(function(){
    $('#imageName').html(jQuery(this).val().split('\\').pop());
    filePreview($('input[type=file]')[0]);
});


function filePreview(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#preview img').remove();
            $('#preview').append('<img src="'+e.target.result+'" width="100%" />');
            $('#preview img').fadeIn(500);

        }
        reader.readAsDataURL(input.files[0]);
    }
}