import SOUNDS from './SOUNDS.js';


const extensionObject = {
    constructorExt: function( TextTyperInstance ) {
        TextTyperInstance.typeAudioHTML = document.createElement('audio');
        TextTyperInstance.delAudioHTML = document.createElement('audio');
        
        TextTyperInstance.typeAudioHTML.volume = 1;
        TextTyperInstance.delAudioHTML.volume = 1;
    },
    typeExt: function( TextTyperInstance ) {
        TextTyperInstance.typeAudioHTML.currentTime = 0.075;
        TextTyperInstance.typeAudioHTML.play();
    }, 
    deleteExt: function( TextTyperInstance ) {
        TextTyperInstance.delAudioHTML.currentTime = 0.075;
        TextTyperInstance.delAudioHTML.play();
    }
}




TextTyper.extensions = TextTyper.extensions || [];
TextTyper.extensions.push( extensionObject );

//======================================
//  NEW CONSTANT VALUES
//======================================
for (let k in SOUNDS)
    TextTyper[k] = SOUNDS[k];

//=======================================
//  NEW METHODS
//=======================================
/**
 * @typedef SoundSettings
 * @property {string} typeSound The type of keyboard switch for typing characters
 * @property {string} delSound The type of keyboard switch for deleting characters
 * @property {number} typeVolume The volume of the typing keyboard sound
 * @property {number} delVolume The volume of the deleting keyboard sound
 */
/**
 * Configure settings for keyboard sound
 * 
 * @param {SoundSettings} param0 Settings for typing sound 
 */
TextTyper.prototype.soundSettings = function ({ typeSound, delSound, typeVolume, delVolume} = {}, resolve ) {
    if (typeSound) this.typeAudioHTML.src = typeSound;
    if (delSound) this.delAudioHTML.src = delSound;
    if (typeVolume) {
        if ( isFinite(typeVolume) && typeVolume >= 0 && typeVolume <= 1)
            this.typeAudioHTML.volume = typeVolume;
        else throw "Invalid Typing Sound Volume Provided";
    }
    if (delVolume) {
        if ( isFinite(delVolume) && delVolume >= 0 && delVolume <= 1)
            this.delAudioHTML.volume = delVolume;
        else throw "Invalid Delete Sound Volume Provided";
    }

    if (resolve) resolve();
}

    
/**
* Adds a Sound Setting event to the event queue
*/
TextTyper.CursorEventQueue.prototype.soundSettings = function ({ typeSound, delSound, typeVolume, delVolume} = {} ) {
    this.eventQueue.push( [this.textBox.soundSettings, [ { typeSound, delSound, typeVolume, delVolume} ] ] );
    return this;
}