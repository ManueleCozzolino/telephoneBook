define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/bootstrapButton.html"
], (declare, _WidgetBase, _TemplatedMixin, template) => {
    declare(
      "Button.BootstrapButton",
      [_WidgetBase, _TemplatedMixin],
      {
        templateString: template
      }
    );
  }
);
