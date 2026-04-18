require.config({ paths: { vs: "https://unpkg.com/monaco-editor@0.45.0/min/vs" } });

require(["vs/editor/editor.main"], function () {
    window.editor = monaco.editor.create(document.getElementById("editor"), {
        value: `
when_flag_clicked:Connect(function()
    while true do
        pointtowards("_mouse_")
        movesteps(1)
        if touching_obj("_mouse_") then
            say("Touching Mouse")
        else
            say("Not Touching")
        end
    end
end)


`,
        language: "lua",
        theme: "vs-dark",
        automaticLayout: true
    });



window.editor.onDidChangeModelContent(() => {
    console.log("Text changed!");

    const value = window.editor.getValue();
    console.log(value);
});


    monaco.languages.registerCompletionItemProvider("lua", {





        provideCompletionItems: () => {

            let normalwords = [
                "while", "true", "false", "for", "function", "end", "if", "function",
            ]

            let normalwordsFIXED = []
            for (const i of normalwords) {
                normalwordsFIXED.push({
                    label: i,
                    kind: monaco.languages.CompletionItemKind.Event,
                    insertText: i,
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },)
            }

            let ALLSUG = [

                {
                    label: "do",
                    kind: monaco.languages.CompletionItemKind.Event,
                    insertText: [
                        "do",
                        "\t${4}",
                        "end"
                    ].join("\n"),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "then",
                    kind: monaco.languages.CompletionItemKind.Event,
                    insertText: [
                        "then",
                        "\t${4}",
                        "end"
                    ].join("\n"),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                          {
                    label: "else",
                    kind: monaco.languages.CompletionItemKind.Event,
                    insertText: [
                        "else",
                        "\t${4}",
                        "end"
                    ].join("\n"),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },


                {
                    label: "when_flag_clicked",
                    kind: monaco.languages.CompletionItemKind.Event,
                    insertText: "when_flag_clicked:Connect(function()\n\t${1}\nend)",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: "Runs when the green flag is clicked"
                },
             {
                    label: "when_sprite_clicked",
                    kind: monaco.languages.CompletionItemKind.Event,
                    insertText: "when_sprite_clicked:Connect(function()\n\t${1}\nend)",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: "Runs when the sprite is clicked"
                },

                {
                    label: "when_key_pressed",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'when_key_pressed[${1:"space"}]:Connect(function()\n\t\nend)',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },   

                {
                    label: "add_to_list",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'add_to_list(${1:my_list}, ${2:"thing"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  

         {
                    label: "insert_at_list",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'insert_at_list(${1:my_list}, ${2:1}, ${3:"thing"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  

         {
                    label: "replace_of_list",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'replace_of_list(${1:my_list}, ${2:1}, ${3:"thing"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  

                {
                    label: "getItemofList",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getItemofList(${1:1}, ${2:my_list})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 

        {
                    label: "getNumberOfItemInList",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getNumberOfItemInList(${1:"thing"}, ${2:my_list})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 

                        {
                    label: "getLengthOfList",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getLengthOfList(${1:my_list})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 

                 {
                    label: "getListContains",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getListContains(${1:"thing"}, ${2:my_list})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
      {
                    label: "showlist",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'showlist(${1:my_list})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
                      {
                    label: "hidelist",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'hidelist(${1:my_list})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
                          {
                    label: "clear_list",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'clear_list(${1:my_list})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 

                {
                    label: "math.round",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.round(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },    
                {
                    label: "math.abs",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.abs(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
                                {
                    label: "math.floor",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.floor(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                                {
                    label: "math.log",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.log(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                                                {
                    label: "math.ceiling",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.ceiling(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                                                {
                    label: "math.sqrt",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.sqrt(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                                                {
                    label: "math.sin",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.sin(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                                                {
                    label: "math.cos",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.cos(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                                                {
                    label: "math.tan",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.tan(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                                                {
                    label: "math.asin",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.asin(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                                                {
                    label: "math.acos",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.acos(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                                                {
                    label: "math.atan",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.atan(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  

                                                                {
                    label: "math.ln",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.ln(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  

                                                {
                    label: "math.euler",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.euler(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                                                {
                    label: "math.pow10",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'math.pow10(${1:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  



    {
                    label: "isKeyDown",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'isKeyDown(${1:"space"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  

                {
                    label: "GetLetterOf",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'GetLetterOf(${1:1}, ${2:"apple"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  

   {
                    label: "StringContains",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'StringContains(${1:"apple"}, ${2:"a"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  



  {

                    label: "GetLengthOfString",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'GetLengthOfString(${1:"apple"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  

                {
                label: "isMouseDown",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'isMouseDown()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
                {   
                    label: "getMouseX",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getMouseX()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                {
                     label: "getMouseY",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getMouseY()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                 {
                    label: "setdragmode",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'setdragmode(${1:"draggable"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  

                {
                     label: "getTimer",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getTimer()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "property_of_object",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'property_of_object(${1:"backdrop #"}, ${2:"_Stage_"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },

    {
                    label: "current",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'current(${1:"YEAR"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },

    {
                    label: "getDaysSince2000",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getDaysSince2000()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },

                    {
                    label: "isOnline",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'isOnline()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                          {
                    label: "getUsername",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getUsername()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },

  {
                    label: "resettimer",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'resettimer()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "when_broadcast_received",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'when_broadcast_received[${1:"message1"}]:Connect(function()\n\t\nend)',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },   

                {
                    label: "when_start_as_clone",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'when_start_as_clone:Connect(function()\n\t\nend)',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                {
                    label: "create_clone_of",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'create_clone_of(${1:"_myself_"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  

            {
                    label: "broadcast_msg",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'broadcast_msg(${1:"message1"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                {
                    label: "broadcast_and_wait_msg",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'broadcast_and_wait_msg(${1:"message1"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 



           {
                    label: "when_backdrop_switches_to",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'when_backdrop_switches_to[${1:"backdrop1"}]:Connect(function()\n\t\nend)',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  


                {
                    label: "repeat",
                    kind: monaco.languages.CompletionItemKind.Event,
                    insertText: [
                        "for ${1:i} = ${2:1}, ${3:10} do",
                        "\t${4}",
                        "end"
                    ].join("\n"),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "forever",
                    kind: monaco.languages.CompletionItemKind.Event,
                    insertText: [
                        "while true do",
                        "\t${4}",
                        "end"
                    ].join("\n"),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "waituntill",
                    kind: monaco.languages.CompletionItemKind.Event,
                    insertText: "waituntill(${1})",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },


                {
                    label: "movesteps",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: "movesteps(${1})",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "turnright",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: "turnright(${1:degrees})",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "turnleft",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: "turnleft(${1:degrees})",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "goto_xy",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: "goto_xy(${1:x}, ${2:y})",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "goto",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'goto(${1:"_mouse_"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "glide",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'glide(${1:seconds}, ${2:"_mouse_"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "glide_xy",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: "glide_xy(${1:seconds}, ${2:X}, ${2:Y})",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "pointindirection",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: "pointindirection(${1:Direction})",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "changexby",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: "changexby(${1:X})",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "changeyby",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: "changeyby(${1:Y})",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "setxto",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: "setxto(${1:X})",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "setyto",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: "setyto(${1:Y})",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "ifonedgebounce",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: "ifonedgebounce()",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },

                {
                    label: "pointtowards",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'pointtowards(${1:"_mouse_"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
                {
                    label: "setrotationstyle",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'setrotationstyle(${1:"left-right"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
                {
                    label: "getX",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getX()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },     
                {
                    label: "getY",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getY()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "getDirection",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getDirection()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
                {
                    label: "say",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'say(${1:"Hello!"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
                {
                    label: "sayforsecs",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'sayforsecs(${1:"Hello!"}, ${2:2})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 

                {
                    label: "think",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'think(${1:"Hello!"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
                {
                    label: "thinkforsecs",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'thinkforsecs(${1:"Hello!"}, ${2:2})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
                {
                    label: "switchcostumeto",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'switchcostumeto(${1:"costume2"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "switchbackdropto",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'switchbackdropto(${1:"backdrop1"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "nextcostume",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'nextcostume()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "nextbackdrop",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'nextbackdrop()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },

                {
                    label: "changesizeby",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'changesizeby(${1:10})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "setsizeto",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'setsizeto(${1:100})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },

                {
                    label: "changegraphiceffectby",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'changegraphiceffectby(${1:"color"}, ${2:25})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },

                {
                    label: "setgraphiceffectto",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'setgraphiceffectto(${1:"color"}, ${2:0})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },

                {
                    label: "cleargraphiceffects",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'cleargraphiceffects()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "show",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'show()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "hide",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'hide()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },

                {
                    label: "gotofront_OR_back",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'gotofront_OR_back(${1:"front"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "goforward_OR_backwards_layers",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'goforward_OR_backwards_layers(${1:"forward"}, ${2:1})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "getCostume",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getCostume(${1:"number"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "getBackdrop",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getBackdrop(${1:"number"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "getSize",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getSize()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "playsounduntildone",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'playsounduntildone(${1:"Meow"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: "startsound",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'startsound(${1:"Meow"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },                
                 {
                    label: "stopallsounds",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'stopallsounds()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
                                 {
                    label: "changesoundeffectby",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'changesoundeffectby(${1:"pitch"}, ${2:10})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },  
                                 {
                    label: "setsoundeffectto",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'setsoundeffectto(${1:"pitch"}, ${2:100})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },     
                                                 {
                    label: "clearsoundeffects",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'clearsoundeffects()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },    
                
                                                                 {
                    label: "changevolumeby",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'changevolumeby(${1:-10})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },                                         {
                    label: "setvolumeto",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'setvolumeto(${1:100})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },    
                                                                 {
                    label: "getVolume",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getVolume()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },    


                {
                    label: "wait",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'wait(${1:1})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 

                {
                    label: "stop",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'stop(${1:"this script"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 

                     {
                    label: "touching_obj",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'touching_obj(${1:"_mouse_"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 

                {
                    label: "touching_color",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'touching_color(${1:"0xFFFFFF"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 

                     {
                    label: "color_touching_color",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'color_touching_color(${1:"0xFFFFFF"}, ${2:"0xFFFFFF"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 

       {
                    label: "distanceto",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'distanceto(${1:"_mouse_"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
                                {
                    label: "delete_this_clone",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'delete_this_clone()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 

                                   {
                    label: "askandwait",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'askandwait(${1:"What\'s your name?"})',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 
                {
                    label: "getAnswer",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: 'getAnswer()',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                }, 

                {
                    label: "random",
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: "random(${1:1}, ${2:10})",
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
            ]


            for (const i of ALLSUG) {
                normalwordsFIXED.push(i)
            }



            return {
                suggestions: normalwordsFIXED
            };
        }
    });
});

