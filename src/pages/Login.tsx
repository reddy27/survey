import {
    IonHeader, IonPage, IonTitle, IonItem, IonLabel, IonInput, IonContent, IonList, IonButton
} from '@ionic/react';
import Home from "./Home";
import React, { useState} from 'react';
import { Route} from 'react-router-dom';
const moveCenter = {
    'textAlign': 'center',
    'color': 'blue'
}




const Login: React.FC = (props) => {

    const [name, setName] = useState('')

    const handleSubmit = () => {
        console.log('handleSubmit', {name})
        setName('')
        return (
            <Route path='/home' component={Home} test='pramod'/>
        )
    }

    return (
        <IonPage>
            <IonHeader>
                <IonTitle style={moveCenter}>
                    Welcome to Survey
                </IonTitle>
            </IonHeader>
            <br />
            <br />
            <IonContent>
            <IonList>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit();}}>
                    <IonItem>
                        <IonLabel position="stacked">User Name</IonLabel>
                        <IonInput required type="text" size={10} value={name} onKeyUp={(event:any) => setName(event.target.value)}  ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Password</IonLabel>
                        <IonInput required type="password" ></IonInput>
                    </IonItem>
                </form>
             </IonList>
                <IonButton  type="submit" href='/home'  >Log in</IonButton>

            </IonContent>

        </IonPage>
    );
};

export default Login;
