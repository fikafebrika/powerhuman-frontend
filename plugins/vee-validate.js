// plugins/vee-validate.js
import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  configure,
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

// Install rules
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

// Configure default messages
configure({
  defaultMessage: (field, values) => {
    // Here, you can customize default messages for all rules
    values._field_ = field
    return `${field} is required`
  },
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
