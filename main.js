var VKID = '';

VK.init({
    VK.init(function() {
     document.write("SUCCESS! ");
     init();
  }, function() {
     // API initialization failed
     // Can reload page here
}, '5.103'); 
function init(){
    VK.api("users.get", {"v":"5.103"}, function (data){
        VKID = data.response[0].id;
        document.write(VKID);
    });
}
