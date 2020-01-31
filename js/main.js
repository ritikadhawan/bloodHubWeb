var messagesRef=firebase.database().ref('messages');


document.getElementById('search-blood-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    
    var city = $('#city');
    var bloodType = $('blood-type');
    saveMessage(bloodType,city);

}



function saveMessage(bloodType,city){
    var newMessageRef=messagesRef.push();
    newMessageRef.set({
        'blood-type': bloodType.value,
         'city':city.value


    })





}
