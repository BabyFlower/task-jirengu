!function(){
    var view = View('#messages');
    var model = Model({resourceName:'Message'});
    var controller = {
      view:null,
      model:null,
      myForm:null,
      messageList:null,
      init:function(view,model){
        this.view = view;
        this.model = model;
        this.model.init();
        this.bindEvents();
        this.loadMessage();
      },
      bindEvents:function(){
        this.myForm = this.view.querySelector('#postMessageForm');
        this.messageList = this.view.querySelector('ol');
        this.myForm.addEventListener('submit',(e)=>{
          e.preventDefault()
          this.saveMessage();
        })
      },
      saveMessage:function(){
        let myForm = this.myForm;
        let name = myForm.querySelector('input[name=name]').value;
        let content = myForm.querySelector('input[name=content]').value;
        this.model.save({
          'name': name,'content': content
        })
        .then(function (object) {
          let li = document.createElement('li');
          li.innerText = `${object.attributes.name}:   ${object.attributes.content}`;
          let messageList = document.querySelector('#messages>ol');
          messageList.appendChild(li); 
        });
      },
      loadMessage:function(){
      
        this.model.fetch().then((messages) =>{
          let array = messages.map((item)=>item.attributes)
          array.forEach((item) => {
            let li = document.createElement('li');
            li.innerText = `${item.name}:     ${item.content}`;
            this.messageList.appendChild(li);
          });
      }).then(function(todos) {
        // 更新成功
      }, function (error) {
        // 异常处理
      });
      }
    }

  controller.init(view,model);

}.call()



// var myForm = document.querySelector('#postMessageForm');//监听表单，能够满足点击跟回车同时。
// myForm.addEventListener('submit', function (e) {
//   e.preventDefault(); //阻止默认事件
//   let name = myForm.querySelector('input[name=name]').value;
//   let content = myForm.querySelector('input[name=content]').value;
//   var Message = AV.Object.extend('Message');
//   var message = new Message();
//   message.save({
//     'name': name,
//     'content': content
//   }).then(function (object) {
//     let li = document.createElement('li');
//     li.innerText = `${object.attributes.name}:   ${object.attributes.content}`;
//     let messageList = document.querySelector('#messages > ol')
//     messageList.appendChild(li); 
//   })
// })

// var query = new AV.Query('Message');
// query.find().then(function (messages) {
//     
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })
//let array = messages.map((item)=>item.attributes)
//     array.forEach((item) => {
//       let li = document.createElement('li');
//       li.innerText = item.content;
//       let messageList = document.querySelector('#messages > ol')
//       messageList.appendChild(li);
//     
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

