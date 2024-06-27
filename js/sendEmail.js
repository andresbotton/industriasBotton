//https://formspree.io/f/manwwklw
const form = document.getElementById('form')

async function handleSendEmail(event) {
    event.preventDefault()

    const fd = new FormData(this)

    const response = await fetch('https://formspree.io/f/manwwzla', {
        method: 'POST',
        body: fd,
        headers: {
            'Accept': 'application/json'
        }
    })

    if (response.ok) {
        this.reset()
        alert("mensaje enviado")
        
    }else{
        alert('error al enviar el mensaje')
    }
}


form.addEventListener('submit', handleSendEmail)