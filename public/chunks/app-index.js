(self["webpackChunk"] = self["webpackChunk"] || []).push([["chunks/app-index"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppInputSwitch',
  props: ['description', 'isLast', 'title', 'error']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppInputText',
  props: ['description', 'isLast', 'title', 'error']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/ImageInput.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/ImageInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ImageInput',
  props: ['image', 'error'],
  components: {
    ImageIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ImageIcon,
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.XIcon
  },
  data: function data() {
    return {
      imagePreview: undefined
    };
  },
  computed: {
    isData: function isData() {
      return !(typeof this.imagePreview === 'undefined' || this.imagePreview === '');
    }
  },
  methods: {
    resetImage: function resetImage() {
      this.imagePreview = undefined;
      this.$emit('input', undefined);
    },
    showImagePreview: function showImagePreview(event) {
      var _this = this;

      var imgPath = event.target.files[0].name,
          extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();

      if (['png', 'jpg', 'jpeg', 'svg'].includes(extn)) {
        var file = event.target.files[0],
            reader = new FileReader();

        reader.onload = function () {
          return _this.imagePreview = reader.result;
        };

        reader.readAsDataURL(file); // Update user avatar

        this.$emit('input', event.target.files[0]);
      } else {
        alert(this.$t('wrong_image_error'));
      }
    }
  },
  created: function created() {
    // If has default image then load
    if (this.image) this.imagePreview = this.image;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SelectInput.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SelectInput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SelectInput',
  props: ['placeholder', 'options', 'isError', 'default'],
  components: {
    Edit2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.Edit2Icon,
    UserIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.UserIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon
  },
  watch: {
    query: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(function (val) {
      this.searchedResults = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(this.options, function (string) {
        return !string.label.toLowerCase().includes(val.toLowerCase());
      });
    }, 200)
  },
  computed: {
    isSearching: function isSearching() {
      return this.searchedResults && this.query !== '';
    },
    optionList: function optionList() {
      return this.isSearching ? this.searchedResults : this.options;
    }
  },
  data: function data() {
    return {
      searchedResults: undefined,
      selected: undefined,
      isOpen: false,
      query: ''
    };
  },
  methods: {
    selectOption: function selectOption(option) {
      // Emit selected
      this.$emit('input', option.value);
      this.$emit('change', option.value); // Get selected

      this.selected = option; // Close menu

      this.isOpen = false;
    },
    openMenu: function openMenu() {
      var _this = this;

      this.isOpen = !this.isOpen;

      if (this.$refs.search && this.isOpen) {
        this.$nextTick(function () {
          return _this.$refs.search.focus();
        });
      }
    }
  },
  created: function created() {
    var _this2 = this;

    if (this["default"]) this.selected = this.options.find(function (option) {
      return option.value === _this2["default"];
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SwitchInput',
  props: ['label', 'name', 'state', 'info', 'input', 'isDisabled'],
  data: function data() {
    return {
      isSwitched: undefined
    };
  },
  methods: {
    changeState: function changeState() {
      if (this.isDisabled) return;
      this.isSwitched = !this.isSwitched;
      this.$emit('input', this.isSwitched);
    }
  },
  mounted: function mounted() {
    this.isSwitched = this.state;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTab.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTab.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/Others/Spinner */ "./resources/js/components/UI/Others/Spinner.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PageTab',
  props: ['isLoading'],
  components: {
    Spinner: _UI_Others_Spinner__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTabGroup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTabGroup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PageTabGroup'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FormLabel',
  props: ['icon'],
  components: {
    TrendingUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.TrendingUpIcon,
    WifiIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.WifiIcon,
    ListIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ListIcon,
    MailIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.MailIcon,
    InfoIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.InfoIcon,
    DatabaseIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.DatabaseIcon,
    UsersIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.UsersIcon,
    CreditCardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.CreditCardIcon,
    DollarSignIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.DollarSignIcon,
    SmartphoneIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.SmartphoneIcon,
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.HardDriveIcon,
    BarChartIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.BarChartIcon,
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.SettingsIcon,
    FileTextIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FileTextIcon,
    ShieldIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.ShieldIcon,
    FrownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.FrownIcon,
    Edit2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.Edit2Icon,
    BellIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.BellIcon,
    KeyIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__.KeyIcon
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'InfoBox',
  props: ['type']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Forms_Layouts_AppInputSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/Forms/Layouts/AppInputSwitch */ "./resources/js/components/Forms/Layouts/AppInputSwitch.vue");
/* harmony import */ var _components_Forms_Layouts_AppInputText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/Forms/Layouts/AppInputText */ "./resources/js/components/Forms/Layouts/AppInputText.vue");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout_PageTabGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Layout/PageTabGroup */ "./resources/js/components/Layout/PageTabGroup.vue");
/* harmony import */ var _components_Inputs_SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Inputs/SelectInput */ "./resources/js/components/Inputs/SelectInput.vue");
/* harmony import */ var _components_Inputs_SwitchInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/Inputs/SwitchInput */ "./resources/js/components/Inputs/SwitchInput.vue");
/* harmony import */ var _components_Inputs_ImageInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Inputs/ImageInput */ "./resources/js/components/Inputs/ImageInput.vue");
/* harmony import */ var _components_UI_Labels_FormLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/UI/Labels/FormLabel */ "./resources/js/components/UI/Labels/FormLabel.vue");
/* harmony import */ var _components_UI_Buttons_ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/UI/Buttons/ButtonBase */ "./resources/js/components/UI/Buttons/ButtonBase.vue");
/* harmony import */ var _components_Layout_PageTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Layout/PageTab */ "./resources/js/components/Layout/PageTab.vue");
/* harmony import */ var _components_UI_Others_InfoBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/UI/Others/InfoBox */ "./resources/js/components/UI/Others/InfoBox.vue");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppIndex',
  components: {
    AppInputSwitch: _components_Forms_Layouts_AppInputSwitch__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppInputText: _components_Forms_Layouts_AppInputText__WEBPACK_IMPORTED_MODULE_1__["default"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_11__.ValidationObserver,
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_11__.ValidationProvider,
    PageTabGroup: _components_Layout_PageTabGroup__WEBPACK_IMPORTED_MODULE_2__["default"],
    SwitchInput: _components_Inputs_SwitchInput__WEBPACK_IMPORTED_MODULE_4__["default"],
    SelectInput: _components_Inputs_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    ImageInput: _components_Inputs_ImageInput__WEBPACK_IMPORTED_MODULE_5__["default"],
    ButtonBase: _components_UI_Buttons_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"],
    FormLabel: _components_UI_Labels_FormLabel__WEBPACK_IMPORTED_MODULE_6__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_12__.required,
    PageTab: _components_Layout_PageTab__WEBPACK_IMPORTED_MODULE_8__["default"],
    InfoBox: _components_UI_Others_InfoBox__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_13__.mapGetters)(['config'])),
  data: function data() {
    return {
      isLoading: true,
      app: undefined
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_10___default().get('/api/admin/settings', {
      params: {
        column: 'allow_homepage|footer_content|get_started_description|get_started_title|pricing_description|pricing_title|feature_description_3|feature_title_3|feature_description_2|feature_title_2|feature_description_1|feature_title_1|features_description|features_title|header_description|header_title|section_get_started|section_pricing_content|section_feature_boxes|section_features'
      }
    }).then(function (response) {
      _this.app = {
        allow_homepage: parseInt(response.data.allow_homepage || 1),
        section_features: parseInt(response.data.section_features),
        section_feature_boxes: parseInt(response.data.section_feature_boxes),
        section_pricing_content: parseInt(response.data.section_pricing_content),
        section_get_started: parseInt(response.data.section_get_started),
        header_title: response.data.header_title,
        header_description: response.data.header_description,
        features_title: response.data.features_title,
        features_description: response.data.features_description,
        feature_title_1: response.data.feature_title_1,
        feature_description_1: response.data.feature_description_1,
        feature_title_2: response.data.feature_title_2,
        feature_description_2: response.data.feature_description_2,
        feature_title_3: response.data.feature_title_3,
        feature_description_3: response.data.feature_description_3,
        pricing_title: response.data.pricing_title,
        pricing_description: response.data.pricing_description,
        get_started_title: response.data.get_started_title,
        get_started_description: response.data.get_started_description,
        footer_content: response.data.footer_content
      };
    })["finally"](function () {
      _this.isLoading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=template&id=ee4784e4&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=template&id=ee4784e4& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "flex w-full items-center justify-between space-x-2 sm:space-x-8",
    "class": {
      "mb-6 sm:mb-7": !_vm.isLast
    }
  }, [_c("div", {
    staticClass: "leading-5"
  }, [_c("label", {
    staticClass: "mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-200"
  }, [_vm._v(" " + _vm._s(_vm.title) + ": ")]), _vm._v(" "), _vm.description ? _c("span", {
    staticClass: "block text-xs leading-4 dark:text-gray-500 text-gray-500",
    domProps: {
      innerHTML: _vm._s(_vm.description)
    }
  }) : _vm._e(), _vm._v(" "), _vm.error ? _c("span", {
    staticClass: "pt-2 text-xs dark:text-rose-600 text-rose-600"
  }, [_vm._v("\n            " + _vm._s(_vm.error) + "\n        ")]) : _vm._e()]), _vm._v(" "), _c("div", [_vm._t("default")], 2)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    "class": {
      "mb-6 sm:mb-7": !_vm.isLast
    }
  }, [_vm.title ? _c("label", {
    staticClass: "mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-200"
  }, [_vm._v("\n        " + _vm._s(_vm.title) + ":\n    ")]) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), _vm.error ? _c("span", {
    staticClass: "pt-2 text-xs dark:text-rose-600 text-rose-600"
  }, [_vm._v("\n        " + _vm._s(_vm.error) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm.description ? _c("small", {
    staticClass: "block pt-2 text-xs leading-4 dark:text-gray-500 text-gray-500",
    domProps: {
      innerHTML: _vm._s(_vm.description)
    }
  }) : _vm._e()], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/ImageInput.vue?vue&type=template&id=635f0c4c&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/ImageInput.vue?vue&type=template&id=635f0c4c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "relative flex h-[175px] items-center justify-center rounded-lg bg-light-background dark:bg-2x-dark-foreground",
    "class": {
      "is-error": _vm.error
    }
  }, [_vm.imagePreview ? _c("div", {
    staticClass: "absolute right-0 top-0 z-[9] flex h-7 w-7 -translate-y-3 translate-x-3 cursor-pointer items-center justify-center rounded-md rounded-full dark:bg-4x-dark-foreground bg-white shadow-lg",
    on: {
      click: _vm.resetImage
    }
  }, [_c("x-icon", {
    staticClass: "vue-feather dark:text-gray-500",
    attrs: {
      size: "14"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("input", {
    ref: "file",
    staticClass: "absolute top-0 left-0 right-0 bottom-0 z-10 w-full cursor-pointer opacity-0",
    attrs: {
      type: "file"
    },
    on: {
      change: function change($event) {
        return _vm.showImagePreview($event);
      }
    }
  }), _vm._v(" "), _vm.imagePreview ? _c("img", {
    ref: "image",
    staticClass: "absolute h-full w-full object-contain py-4 px-12",
    attrs: {
      src: _vm.imagePreview
    }
  }) : _vm._e(), _vm._v(" "), !_vm.isData ? _c("div", {
    staticClass: "text-center"
  }, [_c("image-icon", {
    staticClass: "vue-feather text-theme mb-4 inline-block",
    attrs: {
      size: "34"
    }
  }), _vm._v(" "), _c("b", {
    staticClass: "block text-base font-bold leading-3"
  }, [_vm._v("\n            " + _vm._s(_vm.$te("input_image.title") ? _vm.$t("input_image.title") : "Upload Image") + "\n        ")]), _vm._v(" "), _c("small", {
    staticClass: "text-xs text-gray-500"
  }, [_vm._v("\n            " + _vm._s(_vm.$te("input_image.supported") ? _vm.$t("input_image.supported") : "Supported formats are .png, .jpg, .jpeg.") + "\n        ")])], 1) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SelectInput.vue?vue&type=template&id=3d763693&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SelectInput.vue?vue&type=template&id=3d763693&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "select"
  }, [_c("div", {
    staticClass: "input-area rounded-lg bg-light-background dark:bg-2x-dark-foreground",
    "class": {
      "is-active": _vm.isOpen,
      "!border-rose-600": _vm.isError
    },
    on: {
      click: _vm.openMenu
    }
  }, [_vm.selected ? _c("div", {
    staticClass: "selected flex w-full items-center"
  }, [_vm.selected.icon ? _c("div", {
    staticClass: "option-icon"
  }, [_vm.selected.icon === "user" ? _c("user-icon", {
    staticClass: "vue-feather text-theme",
    attrs: {
      size: "14"
    }
  }) : _vm._e(), _vm._v(" "), _vm.selected.icon === "user-edit" ? _c("edit2-icon", {
    staticClass: "vue-feather text-theme",
    attrs: {
      size: "14"
    }
  }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "option-value inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap pl-2"
  }, [_vm._v("\n                    " + _vm._s(_vm.selected.label) + "\n                ")])]) : _vm._e(), _vm._v(" "), !_vm.selected ? _c("div", {
    staticClass: "not-selected"
  }, [_c("span", {
    staticClass: "option-value placehoder"
  }, [_vm._v(_vm._s(_vm.placeholder))])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "chevron",
    attrs: {
      size: "19"
    }
  })], 1), _vm._v(" "), _c("transition", {
    attrs: {
      name: "slide-in"
    }
  }, [_vm.isOpen ? _c("div", {
    staticClass: "input-options rounded-lg"
  }, [_vm.options.length > 5 ? _c("div", {
    staticClass: "select-search"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.query,
      expression: "query"
    }],
    ref: "search",
    staticClass: "search-input focus-border-theme rounded-lg",
    attrs: {
      type: "text",
      placeholder: _vm.$te("search_in_list") ? _vm.$t("search_in_list") : "Search in list..."
    },
    domProps: {
      value: _vm.query
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.query = $event.target.value;
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("ul", {
    staticClass: "option-list"
  }, _vm._l(_vm.optionList, function (option, i) {
    return _c("li", {
      key: i,
      staticClass: "option-item",
      on: {
        click: function click($event) {
          return _vm.selectOption(option);
        }
      }
    }, [option.icon ? _c("div", {
      staticClass: "option-icon"
    }, [option.icon === "user" ? _c("user-icon", {
      attrs: {
        size: "14"
      }
    }) : _vm._e(), _vm._v(" "), option.icon === "user-edit" ? _c("edit2-icon", {
      attrs: {
        size: "14"
      }
    }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "option-value"
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.$t(option.label)) + "\n\t\t\t\t\t\t")])]);
  }), 0)]) : _vm._e()])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    staticClass: "switch-content"
  }, [_vm.label ? _c("label", {
    staticClass: "input-label"
  }, [_vm._v(" " + _vm._s(_vm.label) + ": ")]) : _vm._e(), _vm._v(" "), _vm.info ? _c("small", {
    staticClass: "input-info"
  }, [_vm._v("\n            " + _vm._s(_vm.info) + "\n        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "switch-content text-right"
  }, [_c("div", {
    staticClass: "switch",
    "class": {
      active: _vm.state
    },
    on: {
      click: _vm.changeState
    }
  }, [_c("div", {
    staticClass: "switch-button"
  })])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTab.vue?vue&type=template&id=9d7e21a8&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTab.vue?vue&type=template&id=9d7e21a8& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "page-tab"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isLoading,
      expression: "isLoading"
    }],
    attrs: {
      id: "loader"
    }
  }, [_c("Spinner")], 1), _vm._v(" "), _vm._t("default")], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTabGroup.vue?vue&type=template&id=11361d3a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTabGroup.vue?vue&type=template&id=11361d3a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "page-tab-group"
  }, [_vm._t("default")], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "mb-8 flex items-center"
  }, [!_vm.icon ? _c("edit-2-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "frown" ? _c("frown-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "list" ? _c("list-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "info" ? _c("info-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "database" ? _c("database-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "file-text" ? _c("file-text-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "dollar" ? _c("dollar-sign-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "credit-card" ? _c("credit-card-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "bar-chart" ? _c("bar-chart-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "settings" ? _c("settings-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "hard-drive" ? _c("hard-drive-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "mail" ? _c("mail-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "smartphone" ? _c("smartphone-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "shield" ? _c("shield-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "bell" ? _c("bell-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "key" ? _c("key-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "users" ? _c("users-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "wifi" ? _c("wifi-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _vm.icon === "trending-up" ? _c("trending-up-icon", {
    staticClass: "vue-feather text-theme dark-text-theme mr-3",
    attrs: {
      size: "22"
    }
  }) : _vm._e(), _vm._v(" "), _c("b", {
    staticClass: "text-md font-bold dark:text-gray-200 sm:text-lg"
  }, [_vm._t("default")], 2)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "info-box",
    "class": _vm.type
  }, [_vm._t("default")], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=template&id=5613cf50&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=template&id=5613cf50&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("PageTab", {
    attrs: {
      "is-loading": _vm.isLoading
    }
  }, [_vm.app ? _c("PageTabGroup", [_c("div", {
    staticClass: "form block-form"
  }, [_c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", [_vm._v("\n                    " + _vm._s(_vm.$t("homepage")) + "\n                ")]), _vm._v(" "), _c("AppInputSwitch", {
    attrs: {
      title: _vm.$t("allow_homepage"),
      description: _vm.$t("allow_homepage_note"),
      "is-last": true
    }
  }, [_c("SwitchInput", {
    staticClass: "switch",
    attrs: {
      state: _vm.app.allow_homepage
    },
    on: {
      input: function input($event) {
        return _vm.$updateText("/admin/settings", "allow_homepage", _vm.app.allow_homepage);
      }
    },
    model: {
      value: _vm.app.allow_homepage,
      callback: function callback($$v) {
        _vm.$set(_vm.app, "allow_homepage", $$v);
      },
      expression: "app.allow_homepage"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", [_vm._v("Header Title")]), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("img", {
    staticClass: "page-image",
    attrs: {
      src: "/assets/images/admin/main-header.jpg",
      alt: "Main Header"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("Title:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "App Title",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var errors = _ref.errors;
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.header_title,
            expression: "app.header_title"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            type: "text"
          },
          domProps: {
            value: _vm.app.header_title
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "header_title", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "header_title", _vm.app.header_title);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 3360527285)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("Description:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "App Description",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref2) {
        var errors = _ref2.errors;
        return [_c("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.header_description,
            expression: "app.header_description"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            rows: "2"
          },
          domProps: {
            value: _vm.app.header_description
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "header_description", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "header_description", _vm.app.header_description);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 1699808071)
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", [_vm._v("Features Title")]), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("div", [_c("div", {
    staticClass: "inline-wrapper"
  }, [_c("div", {
    staticClass: "switch-label"
  }, [_c("label", {
    staticClass: "input-label"
  }, [_vm._v(" Show section: ")])]), _vm._v(" "), _c("SwitchInput", {
    staticClass: "switch",
    attrs: {
      state: _vm.app.section_features
    },
    on: {
      input: function input($event) {
        return _vm.$updateText("/admin/settings", "section_features", _vm.app.section_features);
      }
    },
    model: {
      value: _vm.app.section_features,
      callback: function callback($$v) {
        _vm.$set(_vm.app, "section_features", $$v);
      },
      expression: "app.section_features"
    }
  })], 1)])]), _vm._v(" "), _vm.app.section_features ? _c("div", [_c("div", {
    staticClass: "block-wrapper"
  }, [_c("img", {
    staticClass: "page-image",
    attrs: {
      src: "/assets/images/admin/main-features.jpg",
      alt: "Main Features"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("Title:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "App Title",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref3) {
        var errors = _ref3.errors;
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.features_title,
            expression: "app.features_title"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            type: "text"
          },
          domProps: {
            value: _vm.app.features_title
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "features_title", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "features_title", _vm.app.features_title);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 2651704565)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("Description:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "App Description",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref4) {
        var errors = _ref4.errors;
        return [_c("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.features_description,
            expression: "app.features_description"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            rows: "2"
          },
          domProps: {
            value: _vm.app.features_description
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "features_description", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "features_description", _vm.app.features_description);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 4189347719)
  })], 1)]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", [_vm._v("Feature Boxes")]), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("div", [_c("div", {
    staticClass: "inline-wrapper"
  }, [_c("div", {
    staticClass: "switch-label"
  }, [_c("label", {
    staticClass: "input-label"
  }, [_vm._v(" Show section: ")])]), _vm._v(" "), _c("SwitchInput", {
    staticClass: "switch",
    attrs: {
      state: _vm.app.section_feature_boxes
    },
    on: {
      input: function input($event) {
        return _vm.$updateText("/admin/settings", "section_feature_boxes", _vm.app.section_feature_boxes);
      }
    },
    model: {
      value: _vm.app.section_feature_boxes,
      callback: function callback($$v) {
        _vm.$set(_vm.app, "section_feature_boxes", $$v);
      },
      expression: "app.section_feature_boxes"
    }
  })], 1)])]), _vm._v(" "), _vm.app.section_feature_boxes ? _c("div", [_c("div", {
    staticClass: "block-wrapper"
  }, [_c("img", {
    staticClass: "page-image",
    attrs: {
      src: "/assets/images/admin/feature-boxes.jpg",
      alt: "Main Features"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("First Box Title:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "Feature Title 1",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref5) {
        var errors = _ref5.errors;
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.feature_title_1,
            expression: "app.feature_title_1"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            type: "text"
          },
          domProps: {
            value: _vm.app.feature_title_1
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "feature_title_1", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "feature_title_1", _vm.app.feature_title_1);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 2546859349)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("First Box Description:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "Feature Description 1",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref6) {
        var errors = _ref6.errors;
        return [_c("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.feature_description_1,
            expression: "app.feature_description_1"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            rows: "2"
          },
          domProps: {
            value: _vm.app.feature_description_1
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "feature_description_1", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "feature_description_1", _vm.app.feature_description_1);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 1524286599)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("Second Box Title:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "Feature Title 2",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref7) {
        var errors = _ref7.errors;
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.feature_title_2,
            expression: "app.feature_title_2"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            type: "text"
          },
          domProps: {
            value: _vm.app.feature_title_2
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "feature_title_2", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "feature_title_2", _vm.app.feature_title_2);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 3316020565)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("Second Box Description:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "Feature Description 2",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref8) {
        var errors = _ref8.errors;
        return [_c("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.feature_description_2,
            expression: "app.feature_description_2"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            rows: "2"
          },
          domProps: {
            value: _vm.app.feature_description_2
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "feature_description_2", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "feature_description_2", _vm.app.feature_description_2);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 1935976903)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("Third Box Title:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "Feature Title 3",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref9) {
        var errors = _ref9.errors;
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.feature_title_3,
            expression: "app.feature_title_3"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            type: "text"
          },
          domProps: {
            value: _vm.app.feature_title_3
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "feature_title_3", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "feature_title_3", _vm.app.feature_title_3);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 2359486549)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("Third Box Description:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "Feature Description 3",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref10) {
        var errors = _ref10.errors;
        return [_c("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.feature_description_3,
            expression: "app.feature_description_3"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            rows: "2"
          },
          domProps: {
            value: _vm.app.feature_description_3
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "feature_description_3", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "feature_description_3", _vm.app.feature_description_3);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 3685686407)
  })], 1)]) : _vm._e()], 1), _vm._v(" "), _vm.config.subscriptionType === "fixed" ? _c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", [_vm._v("Pricing Content")]), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("div", [_c("div", {
    staticClass: "inline-wrapper"
  }, [_c("div", {
    staticClass: "switch-label"
  }, [_c("label", {
    staticClass: "input-label"
  }, [_vm._v(" Show section: ")])]), _vm._v(" "), _c("SwitchInput", {
    staticClass: "switch",
    attrs: {
      state: _vm.app.section_pricing_content
    },
    on: {
      input: function input($event) {
        return _vm.$updateText("/admin/settings", "section_pricing_content", _vm.app.section_pricing_content);
      }
    },
    model: {
      value: _vm.app.section_pricing_content,
      callback: function callback($$v) {
        _vm.$set(_vm.app, "section_pricing_content", $$v);
      },
      expression: "app.section_pricing_content"
    }
  })], 1)])]), _vm._v(" "), _vm.app.section_pricing_content ? _c("div", [_c("div", {
    staticClass: "block-wrapper"
  }, [_c("img", {
    staticClass: "page-image",
    attrs: {
      src: "/assets/images/admin/pricing-content.jpg",
      alt: "Main Features"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("Title:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "App Title",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref11) {
        var errors = _ref11.errors;
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.pricing_title,
            expression: "app.pricing_title"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            type: "text"
          },
          domProps: {
            value: _vm.app.pricing_title
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "pricing_title", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "pricing_title", _vm.app.pricing_title);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 4270404117)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("Description:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "App Description",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref12) {
        var errors = _ref12.errors;
        return [_c("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.pricing_description,
            expression: "app.pricing_description"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            rows: "2"
          },
          domProps: {
            value: _vm.app.pricing_description
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "pricing_description", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "pricing_description", _vm.app.pricing_description);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 3507057959)
  })], 1)]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", [_vm._v("Get Started Content")]), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("div", [_c("div", {
    staticClass: "inline-wrapper"
  }, [_c("div", {
    staticClass: "switch-label"
  }, [_c("label", {
    staticClass: "input-label"
  }, [_vm._v(" Show section: ")])]), _vm._v(" "), _c("SwitchInput", {
    staticClass: "switch",
    attrs: {
      state: _vm.app.section_get_started
    },
    on: {
      input: function input($event) {
        return _vm.$updateText("/admin/settings", "section_get_started", _vm.app.section_get_started);
      }
    },
    model: {
      value: _vm.app.section_get_started,
      callback: function callback($$v) {
        _vm.$set(_vm.app, "section_get_started", $$v);
      },
      expression: "app.section_get_started"
    }
  })], 1)])]), _vm._v(" "), _vm.app.section_get_started ? _c("div", [_c("div", {
    staticClass: "block-wrapper"
  }, [_c("img", {
    staticClass: "page-image",
    attrs: {
      src: "/assets/images/admin/get-started-content.jpg",
      alt: "Main Features"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("Title:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "App Title",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref13) {
        var errors = _ref13.errors;
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.get_started_title,
            expression: "app.get_started_title"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            type: "text"
          },
          domProps: {
            value: _vm.app.get_started_title
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "get_started_title", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "get_started_title", _vm.app.get_started_title);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 3975046997)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("Description:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "App Description",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref14) {
        var errors = _ref14.errors;
        return [_c("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.get_started_description,
            expression: "app.get_started_description"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            rows: "2"
          },
          domProps: {
            value: _vm.app.get_started_description
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "get_started_description", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "get_started_description", _vm.app.get_started_description);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 3165780295)
  })], 1)]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "card shadow-card"
  }, [_c("FormLabel", [_vm._v("Footer")]), _vm._v(" "), _c("div", {
    staticClass: "block-wrapper"
  }, [_c("label", [_vm._v("Footer content:")]), _vm._v(" "), _c("ValidationProvider", {
    attrs: {
      tag: "div",
      mode: "passive",
      name: "App Title",
      rules: "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref15) {
        var errors = _ref15.errors;
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.app.footer_content,
            expression: "app.footer_content"
          }],
          staticClass: "focus-border-theme input-dark",
          "class": {
            "!border-rose-600": errors[0]
          },
          attrs: {
            type: "text"
          },
          domProps: {
            value: _vm.app.footer_content
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;

              _vm.$set(_vm.app, "footer_content", $event.target.value);
            }, function ($event) {
              return _vm.$updateText("/admin/settings", "footer_content", _vm.app.footer_content);
            }]
          }
        }), _vm._v(" "), errors[0] ? _c("span", {
          staticClass: "text-left text-xs text-red-600"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 4282325525)
  })], 1)], 1)])]) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SelectInput.vue?vue&type=style&index=0&id=3d763693&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SelectInput.vue?vue&type=style&index=0&id=3d763693&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* TODO: refactor to the tailwind */\n.select[data-v-3d763693] {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n.select-search[data-v-3d763693] {\n  background: white;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 13px;\n}\n.select-search .search-input[data-v-3d763693] {\n  border: 1px solid transparent;\n  background: #f4f5f6;\n  transition: 150ms all ease;\n  font-size: 0.875em;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\n.input-options[data-v-3d763693] {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);\n  background: white;\n  position: absolute;\n  overflow: hidden;\n  top: 65px;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  max-height: 295px;\n  overflow-y: auto;\n}\n.input-options .option-item[data-v-3d763693] {\n  padding: 13px 20px;\n  display: block;\n  cursor: pointer;\n}\n.input-options .option-item[data-v-3d763693]:hover {\n  color: #00BC7E;\n  background: #f4f5f6;\n}\n.input-options .option-item[data-v-3d763693]:last-child {\n  border-bottom: none;\n}\n.input-area[data-v-3d763693] {\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  justify-content: space-between;\n  transition: 150ms all ease;\n  align-items: center;\n  padding: 13px 20px;\n  display: flex;\n  outline: 0;\n  width: 100%;\n  cursor: pointer;\n}\n.input-area .chevron[data-v-3d763693] {\n  transition: 150ms all ease;\n}\n.input-area.is-active .chevron[data-v-3d763693] {\n  transform: rotate(180deg);\n}\n.input-area.is-error[data-v-3d763693] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\n.option-icon[data-v-3d763693] {\n  width: 20px;\n  display: inline-block;\n  font-size: 0.625em;\n}\n.option-value[data-v-3d763693] {\n  font-size: 0.875em;\n  font-weight: 700;\n  vertical-align: middle;\n}\n.option-value.placehoder[data-v-3d763693] {\n  color: rgba(27, 37, 57, 0.5);\n}\n.slide-in-enter-active[data-v-3d763693] {\n  transition: all 150ms ease;\n}\n.slide-in-enter[data-v-3d763693] {\n  opacity: 0;\n  transform: translateY(-50px);\n}\n.dark .select-search[data-v-3d763693] {\n  background: #1e2024;\n}\n.dark .select-search .search-input[data-v-3d763693] {\n  background: #151515;\n}\n.dark .popup-wrapper .input-area[data-v-3d763693] {\n  background: #25272c;\n}\n.dark .input-options[data-v-3d763693] {\n  background: #1e2024;\n}\n.dark .input-options .option-item[data-v-3d763693] {\n  border-bottom: none;\n}\n.dark .input-options .option-item[data-v-3d763693]:hover {\n  background: #2a2c32;\n}\n.dark .input-options .option-item:hover .option-icon path[data-v-3d763693],\n.dark .input-options .option-item:hover .option-icon circle[data-v-3d763693] {\n  color: inherit;\n}\n.dark .input-options .option-item[data-v-3d763693]:last-child {\n  border-bottom: none;\n}\n.dark .option-value.placehoder[data-v-3d763693] {\n  color: #7d858c;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".input-wrapper[data-v-537cb35b] {\n  display: flex;\n  width: 100%;\n}\n.input-wrapper .input-label[data-v-537cb35b] {\n  color: #1B2539;\n}\n.input-wrapper .switch-content[data-v-537cb35b] {\n  width: 100%;\n}\n.input-wrapper .switch-content[data-v-537cb35b]:last-child {\n  width: 80px;\n}\n.switch[data-v-537cb35b] {\n  width: 50px;\n  height: 28px;\n  border-radius: 50px;\n  display: block;\n  background: #f1f1f5;\n  position: relative;\n  transition: 0.3s all ease;\n}\n.switch .switch-button[data-v-537cb35b] {\n  transition: 0.3s all ease;\n  width: 22px;\n  height: 22px;\n  border-radius: 50px;\n  display: block;\n  background: white;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  box-shadow: 0 2px 4px rgba(37, 38, 94, 0.1);\n  cursor: pointer;\n}\n.switch.active .switch-button[data-v-537cb35b] {\n  left: 25px;\n}\n.dark .switch[data-v-537cb35b] {\n  background: #1e2024;\n}\n.dark .popup-wrapper .switch[data-v-537cb35b] {\n  background: #25272c;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTabGroup.vue?vue&type=style&index=0&id=11361d3a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTabGroup.vue?vue&type=style&index=0&id=11361d3a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".page-tab-group[data-v-11361d3a] {\n  margin-bottom: 65px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".info-box[data-v-51c5e09e] {\n  padding: 20px;\n  border-radius: 10px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-51c5e09e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-51c5e09e],\n.info-box.error a[data-v-51c5e09e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-51c5e09e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-51c5e09e] {\n  font-size: 15px;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-51c5e09e] a {\n  font-size: 15px;\n}\n.info-box p[data-v-51c5e09e] b {\n  font-size: 15px;\n  font-weight: 700;\n}\n.info-box b[data-v-51c5e09e] {\n  font-weight: 700;\n}\n.info-box a[data-v-51c5e09e] {\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-51c5e09e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-51c5e09e] {\n  display: block;\n}\n.info-box ul li a[data-v-51c5e09e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-51c5e09e] {\n    padding: 15px;\n}\n}\n.dark .info-box[data-v-51c5e09e] {\n  background: #1e2024;\n}\n.dark .info-box.error[data-v-51c5e09e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.dark .info-box.error p[data-v-51c5e09e],\n.dark .info-box.error a[data-v-51c5e09e] {\n  color: #fd397a;\n}\n.dark .info-box.error a[data-v-51c5e09e] {\n  text-decoration: underline;\n}\n.dark .info-box p[data-v-51c5e09e] {\n  color: #bec6cf;\n}\n.dark .info-box ul li[data-v-51c5e09e] {\n  color: #bec6cf;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=style&index=0&id=5613cf50&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=style&index=0&id=5613cf50&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form.inline-form[data-v-5613cf50] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-5613cf50] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-5613cf50] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .switch-wrapper[data-v-5613cf50] {\n  padding-bottom: 13px;\n  margin-bottom: 13px;\n  border-bottom: 1px solid #f4f5f6;\n}\n.form.block-form .switch-wrapper[data-v-5613cf50]:last-child {\n  padding-bottom: 0;\n  margin-bottom: 0;\n  border-bottom: none;\n}\n.form.block-form .wrapper-inline[data-v-5613cf50] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-5613cf50] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-5613cf50] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-5613cf50] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-5613cf50]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-5613cf50] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-5613cf50] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-5613cf50] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-5613cf50] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.input-help[data-v-5613cf50] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-5613cf50] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-5613cf50] {\n  margin-left: 20px;\n}\n.error-message[data-v-5613cf50] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-5613cf50] {\n  width: 100%;\n}\ntextarea.is-error[data-v-5613cf50],\ninput[type=\"password\"].is-error[data-v-5613cf50],\ninput[type=\"text\"].is-error[data-v-5613cf50],\ninput[type=\"number\"].is-error[data-v-5613cf50],\ninput[type=\"email\"].is-error[data-v-5613cf50] {\n  border-color: #fd397a;\n}\ntextarea[data-v-5613cf50]::-moz-placeholder, input[type=\"password\"][data-v-5613cf50]::-moz-placeholder, input[type=\"text\"][data-v-5613cf50]::-moz-placeholder, input[type=\"number\"][data-v-5613cf50]::-moz-placeholder, input[type=\"email\"][data-v-5613cf50]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-5613cf50]::placeholder,\ninput[type=\"password\"][data-v-5613cf50]::placeholder,\ninput[type=\"text\"][data-v-5613cf50]::placeholder,\ninput[type=\"number\"][data-v-5613cf50]::placeholder,\ninput[type=\"email\"][data-v-5613cf50]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[disabled][data-v-5613cf50],\ninput[type=\"password\"][disabled][data-v-5613cf50],\ninput[type=\"text\"][disabled][data-v-5613cf50],\ninput[type=\"number\"][disabled][data-v-5613cf50],\ninput[type=\"email\"][disabled][data-v-5613cf50] {\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\ninput[type=\"color\"][data-v-5613cf50] {\n  width: 38px !important;\n  height: 40px;\n  border: none;\n  outline: none;\n  background: none;\n  min-width: initial !important;\n}\n.additional-link[data-v-5613cf50] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n}\n.additional-link b[data-v-5613cf50], .additional-link a[data-v-5613cf50] {\n  cursor: pointer;\n}\n.additional-link b[data-v-5613cf50]:hover, .additional-link a[data-v-5613cf50]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-5613cf50] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-5613cf50] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-5613cf50], .form textarea[data-v-5613cf50] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-5613cf50] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-5613cf50] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-5613cf50] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-5613cf50] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-5613cf50] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-5613cf50] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-5613cf50] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-5613cf50] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-5613cf50],\n  input[type=\"password\"][data-v-5613cf50],\n  input[type=\"number\"][data-v-5613cf50],\n  input[type=\"text\"][data-v-5613cf50],\n  input[type=\"email\"][data-v-5613cf50] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-5613cf50] {\n    display: block;\n}\n}\n.dark .form .input-help[data-v-5613cf50] {\n  color: #7d858c;\n}\n.dark .form.block-form .block-wrapper label[data-v-5613cf50] {\n  color: #bec6cf;\n}\n.dark .form.block-form .switch-wrapper[data-v-5613cf50] {\n  border-color: rgba(255, 255, 255, 0.02);\n}\n.dark .form .inline-wrapper .switch-label .input-label[data-v-5613cf50] {\n  color: #bec6cf;\n}\n.dark textarea[data-v-5613cf50],\n.dark input[type=\"password\"][data-v-5613cf50],\n.dark input[type=\"text\"][data-v-5613cf50],\n.dark input[type=\"number\"][data-v-5613cf50],\n.dark input[type=\"email\"][data-v-5613cf50] {\n  border-color: #1e2024;\n  background: #1e2024;\n  color: #bec6cf;\n}\n.dark textarea[data-v-5613cf50]::-moz-placeholder, .dark input[type=\"password\"][data-v-5613cf50]::-moz-placeholder, .dark input[type=\"text\"][data-v-5613cf50]::-moz-placeholder, .dark input[type=\"number\"][data-v-5613cf50]::-moz-placeholder, .dark input[type=\"email\"][data-v-5613cf50]::-moz-placeholder {\n  color: #7d858c;\n}\n.dark textarea[data-v-5613cf50]::placeholder,\n.dark input[type=\"password\"][data-v-5613cf50]::placeholder,\n.dark input[type=\"text\"][data-v-5613cf50]::placeholder,\n.dark input[type=\"number\"][data-v-5613cf50]::placeholder,\n.dark input[type=\"email\"][data-v-5613cf50]::placeholder {\n  color: #7d858c;\n}\n.dark textarea[disabled][data-v-5613cf50],\n.dark input[type=\"password\"][disabled][data-v-5613cf50],\n.dark input[type=\"text\"][disabled][data-v-5613cf50],\n.dark input[type=\"number\"][disabled][data-v-5613cf50],\n.dark input[type=\"email\"][disabled][data-v-5613cf50] {\n  color: rgba(125, 133, 140, 0.8);\n  -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n.dark .popup-wrapper textarea[data-v-5613cf50],\n.dark .popup-wrapper input[type=\"password\"][data-v-5613cf50],\n.dark .popup-wrapper input[type=\"text\"][data-v-5613cf50],\n.dark .popup-wrapper input[type=\"number\"][data-v-5613cf50],\n.dark .popup-wrapper input[type=\"email\"][data-v-5613cf50] {\n  background: #25272c;\n}\n.block-form[data-v-5613cf50] {\n  max-width: 100%;\n}\n.page-image[data-v-5613cf50] {\n  width: 100%;\n  margin: 0 auto;\n  display: block;\n  border-radius: 8px;\n  border: 1px solid #ececec;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SelectInput.vue?vue&type=style&index=0&id=3d763693&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SelectInput.vue?vue&type=style&index=0&id=3d763693&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectInput_vue_vue_type_style_index_0_id_3d763693_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectInput.vue?vue&type=style&index=0&id=3d763693&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SelectInput.vue?vue&type=style&index=0&id=3d763693&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectInput_vue_vue_type_style_index_0_id_3d763693_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectInput_vue_vue_type_style_index_0_id_3d763693_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTabGroup.vue?vue&type=style&index=0&id=11361d3a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTabGroup.vue?vue&type=style&index=0&id=11361d3a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTabGroup_vue_vue_type_style_index_0_id_11361d3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTabGroup.vue?vue&type=style&index=0&id=11361d3a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTabGroup.vue?vue&type=style&index=0&id=11361d3a&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTabGroup_vue_vue_type_style_index_0_id_11361d3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTabGroup_vue_vue_type_style_index_0_id_11361d3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=style&index=0&id=5613cf50&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=style&index=0&id=5613cf50&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_5613cf50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=5613cf50&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=style&index=0&id=5613cf50&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_5613cf50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_5613cf50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vee-validate/dist/rules.js":
/*!*************************************************!*\
  !*** ./node_modules/vee-validate/dist/rules.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "alpha_dash": () => (/* binding */ alpha_dash),
/* harmony export */   "alpha_num": () => (/* binding */ alpha_num),
/* harmony export */   "alpha_spaces": () => (/* binding */ alpha_spaces),
/* harmony export */   "between": () => (/* binding */ between),
/* harmony export */   "confirmed": () => (/* binding */ confirmed),
/* harmony export */   "digits": () => (/* binding */ digits),
/* harmony export */   "dimensions": () => (/* binding */ dimensions),
/* harmony export */   "double": () => (/* binding */ double),
/* harmony export */   "email": () => (/* binding */ email),
/* harmony export */   "excluded": () => (/* binding */ excluded),
/* harmony export */   "ext": () => (/* binding */ ext),
/* harmony export */   "image": () => (/* binding */ image),
/* harmony export */   "integer": () => (/* binding */ integer),
/* harmony export */   "is": () => (/* binding */ is),
/* harmony export */   "is_not": () => (/* binding */ is_not),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "max_value": () => (/* binding */ max_value),
/* harmony export */   "mimes": () => (/* binding */ mimes),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "min_value": () => (/* binding */ min_value),
/* harmony export */   "numeric": () => (/* binding */ numeric),
/* harmony export */   "oneOf": () => (/* binding */ oneOf),
/* harmony export */   "regex": () => (/* binding */ regex),
/* harmony export */   "required": () => (/* binding */ required),
/* harmony export */   "required_if": () => (/* binding */ required_if),
/* harmony export */   "size": () => (/* binding */ size)
/* harmony export */ });
/**
  * vee-validate v3.4.14
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */
/* eslint-disable no-misleading-character-class */
var alpha$1 = {
    en: /^[A-Z]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[A-ZÆØÅ]*$/i,
    de: /^[A-ZÄÖÜß]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[A-Z\xC0-\xFF]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ro: /^[A-ZĂÂÎŞŢ]*$/i,
    ru: /^[А-ЯЁ]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[A-ZČĆŽŠĐ]*$/i,
    sv: /^[A-ZÅÄÖ]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
    el: /^[Α-ώ]*$/i,
    ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
    he: /^[A-Z\u05D0-\u05EA']*$/i
};
var alphaSpaces = {
    en: /^[A-Z\s]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
    da: /^[A-ZÆØÅ\s]*$/i,
    de: /^[A-ZÄÖÜß\s]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
    it: /^[A-Z\xC0-\xFF\s]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
    ro: /^[A-ZĂÂÎŞŢ\s]*$/i,
    ru: /^[А-ЯЁ\s]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
    sr: /^[A-ZČĆŽŠĐ\s]*$/i,
    sv: /^[A-ZÅÄÖ\s]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
    el: /^[Α-ώ\s]*$/i,
    ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\s]*$/i,
    he: /^[A-Z\u05D0-\u05EA'\s]*$/i
};
var alphanumeric = {
    en: /^[0-9A-Z]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[0-9A-ZÆØÅ]$/i,
    de: /^[0-9A-ZÄÖÜß]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[0-9A-Z\xC0-\xFF]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ro: /^[0-9A-ZĂÂÎŞŢ]*$/i,
    ru: /^[0-9А-ЯЁ]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
    sv: /^[0-9A-ZÅÄÖ]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
    el: /^[0-9Α-ώ]*$/i,
    ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
    he: /^[0-9A-Z\u05D0-\u05EA']*$/i
};
var alphaDash = {
    en: /^[0-9A-Z_-]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
    da: /^[0-9A-ZÆØÅ_-]*$/i,
    de: /^[0-9A-ZÄÖÜß_-]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
    it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
    ro: /^[0-9A-ZĂÂÎŞŢ_-]*$/i,
    ru: /^[0-9А-ЯЁ_-]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
    sv: /^[0-9A-ZÅÄÖ_-]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
    el: /^[0-9Α-ώ_-]*$/i,
    ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF_-]*$/i,
    he: /^[0-9A-Z\u05D0-\u05EA'_-]*$/i
};

var validate$r = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$r(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alpha$1).some(function (loc) { return alpha$1[loc].test(value); });
    }
    return (alpha$1[locale] || alpha$1.en).test(value);
};
var params$k = [
    {
        name: 'locale'
    }
];
var alpha = {
    validate: validate$r,
    params: params$k
};

