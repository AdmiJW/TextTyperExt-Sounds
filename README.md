# ⌨️ Text Typer Extension - Typing Sounds ⌨️

Enchance the typing with keyboard sound effects. Extension of [TextTyper](TOFILLHERE)

## Credit 
Credit  Sound Effects to [Here](https://gaminggem.com/cherry-mx-mechanical-switch-guide/)


<br>

### __Links__
* [Example](#example)
* [Settings](#settings)
* [Setting Constants](#setting-constants)

<br>

# Example

```javascript

//  Use Normally
tt.soundSettings({
    typeSound: TextTyper.SOUND_CHERRY_BLUE,
    delSound: TextTyper.SOUND_CHERRY_BLACK,
    typeVolume: 0.8,
    delVolume: 0.6
});

const eq = tt.eventQueue();

//  Chain method
eq.soundSettings({
    typeSound: TextTyper.SOUND_CHERRY_BLUE
}).typeText("Hello").start();
```

<br>

# Settings

With this extension, it adds a new `soundSettings` method to both `TextTyper` object and `CursorEventQueue` object. So it can be used in chaining methods, or called normally before setting up event chains.

It takes in a SoundSettings Javascript object:
```javascript
{ typeSound, delSound, typeVolume, delVolume }
```

| Property | Description |
|-|-|
| `typeSound` (optional) | A string constant. Sound Effect when typing characters. Explained in [Setting Constants](#setting-constants) |
| `delSound` (optional) |  A string constant. Sound Effect when deleting characters. Explained in [Setting Constants](#setting-constants) |
| `typeVolume` (optional) | Number from 0 to 1. Volume of typing sound |
| `delVolume` (optional) | Number from 0 to 1. Volume of deleting sound |

<br>

# Setting Constants
* `TextTyper.SOUND_CHERRY_BLACK`
* `TextTyper.SOUND_CHERRY_BLUE`
* `TextTyper.SOUND_CHERRY_BROWN`
* `TextTyper.SOUND_CHERRY_CLEAR`
* `TextTyper.SOUND_CHERRY_GREEN`
* `TextTyper.SOUND_CHERRY_GREY`
* `TextTyper.SOUND_CHERRY_RED`
* `TextTyper.SOUND_CHERRY_WHITE`