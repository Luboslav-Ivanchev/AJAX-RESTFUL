function attachEvents() {

    const url=`https://swapi.dev/api/people/`;

    fetch(url)
        .then(res =>res.json())
        .then(data=>{

            let response=data.results;
            console.log(response);

            let o1=response[0].number='087328234';
            let o2=response[1].number='083256323';
            let o3=response[2].number='0832512424';
            let o4=response[3].number='06352325';
            let o5=response[4].number='328437281';
            let o6=response[5].number='082364532';
            let o7=response[6].number='08322424';
            let o8=response[7].number='08566352325';
            let o9=response[8].number='086328437281';
            let o10=response[9].number='0823632432';

                let btn=document.getElementById('btnLoad');
                let ulList=document.getElementById('phonebook');
                let btnCreate=document.getElementById('btnCreate');
                let phone=document.getElementById('phone');
                let person=document.getElementById('person');

                btn.addEventListener('click',function () {
                        ulList.innerHTML=response.map(elements=>`<li>${elements.name}:${elements.number}</li>`).join('');
                })




                btnCreate.addEventListener('click',function () {
                let li=document.createElement('li');
                li.innerHTML=`${person.value}:${phone.value}`;
                   ulList.appendChild(li);
                });




        });



}

attachEvents();