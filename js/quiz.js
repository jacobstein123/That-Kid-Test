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

var result1;
var result2;

var model = new Survey.Model(json);
model
    .onComplete
    .add(function (result) {
        result1 = result;
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
        result2 = result;
        console.log("result1: " + JSON.stringify(result1.data));
        console.log("result2: " + JSON.stringify(result2.data));

        var tkness = 0.0;
        var tkness_count = 0;

        var hostility = 0.0;
        var hostility_count = 0;

        var faculty = 0.0;
        var faculty_count = 0;

        var peer = 0.0;
        var peer_count = 0;

        result1 = result1.data["Quality"];
        result2 = result2.data["Quality"];
        //result1:
        tkness += parseInt(result1["1"])/5.0;
        tkness_count++;
        hostility += parseInt(result1["1"]) / 5.0;
        hostility_count++;
        faculty += parseInt(result1["1"]) / 5.0;
        faculty_count++;

        tkness += parseInt(result1["2"]) / 5.0;
        tkness_count++;
        peer += parseInt(result1["2"]) / 5.0;
        peer_count++;

        tkness += (5 - parseInt(result1["3"])) / 5.0;
        tkness_count++;
        peer += (5 - parseInt(result1["3"])) / 5.0;
        peer_count++;

        tkness += parseInt(result1["4"]) / 5.0;
        tkness_count++;

        tkness += parseInt(result1["5"]) / 5.0;
        tkness_count++;
        faculty += parseInt(result1["5"]) / 5.0;
        faculty_count++;

        tkness += (5 - parseInt(result1["6"])) / 5.0;
        tkness_count++;
        peer += (5 - parseInt(result1["6"])) / 5.0;
        peer_count++;
        faculty += (5 - parseInt(result1["6"])) / 5.0;
        faculty_count++;

        tkness += parseInt(result1["7"]) / 5.0;
        tkness_count++;
        hostility += parseInt(result1["7"]) / 5.0;
        hostility_count++;
        faculty += parseInt(result1["7"]) / 5.0;
        faculty_count++;

        tkness += parseInt(result1["8"]) / 5.0;
        tkness_count++;
        hostility += parseInt(result1["8"]) / 5.0;
        hostility_count++;
        faculty += parseInt(result1["8"]) / 5.0;
        faculty_count++;
        peer += parseInt(result1["8"]) / 5.0;
        peer_count++;

        tkness += parseInt(result1["9"]) / 5.0;
        tkness_count++;
        hostility += parseInt(result1["9"]) / 5.0;
        hostility_count++
        faculty += parseInt(result1["9"]) / 5.0;
        faculty_count++;

        tkness += parseInt(result1["10"]) / 5.0;
        tkness_count++;
        peer += parseInt(result1["10"]) / 5.0;
        peer_count++;

        tkness += parseInt(result1["11"]) / 5.0;
        tkness_count++;

        tkness += parseInt(result1["12"]) / 5.0;
        tkness_count++;

        //result2:
        tkness += (7 - parseInt(result2["1"])) / 7.0;
        tkness_count++;
        peer += (7 - parseInt(result2["1"])) / 7.0;
        peer_count++;

        tkness += parseInt(result2["2"]) / 7.0;
        tkness_count++;

        tkness += parseInt(result2["3"]) / 7.0;
        tkness_count++;
        peer += parseInt(result2["3"]) / 7.0;
        peer_count++;

        tkness += parseInt(result2["4"]) / 7.0;
        tkness_count++;
        faculty += parseInt(result2["4"]) / 7.0;
        faculty_count++;

        tkness += parseInt(result2["5"]) / 7.0;
        tkness_count++;
        faculty += parseInt(result2["5"]) / 7.0;
        faculty_count++;

        tkness += parseInt(result2["6"]) / 7.0;
        tkness_count++;
        peer += parseInt(result2["6"]) / 7.0;
        peer_count++;

        tkness += parseInt(result2["7"]) / 7.0;
        tkness_count++;
        peer += parseInt(result2["7"]) / 7.0;
        peer_count++;

        tkness += parseInt(result2["8"]) / 7.0;
        tkness_count++;
        faculty += parseInt(result2["8"]) / 7.0;
        faculty_count++;

        tkness += parseInt(result2["9"]) / 7.0;
        tkness_count++;

        tkness += (7 - parseInt(result2["10"])) / 7.0;
        tkness_count++;
        faculty += (7 - parseInt(result2["10"])) / 7.0;
        faculty_count++;

        tkness += parseInt(result2["11"]) / 7.0;
        tkness_count++;
        peer += parseInt(result2["11"]) / 7.0;
        peer_count++;
        faculty += parseInt(result2["11"]) / 7.0;
        faculty_count++;

        tkness += parseInt(result2["12"]) / 7.0;
        tkness_count++;

        console.log("TKNESS: " + tkness/tkness_count 
            + "\nHOSTILITY: " + hostility/hostility_count 
            + "\nPEER: " + peer/peer_count
            + "\nFACULTY: " + faculty/faculty_count);

        //document.getElementById("intro2_div").style.display = "block";
        document.getElementById('portfolio').scrollIntoView(true);
    });

$("#surveyElement2").Survey({model:model2});

function continueFunc2() {
    document.getElementById("surveyElement2").style.display = "inline-block";
    document.getElementById("intro2_div").style.display = "none";
}