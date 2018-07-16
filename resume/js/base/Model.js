window.Model = function(options){
    let resourceName = options.resourceName
    return {
      init: function(){
        var APP_ID = 'pK4QvbtPvxTPz5pquiWKPkTs-gzGzoHsz';
        var APP_KEY = 'quXFnuchFzjJExzi80bn9exq';
        AV.init({ appId: APP_ID, appKey: APP_KEY });
      },
      fetch: function(){
        var query = new AV.Query(resourceName);
        return query.find() // Promise 对象
      },
      save: function(object){
       var X = AV.Object.extend(resourceName);
       var x = new X();

        return x.save(object)
      }
    }
  }