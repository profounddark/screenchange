# screenchange

Basic modules for single page app screen management. Built using only HTML, CSS, and JavaScript.

## Contents

This project contains two primary files:
* *screenmanager.css* - the CSS file. This should be included in your single page. It contains three classes: *viewport*, *screen*, and *inactive*.
* *screenmanager.js* - the JavaScript module. You will want to import the ScreenManager module into your JavaScript files in which you intend to utilize the ScreenManager.

There is also an HTML file and a CSS file that is used to demonstrate the use of the ScreenManager class.

## Using the ScreenManager

As indicated above, the screenmanager CSS file should be included in your HTML page. The screenmanager JavaScript file should be imported into any JS file in which you want to take advantage of the ScreenManager.

The *viewport* class is meant to be the container for all of the screens. Each screen should be a separate **div** (or similar element) within the *viewport* container. Each screen should have the class *screen* and the attribute *screenid* equal to the name of the screen. This *screenid* will be used to reference the screen later.

The ScreenManager class has two methods: the **constructor** and **changeScreen**. The constructor requires one parameter: the name of the screen that you want to start on. For example, if your starting screen had the *screenid* equal to *titlescreen*, you would instance the ScreenManager this way:
```
let screenManager = new ScreenManager('titlescreen');
```
To change between screens, use the **changeScreen** method. The method requires one paramter: the name of the screen to which you wish to set as the active screen. For example, if you wanted to switch to a *screen* **div** named *gameover*, you would do it this way:
```
screenManager.changeScreen('gameover');
```
## Known Issues

This code module doesn't actually disable the inactive **divs**. They will still trigger and respond to events, as appropriate. 

## Future Development

This is super basic. In the future, I may want to add some sort of transitions to the screen change, but that is actually a lot more involved than I originally thought.

## Notes
This wasn't really made for public use. However, it's something I found myself needed quite a bit in my own development, so I thought I'd make something standardized so I could easily import it into my own web apps. I'll do my best to update this as I make changes to the code.
