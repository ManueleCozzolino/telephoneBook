define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dojo/dom-construct",
    "dojo/on"
], (declare, _WidgetBase, domConstruct, on) => {
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
          if(!this.templateHtml){
            let templateHtml = `
              <a class="btn btn-${this.btnType}" role="button">
              <span class="glyphicon glyphicon-${this.iconType}" />
              </a>
            `
            this.templateHtml = templateHtml
          }
          return this.templateHtml
        },

        getButtonNode(){
          let buttonHtml = this.getTemplate();
          let buttonNode = domConstruct.toDom(buttonHtml);
          return buttonNode
        },

        tryGetCorrispondence(buttonType){
          var buttonInfo = this.mapOfCorrespondences[buttonType];
          if (!buttonInfo){
            throw "Invalid buttonType for BootstrapButton constructor. Check first parameter!"
          }
          else {
            return buttonInfo
          }
        },

        attachAction(buttonNode, action){
          on(this.domNode, 'click', action)
        }
      }
    );
  }
);
