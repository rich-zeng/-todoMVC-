(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	//创建模板
	var app = angular.module('todosMVC',[]);
	app.controller('appController', ['$scope' , function ($scope) {
		//先创建一个假数据，以后可以从后台获取
		$scope.todos = [
			{id:1,name:'家具',completed:false},
			{id:2,name:'小蜗居',completed:false},
			{id:3,name:'舒适轿车',completed:true},
			{id:4,name:'柴米油盐',completed:false},
			{id:5,name:'人生哲理',completed:true}
		]
		//添加任务
		$scope.newTodo = '';
		$scope.add = function () {
			if(!$scope.newTodo){
				return
			}
			$scope.todos.push({
				id:Math.random(),name:$scope.newTodo,completed:false
			})
			$scope.newTodo = '';
		}
		//删除任务
		$scope.remove = function (id) {
			for(var i=0;i<$scope.todos.length;i++){
				var item = $scope.todos[i];
				if(item.id == id){
					$scope.todos.splice(i,1);
					return;
				}
			}
		}
		//修改任务内容
		$scope.isEditId = -1
		$scope.edit = function (id) {
			$scope.isEditId = id;
		}
		$scope.save = function () {
			$scope.isEditId = -1;
		}
		//切换任务完成状态与否

		//批量切换任务完成状态与否
		$scope.toggleAll = false;
		$scope.selectAll = function(){
			for(var i=0;i<$scope.todos.length;i++){
				var item = $scope.todos[i];
				item.completed = $scope.toggleAll;
			}
		}


	}])

})(window);
