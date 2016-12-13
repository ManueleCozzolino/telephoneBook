define([
  "dojo/_base/declare",
  "dojo/query",
  "dojo/dom",
  "dojo/dom-construct",
  "dijit/_WidgetBase",
  "dojo/request/script"
],
// dojo/request/script, differently from dojo/request/xhr, allows cross-origin http request

  (declare, query, dom, domConstruct, _WidgetBase, script) => {

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
        },

        generateHtmlToAppend(){
          return `
            <div class="${this.domRef}-item">
              <p>${this.name}</p>
              <p>${this.surname}</p>
              <p>${this.phone}</p>
              <p>${this.email}</p>
              <img src="${this.photo}" />
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
                "amount": 25
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