var validate$q = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$q(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
    }
    return (alphaDash[locale] || alphaDash.en).test(value);
};
var params$j = [
    {
        name: 'locale'
    }
];
var alpha_dash = {
    validate: validate$q,
    params: params$j
};

var validate$p = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$p(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
    }
    return (alphanumeric[locale] || alphanumeric.en).test(value);
};
var params$i = [
    {
        name: 'locale'
    }
];
var alpha_num = {
    validate: validate$p,
    params: params$i
};

var validate$o = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$o(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
    }
    return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};
var params$h = [
    {
        name: 'locale'
    }
];
var alpha_spaces = {
    validate: validate$o,
    params: params$h
};

var validate$n = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, min = _b.min, max = _b.max;
    if (Array.isArray(value)) {
        return value.every(function (val) { return !!validate$n(val, { min: min, max: max }); });
    }
    return Number(min) <= value && Number(max) >= value;
};
var params$g = [
    {
        name: 'min'
    },
    {
        name: 'max'
    }
];
var between = {
    validate: validate$n,
    params: params$g
};

var validate$m = function (value, _a) {
    var target = _a.target;
    return String(value) === String(target);
};
var params$f = [
    {
        name: 'target',
        isTarget: true
    }
];
var confirmed = {
    validate: validate$m,
    params: params$f
};

