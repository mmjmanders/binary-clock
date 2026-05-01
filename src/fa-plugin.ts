import type { App } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCodeMerge, faSquareBinary } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  install: (app: App) => {
    library.add(faCodeMerge, faSquareBinary)
    app.component('font-awesome-icon', FontAwesomeIcon)
  },
}
