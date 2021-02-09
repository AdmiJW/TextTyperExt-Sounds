const path = require('path')


module.exports = {

    'entry': '/src/injector.js',
    'output': {
        'path': path.resolve(__dirname, 'dist'),
        'filename': 'cursor_ext_sound.js'
    }

}