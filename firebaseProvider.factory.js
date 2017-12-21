(function () {
    'use strict';

    angular
        .module('EasyModal')
        .factory('firebaseProvider', firebaseProvider);

    firebaseProvider.$inject = [];
    function firebaseProvider() {
        /* __________________________: Functions Declaration :_________________________ */
        var vm = this;
        vm.url = '';

        var service = {
            registerNewUser: registerNewUser,
            registerNewUserByGoogle: registerNewUserByGoogle,
            registerNewUserByFacebook: registerNewUserByFacebook,
            checkCurrentUser: checkCurrentUser,
            setUrl: setUrl,
            singInUser:singInUser,
            singInUserByGoogle:singInUserByGoogle,
            singInUserByFaceBook:singInUserByFaceBook,
            singOutUser:singOutUser,
            updateDataUser:updateDataUser,
            createDataUser:createDataUser,
            setItem:setItem,
            updateItem:updateItem,
            getItem:getItem
        };

        return service;

        //////////////////////////////// MAIN FUNTIONS ////////////////////////////////
        function registerNewUser(user) {
            console
            return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(function () {
                    sendEmailVerification();
                })
                .catch(onError);
        }

        function registerNewUserByGoogle() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function (result) {
                sendEmailVerification();
                return result.user.uid;

            }).catch(onError);
        }

        function registerNewUserByFacebook() {
            var provider = new firebase.auth.FacebookAuthProvider();
            console.log('Estamos in');
            firebase.auth().signInWithPopup(provider).then(function (result) {
                sendEmailVerification();
                return result.user.uid;
            }).catch(onError);
        }

        function sendEmailVerification() {
            var actionCodeSettings = {
                url: vm.url + '/?email=' + firebase.auth().currentUser.email,
                iOS: {
                    bundleId: 'com.example.ios'
                },
                android: {
                    packageName: 'com.example.android',
                    installApp: true,
                    minimumVersion: '12'
                },
                handleCodeInApp: true
            };
            firebase.auth().currentUser.sendEmailVerification(actionCodeSettings)
                .then(function () {
                    console.log('Sended email to verification');
                })
                .catch(onError);
        }

        function checkCurrentUser() {
            let userUid;
            return firebase.auth();
        }

        function setUrl(url) {
            vm.url = url;
        }

        function singInUser(user) {
            console.log('singInUser',user)
            return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .catch(onError);
        }

        function singInUserByGoogle() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
        }

        function singInUserByFaceBook(user) {
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
        }

        function singOutUser() {
            firebase.auth().signOut().then(function () {
                console.log('Se salio con exito bróh!')
            }).catch(onError);
        }

        function updateDataUser(user, update) {
            firebase.database().ref('/users/' + user.uid).update(update);
        }

        function createDataUser(user) {
            firebase.database().ref('/users/' + user.uid).set(user);
        }

        function setItem(path, item) {
            console.log('setItem',path,item)
            firebase.database().ref(path).set(item);
        }

        function updateItem(path, updateItem) {
            firebase.database().ref(path).update(updateItem);
        }

        function getItem(path) {
            let promise = new Promise(function (resolve, reject) {
                firebase.database().ref(path).on('value', data => {
                    resolve(data.val());
                });
            });
            return promise;
        }

        ////////////////////////////// SECUNDARY FUNTIONS /////////////////////////////
        function onError(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
        }
    }
})();