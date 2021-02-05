var fakeData = [
    {
        id: 1,
        name: "Viet nam dong",
        shorten: "VND",
        rate: 1,
    },
    {
        id: 2,
        name: "Dollar",
        shorten: "USD",
        rate: 23035,
    },
    {
        id: 3,
        name: "Euro",
        shorten: "EUR",
        rate: 27819
    }
]

window.onload=function(){
    //in ra cac option source element
    fakeData.map(item => {
        var opt = document.createElement('option');
        opt.value = item.rate;
        opt.innerHTML = item.shorten;
        document.getElementById('source').appendChild(opt);
    })
    //in ra cac option target element
    fakeData.map(item => {
        var opt = document.createElement('option');
        opt.value = item.rate;
        opt.innerHTML = item.shorten;
        document.getElementById('target').appendChild(opt);
    })

    //an nut chuyen
    document.getElementById("convert").addEventListener('click', function() {
        var source= document.getElementById('source').value;
        var target= document.getElementById('target').value;
        var input = document.getElementById("input").value;
        var p = document.getElementById('result');
        //Cong thuc doi tien
        p.innerText= input*source/target;
    });

    //thay doi
    document.getElementById("change").addEventListener('click', function() {
        document.getElementById("content-container").style.opacity=1 ;
    });
    document.getElementById("close").addEventListener('click', function() {
        document.getElementById("content-container").style.opacity=0 ;
    });
}
