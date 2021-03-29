/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

const events = {
    ADD_TO_CART: "add-to-cart",
    CUSTOM_URL: "custom-url",
    DATA_LAYER_CHANGE: "adobeDataLayer:change",
    DATA_LAYER_EVENT: "adobeDataLayer:event",
    INITIATE_CHECKOUT: "initiate-checkout",
    PAGE_ACTIVITY_SUMMARY: "page-activity-summary",
    PAGE_VIEW: "page-view",
    PLACE_ORDER: "place-order",
    PRODUCT_PAGE_VIEW: "product-page-view",
    RECS_ITEM_CLICK: "recs-item-click",
    RECS_ITEM_ADD_TO_CART_CLICK: "recs-item-add-to-cart-click",
    RECS_REQUEST_SENT: "recs-api-request-sent",
    RECS_RESPONSE_RECEIVED: "recs-api-response-received",
    RECS_UNIT_RENDER: "recs-unit-impression-render",
    RECS_UNIT_VIEW: "recs-unit-view",
    REFERRER_URL: "referrer-url",
    REMOVE_FROM_CART: "remove-from-cart",
    SEARCH_CATEGORY_CLICK: "search-category-click",
    SEARCH_PRODUCT_CLICK: "search-product-click",
    SEARCH_REQUEST_SENT: "search-request-sent",
    SEARCH_RESPONSE_RECEIVED: "search-response-received",
    SEARCH_RESULTS_VIEW: "search-results-view",
    SEARCH_SUGGESTION_CLICK: "search-suggestion-click",
    SHOPPING_CART_VIEW: "shopping-cart-view",
    SIGN_IN: "sign-in",
    SIGN_OUT: "sign-out",
    UPDATE_CART: "update-cart",
};

export default events;
