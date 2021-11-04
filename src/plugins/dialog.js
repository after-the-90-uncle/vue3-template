
let $ = window.$;
export default {
	init:function () {
		this._$html = null;
		this._okEvent = () => {}
		this._cancelEvent = () => {}
	},
	open:function ({html,title,className,footer,okEvent,cancelEvent}) {
		if(this._$html){
			this.sleep(300 ,() => {
				this.open({html,title,className,footer,okEvent,cancelEvent})
			})
			return
		}
		this._okEvent = okEvent 
		this._cancelEvent = cancelEvent ;
		let $html = this.appendHtml({html,title,footer})
		
		if(className){
			$html.find(".dialog-modal").addClass(className);
		}
		$html.find(".cancel-btn").click(this.cancelEvent.bind(this))
		$html.find(".ok-btn").click(this.okEvent.bind(this))
		return this;
	},
	
	close:function () {
		this._$html && this._$html.removeClass("show")
		this.sleep(200,() => {
			this._$html && this._$html.remove();
			this._$html = null;
			window.dialogManager.pop()
		})
	},
	destroy:function () {
		$(".dialog-layout").removeClass("show")
		this.sleep(200,() => {
			$(".dialog-layout").remove();
			this._$html = null
			window.dialogManager.clean()
		})
	},
	okEvent:function(){
		if(this._okEvent){
			this._okEvent(this)
		}else{
			this.close()
		}
	},
	cancelEvent:function () {
		this.close();
		this._cancelEvent && this._cancelEvent(this)
	},
	
	appendHtml:function ({html,title,footer}){
		let footerHtml = ``,titleHtml = "",hasTitleClass = "";
		if(footer && Object.keys(footer).length != 0){
			footerHtml = `<div class="dialog-footer">`
			if(footer.cancelText){
				footerHtml += `<a href="javascript:;" class="cancel-btn">${footer.cancelText}</a>`
			}
			if(footer.okText){
				footerHtml += `<a href="javascript:;" class="ok-btn">${footer.okText}</a>`
			}
			footerHtml += `</div>`
		}
		if(title){
			hasTitleClass = "dialog-has-title";
			titleHtml = `<div class="dialog-title">
				<span class="text">${title}</span>
			</div>`
		}
		let htmlstr = ` 
			<div class="dialog-layout">
				<div class="dialog-modal">
					${titleHtml}
					<div class="dialog-content ${hasTitleClass}">${html}</div>
					${footerHtml}
				</div>
			</div>
		`
		this._$html = $(htmlstr);
		$("body").append(this._$html )
		this.sleep(10,() => {
			this._$html.addClass("show")
		})
		return this._$html
	},
	sleep:function (ss,fn) {
		let timer = setTimeout(() => {
			clearTimeout(timer);
			fn()
		},ss)
	}
}

