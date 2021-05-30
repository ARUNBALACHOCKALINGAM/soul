let name=document.getElementById('askname')
let next=document.getElementById('next')
let questionone=document.getElementById('questionone')
let questiontwo=document.getElementById('questiontwo')
let questionthree=document.getElementById('questionthree')
let questionfour=document.getElementById('questionfour')
let questionfive=document.getElementById('questionfive')
let questionsix=document.getElementById('questionsix')
let questionsev=document.getElementById('questionsev')
let questionei=document.getElementById('questionei')
let questionni=document.getElementById('questionni')
let questionte=document.getElementById('questionte')
let questionel=document.getElementById('questionel')
let questiontw=document.getElementById('questiontw')
let questionthi=document.getElementById('questionthi')
let questionfor=document.getElementById('questionfor')
let questionfiv=document.getElementById('questionfiv')
let submitbtn=document.getElementById('submit')
let radio=document.getElementsByClassName('.radio')
var count=0


console.log(radio.checked)


questiontwo.style.display='none'
questionthree.style.display='none'
questionfour.style.display='none'
questionfiv.style.display='none'
questionsix.style.display='none'
questionsev.style.display='none'
questionei.style.display='none'
questionni.style.display='none'
questionte.style.display='none'
questionel.style.display='none'
questiontw.style.display='none'
questionthi.style.display='none'
questionfor.style.display='none'
questionfive.style.display='none'
submitbtn.style.display='none'


next.addEventListener('click',function(event){
   


	count=count+1

    if(count==1){
		
           questionone.style.display='none'
           askname.style.display='none'
           questiontwo.style.display='inline'
	}
	if(count==2){
		
		questiontwo.style.display='none'
		askname.style.display='none'
		questionthree.style.display='inline'
    }
	if(count==3){
		
		questionthree.style.display='none'
		askname.style.display='none'
		questionfour.style.display='inline'
    }
	if(count==4){
		
		questionfour.style.display='none'
		askname.style.display='none'
		questionfive.style.display='inline'
    }
	if(count==5){
		
		questionfive.style.display='none'
		askname.style.display='none'
		questionsix.style.display='inline'
    }

	
    if(count==6){
		
		questionsix.style.display='none'
		askname.style.display='none'
		questionsev.style.display='inline'
 }
 if(count==7){
	 
	 questionsix.style.display='none'
	 askname.style.display='none'
	 questionsev.style.display='inline'
 }
 if(count==8){
	 
	 questionsev.style.display='none'
	 askname.style.display='none'
	 questionei.style.display='inline'
 }
 if(count==9){
	 
	 questionei.style.display='none'
	 askname.style.display='none'
	 questionni.style.display='inline'
 }
 if(count==10){
	 
	 questionni.style.display='none'
	 askname.style.display='none'
	 questionte.style.display='inline'
 }
 
 if(count==11){
		
	questionte.style.display='none'
	askname.style.display='none'
	questionel.style.display='inline'
}
if(count==12){
 
 questionel.style.display='none'
 askname.style.display='none'
 questiontw.style.display='inline'
}
if(count==13){
 
 questiontw.style.display='none'
 askname.style.display='none'
 questionthi.style.display='inline'
}
if(count==14){
 
 questionthi.style.display='none'
 askname.style.display='none'
 questionfor.style.display='inline'
}
if(count==15){
 
 questionfor.style.display='none'
 askname.style.display='none'
 questionfiv.style.display='inline'
 submitbtn.style.display='inline'
 next.style.display='none'
}
console.log(count)
})




class StickyNavigation {
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$(".et-hero-tab").click(function () {
			self.onTabClick(event, $(this));
		});
		$(window).scroll(() => {
			this.onScroll();
		});
		$(window).resize(() => {
			this.onResize();
		});
	}

	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop =
			$(element.attr("href")).offset().top - this.tabContainerHeight + 1;
		$("html, body").animate({ scrollTop: scrollTop }, 600);
	}

	onScroll() {
		this.checkTabContainerPosition();
		this.findCurrentTabSelector();
	}

	onResize() {
		if (this.currentId) {
			this.setSliderCss();
		}
	}

	checkTabContainerPosition() {
		let offset =
			$(".et-hero-tabs").offset().top +
			$(".et-hero-tabs").height() -
			this.tabContainerHeight;
		if ($(window).scrollTop() > offset) {
			$(".et-hero-tabs-container").addClass("et-hero-tabs-container--top");
		} else {
			$(".et-hero-tabs-container").removeClass("et-hero-tabs-container--top");
		}
	}

	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$(".et-hero-tab").each(function () {
			let id = $(this).attr("href");
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom =
				$(id).offset().top + $(id).height() - self.tabContainerHeight;
			if (
				$(window).scrollTop() > offsetTop &&
				$(window).scrollTop() < offsetBottom
			) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if (this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}

	setSliderCss() {
		let width = 0;
		let left = 0;
		if (this.currentTab) {
			width = this.currentTab.css("width");
			left = this.currentTab.offset().left;
		}
		$(".et-hero-tab-slider").css("width", width);
		$(".et-hero-tab-slider").css("left", left);
	}
}

new StickyNavigation();


//quote generator

