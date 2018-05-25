var APP_ID = 'pK4QvbtPvxTPz5pquiWKPkTs-gzGzoHsz';
var APP_KEY = 'quXFnuchFzjJExzi80bn9exq';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var myForm = document.querySelector('#postMessageForm');//监听表单，能够满足点击跟回车同时。
myForm.addEventListener('submit', function (e) {
  e.preventDefault(); //阻止默认事件
  let name = myForm.querySelector('input[name=name]').value;
  let content = myForm.querySelector('input[name=content]').value;
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.save({
    'name': name,
    'content': content
  }).then(function (object) {
    let li = document.createElement('li');
    li.innerText = `${object.attributes.name}:   ${object.attributes.content}`;
    let messageList = document.querySelector('#messages > ol')
    messageList.appendChild(li); 
  })
})

var query = new AV.Query('Message');
query.find().then(function (messages) {
    let array = messages.map((item)=>item.attributes)
    array.forEach((item) => {
      let li = document.createElement('li');
      li.innerText = item.content;
      let messageList = document.querySelector('#messages > ol')
      messageList.appendChild(li);
    });
}).then(function(todos) {
  // 更新成功
}, function (error) {
  // 异常处理
});
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

