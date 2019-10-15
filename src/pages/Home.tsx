import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide, IonLabel, IonInput,
    IonList, IonItem, IonButton, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon,
    IonGrid, IonRow, IonCol, IonRadioGroup, IonListHeader, IonRadio, IonTextarea, IonCheckbox, IonRouterLink
} from '@ionic/react';
import React, {useDebugValue, useState} from 'react';
import Congrats from "./Congrats";
import {withRouter} from "react-router";


const slideOpts = {
    initialSlide: 0,
    speed: 400
};

const questions = [
    {
        'question_name': 'What year were you born?',
        'question_number': '1',
        'question_title': '',
        "options": ['Male', 'female', 'Other'],
        "type": "single"

    },
    {
        'question_name': 'Why are you using Cloud Buster?',
        'question_number': '2',
        'question_title': '',
        "options": ['To relax', 'To relax1', 'List of symptoms'],
        "type": "multiselect"

    },
    {
        'question_name': 'How often do you take cloud buster?',
        'question_number': '3',
        'question_title': '',
        "options": [],
        "type": "shortanswer"
    },
    {
        'question_name': 'Review your answers',
        'question_number': '4',
        'question_title': '',
        "options": [],
        "type": "preview"
    }
]


const getSurveyList = async () => {
    const APIResponse = await fetch("https://surveryapiapp.herokuapp.com/survey");
    const JSONResp = await APIResponse.json();
    return JSONResp
};


const TypeAnswer = (data: any, questions: any) => {


    const [answers, setAnswers] = useState({
        'answer': ''
    })

    const surveyData = data.data

    const handleChange = (event: any) => {
        // const { name, value } = event.target;
        setAnswers({answer: event.target.value})
        console.log('event', answers)
    }
    const handleSubmit = () => {
        console.log('handleSubmit', answers)

    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>
            <IonList>
                <IonRadioGroup>
                    <IonListHeader>
                        <IonLabel>Name</IonLabel>
                    </IonListHeader>

                    <IonItem>
                        <IonLabel>Biff</IonLabel>
                        <IonRadio slot="start" value="biff" name="biff" checked={answers.answer === "biff"}
                                  onIonSelect={handleChange}/>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Griff</IonLabel>
                        <IonRadio slot="start" value="griff" checked={answers.answer === "griff"}
                                  onIonSelect={handleChange}/>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Buford</IonLabel>
                        <IonRadio slot="start" value="buford" checked={answers.answer === "buford"}
                                  onIonSelect={handleChange}/>
                    </IonItem>

                </IonRadioGroup>
            </IonList>

            {/*{surveyData.type === 'single'  ?  (*/}
            {/*    <IonList >*/}
            {/*   */}
            {/*        {surveyData.options.map((option: any, index: any) => (*/}

            {/*                <IonItem>*/}
            {/*                    <IonLabel>{option}</IonLabel>*/}
            {/*                    <IonRadio slot="start" value={option} name={option} checked={answers.answer === option}  onIonSelect={ handleChange} />*/}
            {/*                    /!*<IonInput value={answers} onChange={(event:any) => setAnswers(event.target.value)} />*!/*/}
            {/*                </IonItem>*/}

            {/*        ))}*/}
            {/*    </IonList>*/}
            {/*): surveyData.type === 'multiselect'  ?  (*/}
            {/*    <IonList >*/}
            {/*        {surveyData.options.map((option: any, index: any) => (*/}

            {/*                <IonItem>*/}
            {/*                    <IonLabel>{option}</IonLabel>*/}
            {/*                    <IonRadio slot="start" value={option}   />*/}
            {/*                    /!*<IonInput value={answers} onChange={(event:any) => setAnswers(event.target.value)} />*!/*/}
            {/*                </IonItem>*/}

            {/*        ))}*/}
            {/*    </IonList>*/}
            {/*)  : surveyData.type === 'shortanswer' ? (*/}

            {/*    <IonItem >*/}
            {/*        /!*<IonLabel position="floating">Please type our answer below.</IonLabel>*!/*/}
            {/*        /!*<IonTextarea   onKeyPress={(event:any) => setAnswers([{ 'answer': event.target.value } ])} placeholder="Enter more information here..."></IonTextarea>*!/*/}
            {/*        <IonButton type="submit" >Submit</IonButton>*/}
            {/*    </IonItem>*/}


            {/*) :  surveyData.type === 'preview' ? (*/}

            {/*        <IonItem >*/}
            {/*            /!*{questions.map(val => (*!/*/}
            {/*            /!*    <IonCardTitle> {val['question_name']}</IonCardTitle>*!/*/}
            {/*            /!*))} *!/*/}
            {/*            /!* {questions.questions.filter((val:any) => (*!/*/}
            {/*            /!*     <IonCardTitle> {val['question_name']}</IonCardTitle>*!/*/}
            {/*            /!* ) )}*!/*/}

            {/*        </IonItem>*/}


            {/*    ) :*/}

            {/*    ( <p>This question doesn't have an required options.</p>)}*/}
        </form>
    )


}

