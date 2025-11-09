$(function () {
  if (window.PIE) {
    $(
      ".txt-button, .uiButton, .ui-button, .frmButton, .domain-submit, .button-checkout, .domain-search-box, .in, #page-header, #ndomins-list, .note2, .tab li a,  .faq, .modal_content, .gray-button, #ie6-header, #shopping-cart, #homepage-content #region-top .wide-left-column .view-plan .text,  #form_couponForm #input_coupon_code, .Cart-Total, #loginForm, #continue_id"
    ).each(function () {
      PIE.attach(this);
    });
  }
});
