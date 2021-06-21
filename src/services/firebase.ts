//importa firebase "yarn add firebase"
import firebase from 'firebase/app'

//recomendacao importar cada servico que ira ser utilizado
import 'firebase/auth'
import 'firebase/database'

//configuracoes da aplicacao, fornecidades pelo console.firebase.google.com
const firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL:process.env.REACT_APP_DATABASE_URL,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_MESSAGER_SENDER_ID,
    appId:process.env.REACT_APP_APP_ID
  };

  
//inicializa o Firebase
firebase.initializeApp(firebaseConfig);

//inicializa variaveis de cada servico a ser utilizado
//exportando-os para aproveitamento em cada parte do app
export const auth = firebase.auth();
export const database = firebase.database();