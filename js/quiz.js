var json = {
    questions: [
        {
            type: "matrix",
            name: "Quality",
            title: "Please rate the following statements to the best of your ability",
            columns: [
                {
                    value: 1,
                    text: "Never"
                }, {
                    value: 2,
                    text: "Rarely"
                }, {
                    value: 3,
                    text: "Sometimes"
                }, {
                    value: 4,
                    text: "Often"
                }, {
                    value: 5,
                    text: "Always"
                }
            ],
            rows: [
                {
                    value: "1",
                    text: "I correct my professor."
                }, {
                    value: "2",
                    text: "I speak more frequently than my peers."
                }, {
                    value: "3",
                    text: "My peers make meaningful contributions to discussions."
                }, {
                    value: "4",
                    text: "I make meaningful contributions to discussions."
                }, {
                    value: "5",
                    text: "Professors stop me while I am speaking in class."
                }, {
                    value: "6",
                    text: "Professors ask me to speak and participate in discussions because I am too quiet."
                }, {
                    value: "7",
                    text: "I interrupt my professor."
                }, {
                    value: "8",
                    text: "I speak without raising my hand, even when others do not."
                }, {
                    value: "9",
                    text: "I have underqualified professors."
                }, {
                    value: "10",
                    text: "I answer my peer's questions before my professor does."
                }, {
                    value: "11",
                    text: "I refer to texts that were not assigned for class."
                }, {
                    value: "12",
                    text: "I discuss assigned readings even when I did not do the readings because I can make\
                            a meaningful contribution without having read it."
                }
            ],
        }
    ],
    completedHtml:" "
};

Survey.defaultBootstrapCss.navigationButton = "btn btn-primary btn-xl";
Survey.Survey.cssType = "bootstrap";

var model = new Survey.Model(json);
model
    .onComplete
    .add(function (result) {
        console.log("result: " + JSON.stringify(result.data));
        document.getElementById("intro2_div").style.display = "block";
        document.getElementById('portfolio').scrollIntoView(true);
    });

$("#surveyElement").Survey({model:model});

function continueFunc() {
    document.getElementById("intro1").innerHTML = "";
    document.getElementById("surveyElement").style.display = "inline-block";
    document.getElementById("continueButton").style.display = "none";
}

var json2 = {
    questions: [
        {
            type: "matrix",
            name: "Quality",
            title: "Please answer as accurately as possible. (1: completetely disagree, 7: completely agree)",
            columns: [
                {
                    value: 1,
                    text: "1"
                }, {
                    value: 2,
                    text: "2"
                }, {
                    value: 3,
                    text: "3"
                }, {
                    value: 4,
                    text: "4"
                }, {
                    value: 5,
                    text: "5"
                }, {
                    value: 6,
                    text: "6"
                }, {
                    value: 7,
                    text: "7"
                }
            ],
            rows: [
                {
                    value: "1",
                    text: "My peers overestimate my intelligence."
                }, {
                    value: "2",
                    text: "I am comfortable speaking in class."
                }, {
                    value: "3",
                    text: "You do not have to raise your hand in class to speak."
                }, {
                    value: "4",
                    text: "My professors underestimate my intelligence."
                }, {
                    value: "5",
                    text: "My essays deserve better grades."
                }, {
                    value: "6",
                    text: "It is okay to interrupt my peers when they are speaking if I have a very good point."
                }, {
                    value: "7",
                    text: "My peers underestimate my intelligence."
                }, {
                    value: "8",
                    text: "It is okay to interrupt the professor when they are speaking if I have a very good point."
                }, {
                    value: "9",
                    text: "I have great ideas in class."
                }, {
                    value: "10",
                    text: "My professors overestimate my intelligence."
                }, {
                    value: "11",
                    text: "Peers and professors do not seem to understand my point right away, so I have to elaborate for a long time."
                }, {
                    value: "12",
                    text: "I am a that kid."
                }
            ],
        }
    ],
    completedHtml:"thanks"
};

var model2 = new Survey.Model(json2);
model2
    .onComplete
    .add(function (result) {
        console.log("result: " + JSON.stringify(result.data));
        //document.getElementById("intro2_div").style.display = "block";
        document.getElementById('portfolio').scrollIntoView(true);
    });

$("#surveyElement2").Survey({model:model2});

function continueFunc2() {
    document.getElementById("surveyElement2").style.display = "inline-block";
    document.getElementById("intro2_div").style.display = "none";
}