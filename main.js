var IDOFUSER = 0;

VK.init(function() {
    document.write("SUCCESS! ");
    init();
  }, function() {
     // API initialization failed
     // Can reload page here
}, '5.103'); 
function init(){
    VK.api("users.get", {"v":"5.103"}, function (data){
        IDOFUSER = data.response.id;
        document.write(IDOFUSER);
        console.log("ID GOT");
        document.write("UFHWUHFIWUHFIU")
    });
}
