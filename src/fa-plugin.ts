import type { App } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCodeMerge, faSquareBinary } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCodeMerge, faSquareBinary)

export default {
  install: (app: App) => {
    app.component('font-awesome-icon', FontAwesomeIcon)
  },
}