const Home: React.FC<any> = (props) => {


    const [list, setSurvey] = React.useState([]);
    const items: any[] = [];


    React.useEffect(() => {

        //getSurveyList().then(data => setSurvey(data));


    }, []);

    const handleNext = (event: any) => {
        // slideNext()
        // @ts-ignore
        let mySwiper = document.querySelector('.swiper-container').swiper

        // Now you can use all slider methods like
        mySwiper.slideNext();
    }

    const [btnName, setbtnName] = useState()

    const [checkboxName, setcheckboxName] = useState(new Set())

    const [textAreaValue, setTextAreaValue] = useState()

    const handle = (event: any) => {
        const {name, value} = event.target;
        setbtnName(event.target.value)
    }
    const handleCheckbox = (event: any) => {

        if (checkboxName.has(event.target.value)) {
            checkboxName.delete(event.target.value)
        } else {
            setcheckboxName(checkboxName.add(event.target.value))
        }

    }

    const userAnswers = [
        {
            'question': 'What year were you born?',
            'answer': btnName
        },
        {
            'question': 'Why are you using Cloud Buster?',
            'answer': textAreaValue
        },
        {
            'question': 'How often do you take cloud buster?',
            'answer': checkboxName
        }
    ]


      async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
              'userid' : 'test13'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }

    const handleSubmit = async () => {


           try {
             const data = await postData('https://surveryapiapp.herokuapp.com/survey', userAnswers);
             console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
           } catch (error) {
             console.error(error);
           }

        props.history.replace("/congrats")
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Welcome, Vijay rocks</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonSlides pager={true} options={slideOpts}>
                    {questions.map(val => (

                        <IonSlide key={val['question_number']}>

                            <IonCard>
                                <IonCardSubtitle>{val['question_number']} {val['question_title']}</IonCardSubtitle>
                                <IonCardTitle> {val['question_name']}</IonCardTitle>
                                <IonCardContent>
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        handleSubmit();
                                    }}>
                                        <IonList>
                                            <IonRadioGroup>

                                                {val.type === 'single' ? <div>
                                                        {val.options.map(value => (
                                                            <IonItem>
                                                                <IonLabel>{value}</IonLabel>
                                                                <IonRadio slot="start" value={value}
                                                                          checked={btnName === value} onIonSelect={handle}/>
                                                            </IonItem>
                                                        ))}
                                                    </div> :
                                                    val.type === 'multiselect' ? <div>
                                                            {val.options.map(value => (
                                                                <IonItem>
                                                                    <IonLabel>{value}</IonLabel>
                                                                    <IonCheckbox slot="start" value={value}
                                                                                 onIonChange={handleCheckbox}/>
                                                                </IonItem>
                                                            ))}
                                                        </div> :
                                                        val.type === 'shortanswer' ? <div>
                                                                <IonItem>
                                                                    <IonTextarea
                                                                        onIonChange={(event: any) => setTextAreaValue(event.target.value)}
                                                                        placeholder="Enter more information here..."></IonTextarea>
                                                                </IonItem>

                                                            </div>
                                                            : ''}
                                            </IonRadioGroup>
                                        </IonList>
                                        <IonButton type="submit">Submit</IonButton>

                                    </form>


                                </IonCardContent>
                            </IonCard>


                        </IonSlide>
                    ))}
                </IonSlides>
            </IonContent>
        </IonPage>
    );
};

export default withRouter(Home);
