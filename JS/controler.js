var dv= angular.module('holaMundo',[]);
dv.controller('p1',function($scope){
	$scope.texto='Juan perez'
	if (($scope.texto).l
		ength>5){
		alert("Ingrese menos texto");
	}
});
