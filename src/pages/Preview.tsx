import {
    IonHeader, IonPage, IonTitle, IonContent
} from '@ionic/react';
import React, {useDebugValue, useState} from 'react';
import './style.css'
const moveCenter = {
    'textAlign': 'center',
    'color': 'green'
}
const changeBackground = {
    'background': 'black'
}



const Preview: React.FC = (props) => {


    return (
        <IonPage>
            <IonHeader>
                <IonTitle style={moveCenter}>
                    Successfully submitted from
                </IonTitle>
            </IonHeader>
            <IonContent >


            </IonContent>

        </IonPage>
    );
};

export default Preview;
