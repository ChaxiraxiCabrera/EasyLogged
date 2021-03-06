# EasyLogged
This project's about a manager of Firebase database. You can register and login users and save their data. Also, you can save other types of data and be managing it. 
And you could switch between user logged and user unlogged interfaces.  Show and hide elements depends on the state.
All this with a simple implementation.  You only need sing up in firebase, copy his implementation code and follow the indication imports below.

## Project integration

### Activate Firebase database
The documentation is coming meanwhile you can see [here](https://docs.google.com/document/d/1r3ESzwPzDod8O4sOu9ul_FMaImb87nYWPPqEpyolf0o/edit?usp=sharing) the steps.

### Imports
Download this project in a folder called easy-modal.

```
<script src="your-directory/easy-modal/app.js"></script>
<script src="your-directory/easy-modal/firebaseProvider.factory.js"></script>
<script src="your-directory/easy-modal/register.component.js"></script>
```

### Imports Required

```
<!-- JQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- Boostrap -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!-- AngularJS -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>

<!-- Your Firebase implementation -->
<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase-database.js"></script>
<script>
    // Initialize Firebase
    var config = {
        apiKey: "yourFirebaseApiKey",
        authDomain: "youtDomain",
        databaseURL: "yourDatabaseURL",
        projectId: "yourProjectID",
        storageBucket: "yourStorageBucket",
        messagingSenderId: "1057560941397"
    };
    firebase.initializeApp(config);
</script>
```

### Module

```
 angular.module('yourApp', ['EasyModal']);
```

### Register Modal

```
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#registerComponent">
  Launch Register
</button>

<easy-modal-component></easy-modal-component>
 ```  

### Login Modal

```
    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#loginComponent">
  Launch Login
</button>

<easy-log-modal></easy-log-modal>
```
## Directive attributes
The directive easy-log it's like a switch you can change between the interface with user logged and user unlogged. To show the interface with user logged, you will need add easy-log="in" in the html element. On the other hand, if you want see the user unlogged interface, you will need add easy-log="out" in the html element.
Here there are an example:
```
<nav>
    <button class="btn btn-sing" easy-log="in">Log out</button>
    <button class="btn btn-sing" easy-log="out">Sing In</button>
    <button class="btn btn-sing" easy-log="out">Sing Up</button>
</nav>
```

## Issues
- Maybe you have some problems with the register.component.js, specifically with 'templateUrl' because at the moment you need to change this value in register.component.js.

## Road Map
- ~~Create a factory to simplify the Firebase connection.~~
- Create the documentation to use the methods of Firebase factory.
    - createDataUser
    - updateDataUser
    - getItem
    - setItem
    - updateItem
- ~~Create a directive to change interface view between user logged and user unlogged.~~
- ~~Create a component to sing up.~~
- Create a component to login.
- Create a component to logout.
- Hard refactoring
- Compress in a single file

## Copyright and License

Copyright 2017 EasyLogged. Code released under the [MIT]


