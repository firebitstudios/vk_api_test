let VKID;

VK.init(function() {
    document.write("SUCCESS! ");
    init();
  }, function() {
     // API initialization failed
     // Can reload page here
}, '5.103'); 
function init(){
    VK.api("users.get", {"fields":"first_name", "v":"5.103"}, function (data){
        VKID = data.response[0].first_name;
        document.write(VKID);
    });
}
