import React, { useState } from 'react';

import {
    IonApp,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonInput,
    IonList,
    IonItem,
    IonLabel,
    IonButton
} from '@ionic/react';





const LoginForm = () => {

    const [ email, setEmail ] = useState({value:''});
    const [ password, setPassword ] = useState('');

    const [ formErrors, setFormErrors ] = useState({
        message: ''
    });

    const submit = async () => {
        // try {
        //     await login({
        //         email,
        //         password
        //     });
        // } catch (e) {
        //     setFormErrors(e);
        // }
    }

    return (

        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Login
        </IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent>
        <form onSubmit={(e) => { e.preventDefault(); submit();}}>
    <div>
        {formErrors ? (
                formErrors.message
            ): null}
    </div>
    <IonList>
    <IonItem>
        <IonLabel>Email</IonLabel>
        <IonInput name="email" type="email"  onChange={(e) => setEmail}/>
    </IonItem>

    </IonList>

    <IonButton  type="submit">Log in</IonButton>
        </form>
        </IonContent>
        </>
)
}

export default  LoginForm
