angular.module('app.controllers', [])
  
.controller('feedCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
   
.controller('friendsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
   
.controller('messagesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$ionicHistory','$cordovaCamera', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $state, $stateParams, $ionicHistory, $cordovaCamera) {
    var options;
    document.addEventListener("deviceready", function () {
        options = {
          quality: 90,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 500,
          targetHeight: 500,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation:true
        };
    });
    $scope.takePicture = function(){
         $cordovaCamera.getPicture(options).then(function(imageData) {
          //var image = document.getElementById('myImage');
          //image.src = "data:image/jpeg;base64," + imageData;
             if(imageData){
                $rootScope.uploadedImage = "data:image/jpeg;base64," + imageData;
                 $rootScope.uploadPost = true;
             }
            
             $ionicHistory.nextViewOptions({
                disableBack: true
              });
            $state.go('menu.feed');
        }, function(err) {
          // error
        });   
    }
}])
   
.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('messageCtrl', ['$scope', '$stateParams', '$ionicNavBarDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicNavBarDelegate) {
    $scope.name = $stateParams.name;
}])
   
.controller('profileCtrl', ['$scope', '$stateParams', '$ionicNavBarDelegate',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicNavBarDelegate) {
    var name = $stateParams.name;
    var photo = name? name.toLowerCase().replace(" ", "-"): null;
    $scope.name = name;
    $scope.bgPhoto = photo? photo + ".jpg": null;
    $scope.hasBar =  function(){
        return $ionicNavBarDelegate.showBar();
    }
    $scope.toggleFollow = function(){
        $scope.following = !$scope.following;
    }
    $scope.following = Math.random() > .5;
    console.log($scope.following);

}])
   
.controller('channelsCtrl', ['$scope', '$stateParams', 'channelPanelDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, channelPanelDelegate) {
  var vm = this;
    
  vm.toggle = function() {
    channelPanelDelegate.togglePanel();
  }
  
  vm.togglePanelIfOpen = function(){
      channelPanelDelegate.togglePanelIfOpen();
  }
  /*
  function generateChannelBox(){
      var type = Math.random() > .8? "wide" : "tall";
      var img = "";
      var caption = "";
      return {
          type: type,
          element : angular.element(  `
        <div class="channel-box">
            <img class="channel-box-img" src="img/${type}/${img}">
            <div class="heading">
                <img class="stryx-avatar" src="img/profile/mud1kqzuTvS7Cf5QQvcW_headshot.jpg">
                    <div class="author-name-contain">
                        <h5 class="author-name">Gerrar Fle</h5>
                    </div>
                </div>
            <div class="footing">
                <h2 class="caption">${caption}</h2>
                <div class="stats">
                    <span class="stat-text"> 42 </span>
                    <span class="icon ion-heart stat-likes"></span> &nbsp;&nbsp;
                    <span class="stat-text"> 96 </span>
                    <span class="icon ion-android-share-alt stat-shares"></span>
                </div>
            </div>
        </div>
    `),
    }
  }
  vm.addChannelBoxes = function(num){
      var channelBoxes = [];
      var layoutHelper = [];
      for(var i = 0; i<num; i++){
          var numTall = 0;
          channelBoxes.push(generateChannelBox());
          if(channelBoxes[i].type == "tall"){
              numTall++;
          } else {
              layoutHelper.push(numTall);
              numTall=0;
          }
      }
      
  } */

}])
 