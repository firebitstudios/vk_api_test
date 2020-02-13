VK.init(function() {
    document.write("SUCCESS\n");
    document.write("YOUR ID IS: " + userid.session.mid);
  }, function() {
     document.write("FAILED");
}, '5.103');
