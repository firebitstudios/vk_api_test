
VK.init(function() {
    document.write("SUCCESS! ");
    init();
  }, function() {
     // API initialization failed
     // Can reload page here
}, '5.103'); 
function init(){
    console.log("ID GOT");
    VK.api("users.get", {"v":"5.103"}, function (data){
        var result = data;
        document.write(result);
        console.log("ID GOT");
    });
}
