const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDEJ70oPoYPU6u2z75GawvVoZgHsHi8evg",
    authDomain: "fir-frontend-9cb3b.firebaseapp.com",
    projectId: "fir-frontend-9cb3b",
    storageBucket: "fir-frontend-9cb3b.appspot.com",
    messagingSenderId: "684120340455",
    appId: "1:684120340455:web:99df243846b0073d1e2f42",
    measurementId: "G-LWBXCFDL3V"

});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById('email').value
    const passwrod = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, passwrod)
        .then((res) => {
            console.log(res.user)
        })
        .catch((error) => {
            alert(error.message)
            console.log(error.code)
            console.log(error.message)
        })
}


const login = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res.user)
        })
        .catch((error) => {
            alert(error.message)
            console.log(error.code)
            console.log(error.message)
        })
};


const saveData = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    db.collection('users')
        .add({
            email: email,
            password: password
        })
        .then((docRef) => {
            console.log('DRWI', docRef.id)
        })
        .catch((error) => {
            console.log('EAD', error)
        })
};

const readData = () => {
    db.collection('users')
        .get()
        .then((data) => {
            console.log(data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }))
        })
};

const updateData = () => {
    db.collection('users').doc('aWod5rQYX24fKFf9xnij')
        .update({
            email: "physics@gmail.com",
            password: '147852'
        })
        .then(() => {
            alert('Data updated!!')
        })

}

const deleteData = () => {
    db.collection('users').doc('aWod5rQYX24fKFf9xnij').delete()
        .then(() => {
            alert('Data Deleted!!')
        })

}