var validate$l = function (value, _a) {
    var length = _a.length;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$l(val, { length: length }); });
    }
    var strVal = String(value);
    return /^[0-9]*$/.test(strVal) && strVal.length === length;
};
var params$e = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var digits = {
    validate: validate$l,
    params: params$e
};

var validateImage = function (file, width, height) {
    var URL = window.URL || window.webkitURL;
    return new Promise(function (resolve) {
        var image = new Image();
        image.onerror = function () { return resolve(false); };
        image.onload = function () { return resolve(image.width === width && image.height === height); };
        image.src = URL.createObjectURL(file);
    });
};
var validate$k = function (files, _a) {
    var width = _a.width, height = _a.height;
    var list = [];
    files = Array.isArray(files) ? files : [files];
    for (var i = 0; i < files.length; i++) {
        // if file is not an image, reject.
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
            return Promise.resolve(false);
        }
        list.push(files[i]);
    }
    return Promise.all(list.map(function (file) { return validateImage(file, width, height); })).then(function (values) {
        return values.every(function (v) { return v; });
    });
};
var params$d = [
    {
        name: 'width',
        cast: function (value) {
            return Number(value);
        }
    },
    {
        name: 'height',
        cast: function (value) {
            return Number(value);
        }
    }
];
var dimensions = {
    validate: validate$k,
    params: params$d
};

var validate$j = function (value, _a) {
    var multiple = (_a === void 0 ? {} : _a).multiple;
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (multiple && !Array.isArray(value)) {
        value = String(value)
            .split(',')
            .map(function (emailStr) { return emailStr.trim(); });
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return re.test(String(val)); });
    }
    return re.test(String(value));
};
var params$c = [
    {
        name: 'multiple',
        default: false
    }
];
var email = {
    validate: validate$j,
    params: params$c
};

function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isCallable(fn) {
    return typeof fn === 'function';
}

function includes(collection, item) {
    return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
function toArray(arrayLike) {
    if (isCallable(Array.from)) {
        return Array.from(arrayLike);
    }
    /* istanbul ignore next */
    return _copyArray(arrayLike);
}
/* istanbul ignore next */
function _copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;
    for (var i = 0; i < length; i++) {
        array.push(arrayLike[i]);
    }
    return array;
}

var validate$i = function (value, options) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$i(val, options); });
    }
    return toArray(options).some(function (item) {
        // eslint-disable-next-line
        return item == value;
    });
};
var oneOf = {
    validate: validate$i
};

var validate$h = function (value, args) {
    return !validate$i(value, args);
};
var excluded = {
    validate: validate$h
};

var validate$g = function (files, extensions) {
    var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.name); });
    }
    return regex.test(files.name);
};
var ext = {
    validate: validate$g
};

var validate$f = function (files) {
    var regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.name); });
    }
    return regex.test(files.name);
};
var image = {
    validate: validate$f
};

var validate$e = function (value) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
    }
    return /^-?[0-9]+$/.test(String(value));
};
var integer = {
    validate: validate$e
};

var validate$d = function (value, _a) {
    var other = _a.other;
    return value === other;
};
var params$b = [
    {
        name: 'other'
    }
];
var is = {
    validate: validate$d,
    params: params$b
};

var validate$c = function (value, _a) {
    var other = _a.other;
    return value !== other;
};
var params$a = [
    {
        name: 'other'
    }
];
var is_not = {
    validate: validate$c,
    params: params$a
};

var validate$b = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return false;
    }
    if (typeof value === 'string') {
        value = toArray(value);
    }
    if (typeof value === 'number') {
        value = String(value);
    }
    if (!value.length) {
        value = toArray(value);
    }
    return value.length === length;
};
var params$9 = [
    {
        name: 'length',
        cast: function (value) { return Number(value); }
    }
];
var length = {
    validate: validate$b,
    params: params$9
};

var validate$a = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return length >= 0;
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$a(val, { length: length }); });
    }
    return String(value).length <= length;
};
var params$8 = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var max = {
    validate: validate$a,
    params: params$8
};

var validate$9 = function (value, _a) {
    var max = _a.max;
    if (isNullOrUndefined(value) || value === '') {
        return false;
    }
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(function (val) { return validate$9(val, { max: max }); });
    }
    return Number(value) <= max;
};
var params$7 = [
    {
        name: 'max',
        cast: function (value) {
            return Number(value);
        }
    }
];
var max_value = {
    validate: validate$9,
    params: params$7
};

var validate$8 = function (files, mimes) {
    var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.type); });
    }
    return regex.test(files.type);
};
var mimes = {
    validate: validate$8
};

var validate$7 = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return false;
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$7(val, { length: length }); });
    }
    return String(value).length >= length;
};
var params$6 = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var min = {
    validate: validate$7,
    params: params$6
};

var validate$6 = function (value, _a) {
    var min = _a.min;
    if (isNullOrUndefined(value) || value === '') {
        return false;
    }
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(function (val) { return validate$6(val, { min: min }); });
    }
    return Number(value) >= min;
};
var params$5 = [
    {
        name: 'min',
        cast: function (value) {
            return Number(value);
        }
    }
];
var min_value = {
    validate: validate$6,
    params: params$5
};

var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;
var validate$5 = function (value) {
    var testValue = function (val) {
        var strValue = String(val);
        return en.test(strValue) || ar.test(strValue);
    };
    if (Array.isArray(value)) {
        return value.every(testValue);
    }
    return testValue(value);
};
var numeric = {
    validate: validate$5
};

var validate$4 = function (value, _a) {
    var regex = _a.regex;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$4(val, { regex: regex }); });
    }
    return regex.test(String(value));
};
var params$4 = [
    {
        name: 'regex',
        cast: function (value) {
            if (typeof value === 'string') {
                return new RegExp(value);
            }
            return value;
        }
    }
];
var regex = {
    validate: validate$4,
    params: params$4
};

