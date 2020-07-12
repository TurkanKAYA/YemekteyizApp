angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$stateParams) {

$scope.isimAl = function(isim){

  $scope.kullanici = isim;

   localStorage.setItem('name',isim);
   $scope.kullanici=localStorage.getItem('name');

}


 $scope.kullanici=localStorage.getItem('name');


  $scope.yemekler = [
    { adi: 'Adana Kebap',malzeme:
    [
        {adi:'Marol',adet:'3 adet'},
        {adi:'Et',adet:'1 kg'},
        {adi:'Biber',adet:'5 adet'},
        {adi:'Bulgur',adet:'1 kg'},
        {adi:'Tuz',adet:'50gr'}
],tur:'Etli Yemek',aciklama:'Dilerseniz ızgaraya soğan, domates, biber veya ince dilimlenmiş patlıcan dilimleri dizebilir ve yemeğinizi zenginleştirebilirsiniz. Etler pişmeye yakın üzerine lavaş ekmeği koyarsanız yağını çekecek ve lezzeti güçlendirecektir. a',img:'https://i4.hurimg.com/i/hurriyet/75/750x422/5c08eb7ec03c0e22f82dd6d3.jpg', id: 0 },
    { adi: 'Yaprak Sarma',tur:'Sarma',aciklama:'asdf a',img:'https://www.yemektekeyifvar.com/img/yazi/mgt/en-eski-yemek-tarifleri-.jpg', id: 1 },
    { adi: 'Mercimek Çorbası',tur:'Çorba',aciklama:'asdf a',img:'https://iasbh.tmgrup.com.tr/93911e/812/467/0/2101/2848/3739?u=http://i.tmgrup.com.tr/sfr/2013/10/30/Orjinal/436976511478.jpg', id: 2 },
    { adi: 'Çoban Salata',tur:'Salata',aciklama:'asdf a',img:'https://lh3.googleusercontent.com/proxy/aNYUhvw3NjpivOE7c-BJe8Myd9QvUXlR8mHhYFVVd7W_JA-PdFAdEZerJvgohK7QjHTFPc6wJ0RWrw2iPl32uwvcGbvRTTZt9EWN2rmzvXs', id: 3 },
    { adi: 'Pirinç Pilavı',tur:'Pilav',aciklama:'asdf a',img:'https://im.haberturk.com/2019/10/16/ver1571221752/2531465_810x458.jpg', id: 4 },
    { adi: 'Bulgur Pilavı',tur:'Pilav',aciklama:'asdf a',img:'https://www.yemektekeyifvar.com/img/tarif/mgt/lokanta-usulu-bulgur-pilavi-1.jpg', id: 5 },
    { adi: 'Fırında Tava',tur:'Etli Yemek',aciklama:'asdf a',img:'https://1.bp.blogspot.com/-9iEyGmneWMk/UQVDae9nP9I/AAAAAAAAAY4/s1IcqHw9oOk/s1600/IMAG0679.JPG', id: 6 },
    { adi: 'İnegöl Köfte',tur:'Köfte',aciklama:'asdf a',img:'https://gastromanya.com/wp-content/uploads/2016/09/ekspres-inegol-koftecisi-maltepe_21723010841344.jpg', id: 7 }
  ];



if($stateParams.yemekNo){

  $scope.bilgi = $scope.yemekler[$stateParams.yemekNo];
}

})

.controller('PlaylistsCtrl', function($scope, $stateParams) {
});
