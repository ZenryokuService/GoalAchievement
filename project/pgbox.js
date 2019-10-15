/*************************
 * PGボックス用APPモジュール *
 *************************/
 // 言語取得
 var docLang = 'ja'; //navigator.language;
 // モジュール
 var app = angular.module('pgBoxAG', ["ngRoute"]);
 // コントローラー
 app.controller('topController', function($scope, $http) {
     // 初期表示設定
     $scope.userLang = docLang;
     // 初期化処理
     initPage($scope, $http);
     // メソッドの登録
     initMethods($scope, $http);
 });

 /****************************
  * PGボックス用各処理用メソッド  *
  * >see dataConst.js        *
  ****************************/
/** 初期化処理 */
function initPage($scope, $http) {
    // 左のサイドバー
    $scope.leftSideBar_disp = "block";
    $scope.leftSideBar_size = 2;
    // 右のサイドバー
    $scope.rightSideBar_disp = "block";
    $scope.rightSideBar_size = 3;
    var messArray = [];
    // メッセージテキスト設定する
    if (docLang == 'ja') {
        messArray = JAPANESE_MESSAGE;
        $scope.techCategories = JAPANESE_CATEGORIES;
    } else {
        messArray = ENGLISH_MESSAGE;
        $scope.techCategories = ENGLISH_CATEGORIES;
    }
    // メッセージの設定
    $scope.welcomeMessage = messArray['welcomeMessage'];
    $scope.firstMessage = messArray['firstMessage'];
    $scope.secondMessage = messArray['secondMessage'];
    $scope.thirdMessage = messArray['thirdMessage'];
    $scope.fourthMessage = messArray['fourthMessage'];

    // デフォルト画面の描画
    $scope.usage_top = messArray['usage_top'];
    $scope.usage1 = messArray['usage1'];
    $scope.usage2 = messArray['usage2'];
}
/** 画面用のメソッド */
function initMethods($scope, $http) {
    // ヘッダーのクリック
    $scope.headerClick = function(paramUrl) {
        $http({method: "GET", url: paramUrl}).then(function onSuccess(response){
            // 成功時の処理
            document.getElementById("mainView").innerHTML = response.data;
        }, function onError(response) {
            // 失敗時の処理
            alert(response);
        });
    }
}