var validate$3 = function (value, _a) {
    var allowFalse = (_a === void 0 ? { allowFalse: true } : _a).allowFalse;
    var result = {
        valid: false,
        required: true
    };
    if (isNullOrUndefined(value) || isEmptyArray(value)) {
        return result;
    }
    // incase a field considers `false` as an empty value like checkboxes.
    if (value === false && !allowFalse) {
        return result;
    }
    result.valid = !!String(value).trim().length;
    return result;
};
var computesRequired$1 = true;
var params$3 = [
    {
        name: 'allowFalse',
        default: true
    }
];
var required = {
    validate: validate$3,
    params: params$3,
    computesRequired: computesRequired$1
};

var testEmpty = function (value) {
    return isEmptyArray(value) || includes([false, null, undefined], value) || !String(value).trim().length;
};
var validate$2 = function (value, _a) {
    var target = _a.target, values = _a.values;
    var required;
    if (values && values.length) {
        if (!Array.isArray(values) && typeof values === 'string') {
            values = [values];
        }
        // eslint-disable-next-line
        required = values.some(function (val) { return val == String(target).trim(); });
    }
    else {
        required = !testEmpty(target);
    }
    if (!required) {
        return {
            valid: true,
            required: required
        };
    }
    return {
        valid: !testEmpty(value),
        required: required
    };
};
var params$2 = [
    {
        name: 'target',
        isTarget: true
    },
    {
        name: 'values'
    }
];
var computesRequired = true;
var required_if = {
    validate: validate$2,
    params: params$2,
    computesRequired: computesRequired
};

var validate$1 = function (files, _a) {
    var size = _a.size;
    if (isNaN(size)) {
        return false;
    }
    var nSize = size * 1024;
    if (!Array.isArray(files)) {
        return files.size <= nSize;
    }
    for (var i = 0; i < files.length; i++) {
        if (files[i].size > nSize) {
            return false;
        }
    }
    return true;
};
var params$1 = [
    {
        name: 'size',
        cast: function (value) {
            return Number(value);
        }
    }
];
var size = {
    validate: validate$1,
    params: params$1
};

var validate = function (value, params) {
    var _a = params || {}, _b = _a.decimals, decimals = _b === void 0 ? 0 : _b, _c = _a.separator, separator = _c === void 0 ? 'dot' : _c;
    var delimiterRegexPart = separator === 'comma' ? ',?' : '\\.?';
    var decimalRegexPart = decimals === 0 ? '\\d*' : "(\\d{" + decimals + "})?";
    var regex = new RegExp("^-?\\d+" + delimiterRegexPart + decimalRegexPart + "$");
    return Array.isArray(value) ? value.every(function (val) { return regex.test(String(val)); }) : regex.test(String(value));
};
var params = [
    {
        name: 'decimals',
        default: 0
    },
    {
        name: 'separator',
        default: 'dot'
    }
];
var double = {
    validate: validate,
    params: params
};




/***/ }),

