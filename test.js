function() {
        var fileInput = document.getElementById();
        var fileDisplayArea = document.getElementById('StudentInfo');

        fileInput.addEventListener('change', function(e) {
            var file = fileInput.files[0];
            var textType = /text.*/;

            if (file.type.match(textType)) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    fileDisplayArea.innerText = reader.result;
                }

                reader.readAsText(file);    
            } else {
                fileDisplayArea.innerText = 
            }
	}
}
