# EasyLogged

## Project integration

### Imports

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
<script src="node_modules/easy-modal/app.js"></script>

<!-- Firebase -->
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

### Imports Required

```
<!-- Boostrap -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!-- JQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
<script src="node_modules/easy-modal/app.js"></script>

<!-- Firebase -->
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
```
<div class="nav">
    <button class="btn btn-sing" easy-log="in">Log out</button>
    <button class="btn btn-sing" easy-log="out">Sing In</button>
    <button class="btn btn-sing" easy-log="out">Sing Up</button>
</div>
```


## Copyright and License

Copyright 2017 EasyLogged. Code released under the [MIT]


