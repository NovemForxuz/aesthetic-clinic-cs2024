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

$('.for-ladies .dot').click(function () {
    let dotNum = ''
    $('.for-ladies .dot').children().hide()
    $(this).children().show()
    dotNum = this.classList[1]
    console.log(dotNum)
    // console.log($(this).children())
    $('.for-ladies .desc-content-div').hide()
    $(`.for-ladies .desc-content-div.${dotNum}`).show()
});

$('.for-men .dot').click(function () {
    let dotNum = ''
    $('.for-men .dot').children().hide()
    $(this).children().show()
    dotNum = this.classList[1]
    console.log(dotNum)
    // console.log($(this).children())
    $('.for-men .desc-content-div').hide()
    $(`.for-men .desc-content-div.${dotNum}`).show()
});