var json = {
    questions: [
        {
            type: "matrix",
            name: "Quality",
            title: "Please indicate if you agree or disagree with the following statements",
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
                }
            ]
        }
    ]
};

Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
Survey.Survey.cssType = "bootstrap";

var model = new Survey.Model(json);
model
    .onComplete
    .add(function (result) {
        console.log("result: " + JSON.stringify(result.data));
    });

$("#surveyElement").Survey({model:model});
