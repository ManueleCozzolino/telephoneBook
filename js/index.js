// the strings within the dependencies array can be: names (as in this case) referring
// to certain paths basing on the field "packages" of the dojoConfig obj, or the paths themselves:
// require using name: "bootstrap/Button";
// require using path: "libs/js/dojo-bootstrap/Button"

require([
  "dojo/query",
  "bootstrap/Button",
  "modules/Contact",
  "dojo/domReady!"
],
  (query) => {
    // query("#loading-button").on("click", function(e) {
    //   query(e.target).button('loading');
    //   setTimeout(function() {
    //     query(e.target).button('reset');
    //   }, 2000);
    // });

    // There's no use to include Contact.User as parameter of the callback, because it gets
    // stored inside the loader's cache when it encounters the "declare" command
    // var user = new Contact.User("pippo", "pluto");
    var list = new Contact.UserList("contactsList");
});
