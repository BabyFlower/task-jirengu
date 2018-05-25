var APP_ID = 'pK4QvbtPvxTPz5pquiWKPkTs-gzGzoHsz';
var APP_KEY = 'quXFnuchFzjJExzi80bn9exq';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})

