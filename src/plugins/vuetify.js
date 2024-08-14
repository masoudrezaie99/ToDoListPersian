// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VDateInput } from 'vuetify/labs/VDateInput'
import { VTimePicker } from 'vuetify/labs/VTimePicker'


// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  rtl:true,
  components: {
    VDateInput,
    VTimePicker,
  }
})







