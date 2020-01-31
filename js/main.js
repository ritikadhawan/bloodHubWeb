var messagesRef=firebase.database().ref('messages')


document.getElementById('search-blood-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var name = inputVal('blood-type');
    var state = inputVal('state');
    var city = inputVal('city');

    saveMessage(blood-type, state, city)

}



function inputVal(id){
    return document.getElementById(id).value;



}
function saveMessage(blood-type, state, city){
    var newMessageRef=messagesRef.push();
    newMessageRef.set({
        blood-type:blood-type,
        state:state,
        city:city


    })





}
