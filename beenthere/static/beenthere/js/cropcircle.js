$(document).ready(function() {

  var crop = $('#crop').croppie({
    viewport: {
      width: 200,
      height: 200,
      type: 'circle'
    },
    boundary: {
      width: 300,
      height: 300
    }
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        crop.croppie('bind', { url: e.target.result });
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#upload").change(function() {
    readURL(this);
  });

  $("#save").click(function() {
    crop.croppie('result', {
      'type': 'canvas',
      'size': {'height': 100, 'width': 100},
      'circle': true}).then(function(image) {
        $.redirect('http://localhost:8000/beenthere/cropcircles', {
          'image': image
        });
    });
  });
});
