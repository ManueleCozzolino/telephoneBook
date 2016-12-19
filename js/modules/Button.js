define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
], (declare, _WidgetBase) => {
    declare(
      "Button.BootstrapButton",
      [_WidgetBase],
      {
        mapOfCorrespondences: {
          "delete": {
            btnType: "danger",
            iconType: "remove"
          },
          "edit": {
            btnType: "primary",
            iconType: "pencil"
          }
        },

        constructor(buttonType){
          try{
            var buttonInfo = this.tryGetCorrispondence(buttonType)
          }
          catch(errMessage){
            console.error(errMessage)
            return
          }

          Object.keys(buttonInfo).forEach((key) => {
            this[key] = buttonInfo[key]
          })
        },

        getTemplate(){
          var html = `
            <a class="btn btn-${this.btnType}" role="button">
              <span class="glyphicon glyphicon-${this.iconType}" />
            </a>
          `
          return html
        },

        tryGetCorrispondence(buttonType){
          var buttonInfo = this.mapOfCorrespondences[buttonType];
          if (!buttonInfo){
            throw "Invalid buttonType for BootstrapButton constructor. Check first parameter!"
          }
          else {
            return buttonInfo
          }
        }
      }
    );
  }
);