/***/ "./node_modules/vee-validate/dist/vee-validate.full.js":
/*!*************************************************************!*\
  !*** ./node_modules/vee-validate/dist/vee-validate.full.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
  * vee-validate v3.4.14
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js")) :
  0;
}(this, (function (exports, Vue) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

  var code = "en";
  var messages = {
  	alpha: "The {_field_} field may only contain alphabetic characters",
  	alpha_num: "The {_field_} field may only contain alpha-numeric characters",
  	alpha_dash: "The {_field_} field may contain alpha-numeric characters as well as dashes and underscores",
  	alpha_spaces: "The {_field_} field may only contain alphabetic characters as well as spaces",
  	between: "The {_field_} field must be between {min} and {max}",
  	confirmed: "The {_field_} field confirmation does not match",
  	digits: "The {_field_} field must be numeric and exactly contain {length} digits",
  	dimensions: "The {_field_} field must be {width} pixels by {height} pixels",
  	email: "The {_field_} field must be a valid email",
  	excluded: "The {_field_} field is not a valid value",
  	ext: "The {_field_} field is not a valid file",
  	image: "The {_field_} field must be an image",
  	integer: "The {_field_} field must be an integer",
  	length: "The {_field_} field must be {length} long",
  	max_value: "The {_field_} field must be {max} or less",
  	max: "The {_field_} field may not be greater than {length} characters",
  	mimes: "The {_field_} field must have a valid file type",
  	min_value: "The {_field_} field must be {min} or more",
  	min: "The {_field_} field must be at least {length} characters",
  	numeric: "The {_field_} field may only contain numeric characters",
  	oneOf: "The {_field_} field is not a valid value",
  	regex: "The {_field_} field format is invalid",
  	required_if: "The {_field_} field is required",
  	required: "The {_field_} field is required",
  	size: "The {_field_} field size must be less than {size}KB",
  	double: "The {_field_} field must be a valid decimal"
  };
  var en$1 = {
  	code: code,
  	messages: messages
  };

  /**
   * Some Alpha Regex helpers.
   * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
   */
  /* eslint-disable no-misleading-character-class */
  var alpha$1 = {
      en: /^[A-Z]*$/i,
      cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
      da: /^[A-ZÆØÅ]*$/i,
      de: /^[A-ZÄÖÜß]*$/i,
      es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
      fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
      fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
      it: /^[A-Z\xC0-\xFF]*$/i,
      lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
      nl: /^[A-ZÉËÏÓÖÜ]*$/i,
      hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
      pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
      pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
      ro: /^[A-ZĂÂÎŞŢ]*$/i,
      ru: /^[А-ЯЁ]*$/i,
      sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
      sr: /^[A-ZČĆŽŠĐ]*$/i,
      sv: /^[A-ZÅÄÖ]*$/i,
      tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
      uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
      ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
      az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
      el: /^[Α-ώ]*$/i,
      ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
      he: /^[A-Z\u05D0-\u05EA']*$/i
  };
  var alphaSpaces = {
      en: /^[A-Z\s]*$/i,
      cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
      da: /^[A-ZÆØÅ\s]*$/i,
      de: /^[A-ZÄÖÜß\s]*$/i,
      es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
      fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
      fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
      it: /^[A-Z\xC0-\xFF\s]*$/i,
      lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
      nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
      hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
      pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
      pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
      ro: /^[A-ZĂÂÎŞŢ\s]*$/i,
      ru: /^[А-ЯЁ\s]*$/i,
      sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
      sr: /^[A-ZČĆŽŠĐ\s]*$/i,
      sv: /^[A-ZÅÄÖ\s]*$/i,
      tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
      uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
      ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
      az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
      el: /^[Α-ώ\s]*$/i,
      ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\s]*$/i,
      he: /^[A-Z\u05D0-\u05EA'\s]*$/i
  };
  var alphanumeric = {
      en: /^[0-9A-Z]*$/i,
      cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
      da: /^[0-9A-ZÆØÅ]$/i,
      de: /^[0-9A-ZÄÖÜß]*$/i,
      es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
      fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
      fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
      it: /^[0-9A-Z\xC0-\xFF]*$/i,
      lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
      hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
      nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
      pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
      pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
      ro: /^[0-9A-ZĂÂÎŞŢ]*$/i,
      ru: /^[0-9А-ЯЁ]*$/i,
      sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
      sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
      sv: /^[0-9A-ZÅÄÖ]*$/i,
      tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
      uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
      ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
      az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
      el: /^[0-9Α-ώ]*$/i,
      ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
      he: /^[0-9A-Z\u05D0-\u05EA']*$/i
  };
  var alphaDash = {
      en: /^[0-9A-Z_-]*$/i,
      cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
      da: /^[0-9A-ZÆØÅ_-]*$/i,
      de: /^[0-9A-ZÄÖÜß_-]*$/i,
      es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
      fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
      fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
      it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
      lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
      nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
      hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
      pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
      pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
      ro: /^[0-9A-ZĂÂÎŞŢ_-]*$/i,
      ru: /^[0-9А-ЯЁ_-]*$/i,
      sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
      sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
      sv: /^[0-9A-ZÅÄÖ_-]*$/i,
      tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
      uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
      ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
      az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
      el: /^[0-9Α-ώ_-]*$/i,
      ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF_-]*$/i,
      he: /^[0-9A-Z\u05D0-\u05EA'_-]*$/i
  };

  var validate$s = function (value, _a) {
      var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$s(val, { locale: locale }); });
      }
      // Match at least one locale.
      if (!locale) {
          return Object.keys(alpha$1).some(function (loc) { return alpha$1[loc].test(value); });
      }
      return (alpha$1[locale] || alpha$1.en).test(value);
  };
  var params$k = [
      {
          name: 'locale'
      }
  ];
  var alpha = {
      validate: validate$s,
      params: params$k
  };

  var validate$r = function (value, _a) {
      var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$r(val, { locale: locale }); });
      }
      // Match at least one locale.
      if (!locale) {
          return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
      }
      return (alphaDash[locale] || alphaDash.en).test(value);
  };
  var params$j = [
      {
          name: 'locale'
      }
  ];
  var alpha_dash = {
      validate: validate$r,
      params: params$j
  };

  var validate$q = function (value, _a) {
      var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$q(val, { locale: locale }); });
      }
      // Match at least one locale.
      if (!locale) {
          return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
      }
      return (alphanumeric[locale] || alphanumeric.en).test(value);
  };
  var params$i = [
      {
          name: 'locale'
      }
  ];
  var alpha_num = {
      validate: validate$q,
      params: params$i
  };

  var validate$p = function (value, _a) {
      var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$p(val, { locale: locale }); });
      }
      // Match at least one locale.
      if (!locale) {
          return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
      }
      return (alphaSpaces[locale] || alphaSpaces.en).test(value);
  };
  var params$h = [
      {
          name: 'locale'
      }
  ];
  var alpha_spaces = {
      validate: validate$p,
      params: params$h
  };

  var validate$o = function (value, _a) {
      var _b = _a === void 0 ? {} : _a, min = _b.min, max = _b.max;
      if (Array.isArray(value)) {
          return value.every(function (val) { return !!validate$o(val, { min: min, max: max }); });
      }
      return Number(min) <= value && Number(max) >= value;
  };
  var params$g = [
      {
          name: 'min'
      },
      {
          name: 'max'
      }
  ];
  var between = {
      validate: validate$o,
      params: params$g
  };

  var validate$n = function (value, _a) {
      var target = _a.target;
      return String(value) === String(target);
  };
  var params$f = [
      {
          name: 'target',
          isTarget: true
      }
  ];
  var confirmed = {
      validate: validate$n,
      params: params$f
  };

  var validate$m = function (value, _a) {
      var length = _a.length;
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$m(val, { length: length }); });
      }
      var strVal = String(value);
      return /^[0-9]*$/.test(strVal) && strVal.length === length;
  };
  var params$e = [
      {
          name: 'length',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var digits = {
      validate: validate$m,
      params: params$e
  };

  var validateImage = function (file, width, height) {
      var URL = window.URL || window.webkitURL;
      return new Promise(function (resolve) {
          var image = new Image();
          image.onerror = function () { return resolve(false); };
          image.onload = function () { return resolve(image.width === width && image.height === height); };
          image.src = URL.createObjectURL(file);
      });
  };
  var validate$l = function (files, _a) {
      var width = _a.width, height = _a.height;
      var list = [];
      files = Array.isArray(files) ? files : [files];
      for (var i = 0; i < files.length; i++) {
          // if file is not an image, reject.
          if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
              return Promise.resolve(false);
          }
          list.push(files[i]);
      }
      return Promise.all(list.map(function (file) { return validateImage(file, width, height); })).then(function (values) {
          return values.every(function (v) { return v; });
      });
  };
  var params$d = [
      {
          name: 'width',
          cast: function (value) {
              return Number(value);
          }
      },
      {
          name: 'height',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var dimensions = {
      validate: validate$l,
      params: params$d
  };

  var validate$k = function (value, _a) {
      var multiple = (_a === void 0 ? {} : _a).multiple;
      // eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (multiple && !Array.isArray(value)) {
          value = String(value)
              .split(',')
              .map(function (emailStr) { return emailStr.trim(); });
      }
      if (Array.isArray(value)) {
          return value.every(function (val) { return re.test(String(val)); });
      }
      return re.test(String(value));
  };
  var params$c = [
      {
          name: 'multiple',
          default: false
      }
  ];
  var email = {
      validate: validate$k,
      params: params$c
  };

  function isNaN$1(value) {
      // NaN is the one value that does not equal itself.
      // eslint-disable-next-line
      return value !== value;
  }
  function isNullOrUndefined(value) {
      return value === null || value === undefined;
  }
  function isEmptyArray(arr) {
      return Array.isArray(arr) && arr.length === 0;
  }
  var isObject = function (obj) {
      return obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj);
  };
  /**
   * A reference comparison function with NaN support
   */
  function isRefEqual(lhs, rhs) {
      if (isNaN$1(lhs) && isNaN$1(rhs)) {
          return true;
      }
      return lhs === rhs;
  }
  // Checks if a given value is not an empty string or null or undefined.
  function isSpecified(val) {
      if (val === '') {
          return false;
      }
      return !isNullOrUndefined(val);
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  function isCallable(fn) {
      return typeof fn === 'function';
  }
  function isLocator(value) {
      return isCallable(value) && !!value.__locatorRef;
  }

  function findIndex(arrayLike, predicate) {
      var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
      if (isCallable(array.findIndex)) {
          return array.findIndex(predicate);
      }
      /* istanbul ignore next */
      for (var i = 0; i < array.length; i++) {
          if (predicate(array[i], i)) {
              return i;
          }
      }
      /* istanbul ignore next */
      return -1;
  }
  /**
   * finds the first element that satisfies the predicate callback, polyfills array.find
   */
  function find(arrayLike, predicate) {
      var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
      var idx = findIndex(array, predicate);
      return idx === -1 ? undefined : array[idx];
  }
  function includes(collection, item) {
      return collection.indexOf(item) !== -1;
  }
  /**
   * Converts an array-like object to array, provides a simple polyfill for Array.from
   */
  function toArray(arrayLike) {
      if (isCallable(Array.from)) {
          return Array.from(arrayLike);
      }
      /* istanbul ignore next */
      return _copyArray(arrayLike);
  }
  /* istanbul ignore next */
  function _copyArray(arrayLike) {
      var array = [];
      var length = arrayLike.length;
      for (var i = 0; i < length; i++) {
          array.push(arrayLike[i]);
      }
      return array;
  }
  function values(obj) {
      if (isCallable(Object.values)) {
          return Object.values(obj);
      }
      // fallback to keys()
      /* istanbul ignore next */
      return Object.keys(obj).map(function (k) { return obj[k]; });
  }
  function merge(target, source) {
      Object.keys(source).forEach(function (key) {
          if (isObject(source[key])) {
              if (!target[key]) {
                  target[key] = {};
              }
              merge(target[key], source[key]);
              return;
          }
          target[key] = source[key];
      });
      return target;
  }

  function createFlags() {
      return {
          untouched: true,
          touched: false,
          dirty: false,
          pristine: true,
          valid: false,
          invalid: false,
          validated: false,
          pending: false,
          required: false,
          changed: false,
          passed: false,
          failed: false
      };
  }

  function identity(x) {
      return x;
  }
  function debounce(fn, wait, token) {
      if (wait === void 0) { wait = 0; }
      if (token === void 0) { token = { cancelled: false }; }
      if (wait === 0) {
          return fn;
      }
      var timeout;
      return function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          var later = function () {
              timeout = undefined;
              // check if the fn call was cancelled.
              if (!token.cancelled)
                  fn.apply(void 0, args);
          };
          // because we might want to use Node.js setTimout for SSR.
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
      };
  }

  /**
   * Emits a warning to the console
   */
  function warn(message) {
      console.warn("[vee-validate] " + message);
  }
  /**
   * Replaces placeholder values in a string with their actual values
   */
  function interpolate(template, values) {
      return template.replace(/{([^}]+)}/g, function (_, p) {
          return p in values ? values[p] : "{" + p + "}";
      });
  }

  var validate$j = function (value, options) {
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$j(val, options); });
      }
      return toArray(options).some(function (item) {
          // eslint-disable-next-line
          return item == value;
      });
  };
  var oneOf = {
      validate: validate$j
  };

  var validate$i = function (value, args) {
      return !validate$j(value, args);
  };
  var excluded = {
      validate: validate$i
  };

  var validate$h = function (files, extensions) {
      var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');
      if (Array.isArray(files)) {
          return files.every(function (file) { return regex.test(file.name); });
      }
      return regex.test(files.name);
  };
  var ext = {
      validate: validate$h
  };

  var validate$g = function (files) {
      var regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;
      if (Array.isArray(files)) {
          return files.every(function (file) { return regex.test(file.name); });
      }
      return regex.test(files.name);
  };
  var image = {
      validate: validate$g
  };

  var validate$f = function (value) {
      if (Array.isArray(value)) {
          return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
      }
      return /^-?[0-9]+$/.test(String(value));
  };
  var integer = {
      validate: validate$f
  };

  var validate$e = function (value, _a) {
      var other = _a.other;
      return value === other;
  };
  var params$b = [
      {
          name: 'other'
      }
  ];
  var is = {
      validate: validate$e,
      params: params$b
  };

  var validate$d = function (value, _a) {
      var other = _a.other;
      return value !== other;
  };
  var params$a = [
      {
          name: 'other'
      }
  ];
  var is_not = {
      validate: validate$d,
      params: params$a
  };

  var validate$c = function (value, _a) {
      var length = _a.length;
      if (isNullOrUndefined(value)) {
          return false;
      }
      if (typeof value === 'string') {
          value = toArray(value);
      }
      if (typeof value === 'number') {
          value = String(value);
      }
      if (!value.length) {
          value = toArray(value);
      }
      return value.length === length;
  };
  var params$9 = [
      {
          name: 'length',
          cast: function (value) { return Number(value); }
      }
  ];
  var length = {
      validate: validate$c,
      params: params$9
  };

  var validate$b = function (value, _a) {
      var length = _a.length;
      if (isNullOrUndefined(value)) {
          return length >= 0;
      }
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$b(val, { length: length }); });
      }
      return String(value).length <= length;
  };
  var params$8 = [
      {
          name: 'length',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var max = {
      validate: validate$b,
      params: params$8
  };

  var validate$a = function (value, _a) {
      var max = _a.max;
      if (isNullOrUndefined(value) || value === '') {
          return false;
      }
      if (Array.isArray(value)) {
          return value.length > 0 && value.every(function (val) { return validate$a(val, { max: max }); });
      }
      return Number(value) <= max;
  };
  var params$7 = [
      {
          name: 'max',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var max_value = {
      validate: validate$a,
      params: params$7
  };

  var validate$9 = function (files, mimes) {
      var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');
      if (Array.isArray(files)) {
          return files.every(function (file) { return regex.test(file.type); });
      }
      return regex.test(files.type);
  };
  var mimes = {
      validate: validate$9
  };

  var validate$8 = function (value, _a) {
      var length = _a.length;
      if (isNullOrUndefined(value)) {
          return false;
      }
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$8(val, { length: length }); });
      }
      return String(value).length >= length;
  };
  var params$6 = [
      {
          name: 'length',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var min = {
      validate: validate$8,
      params: params$6
  };

  var validate$7 = function (value, _a) {
      var min = _a.min;
      if (isNullOrUndefined(value) || value === '') {
          return false;
      }
      if (Array.isArray(value)) {
          return value.length > 0 && value.every(function (val) { return validate$7(val, { min: min }); });
      }
      return Number(value) >= min;
  };
  var params$5 = [
      {
          name: 'min',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var min_value = {
      validate: validate$7,
      params: params$5
  };

  var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
  var en = /^[0-9]+$/;
  var validate$6 = function (value) {
      var testValue = function (val) {
          var strValue = String(val);
          return en.test(strValue) || ar.test(strValue);
      };
      if (Array.isArray(value)) {
          return value.every(testValue);
      }
      return testValue(value);
  };
  var numeric = {
      validate: validate$6
  };

  var validate$5 = function (value, _a) {
      var regex = _a.regex;
      if (Array.isArray(value)) {
          return value.every(function (val) { return validate$5(val, { regex: regex }); });
      }
      return regex.test(String(value));
  };
  var params$4 = [
      {
          name: 'regex',
          cast: function (value) {
              if (typeof value === 'string') {
                  return new RegExp(value);
              }
              return value;
          }
      }
  ];
  var regex = {
      validate: validate$5,
      params: params$4
  };

  var validate$4 = function (value, _a) {
      var allowFalse = (_a === void 0 ? { allowFalse: true } : _a).allowFalse;
      var result = {
          valid: false,
          required: true
      };
      if (isNullOrUndefined(value) || isEmptyArray(value)) {
          return result;
      }
      // incase a field considers `false` as an empty value like checkboxes.
      if (value === false && !allowFalse) {
          return result;
      }
      result.valid = !!String(value).trim().length;
      return result;
  };
  var computesRequired$1 = true;
  var params$3 = [
      {
          name: 'allowFalse',
          default: true
      }
  ];
  var required = {
      validate: validate$4,
      params: params$3,
      computesRequired: computesRequired$1
  };

  var testEmpty = function (value) {
      return isEmptyArray(value) || includes([false, null, undefined], value) || !String(value).trim().length;
  };
  var validate$3 = function (value, _a) {
      var target = _a.target, values = _a.values;
      var required;
      if (values && values.length) {
          if (!Array.isArray(values) && typeof values === 'string') {
              values = [values];
          }
          // eslint-disable-next-line
          required = values.some(function (val) { return val == String(target).trim(); });
      }
      else {
          required = !testEmpty(target);
      }
      if (!required) {
          return {
              valid: true,
              required: required
          };
      }
      return {
          valid: !testEmpty(value),
          required: required
      };
  };
  var params$2 = [
      {
          name: 'target',
          isTarget: true
      },
      {
          name: 'values'
      }
  ];
  var computesRequired = true;
  var required_if = {
      validate: validate$3,
      params: params$2,
      computesRequired: computesRequired
  };

  var validate$2 = function (files, _a) {
      var size = _a.size;
      if (isNaN(size)) {
          return false;
      }
      var nSize = size * 1024;
      if (!Array.isArray(files)) {
          return files.size <= nSize;
      }
      for (var i = 0; i < files.length; i++) {
          if (files[i].size > nSize) {
              return false;
          }
      }
      return true;
  };
  var params$1 = [
      {
          name: 'size',
          cast: function (value) {
              return Number(value);
          }
      }
  ];
  var size = {
      validate: validate$2,
      params: params$1
  };

  var validate$1 = function (value, params) {
      var _a = params || {}, _b = _a.decimals, decimals = _b === void 0 ? 0 : _b, _c = _a.separator, separator = _c === void 0 ? 'dot' : _c;
      var delimiterRegexPart = separator === 'comma' ? ',?' : '\\.?';
      var decimalRegexPart = decimals === 0 ? '\\d*' : "(\\d{" + decimals + "})?";
      var regex = new RegExp("^-?\\d+" + delimiterRegexPart + decimalRegexPart + "$");
      return Array.isArray(value) ? value.every(function (val) { return regex.test(String(val)); }) : regex.test(String(value));
  };
  var params = [
      {
          name: 'decimals',
          default: 0
      },
      {
          name: 'separator',
          default: 'dot'
      }
  ];
  var double = {
      validate: validate$1,
      params: params
  };

  /* eslint-disable camelcase */

  var Rules = /*#__PURE__*/Object.freeze({
    __proto__: null,
    alpha_dash: alpha_dash,
    alpha_num: alpha_num,
    alpha_spaces: alpha_spaces,
    alpha: alpha,
    between: between,
    confirmed: confirmed,
    digits: digits,
    dimensions: dimensions,
    email: email,
    ext: ext,
    image: image,
    oneOf: oneOf,
    integer: integer,
    length: length,
    is_not: is_not,
    is: is,
    max: max,
    max_value: max_value,
    mimes: mimes,
    min: min,
    min_value: min_value,
    excluded: excluded,
    numeric: numeric,
    regex: regex,
    required: required,
    required_if: required_if,
    size: size,
    double: double
  });

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }

  var DEFAULT_CONFIG = {
      defaultMessage: "{_field_} is not valid.",
      skipOptional: true,
      classes: {
          touched: 'touched',
          untouched: 'untouched',
          valid: 'valid',
          invalid: 'invalid',
          pristine: 'pristine',
          dirty: 'dirty' // control has been interacted with
      },
      bails: true,
      mode: 'aggressive',
      useConstraintAttrs: true
  };
  var currentConfig = __assign({}, DEFAULT_CONFIG);
  var getConfig = function () { return currentConfig; };
  var setConfig = function (newConf) {
      currentConfig = __assign(__assign({}, currentConfig), newConf);
  };
  var configure = function (cfg) {
      setConfig(cfg);
  };

  var EVENT_BUS = new Vue__default['default']();
  function localeChanged() {
      EVENT_BUS.$emit('change:locale');
  }

  var Dictionary = /** @class */ (function () {
      function Dictionary(locale, dictionary) {
          this.container = {};
          this.locale = locale;
          this.merge(dictionary);
      }
      Dictionary.prototype.resolve = function (field, rule, values) {
          return this.format(this.locale, field, rule, values);
      };
      Dictionary.prototype.format = function (locale, field, rule, values) {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          var message;
          // find if specific message for that field was specified.
          var fieldContainer = (_c = (_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[field]) === null || _c === void 0 ? void 0 : _c[rule];
          var messageContainer = (_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e[rule];
          message = fieldContainer || messageContainer || '';
          if (!message) {
              message = '{_field_} is not valid';
          }
          field = (_h = (_g = (_f = this.container[locale]) === null || _f === void 0 ? void 0 : _f.names) === null || _g === void 0 ? void 0 : _g[field]) !== null && _h !== void 0 ? _h : field;
          return isCallable(message) ? message(field, values) : interpolate(message, __assign(__assign({}, values), { _field_: field }));
      };
      Dictionary.prototype.merge = function (dictionary) {
          merge(this.container, dictionary);
      };
      Dictionary.prototype.hasRule = function (name) {
          var _a, _b;
          return !!((_b = (_a = this.container[this.locale]) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 : _b[name]);
      };
      return Dictionary;
  }());
  var DICTIONARY;
  function localize(locale, dictionary) {
      var _a;
      if (!DICTIONARY) {
          DICTIONARY = new Dictionary('en', {});
          setConfig({
              defaultMessage: function (field, values) {
                  return DICTIONARY.resolve(field, values === null || values === void 0 ? void 0 : values._rule_, values || {});
              }
          });
      }
      if (typeof locale === 'string') {
          DICTIONARY.locale = locale;
          if (dictionary) {
              DICTIONARY.merge((_a = {}, _a[locale] = dictionary, _a));
          }
          localeChanged();
          return;
      }
      DICTIONARY.merge(locale);
  }

  var RULES = {};
  function normalizeSchema(schema) {
      var _a;
      if ((_a = schema.params) === null || _a === void 0 ? void 0 : _a.length) {
          schema.params = schema.params.map(function (param) {
              if (typeof param === 'string') {
                  return { name: param };
              }
              return param;
          });
      }
      return schema;
  }
  var RuleContainer = /** @class */ (function () {
      function RuleContainer() {
      }
      RuleContainer.extend = function (name, schema) {
          // if rule already exists, overwrite it.
          var rule = normalizeSchema(schema);
          if (RULES[name]) {
              RULES[name] = merge(RULES[name], schema);
              return;
          }
          RULES[name] = __assign({ lazy: false, computesRequired: false }, rule);
      };
      RuleContainer.isLazy = function (name) {
          var _a;
          return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.lazy);
      };
      RuleContainer.isRequireRule = function (name) {
          var _a;
          return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.computesRequired);
      };
      RuleContainer.getRuleDefinition = function (ruleName) {
          return RULES[ruleName];
      };
      return RuleContainer;
  }());
  /**
   * Adds a custom validator to the list of validation rules.
   */
  function extend(name, schema) {
      // makes sure new rules are properly formatted.
      guardExtend(name, schema);
      // Full schema object.
      if (typeof schema === 'object') {
          RuleContainer.extend(name, schema);
          return;
      }
      RuleContainer.extend(name, {
          validate: schema
      });
  }
  /**
   * Guards from extension violations.
   */
  function guardExtend(name, validator) {
      if (isCallable(validator)) {
          return;
      }
      if (isCallable(validator.validate)) {
          return;
      }
      if (RuleContainer.getRuleDefinition(name)) {
          return;
      }
      throw new Error("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.");
  }

  var aggressive = function () { return ({
      on: ['input', 'blur']
  }); };
  var lazy = function () { return ({
      on: ['change', 'blur']
  }); };
  var eager = function (_a) {
      var errors = _a.errors;
      if (errors.length) {
          return {
              on: ['input', 'change']
          };
      }
      return {
          on: ['change', 'blur']
      };
  };
  var passive = function () { return ({
      on: []
  }); };
  var modes = {
      aggressive: aggressive,
      eager: eager,
      passive: passive,
      lazy: lazy
  };
  var setInteractionMode = function (mode, implementation) {
      setConfig({ mode: mode });
      if (!implementation) {
          return;
      }
      if (!isCallable(implementation)) {
          throw new Error('A mode implementation must be a function');
      }
      modes[mode] = implementation;
  };

  /**
   * Normalizes the given rules expression.
   */
  function normalizeRules(rules) {
      // if falsy value return an empty object.
      var acc = {};
      Object.defineProperty(acc, '_$$isNormalized', {
          value: true,
          writable: false,
          enumerable: false,
          configurable: false
      });
      if (!rules) {
          return acc;
      }
      // Object is already normalized, skip.
      if (isObject(rules) && rules._$$isNormalized) {
          return rules;
      }
      if (isObject(rules)) {
          return Object.keys(rules).reduce(function (prev, curr) {
              var params = [];
              if (rules[curr] === true) {
                  params = [];
              }
              else if (Array.isArray(rules[curr])) {
                  params = rules[curr];
              }
              else if (isObject(rules[curr])) {
                  params = rules[curr];
              }
              else {
                  params = [rules[curr]];
              }
              if (rules[curr] !== false) {
                  prev[curr] = buildParams(curr, params);
              }
              return prev;
          }, acc);
      }
      /* istanbul ignore if */
      if (typeof rules !== 'string') {
          warn('rules must be either a string or an object.');
          return acc;
      }
      return rules.split('|').reduce(function (prev, rule) {
          var parsedRule = parseRule(rule);
          if (!parsedRule.name) {
              return prev;
          }
          prev[parsedRule.name] = buildParams(parsedRule.name, parsedRule.params);
          return prev;
      }, acc);
  }
  function buildParams(ruleName, provided) {
      var ruleSchema = RuleContainer.getRuleDefinition(ruleName);
      if (!ruleSchema) {
          return provided;
      }
      var params = {};
      if (!ruleSchema.params && !Array.isArray(provided)) {
          throw new Error('You provided an object params to a rule that has no defined schema.');
      }
      // Rule probably uses an array for their args, keep it as is.
      if (Array.isArray(provided) && !ruleSchema.params) {
          return provided;
      }
      var definedParams;
      // collect the params schema.
      if (!ruleSchema.params || (ruleSchema.params.length < provided.length && Array.isArray(provided))) {
          var lastDefinedParam_1;
          // collect any additional parameters in the last item.
          definedParams = provided.map(function (_, idx) {
              var _a;
              var param = (_a = ruleSchema.params) === null || _a === void 0 ? void 0 : _a[idx];
              lastDefinedParam_1 = param || lastDefinedParam_1;
              if (!param) {
                  param = lastDefinedParam_1;
              }
              return param;
          });
      }
      else {
          definedParams = ruleSchema.params;
      }
      // Match the provided array length with a temporary schema.
      for (var i = 0; i < definedParams.length; i++) {
          var options = definedParams[i];
          var value = options.default;
          // if the provided is an array, map element value.
          if (Array.isArray(provided)) {
              if (i in provided) {
                  value = provided[i];
              }
          }
          else {
              // If the param exists in the provided object.
              if (options.name in provided) {
                  value = provided[options.name];
                  // if the provided is the first param value.
              }
              else if (definedParams.length === 1) {
                  value = provided;
              }
          }
          // if the param is a target, resolve the target value.
          if (options.isTarget) {
              value = createLocator(value, options.cast);
          }
          // A target param using interpolation
          if (typeof value === 'string' && value[0] === '@') {
              value = createLocator(value.slice(1), options.cast);
          }
          // If there is a transformer defined.
          if (!isLocator(value) && options.cast) {
              value = options.cast(value);
          }
          // already been set, probably multiple values.
          if (params[options.name]) {
              params[options.name] = Array.isArray(params[options.name]) ? params[options.name] : [params[options.name]];
              params[options.name].push(value);
          }
          else {
              // set the value.
              params[options.name] = value;
          }
      }
      return params;
  }
  /**
   * Parses a rule string expression.
   */
  var parseRule = function (rule) {
      var params = [];
      var name = rule.split(':')[0];
      if (includes(rule, ':')) {
          params = rule
              .split(':')
              .slice(1)
              .join(':')
              .split(',');
      }
      return { name: name, params: params };
  };
  function createLocator(value, castFn) {
      var locator = function (crossTable) {
          var val = crossTable[value];
          return castFn ? castFn(val) : val;
      };
      locator.__locatorRef = value;
      return locator;
  }
  function extractLocators(params) {
      if (Array.isArray(params)) {
          return params.filter(function (param) {
              return isLocator(param) || (typeof param === 'string' && param[0] === '@');
          });
      }
      return Object.keys(params)
          .filter(function (key) { return isLocator(params[key]); })
          .map(function (key) { return params[key]; });
  }

  /**
   * Validates a value against the rules.
   */
  function validate(value, rules, options) {
      if (options === void 0) { options = {}; }
      return __awaiter(this, void 0, void 0, function () {
          var shouldBail, skipIfEmpty, field, result, errors, failedRules, regenerateMap;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      shouldBail = options === null || options === void 0 ? void 0 : options.bails;
                      skipIfEmpty = options === null || options === void 0 ? void 0 : options.skipIfEmpty;
                      field = {
                          name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
                          rules: normalizeRules(rules),
                          bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
                          skipIfEmpty: skipIfEmpty !== null && skipIfEmpty !== void 0 ? skipIfEmpty : true,
                          forceRequired: false,
                          crossTable: (options === null || options === void 0 ? void 0 : options.values) || {},
                          names: (options === null || options === void 0 ? void 0 : options.names) || {},
                          customMessages: (options === null || options === void 0 ? void 0 : options.customMessages) || {}
                      };
                      return [4 /*yield*/, _validate(field, value, options)];
                  case 1:
                      result = _a.sent();
                      errors = [];
                      failedRules = {};
                      regenerateMap = {};
                      result.errors.forEach(function (e) {
                          var msg = e.msg();
                          errors.push(msg);
                          failedRules[e.rule] = msg;
                          regenerateMap[e.rule] = e.msg;
                      });
                      return [2 /*return*/, {
                              valid: result.valid,
                              required: result.required,
                              errors: errors,
                              failedRules: failedRules,
                              regenerateMap: regenerateMap
                          }];
              }
          });
      });
  }
  /**
   * Starts the validation process.
   */
  function _validate(field, value, _a) {
      var _b = (_a === void 0 ? {} : _a).isInitial, isInitial = _b === void 0 ? false : _b;
      return __awaiter(this, void 0, void 0, function () {
          var _c, shouldSkip, required, errors, rules, length, i, rule, result;
          return __generator(this, function (_d) {
              switch (_d.label) {
                  case 0: return [4 /*yield*/, _shouldSkip(field, value)];
                  case 1:
                      _c = _d.sent(), shouldSkip = _c.shouldSkip, required = _c.required, errors = _c.errors;
                      if (shouldSkip) {
                          return [2 /*return*/, {
                                  valid: !errors.length,
                                  required: required,
                                  errors: errors
                              }];
                      }
                      rules = Object.keys(field.rules).filter(function (rule) { return !RuleContainer.isRequireRule(rule); });
                      length = rules.length;
                      i = 0;
                      _d.label = 2;
                  case 2:
                      if (!(i < length)) return [3 /*break*/, 5];
                      if (isInitial && RuleContainer.isLazy(rules[i])) {
                          return [3 /*break*/, 4];
                      }
                      rule = rules[i];
                      return [4 /*yield*/, _test(field, value, {
                              name: rule,
                              params: field.rules[rule]
                          })];
                  case 3:
                      result = _d.sent();
                      if (!result.valid && result.error) {
                          errors.push(result.error);
                          if (field.bails) {
                              return [2 /*return*/, {
                                      valid: false,
                                      required: required,
                                      errors: errors
                                  }];
                          }
                      }
                      _d.label = 4;
                  case 4:
                      i++;
                      return [3 /*break*/, 2];
                  case 5: return [2 /*return*/, {
                          valid: !errors.length,
                          required: required,
                          errors: errors
                      }];
              }
          });
      });
  }
  function _shouldSkip(field, value) {
      return __awaiter(this, void 0, void 0, function () {
          var requireRules, length, errors, isEmpty, isEmptyAndOptional, isRequired, i, rule, result;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      requireRules = Object.keys(field.rules).filter(RuleContainer.isRequireRule);
                      length = requireRules.length;
                      errors = [];
                      isEmpty = isNullOrUndefined(value) || value === '' || isEmptyArray(value);
                      isEmptyAndOptional = isEmpty && field.skipIfEmpty;
                      i = 0;
                      _a.label = 1;
                  case 1:
                      if (!(i < length)) return [3 /*break*/, 4];
                      rule = requireRules[i];
                      return [4 /*yield*/, _test(field, value, {
                              name: rule,
                              params: field.rules[rule]
                          })];
                  case 2:
                      result = _a.sent();
                      if (!isObject(result)) {
                          throw new Error('Require rules has to return an object (see docs)');
                      }
                      if (result.required !== undefined) {
                          isRequired = result.required;
                      }
                      if (!result.valid && result.error) {
                          errors.push(result.error);
                          // Exit early as the field is required and failed validation.
                          if (field.bails) {
                              return [2 /*return*/, {
                                      shouldSkip: true,
                                      required: result.required,
                                      errors: errors
                                  }];
                          }
                      }
                      _a.label = 3;
                  case 3:
                      i++;
                      return [3 /*break*/, 1];
                  case 4:
                      if (isEmpty && !isRequired && !field.skipIfEmpty) {
                          return [2 /*return*/, {
                                  shouldSkip: false,
                                  required: isRequired,
                                  errors: errors
                              }];
                      }
                      // field is configured to run through the pipeline regardless
                      if (!field.bails && !isEmptyAndOptional) {
                          return [2 /*return*/, {
                                  shouldSkip: false,
                                  required: isRequired,
                                  errors: errors
                              }];
                      }
                      // skip if the field is not required and has an empty value.
                      return [2 /*return*/, {
                              shouldSkip: !isRequired && isEmpty,
                              required: isRequired,
                              errors: errors
                          }];
              }
          });
      });
  }
  /**
   * Tests a single input value against a rule.
   */
  function _test(field, value, rule) {
      return __awaiter(this, void 0, void 0, function () {
          var ruleSchema, normalizedValue, params, result, values_1;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      ruleSchema = RuleContainer.getRuleDefinition(rule.name);
                      if (!ruleSchema || !ruleSchema.validate) {
                          throw new Error("No such validator '" + rule.name + "' exists.");
                      }
                      normalizedValue = ruleSchema.castValue ? ruleSchema.castValue(value) : value;
                      params = fillTargetValues(rule.params, field.crossTable);
                      return [4 /*yield*/, ruleSchema.validate(normalizedValue, params)];
                  case 1:
                      result = _a.sent();
                      if (typeof result === 'string') {
                          values_1 = __assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: rule.name });
                          return [2 /*return*/, {
                                  valid: false,
                                  error: { rule: rule.name, msg: function () { return interpolate(result, values_1); } }
                              }];
                      }
                      if (!isObject(result)) {
                          result = { valid: result };
                      }
                      return [2 /*return*/, {
                              valid: result.valid,
                              required: result.required,
                              error: result.valid ? undefined : _generateFieldError(field, value, ruleSchema, rule.name, params)
                          }];
              }
          });
      });
  }
  /**
   * Generates error messages.
   */
  function _generateFieldError(field, value, ruleSchema, ruleName, params) {
      var _a;
      var message = (_a = field.customMessages[ruleName]) !== null && _a !== void 0 ? _a : ruleSchema.message;
      var ruleTargets = _getRuleTargets(field, ruleSchema, ruleName);
      var _b = _getUserTargets(field, ruleSchema, ruleName, message), userTargets = _b.userTargets, userMessage = _b.userMessage;
      var values = __assign(__assign(__assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: ruleName }), ruleTargets), userTargets);
      return {
          msg: function () { return _normalizeMessage(userMessage || getConfig().defaultMessage, field.name, values); },
          rule: ruleName
      };
  }
  function _getRuleTargets(field, ruleSchema, ruleName) {
      var params = ruleSchema.params;
      if (!params) {
          return {};
      }
      var numTargets = params.filter(function (param) { return param.isTarget; }).length;
      if (numTargets <= 0) {
          return {};
      }
      var names = {};
      var ruleConfig = field.rules[ruleName];
      if (!Array.isArray(ruleConfig) && isObject(ruleConfig)) {
          ruleConfig = params.map(function (param) {
              return ruleConfig[param.name];
          });
      }
      for (var index = 0; index < params.length; index++) {
          var param = params[index];
          var key = ruleConfig[index];
          if (!isLocator(key)) {
              continue;
          }
          key = key.__locatorRef;
          var name_1 = field.names[key] || key;
          names[param.name] = name_1;
          names["_" + param.name + "_"] = field.crossTable[key];
      }
      return names;
  }
  function _getUserTargets(field, ruleSchema, ruleName, userMessage) {
      var userTargets = {};
      var rules = field.rules[ruleName];
      var params = ruleSchema.params || [];
      // early return if no rules
      if (!rules) {
          return {};
      }
      // check all rules to convert targets
      Object.keys(rules).forEach(function (key, index) {
          // get the rule
          var rule = rules[key];
          if (!isLocator(rule)) {
              return {};
          }
          // get associated parameter
          var param = params[index];
          if (!param) {
              return {};
          }
          // grab the name of the target
          var name = rule.__locatorRef;
          userTargets[param.name] = field.names[name] || name;
          userTargets["_" + param.name + "_"] = field.crossTable[name];
      });
      return {
          userTargets: userTargets,
          userMessage: userMessage
      };
  }
  function _normalizeMessage(template, field, values) {
      if (typeof template === 'function') {
          return template(field, values);
      }
      return interpolate(template, __assign(__assign({}, values), { _field_: field }));
  }
  function fillTargetValues(params, crossTable) {
      if (Array.isArray(params)) {
          return params.map(function (param) {
              var targetPart = typeof param === 'string' && param[0] === '@' ? param.slice(1) : param;
              if (targetPart in crossTable) {
                  return crossTable[targetPart];
              }
              return param;
          });
      }
      var values = {};
      var normalize = function (value) {
          if (isLocator(value)) {
              return value(crossTable);
          }
          return value;
      };
      Object.keys(params).forEach(function (param) {
          values[param] = normalize(params[param]);
      });
      return values;
  }

  // do not edit .js files directly - edit src/index.jst



  var fastDeepEqual = function equal(a, b) {
    if (a === b) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (a.constructor !== b.constructor) return false;

      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (!equal(a[i], b[i])) return false;
        return true;
      }



      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;

      for (i = length; i-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

      for (i = length; i-- !== 0;) {
        var key = keys[i];

        if (!equal(a[key], b[key])) return false;
      }

      return true;
    }

    // true if both NaN, false otherwise
    return a!==a && b!==b;
  };

  var isEvent = function (evt) {
      if (!evt) {
          return false;
      }
      if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
          return true;
      }
      // this is for IE
      /* istanbul ignore next */
      if (evt && evt.srcElement) {
          return true;
      }
      return false;
  };
  function normalizeEventValue(value) {
      var _a, _b;
      if (!isEvent(value)) {
          return value;
      }
      var input = value.target;
      if (input.type === 'file' && input.files) {
          return toArray(input.files);
      }
      // If the input has a `v-model.number` modifier applied.
      if ((_a = input._vModifiers) === null || _a === void 0 ? void 0 : _a.number) {
          // as per the spec the v-model.number uses parseFloat
          var valueAsNumber = parseFloat(input.value);
          if (isNaN$1(valueAsNumber)) {
              return input.value;
          }
          return valueAsNumber;
      }
      if ((_b = input._vModifiers) === null || _b === void 0 ? void 0 : _b.trim) {
          var trimmedValue = typeof input.value === 'string' ? input.value.trim() : input.value;
          return trimmedValue;
      }
      return input.value;
  }

  var isTextInput = function (vnode) {
      var _a;
      var attrs = ((_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs) || vnode.elm;
      // it will fallback to being a text input per browsers spec.
      if (vnode.tag === 'input' && (!attrs || !attrs.type)) {
          return true;
      }
      if (vnode.tag === 'textarea') {
          return true;
      }
      return includes(['text', 'password', 'search', 'email', 'tel', 'url', 'number'], attrs === null || attrs === void 0 ? void 0 : attrs.type);
  };
  // export const isCheckboxOrRadioInput = (vnode: VNode): boolean => {
  //   const attrs = (vnode.data && vnode.data.attrs) || vnode.elm;
  //   return includes(['radio', 'checkbox'], attrs && attrs.type);
  // };
  // Gets the model object on the vnode.
  function findModel(vnode) {
      if (!vnode.data) {
          return undefined;
      }
      // Component Model
      // THIS IS NOT TYPED IN OFFICIAL VUE TYPINGS
      // eslint-disable-next-line
      var nonStandardVNodeData = vnode.data;
      if ('model' in nonStandardVNodeData) {
          return nonStandardVNodeData.model;
      }
      if (!vnode.data.directives) {
          return undefined;
      }
      return find(vnode.data.directives, function (d) { return d.name === 'model'; });
  }
  function findValue(vnode) {
      var _a, _b;
      var model = findModel(vnode);
      if (model) {
          return { value: model.value };
      }
      var config = findModelConfig(vnode);
      var prop = (config === null || config === void 0 ? void 0 : config.prop) || 'value';
      if (((_a = vnode.componentOptions) === null || _a === void 0 ? void 0 : _a.propsData) && prop in vnode.componentOptions.propsData) {
          var propsDataWithValue = vnode.componentOptions.propsData;
          return { value: propsDataWithValue[prop] };
      }
      if (((_b = vnode.data) === null || _b === void 0 ? void 0 : _b.domProps) && 'value' in vnode.data.domProps) {
          return { value: vnode.data.domProps.value };
      }
      return undefined;
  }
  function extractChildren(vnode) {
      if (Array.isArray(vnode)) {
          return vnode;
      }
      if (Array.isArray(vnode.children)) {
          return vnode.children;
      }
      /* istanbul ignore next */
      if (vnode.componentOptions && Array.isArray(vnode.componentOptions.children)) {
          return vnode.componentOptions.children;
      }
      return [];
  }
  function findInputNodes(vnode) {
      if (!Array.isArray(vnode) && findValue(vnode) !== undefined) {
          return [vnode];
      }
      var children = extractChildren(vnode);
      return children.reduce(function (nodes, node) {
          var candidates = findInputNodes(node);
          if (candidates.length) {
              nodes.push.apply(nodes, candidates);
          }
          return nodes;
      }, []);
  }
  // Resolves v-model config if exists.
  function findModelConfig(vnode) {
      /* istanbul ignore next */
      if (!vnode.componentOptions)
          return null;
      // This is also not typed in the standard Vue TS.
      return vnode.componentOptions.Ctor.options.model;
  }
  // Adds a listener to vnode listener object.
  function mergeVNodeListeners(obj, eventName, handler) {
      // no listener at all.
      if (isNullOrUndefined(obj[eventName])) {
          obj[eventName] = [handler];
          return;
      }
      // Is an invoker.
      if (isCallable(obj[eventName]) && obj[eventName].fns) {
          var invoker = obj[eventName];
          invoker.fns = Array.isArray(invoker.fns) ? invoker.fns : [invoker.fns];
          if (!includes(invoker.fns, handler)) {
              invoker.fns.push(handler);
          }
          return;
      }
      if (isCallable(obj[eventName])) {
          var prev = obj[eventName];
          obj[eventName] = [prev];
      }
      if (Array.isArray(obj[eventName]) && !includes(obj[eventName], handler)) {
          obj[eventName].push(handler);
      }
  }
  // Adds a listener to a native HTML vnode.
  function addNativeNodeListener(node, eventName, handler) {
      /* istanbul ignore next */
      if (!node.data) {
          node.data = {};
      }
      if (isNullOrUndefined(node.data.on)) {
          node.data.on = {};
      }
      mergeVNodeListeners(node.data.on, eventName, handler);
  }
  // Adds a listener to a Vue component vnode.
  function addComponentNodeListener(node, eventName, handler) {
      /* istanbul ignore next */
      if (!node.componentOptions) {
          return;
      }
      /* istanbul ignore next */
      if (!node.componentOptions.listeners) {
          node.componentOptions.listeners = {};
      }
      mergeVNodeListeners(node.componentOptions.listeners, eventName, handler);
  }
  function addVNodeListener(vnode, eventName, handler) {
      if (vnode.componentOptions) {
          addComponentNodeListener(vnode, eventName, handler);
          return;
      }
      addNativeNodeListener(vnode, eventName, handler);
  }
  // Determines if `change` should be used over `input` for listeners.
  function getInputEventName(vnode, model) {
      var _a;
      // Is a component.
      if (vnode.componentOptions) {
          var event_1 = (findModelConfig(vnode) || { event: 'input' }).event;
          return event_1;
      }
      // Lazy Models typically use change event
      if ((_a = model === null || model === void 0 ? void 0 : model.modifiers) === null || _a === void 0 ? void 0 : _a.lazy) {
          return 'change';
      }
      // is a textual-type input.
      if (isTextInput(vnode)) {
          return 'input';
      }
      return 'change';
  }
  function isHTMLNode(node) {
      return includes(['input', 'select', 'textarea'], node.tag);
  }
  // TODO: Type this one properly.
  function normalizeSlots(slots, ctx) {
      var acc = [];
      return Object.keys(slots).reduce(function (arr, key) {
          slots[key].forEach(function (vnode) {
              if (!vnode.context) {
                  slots[key].context = ctx;
                  if (!vnode.data) {
                      vnode.data = {};
                  }
                  vnode.data.slot = key;
              }
          });
          return arr.concat(slots[key]);
      }, acc);
  }
  function resolveTextualRules(vnode) {
      var _a;
      var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
      var rules = {};
      if (!attrs)
          return rules;
      if (attrs.type === 'email' && RuleContainer.getRuleDefinition('email')) {
          rules.email = ['multiple' in attrs];
      }
      if (attrs.pattern && RuleContainer.getRuleDefinition('regex')) {
          rules.regex = attrs.pattern;
      }
      if (attrs.maxlength >= 0 && RuleContainer.getRuleDefinition('max')) {
          rules.max = attrs.maxlength;
      }
      if (attrs.minlength >= 0 && RuleContainer.getRuleDefinition('min')) {
          rules.min = attrs.minlength;
      }
      if (attrs.type === 'number') {
          if (isSpecified(attrs.min) && RuleContainer.getRuleDefinition('min_value')) {
              rules.min_value = Number(attrs.min);
          }
          if (isSpecified(attrs.max) && RuleContainer.getRuleDefinition('max_value')) {
              rules.max_value = Number(attrs.max);
          }
      }
      return rules;
  }
  function resolveRules(vnode) {
      var _a;
      var htmlTags = ['input', 'select', 'textarea'];
      var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
      if (!includes(htmlTags, vnode.tag) || !attrs) {
          return {};
      }
      var rules = {};
      if ('required' in attrs && attrs.required !== false && RuleContainer.getRuleDefinition('required')) {
          rules.required = attrs.type === 'checkbox' ? [true] : true;
      }
      if (isTextInput(vnode)) {
          return normalizeRules(__assign(__assign({}, rules), resolveTextualRules(vnode)));
      }
      return normalizeRules(rules);
  }
  function normalizeChildren(context, slotProps) {
      if (context.$scopedSlots.default) {
          return context.$scopedSlots.default(slotProps) || [];
      }
      return context.$slots.default || [];
  }

  /**
   * Determines if a provider needs to run validation.
   */
  function shouldValidate(ctx, value) {
      // when an immediate/initial validation is needed and wasn't done before.
      if (!ctx._ignoreImmediate && ctx.immediate) {
          return true;
      }
      // when the value changes for whatever reason.
      if (!isRefEqual(ctx.value, value) && ctx.normalizedEvents.length) {
          return true;
      }
      // when it needs validation due to props/cross-fields changes.
      if (ctx._needsValidation) {
          return true;
      }
      // when the initial value is undefined and the field wasn't rendered yet.
      if (!ctx.initialized && value === undefined) {
          return true;
      }
      return false;
  }
  function createValidationCtx(ctx) {
      return __assign(__assign({}, ctx.flags), { errors: ctx.errors, classes: ctx.classes, failedRules: ctx.failedRules, reset: function () { return ctx.reset(); }, validate: function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
              }
              return ctx.validate.apply(ctx, args);
          }, ariaInput: {
              'aria-invalid': ctx.flags.invalid ? 'true' : 'false',
              'aria-required': ctx.isRequired ? 'true' : 'false',
              'aria-errormessage': "vee_" + ctx.id
          }, ariaMsg: {
              id: "vee_" + ctx.id,
              'aria-live': ctx.errors.length ? 'assertive' : 'off'
          } });
  }
  function onRenderUpdate(vm, value) {
      if (!vm.initialized) {
          vm.initialValue = value;
      }
      var validateNow = shouldValidate(vm, value);
      vm._needsValidation = false;
      vm.value = value;
      vm._ignoreImmediate = true;
      if (!validateNow) {
          return;
      }
      var validate = function () {
          if (vm.immediate || vm.flags.validated) {
              return triggerThreadSafeValidation(vm);
          }
          vm.validateSilent();
      };
      if (vm.initialized) {
          validate();
          return;
      }
      vm.$once('hook:mounted', function () { return validate(); });
  }
  function computeModeSetting(ctx) {
      var compute = (isCallable(ctx.mode) ? ctx.mode : modes[ctx.mode]);
      return compute(ctx);
  }
  function triggerThreadSafeValidation(vm) {
      var pendingPromise = vm.validateSilent();
      // avoids race conditions between successive validations.
      vm._pendingValidation = pendingPromise;
      return pendingPromise.then(function (result) {
          if (pendingPromise === vm._pendingValidation) {
              vm.applyResult(result);
              vm._pendingValidation = undefined;
          }
          return result;
      });
  }
  // Creates the common handlers for a validatable context.
  function createCommonHandlers(vm) {
      if (!vm.$veeOnInput) {
          vm.$veeOnInput = function (e) {
              vm.syncValue(e); // track and keep the value updated.
              vm.setFlags({ dirty: true, pristine: false });
          };
      }
      var onInput = vm.$veeOnInput;
      if (!vm.$veeOnBlur) {
          vm.$veeOnBlur = function () {
              vm.setFlags({ touched: true, untouched: false });
          };
      }
      // Blur event listener.
      var onBlur = vm.$veeOnBlur;
      var onValidate = vm.$veeHandler;
      var mode = computeModeSetting(vm);
      // Handle debounce changes.
      if (!onValidate || vm.$veeDebounce !== vm.debounce) {
          onValidate = debounce(function () {
              vm.$nextTick(function () {
                  if (!vm._pendingReset) {
                      triggerThreadSafeValidation(vm);
                  }
                  vm._pendingReset = false;
              });
          }, mode.debounce || vm.debounce);
          // Cache the handler so we don't create it each time.
          vm.$veeHandler = onValidate;
          // cache the debounce value so we detect if it was changed.
          vm.$veeDebounce = vm.debounce;
      }
      return { onInput: onInput, onBlur: onBlur, onValidate: onValidate };
  }
  // Adds all plugin listeners to the vnode.
  function addListeners(vm, node) {
      var value = findValue(node);
      // cache the input eventName.
      vm._inputEventName = vm._inputEventName || getInputEventName(node, findModel(node));
      onRenderUpdate(vm, value === null || value === void 0 ? void 0 : value.value);
      var _a = createCommonHandlers(vm), onInput = _a.onInput, onBlur = _a.onBlur, onValidate = _a.onValidate;
      addVNodeListener(node, vm._inputEventName, onInput);
      addVNodeListener(node, 'blur', onBlur);
      // add the validation listeners.
      vm.normalizedEvents.forEach(function (evt) {
          addVNodeListener(node, evt, onValidate);
      });
      vm.initialized = true;
  }

  var PROVIDER_COUNTER = 0;
  function data$1() {
      var errors = [];
      var fieldName = '';
      var defaultValues = {
          errors: errors,
          value: undefined,
          initialized: false,
          initialValue: undefined,
          flags: createFlags(),
          failedRules: {},
          isActive: true,
          fieldName: fieldName,
          id: ''
      };
      return defaultValues;
  }
  var ValidationProvider = Vue__default['default'].extend({
      name: 'ValidationProvider',
      inject: {
          $_veeObserver: {
              from: '$_veeObserver',
              default: function () {
                  if (!this.$vnode.context.$_veeObserver) {
                      this.$vnode.context.$_veeObserver = createObserver();
                  }
                  return this.$vnode.context.$_veeObserver;
              }
          }
      },
      props: {
          vid: {
              type: String,
              default: ''
          },
          name: {
              type: String,
              default: null
          },
          mode: {
              type: [String, Function],
              default: function () {
                  return getConfig().mode;
              }
          },
          rules: {
              type: [Object, String],
              default: null
          },
          immediate: {
              type: Boolean,
              default: false
          },
          bails: {
              type: Boolean,
              default: function () { return getConfig().bails; }
          },
          skipIfEmpty: {
              type: Boolean,
              default: function () { return getConfig().skipOptional; }
          },
          debounce: {
              type: Number,
              default: 0
          },
          tag: {
              type: String,
              default: 'span'
          },
          slim: {
              type: Boolean,
              default: false
          },
          disabled: {
              type: Boolean,
              default: false
          },
          customMessages: {
              type: Object,
              default: function () {
                  return {};
              }
          },
          detectInput: {
              type: Boolean,
              default: true
          }
      },
      watch: {
          rules: {
              deep: true,
              handler: function (val, oldVal) {
                  this._needsValidation = !fastDeepEqual(val, oldVal);
              }
          }
      },
      data: data$1,
      computed: {
          fieldDeps: function () {
              var _this = this;
              return Object.keys(this.normalizedRules).reduce(function (acc, rule) {
                  var deps = extractLocators(_this.normalizedRules[rule]).map(function (dep) {
                      return isLocator(dep) ? dep.__locatorRef : dep.slice(1);
                  });
                  acc.push.apply(acc, deps);
                  deps.forEach(function (depName) {
                      watchCrossFieldDep(_this, depName);
                  });
                  return acc;
              }, []);
          },
          normalizedEvents: function () {
              var _this = this;
              var on = computeModeSetting(this).on;
              return (on || []).map(function (e) {
                  if (e === 'input') {
                      return _this._inputEventName;
                  }
                  return e;
              });
          },
          isRequired: function () {
              var rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
              var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
              this.flags.required = !!isRequired;
              return isRequired;
          },
          classes: function () {
              var names = getConfig().classes;
              return computeClassObj(names, this.flags);
          },
          normalizedRules: function () {
              return normalizeRules(this.rules);
          }
      },
      mounted: function () {
          var _this = this;
          var onLocaleChanged = function () {
              if (!_this.flags.validated) {
                  return;
              }
              var regenerateMap = _this._regenerateMap;
              if (regenerateMap) {
                  var errors_1 = [];
                  var failedRules_1 = {};
                  Object.keys(regenerateMap).forEach(function (rule) {
                      var msg = regenerateMap[rule]();
                      errors_1.push(msg);
                      failedRules_1[rule] = msg;
                  });
                  _this.applyResult({ errors: errors_1, failedRules: failedRules_1, regenerateMap: regenerateMap });
                  return;
              }
              _this.validate();
          };
          EVENT_BUS.$on('change:locale', onLocaleChanged);
          this.$on('hook:beforeDestroy', function () {
              EVENT_BUS.$off('change:locale', onLocaleChanged);
          });
      },
      render: function (h) {
          var _this = this;
          this.registerField();
          var ctx = createValidationCtx(this);
          var children = normalizeChildren(this, ctx);
          // Automatic v-model detection
          if (this.detectInput) {
              var inputs = findInputNodes(children);
              if (inputs.length) {
                  inputs.forEach(function (input, idx) {
                      var _a, _b, _c, _d, _e, _f;
                      // If the elements are not checkboxes and there are more input nodes
                      if (!includes(['checkbox', 'radio'], (_b = (_a = input.data) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.type) && idx > 0) {
                          return;
                      }
                      var resolved = getConfig().useConstraintAttrs ? resolveRules(input) : {};
                      if (!fastDeepEqual(_this._resolvedRules, resolved)) {
                          _this._needsValidation = true;
                      }
                      if (isHTMLNode(input)) {
                          _this.fieldName = ((_d = (_c = input.data) === null || _c === void 0 ? void 0 : _c.attrs) === null || _d === void 0 ? void 0 : _d.name) || ((_f = (_e = input.data) === null || _e === void 0 ? void 0 : _e.attrs) === null || _f === void 0 ? void 0 : _f.id);
                      }
                      _this._resolvedRules = resolved;
                      addListeners(_this, input);
                  });
              }
          }
          return this.slim && children.length <= 1 ? children[0] : h(this.tag, children);
      },
      beforeDestroy: function () {
          // cleanup reference.
          this.$_veeObserver.unobserve(this.id);
      },
      activated: function () {
          this.isActive = true;
      },
      deactivated: function () {
          this.isActive = false;
      },
      methods: {
          setFlags: function (flags) {
              var _this = this;
              Object.keys(flags).forEach(function (flag) {
                  _this.flags[flag] = flags[flag];
              });
          },
          syncValue: function (v) {
              var value = normalizeEventValue(v);
              this.value = value;
              this.flags.changed = !fastDeepEqual(this.initialValue, value);
          },
          reset: function () {
              var _this = this;
              this.errors = [];
              this.initialValue = this.value;
              var flags = createFlags();
              flags.required = this.isRequired;
              this.setFlags(flags);
              this.failedRules = {};
              this.validateSilent();
              this._pendingValidation = undefined;
              this._pendingReset = true;
              setTimeout(function () {
                  _this._pendingReset = false;
              }, this.debounce);
          },
          validate: function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
              }
              return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                      if (args.length > 0) {
                          this.syncValue(args[0]);
                      }
                      return [2 /*return*/, triggerThreadSafeValidation(this)];
                  });
              });
          },
          validateSilent: function () {
              return __awaiter(this, void 0, void 0, function () {
                  var rules, result;
                  return __generator(this, function (_a) {
                      switch (_a.label) {
                          case 0:
                              this.setFlags({ pending: true });
                              rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
                              Object.defineProperty(rules, '_$$isNormalized', {
                                  value: true,
                                  writable: false,
                                  enumerable: false,
                                  configurable: false
                              });
                              return [4 /*yield*/, validate(this.value, rules, __assign(__assign({ name: this.name || this.fieldName }, createLookup(this)), { bails: this.bails, skipIfEmpty: this.skipIfEmpty, isInitial: !this.initialized, customMessages: this.customMessages }))];
                          case 1:
                              result = _a.sent();
                              this.setFlags({
                                  pending: false,
                                  valid: result.valid,
                                  invalid: !result.valid
                              });
                              if (result.required !== undefined) {
                                  this.setFlags({
                                      required: result.required
                                  });
                              }
                              return [2 /*return*/, result];
                      }
                  });
              });
          },
          setErrors: function (errors) {
              this.applyResult({ errors: errors, failedRules: {} });
          },
          applyResult: function (_a) {
              var errors = _a.errors, failedRules = _a.failedRules, regenerateMap = _a.regenerateMap;
              this.errors = errors;
              this._regenerateMap = regenerateMap;
              this.failedRules = __assign({}, (failedRules || {}));
              this.setFlags({
                  valid: !errors.length,
                  passed: !errors.length,
                  invalid: !!errors.length,
                  failed: !!errors.length,
                  validated: true,
                  changed: !fastDeepEqual(this.value, this.initialValue)
              });
          },
          registerField: function () {
              updateRenderingContextRefs(this);
          },
          checkComputesRequiredState: function () {
              var rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
              var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
              return isRequired;
          }
      }
  });
  function computeClassObj(names, flags) {
      var acc = {};
      var keys = Object.keys(flags);
      var length = keys.length;
      var _loop_1 = function (i) {
          var flag = keys[i];
          var className = (names && names[flag]) || flag;
          var value = flags[flag];
          if (isNullOrUndefined(value)) {
              return "continue";
          }
          if ((flag === 'valid' || flag === 'invalid') && !flags.validated) {
              return "continue";
          }
          if (typeof className === 'string') {
              acc[className] = value;
          }
          else if (Array.isArray(className)) {
              className.forEach(function (cls) {
                  acc[cls] = value;
              });
          }
      };
      for (var i = 0; i < length; i++) {
          _loop_1(i);
      }
      return acc;
  }
  function createLookup(vm) {
      var providers = vm.$_veeObserver.refs;
      var reduced = {
          names: {},
          values: {}
      };
      return vm.fieldDeps.reduce(function (acc, depName) {
          if (!providers[depName]) {
              return acc;
          }
          acc.values[depName] = providers[depName].value;
          acc.names[depName] = providers[depName].name;
          return acc;
      }, reduced);
  }
  function extractId(vm) {
      if (vm.vid) {
          return vm.vid;
      }
      if (vm.name) {
          return vm.name;
      }
      if (vm.id) {
          return vm.id;
      }
      if (vm.fieldName) {
          return vm.fieldName;
      }
      PROVIDER_COUNTER++;
      return "_vee_" + PROVIDER_COUNTER;
  }
  function updateRenderingContextRefs(vm) {
      var providedId = extractId(vm);
      var id = vm.id;
      // Nothing has changed.
      if (!vm.isActive || (id === providedId && vm.$_veeObserver.refs[id])) {
          return;
      }
      // vid was changed.
      if (id !== providedId && vm.$_veeObserver.refs[id] === vm) {
          vm.$_veeObserver.unobserve(id);
      }
      vm.id = providedId;
      vm.$_veeObserver.observe(vm);
  }
  function createObserver() {
      return {
          refs: {},
          observe: function (vm) {
              this.refs[vm.id] = vm;
          },
          unobserve: function (id) {
              delete this.refs[id];
          }
      };
  }
  function watchCrossFieldDep(ctx, depName, withHooks) {
      if (withHooks === void 0) { withHooks = true; }
      var providers = ctx.$_veeObserver.refs;
      if (!ctx._veeWatchers) {
          ctx._veeWatchers = {};
      }
      if (!providers[depName] && withHooks) {
          return ctx.$once('hook:mounted', function () {
              watchCrossFieldDep(ctx, depName, false);
          });
      }
      if (!isCallable(ctx._veeWatchers[depName]) && providers[depName]) {
          ctx._veeWatchers[depName] = providers[depName].$watch('value', function () {
              var isComputesRequired = ctx.checkComputesRequiredState();
              if (ctx.flags.validated) {
                  ctx._needsValidation = true;
                  ctx.validate();
              }
              // Validate dependent field silently if it has rules with computesRequired
              if (isComputesRequired && !ctx.flags.validated) {
                  ctx.validateSilent();
              }
          });
      }
  }

  var FLAGS_STRATEGIES = [
      ['pristine', 'every'],
      ['dirty', 'some'],
      ['touched', 'some'],
      ['untouched', 'every'],
      ['valid', 'every'],
      ['invalid', 'some'],
      ['pending', 'some'],
      ['validated', 'every'],
      ['changed', 'some'],
      ['passed', 'every'],
      ['failed', 'some']
  ];
  var OBSERVER_COUNTER = 0;
  function data() {
      var refs = {};
      var errors = {};
      var flags = createObserverFlags();
      var fields = {};
      // FIXME: Not sure of this one can be typed, circular type reference.
      var observers = [];
      return {
          id: '',
          refs: refs,
          observers: observers,
          errors: errors,
          flags: flags,
          fields: fields
      };
  }
  function provideSelf() {
      return {
          $_veeObserver: this
      };
  }
  var ValidationObserver = Vue__default['default'].extend({
      name: 'ValidationObserver',
      provide: provideSelf,
      inject: {
          $_veeObserver: {
              from: '$_veeObserver',
              default: function () {
                  if (!this.$vnode.context.$_veeObserver) {
                      return null;
                  }
                  return this.$vnode.context.$_veeObserver;
              }
          }
      },
      props: {
          tag: {
              type: String,
              default: 'span'
          },
          vid: {
              type: String,
              default: function () {
                  return "obs_" + OBSERVER_COUNTER++;
              }
          },
          slim: {
              type: Boolean,
              default: false
          },
          disabled: {
              type: Boolean,
              default: false
          }
      },
      data: data,
      created: function () {
          var _this = this;
          this.id = this.vid;
          register(this);
          var onChange = debounce(function (_a) {
              var errors = _a.errors, flags = _a.flags, fields = _a.fields;
              _this.errors = errors;
              _this.flags = flags;
              _this.fields = fields;
          }, 16);
          this.$watch(computeObserverState, onChange);
      },
      activated: function () {
          register(this);
      },
      deactivated: function () {
          unregister(this);
      },
      beforeDestroy: function () {
          unregister(this);
      },
      render: function (h) {
          var children = normalizeChildren(this, prepareSlotProps(this));
          return this.slim && children.length <= 1 ? children[0] : h(this.tag, { on: this.$listeners }, children);
      },
      methods: {
          observe: function (subscriber, kind) {
              var _a;
              if (kind === void 0) { kind = 'provider'; }
              if (kind === 'observer') {
                  this.observers.push(subscriber);
                  return;
              }
              this.refs = __assign(__assign({}, this.refs), (_a = {}, _a[subscriber.id] = subscriber, _a));
          },
          unobserve: function (id, kind) {
              if (kind === void 0) { kind = 'provider'; }
              if (kind === 'provider') {
                  var provider = this.refs[id];
                  if (!provider) {
                      return;
                  }
                  this.$delete(this.refs, id);
                  return;
              }
              var idx = findIndex(this.observers, function (o) { return o.id === id; });
              if (idx !== -1) {
                  this.observers.splice(idx, 1);
              }
          },
          validateWithInfo: function (_a) {
              var _b = (_a === void 0 ? {} : _a).silent, silent = _b === void 0 ? false : _b;
              return __awaiter(this, void 0, void 0, function () {
                  var results, isValid, _c, errors, flags, fields;
                  return __generator(this, function (_d) {
                      switch (_d.label) {
                          case 0: return [4 /*yield*/, Promise.all(__spreadArrays(values(this.refs)
                                  .filter(function (r) { return !r.disabled; })
                                  .map(function (ref) { return ref[silent ? 'validateSilent' : 'validate']().then(function (r) { return r.valid; }); }), this.observers.filter(function (o) { return !o.disabled; }).map(function (obs) { return obs.validate({ silent: silent }); })))];
                          case 1:
                              results = _d.sent();
                              isValid = results.every(function (r) { return r; });
                              _c = computeObserverState.call(this), errors = _c.errors, flags = _c.flags, fields = _c.fields;
                              this.errors = errors;
                              this.flags = flags;
                              this.fields = fields;
                              return [2 /*return*/, {
                                      errors: errors,
                                      flags: flags,
                                      fields: fields,
                                      isValid: isValid
                                  }];
                      }
                  });
              });
          },
          validate: function (_a) {
              var _b = (_a === void 0 ? {} : _a).silent, silent = _b === void 0 ? false : _b;
              return __awaiter(this, void 0, void 0, function () {
                  var isValid;
                  return __generator(this, function (_c) {
                      switch (_c.label) {
                          case 0: return [4 /*yield*/, this.validateWithInfo({ silent: silent })];
                          case 1:
                              isValid = (_c.sent()).isValid;
                              return [2 /*return*/, isValid];
                      }
                  });
              });
          },
          handleSubmit: function (cb) {
              return __awaiter(this, void 0, void 0, function () {
                  var isValid;
                  return __generator(this, function (_a) {
                      switch (_a.label) {
                          case 0: return [4 /*yield*/, this.validate()];
                          case 1:
                              isValid = _a.sent();
                              if (!isValid || !cb) {
                                  return [2 /*return*/];
                              }
                              return [2 /*return*/, cb()];
                      }
                  });
              });
          },
          reset: function () {
              return __spreadArrays(values(this.refs), this.observers).forEach(function (ref) { return ref.reset(); });
          },
          setErrors: function (errors) {
              var _this = this;
              Object.keys(errors).forEach(function (key) {
                  var provider = _this.refs[key];
                  if (!provider)
                      return;
                  var errorArr = errors[key] || [];
                  errorArr = typeof errorArr === 'string' ? [errorArr] : errorArr;
                  provider.setErrors(errorArr);
              });
              this.observers.forEach(function (observer) {
                  observer.setErrors(errors);
              });
          }
      }
  });
  function unregister(vm) {
      if (vm.$_veeObserver) {
          vm.$_veeObserver.unobserve(vm.id, 'observer');
      }
  }
  function register(vm) {
      if (vm.$_veeObserver) {
          vm.$_veeObserver.observe(vm, 'observer');
      }
  }
  function prepareSlotProps(vm) {
      return __assign(__assign({}, vm.flags), { errors: vm.errors, fields: vm.fields, validate: vm.validate, validateWithInfo: vm.validateWithInfo, passes: vm.handleSubmit, handleSubmit: vm.handleSubmit, reset: vm.reset });
  }
  // Creates a modified version of validation flags
  function createObserverFlags() {
      return __assign(__assign({}, createFlags()), { valid: true, invalid: false });
  }
  function computeObserverState() {
      var vms = __spreadArrays(values(this.refs), this.observers.filter(function (o) { return !o.disabled; }));
      var errors = {};
      var flags = createObserverFlags();
      var fields = {};
      var length = vms.length;
      for (var i = 0; i < length; i++) {
          var vm = vms[i];
          // validation provider
          if (Array.isArray(vm.errors)) {
              errors[vm.id] = vm.errors;
              fields[vm.id] = __assign({ id: vm.id, name: vm.name, failedRules: vm.failedRules }, vm.flags);
              continue;
          }
          // Nested observer, merge errors and fields
          errors = __assign(__assign({}, errors), vm.errors);
          fields = __assign(__assign({}, fields), vm.fields);
      }
      FLAGS_STRATEGIES.forEach(function (_a) {
          var flag = _a[0], method = _a[1];
          flags[flag] = vms[method](function (vm) { return vm.flags[flag]; });
      });
      return { errors: errors, flags: flags, fields: fields };
  }

  function withValidation(component, mapProps) {
      var _a;
      if (mapProps === void 0) { mapProps = identity; }
      var options = 'options' in component ? component.options : component;
      var providerOpts = ValidationProvider.options;
      var hoc = {
          name: (options.name || 'AnonymousHoc') + "WithValidation",
          props: __assign({}, providerOpts.props),
          data: providerOpts.data,
          computed: __assign({}, providerOpts.computed),
          methods: __assign({}, providerOpts.methods),
          beforeDestroy: providerOpts.beforeDestroy,
          inject: providerOpts.inject
      };
      var eventName = ((_a = options === null || options === void 0 ? void 0 : options.model) === null || _a === void 0 ? void 0 : _a.event) || 'input';
      hoc.render = function (h) {
          var _a;
          this.registerField();
          var vctx = createValidationCtx(this);
          var listeners = __assign({}, this.$listeners);
          var model = findModel(this.$vnode);
          this._inputEventName = this._inputEventName || getInputEventName(this.$vnode, model);
          var value = findValue(this.$vnode);
          onRenderUpdate(this, value === null || value === void 0 ? void 0 : value.value);
          var _b = createCommonHandlers(this), onInput = _b.onInput, onBlur = _b.onBlur, onValidate = _b.onValidate;
          mergeVNodeListeners(listeners, eventName, onInput);
          mergeVNodeListeners(listeners, 'blur', onBlur);
          this.normalizedEvents.forEach(function (evt) {
              mergeVNodeListeners(listeners, evt, onValidate);
          });
          // Props are any attrs not associated with ValidationProvider Plus the model prop.
          // WARNING: Accidental prop overwrite will probably happen.
          var prop = (findModelConfig(this.$vnode) || { prop: 'value' }).prop;
          var props = __assign(__assign(__assign({}, this.$attrs), (_a = {}, _a[prop] = model === null || model === void 0 ? void 0 : model.value, _a)), mapProps(vctx));
          return h(options, {
              attrs: this.$attrs,
              props: props,
              on: listeners,
              scopedSlots: this.$scopedSlots
          }, normalizeSlots(this.$slots, this.$vnode.context));
      };
      return hoc;
  }

  var version = '3.4.14';
  // Install all rules.
  var RulesAsList = Object.keys(Rules).map(function (key) { return ({ schema: Rules[key], name: key }); });
  RulesAsList.forEach(function (_a) {
      var name = _a.name, schema = _a.schema;
      extend(name, schema);
  });
  // Install locale
  localize('en', en$1);

  exports.Rules = Rules;
  exports.ValidationObserver = ValidationObserver;
  exports.ValidationProvider = ValidationProvider;
  exports.configure = configure;
  exports.extend = extend;
  exports.localeChanged = localeChanged;
  exports.localize = localize;
  exports.normalizeRules = normalizeRules;
  exports.setInteractionMode = setInteractionMode;
  exports.validate = validate;
  exports.version = version;
  exports.withValidation = withValidation;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputSwitch.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputSwitch.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppInputSwitch_vue_vue_type_template_id_ee4784e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppInputSwitch.vue?vue&type=template&id=ee4784e4& */ "./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=template&id=ee4784e4&");
