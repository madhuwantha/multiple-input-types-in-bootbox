              let options = [
                    {value: 0, text: '<br><textarea id="comment" style="width: 100%"></textarea>'},
                    {value: 0, text: '<br><input id="a" type="text">'},
                ];               
               
               
               bootbox.prompt({
                    title: "What's your IDE",
                    inputType: "checkbox",
                    inputOptions: options,
                    callback: function(result) {
                        console.log($("#a").val());
                        console.log($("#comment").val());
                    }
                });
