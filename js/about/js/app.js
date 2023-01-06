var config = {
      apiKey: "AIzaSyAfYYbhdqzTZnD4gaPjOfYC1F-m6SNgiLg",
      authDomain: "infinix-d200d.firebaseapp.com",
      projectId: "infinix-d200d",
      storageBucket: "infinix-d200d.appspot.com",
      messagingSenderId: "618474026565",
      appId: "1:618474026565:web:2db11006169e62d5cd952c",
      measurementId: "G-Q6K70V3GBZ"
    };
    firebase.initializeApp(config);
    // Apenas para remover um warning
    firebase.firestore().settings({
      timestampsInSnapshots: true,

    });