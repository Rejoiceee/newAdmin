
//퍼블리싱 include용(개발 사용X)
// $('#header').load('../include/header.html', function(){
//     const menuList = document.querySelectorAll('.gnb .depth1');

//     for(var i = 0; i < menuList.length; i++){
//         menuList[i].addEventListener('mouseenter', function(e){
//             e.preventDefault();
//             for(var j = 0; j < menuList.length; j++){
//                 menuList[j].classList.remove('on');
//             }
//             this.classList.add('on');
//         });
//     }
// });
// $('#footer').load('../include/footer.html');


const menuList = document.querySelectorAll('.gnb .depth1');

for(var i = 0; i < menuList.length; i++){
    menuList[i].addEventListener('mouseenter', function(e){
        e.preventDefault();
        for(var j = 0; j < menuList.length; j++){
            menuList[j].classList.remove('on');
        }
        this.classList.add('on');
    });
}


//tab menu
const tabList = document.querySelectorAll('.tabMenu .list li');
const contents = document.querySelectorAll('.tabMenu .cont_area .cont')
let activeCont = '';

for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('.btn').addEventListener('click', function(e){
        e.preventDefault();
        for(var j = 0; j < tabList.length; j++){
            tabList[j].classList.remove('on');
            contents[j].style.display = 'none';
        }
        this.parentNode.classList.add('on');
        activeCont = this.getAttribute('href');
        document.querySelector(activeCont).style.display = 'block';
    });
}

// selectbox
const label = document.querySelectorAll('.selectbox .label');
label.forEach(function(lb){
    lb.addEventListener('click', e => {
        let optionList = lb.nextElementSibling;
        let optionItems = optionList.querySelectorAll('.optionItem');
        clickLabel(lb, optionItems);
    })
});
const clickLabel = (lb, optionItems) => {
    if(lb.parentNode.classList.contains('active')) {
        lb.parentNode.classList.remove('active');
        optionItems.forEach((opt) => {
            opt.removeEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    } else {
        lb.parentNode.classList.add('active');
        optionItems.forEach((opt) => {
            opt.addEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    }
}
const handleSelect = (label, item) => {
    label.innerHTML = item.textContent;
    label.parentNode.classList.remove('active');
}

// 팝업 확인용
function popup(obj){
    $('#'+obj).show();
}
function popupclose(obj){
    $(obj).parents('.layerPopupWrap').hide();
}