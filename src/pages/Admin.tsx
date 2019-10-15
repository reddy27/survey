import {
    IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonContent, IonList, IonButton
} from '@ionic/react';
import React, {useDebugValue, useReducer, useState} from 'react';

const moveCenter = {
    'textAlign': 'center',
    'color': 'blue'
}




const Admin: React.FC = (props) => {
    // const [list, setValue] = useReducer((state, newState) => ({...state, ...newState}),{
    //     'name':'',
    //     'title' : ''
    // })

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')


    const handleChange = (event:any) => {
        const name = event.target.name;
        const newValue = event.target.value;
        //setValue({[name]: newValue})
        //console.log('handleChange', list)
    }

    const handleSubmit = () => {
        console.log('handleSubmit', {name, title})
        setName('')
        setTitle('')
    }

    return (

        <IonPage>
            <IonHeader>
                <IonTitle style={moveCenter}>
                    <h2>Admin portal.</h2>
                </IonTitle>
            </IonHeader>
            <br />
            <br />
            <IonContent>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit();}}>
                    <IonList>

                        <IonItem>
                            <IonLabel>Name</IonLabel>
                            <IonInput type="text"  name='name'  value={name} onKeyUp={(event:any) => setName(event.target.value)} ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Title</IonLabel>
                            <IonInput type="text"  name='title'  value={title} onKeyUp={(event:any) => setTitle(event.target.value)} ></IonInput>
                        </IonItem>
                    </IonList>
                    <IonButton type="submit">Submit</IonButton>
                </form>
            </IonContent>

        </IonPage>
    );
};

export default Admin;
