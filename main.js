var IDOFUSER;

VK.init(function() {
    document.write("SUCCESS! ");
    init();
  }, function() {
     // API initialization failed
     // Can reload page here
}, '5.103'); 
function init(){
    VK.api("users.get", {"v":"5.103"}, function (data){
        IDOFUSER = data;
        document.write(IDOFUSER);
        console.log("ID GOT");
        console.log(IDOFUSER);
    });
}
