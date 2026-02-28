//your JS code here. If required.
const fontsize=document.getElementById("fontsize");
const fontcolor=document.getElementById("fontcolor");
const subbtn=document.querySelector(`input[type="submit"]`);
subbtn.addEventListener("click",(e)=>{
	e.preventDefault();
	document.cookie=`fontsize=${fontsize.value};path=/`;
	document.cookie=`fontcolor=${fontcolor.value};path=/`;
});
function getcookie(tkey){
	const cookies=document.cookie.split("; ");
	for(let cookie of cookies){
		const [key,value]=cookie.split("=");
		if(key===tkey) return value;
	}
	return null;
}
function loadPage(){
	fonts=getcookie("fontsize");
	fontc=getcookie("fontcolor");
	if(fonts){
		fontsize.value=fonts;
		document.documentElement.style.setProperty("--fontsize",fonts+"px");
	}
	if(fontc){
		fontcolor.value=fontc;
		document.documentElement.style.setProperty("--fontcolor",fontc);
	}
}
loadPage();