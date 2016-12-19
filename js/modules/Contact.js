define([
  "dojo/_base/declare",
  "dojo/query",
  "dojo/dom",
  "dojo/dom-construct",
  "dijit/_WidgetBase",
  "dojo/request/script",
  "dojo/parser",
  "modules/Button"
],
// dojo/request/script, differently from dojo/request/xhr, allows cross-origin http request

  (declare, query, dom, domConstruct, _WidgetBase, script, parser) => {

    // It is a good practice to name the classes as "<namespace>.<className>", where
    // namespace is the owner module's name
    declare(
      "Contact.User",
      [_WidgetBase],
      {
        constructor(info, domRef){
          this.name = info.name,
          this.surname = info.surname,
          this.phone = info.phone,
          this.email = info.email,
          this.photo = info.photo,
          this.domRef = domRef
        },

        postCreate(){
          let listDomNode = query(`.${this.domRef}`)[0];
          let htmlList = this.generateHtmlToAppend();
          domConstruct.place(htmlList, listDomNode, "last");
          parser.parse();
        },

        generateHtmlToAppend(){
          return `
            <div class="col-sm-6 col-md-3">
              <div class="thumbnail">
                <img src="${this.photo}" />
                <div class="caption">
                  <h3>${this.name} ${this.surname}</h3>
                  <p>${this.phone}</p>
                  <p>${this.email}</p>
                  <p>
                    <a class="btn btn-primary" role="button">
                      <span class="glyphicon glyphicon-pencil" />
                    </a>
                    <a class="btn btn-danger" role="button">
                      <span class="glyphicon glyphicon-remove" />
                    </a>
                    <div data-dojo-type="Button.BootstrapButton"></div>
                  </p>
                </div>
              </div>
            </div>
          `
        }
      }
    );

    declare(
      "Contact.UserList",
      [_WidgetBase],
      {
        constructor(domRef){
          this.domRef = domRef;
          this.initList();
        },

        initList(){
          script.get("http://uinames.com/api/",
            {
              query: {
                "ext": true,
                "amount": 25,
                "region": "United States"
              },
              jsonp: "callback"
            }
          ).then((users) => {
            this.users = users.map((user) => {
              const {name, surname, phone, email, photo} = user
              const contactInfo = {
                name,
                surname,
                phone,
                email,
                photo
              }
              return new Contact.User(contactInfo, this.domRef)
            })
          }, (err) => {
            console.log(`An error has occurred ${err}`);
          });
        }
      }
    );
  }
)