/* harmony import */ var _AppInputSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppInputSwitch.vue?vue&type=script&lang=js& */ "./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppInputSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppInputSwitch_vue_vue_type_template_id_ee4784e4___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppInputSwitch_vue_vue_type_template_id_ee4784e4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forms/Layouts/AppInputSwitch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputText.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputText.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppInputText_vue_vue_type_template_id_50a9af87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppInputText.vue?vue&type=template&id=50a9af87& */ "./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87&");
/* harmony import */ var _AppInputText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppInputText.vue?vue&type=script&lang=js& */ "./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppInputText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppInputText_vue_vue_type_template_id_50a9af87___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppInputText_vue_vue_type_template_id_50a9af87___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forms/Layouts/AppInputText.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Inputs/ImageInput.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Inputs/ImageInput.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageInput_vue_vue_type_template_id_635f0c4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageInput.vue?vue&type=template&id=635f0c4c& */ "./resources/js/components/Inputs/ImageInput.vue?vue&type=template&id=635f0c4c&");
/* harmony import */ var _ImageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageInput.vue?vue&type=script&lang=js& */ "./resources/js/components/Inputs/ImageInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageInput_vue_vue_type_template_id_635f0c4c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ImageInput_vue_vue_type_template_id_635f0c4c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Inputs/ImageInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Inputs/SelectInput.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Inputs/SelectInput.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectInput_vue_vue_type_template_id_3d763693_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectInput.vue?vue&type=template&id=3d763693&scoped=true& */ "./resources/js/components/Inputs/SelectInput.vue?vue&type=template&id=3d763693&scoped=true&");
/* harmony import */ var _SelectInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectInput.vue?vue&type=script&lang=js& */ "./resources/js/components/Inputs/SelectInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _SelectInput_vue_vue_type_style_index_0_id_3d763693_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectInput.vue?vue&type=style&index=0&id=3d763693&lang=scss&scoped=true& */ "./resources/js/components/Inputs/SelectInput.vue?vue&type=style&index=0&id=3d763693&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SelectInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectInput_vue_vue_type_template_id_3d763693_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectInput_vue_vue_type_template_id_3d763693_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3d763693",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Inputs/SelectInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Inputs/SwitchInput.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Inputs/SwitchInput.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true& */ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true&");
/* harmony import */ var _SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=script&lang=js& */ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true& */ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "537cb35b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Inputs/SwitchInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout/PageTab.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Layout/PageTab.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageTab_vue_vue_type_template_id_9d7e21a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTab.vue?vue&type=template&id=9d7e21a8& */ "./resources/js/components/Layout/PageTab.vue?vue&type=template&id=9d7e21a8&");
/* harmony import */ var _PageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTab.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout/PageTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageTab_vue_vue_type_template_id_9d7e21a8___WEBPACK_IMPORTED_MODULE_0__.render,
  _PageTab_vue_vue_type_template_id_9d7e21a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout/PageTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout/PageTabGroup.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Layout/PageTabGroup.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageTabGroup_vue_vue_type_template_id_11361d3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTabGroup.vue?vue&type=template&id=11361d3a&scoped=true& */ "./resources/js/components/Layout/PageTabGroup.vue?vue&type=template&id=11361d3a&scoped=true&");
