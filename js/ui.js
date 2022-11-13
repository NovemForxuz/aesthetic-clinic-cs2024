function toggleService(evt) {
    const getClass = {'For Men': 'for-men', 'For Women': 'for-ladies'}
    const buttons = document.querySelectorAll('.services-div .col-6')
    let currentOpt = ''
    buttons.forEach((btn) => {
        // remove active for all except selected button
        if(btn.innerText === evt.target.innerText) { 
            btn.classList.add('active');
            currentOpt =  btn.innerText;    // 'For men' | 'For Women'
        }
        else { btn.classList.remove('active') }
    })
    console.log('current option:',currentOpt);
    const imgDiv = document.querySelectorAll('.services-div .img-outer-div')
    imgDiv.forEach((div) => {
        // hide display for all except selected option
        if(div.classList.contains(getClass[currentOpt])) {
            div.style.display = "block"
        } 
        else { div.style.display = "none" }
    })
}

$('.dot').click(function () {
    let dotNum = ''
    $('.dot').children().hide()
    $(this).children().show()
    dotNum = this.classList[1]
    console.log(dotNum)
    // console.log($(this).children())
    $('.desc-content-div').hide()
    $(`.desc-content-div.${dotNum}`).show()
});