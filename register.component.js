angular.module('EasyModal')
    .component('easyLogModal', {
        templateUrl: 'node_modules/easy-modal/register.html',
        controller: controller,
        controllerAs: 'registerComponent',
        bindings: {

        }
    })
    .directive('easyLog', directiveEasyLog);

directiveEasyLog.$inject = ['firebaseProvider'];
function directiveEasyLog(FBP) {
    return function (scope, element, attrs) {
        scope.$watch(function () {
            FBP.checkCurrentUser().onAuthStateChanged(function (isUser) {
                if (isUser) {
                    if (attrs.easyLog === 'in') element.show();
                    if (attrs.easyLog === 'out') element.hide();
                    console.log('user log', isUser);
                }
                if (!isUser) {
                    if (attrs.easyLog === 'in') element.hide();
                    if (attrs.easyLog === 'out') element.show();
                    console.log('user no log');
                }
            });

        }, true);
    }
}

controller.$inject = ['$scope', 'firebaseProvider'];
function controller($scope, FBP) {
    var registerComponent = this;
    registerComponent.currentUser = {
        email: '',
        password: '',
    };

    registerComponent.registerNewUser = registerNewUser;
    registerComponent.registerNewUserByGoogle = registerNewUserByGoogle;
    registerComponent.registerNewUserByFacebook = registerNewUserByFacebook;
    registerComponent.singOut = singOut;
    registerComponent.singInUser = singInUser;
    registerComponent.singInUserByGoogle = singInUserByGoogle;
    registerComponent.singInUserByFaceBook = singInUserByFaceBook;

    ///**********************
    registerComponent.createDataUser = createDataUser;
    registerComponent.updateDataUser = updateDataUser;
    registerComponent.setItem = setItem;
    registerComponent.getItem = getItem;
    registerComponent.updateItem = updateItem;

    ////////////////
    registerComponent.$onInit = function () {
        FBP.setUrl(config.databaseURL);
    };

    // $scope.$watch(function () {
    //     FBP.checkCurrentUser().onAuthStateChanged(function (user) {
    //         if (user) {
    //             registerComponent.currentUser.uid = user.uid;
    //             console.log(user.uid)
    //         } else {
    //             userUid = false;
    //         }
    //     });
    // });

    function registerNewUser() {
        console.log('registerNewUser',registerComponent.newUser)
        FBP.registerNewUser(registerComponent.newUser);
    }

    function registerNewUserByGoogle() {
        FBP.registerNewUserByGoogle();
    }

    function registerNewUserByFacebook() {
        FBP.registerNewUserByFacebook();
    }

    function singOut(){
        FBP.singOutUser();
    }

    function singInUser(){
        singOut();
        FBP.singInUser(registerComponent.newUser);
    }
    function singInUserByGoogle(){
        singOut();
        FBP.singInUserByGoogle();
    }
    function singInUserByFaceBook(){
        singOut();
        FBP.singInUserByFaceBook();
    }

    //////////////////////////////////////
    function createDataUser(){
        FBP.createDataUser(registerComponent.currentUser);
    }
    
    function updateDataUser(){
        alert();
        let update = {
            jj: 'mod'
        }
        FBP.updateDataUser(registerComponent.currentUser, update)
    }
    
    function setItem(){
        item = {id:0,item:'ingresado',box:true}
        FBP.setItem('/items/' + item.id, item);
    }

    function getItem(){
        FBP.getItem('/items/0').then(response => console.log(response));
    }

    function updateItem(){
        FBP.updateItem('/items/0',{box:false});
    }
    
    

}