/* harmony import */ var _PageTabGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTabGroup.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout/PageTabGroup.vue?vue&type=script&lang=js&");
/* harmony import */ var _PageTabGroup_vue_vue_type_style_index_0_id_11361d3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageTabGroup.vue?vue&type=style&index=0&id=11361d3a&lang=scss&scoped=true& */ "./resources/js/components/Layout/PageTabGroup.vue?vue&type=style&index=0&id=11361d3a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PageTabGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageTabGroup_vue_vue_type_template_id_11361d3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PageTabGroup_vue_vue_type_template_id_11361d3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11361d3a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout/PageTabGroup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UI/Labels/FormLabel.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/UI/Labels/FormLabel.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormLabel_vue_vue_type_template_id_3e75b5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=template&id=3e75b5c0& */ "./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0&");
/* harmony import */ var _FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLabel_vue_vue_type_template_id_3e75b5c0___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormLabel_vue_vue_type_template_id_3e75b5c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/Labels/FormLabel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UI/Others/InfoBox.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/UI/Others/InfoBox.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true& */ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true&");
/* harmony import */ var _InfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoBox.vue?vue&type=script&lang=js& */ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js&");
/* harmony import */ var _InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& */ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "51c5e09e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UI/Others/InfoBox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_5613cf50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5613cf50&scoped=true& */ "./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=template&id=5613cf50&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_5613cf50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=5613cf50&lang=scss&scoped=true& */ "./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=style&index=0&id=5613cf50&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5613cf50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_5613cf50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5613cf50",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppInputSwitch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppInputText.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Inputs/ImageInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Inputs/ImageInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImageInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/ImageInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Inputs/SelectInput.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Inputs/SelectInput.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SelectInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout/PageTab.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Layout/PageTab.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout/PageTabGroup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Layout/PageTabGroup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTabGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTabGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTabGroup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTabGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormLabel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=template&id=ee4784e4&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=template&id=ee4784e4& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputSwitch_vue_vue_type_template_id_ee4784e4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputSwitch_vue_vue_type_template_id_ee4784e4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputSwitch_vue_vue_type_template_id_ee4784e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppInputSwitch.vue?vue&type=template&id=ee4784e4& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputSwitch.vue?vue&type=template&id=ee4784e4&");


