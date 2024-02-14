// Thay đổi nội dung búc thư ở đây
var letterContent = "Chúc mừng Ngày Valentine, Xu thân yêu!Tớ hy vọng ngày hôm nay sẽ đem lại cho cậu nhiều niềm vui và hạnh phúc. Tớ muốn nói lời cảm ơn vì có cậu ở bên tớ,làm cho cuộc sống trở nên ấm áp hơn và đầy ý nghĩa. Chúc cậu ngày càng thích tớ mãnh liệt và tràn đầy niềm tin.Hy vọng chúng ta sẽ sớm gặp nhau vào một ngày tràn ngập nụ cười và những khoảnh khắc đáng nhớ. Cùng nhau tận hưởng ngày này và giữ cho tình cảm của chúng ta luôn luôn tươi mới như ngày mới bắt đầu.Tớ tự hào vì có cậu ở bên tớ lâu như vậy và tớ tin chắc rằng chúng ta sẽ cùng nhau trải qua những chặng đường đẹp nhất trong tương lai. Chúc cậu có một ngày Valentine thật ý nghĩa và tràn đầy tình yêu! Iu Xu"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})