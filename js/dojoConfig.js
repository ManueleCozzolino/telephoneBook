var dojoConfig = {
  async: true,
  parseOnLoad: true,
  tlmSiblingOfDojo: false,
  baseUrl: '',
  packages: [
    {
      name: "dojo",
      location: "libs/js/dojo"
    },
    {
      name: "dijit",
      location: "libs/js/dijit"
    },
    {
      name: "modules",
      location: "js/modules"
    }
  ]
};

//location origins from the dojo.js file, as default. baseUrl parameter specifies a differemt origin.
