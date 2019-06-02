;(function(root){
 let fn={}
 fn.fr=function(html=''){
 let flg = (typeof 'html' === 'string')
 ,e= (flg)?document.createElement('table'): html||document.createElement('table')
 ,fr=document.createDocumentFragment()
 ;
 if(flg) e.innerHTML= html||'';
 ;[].slice.call(e.childNodes).forEach(d=>fr.appendChild(d))
 return fr;
}
 ;
 if(document.body.dataset.barl)return
 document.body.dataset.barl=true
 ;
 let layout=`
  <div class="wrap flexrow">
    <div class="left full">
      <div class="wrap flexcol">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="main">
          <div class="wrap"></div>
        </div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
    <div class="widebar"></div>
    <div class="center full">
      <div class="wrap flexcol">
        <div class="bar"></div>
        <div class="main">
          <div class="wrap"></div>
        </div>
        <div class="bar"></div>
      </div>
    </div>
    <div class="widebar">   </div>
    <div class="right full">
      <div class="wrap flexcol">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="main">
          <div class="wrap"></div>
        </div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  </div>
</body>
<!--<style class="sys"></style>-->
`.trim();
 ;
let style=(_width,_space,_color,_bgcolor,_bocolor,_padding)=>{
 let sys=document.querySelector('style.sys')
 ,width=_width||"50%"
 ,space=_space||"2rem"
 ,color=_color||"#456"
 ,bgcolor=_bgcolor||"black"
 ,bocolor=_bocolor||"#456"
 ,padding=_padding||"0"
;
 if(!sys){
  sys=document.createElement('style')
  sys.classList.add('sys');
  document.body.appendChild(sys);
 }
sys.innerHTML=
`
body{
 color:${color};
 background-color:${bgcolor};
}
::-webkit-scrollbar-thumb {
  background: ${color};
  border: 2px solid ${bgcolor};
}
::-webkit-scrollbar {
  background-color: ${bgcolor};
}
.bar{
 max-height:${space};
 height:${space};
 min-height:${space};
}
.widebar{
 max-width:${space};
 width:${space};
 min-width:${space};
}
.center{
 min-width:${width};
 width:${width};
 max-width:${width};
}
.main{
 border:1px solid ${bocolor};
 padding:${padding};
}
`.trim();
}
let get=()=>{
 //l,c,r
 let l=document.querySelector('.left>.wrap>.main>.wrap')
 let c=document.querySelector('.center>.wrap>.main>.wrap')
 let r=document.querySelector('.right>.wrap>.main>.wrap')
 return {l:l,c:c,r:r}
}
 
 var o={}
 o.layout=layout
 o.style=style
 o.get=get
 ;
 document.body.appendChild(fn.fr(o.layout))
 root.du=o;
 /*
style('50rem',void 0,'white','black','white','1rem 2rem')
let x=get();
x.l.textContent='xyz'
x.c.textContent='ppp'
x.r.textContent='aaa' 
 */
})(this);
