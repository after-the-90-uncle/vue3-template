
// const $ = document.querySelector
let alertTips = {
	init:function () {

		let layout = document.createElement("div");
		layout.classList.add("alert-tips-layout")
		layout.innerHTML = `
			<div class="alert-tips"></div>
			<div class="alert-tips-success">
				<i class="success-white-icon"></i>
				<span class="text"></span>
			</div>
			<div class="alert-tips-loading">
				<i class="loading-icon"></i>
				<span class="text"></span>
			</div>
		`;
		document.body.append(layout);
		this.$alertTipsLayout = document.querySelector(".alert-tips-layout");
		this.$alertTips = document.querySelector(".alert-tips-layout .alert-tips");
		this.$alertTipsSuccess = document.querySelector(".alert-tips-layout .alert-tips-success .text");
		this.$alertTipsLoading = document.querySelector(".alert-tips-layout .alert-tips-loading .text");
		return this;
	},
	toastModal:function (text,duration,fn) {
		this.hide()
		this.$alertTips.innerHTML = text;
		this.$alertTipsLayout.classList.add("show")
		this.$alertTipsLayout.classList.add("modal")
		this._hide(duration,fn)
	},
	// text,duration,fn
	toast:function (text,duration,fn) {
		this.hide()
		this.$alertTips.innerHTML = text;
		this.$alertTipsLayout.classList.add("show")
		this._hide(duration,fn)
	},
	success:function (text,duration,fn) {
		this.hide()
		this.$alertTipsSuccess.innerHTML = text;
		this.$alertTipsLayout.classList.add("success")
		this._hide(duration,fn)
	},
	loading:function (text) {
		this.$alertTipsLoading.innerHTML=text;
		this.$alertTipsLayout.classList.add("loading")
	},
	_hide:function (duration=1.5,fn) {
		duration = (duration - 0.2) * 1000;
		let timer = setTimeout(() => {
			clearTimeout(timer);
			this.hide()
			fn && fn()
		},duration)	
	},
	hide:function () {
		this.$alertTipsLayout.classList.remove("show");
		this.$alertTipsLayout.classList.remove("loading");
		this.$alertTipsLayout.classList.remove("success");
		this.$alertTipsLayout.classList.remove("modal");
		this.$alertTips.innerHTML = ""
		this.$alertTipsSuccess.innerHTML = ""
		this.$alertTipsLoading.innerHTML = ""
	}
}

alertTips.init();
export default alertTips

