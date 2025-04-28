const gColorContainer = document.getElementById("Generated-Color-Container")
const getSchemeBtn = document.getElementById("schemeBtn")
const seedColor = document.getElementById("seed-color")
const colorMode = document.getElementById("color-mode")


getSchemeBtn.addEventListener('click', ()=>{
    const color = seedColor.value.substring(1)
    const mode = colorMode.value
    
    const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=6&format=json`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        
        let html = ``
        
        data.colors.forEach(color => {
            html += `
           <div class="color-block">
                    <div class="color" style="background-color: ${color.hex.value};"></div>
                    <p class="hex-code">${color.hex.value}A</p>
            </div>`
        })
        gColorContainer.innerHTML = html
    })
})