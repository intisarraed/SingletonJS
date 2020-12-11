class ThemeSettings{
   constructor(){
       if(ThemeSettings.instance instanceof ThemeSettings){
           return ThemeSettings.instance;
       }
       this.ThemeSettingsObject={
           'font': 'Sans-serif',
           'layout':'header',
           'color':'red'
       };
       Object.freeze(this.ThemeSettingsObject);
       Object.freeze(this);
       ThemeSettings.instance = this;
   }
   get(key){
       return this.ThemeSettingsObject[key];
   }
}