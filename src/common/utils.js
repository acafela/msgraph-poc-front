import Vue from "vue"

export const Utils = {
  init() {},

  getCookie(name) {
		var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
		return value? value[2] : null
	}

};

export default Utils
