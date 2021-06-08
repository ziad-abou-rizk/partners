var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  // onclick it calls an api to the server to get data from partners.json
  $scope.Click = function(){
  console.log("click");
$http.get("partners.json")
.then(function(response) {
  $scope.partners = response.data;;
//  fetch data to calculate distance for each office and add this distance to the array partners
  var j;
  var i;
  for (i = 0; i < $scope.partners.length; i++) {
    for (j=0; j< $scope.partners[i].offices.length;j++){
  var coord = $scope.partners[i].offices[j].coordinates;
  var coma = coord.indexOf(",");
  console.log(coma);
  var longitude = coord.substring(0,coma);
  console.log(longitude);
  var latitude = coord.substring(coma + 1);
  console.log(latitude);

  var a = Math.cos(latitude)*Math.cos(longitude) - Math.cos($scope.Y)*Math.cos($scope.X);
  var b = Math.cos(latitude)*Math.sin(longitude) - Math.cos($scope.Y)*Math.sin($scope.X);
  var c = Math.sin(latitude)-Math.sin($scope.Y);
  var d = Math.sqrt(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2));
  var arc = 2*Math.asin(d/2);
  console.log(arc);
  const radius = 6371.009;
  var dist = arc * radius;
  $scope.partners[i].offices.forEach(function(e){
    if (typeof e === "object"){
      e["distance"]

}

});
$scope.partners[i].offices[j].distance=dist;


}
}
  console.log($scope.partners);
  });
}

});
