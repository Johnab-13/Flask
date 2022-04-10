window.onload=function(){
let mic=document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let chatareaouter1 = document.querySelector('.chatareaouter1');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition= new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output +=`<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output +=`<div class="chatarea-inner chatbot">${chatbotmsg}</div> `;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    var str='';
    var str2='';

};

var transcript='';
recognition.onresult=function(e){
    document.getElementById("cont").value="";
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    document.getElementById("question").value=transcript;

    if(document.getElementById("company").value =="")
    {
        if(transcript.includes('BPCL') || transcript.includes('bpcl') || transcript.includes('mrpl') || transcript.includes('MRPL') || transcript.includes('IOCL') || transcript.includes('Reliance') || transcript.includes('Nayara'))
        {
           document.getElementById("company").value=transcript;
           var y=$.ajax({
           data:{
           question: $("#question").val(),
           invalid: $("#invalid").val(),
           port: $("#port").val(),
           company:$("#company").val(),
           month: $("#month").val(),
           year: $("#year").val(),
           },
           type : 'POST',
           url : '/chatbot3',
           global:false,
           async:false,
           })
           .done(function(data)
           {
            return data;
           }).responseText;
           event.preventDefault();
           chatareamain.appendChild(showusermsg(transcript));
           chatbotvoice(transcript);
           event.preventDefault();
           const speech = new SpeechSynthesisUtterance();
           speech.text=y
           window.speechSynthesis.speak(speech);
           chatareamain.appendChild(showchatbotmsg(speech.text));
        }
        else
        {
            document.getElementById("invalid").value='Please select company';
            var y=$.ajax({
            data:{
            question: $("#question").val(),
            invalid: $("#invalid").val(),
            company: $("#company").val(),
            },
            type : 'POST',
            url : '/chatbot2',
            global:false,
            async:false,
            })
            .done(function(data)
            {
             return data;
            }).responseText;
            event.preventDefault();
            chatareamain.appendChild(showusermsg(transcript));
            chatbotvoice(transcript);
            event.preventDefault();
            const speech = new SpeechSynthesisUtterance();
            speech.text=y
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));
        }
    }
    else if(document.getElementById("port").value =="")
    {
        var comp=document.getElementById("company").value;
        if(document.getElementById("company").value!=transcript)
        {
            if(transcript.includes('BPCL') ||  transcript.includes('IOCL') || transcript.includes('mrpl') || transcript.includes('MRPL') || transcript.includes('Nayara') || transcript.includes('Reliance'))
            {
               document.getElementById("company").value=transcript;
               var y=$.ajax({
               data:{
               question: $("#question").val(),
               invalid: $("#invalid").val(),
               port: $("#port").val(),
               company:$("#company").val(),
               month: $("#month").val(),
               year: $("#year").val(),
               },
               type : 'POST',
               url : '/chatbot3',
               global:false,
               async:false,
               })
               .done(function(data)
               {
                return data;
               }).responseText;
               event.preventDefault();
               chatareamain.appendChild(showusermsg(transcript));
               chatbotvoice(transcript);
               event.preventDefault();
               const speech = new SpeechSynthesisUtterance();
               speech.text=y
               window.speechSynthesis.speak(speech);
               chatareamain.appendChild(showchatbotmsg(speech.text));
            }
            else if(transcript.includes('January') || transcript.includes('February') || transcript.includes('March') || transcript.includes('April') || transcript.includes('May') || transcript.includes('June') || transcript.includes('July') || transcript.includes('August') || transcript.includes('September') || transcript.includes('October') || transcript.includes('November') || transcript.includes('December'))
            {
                //give port according to company
                document.getElementById("month").value=transcript;
                var comp=document.getElementById("company").value;
                if(comp.includes("BPCL"))
                {
                     chatareamain.appendChild(showusermsg(transcript));
                     chatbotvoice(transcript);
                     event.preventDefault();
                     const speech = new SpeechSynthesisUtterance();
                     speech.text="Which port for BPCL do u want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='port' id='Mundra' value='Mundra'/><label class='radio__label' for='Mundra'>Mundra</label><input class='radio__input' type='radio' name='port' id='Vizag' value='Vizag'/><label class='radio__label' for='Vizag'>Vizag</label><input class='radio__input' type='radio' name='port' id='Paradeep' value='Paradeep'/><label class='radio__label' for='Paradeep'>Paradeep</label><input class='radio__input' type='radio' name='port' id='Ennore' value='Ennore'/><label class='radio__label' for='Ennore'>Ennore</label></div>"
                     window.speechSynthesis.speak(speech);
                     chatareamain.appendChild(showchatbotmsg(speech.text));
                }
                else if(comp.includes("IOCL") || comp.includes("iocl"))
                {
                    chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text="Which port for IOCL do u want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='port' id='Vizag' value='Vizag'/><label class='radio__label' for='Vizag'>Vizag</label><input class='radio__input' type='radio' name='port' id='Ennore' value='Ennore'/><label class='radio__label' for='Ennore'>Ennore</label></div>"
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                }
                else if(comp.includes("Reliance"))
                {
                    chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text="Which port for Reliance do u want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='port' id='Mundra' value='Mundra'/><label class='radio__label' for='Mundra'>Mundra</label><input class='radio__input' type='radio' name='port' id='Kandla' value='Kandla'/><label class='radio__label' for='Kandla'>Kandla</label><input class='radio__input' type='radio' name='port' id='Mumbai' value='Mumbai'/><label class='radio__label' for='Mumbai'>Mumbai</label><input class='radio__input' type='radio' name='port' id='JNPT' value='JNPT'/><label class='radio__label' for='JNPT'>JNPT</label><input class='radio__input' type='radio' name='port' id='Goa' value='Goa'/><label class='radio__label' for='Goa'>Goa</label></div> <br><br> <div class='radio' id='divResult2'><input class='radio__input' type='radio' name='port' id='Mangalore' value='Mangalore'/><label class='radio__label' for='Mangalore'>Mangalore</label><input class='radio__input' type='radio' name='port' id='Kochi' value='Kochi'/><label class='radio__label' for='Kochi'>Kochi</label><input class='radio__input' type='radio' name='port' id='Chennai' value='Chennai'/><label class='radio__label' for='Chennai'>Chennai</label><input class='radio__input' type='radio' name='port' id='Vizag' value='Vizag'/><label class='radio__label' for='Vizag'>Vizag</label><input class='radio__input' type='radio' name='port' id='Paradeep' value='Paradeep'/><label class='radio__label' for='Paradeep'>Paradeep</label><input class='radio__input' type='radio' name='port' id='Haldia' value='Haldia'/><label class='radio__label' for='Haldia'>Haldia</label><input class='radio__input' type='radio' name='port' id='Budge_Budge' value='Budge_Budge'/><label class='radio__label' for='Budge_Budge'>Budge_Budge</label></div> <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='port' id='Ennore' value='Ennore'/><label class='radio__label' for='Ennore'>Ennore</label></div>"
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                }
                else if(comp.includes("Nayara"))
                {
                    chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text="Which port for Nayara do u want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='port' id='Mundra' value='Mundra'/><label class='radio__label' for='Mundra'>Mundra</label><input class='radio__input' type='radio' name='port' id='Kandla' value='Kandla'/><label class='radio__label' for='Kandla'>Kandla</label><input class='radio__input' type='radio' name='port' id='Mumbai' value='Mumbai'/><label class='radio__label' for='Mumbai'>Mumbai</label><input class='radio__input' type='radio' name='port' id='JNPT' value='JNPT'/><label class='radio__label' for='JNPT'>JNPT</label><input class='radio__input' type='radio' name='port' id='Goa' value='Goa'/><label class='radio__label' for='Goa'>Goa</label></div> <br><br> <div class='radio' id='divResult2'><input class='radio__input' type='radio' name='port' id='Kochi' value='Kochi'/><label class='radio__label' for='Kochi'>Kochi</label><input class='radio__input' type='radio' name='port' id='Chennai' value='Chennai'/><label class='radio__label' for='Chennai'>Chennai</label><input class='radio__input' type='radio' name='port' id='Vizag' value='Vizag'/><label class='radio__label' for='Vizag'>Vizag</label><input class='radio__input' type='radio' name='port' id='Paradeep' value='Paradeep'/><label class='radio__label' for='Paradeep'>Paradeep</label><input class='radio__input' type='radio' name='port' id='Haldia' value='Haldia'/><label class='radio__label' for='Haldia'>Haldia</label><input class='radio__input' type='radio' name='port' id='Ennore' value='Ennore'/><label class='radio__label' for='Ennore'>Ennore</label></div>"
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                }
                else if(comp.includes("MRPL") || comp.includes("mrpl"))
                {
                    chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text="Which port for MRPL do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='port' id='Mundra' value='Mundra'/><label class='radio__label' for='Mundra'>Mundra</label><input class='radio__input' type='radio' name='port' id='Kandla' value='Kandla'/><label class='radio__label' for='Kandla'>Kandla</label><input class='radio__input' type='radio' name='port' id='Mumbai' value='Mumbai'/><label class='radio__label' for='Mumbai'>Mumbai</label><input class='radio__input' type='radio' name='port' id='JNPT' value='JNPT'/><label class='radio__label' for='JNPT'>JNPT</label><input class='radio__input' type='radio' name='port' id='Goa' value='Goa'/><label class='radio__label' for='Goa'>Goa</label></div> <br><br> <div class='radio' id='divResult2'><input class='radio__input' type='radio' name='port' id='Kochi' value='Kochi'/><label class='radio__label' for='Kochi'>Kochi</label><input class='radio__input' type='radio' name='port' id='Chennai' value='Chennai'/><label class='radio__label' for='Chennai'>Chennai</label><input class='radio__input' type='radio' name='port' id='Vizag' value='Vizag'/><label class='radio__label' for='Vizag'>Vizag</label><input class='radio__input' type='radio' name='port' id='Paradeep' value='Paradeep'/><label class='radio__label' for='Paradeep'>Paradeep</label><input class='radio__input' type='radio' name='port' id='Haldia' value='Haldia'/><label class='radio__label' for='Haldia'>Haldia</label><input class='radio__input' type='radio' name='port' id='Budge_Budge' value='Budge_Budge'/><label class='radio__label' for='Budge_Budge'>Budge_Budge</label></div> <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='port' id='Ennore' value='Ennore'/><label class='radio__label' for='Ennore'>Ennore</label></div>"
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                }
            }
            else if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Mangalore') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
            {
                //check month 2 cases
                var comp=document.getElementById("company").value;
                if(comp.includes("BPCL"))
                {
                    if(transcript.includes('Mundra') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Ennore'))
                    {
                        document.getElementById("port").value=transcript;
                        if(document.getElementById("month").value=="")
                        {
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                        else if(document.getElementById("year").value=="")
                        {
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                        else
                        {
                            var y=$.ajax({
                            data:{
                            question: $("#question").val(),
                            company:$("#company").val(),
                            invalid: $("#invalid").val(),
                            port: $("#port").val(),
                            month: $("#month").val(),
                            year: $("#year").val(),
                            },
                            type : 'POST',
                            url : '/chatbot',
                            global:false,
                            async:false,
                            })
                            .done(function(data)
                            {
                             return data;
                            }).responseText;
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text=y
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                            speech.text="Do you want to continue? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='continue' id='continue' value='yes'/><label class='radio__label' for='yes'>yes</label><input class='radio__input' type='radio' name='continue' id='continue' value='no'/><label class='radio__label' for='no'>no</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }

                    }
                    else
                    {
                        document.getElementById("invalid").value='Invalid selected port for bpcl';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(comp.includes("IOCL"))
                {
                    if(transcript.includes('Vizag') || transcript.includes('Ennore'))
                    {
                        document.getElementById("port").value=transcript;
                        if(document.getElementById("month").value=="")
                        {
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                        else if(document.getElementById("year").value=="")
                        {
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                        else
                        {
                            var y=$.ajax({
                            data:{
                            question: $("#question").val(),
                            company:$("#company").val(),
                            invalid: $("#invalid").val(),
                            port: $("#port").val(),
                            month: $("#month").val(),
                            year: $("#year").val(),
                            },
                            type : 'POST',
                            url : '/chatbot',
                            global:false,
                            async:false,
                            })
                            .done(function(data)
                            {
                             return data;
                            }).responseText;
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text=y
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                            speech.text="Do you want to continue? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='continue' id='continue' value='yes'/><label class='radio__label' for='yes'>yes</label><input class='radio__input' type='radio' name='continue' id='continue' value='no'/><label class='radio__label' for='no'>no</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                    }
                    else
                    {
                        document.getElementById("invalid").value='Invalid selected port for iocl';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(comp.includes("Nayara"))
                {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Ennore'))
                    {
                        document.getElementById("port").value=transcript;
                        if(document.getElementById("month").value=="")
                        {
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                        else if(document.getElementById("year").value=="")
                        {
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                        else
                        {
                            var y=$.ajax({
                            data:{
                            question: $("#question").val(),
                            company:$("#company").val(),
                            invalid: $("#invalid").val(),
                            port: $("#port").val(),
                            month: $("#month").val(),
                            year: $("#year").val(),
                            },
                            type : 'POST',
                            url : '/chatbot',
                            global:false,
                            async:false,
                            })
                            .done(function(data)
                            {
                             return data;
                            }).responseText;
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text=y
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));

                            speech.text="Do you want to continue? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='continue' id='continue' value='yes'/><label class='radio__label' for='yes'>yes</label><input class='radio__input' type='radio' name='continue' id='continue' value='no'/><label class='radio__label' for='no'>no</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                    }
                    else
                    {
                        document.getElementById("invalid").value='Invalid selected port for Nayara';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }

                }
                else if(comp.includes("Reliance"))
                {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Mangalore') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
                    {
                        document.getElementById("port").value=transcript;
                        if(document.getElementById("month").value=="")
                        {
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                        else if(document.getElementById("year").value=="")
                        {
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                        else
                        {
                            var y=$.ajax({
                            data:{
                            question: $("#question").val(),
                            company:$("#company").val(),
                            invalid: $("#invalid").val(),
                            port: $("#port").val(),
                            month: $("#month").val(),
                            year: $("#year").val(),
                            },
                            type : 'POST',
                            url : '/chatbot',
                            global:false,
                            async:false,
                            })
                            .done(function(data)
                            {
                             return data;
                            }).responseText;
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text=y
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                            speech.text="Do you want to continue? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='continue' id='continue' value='yes'/><label class='radio__label' for='yes'>yes</label><input class='radio__input' type='radio' name='continue' id='continue' value='no'/><label class='radio__label' for='no'>no</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                    }
                    else
                    {
                        document.getElementById("invalid").value='Invalid selected port for Reliance';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(comp.includes("MRPL") || comp.includes("mrpl"))
                {
                    if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
                    {
                        document.getElementById("port").value=transcript;
                        if(document.getElementById("month").value=="")
                        {
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                        else if(document.getElementById("year").value=="")
                        {
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                        else
                        {
                            var y=$.ajax({
                            data:{
                            question: $("#question").val(),
                            company:$("#company").val(),
                            invalid: $("#invalid").val(),
                            port: $("#port").val(),
                            month: $("#month").val(),
                            year: $("#year").val(),
                            },
                            type : 'POST',
                            url : '/chatbot',
                            global:false,
                            async:false,
                            })
                            .done(function(data)
                            {
                             return data;
                            }).responseText;
                            chatareamain.appendChild(showusermsg(transcript));
                            chatbotvoice(transcript);
                            event.preventDefault();
                            const speech = new SpeechSynthesisUtterance();
                            speech.text=y
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                            speech.text="Do you want to continue? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='continue' id='continue' value='yes'/><label class='radio__label' for='yes'>yes</label><input class='radio__input' type='radio' name='continue' id='continue' value='no'/><label class='radio__label' for='no'>no</label></div>"
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                        }
                    }
                    else
                    {
                        document.getElementById("invalid").value='Invalid selected port for MRPL';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
            }
            else if(transcript.includes('2020') || transcript.includes('2021') || transcript.includes('2022') || transcript.includes('2023'))
            {
                document.getElementById("year").value=transcript;
                var y=$.ajax({
                data:{
                company:$("#company").val(),
                },
                type : 'POST',
                url : '/chatbot5',
                global:false,
                async:false,
                })
                .done(function(data)
                {
                 return data;
                }).responseText;
                event.preventDefault();
                chatareamain.appendChild(showusermsg(transcript));
                chatbotvoice(transcript);
                event.preventDefault();
                const speech = new SpeechSynthesisUtterance();
                speech.text=y
                window.speechSynthesis.speak(speech);
                chatareamain.appendChild(showchatbotmsg(speech.text));
            }
            else
            {
                document.getElementById("invalid").value='Invalid input';
                var y=$.ajax({
                data:{
                invalid: $("#invalid").val(),
                },
                type : 'POST',
                url : '/chatbot4',
                global:false,
                async:false,
                })
                .done(function(data)
                {
                 return data;
                }).responseText;
                event.preventDefault();
                chatareamain.appendChild(showusermsg(transcript));
                chatbotvoice(transcript);
                event.preventDefault();
                const speech = new SpeechSynthesisUtterance();
                speech.text=y
                window.speechSynthesis.speak(speech);
                chatareamain.appendChild(showchatbotmsg(speech.text));
            }

        }
        else
        {
        chatareamain.appendChild(showusermsg(transcript));
        chatbotvoice(transcript);
        event.preventDefault();
        const speech = new SpeechSynthesisUtterance();
        speech.text="Company is already noted.Please continue and select port"
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        }
    }

    else if(document.getElementById("month").value =="")
    {
        var comp=document.getElementById("company").value;
        var port=document.getElementById("port").value;
        var month=document.getElementById("month").value;
        if(document.getElementById("company").value!=transcript)
        {
            if(transcript.includes('BPCL') ||  transcript.includes('IOCL') || transcript.includes('mrpl') || transcript.includes('MRPL') || transcript.includes('Nayara') || transcript.includes('Reliance'))
            {
               if(transcript.includes('BPCL'))
               {
                    if(port.includes('Mundra') || port.includes('Vizag') || port.includes('Paradeep') || port.includes('Paradip') || port.includes('Ennore'))
                    {
                        document.getElementById("company").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Company selected which is BPCL is not correct for port selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(transcript.includes('IOCL'))
               {
                    if(port.includes('Vizag') || port.includes('Ennore'))
                    {
                        document.getElementById("company").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Company selected which is IOCL is not correct for port selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(transcript.includes('Reliance'))
               {
                    if(port.includes('Mundra') || port.includes('Kandla') || port.includes('Mumbai') || port.includes('JNPT') || port.includes('Goa') || port.includes('Mangalore') || port.includes('Kochi') || port.includes('Chennai') || port.includes('Vizag') || port.includes('Paradeep') || port.includes('Paradip') || port.includes('Haldia') || port.includes('Budge Budge') || port.includes('Ennore'))
                    {
                        document.getElementById("company").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Company selected which is Reliance is not correct for port selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(transcript.includes('Nayara'))
               {
                    if(port.includes('Mundra') || port.includes('Kandla') || port.includes('Mumbai') || port.includes('JNPT') || port.includes('Goa') || port.includes('Kochi') || port.includes('Chennai') || port.includes('Vizag') || port.includes('Paradeep') || port.includes('Paradip')|| port.includes('Haldia') || port.includes('Ennore'))
                    {
                        document.getElementById("company").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Company selected which is Nayara is not correct for port selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(transcript.includes('mrpl') || transcript.includes('MRPL'))
               {
//                  var port=document.getElementById("port").value;
//                  var comp=document.getElementById("company").value;
                    if(port.includes('Mundra') || port.includes('Kandla') || port.includes('Mumbai') || port.includes('JNPT') || port.includes('Goa') || port.includes('Kochi') || port.includes('Chennai')|| port.includes('Paradip') || port.includes('Vizag') || port.includes('Paradeep') || port.includes('Haldia') || port.includes('Budge Budge') || port.includes('Ennore'))
                    {
                        document.getElementById("company").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Company selected which is mrpl is not correct for port selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
            }
            else if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Mangalore') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
            {
                if(transcript.includes('Mundra'))
                {
                    if(comp.includes('BPCL') || comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Mundra is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Kandla'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Kandla is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Mumbai'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Mumbai is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('JNPT'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is JNPT is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Goa'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Goa is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Mangalore'))
                {
                    if(comp.includes('Reliance'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Mangalore is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Kochi'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Kochi is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Chennai'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Chennai is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Vizag'))
                {
                    if(comp.includes('BPCL') || comp.includes('IOCL') || comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Vizag is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Paradeep') || transcript.includes('Paradip'))
                {
                    if(comp.includes('BPCL') || comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Paradeep is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Haldia'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Haldia is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Budge Budge'))
                {
                    if(comp.includes('Reliance') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Budge Budge is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Ennore'))
                {
                    if(comp.includes('BPCL') || comp.includes('IOCL') || comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Ennore is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
            }
            else if(transcript.includes('January') || transcript.includes('February') || transcript.includes('March') || transcript.includes('April') || transcript.includes('May') || transcript.includes('June') || transcript.includes('July') || transcript.includes('August') || transcript.includes('September') || transcript.includes('October') || transcript.includes('November') || transcript.includes('December'))
            {
                if(document.getElementById("year").value=="")
                {
                document.getElementById("month").value=transcript;
                chatareamain.appendChild(showusermsg(transcript));
                chatbotvoice(transcript);
                event.preventDefault();
                const speech = new SpeechSynthesisUtterance();
                speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                window.speechSynthesis.speak(speech);
                chatareamain.appendChild(showchatbotmsg(speech.text));
                }
                else
                {
                    document.getElementById("month").value=transcript;
                    document.getElementById("invalid").value='';
                    var y=$.ajax({
                    data:{
                    question: $("#question").val(),
                    company:$("#company").val(),
                    invalid: $("#invalid").val(),
                    port: $("#port").val(),
                    month: $("#month").val(),
                    year: $("#year").val(),
                    },
                    type : 'POST',
                    url : '/chatbot',
                    global:false,
                    async:false,
                    })
                    .done(function(data)
                    {
                     return data;
                    }).responseText;
                    chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    speech.text="Do you want to continue? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='continue' id='continue' value='yes'/><label class='radio__label' for='yes'>yes</label><input class='radio__input' type='radio' name='continue' id='continue' value='no'/><label class='radio__label' for='no'>no</label></div>"
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));

                }
            }
           else if(transcript.includes('2020') || transcript.includes('2021') || transcript.includes('2022') || transcript.includes('2023'))
           {
                if(document.getElementById("month").value=="")
                {
                document.getElementById("year").value=transcript;
                chatareamain.appendChild(showusermsg(transcript));
                chatbotvoice(transcript);
                event.preventDefault();
                const speech = new SpeechSynthesisUtterance();
                speech.text="Which month do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='month' id='January' value='January'/><label class='radio__label' for='January'>January</label><input class='radio__input' type='radio' name='month' id='February' value='February'/><label class='radio__label' for='February'>February</label><input class='radio__input' type='radio' name='month' id='March' value='March'/><label class='radio__label' for='March'>March</label><input class='radio__input' type='radio' name='month' id='April' value='April'/><label class='radio__label' for='April'>April</label><input class='radio__input' type='radio' name='month' id='May' value='May'/><label class='radio__label' for='May'>May</label><input class='radio__input' type='radio' name='month' id='June' value='June'/><label class='radio__label' for='June'>June</label><input class='radio__input' type='radio' name='month' id='July' value='July'/><label class='radio__label' for='July'>July</label></div> <br><br><div class='radio' id='divResult2'><input class='radio__input' type='radio' name='month' id='August' value='August'/><label class='radio__label' for='August'>August</label><input class='radio__input' type='radio' name='month' id='September' value='September'/><label class='radio__label' for='September'>September</label><input class='radio__input' type='radio' name='month' id='October' value='October'/><label class='radio__label' for='October'>October</label><input class='radio__input' type='radio' name='month' id='November' value='November'/><label class='radio__label' for='November'>November</label><input class='radio__input' type='radio' name='month' id='December' value='December'/><label class='radio__label' for='December'>December</label></div>"
                window.speechSynthesis.speak(speech);
                chatareamain.appendChild(showchatbotmsg(speech.text));
                }
                else
                {
                    document.getElementById("invalid").value='';
                    var y=$.ajax({
                    data:{
                    question: $("#question").val(),
                    company:$("#company").val(),
                    invalid: $("#invalid").val(),
                    port: $("#port").val(),
                    month: $("#month").val(),
                    year: $("#year").val(),
                    },
                    type : 'POST',
                    url : '/chatbot',
                    global:false,
                    async:false,
                    })
                    .done(function(data)
                    {
                     return data;
                    }).responseText;
                    chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    speech.text="Do you want to continue? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='continue' id='continue' value='yes'/><label class='radio__label' for='yes'>yes</label><input class='radio__input' type='radio' name='continue' id='continue' value='no'/><label class='radio__label' for='no'>no</label></div>"
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                }
           }
           else
           {
                document.getElementById("invalid").value='Invalid input';
                var y=$.ajax({
                data:{
                question: $("#question").val(),
                invalid: $("#invalid").val(),
                port: $("#port").val(),
                company:$("#company").val(),
                month: $("#month").val(),
                year: $("#year").val(),
                },
                type : 'POST',
                url : '/chatbot3',
                global:false,
                async:false,
                })
                .done(function(data)
                {
                 return data;
                }).responseText;
                event.preventDefault();
                chatareamain.appendChild(showusermsg(transcript));
                chatbotvoice(transcript);
                event.preventDefault();
                const speech = new SpeechSynthesisUtterance();
                speech.text=y
                window.speechSynthesis.speak(speech);
                chatareamain.appendChild(showchatbotmsg(speech.text));
           }
        }
    }
    else if(document.getElementById("year").value =="")
    {
        var comp=document.getElementById("company").value;
        var port=document.getElementById("port").value;
        var month=document.getElementById("month").value;
        if(document.getElementById("company").value!=transcript)
        {
            if(transcript.includes('BPCL') ||  transcript.includes('IOCL') || transcript.includes('mrpl') || transcript.includes('MRPL') || transcript.includes('Nayara') || transcript.includes('Reliance'))
            {
               if(transcript.includes('BPCL'))
               {
                    if(port.includes('Mundra') || port.includes('Vizag') || port.includes('Paradeep') || port.includes('Paradip') || port.includes('Ennore'))
                    {
                        document.getElementById("company").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Company selected which is BPCL is not correct for port selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(transcript.includes('IOCL'))
               {
                    if(port.includes('Vizag') || port.includes('Ennore'))
                    {
                        document.getElementById("company").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Company selected which is IOCL is not correct for port selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(transcript.includes('Reliance'))
               {
                    if(port.includes('Mundra') || port.includes('Kandla') || port.includes('Mumbai') || port.includes('JNPT') || port.includes('Goa') || port.includes('Mangalore') || port.includes('Kochi') || port.includes('Chennai') || port.includes('Vizag') || port.includes('Paradeep') || port.includes('Paradip') || port.includes('Haldia') || port.includes('Budge Budge') || port.includes('Ennore'))
                    {
                        document.getElementById("company").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Company selected which is Reliance is not correct for port selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(transcript.includes('Nayara'))
               {
                    if(port.includes('Mundra') || port.includes('Kandla') || port.includes('Mumbai') || port.includes('JNPT') || port.includes('Goa') || port.includes('Kochi') || port.includes('Chennai') || port.includes('Vizag') || port.includes('Paradeep') || port.includes('Paradip')|| port.includes('Haldia') || port.includes('Ennore'))
                    {
                        document.getElementById("company").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Company selected which is Nayara is not correct for port selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
               else if(transcript.includes('mrpl') || transcript.includes('MRPL'))
               {
//                  var port=document.getElementById("port").value;
//                  var comp=document.getElementById("company").value;
                    if(port.includes('Mundra') || port.includes('Kandla') || port.includes('Mumbai') || port.includes('JNPT') || port.includes('Goa') || port.includes('Kochi') || port.includes('Chennai')|| port.includes('Paradip') || port.includes('Vizag') || port.includes('Paradeep') || port.includes('Haldia') || port.includes('Budge Budge') || port.includes('Ennore'))
                    {
                        document.getElementById("company").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Company selected which is mrpl is not correct for port selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
               }
            }
            else if(transcript.includes('Mundra') || transcript.includes('Kandla') || transcript.includes('Mumbai') || transcript.includes('JNPT') || transcript.includes('Goa') || transcript.includes('Mangalore') || transcript.includes('Kochi') || transcript.includes('Chennai') || transcript.includes('Vizag') || transcript.includes('Paradeep') || transcript.includes('Paradip') || transcript.includes('Haldia') || transcript.includes('Budge Budge') || transcript.includes('Ennore'))
            {
                if(transcript.includes('Mundra'))
                {
                    if(comp.includes('BPCL') || comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Mundra is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Kandla'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Kandla is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Mumbai'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Mumbai is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }



                else if(transcript.includes('JNPT'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is JNPT is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Goa'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Goa is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Mangalore'))
                {
                    if(comp.includes('Reliance'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Mangalore is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Kochi'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Kochi is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Chennai'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Chennai is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Vizag'))
                {
                    if(comp.includes('BPCL') || comp.includes('IOCL') || comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Vizag is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Paradeep') || transcript.includes('Paradip'))
                {
                    if(comp.includes('BPCL') || comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Paradeep is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Haldia'))
                {
                    if(comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Haldia is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Budge Budge'))
                {
                    if(comp.includes('Reliance') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Budge Budge is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
                else if(transcript.includes('Ennore'))
                {
                    if(comp.includes('BPCL') || comp.includes('IOCL') || comp.includes('Reliance') || comp.includes('Nayara') || comp.includes('MRPL') || comp.includes('mrpl'))
                    {
                        document.getElementById("port").value=transcript;
                        var port=document.getElementById("port").value;
                        if(port.includes!==transcript && comp!="")
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                    else
                    {
                        document.getElementById("invalid").value='Port selected which is Ennore is not correct for company selected';
                        var y=$.ajax({
                        data:{
                        invalid: $("#invalid").val(),
                        },
                        type : 'POST',
                        url : '/chatbot4',
                        global:false,
                        async:false,
                        })
                        .done(function(data)
                        {
                         return data;
                        }).responseText;
                        event.preventDefault();
                        chatareamain.appendChild(showusermsg(transcript));
                        chatbotvoice(transcript);
                        event.preventDefault();
                        const speech = new SpeechSynthesisUtterance();
                        speech.text=y
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    }
                }
            }
            else if(transcript.includes('January') || transcript.includes('February') || transcript.includes('March') || transcript.includes('April') || transcript.includes('May') || transcript.includes('June') || transcript.includes('July') || transcript.includes('August') || transcript.includes('September') || transcript.includes('October') || transcript.includes('November') || transcript.includes('December'))
            {
                document.getElementById("month").value=transcript;
                chatareamain.appendChild(showusermsg(transcript));
                chatbotvoice(transcript);
                event.preventDefault();
                const speech = new SpeechSynthesisUtterance();
                speech.text="Which year do you want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='year' id='2020' value='2020'/><label class='radio__label' for='2020'>2020</label><input class='radio__input' type='radio' name='year' id='2021' value='2021'/><label class='radio__label' for='2021'>2021</label><input class='radio__input' type='radio' name='year' id='2022' value='2022'/><label class='radio__label' for='2022'>2022</label><input class='radio__input' type='radio' name='year' id='2023' value='2023'/><label class='radio__label' for='2023'>2023</label></div>"
                window.speechSynthesis.speak(speech);
                chatareamain.appendChild(showchatbotmsg(speech.text));
            }
            else if(transcript.includes('2020') || transcript.includes('2021') || transcript.includes('2022') || transcript.includes('2023'))
            {
                document.getElementById("year").value=transcript;
                var year=document.getElementById("year").value;
                if(year.includes!==transcript && comp!="" && port!="" && month!="")
                {
                    document.getElementById("invalid").value='';
                    var y=$.ajax({
                    data:{
                    question: $("#question").val(),
                    company:$("#company").val(),
                    invalid: $("#invalid").val(),
                    port: $("#port").val(),
                    month: $("#month").val(),
                    year: $("#year").val(),
                    },
                    type : 'POST',
                    url : '/chatbot',
                    global:false,
                    async:false,
                    })
                    .done(function(data)
                    {
                     return data;
                    }).responseText;
                    chatareamain.appendChild(showusermsg(transcript));
                    chatbotvoice(transcript);
                    event.preventDefault();
                    const speech = new SpeechSynthesisUtterance();
                    speech.text=y
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                    speech.text="Do you want to continue? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='continue' id='continue' value='yes'/><label class='radio__label' for='yes'>yes</label><input class='radio__input' type='radio' name='continue' id='continue' value='no'/><label class='radio__label' for='no'>no</label></div>"
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
                }
            }
            else
            {
                 document.getElementById("invalid").value='Invalid input';
                 var y=$.ajax({
                 data:{
                 question: $("#question").val(),
                 invalid: $("#invalid").val(),
                 port: $("#port").val(),
                 company:$("#company").val(),
                 month: $("#month").val(),
                 year: $("#year").val(),
                 },
                 type : 'POST',
                 url : '/chatbot3',
                 global:false,
                 async:false,
                 })
                 .done(function(data)
                 {
                  return data;
                 }).responseText;
                 event.preventDefault();
                 chatareamain.appendChild(showusermsg(transcript));
                 chatbotvoice(transcript);
                 event.preventDefault();
                 const speech = new SpeechSynthesisUtterance();
                 speech.text=y
                 window.speechSynthesis.speak(speech);
                 chatareamain.appendChild(showchatbotmsg(speech.text));
            }
        }
    }
    else if(document.getElementById("cont").value =="")
    {
        if(transcript.includes('ok') || transcript.includes('Ok') || transcript.includes('OK') || transcript.includes('yes') || transcript.includes('continue') || transcript.includes('continuous') ||  transcript.includes('agree') || transcript.includes('no') || transcript.includes('not'))
        {
            document.getElementById("cont").value=transcript;
            document.getElementById("company").value="";
            document.getElementById("port").value="";
            document.getElementById("month").value="";
            document.getElementById("year").value="";
            var y=$.ajax({
            data:{
            question: $("#question").val(),
            invalid: $("#invalid").val(),
            cont: $("#cont").val(),
            },
            type : 'POST',
            url : '/chatbot6',
            global:false,
            async:false,
            })
            .done(function(data)
            {
             return data;
            }).responseText;
            event.preventDefault();
            chatareamain.appendChild(showusermsg(transcript));
            chatbotvoice(transcript);
            event.preventDefault();
            const speech = new SpeechSynthesisUtterance();
            speech.text=y
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));
        }
        else
        {
            document.getElementById("invalid").value='Please select yes or no';
            var y=$.ajax({
            data:{
            question: $("#question").val(),
            invalid: $("#invalid").val(),
            cont: $("#cont").val(),
            },
            type : 'POST',
            url : '/chatbot6',
            global:false,
            async:false,
            })
            .done(function(data)
            {
             return data;
            }).responseText;
            event.preventDefault();
            chatareamain.appendChild(showusermsg(transcript));
            chatbotvoice(transcript);
            event.preventDefault();
            const speech = new SpeechSynthesisUtterance();
            speech.text=y
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));
        }
    }

}
    chatareamain.appendChild(showchatbotmsg("Which company do u want to see? <br><br> <div class='radio' id='divResult'><input class='radio__input' type='radio' name='company' id='Reliance' value='Reliance'/><label class='radio__label' for='Reliance'>Reliance</label><input class='radio__input' type='radio' name='company' id='IOCL' value='IOCL'/><label class='radio__label' for='IOCL'>IOCL</label><input class='radio__input' type='radio' name='company' id='BPCL' value='BPCL'/><label class='radio__label' for='BPCL'>BPCL</label><input class='radio__input' type='radio' name='company' id='Nayara' value='Nayara'/><label class='radio__label' for='Nayara'>Nayara</label><input class='radio__input' type='radio' name='company' id='MRPL' value='MRPL'/><label class='radio__label' for='MRPL'>MRPL</label></div>"))
    recognition.onend=function()
    {
        mic.style.background="#ff3b3b";
    }

    mic.addEventListener("click",function()
    {
        mic.style.background="#39c81f";
        recognition.start();
        console.log("Activated");
    })
}