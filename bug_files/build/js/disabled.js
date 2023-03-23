function disabled(num){
    form[num].addEventListener('submit', () => {
        sendBtn[num].disabled = true;
    })
}