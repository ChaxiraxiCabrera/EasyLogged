# EasyLogged

## Project integration

### Imports

```
<script src="node_modules/easy-modal/app.js"></script>

    <!-- FIREBASE -->
    <script src="https://www.gstatic.com/firebasejs/4.8.0/firebase.js"></script>
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

<easy-modal-component></easy-modal-component>
```

## Directive attributes


## Copyright and License

Copyright 2017 EasyLogged. Code released under the [MIT]


