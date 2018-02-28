var json = {pages: [
    {questions: [
        { type: "matrix",
            columns: [{ value: 1, text: "Never" },
                { value: 2, text: "Rarely" },
                { value: 3, text: "Sometimes" },
                { value: 4, text: "Often" },
                { value: 5, text: "Always" }],
            rows: [{ value: "affordable", text: "Product is affordable" },
                { value: "does what it claims", text: "Product does what it claims" },
                { value: "better then others", text: "Product is better than other products on the market" },
                { value: "easy to use", text: "Product is easy to use" }]}
        
    ]}
]};

Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
Survey.Survey.cssType = "bootstrap";

var model = new Survey.Model(json);
model.onComplete.add(function(result) {
  console.log(JSON.stringify(result.data));
});

$("#surveyElement").Survey({model:model
                            data: data
                           });
