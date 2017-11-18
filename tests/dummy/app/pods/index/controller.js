import Controller from '@ember/controller'
import computed from 'ember-macro-helpers/computed'
import { observer } from '@ember/object'
import { A } from '@ember/array'

import _ from 'lodash'



export default Controller.extend({

  // ----- Overridden properties -----
  queryParams : ['page'],
  page        : '0',



  // ----- Static properties -----
  maxPage           : 12,
  isSidebarExpanded : false,



  // ----- Computed properties -----
  currentPage : computed('page',    page => parseInt(page, 10)),
  pages       : computed('maxPage', max  => A(_.times(max + 1))),



  // ----- Observers -----
  scrollToTop : observer('page', () => window.scrollTo(0, 0)),

  resizeOnSidebarToggle : observer('isSidebarExpanded', () => {
    $(window).trigger('resize')
  }),

})
