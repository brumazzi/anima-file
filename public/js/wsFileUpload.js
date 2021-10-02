var global = null;

function uploadFileInit(container) {
    var fileInputs = container.querySelectorAll("[type='file']");
    for (var i = 0; i < fileInputs.length; i += 1) {
        var input = fileInputs[i];
        input.addEventListener('change', function (evt) {
            for (var j = 0; j < evt.target.files.length; j += 1) {
                var file = evt.target.files[j];
                var fileReader = new FileReader();
                var connectionMeta = document.querySelector('meta[name=wsserver]');
                var socket = new WebSocket(connectionMeta.getAttribute('content'));

                fileReader.socket = socket;
                socket.file = file;
                socket.fileReader = fileReader;
                socket.container = input.getAttribute('data-container');
                socket.binaryType = 'arraybuffer';

                fileReader.addEventListener('load', function (evt) {
                    var socket = evt.target.socket;

                    socket.send(evt.target.result);
                });

                socket.addEventListener('error', function (evt) {
                    console.log('error', evt);
                });

                socket.addEventListener('message', function (evt) {
                    var data = JSON.parse(evt.data)
                    if (data.fileName) {
                        document.querySelector('#' + socket.container).value = data.fileName;
                        toast({ title: 'file has uploaded.', icon: 'success' });
                    } else {
                        toast({ title: data.error });
                    }
                    socket.close();
                });

                socket.addEventListener('open', function (evt) {
                    evt.target.fileReader.readAsArrayBuffer(evt.target.file);
                });
            }
        })
    }
}