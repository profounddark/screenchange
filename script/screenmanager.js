class ScreenManager
{
    constructor(startScreen)
    {
        this.screenLists = document.getElementsByClassName('screen');
        for (let count = 0; count < this.screenLists.length; count++)
        {
            if (this.screenLists[count].getAttribute("screenid") == startScreen)
            {
                this.currentScreen = count;
            }
            else
            {
                this.screenLists[count].classList.add("inactive");
            }
        }
    }

    changeScreen(newScreen)
    {
        let screenIndex = this.currentScreen;

        for (let count=0; count < this.screenLists.length; count++)
        {
            if (this.screenLists[count].getAttribute("screenid") == newScreen)
            {
                this.screenLists[this.currentScreen].classList.add("inactive");
                screenIndex = count;
                this.screenLists[count].classList.remove("inactive");
            }
        }
    
        if (screenIndex == this.currentScreen)
        {
            // make this an error message
            console.log("Unable to load screen " + newScreen);
        }
        else
        {
            this.currentScreen = screenIndex;
        }

    }
}

export {ScreenManager}
