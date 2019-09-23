import {ScreenManager} from "./screenmanager.js";

let screenManager;

document.addEventListener("DOMContentLoaded", function(event)
    {
        screenManager = new ScreenManager("title");

        let buttonList = document.querySelectorAll('#screenbutton');
        buttonList.forEach(function(button)
        {
            button.addEventListener("mousedown", function(event)
            { 
                let destPage = event.target.getAttribute('destination');
                screenManager.changeScreen(destPage);
            });
        });

    })