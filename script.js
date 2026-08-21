const generateBtn=document.querySelector('form button')
const qrCodeBox=document.querySelector('.qr-code')
const qrInput=document.querySelector('form input')
const qrImage=document.querySelector('.qr-code img')


generateBtn.addEventListener('click',function () {
    let qrValue=qrInput.value;
    if(!qrValue){
alert('لطفا یه متن یا آدرس وارد کن')
    }
   generateBtn.innerHTML='درحال دریافتQR Code'
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImage.addEventListener('load',function () {
         qrCodeBox.classList.remove('hidden')
         generateBtn.innerHTML='تولید QR Code'
        
    })
})
qrInput.addEventListener('keyup',function () {
    if (!qrInput.value){
          qrCodeBox.classList.add('hidden')
    }

})