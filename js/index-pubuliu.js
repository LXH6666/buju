/**
 * Created by 李晓煌 on 2017/2/20.
 */
window.onload=function () {
    waterfall('main','box');
}
function waterfall(parent,box) {
    //将main下的所有class为box的元素取出来
    var oParent=document.getElementById(parent);
    var oBoxs=getByClass(oParent,box);
    //计算整个页面显示的列数（页面的宽度/box的宽度）
    //if(!oBoxs[0]){return 0;}
    var oBoxW=oBoxs[0].offsetWidth;
    var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
    //设置main的宽度
    oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto';
    var hArr=[];
    for(var i=0;i<oBoxs.length;i++){
        if(i<cols){
            hArr.push(oBoxs.offsetHeight);
        }else{
            var minH=Math.min.apply(null,hArr);
            var index=getminHIndex(hArr,minH);
            oBoxs[i].style.position='absolute';
            oBoxs[i].style.top=minH+'px';
            oBoxs[i].style.left=oBoxW*index+'px';
            //oBoxs[i].style.left=oBoxs[index].offsetLeft +'px';
            hArr[index]+=oBoxs[i].offsetHeight;
        }
    }

}
//根据class获取元素
function getByClass(parent,clsName) {
    var boxArr=new Array();
    var oElements=parent.getElementsByTagName('*');
    for(var i=0;i<oElements.length;i++){
        if(oElements[i].className==clsName){
            boxArr.push(oElements[i]);
        }
    }
    return boxArr;
}
function getminHIndex(arr,val) {
    for(var i in arr){
        if(arr[i]==val){
            return i;
        }
    }
}