/***/ }),

/***/ "./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputText_vue_vue_type_template_id_50a9af87___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputText_vue_vue_type_template_id_50a9af87___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInputText_vue_vue_type_template_id_50a9af87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppInputText.vue?vue&type=template&id=50a9af87& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/Layouts/AppInputText.vue?vue&type=template&id=50a9af87&");


/***/ }),

/***/ "./resources/js/components/Inputs/ImageInput.vue?vue&type=template&id=635f0c4c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Inputs/ImageInput.vue?vue&type=template&id=635f0c4c& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_template_id_635f0c4c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_template_id_635f0c4c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_template_id_635f0c4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImageInput.vue?vue&type=template&id=635f0c4c& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/ImageInput.vue?vue&type=template&id=635f0c4c&");


/***/ }),

/***/ "./resources/js/components/Inputs/SelectInput.vue?vue&type=template&id=3d763693&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Inputs/SelectInput.vue?vue&type=template&id=3d763693&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectInput_vue_vue_type_template_id_3d763693_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectInput_vue_vue_type_template_id_3d763693_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectInput_vue_vue_type_template_id_3d763693_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectInput.vue?vue&type=template&id=3d763693&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SelectInput.vue?vue&type=template&id=3d763693&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_537cb35b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=template&id=537cb35b&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Layout/PageTab.vue?vue&type=template&id=9d7e21a8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Layout/PageTab.vue?vue&type=template&id=9d7e21a8& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTab_vue_vue_type_template_id_9d7e21a8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTab_vue_vue_type_template_id_9d7e21a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTab_vue_vue_type_template_id_9d7e21a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTab.vue?vue&type=template&id=9d7e21a8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTab.vue?vue&type=template&id=9d7e21a8&");


/***/ }),

/***/ "./resources/js/components/Layout/PageTabGroup.vue?vue&type=template&id=11361d3a&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Layout/PageTabGroup.vue?vue&type=template&id=11361d3a&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTabGroup_vue_vue_type_template_id_11361d3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTabGroup_vue_vue_type_template_id_11361d3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTabGroup_vue_vue_type_template_id_11361d3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTabGroup.vue?vue&type=template&id=11361d3a&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTabGroup.vue?vue&type=template&id=11361d3a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_3e75b5c0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_3e75b5c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_3e75b5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormLabel.vue?vue&type=template&id=3e75b5c0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Labels/FormLabel.vue?vue&type=template&id=3e75b5c0&");


/***/ }),

/***/ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_template_id_51c5e09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=template&id=51c5e09e&scoped=true&");


/***/ }),

/***/ "./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=template&id=5613cf50&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=template&id=5613cf50&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5613cf50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5613cf50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5613cf50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=5613cf50&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=template&id=5613cf50&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Inputs/SelectInput.vue?vue&type=style&index=0&id=3d763693&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Inputs/SelectInput.vue?vue&type=style&index=0&id=3d763693&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectInput_vue_vue_type_style_index_0_id_3d763693_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectInput.vue?vue&type=style&index=0&id=3d763693&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SelectInput.vue?vue&type=style&index=0&id=3d763693&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_537cb35b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Inputs/SwitchInput.vue?vue&type=style&index=0&id=537cb35b&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Layout/PageTabGroup.vue?vue&type=style&index=0&id=11361d3a&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Layout/PageTabGroup.vue?vue&type=style&index=0&id=11361d3a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTabGroup_vue_vue_type_style_index_0_id_11361d3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTabGroup.vue?vue&type=style&index=0&id=11361d3a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/PageTabGroup.vue?vue&type=style&index=0&id=11361d3a&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_51c5e09e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UI/Others/InfoBox.vue?vue&type=style&index=0&id=51c5e09e&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=style&index=0&id=5613cf50&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=style&index=0&id=5613cf50&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_5613cf50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=5613cf50&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Admin/Settings/AppSettingsTabs/Index.vue?vue&type=style&index=0&id=5613cf50&lang=scss&scoped=true&");


/***/ })

}]);