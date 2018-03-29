function Toast(msg,time=1000) {
    this.msg = msg
    this.dismissTime = time
    this.createToast()
    this.showToast()
}


Toast.prototype = {
    createToast:function() {
        let tpl = `<div class="toast">${this.msg}</div>`;
        this.$toast = $(tpl)
        $("body").append(this.$toast)
    },
    showToast: function() {
        this.$toast.fadeIn(300,()=>{
            setTimeout(() => {
                this.$toast.remove()
            }, this.dismissTime);
        })
    }
}

function toast(msg,time=1000) {
    return new Toast(msg,time)
}

module.exports.toast = toast