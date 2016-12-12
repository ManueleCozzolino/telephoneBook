define([
  "dojo/_base/declare",
  "dijit/_WidgetBase"
],
  (declare, _WidgetBase) => {
    declare(
      "Contact.User",
      _WidgetBase,
      {
        constructor(firstname, lastname){
          this.firstname = firstname
          this.lastname = lastname
        }
      }
    )
  }
)
