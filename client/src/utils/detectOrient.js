
//判断横竖屏
export default function(){
  console.log('portrait');
  var storage = localStorage;
  var data = storage.getItem('J-recordOrientX');
  var w = document.documentElement.clientWidth,
    h = document.documentElement.clientHeight;
  var _Width = 0,_Height = 0;
  var htmlNode = document.body.parentNode;
  console.log(!data);
  if(!data) {
    _Width = window.screen.width;
    _Height = window.screen.height;
    storage.setItem('J-recordOrientX',_Width + ',' + _Height);
  }else {
    var str = data.split(',');
    _Width = str[0];
    _Height = str[1];
    console.log(window.screen.width)
    console.log(_Height)
    console.log( w)
    console.log( h)
  }
  if(w == _Width) {
    // 竖屏
    htmlNode.setAttribute('class','portrait');
    console.log('portrait');
    alert('portrait')
    return;
  }
  if(w == _Height){
    // 横屏
    htmlNode.setAttribute('class','landscape');
    console.log('landscape');
    return;
  }
}
