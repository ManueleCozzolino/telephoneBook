define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dojo/dom-construct",
    "dojo/on",
    "dojo/query"
], (declare, _WidgetBase, domConstruct, on, query) => {
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
          if(!this.buttonNode){
            let buttonHtml = this.getTemplate();
            let buttonNode = domConstruct.toDom(buttonHtml);
            this.buttonNode = buttonNode;
          }
          return this.buttonNode
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

        attachAction(action){
          // on(target, "click", () => {
          //     console.log("khsdfshkf");
          // })
        }
      }
    );
  }
);
